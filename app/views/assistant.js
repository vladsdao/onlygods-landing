import { getClient } from '../lib/supabase.js';
import { auth } from '../lib/auth.js';

const MEMBER_PROMPTS = [
    'How is my energy trending?',
    'What themes dominate the field?',
    'Give me a personal insight',
    'What is the field coherence right now?',
];

const ADMIN_PROMPTS = [
    "What's today's task?",
    'Create a check_in for tomorrow',
    'How many members?',
    'Help — what can you do?',
];

const STORAGE_KEY = 'og-assistant-history';

export default class AssistantView {
    constructor(container) {
        this.container = container;
        this.sb = getClient();
        this.messages = [];
        this.isStreaming = false;
    }

    async render() {
        this.messages = this._loadHistory();
        const isAdmin = auth.isAdmin();
        const prompts = isAdmin ? ADMIN_PROMPTS : MEMBER_PROMPTS;

        this.container.innerHTML = `
            <div class="view-assistant">
                <div class="assistant-header">
                    <div class="assistant-title">
                        ${isAdmin ? `
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
                            </svg>
                        ` : `
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <rect x="3" y="8" width="18" height="12" rx="2"/><circle cx="9" cy="14" r="1.5"/><circle cx="15" cy="14" r="1.5"/>
                                <line x1="12" y1="4" x2="12" y2="8"/><circle cx="12" cy="3" r="1"/>
                            </svg>
                        `}
                        <span>${isAdmin ? 'Operations Assistant' : 'Field Assistant'}</span>
                    </div>
                    <button class="assistant-clear" id="btn-clear-history" title="Clear history">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        </svg>
                    </button>
                </div>

                <div class="assistant-messages" id="assistant-messages">
                    ${this.messages.length === 0 ? this._renderWelcome(prompts, isAdmin) : this.messages.map((m) => this._renderMsg(m)).join('')}
                </div>

                <div class="assistant-input-bar">
                    <input type="text" class="assistant-input" id="assistant-input"
                           placeholder="${isAdmin ? 'Create tasks, check stats, manage platform...' : 'Ask about the field, your energy, or anything...'}"
                           autocomplete="off">
                    <button class="assistant-send" id="assistant-send">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </button>
                </div>
            </div>
        `;

        this._setupListeners();
        if (this.messages.length > 0) this._scrollToBottom();
    }

    _renderWelcome(prompts, isAdmin) {
        return `
            <div class="assistant-welcome">
                <div class="assistant-welcome-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                        ${isAdmin
                            ? '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>'
                            : '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>'
                        }
                    </svg>
                </div>
                <div class="assistant-welcome-text">${isAdmin
                    ? "I'm your operations assistant. I can create tasks, check community stats, and manage daily practices."
                    : "I'm your field assistant. I can see your energy data, field state, and community insights."
                }</div>
                <div class="assistant-suggestions">
                    ${prompts.map((p) => `<button class="assistant-suggestion" data-prompt="${this._esc(p)}">${this._esc(p)}</button>`).join('')}
                </div>
            </div>
        `;
    }

    _renderMsg(msg) {
        const cls = msg.role === 'user' ? 'assistant-msg-user' : 'assistant-msg-bot';
        return `<div class="assistant-msg ${cls}"><div class="assistant-msg-content">${this._esc(msg.content)}</div></div>`;
    }

    _setupListeners() {
        const input = document.getElementById('assistant-input');
        const sendBtn = document.getElementById('assistant-send');
        const clearBtn = document.getElementById('btn-clear-history');

        const send = () => {
            const text = input?.value?.trim();
            if (!text || this.isStreaming) return;
            input.value = '';
            this._sendMessage(text);
        };

        if (sendBtn) sendBtn.addEventListener('click', send);
        if (input) input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
        });

        if (clearBtn) clearBtn.addEventListener('click', () => {
            this.messages = [];
            localStorage.removeItem(STORAGE_KEY);
            const el = document.getElementById('assistant-messages');
            if (el) el.innerHTML = this._renderWelcome(auth.isAdmin() ? ADMIN_PROMPTS : MEMBER_PROMPTS, auth.isAdmin());
            this._setupSuggestions();
        });

        this._setupSuggestions();
    }

    _setupSuggestions() {
        document.querySelectorAll('.assistant-suggestion').forEach((btn) => {
            btn.addEventListener('click', () => {
                const prompt = btn.dataset.prompt;
                if (prompt) this._sendMessage(prompt);
            });
        });
    }

    async _sendMessage(text) {
        this.isStreaming = true;
        const messagesEl = document.getElementById('assistant-messages');

        // Remove welcome screen
        const welcome = messagesEl?.querySelector('.assistant-welcome');
        if (welcome) welcome.remove();

        // Add user message
        this.messages.push({ role: 'user', content: text });
        if (messagesEl) {
            messagesEl.insertAdjacentHTML('beforeend', this._renderMsg({ role: 'user', content: text }));
        }

        // Add bot placeholder
        const botId = 'bot-msg-' + Date.now();
        if (messagesEl) {
            messagesEl.insertAdjacentHTML('beforeend',
                `<div class="assistant-msg assistant-msg-bot" id="${botId}"><div class="assistant-msg-content assistant-typing">Thinking...</div></div>`
            );
        }
        this._scrollToBottom();

        // Try local mock response for admin
        if (auth.isAdmin()) {
            const localResult = await this._tryLocalResponse(text);
            if (localResult) {
                const botEl = document.getElementById(botId);
                const contentEl = botEl?.querySelector('.assistant-msg-content');
                if (contentEl) {
                    contentEl.classList.remove('assistant-typing');
                    contentEl.textContent = localResult.response;
                }

                if (localResult.action && botEl) {
                    const cardHtml = this._renderActionCard(localResult.action);
                    if (cardHtml) {
                        botEl.insertAdjacentHTML('beforeend', cardHtml);
                        this._setupActionCardListeners(botEl);
                    }
                }

                this.messages.push({ role: 'assistant', content: localResult.response });
                this.isStreaming = false;
                this._saveHistory();
                this._scrollToBottom();
                return;
            }
        }

        // Fall through to Edge Function
        try {
            const response = await fetch(
                `https://bnfkicmzxljkhahqxfla.supabase.co/functions/v1/assistant`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        member_id: auth.getMemberId(),
                        question: text,
                    }),
                }
            );

            const botEl = document.getElementById(botId);
            const contentEl = botEl?.querySelector('.assistant-msg-content');

            if (!response.ok) {
                if (contentEl) {
                    contentEl.classList.remove('assistant-typing');
                    contentEl.textContent = 'Sorry, I could not process your request. The assistant service may not be available yet.';
                }
                this.messages.push({ role: 'assistant', content: 'Service unavailable' });
            } else if (response.headers.get('content-type')?.includes('text/event-stream')) {
                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let fullText = '';
                if (contentEl) { contentEl.classList.remove('assistant-typing'); contentEl.textContent = ''; }
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    fullText += decoder.decode(value, { stream: true });
                    if (contentEl) contentEl.textContent = fullText;
                    this._scrollToBottom();
                }
                this.messages.push({ role: 'assistant', content: fullText });
            } else {
                const data = await response.json();
                const reply = data.content || data.message || 'No response';
                if (contentEl) { contentEl.classList.remove('assistant-typing'); contentEl.textContent = reply; }
                this.messages.push({ role: 'assistant', content: reply });
            }
        } catch (e) {
            console.error('Assistant error:', e);
            const botEl = document.getElementById(botId);
            const contentEl = botEl?.querySelector('.assistant-msg-content');
            if (contentEl) {
                contentEl.classList.remove('assistant-typing');
                contentEl.textContent = 'Connection error. Please try again.';
            }
            this.messages.push({ role: 'assistant', content: 'Connection error' });
        }

        this.isStreaming = false;
        this._saveHistory();
        this._scrollToBottom();
    }

    // ──────── ADMIN MOCK RESPONSE ENGINE ────────

    async _tryLocalResponse(text) {
        const t = text.toLowerCase().trim();

        // Help
        if (/^(help|what can|commands|помо[гщ]|что умеешь|команд)/i.test(t)) {
            return {
                response: 'As operations assistant, I can:\n\n'
                    + '• "Create a check_in task for tomorrow" — creates task with preview\n'
                    + '• "What\'s today\'s task?" — shows current task + completions\n'
                    + '• "How many members?" — community stats\n'
                    + '• "Task types" — explain available formats\n'
                    + '• "Send check-in to bot" — queue bot command\n\n'
                    + 'I understand both English and Russian.'
            };
        }

        // Task types
        if (/task.?type|format[ыs]|типы|форматы/i.test(t)) {
            return {
                response: 'Task types:\n\n'
                    + '• check_in — Mood scale 1-10 + optional comment. Best for daily rhythm.\n'
                    + '• photo — Image upload + caption. Good for creative/practice tasks.\n'
                    + '• text — Free-form text response. Use for reflection questions.\n'
                    + '• confirm — Simple "done" button. Best for practices done offline.'
            };
        }

        // Create task
        if (/(?:create|make|set|add|создай|добавь)\s+(?:a\s+)?(?:task|check.?in|photo|text|confirm|задач)/i.test(t)) {
            const tomorrow = /tomorrow|завтра/i.test(t);
            const date = tomorrow
                ? new Date(Date.now() + 86400000).toISOString().split('T')[0]
                : new Date().toISOString().split('T')[0];

            let type = 'check_in';
            if (/photo|фото/i.test(t)) type = 'photo';
            else if (/\btext\b|текст|response|ответ/i.test(t)) type = 'text';
            else if (/confirm|практик/i.test(t)) type = 'confirm';

            // Extract quoted title or generate default
            const quoted = t.match(/"([^"]+)"|«([^»]+)»/);
            let title = quoted ? (quoted[1] || quoted[2]) : '';
            if (!title) {
                // Try to extract title from the remaining text after the command
                const afterCmd = t.replace(/^.*?(?:task|check.?in|photo|text|confirm|задач\w*)\s*/i, '').replace(/for\s+(?:today|tomorrow|сегодня|завтра)\s*/i, '').trim();
                title = afterCmd || `Daily ${type === 'check_in' ? 'Check-in' : type.charAt(0).toUpperCase() + type.slice(1)}`;
            }

            return {
                response: "Got it. Here's what I'll create:",
                action: { type: 'create_task', data: { title, type, date, description: null } }
            };
        }

        // Task status / what's today
        if (/(?:what|how|show|status|today|сегодня|что|как|покажи).*(?:task|practice|задач|практик)/i.test(t) || /^today/i.test(t)) {
            const today = new Date().toISOString().split('T')[0];
            const { data: tasks } = await this.sb
                .from('daily_tasks')
                .select('*')
                .eq('date', today)
                .eq('is_active', true);

            if (!tasks?.length) {
                return { response: 'No task set for today. Want me to create one? Tell me the type and title.' };
            }

            const task = tasks[0];
            const { data: completions } = await this.sb
                .from('task_completions')
                .select('id')
                .eq('task_id', task.id);

            const count = completions?.length || 0;
            return { response: `Today's task: "${task.title}" (${task.type})\n${count} member${count !== 1 ? 's' : ''} completed so far.` };
        }

        // Community stats
        if (/(?:how many|members|stats|community|сколько|участник|стат)/i.test(t)) {
            const { data: members } = await this.sb.from('members').select('id, membership_status');
            const active = members?.filter(m => m.membership_status === 'active' || m.membership_status === 'approved').length || 0;
            const pending = members?.filter(m => m.membership_status === 'pending').length || 0;
            const total = members?.length || 0;
            return { response: `Community: ${total} total, ${active} active, ${pending} pending approval.` };
        }

        // Bot command
        if (/(?:send|bot|бот|отправ)\s+(?:a\s+)?(?:check.?in|question|insight|update)/i.test(t)) {
            let cmdType = 'check_in';
            if (/question|вопрос/i.test(t)) cmdType = 'question';
            else if (/insight|инсайт/i.test(t)) cmdType = 'insight';
            else if (/update|обновлени/i.test(t)) cmdType = 'update';

            // Extract content after command type
            const content = t.replace(/^.*?(?:check.?in|question|insight|update)\s*/i, '').trim();
            if (content && content.length > 3) {
                await this.sb.from('bot_commands').insert({
                    type: cmdType,
                    content,
                    created_by: auth.getMemberId(),
                    status: 'pending',
                });
                return { response: `Sent ${cmdType} to bot: "${content}"` };
            }
            return { response: `Ready to send ${cmdType} via bot. Type the message content.` };
        }

        // No match
        return null;
    }

    // ──────── ACTION CARDS ────────

    _renderActionCard(action) {
        if (action.type === 'create_task') {
            const d = action.data;
            const dateLabel = new Date(d.date + 'T12:00:00').toLocaleDateString('ru-RU', {
                weekday: 'short', day: 'numeric', month: 'short'
            });
            return `
                <div class="assistant-action-card" data-action='${JSON.stringify(action).replace(/'/g, "&#39;")}'>
                    <div class="action-card-header">Create Task</div>
                    <div class="action-card-body">
                        <div class="action-card-field">
                            <span class="action-card-label">Title</span>
                            <input class="action-card-input" id="action-title" value="${this._esc(d.title)}">
                        </div>
                        <div class="action-card-field">
                            <span class="action-card-label">Type</span>
                            <select class="action-card-select" id="action-type">
                                <option value="check_in" ${d.type==='check_in'?'selected':''}>Check-in</option>
                                <option value="photo" ${d.type==='photo'?'selected':''}>Photo</option>
                                <option value="text" ${d.type==='text'?'selected':''}>Text</option>
                                <option value="confirm" ${d.type==='confirm'?'selected':''}>Confirm</option>
                            </select>
                        </div>
                        <div class="action-card-field">
                            <span class="action-card-label">Date</span>
                            <span class="action-card-value">${dateLabel}</span>
                        </div>
                    </div>
                    <div class="action-card-buttons">
                        <button class="action-confirm-btn" data-action-type="create_task">Create</button>
                        <button class="action-cancel-btn">Cancel</button>
                    </div>
                </div>
            `;
        }
        return '';
    }

    _setupActionCardListeners(parentEl) {
        parentEl.querySelectorAll('.action-confirm-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const card = btn.closest('.assistant-action-card');
                if (card) this._executeAction(btn.dataset.actionType, card);
            });
        });
        parentEl.querySelectorAll('.action-cancel-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const card = btn.closest('.assistant-action-card');
                if (card) card.innerHTML = '<div class="action-card-success" style="color:#86868b">Cancelled</div>';
            });
        });
    }

    async _executeAction(actionType, cardEl) {
        if (actionType === 'create_task') {
            const title = cardEl.querySelector('#action-title')?.value?.trim();
            const type = cardEl.querySelector('#action-type')?.value;
            const action = JSON.parse(cardEl.dataset.action);

            const { error } = await this.sb.from('daily_tasks').insert({
                title: title || action.data.title,
                type: type || action.data.type,
                description: action.data.description || null,
                date: action.data.date,
                created_by: auth.getMemberId(),
                is_active: true,
            });

            if (error) {
                cardEl.innerHTML = `<div class="action-card-success" style="color:#ff3b30">Failed: ${error.message}</div>`;
            } else {
                cardEl.innerHTML = '<div class="action-card-success">Task created successfully.</div>';
            }
        }
    }

    // ──────── UTILS ────────

    _scrollToBottom() {
        const el = document.getElementById('assistant-messages');
        if (el) el.scrollTop = el.scrollHeight;
    }

    _loadHistory() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        } catch { return []; }
    }

    _saveHistory() {
        const toSave = this.messages.slice(-50);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    }

    _esc(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    destroy() {}
}
