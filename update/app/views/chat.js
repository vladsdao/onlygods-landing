import { getClient } from '../lib/supabase.js';
import { auth } from '../lib/auth.js';
import { renderMessage } from '../components/chat-bubble.js';

export default class ChatView {
    constructor(container) {
        this.container = container;
        this.sb = getClient();
        this.channel = null;
        this.currentRoom = null;
        this.rooms = [];
        this.memberCache = {};
        this.messages = [];
        this.loading = false;
    }

    async render() {
        this.container.innerHTML = `
            <div class="view-chat">
                <div class="chat-sidebar" id="chat-sidebar">
                    <div class="chat-sidebar-header">
                        <span class="chat-sidebar-title">Rooms</span>
                    </div>
                    <div class="chat-room-list" id="room-list"></div>
                </div>
                <div class="chat-main" id="chat-main">
                    <div class="chat-header" id="chat-header">
                        <button class="chat-back-btn" id="chat-back" onclick="document.querySelector('.view-chat').classList.remove('room-open')">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
                        </button>
                        <span class="chat-room-name" id="chat-room-name">Select a room</span>
                    </div>
                    <div class="chat-messages" id="chat-messages">
                        <div class="chat-empty">Select a room to start chatting</div>
                    </div>
                    <div class="chat-input-bar" id="chat-input-bar" style="display:none">
                        <input type="text" class="chat-input" id="chat-input"
                               placeholder="Type a message..."
                               autocomplete="off">
                        <button class="chat-send" id="chat-send">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        `;

        await this._loadRooms();
        this._setupInput();
    }

    async _loadRooms() {
        const { data: rooms } = await this.sb
            .from('chat_rooms')
            .select('*')
            .eq('type', 'public')
            .order('created_at', { ascending: true });

        this.rooms = rooms || [];
        this._renderRoomList();

        // Auto-select first room
        if (this.rooms.length > 0) {
            this._selectRoom(this.rooms[0]);
        }
    }

    _renderRoomList() {
        const list = document.getElementById('room-list');
        if (!list) return;

        list.innerHTML = this.rooms.map((room) => `
            <div class="chat-room-item ${this.currentRoom?.id === room.id ? 'active' : ''}"
                 data-room-id="${room.id}">
                <div class="chat-room-icon">#</div>
                <div class="chat-room-info">
                    <div class="chat-room-name-item">${this._escapeHtml(room.name)}</div>
                    ${room.description ? `<div class="chat-room-desc">${this._escapeHtml(room.description)}</div>` : ''}
                </div>
            </div>
        `).join('');

        list.querySelectorAll('.chat-room-item').forEach((el) => {
            el.addEventListener('click', () => {
                const roomId = el.dataset.roomId;
                const room = this.rooms.find((r) => r.id === roomId);
                if (room) this._selectRoom(room);
            });
        });
    }

    async _selectRoom(room) {
        if (this.currentRoom?.id === room.id) return;

        // Unsubscribe from previous room
        if (this.channel) {
            this.sb.removeChannel(this.channel);
            this.channel = null;
        }

        this.currentRoom = room;
        this.messages = [];

        // Update UI
        const nameEl = document.getElementById('chat-room-name');
        if (nameEl) nameEl.textContent = '#' + room.name;

        const inputBar = document.getElementById('chat-input-bar');
        if (inputBar) inputBar.style.display = 'flex';

        // Mobile: show room view
        const chatView = this.container.querySelector('.view-chat');
        if (chatView) chatView.classList.add('room-open');

        // Update active state
        this._renderRoomList();

        // Load messages
        await this._loadMessages();

        // Subscribe to new messages
        this._subscribeRoom();
    }

    async _loadMessages() {
        const messagesEl = document.getElementById('chat-messages');
        if (!messagesEl) return;
        messagesEl.innerHTML = '<div class="chat-loading">Loading...</div>';

        const { data: messages } = await this.sb
            .from('chat_messages')
            .select('*')
            .eq('room_id', this.currentRoom.id)
            .is('deleted_at', null)
            .order('created_at', { ascending: false })
            .limit(50);

        if (!messages) {
            messagesEl.innerHTML = '<div class="chat-empty">No messages yet. Start the conversation!</div>';
            return;
        }

        // Reverse for chronological order
        this.messages = messages.reverse();

        // Load member data for all unique member_ids
        const memberIds = [...new Set(this.messages.map((m) => m.member_id))];
        await this._cacheMemberData(memberIds);

        this._renderMessages();
        this._scrollToBottom();
    }

    async _cacheMemberData(memberIds) {
        const uncached = memberIds.filter((id) => !this.memberCache[id]);
        if (uncached.length === 0) return;

        const { data: members } = await this.sb
            .from('members')
            .select('id, name, avatar_url, role')
            .in('id', uncached);

        if (members) {
            members.forEach((m) => { this.memberCache[m.id] = m; });
        }
    }

    _renderMessages() {
        const messagesEl = document.getElementById('chat-messages');
        if (!messagesEl) return;

        const memberId = auth.getMemberId();
        messagesEl.innerHTML = this.messages
            .map((msg) => renderMessage(msg, memberId, this.memberCache))
            .join('');
    }

    _subscribeRoom() {
        this.channel = this.sb.channel(`chat:${this.currentRoom.id}`)
            .on('postgres_changes', {
                event: 'INSERT',
                schema: 'public',
                table: 'chat_messages',
                filter: `room_id=eq.${this.currentRoom.id}`
            }, async (payload) => {
                const msg = payload.new;
                if (msg.deleted_at) return;

                // Cache member if needed
                if (!this.memberCache[msg.member_id]) {
                    await this._cacheMemberData([msg.member_id]);
                }

                this.messages.push(msg);
                const messagesEl = document.getElementById('chat-messages');
                if (messagesEl) {
                    // Remove "no messages" placeholder
                    const empty = messagesEl.querySelector('.chat-empty');
                    if (empty) empty.remove();

                    messagesEl.insertAdjacentHTML('beforeend',
                        renderMessage(msg, auth.getMemberId(), this.memberCache)
                    );
                    this._scrollToBottom();
                }
            })
            .subscribe();
    }

    _setupInput() {
        const input = document.getElementById('chat-input');
        const sendBtn = document.getElementById('chat-send');
        if (!input || !sendBtn) return;

        const send = async () => {
            const content = input.value.trim();
            if (!content || !this.currentRoom || !auth.isAuthenticated()) return;

            input.value = '';
            input.focus();

            await this.sb.from('chat_messages').insert({
                room_id: this.currentRoom.id,
                member_id: auth.getMemberId(),
                content,
                type: 'text'
            });
        };

        sendBtn.addEventListener('click', send);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                send();
            }
        });
    }

    _scrollToBottom() {
        const el = document.getElementById('chat-messages');
        if (el) el.scrollTop = el.scrollHeight;
    }

    _escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    destroy() {
        if (this.channel) {
            this.sb.removeChannel(this.channel);
            this.channel = null;
        }
    }
}
