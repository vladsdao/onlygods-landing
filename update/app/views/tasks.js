import { getClient } from '../lib/supabase.js';
import { auth } from '../lib/auth.js';

export default class TasksView {
    constructor(container) {
        this.container = container;
        this.sb = getClient();
        this.todayTask = null;
        this.completions = [];
        this.memberCache = {};
        this.channel = null;
    }

    async render() {
        this.container.innerHTML = `
            <div class="view-tasks">
                <div class="tasks-header">
                    <div class="tasks-date" id="tasks-date"></div>
                    <div class="tasks-title">Daily Practice</div>
                </div>

                <div class="tasks-today" id="tasks-today">
                    <div class="tasks-loading">Loading...</div>
                </div>

                <div class="tasks-my-status" id="tasks-my-status"></div>

                <div class="tasks-progress-header">
                    <span class="tasks-progress-title">Community Progress</span>
                    <span class="tasks-progress-count" id="tasks-count"></span>
                </div>
                <div class="tasks-feed" id="tasks-feed"></div>

                ${auth.isAdmin() ? `
                    <div class="tasks-admin">
                        <button class="tasks-admin-btn" id="btn-create-task">+ Create Today's Task</button>
                        <button class="tasks-admin-btn" id="btn-week-planner">Plan Week</button>
                    </div>
                ` : ''}
            </div>
        `;

        await this._loadTodayTask();
        this._setupListeners();
        this._subscribeRealtime();
    }

    async _loadTodayTask() {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('tasks-date').textContent = new Date().toLocaleDateString('ru-RU', {
            weekday: 'long', day: 'numeric', month: 'long'
        });

        const { data: tasks } = await this.sb
            .from('daily_tasks')
            .select('*')
            .eq('date', today)
            .eq('is_active', true)
            .order('created_at', { ascending: false })
            .limit(1);

        this.todayTask = tasks?.[0] || null;
        this._renderTask();

        if (this.todayTask) {
            await this._loadCompletions();
        }
    }

    _renderTask() {
        const el = document.getElementById('tasks-today');
        if (!el) return;

        if (!this.todayTask) {
            el.innerHTML = `
                <div class="tasks-empty">
                    <div class="tasks-empty-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    </div>
                    <div class="tasks-empty-text">No task for today yet</div>
                    <div class="tasks-empty-sub">Check back later or wait for admin to post</div>
                </div>
            `;
            return;
        }

        const task = this.todayTask;
        el.innerHTML = `
            <div class="task-card">
                <div class="task-type-badge">${this._typeLabel(task.type)}</div>
                <div class="task-text">${this._esc(task.title)}</div>
                ${task.description ? `<div class="task-description">${this._esc(task.description)}</div>` : ''}
                ${task.media_url ? `<img src="${task.media_url}" class="task-media" alt="">` : ''}
            </div>
        `;

        this._renderMyStatus();
    }

    _renderMyStatus() {
        const el = document.getElementById('tasks-my-status');
        if (!el || !this.todayTask) return;

        const memberId = auth.getMemberId();
        const myCompletion = this.completions.find(c => c.member_id === memberId);

        if (myCompletion) {
            el.innerHTML = `
                <div class="task-completed-badge">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#30d158" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Completed</span>
                </div>
            `;
            return;
        }

        const task = this.todayTask;

        if (task.type === 'check_in') {
            el.innerHTML = `
                <div class="task-action">
                    <div class="task-action-label">How are you feeling? (1-10)</div>
                    <div class="task-mood-scale" id="mood-scale">
                        ${Array.from({length: 10}, (_, i) => `<button class="mood-btn" data-mood="${i+1}">${i+1}</button>`).join('')}
                    </div>
                    <textarea class="form-textarea task-comment-input" id="task-comment" placeholder="Add a note (optional)" rows="2"></textarea>
                    <button class="form-btn form-btn-primary task-submit-btn" id="btn-submit-mood" disabled>Submit Check-in</button>
                </div>
            `;
            let selectedMood = null;
            el.querySelectorAll('.mood-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    el.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    selectedMood = parseInt(btn.dataset.mood);
                    document.getElementById('btn-submit-mood').disabled = false;
                });
            });
            document.getElementById('btn-submit-mood')?.addEventListener('click', () => {
                if (selectedMood) {
                    const comment = document.getElementById('task-comment')?.value || '';
                    this._submitCompletion({ mood: selectedMood, comment });
                }
            });

        } else if (task.type === 'photo') {
            el.innerHTML = `
                <div class="task-action">
                    <div class="task-action-label">Share your photo</div>
                    <input type="file" accept="image/*" class="form-file-input" id="task-photo">
                    <textarea class="form-textarea task-comment-input" id="task-comment" placeholder="Add a caption (optional)" rows="2"></textarea>
                    <button class="form-btn form-btn-primary task-submit-btn" id="btn-submit-photo">Upload & Complete</button>
                </div>
            `;
            document.getElementById('btn-submit-photo')?.addEventListener('click', () => this._submitPhoto());

        } else if (task.type === 'text') {
            el.innerHTML = `
                <div class="task-action">
                    <div class="task-action-label">Share your response</div>
                    <textarea class="form-textarea task-comment-input" id="task-response" placeholder="Write your response..." rows="4"></textarea>
                    <button class="form-btn form-btn-primary task-submit-btn" id="btn-submit-text">Submit</button>
                </div>
            `;
            document.getElementById('btn-submit-text')?.addEventListener('click', () => {
                const response = document.getElementById('task-response')?.value?.trim();
                if (response) this._submitCompletion({ response });
            });

        } else {
            el.innerHTML = `
                <div class="task-action">
                    <button class="task-confirm-btn" id="btn-confirm-task">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                        <span>Mark as Done</span>
                    </button>
                </div>
            `;
            document.getElementById('btn-confirm-task')?.addEventListener('click', () => this._submitCompletion({ confirmed: true }));
        }
    }

    async _submitPhoto() {
        const fileInput = document.getElementById('task-photo');
        const file = fileInput?.files?.[0];
        if (!file) { alert('Please select a photo'); return; }

        const memberId = auth.getMemberId();
        const ext = file.name.split('.').pop();
        const path = `tasks/${this.todayTask.id}/${memberId}.${ext}`;

        const resized = await this._resizeImage(file, 800);
        const { error: uploadErr } = await this.sb.storage.from('uploads').upload(path, resized, { upsert: true });

        if (uploadErr) { alert('Upload failed: ' + uploadErr.message); return; }

        const { data: urlData } = this.sb.storage.from('uploads').getPublicUrl(path);
        const comment = document.getElementById('task-comment')?.value || '';
        await this._submitCompletion({ photo_url: urlData.publicUrl, comment });
    }

    async _submitCompletion(data) {
        const { error } = await this.sb.from('task_completions').insert({
            task_id: this.todayTask.id,
            member_id: auth.getMemberId(),
            content: data,
        });

        if (error) { alert('Failed: ' + error.message); return; }
        await this._loadCompletions();
    }

    async _loadCompletions() {
        if (!this.todayTask) return;

        const { data } = await this.sb
            .from('task_completions')
            .select('*')
            .eq('task_id', this.todayTask.id)
            .order('created_at', { ascending: false });

        this.completions = data || [];

        const memberIds = [...new Set(this.completions.map(c => c.member_id))];
        const newIds = memberIds.filter(id => !this.memberCache[id]);
        if (newIds.length > 0) {
            const { data: members } = await this.sb
                .from('members')
                .select('id, name, avatar_url')
                .in('id', newIds);
            (members || []).forEach(m => { this.memberCache[m.id] = m; });
        }

        this._renderMyStatus();
        this._renderFeed();
    }

    _renderFeed() {
        const countEl = document.getElementById('tasks-count');
        const feedEl = document.getElementById('tasks-feed');
        if (!feedEl) return;

        if (countEl) countEl.textContent = `${this.completions.length} completed`;

        if (this.completions.length === 0) {
            feedEl.innerHTML = '<div class="tasks-feed-empty">Be the first to complete today\'s task</div>';
            return;
        }

        feedEl.innerHTML = this.completions.map(c => {
            const member = this.memberCache[c.member_id] || { name: 'Member', avatar_url: null };
            const content = c.content || {};
            const time = new Date(c.created_at).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

            return `
                <div class="task-completion-card">
                    <div class="task-completion-header">
                        <div class="task-completion-avatar">
                            ${member.avatar_url
                                ? `<img src="${member.avatar_url}" alt="">`
                                : `<span>${member.name.charAt(0).toUpperCase()}</span>`
                            }
                        </div>
                        <div class="task-completion-info">
                            <div class="task-completion-name">${this._esc(member.name)}</div>
                            <div class="task-completion-time">${time}</div>
                        </div>
                        ${content.mood ? `<div class="task-mood-badge">${content.mood}/10</div>` : ''}
                    </div>
                    ${content.photo_url ? `<img src="${content.photo_url}" class="task-completion-photo" alt="">` : ''}
                    ${content.response ? `<div class="task-completion-text">${this._esc(content.response)}</div>` : ''}
                    ${content.comment ? `<div class="task-completion-comment">${this._esc(content.comment)}</div>` : ''}
                    ${content.confirmed && !content.response && !content.photo_url && !content.mood
                        ? '<div class="task-completion-done">&#10003; Done</div>' : ''}
                </div>
            `;
        }).join('');
    }

    _subscribeRealtime() {
        if (!this.todayTask) return;
        this.channel = this.sb.channel(`tasks:${this.todayTask.id}`)
            .on('postgres_changes', {
                event: 'INSERT',
                schema: 'public',
                table: 'task_completions',
                filter: `task_id=eq.${this.todayTask.id}`
            }, () => this._loadCompletions())
            .subscribe();
    }

    _setupListeners() {
        document.getElementById('btn-create-task')?.addEventListener('click', () => this._showCreateForm(null));
        document.getElementById('btn-week-planner')?.addEventListener('click', () => this._showWeekPlanner());
    }

    _showCreateForm(targetDate) {
        const dateLabel = targetDate
            ? new Date(targetDate + 'T12:00:00').toLocaleDateString('ru-RU', { weekday: 'short', day: 'numeric', month: 'short' })
            : 'Today';

        const modal = document.createElement('div');
        modal.className = 'task-create-modal';
        modal.innerHTML = `
            <div class="task-create-card">
                <div class="task-create-title">Create Task — ${dateLabel}</div>
                <div class="form-group">
                    <label class="form-label">Type</label>
                    <select class="form-select" id="new-task-type">
                        <option value="check_in">Check-in (mood 1-10)</option>
                        <option value="photo">Photo submission</option>
                        <option value="text">Text response</option>
                        <option value="confirm">Simple confirmation</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Task Title</label>
                    <input type="text" class="form-input" id="new-task-title" placeholder="What's the practice?">
                </div>
                <div class="form-group">
                    <label class="form-label">Description (optional)</label>
                    <textarea class="form-textarea" id="new-task-desc" rows="3" placeholder="Detailed instructions..."></textarea>
                </div>
                <div class="form-actions">
                    <button class="form-btn form-btn-primary" id="btn-save-task">Create Task</button>
                    <button class="form-btn form-btn-secondary" id="btn-cancel-task">Cancel</button>
                </div>
            </div>
        `;
        this.container.appendChild(modal);

        document.getElementById('btn-save-task')?.addEventListener('click', async () => {
            const title = document.getElementById('new-task-title')?.value?.trim();
            if (!title) { alert('Title is required'); return; }
            const type = document.getElementById('new-task-type')?.value;
            const description = document.getElementById('new-task-desc')?.value?.trim();
            const date = targetDate || new Date().toISOString().split('T')[0];

            const { error } = await this.sb.from('daily_tasks').insert({
                title, type,
                description: description || null,
                date,
                created_by: auth.getMemberId(),
                is_active: true,
            });

            if (error) { alert('Failed: ' + error.message); return; }
            modal.remove();
            if (!targetDate || targetDate === new Date().toISOString().split('T')[0]) {
                await this._loadTodayTask();
            }
        });

        document.getElementById('btn-cancel-task')?.addEventListener('click', () => modal.remove());
    }

    async _showWeekPlanner() {
        const today = new Date();
        const dates = [];
        for (let i = 0; i < 7; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() + i);
            dates.push(d.toISOString().split('T')[0]);
        }

        // Load all tasks for the week
        const { data: weekTasks } = await this.sb
            .from('daily_tasks')
            .select('*')
            .in('date', dates)
            .eq('is_active', true)
            .order('date', { ascending: true });

        const tasksByDate = {};
        (weekTasks || []).forEach(t => {
            tasksByDate[t.date] = tasksByDate[t.date] || [];
            tasksByDate[t.date].push(t);
        });

        const modal = document.createElement('div');
        modal.className = 'task-create-modal';
        modal.innerHTML = `
            <div class="week-planner-card">
                <div class="week-planner-header">
                    <div class="task-create-title">Week Planner</div>
                    <button class="week-planner-close" id="btn-close-planner">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                </div>
                <div class="week-planner-days">
                    ${dates.map(date => {
                        const d = new Date(date + 'T12:00:00');
                        const isToday = date === today.toISOString().split('T')[0];
                        const tasks = tasksByDate[date] || [];
                        const dayLabel = d.toLocaleDateString('ru-RU', { weekday: 'short' });
                        const dateLabel = d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
                        return `
                            <div class="week-day ${isToday ? 'today' : ''}" data-date="${date}">
                                <div class="week-day-header">
                                    <div class="week-day-label">${dayLabel}</div>
                                    <div class="week-day-date">${dateLabel}</div>
                                </div>
                                <div class="week-day-tasks">
                                    ${tasks.length > 0
                                        ? tasks.map(t => `
                                            <div class="week-task-item">
                                                <span class="week-task-type">${this._typeLabel(t.type)}</span>
                                                <span class="week-task-title">${this._esc(t.title)}</span>
                                                <button class="week-task-delete" data-task-id="${t.id}" title="Delete">×</button>
                                            </div>
                                        `).join('')
                                        : '<div class="week-day-empty">No task</div>'
                                    }
                                </div>
                                <button class="week-day-add" data-date="${date}">+ Add</button>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
        this.container.appendChild(modal);

        // Close
        document.getElementById('btn-close-planner')?.addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });

        // Add task for specific date
        modal.querySelectorAll('.week-day-add').forEach(btn => {
            btn.addEventListener('click', () => {
                modal.remove();
                this._showCreateForm(btn.dataset.date);
            });
        });

        // Delete task
        modal.querySelectorAll('.week-task-delete').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                e.stopPropagation();
                if (!confirm('Delete this task?')) return;
                await this.sb.from('daily_tasks').update({ is_active: false }).eq('id', btn.dataset.taskId);
                modal.remove();
                this._showWeekPlanner();
                await this._loadTodayTask();
            });
        });
    }

    async _resizeImage(file, maxSize) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let w = img.width, h = img.height;
                if (w > h) { if (w > maxSize) { h = h * maxSize / w; w = maxSize; } }
                else { if (h > maxSize) { w = w * maxSize / h; h = maxSize; } }
                canvas.width = w;
                canvas.height = h;
                canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                canvas.toBlob(resolve, 'image/jpeg', 0.85);
            };
            img.src = URL.createObjectURL(file);
        });
    }

    _typeLabel(type) {
        const labels = { check_in: 'Check-in', photo: 'Photo', text: 'Response', confirm: 'Practice' };
        return labels[type] || 'Task';
    }

    _esc(text) {
        if (!text) return '';
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
