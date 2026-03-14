import { getClient } from '../lib/supabase.js';
import { auth } from '../lib/auth.js';

export default class ProfileView {
    constructor(container) {
        this.container = container;
        this.sb = getClient();
        this.editMode = false;
        this.moodChart = null;
        this.weekChart = null;
    }

    async render() {
        const member = auth.getMember();
        if (!member) {
            this.container.innerHTML = '<div class="view-auth-required">Please log in to view your profile</div>';
            return;
        }

        this.container.innerHTML = `
            <div class="view-profile">
                <div class="profile-header">
                    <div class="profile-avatar-wrap" id="avatar-wrap">
                        ${this._renderAvatar(member)}
                    </div>
                    <div class="profile-name">${this._esc(member.name)}</div>
                    <div class="profile-role">${member.role || 'member'}</div>
                    ${member.status_text ? `<div class="profile-status-text">${this._esc(member.status_text)}</div>` : ''}
                    ${member.activity_status ? `<div class="profile-activity"><span class="status-dot status-${member.activity_status}"></span> ${member.activity_status}</div>` : ''}
                </div>

                <div class="profile-actions">
                    <button class="profile-edit-btn" id="btn-edit-profile">Edit Profile</button>
                    <button class="profile-crm-btn" onclick="location.hash='#/assistant'">AI Assistant</button>
                    ${auth.isAdmin() ? `<button class="profile-crm-btn" onclick="location.hash='#/crm'">CRM Panel</button>` : ''}
                </div>

                <div class="profile-edit-form" id="edit-form" style="display:none">
                    <div class="form-group">
                        <label class="form-label">Avatar</label>
                        <input type="file" id="avatar-input" accept="image/*" class="form-file-input">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Bio</label>
                        <textarea id="edit-bio" class="form-textarea" rows="3" placeholder="Who are you? What are you exploring?">${this._esc(member.bio || '')}</textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Status</label>
                        <input type="text" id="edit-status" class="form-input" placeholder="What are you up to?" value="${this._esc(member.status_text || '')}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Activity</label>
                        <select id="edit-activity" class="form-select">
                            ${['online', 'away', 'in_practice', 'streaming', 'offline'].map((s) =>
                                `<option value="${s}" ${member.activity_status === s ? 'selected' : ''}>${s}</option>`
                            ).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Interests (comma separated)</label>
                        <input type="text" id="edit-interests" class="form-input" placeholder="meditation, consciousness, tech" value="${(member.interests || []).join(', ')}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Location</label>
                        <input type="text" id="edit-location" class="form-input" placeholder="City, Country" value="${this._esc(member.location || '')}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Telegram</label>
                        <input type="text" id="edit-telegram" class="form-input" placeholder="@username" value="${this._esc(member.links?.telegram || '')}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Instagram</label>
                        <input type="text" id="edit-instagram" class="form-input" placeholder="@username" value="${this._esc(member.links?.instagram || '')}">
                    </div>
                    <div class="form-actions">
                        <button class="form-btn form-btn-primary" id="btn-save-profile">Save</button>
                        <button class="form-btn form-btn-secondary" id="btn-cancel-edit">Cancel</button>
                    </div>
                </div>

                <div class="profile-info" id="profile-info">
                    ${member.bio ? `<div class="profile-section"><div class="profile-section-label">Bio</div><div class="profile-bio">${this._esc(member.bio)}</div></div>` : ''}
                    ${member.interests?.length ? `<div class="profile-section"><div class="profile-section-label">Interests</div><div class="profile-tags">${member.interests.map((t) => `<span class="profile-tag">${this._esc(t)}</span>`).join('')}</div></div>` : ''}
                    ${member.location ? `<div class="profile-section"><div class="profile-section-label">Location</div><div>${this._esc(member.location)}</div></div>` : ''}
                </div>

                <div class="profile-section">
                    <div class="profile-section-label">Stats</div>
                    <div class="profile-stats" id="profile-stats">Loading...</div>
                </div>

                <div class="profile-section">
                    <div class="profile-section-label">Sync Progress</div>
                    <div class="profile-stat-grid" id="sync-progress-stats"></div>
                    <div class="profile-chart-wrap">
                        <div class="profile-chart-label">Mood Trend</div>
                        <canvas id="mood-chart" height="180"></canvas>
                    </div>
                    <div class="profile-chart-wrap">
                        <div class="profile-chart-label">Sessions per Week</div>
                        <canvas id="week-chart" height="160"></canvas>
                    </div>
                </div>

                ${auth.isAdmin() ? `
                <div class="profile-admin">
                    <div class="profile-admin-title">Admin Tools</div>
                    <div class="profile-admin-grid">
                        <button class="profile-admin-btn" id="btn-admin-tasks">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                            <div>
                                <div>Daily Tasks</div>
                                <div class="profile-admin-btn-text">Create & plan weekly tasks</div>
                            </div>
                        </button>
                        <button class="profile-admin-btn" id="btn-admin-synch">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                            <div>
                                <div>Synch Sessions</div>
                                <div class="profile-admin-btn-text">View session history & stats</div>
                            </div>
                        </button>
                        <button class="profile-admin-btn" id="btn-admin-members">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                            <div>
                                <div>Members & CRM</div>
                                <div class="profile-admin-btn-text">Manage members, leads, payments</div>
                            </div>
                        </button>
                        <button class="profile-admin-btn" id="btn-admin-bot">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                            <div>
                                <div>Bot Commands</div>
                                <div class="profile-admin-btn-text">Send check-ins, questions, insights</div>
                            </div>
                        </button>
                        <button class="profile-admin-btn" id="btn-admin-invite">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
                            <div>
                                <div>Invite Links</div>
                                <div class="profile-admin-btn-text">Generate and manage invite links</div>
                            </div>
                        </button>
                    </div>
                </div>
                ` : ''}

                <div class="profile-footer">
                    <button class="profile-logout-btn" id="btn-logout">Log Out</button>
                </div>
            </div>
        `;

        this._setupListeners();
        await Promise.all([this._loadStats(), this._loadSyncProgress()]);
    }

    _renderAvatar(member) {
        if (member.avatar_url) {
            return `<img class="profile-avatar" src="${member.avatar_url}" alt="">`;
        }
        return `<div class="profile-avatar profile-avatar-placeholder">${(member.name || '?').charAt(0).toUpperCase()}</div>`;
    }

    _setupListeners() {
        const editBtn = document.getElementById('btn-edit-profile');
        const saveBtn = document.getElementById('btn-save-profile');
        const cancelBtn = document.getElementById('btn-cancel-edit');
        const logoutBtn = document.getElementById('btn-logout');
        const avatarInput = document.getElementById('avatar-input');

        if (editBtn) editBtn.addEventListener('click', () => this._toggleEdit(true));
        if (cancelBtn) cancelBtn.addEventListener('click', () => this._toggleEdit(false));
        if (saveBtn) saveBtn.addEventListener('click', () => this._saveProfile());
        if (logoutBtn) logoutBtn.addEventListener('click', () => {
            auth.logout();
            location.hash = '#/';
            location.reload();
        });
        if (avatarInput) avatarInput.addEventListener('change', (e) => this._uploadAvatar(e));

        // Admin nav buttons
        document.getElementById('btn-admin-tasks')?.addEventListener('click', () => { location.hash = '#/align'; });
        document.getElementById('btn-admin-synch')?.addEventListener('click', () => { location.hash = '#/synch'; });
        document.getElementById('btn-admin-members')?.addEventListener('click', () => { location.hash = '#/crm'; });
        document.getElementById('btn-admin-bot')?.addEventListener('click', () => { location.hash = '#/crm'; });
        document.getElementById('btn-admin-invite')?.addEventListener('click', () => this._showInviteModal());
    }

    _toggleEdit(show) {
        const form = document.getElementById('edit-form');
        const info = document.getElementById('profile-info');
        const btn = document.getElementById('btn-edit-profile');
        if (form) form.style.display = show ? 'block' : 'none';
        if (info) info.style.display = show ? 'none' : 'block';
        if (btn) btn.style.display = show ? 'none' : 'block';
    }

    async _uploadAvatar(e) {
        const file = e.target.files?.[0];
        if (!file) return;

        // Resize client-side
        const resized = await this._resizeImage(file, 400);
        const memberId = auth.getMemberId();
        const path = `avatars/${memberId}.jpg`;

        const { error } = await this.sb.storage
            .from('avatars')
            .upload(path, resized, { upsert: true, contentType: 'image/jpeg' });

        if (error) {
            console.error('Avatar upload failed:', error);
            return;
        }

        const { data: { publicUrl } } = this.sb.storage.from('avatars').getPublicUrl(path);

        // Update member
        await this.sb.from('members').update({ avatar_url: publicUrl }).eq('id', memberId);

        // Update local state
        const wrap = document.getElementById('avatar-wrap');
        if (wrap) wrap.innerHTML = `<img class="profile-avatar" src="${publicUrl}?t=${Date.now()}" alt="">`;
    }

    _resizeImage(file, maxSize) {
        return new Promise((resolve) => {
            const img = new Image();
            const canvas = document.createElement('canvas');
            const reader = new FileReader();

            reader.onload = (e) => {
                img.onload = () => {
                    let w = img.width, h = img.height;
                    if (w > h) { if (w > maxSize) { h = h * maxSize / w; w = maxSize; } }
                    else { if (h > maxSize) { w = w * maxSize / h; h = maxSize; } }
                    canvas.width = w;
                    canvas.height = h;
                    canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                    canvas.toBlob(resolve, 'image/jpeg', 0.85);
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });
    }

    async _saveProfile() {
        const memberId = auth.getMemberId();
        const bio = document.getElementById('edit-bio')?.value?.trim() || null;
        const statusText = document.getElementById('edit-status')?.value?.trim() || null;
        const activity = document.getElementById('edit-activity')?.value || 'online';
        const interestsRaw = document.getElementById('edit-interests')?.value || '';
        const interests = interestsRaw.split(',').map((s) => s.trim()).filter(Boolean);
        const locationVal = document.getElementById('edit-location')?.value?.trim() || null;
        const telegram = document.getElementById('edit-telegram')?.value?.trim() || null;
        const instagram = document.getElementById('edit-instagram')?.value?.trim() || null;

        const links = {};
        if (telegram) links.telegram = telegram;
        if (instagram) links.instagram = instagram;

        const { error } = await this.sb.from('members').update({
            bio,
            status_text: statusText,
            activity_status: activity,
            interests: interests.length > 0 ? interests : null,
            location: locationVal,
            links: Object.keys(links).length > 0 ? links : null,
        }).eq('id', memberId);

        if (error) {
            console.error('Save failed:', error);
            return;
        }

        // Refresh auth member data
        await auth.restoreSession();
        this.render();
    }

    async _loadStats() {
        const memberId = auth.getMemberId();
        const { data: stats } = await this.sb
            .from('member_stats')
            .select('*')
            .eq('member_id', memberId)
            .single();

        const el = document.getElementById('profile-stats');
        if (!el) return;

        if (!stats) {
            el.innerHTML = '<div class="profile-stat-empty">No activity data yet</div>';
            return;
        }

        el.innerHTML = `
            <div class="profile-stat-grid">
                <div class="profile-stat">
                    <div class="profile-stat-value">${stats.total_pulses || 0}</div>
                    <div class="profile-stat-label">Pulses</div>
                </div>
                <div class="profile-stat">
                    <div class="profile-stat-value">${stats.avg_score ? stats.avg_score.toFixed(1) : '—'}</div>
                    <div class="profile-stat-label">Avg Score</div>
                </div>
                <div class="profile-stat">
                    <div class="profile-stat-value">${stats.streak_days || 0}</div>
                    <div class="profile-stat-label">Streak</div>
                </div>
                <div class="profile-stat">
                    <div class="profile-stat-value">${stats.alignment_level || '—'}</div>
                    <div class="profile-stat-label">Level</div>
                </div>
            </div>
        `;
    }

    async _loadSyncProgress() {
        const memberId = auth.getMemberId();
        const { data: sessions } = await this.sb
            .from('sync_sessions')
            .select('duration_seconds, pre_mood, post_mood, created_at')
            .eq('member_id', memberId)
            .eq('completed', true)
            .order('created_at', { ascending: true })
            .limit(50);

        const statsEl = document.getElementById('sync-progress-stats');
        if (!statsEl) return;

        if (!sessions || sessions.length === 0) {
            statsEl.innerHTML = '<div class="profile-stat-empty">No sync sessions yet</div>';
            return;
        }

        // Compute stats
        const totalSessions = sessions.length;
        const totalMinutes = Math.round(sessions.reduce((s, x) => s + (x.duration_seconds || 0), 0) / 60);
        const moodDeltas = sessions.filter(s => s.pre_mood && s.post_mood).map(s => s.post_mood - s.pre_mood);
        const avgDelta = moodDeltas.length > 0 ? (moodDeltas.reduce((a, b) => a + b, 0) / moodDeltas.length) : 0;

        // Streak: consecutive days with sessions
        let streak = 0;
        const today = new Date(); today.setHours(0,0,0,0);
        const daySet = new Set(sessions.map(s => {
            const d = new Date(s.created_at); d.setHours(0,0,0,0);
            return d.getTime();
        }));
        for (let i = 0; i < 365; i++) {
            const check = new Date(today); check.setDate(check.getDate() - i);
            if (daySet.has(check.getTime())) streak++;
            else break;
        }

        statsEl.innerHTML = `
            <div class="profile-stat">
                <div class="profile-stat-value">${totalSessions}</div>
                <div class="profile-stat-label">Sessions</div>
            </div>
            <div class="profile-stat">
                <div class="profile-stat-value">${totalMinutes}</div>
                <div class="profile-stat-label">Minutes</div>
            </div>
            <div class="profile-stat">
                <div class="profile-stat-value ${avgDelta >= 0 ? 'positive' : 'negative'}">${avgDelta >= 0 ? '+' : ''}${avgDelta.toFixed(1)}</div>
                <div class="profile-stat-label">Avg Mood Δ</div>
            </div>
            <div class="profile-stat">
                <div class="profile-stat-value">${streak}</div>
                <div class="profile-stat-label">Day Streak</div>
            </div>
        `;

        // Charts
        if (typeof Chart === 'undefined') return;

        // Mood Trend chart
        const withMood = sessions.filter(s => s.pre_mood && s.post_mood).slice(-20);
        if (withMood.length > 0) {
            const moodCanvas = document.getElementById('mood-chart');
            if (moodCanvas) {
                if (this.moodChart) this.moodChart.destroy();
                this.moodChart = new Chart(moodCanvas.getContext('2d'), {
                    type: 'line',
                    data: {
                        labels: withMood.map(s => new Date(s.created_at).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })),
                        datasets: [{
                            label: 'Before',
                            data: withMood.map(s => s.pre_mood),
                            borderColor: 'rgba(134, 134, 139, 0.6)',
                            backgroundColor: 'rgba(134, 134, 139, 0.05)',
                            fill: true, tension: 0.4, borderWidth: 1.5,
                            pointRadius: 3, pointBackgroundColor: '#86868b',
                        }, {
                            label: 'After',
                            data: withMood.map(s => s.post_mood),
                            borderColor: 'rgba(29, 29, 31, 0.8)',
                            backgroundColor: 'rgba(29, 29, 31, 0.05)',
                            fill: true, tension: 0.4, borderWidth: 2,
                            pointRadius: 3, pointBackgroundColor: '#1d1d1f',
                        }]
                    },
                    options: {
                        responsive: true, maintainAspectRatio: false,
                        plugins: { legend: { labels: { color: '#86868b', font: { family: 'DM Sans', size: 11 } } } },
                        scales: {
                            x: { ticks: { color: '#86868b', font: { size: 10 } }, grid: { color: 'rgba(0,0,0,0.04)' } },
                            y: { min: 0, max: 10, ticks: { color: '#86868b', font: { size: 10 }, stepSize: 2 }, grid: { color: 'rgba(0,0,0,0.04)' } }
                        }
                    }
                });
            }
        }

        // Sessions per Week chart
        const weekMap = {};
        sessions.forEach(s => {
            const d = new Date(s.created_at);
            // Get ISO week start (Monday)
            const day = d.getDay() || 7;
            const weekStart = new Date(d);
            weekStart.setDate(d.getDate() - day + 1);
            const key = weekStart.toISOString().slice(0, 10);
            weekMap[key] = (weekMap[key] || 0) + 1;
        });

        const weekKeys = Object.keys(weekMap).sort().slice(-8);
        if (weekKeys.length > 1) {
            const weekCanvas = document.getElementById('week-chart');
            if (weekCanvas) {
                if (this.weekChart) this.weekChart.destroy();
                this.weekChart = new Chart(weekCanvas.getContext('2d'), {
                    type: 'bar',
                    data: {
                        labels: weekKeys.map(k => {
                            const d = new Date(k);
                            return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
                        }),
                        datasets: [{
                            label: 'Sessions',
                            data: weekKeys.map(k => weekMap[k]),
                            backgroundColor: 'rgba(29, 29, 31, 0.15)',
                            borderColor: 'rgba(29, 29, 31, 0.4)',
                            borderWidth: 1, borderRadius: 4,
                        }]
                    },
                    options: {
                        responsive: true, maintainAspectRatio: false,
                        plugins: { legend: { display: false } },
                        scales: {
                            x: { ticks: { color: '#86868b', font: { size: 10 } }, grid: { display: false } },
                            y: { beginAtZero: true, ticks: { color: '#86868b', font: { size: 10 }, stepSize: 1 }, grid: { color: 'rgba(0,0,0,0.04)' } }
                        }
                    }
                });
            }
        }
    }

    _showInviteModal() {
        const existing = document.querySelector('.synch-create-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.className = 'synch-create-modal';
        modal.innerHTML = `
            <div class="invite-modal-card">
                <div class="invite-modal-header">
                    <div class="synch-create-title">Invite Links</div>
                    <button class="synch-room-back" id="btn-close-invite">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                </div>
                <div class="invite-generate-section">
                    <div class="form-group">
                        <label class="form-label">Duration</label>
                        <select class="form-select" id="invite-duration">
                            <option value="week">1 Week</option>
                            <option value="month">1 Month</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Max Uses</label>
                        <input type="number" class="form-input" id="invite-max" value="10" min="1" max="100">
                    </div>
                    <button class="form-btn form-btn-primary" id="btn-generate-invite" style="width:100%">Generate Link</button>
                </div>
                <div class="invite-result hidden" id="invite-result">
                    <div class="invite-link-display" id="invite-link-text"></div>
                    <button class="invite-copy-btn" id="btn-copy-invite-link">Copy Link</button>
                </div>
                <div class="invite-list-header">Active Links</div>
                <div class="invite-list" id="invite-list">Loading...</div>
            </div>
        `;

        this.container.querySelector('.view-profile').appendChild(modal);

        document.getElementById('btn-close-invite')?.addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });

        document.getElementById('btn-generate-invite')?.addEventListener('click', async () => {
            const duration = document.getElementById('invite-duration')?.value || 'week';
            const maxUses = parseInt(document.getElementById('invite-max')?.value) || 10;

            const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
            let code = '';
            for (let i = 0; i < 8; i++) code += chars.charAt(Math.floor(Math.random() * chars.length));

            const expiresAt = new Date();
            if (duration === 'week') expiresAt.setDate(expiresAt.getDate() + 7);
            else expiresAt.setMonth(expiresAt.getMonth() + 1);

            const { error } = await this.sb.from('invite_links').insert({
                code,
                created_by: auth.getMemberId(),
                duration_type: duration,
                expires_at: expiresAt.toISOString(),
                max_uses: maxUses,
            });

            if (error) { console.error('Invite error:', error); return; }

            const link = `${location.origin}/app.html?invite=${code}`;
            const resultEl = document.getElementById('invite-result');
            const linkText = document.getElementById('invite-link-text');
            if (resultEl) resultEl.classList.remove('hidden');
            if (linkText) linkText.textContent = link;

            this._loadInviteList();
        });

        document.getElementById('btn-copy-invite-link')?.addEventListener('click', () => {
            const link = document.getElementById('invite-link-text')?.textContent;
            if (link) {
                navigator.clipboard?.writeText(link);
                const btn = document.getElementById('btn-copy-invite-link');
                if (btn) { btn.textContent = 'Copied!'; setTimeout(() => btn.textContent = 'Copy Link', 2000); }
            }
        });

        this._loadInviteList();
    }

    async _loadInviteList() {
        const { data: invites } = await this.sb
            .from('invite_links')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(20);

        const el = document.getElementById('invite-list');
        if (!el) return;

        if (!invites?.length) {
            el.innerHTML = '<div class="profile-stat-empty">No invite links yet</div>';
            return;
        }

        el.innerHTML = invites.map(inv => {
            const expired = new Date(inv.expires_at) < new Date();
            const exhausted = inv.used_count >= inv.max_uses;
            const status = !inv.is_active ? 'disabled' : expired ? 'expired' : exhausted ? 'full' : 'active';
            return `
                <div class="invite-item ${status !== 'active' ? 'invite-inactive' : ''}">
                    <span class="invite-item-code">${inv.code}</span>
                    <span class="invite-item-stats">${inv.used_count}/${inv.max_uses}</span>
                    <span class="invite-item-expiry">${expired ? 'Expired' : new Date(inv.expires_at).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}</span>
                    <span class="invite-status-${status}">${status}</span>
                    ${status === 'active' ? `<button class="invite-item-disable" data-id="${inv.id}">Disable</button>` : ''}
                </div>
            `;
        }).join('');

        el.querySelectorAll('.invite-item-disable').forEach(btn => {
            btn.addEventListener('click', async () => {
                await this.sb.from('invite_links').update({ is_active: false }).eq('id', btn.dataset.id);
                this._loadInviteList();
            });
        });
    }

    _esc(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    destroy() {
        if (this.moodChart) { this.moodChart.destroy(); this.moodChart = null; }
        if (this.weekChart) { this.weekChart.destroy(); this.weekChart = null; }
    }
}
