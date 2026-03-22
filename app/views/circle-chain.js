import { getClient } from '../lib/supabase.js';
import { auth } from '../lib/auth.js';

const STATUS_ICONS = { waiting: '○', active: '●', completed: '✓', skipped: '–', timed_out: '⏱' };

export default class CircleChainView {
    constructor(container) {
        this.container = container;
        this.sb = getClient();
        this.circles = [];
        this.skills = [];
        this.members = [];
        this.currentCircle = null;
        this.channels = [];
        this.countdownTimer = null;
    }

    async render() {
        await this._loadSkills();
        await this._loadCircleList();
    }

    // ──────── CIRCLE LIST ────────

    async _loadCircleList() {
        this.currentCircle = null;
        this._clearCountdown();

        const memberId = auth.getMemberId();
        const { data: participations } = await this.sb
            .from('circle_participants')
            .select('circle_id, status, order_position, assigned_at, deadline_at')
            .eq('member_id', memberId);

        const circleIds = (participations || []).map(p => p.circle_id);
        if (circleIds.length === 0 && !auth.isAdmin()) {
            this._renderEmpty();
            return;
        }

        // Load circles the user participates in
        let query = this.sb.from('circles').select('*');
        if (!auth.isAdmin()) {
            query = query.in('id', circleIds);
        }
        const { data: circles } = await query.order('created_at', { ascending: false });
        this.circles = circles || [];

        // Load participant counts
        const allCircleIds = this.circles.map(c => c.id);
        const { data: allParticipants } = await this.sb
            .from('circle_participants')
            .select('circle_id, status, member_id')
            .in('circle_id', allCircleIds);

        // Build participation map
        const partMap = {};
        (participations || []).forEach(p => { partMap[p.circle_id] = p; });

        // Build counts
        const countMap = {};
        (allParticipants || []).forEach(p => {
            if (!countMap[p.circle_id]) countMap[p.circle_id] = { total: 0, completed: 0 };
            countMap[p.circle_id].total++;
            if (p.status === 'completed') countMap[p.circle_id].completed++;
        });

        // Load skill tags
        const { data: skillTags } = await this.sb
            .from('circle_skill_tags')
            .select('circle_id, skill_id')
            .in('circle_id', allCircleIds);

        const skillMap = {};
        (skillTags || []).forEach(st => {
            if (!skillMap[st.circle_id]) skillMap[st.circle_id] = [];
            const skill = this.skills.find(s => s.id === st.skill_id);
            if (skill) skillMap[st.circle_id].push(skill);
        });

        // Categorize
        const yourTurn = [];
        const inProgress = [];
        const completed = [];
        const drafts = [];

        this.circles.forEach(c => {
            const myPart = partMap[c.id];
            const counts = countMap[c.id] || { total: 0, completed: 0 };
            c._myStatus = myPart?.status;
            c._counts = counts;
            c._skills = skillMap[c.id] || [];
            c._deadline = myPart?.deadline_at;

            if (c.status === 'draft') {
                drafts.push(c);
            } else if (c.status === 'completed' || c.status === 'cancelled') {
                completed.push(c);
            } else if (myPart?.status === 'active') {
                yourTurn.push(c);
            } else {
                inProgress.push(c);
            }
        });

        this.container.innerHTML = `
            <div class="circle-chain-list">
                ${auth.isAdmin() ? `
                    <button class="cc-create-btn" id="cc-btn-create">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                        Create Circle
                    </button>
                ` : ''}

                ${yourTurn.length ? `
                    <div class="cc-section">
                        <div class="cc-section-title"><span class="cc-dot cc-dot-active"></span> Your Turn (${yourTurn.length})</div>
                        <div class="cc-cards-grid">${yourTurn.map(c => this._renderCircleCard(c)).join('')}</div>
                    </div>
                ` : ''}

                ${inProgress.length ? `
                    <div class="cc-section">
                        <div class="cc-section-title"><span class="cc-dot cc-dot-waiting"></span> In Progress (${inProgress.length})</div>
                        <div class="cc-cards-grid">${inProgress.map(c => this._renderCircleCard(c)).join('')}</div>
                    </div>
                ` : ''}

                ${completed.length ? `
                    <div class="cc-section">
                        <div class="cc-section-title"><span class="cc-dot cc-dot-done"></span> Completed (${completed.length})</div>
                        <div class="cc-cards-grid">${completed.map(c => this._renderCircleCard(c)).join('')}</div>
                    </div>
                ` : ''}

                ${auth.isAdmin() && drafts.length ? `
                    <div class="cc-section">
                        <div class="cc-section-title">Drafts (${drafts.length})</div>
                        <div class="cc-cards-grid">${drafts.map(c => this._renderCircleCard(c)).join('')}</div>
                    </div>
                ` : ''}

                ${!yourTurn.length && !inProgress.length && !completed.length && !drafts.length ? `
                    <div class="cc-empty">
                        <div class="cc-empty-icon">○</div>
                        <div class="cc-empty-text">No circles yet</div>
                        <div class="cc-empty-sub">When you're added to a circle, it will appear here</div>
                    </div>
                ` : ''}
            </div>
        `;

        // Bind events
        document.getElementById('cc-btn-create')?.addEventListener('click', () => this._showCreateForm());
        this.container.querySelectorAll('.cc-card').forEach(card => {
            card.addEventListener('click', () => this._openCircle(card.dataset.circleId));
        });
    }

    _renderCircleCard(c) {
        const counts = c._counts;
        const skills = c._skills;
        const isYourTurn = c._myStatus === 'active';
        const timeLeft = c._deadline ? this._formatTimeLeft(c._deadline) : '';

        const hasCover = !!c.cover_url;
        return `
            <div class="cc-card ${isYourTurn ? 'cc-card-urgent' : ''} ${hasCover ? 'cc-card--has-cover' : 'cc-card--no-cover'}" data-circle-id="${c.id}">
                ${hasCover
                    ? `<div class="cc-card-cover"><img src="${c.cover_url}" alt="" loading="lazy"></div>`
                    : `<div class="cc-card-cover-empty">${skills[0]?.icon || '○'}</div>`
                }
                <div class="cc-card-body">
                    <div class="cc-card-title">${this._esc(c.title)}</div>
                    <div class="cc-card-meta">
                        ${counts.completed}/${counts.total} done
                        ${isYourTurn && timeLeft ? ` · <span class="cc-time-left">⏱ ${timeLeft}</span>` : ''}
                        ${!isYourTurn && c.status === 'active' ? ' · in progress' : ''}
                        ${c.status === 'completed' ? ' · completed' : ''}
                        ${c.status === 'draft' ? ' · draft' : ''}
                    </div>
                    ${skills.length ? `<div class="cc-card-skills">${skills.map(s => `<span class="cc-skill-tag">${s.icon}</span>`).join('')}</div>` : ''}
                </div>
            </div>
        `;
    }

    _renderEmpty() {
        this.container.innerHTML = `
            <div class="cc-empty">
                <div class="cc-empty-icon">○</div>
                <div class="cc-empty-text">No circles yet</div>
                <div class="cc-empty-sub">When you're added to a circle, it will appear here</div>
            </div>
        `;
    }

    // ──────── CIRCLE DETAIL ────────

    async _openCircle(circleId) {
        this._clearCountdown();
        const { data: circle } = await this.sb.from('circles').select('*').eq('id', circleId).single();
        if (!circle) return;
        this.currentCircle = circle;

        // Load participants with member info
        const { data: participants } = await this.sb
            .from('circle_participants')
            .select('*, members:member_id(id, name, avatar_url)')
            .eq('circle_id', circleId)
            .order('order_position');

        // Load submissions
        const { data: submissions } = await this.sb
            .from('circle_submissions')
            .select('*, members:member_id(id, name, avatar_url)')
            .eq('circle_id', circleId)
            .order('submitted_at');

        // Load likes counts
        const submissionIds = (submissions || []).map(s => s.id);
        let likesMap = {};
        let myLikes = new Set();
        if (submissionIds.length) {
            const { data: likes } = await this.sb
                .from('circle_likes')
                .select('submission_id, member_id')
                .in('submission_id', submissionIds);
            (likes || []).forEach(l => {
                likesMap[l.submission_id] = (likesMap[l.submission_id] || 0) + 1;
                if (l.member_id === auth.getMemberId()) myLikes.add(l.submission_id);
            });
        }

        // Load comments
        const { data: comments } = await this.sb
            .from('circle_comments')
            .select('*, members:member_id(id, name, avatar_url)')
            .eq('circle_id', circleId)
            .order('created_at');

        // Load skill tags
        const { data: skillTags } = await this.sb
            .from('circle_skill_tags')
            .select('skill_id')
            .eq('circle_id', circleId);
        const circleSkills = (skillTags || []).map(st => this.skills.find(s => s.id === st.skill_id)).filter(Boolean);

        const memberId = auth.getMemberId();
        const myParticipant = (participants || []).find(p => p.member_id === memberId);
        const isMyTurn = myParticipant?.status === 'active';
        const submissionMap = {};
        (submissions || []).forEach(s => { submissionMap[s.member_id] = s; });

        const completedCount = (participants || []).filter(p => p.status === 'completed').length;
        const totalCount = (participants || []).length;

        // Apply theme
        const theme = circle.theme || {};
        const themeStyle = [
            theme.bg ? `--cc-bg: ${theme.bg}` : '',
            theme.accent ? `--cc-accent: ${theme.accent}` : '',
        ].filter(Boolean).join(';');
        const themeClass = theme.css_class || '';

        this.container.innerHTML = `
            <div class="cc-detail ${themeClass}" ${themeStyle ? `style="${themeStyle}"` : ''}>
                ${theme.custom_css ? `<style>${theme.custom_css}</style>` : ''}

                <button class="cc-back-btn" id="cc-btn-back">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
                    Back
                </button>

                ${circle.cover_url ? `<div class="cc-detail-cover"><img src="${circle.cover_url}" alt=""></div>` : ''}

                <div class="cc-detail-header">
                    <div class="cc-detail-title">"${this._esc(circle.title)}"</div>
                    <div class="cc-detail-skills">
                        ${circleSkills.map(s => `<span class="cc-skill-tag">${s.icon} ${s.name}</span>`).join(' ')}
                    </div>
                    <div class="cc-detail-meta">
                        ⏱ ${circle.time_limit_hours}h per turn · ${completedCount}/${totalCount} done
                        ${circle.status === 'completed' ? ' · Completed' : ''}
                    </div>
                    ${circle.guide_text ? `<div class="cc-guide"><div class="cc-guide-label">Guide</div><div class="cc-guide-text">${this._esc(circle.guide_text)}</div></div>` : ''}
                    <div class="cc-task-prompt">${this._esc(circle.task_prompt)}</div>
                </div>

                ${auth.isAdmin() && circle.status === 'draft' ? `
                    <div class="cc-admin-actions">
                        <button class="cc-start-btn" id="cc-btn-start">Start Circle</button>
                        <button class="cc-cancel-btn" id="cc-btn-cancel-circle">Cancel</button>
                    </div>
                ` : ''}

                <div class="cc-chain">
                    <div class="cc-chain-title">Chain Progress</div>
                    ${(participants || []).map(p => {
                        const sub = submissionMap[p.member_id];
                        const member = p.members;
                        const isActive = p.status === 'active' && p.member_id === memberId;
                        const likeCount = sub ? (likesMap[sub.id] || 0) : 0;
                        const iLiked = sub ? myLikes.has(sub.id) : false;

                        if (isActive) {
                            return `
                                <div class="cc-chain-item cc-chain-active">
                                    <div class="cc-chain-marker">●</div>
                                    <div class="cc-chain-content">
                                        <div class="cc-chain-name">YOUR TURN</div>
                                        <div class="cc-submission-form" id="cc-submission-form">
                                            <textarea class="cc-textarea" id="cc-text" placeholder="Write your response..." rows="4"></textarea>
                                            <div class="cc-photo-row">
                                                <label class="cc-photo-btn" for="cc-photo-input">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                                                    Add photo
                                                </label>
                                                <input type="file" id="cc-photo-input" accept="image/*" style="display:none">
                                                <span class="cc-photo-name" id="cc-photo-name"></span>
                                            </div>
                                            <div class="cc-submit-row">
                                                <button class="cc-submit-btn" id="cc-btn-submit">Submit →</button>
                                                <div class="cc-countdown" id="cc-countdown">${p.deadline_at ? this._formatTimeLeft(p.deadline_at) : ''}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }

                        if (sub) {
                            return `
                                <div class="cc-chain-item cc-chain-done">
                                    <div class="cc-chain-marker">✓</div>
                                    <div class="cc-chain-content">
                                        <div class="cc-chain-name">${this._esc(member?.name || 'Unknown')}</div>
                                        <div class="cc-chain-text">${this._esc(sub.text_content)}</div>
                                        ${sub.photo_url ? `<img class="cc-chain-photo" src="${sub.photo_url}" alt="" loading="lazy">` : ''}
                                        <div class="cc-chain-actions">
                                            <button class="cc-like-btn ${iLiked ? 'cc-liked' : ''}" data-submission-id="${sub.id}">
                                                ${iLiked ? '♥' : '♡'} ${likeCount || ''}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }

                        // Waiting or timed_out
                        return `
                            <div class="cc-chain-item cc-chain-waiting">
                                <div class="cc-chain-marker">${STATUS_ICONS[p.status] || '○'}</div>
                                <div class="cc-chain-content">
                                    <div class="cc-chain-name">${this._esc(member?.name || 'Unknown')}</div>
                                    <div class="cc-chain-status">${p.status === 'timed_out' ? 'Timed out' : p.status === 'active' ? 'Working on it...' : 'Waiting...'}</div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <div class="cc-comments-section">
                    <div class="cc-comments-title">Comments</div>
                    <div class="cc-comments-list" id="cc-comments-list">
                        ${(comments || []).map(c => `
                            <div class="cc-comment">
                                <span class="cc-comment-author">${this._esc(c.members?.name || 'Unknown')}:</span>
                                <span class="cc-comment-text">${this._formatMentions(this._esc(c.text_content))}</span>
                            </div>
                        `).join('')}
                        ${!(comments || []).length ? '<div class="cc-comments-empty">No comments yet</div>' : ''}
                    </div>
                    ${myParticipant ? `
                        <div class="cc-comment-form">
                            <input type="text" class="cc-comment-input" id="cc-comment-input" placeholder="Write a comment... @mention">
                            <button class="cc-comment-send" id="cc-btn-comment">→</button>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;

        // Bind events
        document.getElementById('cc-btn-back')?.addEventListener('click', () => this._loadCircleList());
        document.getElementById('cc-btn-submit')?.addEventListener('click', () => this._submitResponse());
        document.getElementById('cc-photo-input')?.addEventListener('change', (e) => {
            const name = e.target.files[0]?.name || '';
            const el = document.getElementById('cc-photo-name');
            if (el) el.textContent = name;
        });
        document.getElementById('cc-btn-comment')?.addEventListener('click', () => this._submitComment());
        document.getElementById('cc-comment-input')?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this._submitComment();
        });
        document.getElementById('cc-btn-start')?.addEventListener('click', () => this._startCircle(circleId));
        document.getElementById('cc-btn-cancel-circle')?.addEventListener('click', () => this._cancelCircle(circleId));

        // Like buttons
        this.container.querySelectorAll('.cc-like-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this._toggleLike(btn.dataset.submissionId);
            });
        });

        // Start countdown timer if it's my turn
        if (isMyTurn && myParticipant.deadline_at) {
            this._startCountdown(myParticipant.deadline_at);
        }

        // Subscribe to realtime updates
        this._subscribeCircle(circleId);
    }

    // ──────── SUBMISSION ────────

    async _submitResponse() {
        const textEl = document.getElementById('cc-text');
        const photoEl = document.getElementById('cc-photo-input');
        const text = textEl?.value?.trim();
        if (!text) { textEl?.focus(); return; }

        const btn = document.getElementById('cc-btn-submit');
        if (btn) { btn.disabled = true; btn.textContent = 'Submitting...'; }

        try {
            let photoUrl = null;
            const file = photoEl?.files?.[0];
            if (file) {
                const ext = file.name.split('.').pop();
                const path = `${this.currentCircle.id}/${auth.getMemberId()}.${ext}`;
                const { error: uploadErr } = await this.sb.storage
                    .from('circle-photos')
                    .upload(path, file, { upsert: true });
                if (!uploadErr) {
                    const { data: urlData } = this.sb.storage.from('circle-photos').getPublicUrl(path);
                    photoUrl = urlData?.publicUrl;
                }
            }

            // Insert submission
            const { error } = await this.sb.from('circle_submissions').insert({
                circle_id: this.currentCircle.id,
                member_id: auth.getMemberId(),
                text_content: text,
                photo_url: photoUrl,
            });

            if (error) throw error;

            // Advance turn
            await this._advanceTurn(this.currentCircle.id);

            // Refresh
            await this._openCircle(this.currentCircle.id);
        } catch (err) {
            console.error('Submit error:', err);
            if (btn) { btn.disabled = false; btn.textContent = 'Submit →'; }
        }
    }

    // ──────── TURN ADVANCEMENT ────────

    async _advanceTurn(circleId) {
        const memberId = auth.getMemberId();

        // Mark current participant as completed
        await this.sb
            .from('circle_participants')
            .update({ status: 'completed', completed_at: new Date().toISOString() })
            .eq('circle_id', circleId)
            .eq('member_id', memberId)
            .eq('status', 'active');

        // Find next waiting participant
        const { data: waiting } = await this.sb
            .from('circle_participants')
            .select('id, order_position')
            .eq('circle_id', circleId)
            .eq('status', 'waiting')
            .order('order_position')
            .limit(1);

        if (waiting && waiting.length > 0) {
            const next = waiting[0];
            const circle = this.currentCircle;
            const now = new Date();
            const deadline = new Date(now.getTime() + (circle.time_limit_hours || 24) * 3600000);

            await this.sb
                .from('circle_participants')
                .update({
                    status: 'active',
                    assigned_at: now.toISOString(),
                    deadline_at: deadline.toISOString(),
                })
                .eq('id', next.id);

            await this.sb
                .from('circles')
                .update({ current_turn: next.order_position })
                .eq('id', circleId);
        } else {
            // Circle complete
            await this.sb
                .from('circles')
                .update({ status: 'completed', completed_at: new Date().toISOString() })
                .eq('id', circleId);
        }

        // Update skill scores
        await this._updateScores(circleId, memberId);
    }

    async _updateScores(circleId, memberId) {
        const { data: skillTags } = await this.sb
            .from('circle_skill_tags')
            .select('skill_id, weight')
            .eq('circle_id', circleId);

        for (const tag of (skillTags || [])) {
            const points = 10 * (tag.weight || 1);

            // Upsert skill score
            const { data: existing } = await this.sb
                .from('member_skill_scores')
                .select('score, circles_completed')
                .eq('member_id', memberId)
                .eq('skill_id', tag.skill_id)
                .single();

            if (existing) {
                await this.sb
                    .from('member_skill_scores')
                    .update({
                        score: existing.score + points,
                        circles_completed: existing.circles_completed + 1,
                        last_updated: new Date().toISOString(),
                    })
                    .eq('member_id', memberId)
                    .eq('skill_id', tag.skill_id);
            } else {
                await this.sb
                    .from('member_skill_scores')
                    .insert({
                        member_id: memberId,
                        skill_id: tag.skill_id,
                        score: points,
                        circles_completed: 1,
                    });
            }
        }
    }

    // ──────── LIKES ────────

    async _toggleLike(submissionId) {
        const memberId = auth.getMemberId();

        const { data: existing } = await this.sb
            .from('circle_likes')
            .select('submission_id')
            .eq('submission_id', submissionId)
            .eq('member_id', memberId)
            .single();

        if (existing) {
            await this.sb
                .from('circle_likes')
                .delete()
                .eq('submission_id', submissionId)
                .eq('member_id', memberId);
        } else {
            await this.sb
                .from('circle_likes')
                .insert({ submission_id: submissionId, member_id: memberId });
        }

        if (this.currentCircle) {
            await this._openCircle(this.currentCircle.id);
        }
    }

    // ──────── COMMENTS ────────

    async _submitComment() {
        const input = document.getElementById('cc-comment-input');
        const text = input?.value?.trim();
        if (!text || !this.currentCircle) return;

        // Parse @mentions
        const mentionRegex = /@(\w+)/g;
        const mentionedNames = [];
        let match;
        while ((match = mentionRegex.exec(text)) !== null) {
            mentionedNames.push(match[1]);
        }

        // Resolve mentioned member IDs
        let mentionedIds = [];
        if (mentionedNames.length) {
            const { data: mentioned } = await this.sb
                .from('members')
                .select('id, name')
                .in('name', mentionedNames);
            mentionedIds = (mentioned || []).map(m => m.id);
        }

        await this.sb.from('circle_comments').insert({
            circle_id: this.currentCircle.id,
            member_id: auth.getMemberId(),
            text_content: text,
            mentioned_member_ids: mentionedIds,
        });

        input.value = '';
        await this._openCircle(this.currentCircle.id);
    }

    // ──────── ADMIN: CREATE CIRCLE ────────

    async _showCreateForm() {
        const { data: members } = await this.sb
            .from('members')
            .select('id, name, avatar_url')
            .order('name');
        this.members = members || [];

        // All data rendered is from our own Supabase DB and escaped via _esc()
        this.container.innerHTML = `
            <div class="cc-create-form">
                <button class="cc-back-btn" id="cc-btn-back-create">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
                    Back
                </button>

                <div class="cc-create-header">
                    <div class="cc-create-icon">○</div>
                    <div class="cc-create-title">New Circle</div>
                    <div class="cc-create-subtitle">Create a challenge that flows through your community</div>
                </div>

                <div class="cc-form-card">
                    <div class="cc-form-group">
                        <label class="cc-form-label">Title</label>
                        <input type="text" class="cc-form-input" id="cc-create-title" placeholder="e.g. Write 4 lines of poetry">
                    </div>

                    <div class="cc-form-group">
                        <label class="cc-form-label">Challenge</label>
                        <div class="cc-form-hint">What should each person do when it's their turn?</div>
                        <textarea class="cc-form-textarea" id="cc-create-prompt" rows="3" placeholder="Describe the task..."></textarea>
                    </div>

                    <div class="cc-form-group">
                        <label class="cc-form-label">Guide <span class="cc-form-optional">optional</span></label>
                        <textarea class="cc-form-textarea" id="cc-create-guide" rows="2" placeholder="Tips, rules, or inspiration for participants"></textarea>
                    </div>

                    <div class="cc-form-group">
                        <label class="cc-form-label">Description <span class="cc-form-optional">optional</span></label>
                        <input type="text" class="cc-form-input" id="cc-create-desc" placeholder="One-liner about what this circle is about">
                    </div>
                </div>

                <div class="cc-form-card">
                    <div class="cc-form-group">
                        <label class="cc-form-label">What does this circle develop?</label>
                        <div class="cc-form-hint">Select skills that participants will grow</div>
                        <div class="cc-skills-grid" id="cc-skills-grid">
                            ${this.skills.map(s => `
                                <label class="cc-skill-pill">
                                    <input type="checkbox" value="${s.id}" data-skill>
                                    <span class="cc-skill-pill-inner">${s.icon} ${s.name_ru || s.name}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>

                    <div class="cc-form-group">
                        <label class="cc-form-label">Time per turn</label>
                        <select class="cc-form-select" id="cc-create-time">
                            <option value="6">6 hours</option>
                            <option value="12">12 hours</option>
                            <option value="24" selected>24 hours (1 day)</option>
                            <option value="48">48 hours (2 days)</option>
                            <option value="72">72 hours (3 days)</option>
                        </select>
                    </div>
                </div>

                <div class="cc-form-card">
                    <div class="cc-form-group">
                        <label class="cc-form-label">Who's in the circle?</label>
                        <label class="cc-all-toggle">
                            <input type="checkbox" id="cc-all-members">
                            <span class="cc-all-toggle-label">Everyone</span>
                        </label>
                        <div class="cc-members-grid" id="cc-members-grid">
                            ${this.members.map(m => {
                                const initial = (m.name || '?').charAt(0).toUpperCase();
                                const hasAvatar = m.avatar_url ? 'style="background-image:url(' + m.avatar_url + ');background-size:cover;"' : '';
                                return `<label class="cc-member-pill"><input type="checkbox" value="${m.id}" data-member><span class="cc-member-pill-inner"><span class="cc-member-avatar" ${hasAvatar}>${m.avatar_url ? '' : initial}</span><span class="cc-member-name">${this._esc(m.name)}</span></span></label>`;
                            }).join('')}
                        </div>
                        <div class="cc-members-count" id="cc-members-count">0 selected</div>
                    </div>
                </div>

                <div class="cc-form-card">
                    <div class="cc-form-group">
                        <label class="cc-form-label">Cover Photo <span class="cc-form-optional">optional</span></label>
                        <div class="cc-form-hint">Square image — will be cropped to fit the card</div>
                        <div class="cc-cover-upload" id="cc-cover-upload">
                            <input type="file" id="cc-cover-input" accept="image/*" style="display:none">
                            <div class="cc-cover-placeholder" id="cc-cover-placeholder">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                                <span>Upload image</span>
                            </div>
                            <div class="cc-cover-preview-wrap" id="cc-cover-preview-wrap">
                                <canvas id="cc-cover-canvas"></canvas>
                                <div class="cc-cover-change-hint">Tap to change</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cc-form-actions">
                    <button class="cc-create-submit" id="cc-btn-save-circle">
                        Create Circle
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                    </button>
                </div>
            </div>
        `;

        document.getElementById('cc-btn-back-create')?.addEventListener('click', () => this._loadCircleList());
        const updateCount = () => {
            const count = this.container.querySelectorAll('[data-member]:checked').length;
            const el = document.getElementById('cc-members-count');
            if (el) el.textContent = count === 0 ? '0 selected' : `${count} selected`;
        };
        document.getElementById('cc-all-members')?.addEventListener('change', (e) => {
            this.container.querySelectorAll('[data-member]').forEach(cb => { cb.checked = e.target.checked; });
            updateCount();
        });
        this.container.querySelectorAll('[data-member]').forEach(cb => cb.addEventListener('change', updateCount));
        document.getElementById('cc-btn-save-circle')?.addEventListener('click', () => this._createCircle());

        // Cover photo upload with square crop
        const coverUpload = document.getElementById('cc-cover-upload');
        const coverInput = document.getElementById('cc-cover-input');
        const coverPlaceholder = document.getElementById('cc-cover-placeholder');
        const previewWrap = document.getElementById('cc-cover-preview-wrap');
        const canvas = document.getElementById('cc-cover-canvas');
        coverUpload?.addEventListener('click', () => coverInput?.click());
        coverInput?.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file || !canvas || !previewWrap || !coverPlaceholder) return;
            const img = new Image();
            img.onload = () => {
                // Square crop from center
                const size = Math.min(img.width, img.height);
                const sx = (img.width - size) / 2;
                const sy = (img.height - size) / 2;
                const outSize = 600; // output resolution
                canvas.width = outSize;
                canvas.height = outSize;
                canvas.style.width = '100%';
                canvas.style.height = '100%';
                canvas.style.display = 'block';
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, sx, sy, size, size, 0, 0, outSize, outSize);
                previewWrap.classList.add('active');
                coverPlaceholder.style.display = 'none';
                // Store cropped blob for upload
                canvas.toBlob((blob) => { this._coverBlob = blob; }, 'image/jpeg', 0.85);
            };
            img.src = URL.createObjectURL(file);
        });
    }

    async _createCircle() {
        const title = document.getElementById('cc-create-title')?.value?.trim();
        const prompt = document.getElementById('cc-create-prompt')?.value?.trim();
        const guide = document.getElementById('cc-create-guide')?.value?.trim();
        const desc = document.getElementById('cc-create-desc')?.value?.trim();
        const timeLimit = parseInt(document.getElementById('cc-create-time')?.value) || 24;
        const selectedSkills = [...this.container.querySelectorAll('[data-skill]:checked')].map(cb => cb.value);
        const selectedMembers = [...this.container.querySelectorAll('[data-member]:checked')].map(cb => cb.value);
        const coverBlob = this._coverBlob || null;

        if (!title || !prompt) return;
        if (selectedMembers.length < 2) return;

        const btn = document.getElementById('cc-btn-save-circle');
        if (btn) { btn.disabled = true; btn.textContent = 'Creating...'; }

        try {
            // Upload cropped cover photo if present
            let coverUrl = null;
            if (coverBlob) {
                const path = `covers/${Date.now()}.jpg`;
                const { error: uploadErr } = await this.sb.storage
                    .from('circle-photos')
                    .upload(path, coverBlob, { contentType: 'image/jpeg', upsert: true });
                if (!uploadErr) {
                    const { data: urlData } = this.sb.storage.from('circle-photos').getPublicUrl(path);
                    coverUrl = urlData?.publicUrl;
                }
            }

            const { data: circle, error } = await this.sb
                .from('circles')
                .insert({
                    title,
                    task_prompt: prompt,
                    guide_text: guide || null,
                    description: desc || null,
                    time_limit_hours: timeLimit,
                    created_by: auth.getMemberId(),
                    cover_url: coverUrl,
                    status: 'draft',
                })
                .select()
                .single();

            if (error) throw error;

            if (selectedSkills.length) {
                await this.sb.from('circle_skill_tags').insert(
                    selectedSkills.map(skillId => ({ circle_id: circle.id, skill_id: skillId }))
                );
            }

            const shuffled = this._shuffle([...selectedMembers]);
            await this.sb.from('circle_participants').insert(
                shuffled.map((memberId, i) => ({
                    circle_id: circle.id,
                    member_id: memberId,
                    order_position: i,
                }))
            );

            this._coverBlob = null;
            // Redirect to list — new circle appears in Drafts section
            await this._loadCircleList();
        } catch (err) {
            console.error('Create circle error:', err);
            if (btn) { btn.disabled = false; btn.textContent = 'Create Circle'; }
        }
    }

    async _startCircle(circleId) {
        const { data: first } = await this.sb
            .from('circle_participants')
            .select('id')
            .eq('circle_id', circleId)
            .eq('order_position', 0)
            .single();

        if (!first) return;

        const { data: circle } = await this.sb.from('circles').select('time_limit_hours').eq('id', circleId).single();
        const now = new Date();
        const deadline = new Date(now.getTime() + (circle?.time_limit_hours || 24) * 3600000);

        await this.sb
            .from('circle_participants')
            .update({ status: 'active', assigned_at: now.toISOString(), deadline_at: deadline.toISOString() })
            .eq('id', first.id);

        await this.sb
            .from('circles')
            .update({ status: 'active', started_at: now.toISOString(), current_turn: 0 })
            .eq('id', circleId);

        await this._openCircle(circleId);
    }

    async _cancelCircle(circleId) {
        await this.sb.from('circles').update({ status: 'cancelled' }).eq('id', circleId);
        await this._loadCircleList();
    }

    // ──────── REALTIME ────────

    _subscribeCircle(circleId) {
        this._unsubscribeAll();

        const ch = this.sb.channel(`circle-${circleId}`)
            .on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'circle_submissions',
                filter: `circle_id=eq.${circleId}`,
            }, () => { if (this.currentCircle?.id === circleId) this._openCircle(circleId); })
            .on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'circle_comments',
                filter: `circle_id=eq.${circleId}`,
            }, () => { if (this.currentCircle?.id === circleId) this._openCircle(circleId); })
            .subscribe();

        this.channels.push(ch);
    }

    _unsubscribeAll() {
        this.channels.forEach(ch => this.sb.removeChannel(ch));
        this.channels = [];
    }

    // ──────── HELPERS ────────

    async _loadSkills() {
        const { data } = await this.sb.from('circle_skills').select('*').order('name');
        this.skills = data || [];
    }

    _formatTimeLeft(deadline) {
        const ms = new Date(deadline) - Date.now();
        if (ms <= 0) return 'Overdue';
        const h = Math.floor(ms / 3600000);
        const m = Math.floor((ms % 3600000) / 60000);
        if (h > 0) return `${h}h ${m}m`;
        return `${m}m`;
    }

    _formatMentions(text) {
        return text.replace(/@(\w+)/g, '<span class="cc-mention">@$1</span>');
    }

    _startCountdown(deadline) {
        this._clearCountdown();
        const el = document.getElementById('cc-countdown');
        if (!el) return;
        this.countdownTimer = setInterval(() => {
            const left = this._formatTimeLeft(deadline);
            el.textContent = left;
            if (left === 'Overdue') this._clearCountdown();
        }, 30000);
    }

    _clearCountdown() {
        if (this.countdownTimer) {
            clearInterval(this.countdownTimer);
            this.countdownTimer = null;
        }
    }

    _shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    _esc(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    destroy() {
        this._clearCountdown();
        this._unsubscribeAll();
    }
}
