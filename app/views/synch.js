import { getClient } from '../lib/supabase.js';
import { auth } from '../lib/auth.js';

// View modes
const MODE_LANDING = 'landing';
const MODE_ROOM = 'room';
const MODE_SOLO = 'solo';

// Room/session phases
const PHASE_LOBBY = 'lobby';
const PHASE_PRE = 'pre';
const PHASE_RUNNING = 'running';
const PHASE_POST = 'post';
const PHASE_DONE = 'done';

// Tabs
const TAB_FOCUS = 'focus';
const TAB_CIRCLE = 'circle';

export default class SynchView {
    constructor(container) {
        this.container = container;
        this.sb = getClient();
        this.mode = MODE_LANDING;
        this.phase = PHASE_LOBBY;
        this.activeTab = localStorage.getItem('synch_tab') || TAB_FOCUS;
        this.circleChainView = null;

        // Room state
        this.rooms = [];
        this.practices = [];
        this.currentRoom = null;
        this.roomMessages = [];
        this.roomParticipants = [];
        this.memberCache = {};

        // Session state
        this.timer = null;
        this.remaining = 0;
        this.duration = 0;
        this.preMood = null;
        this.preNote = '';
        this.postMood = null;
        this.postNote = '';
        this.selectedPractice = null;
        this.sessionCount = 0;

        // Audio
        this.audioEl = null;
        this.mediaRecorder = null;
        this.recordedChunks = [];
        this.isRecording = false;

        // Realtime
        this.channels = [];

        // Online presence
        this.activeParticipants = [];
    }

    async render() {
        // Render tab bar + content area
        this.container.innerHTML = '';

        const tabs = document.createElement('div');
        tabs.className = 'synch-tabs';

        const focusTab = document.createElement('button');
        focusTab.className = `synch-tab ${this.activeTab === TAB_FOCUS ? 'active' : ''}`;
        focusTab.dataset.tab = TAB_FOCUS;
        focusTab.textContent = 'Focus Link';

        const circleTab = document.createElement('button');
        circleTab.className = `synch-tab ${this.activeTab === TAB_CIRCLE ? 'active' : ''}`;
        circleTab.dataset.tab = TAB_CIRCLE;
        circleTab.textContent = 'Circle Chain';

        const badge = document.createElement('span');
        badge.id = 'cc-badge';
        badge.className = 'synch-tab-badge';
        badge.style.display = 'none';
        circleTab.appendChild(badge);

        tabs.appendChild(focusTab);
        tabs.appendChild(circleTab);
        this.container.appendChild(tabs);

        const content = document.createElement('div');
        content.id = 'synch-tab-content';
        this.container.appendChild(content);

        focusTab.addEventListener('click', () => this._switchTab(TAB_FOCUS));
        circleTab.addEventListener('click', () => this._switchTab(TAB_CIRCLE));

        await this._renderActiveTab();
    }

    async _switchTab(tab) {
        if (tab === this.activeTab) return;

        // Cleanup previous tab
        if (this.activeTab === TAB_FOCUS) {
            this._cleanupRoom();
        } else if (this.circleChainView) {
            this.circleChainView.destroy();
            this.circleChainView = null;
        }

        this.activeTab = tab;
        localStorage.setItem('synch_tab', tab);

        this.container.querySelectorAll('.synch-tab').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab);
        });

        await this._renderActiveTab();
    }

    async _renderActiveTab() {
        const content = document.getElementById('synch-tab-content');
        if (!content) return;

        if (this.activeTab === TAB_CIRCLE) {
            const { default: CircleChainView } = await import('./circle-chain.js');
            this.circleChainView = new CircleChainView(content);
            await this.circleChainView.render();
            this._checkCircleBadge();
        } else {
            await this._loadSessionCount();
            await this._loadLandingInto(content);
        }
    }

    async _checkCircleBadge() {
        const memberId = auth.getMemberId();
        if (!memberId) return;
        const { data } = await this.sb
            .from('circle_participants')
            .select('id')
            .eq('member_id', memberId)
            .eq('status', 'active')
            .limit(1);
        const badge = document.getElementById('cc-badge');
        if (badge) badge.style.display = (data && data.length > 0) ? 'inline-block' : 'none';
    }

    // ──────── LANDING ────────

    async _loadLanding() {
        const content = document.getElementById('synch-tab-content') || this.container;
        await this._loadLandingInto(content);
    }

    async _loadLandingInto(target) {
        this.mode = MODE_LANDING;
        this._cleanupRoom();

        target.innerHTML = `
            <div class="view-synch">
                <div class="synch-header">
                    <div class="synch-subtitle">Resonance Network</div>
                    <div class="synch-title">Synchronisation</div>
                </div>

                <div class="synch-participants" id="synch-participants">
                    <div class="synch-online">
                        <span class="live-dot"></span>
                        <span id="synch-count">0</span> online now
                    </div>
                    <div class="synch-avatars" id="synch-avatars"></div>
                </div>

                <div class="synch-section" id="rooms-section">
                    <div class="synch-section-title">Active Rooms</div>
                    <div class="synch-rooms-list" id="rooms-list">
                        <div class="synch-empty-text">No active rooms right now</div>
                    </div>
                </div>

                <div class="synch-section" id="library-section">
                    <div class="synch-section-title">Practice Library</div>
                    <div class="synch-library-grid" id="library-grid">
                        <div class="synch-empty-text">No practices yet</div>
                    </div>
                </div>

                <div class="synch-landing-actions" id="landing-actions"></div>

                <div class="synch-history" id="synch-history">
                    <div class="synch-history-title">Your Recent Sessions</div>
                    <div class="synch-history-list" id="synch-history-list"></div>
                </div>
            </div>
        `;

        await Promise.all([
            this._loadRooms(),
            this._loadPractices(),
            this._loadOnlineMembers(),
            this._loadHistory(),
        ]);

        this._renderLandingActions();
        this._subscribePresence();
        this._subscribeRooms();
        this._checkInviteCode();
    }

    _renderLandingActions() {
        const el = document.getElementById('landing-actions');
        if (!el) return;

        const canCreate = this.sessionCount >= 5 || auth.isAdmin();
        el.innerHTML = `
            ${canCreate ? `<button class="synch-action-btn" id="btn-create-room">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                Create Room
            </button>` : `<div class="synch-score-gate">Complete ${5 - this.sessionCount} more sessions to create rooms</div>`}
            ${auth.isAdmin() ? `
                <button class="synch-action-btn" id="btn-upload-practice">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                    Upload Practice
                </button>
                <button class="synch-action-btn" id="btn-record-practice">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                    Record Practice
                </button>
            ` : ''}
        `;

        document.getElementById('btn-create-room')?.addEventListener('click', () => this._showCreateRoom());
        document.getElementById('btn-upload-practice')?.addEventListener('click', () => this._showUploadPractice());
        document.getElementById('btn-record-practice')?.addEventListener('click', () => this._showRecordPractice());
    }

    async _loadRooms() {
        const { data } = await this.sb
            .from('sync_rooms')
            .select('*')
            .in('status', ['waiting', 'active'])
            .order('created_at', { ascending: false });

        this.rooms = data || [];
        const el = document.getElementById('rooms-list');
        if (!el) return;

        if (this.rooms.length === 0) {
            el.innerHTML = '<div class="synch-empty-text">No active rooms right now</div>';
            return;
        }

        el.innerHTML = this.rooms.map(r => `
            <div class="synch-room-card" data-room-id="${r.id}">
                <div class="synch-room-status ${r.status}">
                    <span class="live-dot"></span> ${r.status === 'active' ? 'In Session' : 'Waiting'}
                </div>
                <div class="synch-room-title">${this._esc(r.title)}</div>
                ${r.intention ? `<div class="synch-room-intention">${this._esc(r.intention)}</div>` : ''}
                <div class="synch-room-meta">
                    <span>by ${this._esc(r.creator_name || 'Unknown')}</span>
                    <span>${r.participant_count || 0} joined</span>
                    <span>${Math.round(r.duration_seconds / 60)} min</span>
                </div>
                <button class="synch-room-join-btn">Join</button>
            </div>
        `).join('');

        el.querySelectorAll('.synch-room-card').forEach(card => {
            card.querySelector('.synch-room-join-btn').addEventListener('click', () => {
                const room = this.rooms.find(r => r.id === card.dataset.roomId);
                if (room) this._joinRoom(room);
            });
        });
    }

    async _loadPractices() {
        const { data } = await this.sb
            .from('guided_practices')
            .select('*')
            .eq('is_published', true)
            .order('power_score', { ascending: false });

        this.practices = data || [];
        const el = document.getElementById('library-grid');
        if (!el) return;

        if (this.practices.length === 0) {
            el.innerHTML = '<div class="synch-empty-text">No practices yet</div>';
            return;
        }

        el.innerHTML = this.practices.map(p => `
            <div class="synch-practice-card" data-practice-id="${p.id}">
                <div class="synch-practice-title">${this._esc(p.title)}</div>
                ${p.description ? `<div class="synch-practice-desc">${this._esc(p.description)}</div>` : ''}
                <div class="synch-practice-meta">
                    <span>${Math.round(p.duration_seconds / 60)} min</span>
                    <span>by ${this._esc(p.leader_name || 'Unknown')}</span>
                </div>
                <div class="synch-practice-score">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ${p.power_score ? p.power_score.toFixed(1) : '—'}
                </div>
                <button class="synch-practice-play-btn">Solo Practice</button>
            </div>
        `).join('');

        el.querySelectorAll('.synch-practice-card').forEach(card => {
            card.querySelector('.synch-practice-play-btn').addEventListener('click', () => {
                const practice = this.practices.find(p => p.id === card.dataset.practiceId);
                if (practice) this._startSoloPractice(practice);
            });
        });
    }

    // ──────── CREATE ROOM ────────

    _showCreateRoom() {
        const existing = document.querySelector('.synch-create-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.className = 'synch-create-modal';
        modal.innerHTML = `
            <div class="synch-create-card">
                <div class="synch-create-title">Create Sync Room</div>
                <div class="form-group">
                    <label class="form-label">Title</label>
                    <input type="text" id="room-title" class="form-input" placeholder="e.g. Morning focus" maxlength="80">
                </div>
                <div class="form-group">
                    <label class="form-label">Intention (optional)</label>
                    <textarea id="room-intention" class="form-textarea" rows="2" placeholder="What is the collective intention?"></textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">Duration</label>
                    <select id="room-duration" class="form-select">
                        <option value="300">5 min</option>
                        <option value="600" selected>10 min</option>
                        <option value="900">15 min</option>
                        <option value="1200">20 min</option>
                        <option value="1800">30 min</option>
                    </select>
                </div>
                ${this.practices.length > 0 ? `
                <div class="form-group">
                    <label class="form-label">Guided Practice (optional)</label>
                    <select id="room-practice" class="form-select">
                        <option value="">None — silent session</option>
                        ${this.practices.map(p => `<option value="${p.id}">${this._esc(p.title)} (${Math.round(p.duration_seconds / 60)} min)</option>`).join('')}
                    </select>
                </div>
                ` : ''}
                <div class="form-actions">
                    <button class="form-btn form-btn-primary" id="btn-confirm-create">Create</button>
                    <button class="form-btn form-btn-secondary" id="btn-cancel-create">Cancel</button>
                </div>
            </div>
        `;

        this.container.querySelector('.view-synch').appendChild(modal);

        document.getElementById('btn-confirm-create').addEventListener('click', () => this._createRoom());
        document.getElementById('btn-cancel-create').addEventListener('click', () => modal.remove());
    }

    async _createRoom() {
        const title = document.getElementById('room-title')?.value?.trim();
        if (!title) return;

        const intention = document.getElementById('room-intention')?.value?.trim() || null;
        const duration = parseInt(document.getElementById('room-duration')?.value || '600');
        const practiceId = document.getElementById('room-practice')?.value || null;
        const member = auth.getMember();

        const { data: room, error } = await this.sb
            .from('sync_rooms')
            .insert({
                creator_id: auth.getMemberId(),
                title,
                intention,
                duration_seconds: duration,
                practice_id: practiceId || null,
                creator_name: member?.name || 'Unknown',
                creator_avatar_url: member?.avatar_url || null,
            })
            .select()
            .single();

        if (error) {
            console.error('Create room error:', error);
            return;
        }

        document.querySelector('.synch-create-modal')?.remove();
        await this._joinRoom(room);
    }

    // ──────── JOIN ROOM ────────

    async _joinRoom(room) {
        this.mode = MODE_ROOM;
        this.currentRoom = room;
        this.phase = room.status === 'active' ? PHASE_RUNNING : PHASE_LOBBY;
        this.roomMessages = [];
        this.roomParticipants = [];

        // Insert self as participant
        await this.sb.from('sync_room_participants').upsert({
            room_id: room.id,
            member_id: auth.getMemberId(),
        }, { onConflict: 'room_id,member_id' });

        // Update participant count
        await this.sb.from('sync_rooms').update({
            participant_count: (room.participant_count || 0) + 1
        }).eq('id', room.id);

        this._renderRoom();
        await this._loadRoomData();
        this._subscribeRoomLive();
    }

    _renderRoom() {
        const room = this.currentRoom;
        const isCreator = room.creator_id === auth.getMemberId();

        this.container.innerHTML = `
            <div class="view-synch">
                <div class="synch-room-header">
                    <button class="synch-room-back" id="btn-back-landing">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
                    </button>
                    <div>
                        <div class="synch-room-header-title">${this._esc(room.title)}</div>
                        ${room.intention ? `<div class="synch-room-header-intention">${this._esc(room.intention)}</div>` : ''}
                    </div>
                </div>

                <div class="synch-invite-bar" id="invite-bar">
                    <span>Invite: </span>
                    <code id="invite-link">${location.origin}${location.pathname}#/synch?room=${room.invite_code}</code>
                    <button class="synch-copy-btn" id="btn-copy-invite">Copy</button>
                </div>

                <div class="synch-participant-list" id="room-participants"></div>

                <div class="synch-body" id="synch-body"></div>
            </div>
        `;

        document.getElementById('btn-back-landing').addEventListener('click', () => this._leaveLanding());
        document.getElementById('btn-copy-invite')?.addEventListener('click', () => {
            const link = document.getElementById('invite-link')?.textContent;
            if (link) navigator.clipboard?.writeText(link);
            const btn = document.getElementById('btn-copy-invite');
            if (btn) { btn.textContent = 'Copied!'; setTimeout(() => btn.textContent = 'Copy', 2000); }
        });

        this._renderRoomPhase();
    }

    _renderRoomPhase() {
        const body = document.getElementById('synch-body');
        if (!body) return;
        const isCreator = this.currentRoom?.creator_id === auth.getMemberId();

        if (this.phase === PHASE_LOBBY) {
            body.innerHTML = `
                <div class="synch-room-chat" id="room-chat">
                    <div class="synch-room-chat-messages" id="room-chat-messages"></div>
                    <div class="synch-room-chat-input">
                        <input type="text" id="room-chat-input" class="form-input" placeholder="Say something...">
                        <button class="synch-room-chat-send" id="btn-room-send">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        </button>
                    </div>
                </div>
                <div class="synch-controls">
                    ${isCreator
                        ? `<button class="synch-start-btn" id="btn-start-room-session">Start Session</button>`
                        : `<div class="synch-waiting-text">Waiting for creator to start...</div>`
                    }
                </div>
            `;

            this._setupRoomChat();
            this._renderRoomMessages();

            if (isCreator) {
                document.getElementById('btn-start-room-session')?.addEventListener('click', () => this._startRoomSession());
            }

        } else if (this.phase === PHASE_PRE) {
            body.innerHTML = `
                <div class="synch-reflection">
                    <div class="synch-reflection-title">Before we begin</div>
                    <div class="synch-reflection-subtitle">How are you feeling right now?</div>
                    <div class="synch-mood-scale" id="pre-mood-scale">
                        ${Array.from({length: 10}, (_, i) => `<button class="mood-btn ${this.preMood === i+1 ? 'active' : ''}" data-mood="${i+1}">${i+1}</button>`).join('')}
                    </div>
                    <div class="synch-mood-labels"><span>low</span><span>high</span></div>
                    <textarea class="form-textarea synch-note-input" id="pre-note" placeholder="A few words about your state (optional)" rows="2">${this.preNote}</textarea>
                    <div class="synch-controls">
                        <button class="synch-start-btn" id="btn-begin-synch" ${this.preMood ? '' : 'disabled'}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                            <span>Begin</span>
                        </button>
                    </div>
                </div>
            `;

            body.querySelectorAll('#pre-mood-scale .mood-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    body.querySelectorAll('#pre-mood-scale .mood-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.preMood = parseInt(btn.dataset.mood);
                    document.getElementById('btn-begin-synch').disabled = false;
                });
            });
            document.getElementById('pre-note')?.addEventListener('input', (e) => { this.preNote = e.target.value; });
            document.getElementById('btn-begin-synch')?.addEventListener('click', () => {
                // Save pre-mood to participant
                this.sb.from('sync_room_participants').update({ pre_mood: this.preMood })
                    .eq('room_id', this.currentRoom.id)
                    .eq('member_id', auth.getMemberId());
                this._startTimer();
            });

        } else if (this.phase === PHASE_RUNNING) {
            body.innerHTML = `
                <div class="synch-timer-wrap">
                    <div class="synch-timer-ring">
                        <svg viewBox="0 0 200 200" class="synch-ring-svg">
                            <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(0,0,0,0.04)" stroke-width="2"/>
                            <circle cx="100" cy="100" r="90" fill="none" stroke="var(--text)" stroke-width="2"
                                    stroke-dasharray="565.49" stroke-dashoffset="0" stroke-linecap="round"
                                    id="synch-progress" transform="rotate(-90 100 100)"/>
                        </svg>
                        <div class="synch-timer-display">
                            <div class="synch-timer-time" id="synch-time">00:00</div>
                            <div class="synch-timer-label">Synchronising...</div>
                        </div>
                    </div>
                </div>
                <div class="synch-running-info">
                    ${this.roomParticipants.length} participant${this.roomParticipants.length !== 1 ? 's' : ''} syncing
                </div>
                ${this.selectedPractice?.audio_url ? `<div id="audio-container"></div>` : ''}
                <div class="synch-controls">
                    <button class="synch-stop-btn" id="btn-synch-stop">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                        <span>Stop</span>
                    </button>
                </div>
            `;

            this._updateDisplay();
            if (this.selectedPractice?.audio_url) this._playAudio(this.selectedPractice.audio_url);
            document.getElementById('btn-synch-stop')?.addEventListener('click', () => this._stop());

        } else if (this.phase === PHASE_POST) {
            body.innerHTML = `
                <div class="synch-reflection">
                    <div class="synch-reflection-title">Session Complete</div>
                    <div class="synch-reflection-subtitle">How do you feel now?</div>
                    <div class="synch-mood-scale" id="post-mood-scale">
                        ${Array.from({length: 10}, (_, i) => `<button class="mood-btn ${this.postMood === i+1 ? 'active' : ''}" data-mood="${i+1}">${i+1}</button>`).join('')}
                    </div>
                    <div class="synch-mood-labels"><span>low</span><span>high</span></div>
                    <textarea class="form-textarea synch-note-input" id="post-note" placeholder="How was the experience? (optional)" rows="2">${this.postNote}</textarea>
                    <div class="synch-controls">
                        <button class="synch-start-btn" id="btn-save-reflection" ${this.postMood ? '' : 'disabled'}>Save & Continue</button>
                    </div>
                </div>
            `;

            body.querySelectorAll('#post-mood-scale .mood-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    body.querySelectorAll('#post-mood-scale .mood-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.postMood = parseInt(btn.dataset.mood);
                    document.getElementById('btn-save-reflection').disabled = false;
                });
            });
            document.getElementById('post-note')?.addEventListener('input', (e) => { this.postNote = e.target.value; });
            document.getElementById('btn-save-reflection')?.addEventListener('click', () => this._saveSession());

        } else if (this.phase === PHASE_DONE) {
            const diff = (this.postMood || 0) - (this.preMood || 0);
            const diffText = diff > 0 ? `+${diff}` : String(diff);
            body.innerHTML = `
                <div class="synch-done">
                    <div class="synch-done-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#30d158" stroke-width="1.5"><path d="M20 6L9 17l-5-5"/></svg>
                    </div>
                    <div class="synch-done-text">Session saved</div>
                    <div class="synch-done-stats">
                        <span>Before: ${this.preMood}/10</span>
                        <span>After: ${this.postMood}/10</span>
                        <span class="synch-done-diff ${diff > 0 ? 'positive' : diff < 0 ? 'negative' : ''}">${diffText}</span>
                    </div>
                </div>
                ${this.mode === MODE_ROOM ? `
                    <div class="synch-room-chat" id="room-chat">
                        <div class="synch-section-title">Post-Session Chat</div>
                        <div class="synch-room-chat-messages" id="room-chat-messages"></div>
                        <div class="synch-room-chat-input">
                            <input type="text" id="room-chat-input" class="form-input" placeholder="Share your experience...">
                            <button class="synch-room-chat-send" id="btn-room-send">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                            </button>
                        </div>
                    </div>
                    <div class="synch-controls">
                        <button class="synch-start-btn" id="btn-leave-room">Leave Room</button>
                    </div>
                ` : `
                    <div class="synch-controls">
                        <button class="synch-start-btn" id="btn-back-to-landing">Back to Synch</button>
                    </div>
                `}
            `;

            if (this.mode === MODE_ROOM) {
                this._setupRoomChat();
                this._renderRoomMessages();
                document.getElementById('btn-leave-room')?.addEventListener('click', () => this._leaveLanding());
            } else {
                document.getElementById('btn-back-to-landing')?.addEventListener('click', () => this._loadLanding());
            }
        }
    }

    // ──────── ROOM SESSION ────────

    async _startRoomSession() {
        // Update room status to active
        await this.sb.from('sync_rooms').update({
            status: 'active',
            started_at: new Date().toISOString()
        }).eq('id', this.currentRoom.id);

        this.currentRoom.status = 'active';

        // Load practice if set
        if (this.currentRoom.practice_id) {
            const { data } = await this.sb.from('guided_practices')
                .select('*').eq('id', this.currentRoom.practice_id).single();
            if (data) this.selectedPractice = data;
        }

        this.duration = this.currentRoom.duration_seconds;
        this.remaining = this.duration;
        this.phase = PHASE_PRE;
        this._renderRoomPhase();
    }

    // ──────── SOLO PRACTICE ────────

    _startSoloPractice(practice) {
        this.mode = MODE_SOLO;
        this.selectedPractice = practice;
        this.duration = practice.duration_seconds;
        this.remaining = this.duration;
        this.preMood = null;
        this.preNote = '';
        this.postMood = null;
        this.postNote = '';

        this.container.innerHTML = `
            <div class="view-synch">
                <div class="synch-room-header">
                    <button class="synch-room-back" id="btn-back-landing">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
                    </button>
                    <div>
                        <div class="synch-room-header-title">${this._esc(practice.title)}</div>
                        <div class="synch-room-header-intention">${Math.round(practice.duration_seconds / 60)} min · Solo Practice</div>
                    </div>
                </div>
                <div class="synch-body" id="synch-body"></div>
            </div>
        `;

        document.getElementById('btn-back-landing')?.addEventListener('click', () => this._loadLanding());
        this.phase = PHASE_PRE;
        this._renderRoomPhase();
    }

    // ──────── TIMER ────────

    _startTimer() {
        this.phase = PHASE_RUNNING;
        this.remaining = this.duration;
        this._renderRoomPhase();
        this._announceActive(true);

        this.timer = setInterval(() => {
            this.remaining--;
            this._updateDisplay();
            if (this.remaining <= 0) this._complete();
        }, 1000);
    }

    _stop() {
        clearInterval(this.timer);
        this.timer = null;
        this._stopAudio();
        this._announceActive(false);
        if (this.mode === MODE_ROOM) {
            this.phase = PHASE_LOBBY;
            this._renderRoomPhase();
        } else {
            this._loadLanding();
        }
    }

    _complete() {
        clearInterval(this.timer);
        this.timer = null;
        this._stopAudio();
        if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
        this._announceActive(false);
        this.phase = PHASE_POST;
        this._renderRoomPhase();
    }

    _updateDisplay() {
        const timeEl = document.getElementById('synch-time');
        const progressEl = document.getElementById('synch-progress');
        if (!timeEl) return;

        const min = Math.floor(this.remaining / 60);
        const sec = this.remaining % 60;
        timeEl.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

        if (progressEl && this.duration > 0) {
            const circumference = 2 * Math.PI * 90;
            const progress = this.remaining / this.duration;
            progressEl.setAttribute('stroke-dashoffset', String(circumference * (1 - progress)));
        }
    }

    // ──────── SAVE SESSION ────────

    async _saveSession() {
        const memberId = auth.getMemberId();

        // Save sync session
        await this.sb.from('sync_sessions').insert({
            member_id: memberId,
            duration_seconds: this.duration,
            completed: true,
            pre_mood: this.preMood,
            pre_note: this.preNote || null,
            post_mood: this.postMood,
            post_note: this.postNote || null,
            practice_id: this.selectedPractice?.id || null,
            room_id: this.currentRoom?.id || null,
            session_type: this.mode === MODE_ROOM ? 'room' : 'solo',
        });

        // Update participant post mood if in room
        if (this.mode === MODE_ROOM && this.currentRoom) {
            await this.sb.from('sync_room_participants').update({ post_mood: this.postMood })
                .eq('room_id', this.currentRoom.id)
                .eq('member_id', memberId);
        }

        // Update practice usage stats
        if (this.selectedPractice) {
            await this.sb.from('guided_practices').update({
                times_used: (this.selectedPractice.times_used || 0) + 1,
            }).eq('id', this.selectedPractice.id);
        }

        await this.sb.from('members').update({
            activity_status: 'online',
            last_seen: new Date().toISOString()
        }).eq('id', memberId);

        this.sessionCount++;
        this.phase = PHASE_DONE;
        this._renderRoomPhase();
    }

    // ──────── ROOM CHAT ────────

    _setupRoomChat() {
        setTimeout(() => {
            const input = document.getElementById('room-chat-input');
            const sendBtn = document.getElementById('btn-room-send');
            if (!input || !sendBtn) return;

            const send = async () => {
                const content = input.value.trim();
                if (!content || !this.currentRoom) return;
                input.value = '';

                await this.sb.from('sync_room_messages').insert({
                    room_id: this.currentRoom.id,
                    member_id: auth.getMemberId(),
                    content,
                });
            };

            sendBtn.addEventListener('click', send);
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
            });
        }, 50);
    }

    _renderRoomMessages() {
        const el = document.getElementById('room-chat-messages');
        if (!el) return;

        if (this.roomMessages.length === 0) {
            el.innerHTML = '<div class="synch-empty-text" style="padding:12px;text-align:center">No messages yet</div>';
            return;
        }

        el.innerHTML = this.roomMessages.map(msg => {
            const m = this.memberCache[msg.member_id];
            const isMe = msg.member_id === auth.getMemberId();
            return `<div class="synch-room-msg ${isMe ? 'mine' : ''}">
                <span class="synch-room-msg-name">${this._esc(m?.name || 'Unknown')}</span>
                <span class="synch-room-msg-text">${this._esc(msg.content)}</span>
            </div>`;
        }).join('');

        el.scrollTop = el.scrollHeight;
    }

    // ──────── ROOM DATA ────────

    async _loadRoomData() {
        if (!this.currentRoom) return;

        // Load participants
        const { data: parts } = await this.sb
            .from('sync_room_participants')
            .select('member_id')
            .eq('room_id', this.currentRoom.id);

        const memberIds = (parts || []).map(p => p.member_id);
        await this._cacheMemberData(memberIds);
        this.roomParticipants = parts || [];
        this._renderRoomParticipants();

        // Load messages
        const { data: msgs } = await this.sb
            .from('sync_room_messages')
            .select('*')
            .eq('room_id', this.currentRoom.id)
            .order('created_at', { ascending: true })
            .limit(100);

        this.roomMessages = msgs || [];
        const newMemberIds = [...new Set(this.roomMessages.map(m => m.member_id))];
        await this._cacheMemberData(newMemberIds);
        this._renderRoomMessages();
    }

    _renderRoomParticipants() {
        const el = document.getElementById('room-participants');
        if (!el) return;

        el.innerHTML = this.roomParticipants.map(p => {
            const m = this.memberCache[p.member_id];
            if (!m) return '';
            return `<div class="synch-p-item">
                ${m.avatar_url
                    ? `<img class="synch-p-avatar" src="${m.avatar_url}" alt="">`
                    : `<div class="synch-p-avatar synch-p-avatar-placeholder">${(m.name || '?').charAt(0).toUpperCase()}</div>`
                }
                <span class="synch-p-name">${this._esc(m.name)}</span>
            </div>`;
        }).join('');
    }

    // ──────── AUDIO ────────

    _playAudio(url) {
        this._stopAudio();
        const container = document.getElementById('audio-container');
        if (!container) return;

        this.audioEl = document.createElement('audio');
        this.audioEl.src = url;
        this.audioEl.style.display = 'none';
        container.appendChild(this.audioEl);

        this.audioEl.play().catch(() => {
            // Autoplay blocked — show play button
            container.innerHTML = `<button class="synch-action-btn" id="btn-play-audio">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Play guided audio
            </button>`;
            document.getElementById('btn-play-audio')?.addEventListener('click', () => {
                this.audioEl = new Audio(url);
                this.audioEl.play();
                container.innerHTML = '<div style="text-align:center;color:#86868b;font-size:13px">Audio playing...</div>';
            });
        });
    }

    _stopAudio() {
        if (this.audioEl) {
            this.audioEl.pause();
            this.audioEl.src = '';
            this.audioEl = null;
        }
    }

    // ──────── UPLOAD PRACTICE (Admin) ────────

    _showUploadPractice() {
        const existing = document.querySelector('.synch-create-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.className = 'synch-create-modal';
        modal.innerHTML = `
            <div class="synch-create-card">
                <div class="synch-create-title">Upload Practice</div>
                <div class="form-group">
                    <label class="form-label">Title</label>
                    <input type="text" id="practice-title" class="form-input" placeholder="e.g. Morning Awakening">
                </div>
                <div class="form-group">
                    <label class="form-label">Description</label>
                    <textarea id="practice-desc" class="form-textarea" rows="2" placeholder="Brief description"></textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">Audio File (mp3, wav, m4a)</label>
                    <div class="synch-upload-area" id="upload-area">
                        <input type="file" id="practice-file" accept="audio/*" style="display:none">
                        <button class="synch-action-btn" id="btn-select-file">Choose File</button>
                        <div id="file-name" style="margin-top:8px;color:#86868b;font-size:13px"></div>
                    </div>
                </div>
                <div class="form-actions">
                    <button class="form-btn form-btn-primary" id="btn-confirm-upload" disabled>Upload</button>
                    <button class="form-btn form-btn-secondary" id="btn-cancel-upload">Cancel</button>
                </div>
            </div>
        `;

        this.container.querySelector('.view-synch').appendChild(modal);

        const fileInput = document.getElementById('practice-file');
        let selectedFile = null;
        let audioDuration = 0;

        document.getElementById('btn-select-file')?.addEventListener('click', () => fileInput?.click());
        fileInput?.addEventListener('change', (e) => {
            selectedFile = e.target.files?.[0];
            if (selectedFile) {
                document.getElementById('file-name').textContent = selectedFile.name;
                document.getElementById('btn-confirm-upload').disabled = false;
                // Get duration
                const tempAudio = new Audio();
                tempAudio.src = URL.createObjectURL(selectedFile);
                tempAudio.addEventListener('loadedmetadata', () => {
                    audioDuration = Math.round(tempAudio.duration);
                    URL.revokeObjectURL(tempAudio.src);
                });
            }
        });

        document.getElementById('btn-confirm-upload')?.addEventListener('click', async () => {
            if (!selectedFile) return;
            const title = document.getElementById('practice-title')?.value?.trim();
            if (!title) return;
            const desc = document.getElementById('practice-desc')?.value?.trim() || null;
            const member = auth.getMember();

            // Upload to storage
            const ext = selectedFile.name.split('.').pop() || 'mp3';
            const path = `practices/${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;

            const { error: uploadErr } = await this.sb.storage
                .from('practices')
                .upload(path, selectedFile, { contentType: selectedFile.type });

            if (uploadErr) {
                console.error('Upload error:', uploadErr);
                return;
            }

            const { data: { publicUrl } } = this.sb.storage.from('practices').getPublicUrl(path);

            await this.sb.from('guided_practices').insert({
                leader_id: auth.getMemberId(),
                title,
                description: desc,
                duration_seconds: audioDuration || 600,
                audio_url: publicUrl,
                audio_format: ext,
                is_prebuilt: false,
                leader_name: member?.name || 'Unknown',
                leader_avatar_url: member?.avatar_url || null,
            });

            modal.remove();
            await this._loadPractices();
        });

        document.getElementById('btn-cancel-upload')?.addEventListener('click', () => modal.remove());
    }

    // ──────── RECORD PRACTICE (Admin) ────────

    _showRecordPractice() {
        const existing = document.querySelector('.synch-create-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.className = 'synch-create-modal';
        modal.innerHTML = `
            <div class="synch-create-card">
                <div class="synch-create-title">Record Practice</div>
                <div class="form-group">
                    <label class="form-label">Title</label>
                    <input type="text" id="rec-title" class="form-input" placeholder="e.g. Guided Breathwork">
                </div>
                <div class="form-group">
                    <label class="form-label">Description</label>
                    <textarea id="rec-desc" class="form-textarea" rows="2" placeholder="Brief description"></textarea>
                </div>
                <div id="rec-status" style="text-align:center;padding:20px;">
                    <button class="synch-action-btn" id="btn-start-rec" style="background:#ff3b30;color:#fff;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8"/></svg>
                        Start Recording
                    </button>
                </div>
                <div class="form-actions">
                    <button class="form-btn form-btn-primary" id="btn-save-rec" disabled>Save Practice</button>
                    <button class="form-btn form-btn-secondary" id="btn-cancel-rec">Cancel</button>
                </div>
            </div>
        `;

        this.container.querySelector('.view-synch').appendChild(modal);
        this.recordedChunks = [];

        document.getElementById('btn-start-rec')?.addEventListener('click', () => this._toggleRecording());
        document.getElementById('btn-save-rec')?.addEventListener('click', () => this._saveRecording());
        document.getElementById('btn-cancel-rec')?.addEventListener('click', () => {
            this._stopRecording();
            modal.remove();
        });
    }

    async _toggleRecording() {
        if (this.isRecording) {
            this._stopRecording();
            return;
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            // MIME type with fallback for iOS Safari
            const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm'
                : MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '';

            this.mediaRecorder = new MediaRecorder(stream, mimeType ? { mimeType } : {});
            this.recordedChunks = [];
            this._recStartTime = Date.now();

            this.mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) this.recordedChunks.push(e.data);
            };

            this.mediaRecorder.onstop = () => {
                stream.getTracks().forEach(t => t.stop());
                document.getElementById('btn-save-rec').disabled = false;
            };

            this.mediaRecorder.start(1000);
            this.isRecording = true;

            const statusEl = document.getElementById('rec-status');
            if (statusEl) {
                statusEl.innerHTML = `
                    <div class="synch-recording-indicator">
                        <span class="recording-dot"></span> Recording...
                    </div>
                    <button class="synch-action-btn" id="btn-stop-rec" style="margin-top:12px">Stop Recording</button>
                `;
                document.getElementById('btn-stop-rec')?.addEventListener('click', () => this._stopRecording());
            }
        } catch (err) {
            console.error('Mic access denied:', err);
        }
    }

    _stopRecording() {
        if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
            this.mediaRecorder.stop();
        }
        this.isRecording = false;

        const statusEl = document.getElementById('rec-status');
        if (statusEl && this.recordedChunks.length > 0) {
            const dur = Math.round((Date.now() - this._recStartTime) / 1000);
            statusEl.innerHTML = `<div style="color:#30d158">Recording complete (${Math.round(dur / 60)}:${String(dur % 60).padStart(2, '0')})</div>`;
        }
    }

    async _saveRecording() {
        if (this.recordedChunks.length === 0) return;

        const title = document.getElementById('rec-title')?.value?.trim();
        if (!title) return;
        const desc = document.getElementById('rec-desc')?.value?.trim() || null;
        const member = auth.getMember();

        const mimeType = this.recordedChunks[0].type || 'audio/webm';
        const ext = mimeType.includes('mp4') ? 'm4a' : 'webm';
        const blob = new Blob(this.recordedChunks, { type: mimeType });
        const path = `practices/${Date.now()}_rec.${ext}`;

        const { error: uploadErr } = await this.sb.storage
            .from('practices')
            .upload(path, blob, { contentType: mimeType });

        if (uploadErr) {
            console.error('Recording upload error:', uploadErr);
            return;
        }

        const { data: { publicUrl } } = this.sb.storage.from('practices').getPublicUrl(path);
        const duration = Math.round((Date.now() - this._recStartTime) / 1000);

        await this.sb.from('guided_practices').insert({
            leader_id: auth.getMemberId(),
            title,
            description: desc,
            duration_seconds: duration,
            audio_url: publicUrl,
            audio_format: ext,
            is_prebuilt: false,
            leader_name: member?.name || 'Unknown',
            leader_avatar_url: member?.avatar_url || null,
        });

        document.querySelector('.synch-create-modal')?.remove();
        this.recordedChunks = [];
        await this._loadPractices();
    }

    // ──────── INVITE CODE ────────

    _checkInviteCode() {
        const hash = location.hash;
        const match = hash.match(/room=([a-zA-Z0-9]+)/);
        if (!match) return;

        const code = match[1];
        // Clean the hash
        location.hash = '#/synch';

        // Find room by invite code
        const room = this.rooms.find(r => r.invite_code === code);
        if (room) {
            this._joinRoom(room);
        } else {
            // Try to load room directly
            this.sb.from('sync_rooms')
                .select('*')
                .eq('invite_code', code)
                .in('status', ['waiting', 'active'])
                .single()
                .then(({ data }) => {
                    if (data) this._joinRoom(data);
                });
        }
    }

    // ──────── SUBSCRIPTIONS ────────

    _subscribePresence() {
        const ch = this.sb.channel('synch-presence')
            .on('postgres_changes', {
                event: 'UPDATE', schema: 'public', table: 'members',
                filter: 'activity_status=in.online,in_practice'
            }, () => this._loadOnlineMembers())
            .subscribe();
        this.channels.push(ch);
    }

    _subscribeRooms() {
        const ch = this.sb.channel('synch-rooms')
            .on('postgres_changes', {
                event: '*', schema: 'public', table: 'sync_rooms'
            }, () => {
                if (this.mode === MODE_LANDING) this._loadRooms();
            })
            .subscribe();
        this.channels.push(ch);
    }

    _subscribeRoomLive() {
        if (!this.currentRoom) return;

        // Messages
        const msgCh = this.sb.channel(`room-msg:${this.currentRoom.id}`)
            .on('postgres_changes', {
                event: 'INSERT', schema: 'public', table: 'sync_room_messages',
                filter: `room_id=eq.${this.currentRoom.id}`
            }, async (payload) => {
                const msg = payload.new;
                if (!this.memberCache[msg.member_id]) {
                    await this._cacheMemberData([msg.member_id]);
                }
                this.roomMessages.push(msg);
                this._renderRoomMessages();
            })
            .subscribe();
        this.channels.push(msgCh);

        // Participants
        const partCh = this.sb.channel(`room-part:${this.currentRoom.id}`)
            .on('postgres_changes', {
                event: 'INSERT', schema: 'public', table: 'sync_room_participants',
                filter: `room_id=eq.${this.currentRoom.id}`
            }, () => this._loadRoomData())
            .subscribe();
        this.channels.push(partCh);

        // Room status (for non-creators to detect session start)
        const roomCh = this.sb.channel(`room-status:${this.currentRoom.id}`)
            .on('postgres_changes', {
                event: 'UPDATE', schema: 'public', table: 'sync_rooms',
                filter: `id=eq.${this.currentRoom.id}`
            }, (payload) => {
                const updated = payload.new;
                this.currentRoom = { ...this.currentRoom, ...updated };
                if (updated.status === 'active' && this.phase === PHASE_LOBBY) {
                    // Creator started the session
                    if (this.currentRoom.practice_id) {
                        this.sb.from('guided_practices')
                            .select('*').eq('id', this.currentRoom.practice_id).single()
                            .then(({ data }) => {
                                if (data) this.selectedPractice = data;
                                this.duration = this.currentRoom.duration_seconds;
                                this.remaining = this.duration;
                                this.phase = PHASE_PRE;
                                this._renderRoomPhase();
                            });
                    } else {
                        this.duration = this.currentRoom.duration_seconds;
                        this.remaining = this.duration;
                        this.phase = PHASE_PRE;
                        this._renderRoomPhase();
                    }
                }
            })
            .subscribe();
        this.channels.push(roomCh);
    }

    // ──────── HELPERS ────────

    async _loadSessionCount() {
        const { count } = await this.sb
            .from('sync_sessions')
            .select('*', { count: 'exact', head: true })
            .eq('member_id', auth.getMemberId())
            .eq('completed', true);
        this.sessionCount = count || 0;
    }

    async _loadOnlineMembers() {
        const { data } = await this.sb
            .from('members')
            .select('id, name, avatar_url, activity_status')
            .in('activity_status', ['online', 'in_practice'])
            .order('last_seen', { ascending: false })
            .limit(20);

        this.activeParticipants = data || [];
        this._renderOnlineMembers();
    }

    _renderOnlineMembers() {
        const countEl = document.getElementById('synch-count');
        const avatarsEl = document.getElementById('synch-avatars');
        if (!countEl || !avatarsEl) return;

        countEl.textContent = this.activeParticipants.length;
        avatarsEl.innerHTML = this.activeParticipants.slice(0, 8).map(m => `
            <div class="synch-avatar ${m.activity_status === 'in_practice' ? 'in-practice' : ''}">
                ${m.avatar_url
                    ? `<img src="${m.avatar_url}" alt="${m.name}" title="${m.name}">`
                    : `<span title="${m.name}">${m.name.charAt(0).toUpperCase()}</span>`
                }
            </div>
        `).join('') + (this.activeParticipants.length > 8 ? `<div class="synch-avatar-more">+${this.activeParticipants.length - 8}</div>` : '');
    }

    async _loadHistory() {
        const { data } = await this.sb
            .from('sync_sessions')
            .select('*')
            .eq('member_id', auth.getMemberId())
            .eq('completed', true)
            .order('created_at', { ascending: false })
            .limit(5);

        const listEl = document.getElementById('synch-history-list');
        if (!listEl) return;

        if (!data || data.length === 0) {
            listEl.innerHTML = '<div class="synch-history-empty">No sessions yet</div>';
            return;
        }

        listEl.innerHTML = data.map(s => {
            const diff = (s.post_mood && s.pre_mood) ? s.post_mood - s.pre_mood : null;
            return `
                <div class="synch-history-item">
                    <span class="synch-history-duration">${Math.round(s.duration_seconds / 60)} min</span>
                    ${s.pre_mood ? `<span class="synch-history-mood">${s.pre_mood}→${s.post_mood || '?'}</span>` : ''}
                    ${diff !== null ? `<span class="synch-history-diff ${diff > 0 ? 'positive' : diff < 0 ? 'negative' : ''}">${diff > 0 ? '+' : ''}${diff}</span>` : ''}
                    <span class="synch-history-date">${new Date(s.created_at).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}</span>
                </div>
            `;
        }).join('');
    }

    async _cacheMemberData(memberIds) {
        const uncached = memberIds.filter(id => !this.memberCache[id]);
        if (uncached.length === 0) return;

        const { data: members } = await this.sb
            .from('members')
            .select('id, name, avatar_url, role')
            .in('id', uncached);

        if (members) members.forEach(m => { this.memberCache[m.id] = m; });
    }

    async _announceActive(active) {
        await this.sb.from('members').update({
            activity_status: active ? 'in_practice' : 'online',
            last_seen: new Date().toISOString()
        }).eq('id', auth.getMemberId());
    }

    async _leaveLanding() {
        this._cleanupRoom();
        const content = document.getElementById('synch-tab-content') || this.container;
        await this._loadLandingInto(content);
    }

    _cleanupRoom() {
        if (this.timer) { clearInterval(this.timer); this.timer = null; }
        this._stopAudio();
        this._stopRecording();
        this.currentRoom = null;
        this.selectedPractice = null;
        this.roomMessages = [];
        this.roomParticipants = [];
        this.preMood = null;
        this.preNote = '';
        this.postMood = null;
        this.postNote = '';
    }

    _esc(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    destroy() {
        if (this.timer) { clearInterval(this.timer); this.timer = null; }
        if (this.phase === PHASE_RUNNING) this._announceActive(false);
        this._stopAudio();
        this._stopRecording();
        this.channels.forEach(ch => this.sb.removeChannel(ch));
        this.channels = [];
        if (this.circleChainView) {
            this.circleChainView.destroy();
            this.circleChainView = null;
        }
    }
}
