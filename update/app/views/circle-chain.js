import { getClient } from '../lib/supabase.js';
import { auth } from '../lib/auth.js';

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
        this._coverBlob = null;
    }

    async render() {
        await this._loadSkills();
        await this._loadCircleList();
    }

    // ═══════════════════════════════════════
    // CIRCLE LIST — iOS full-width cards
    // ═══════════════════════════════════════

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

        let query = this.sb.from('circles').select('*');
        if (!auth.isAdmin()) query = query.in('id', circleIds);
        const { data: circles } = await query.order('created_at', { ascending: false });
        this.circles = circles || [];

        const allCircleIds = this.circles.map(c => c.id);
        const { data: allParticipants } = await this.sb
            .from('circle_participants').select('circle_id, status, member_id')
            .in('circle_id', allCircleIds);

        const partMap = {};
        (participations || []).forEach(p => { partMap[p.circle_id] = p; });

        const countMap = {};
        (allParticipants || []).forEach(p => {
            if (!countMap[p.circle_id]) countMap[p.circle_id] = { total: 0, completed: 0 };
            countMap[p.circle_id].total++;
            if (p.status === 'completed') countMap[p.circle_id].completed++;
        });

        const { data: skillTags } = await this.sb
            .from('circle_skill_tags').select('circle_id, skill_id')
            .in('circle_id', allCircleIds);

        const skillMap = {};
        (skillTags || []).forEach(st => {
            if (!skillMap[st.circle_id]) skillMap[st.circle_id] = [];
            const skill = this.skills.find(s => s.id === st.skill_id);
            if (skill) skillMap[st.circle_id].push(skill);
        });

        const yourTurn = [], inProgress = [], completed = [], drafts = [];
        this.circles.forEach(c => {
            const myPart = partMap[c.id];
            c._myStatus = myPart?.status;
            c._counts = countMap[c.id] || { total: 0, completed: 0 };
            c._skills = skillMap[c.id] || [];
            c._deadline = myPart?.deadline_at;

            if (c.status === 'draft') drafts.push(c);
            else if (c.status === 'completed' || c.status === 'cancelled') completed.push(c);
            else if (myPart?.status === 'active') yourTurn.push(c);
            else inProgress.push(c);
        });

        this.container.textContent = '';
        const list = document.createElement('div');
        list.className = 'circle-chain-list';

        const renderSection = (title, dotClass, items) => {
            if (items.length === 0) return;
            const sec = document.createElement('div');
            sec.className = 'cc-list-section';
            const dot = document.createElement('span');
            dot.className = 'cc-list-dot ' + dotClass;
            sec.appendChild(dot);
            sec.appendChild(document.createTextNode(' ' + title + ' (' + items.length + ')'));
            list.appendChild(sec);
            items.forEach(c => list.appendChild(this._renderListCard(c)));
        };

        renderSection('Your Turn', 'urgent', yourTurn);
        renderSection('In Progress', 'progress', inProgress);
        renderSection('Completed', 'done', completed);
        if (auth.isAdmin()) renderSection('Drafts', 'progress', drafts);

        if (!yourTurn.length && !inProgress.length && !completed.length && !drafts.length) {
            this._renderEmpty();
            return;
        }

        this.container.appendChild(list);

        if (auth.isAdmin()) {
            const fab = document.createElement('button');
            fab.className = 'cc-fab';
            fab.textContent = '+';
            fab.style.fontSize = '24px';
            fab.style.fontWeight = '300';
            fab.addEventListener('click', () => this._showCreateSheet());
            this.container.appendChild(fab);
        }
    }

    _renderListCard(c) {
        const isYourTurn = c._myStatus === 'active';
        const isCompleted = c.status === 'completed' || c.status === 'cancelled';
        const timeLeft = c._deadline ? this._formatTimeLeft(c._deadline) : '';

        const card = document.createElement('div');
        card.className = 'cc-list-card' + (isYourTurn ? ' urgent' : '') + (isCompleted ? ' completed' : '');

        const thumb = document.createElement('div');
        thumb.className = 'cc-list-thumb';
        if (c.cover_url) {
            const img = document.createElement('img');
            img.src = c.cover_url; img.alt = ''; img.loading = 'lazy';
            thumb.appendChild(img);
        } else {
            thumb.textContent = c._skills[0]?.icon || '○';
        }
        card.appendChild(thumb);

        const body = document.createElement('div');
        body.className = 'cc-list-body';

        const title = document.createElement('div');
        title.className = 'cc-list-title';
        title.textContent = c.title || '';
        body.appendChild(title);

        const meta = document.createElement('div');
        meta.className = 'cc-list-meta';
        let metaText = c._counts.completed + '/' + c._counts.total + ' done';
        if (isYourTurn && timeLeft) metaText += ' \u00b7 \u23f1 ' + timeLeft;
        else if (!isCompleted && c.status === 'active') metaText += ' \u00b7 in progress';
        else if (isCompleted) metaText += ' \u00b7 ' + c.status;
        else if (c.status === 'draft') metaText += ' \u00b7 draft';
        meta.textContent = metaText;
        body.appendChild(meta);

        if (c._skills.length) {
            const skills = document.createElement('div');
            skills.className = 'cc-list-skills';
            c._skills.forEach(s => {
                const pill = document.createElement('span');
                pill.className = 'cc-mini-pill';
                pill.textContent = s.icon + ' ' + (s.name_ru || s.name);
                skills.appendChild(pill);
            });
            body.appendChild(skills);
        }
        card.appendChild(body);

        const chev = document.createElement('span');
        chev.textContent = '\u203a';
        chev.style.cssText = 'font-size:20px;color:var(--text-tertiary);flex-shrink:0';
        card.appendChild(chev);

        card.addEventListener('click', () => this._openCircle(c.id));
        return card;
    }

    _renderEmpty() {
        this.container.textContent = '';
        const empty = document.createElement('div');
        empty.className = 'cc-list-empty';
        const icon = document.createElement('div');
        icon.className = 'cc-list-empty-icon';
        icon.textContent = '\u25cb';
        empty.appendChild(icon);
        const title = document.createElement('div');
        title.className = 'cc-list-empty-title';
        title.textContent = 'No circles yet';
        empty.appendChild(title);
        const sub = document.createElement('div');
        sub.className = 'cc-list-empty-sub';
        sub.textContent = 'When you\'re added to a circle, it will appear here';
        empty.appendChild(sub);
        this.container.appendChild(empty);
    }

    // ═══════════════════════════════════════
    // CIRCLE DETAIL — Social Feed
    // ═══════════════════════════════════════

    async _openCircle(circleId) {
        this._clearCountdown();
        const { data: circle } = await this.sb.from('circles').select('*').eq('id', circleId).single();
        if (!circle) return;
        this.currentCircle = circle;

        const { data: participants } = await this.sb
            .from('circle_participants').select('*, members:member_id(id, name, avatar_url)')
            .eq('circle_id', circleId).order('order_position');

        const { data: submissions } = await this.sb
            .from('circle_submissions').select('*, members:member_id(id, name, avatar_url)')
            .eq('circle_id', circleId).order('submitted_at');

        const submissionIds = (submissions || []).map(s => s.id);
        let likesMap = {}, myLikes = new Set();
        if (submissionIds.length) {
            const { data: likes } = await this.sb.from('circle_likes')
                .select('submission_id, member_id').in('submission_id', submissionIds);
            (likes || []).forEach(l => {
                likesMap[l.submission_id] = (likesMap[l.submission_id] || 0) + 1;
                if (l.member_id === auth.getMemberId()) myLikes.add(l.submission_id);
            });
        }

        const { data: comments } = await this.sb
            .from('circle_comments').select('*, members:member_id(id, name, avatar_url)')
            .eq('circle_id', circleId).order('created_at');

        const { data: skillTagsData } = await this.sb
            .from('circle_skill_tags').select('skill_id').eq('circle_id', circleId);
        const circleSkills = (skillTagsData || []).map(st => this.skills.find(s => s.id === st.skill_id)).filter(Boolean);

        const memberId = auth.getMemberId();
        const myParticipant = (participants || []).find(p => p.member_id === memberId);
        const submissionMap = {};
        (submissions || []).forEach(s => { submissionMap[s.member_id] = s; });
        const completedCount = (participants || []).filter(p => p.status === 'completed').length;
        const totalCount = (participants || []).length;

        this.container.textContent = '';
        const detail = document.createElement('div');
        detail.className = 'cc-detail';

        // Nav bar
        const nav = document.createElement('div');
        nav.className = 'ios-nav-bar';
        const backBtn = document.createElement('button');
        backBtn.className = 'ios-nav-back';
        backBtn.textContent = '\u2039 Back';
        backBtn.addEventListener('click', () => this._loadCircleList());
        nav.appendChild(backBtn);
        const navTitle = document.createElement('span');
        navTitle.className = 'ios-nav-title';
        navTitle.textContent = circle.title || '';
        nav.appendChild(navTitle);
        if (auth.isAdmin()) {
            const moreBtn = document.createElement('button');
            moreBtn.className = 'ios-nav-action';
            moreBtn.textContent = '\u22ef';
            moreBtn.addEventListener('click', () => {
                if (circle.status === 'active' && confirm('Cancel this circle?')) this._cancelCircle(circleId);
            });
            nav.appendChild(moreBtn);
        }
        detail.appendChild(nav);

        // Cover
        if (circle.cover_url) {
            const cover = document.createElement('div');
            cover.className = 'cc-detail-cover';
            const img = document.createElement('img');
            img.src = circle.cover_url; img.alt = '';
            cover.appendChild(img);
            detail.appendChild(cover);
        }

        // Header
        const header = document.createElement('div');
        header.className = 'cc-detail-header';
        const titleEl = document.createElement('div');
        titleEl.className = 'cc-detail-title';
        titleEl.textContent = circle.title || '';
        header.appendChild(titleEl);

        if (circleSkills.length) {
            const skillsDiv = document.createElement('div');
            skillsDiv.className = 'cc-detail-skills';
            circleSkills.forEach(s => {
                const tag = document.createElement('span');
                tag.className = 'cc-skill-tag';
                tag.textContent = s.icon + ' ' + (s.name_ru || s.name);
                skillsDiv.appendChild(tag);
            });
            header.appendChild(skillsDiv);
        }

        const metaEl = document.createElement('div');
        metaEl.className = 'cc-detail-meta';
        metaEl.textContent = '\u23f1 ' + circle.time_limit_hours + 'h per turn \u00b7 ' + completedCount + '/' + totalCount + ' done' +
            (circle.status === 'completed' ? ' \u00b7 Completed' : '');
        header.appendChild(metaEl);
        detail.appendChild(header);

        // Admin actions for drafts
        if (auth.isAdmin() && circle.status === 'draft') {
            const adminBar = document.createElement('div');
            adminBar.className = 'cc-admin-bar';
            const startBtn = document.createElement('button');
            startBtn.className = 'cc-admin-btn primary';
            startBtn.textContent = 'Start Circle';
            startBtn.addEventListener('click', () => this._startCircle(circleId));
            adminBar.appendChild(startBtn);
            const editBtn = document.createElement('button');
            editBtn.className = 'cc-admin-btn';
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => this._showEditForm(circleId));
            adminBar.appendChild(editBtn);
            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'cc-admin-btn danger';
            cancelBtn.textContent = 'Cancel';
            cancelBtn.addEventListener('click', () => this._cancelCircle(circleId));
            adminBar.appendChild(cancelBtn);
            detail.appendChild(adminBar);
        }

        // Guide (collapsible)
        if (circle.guide_text) {
            const guideCell = document.createElement('div');
            guideCell.className = 'cc-guide-cell';
            const guideHeader = document.createElement('div');
            guideHeader.className = 'cc-guide-header';
            guideHeader.appendChild(document.createTextNode('Guide'));
            const chevron = document.createElement('span');
            chevron.className = 'cc-guide-chevron';
            chevron.textContent = '\u25be';
            guideHeader.appendChild(chevron);
            guideHeader.addEventListener('click', () => guideCell.classList.toggle('open'));
            guideCell.appendChild(guideHeader);
            const guideBody = document.createElement('div');
            guideBody.className = 'cc-guide-body';
            const guideContent = document.createElement('div');
            guideContent.className = 'cc-guide-content';
            guideContent.textContent = circle.guide_text;
            guideBody.appendChild(guideContent);
            guideCell.appendChild(guideBody);
            detail.appendChild(guideCell);
        }

        // Task prompt
        const taskSec = document.createElement('div');
        taskSec.className = 'cc-task-section';
        const taskLabel = document.createElement('div');
        taskLabel.className = 'cc-task-label';
        taskLabel.textContent = 'Task';
        taskSec.appendChild(taskLabel);
        const taskText = document.createElement('div');
        taskText.className = 'cc-task-text';
        taskText.textContent = circle.task_prompt || '';
        taskSec.appendChild(taskText);
        detail.appendChild(taskSec);

        // Chain feed
        const chainSec = document.createElement('div');
        chainSec.className = 'cc-chain-section';
        const chainLabel = document.createElement('div');
        chainLabel.className = 'cc-chain-label';
        chainLabel.textContent = 'Chain';
        chainSec.appendChild(chainLabel);

        (participants || []).forEach(p => {
            const sub = submissionMap[p.member_id];
            const member = p.members;
            const isActive = p.status === 'active' && p.member_id === memberId;

            const item = document.createElement('div');
            item.className = 'cc-feed-item';
            const marker = document.createElement('div');
            if (sub) { marker.className = 'cc-feed-marker done'; marker.textContent = '\u2713'; }
            else if (isActive || p.status === 'active') { marker.className = 'cc-feed-marker active'; marker.textContent = '\u25cf'; }
            else { marker.className = 'cc-feed-marker waiting'; marker.textContent = '\u25cb'; }
            item.appendChild(marker);

            const body = document.createElement('div');
            body.className = 'cc-feed-body';

            if (isActive) {
                const nameEl = document.createElement('div');
                nameEl.className = 'cc-feed-name active-turn';
                nameEl.textContent = 'YOUR TURN';
                body.appendChild(nameEl);

                const form = document.createElement('div');
                form.className = 'cc-feed-form';
                const textarea = document.createElement('textarea');
                textarea.rows = 4; textarea.placeholder = 'Write your response...';
                form.appendChild(textarea);

                const actions = document.createElement('div');
                actions.className = 'cc-feed-form-actions';
                const photoBtn = document.createElement('label');
                photoBtn.className = 'cc-feed-photo-btn';
                photoBtn.textContent = '\ud83d\udcf7 Add photo';
                const photoInput = document.createElement('input');
                photoInput.type = 'file'; photoInput.accept = 'image/*'; photoInput.style.display = 'none';
                const photoName = document.createElement('span');
                photoName.className = 'cc-feed-photo-name';
                photoInput.addEventListener('change', (e) => { photoName.textContent = e.target.files?.[0]?.name || ''; });
                photoBtn.appendChild(photoInput);
                actions.appendChild(photoBtn);
                actions.appendChild(photoName);

                const submitBtn = document.createElement('button');
                submitBtn.className = 'cc-feed-submit';
                submitBtn.textContent = 'Submit \u2192';
                submitBtn.addEventListener('click', async () => {
                    const text = textarea.value.trim();
                    if (!text) { textarea.focus(); return; }
                    submitBtn.disabled = true; submitBtn.textContent = 'Submitting...';
                    await this._submitResponse(text, photoInput.files?.[0]);
                });
                actions.appendChild(submitBtn);
                form.appendChild(actions);

                if (p.deadline_at) {
                    const countdown = document.createElement('div');
                    countdown.className = 'cc-feed-countdown';
                    countdown.id = 'cc-countdown';
                    countdown.textContent = this._formatTimeLeft(p.deadline_at);
                    form.appendChild(countdown);
                    this._startCountdown(p.deadline_at);
                }
                body.appendChild(form);
            } else if (sub) {
                const nameEl = document.createElement('div');
                nameEl.className = 'cc-feed-name';
                nameEl.textContent = member?.name || 'Unknown';
                body.appendChild(nameEl);
                const textEl = document.createElement('div');
                textEl.className = 'cc-feed-text';
                textEl.textContent = sub.text_content || '';
                body.appendChild(textEl);
                if (sub.photo_url) {
                    const photo = document.createElement('img');
                    photo.className = 'cc-feed-photo';
                    photo.src = sub.photo_url; photo.alt = ''; photo.loading = 'lazy';
                    body.appendChild(photo);
                }
                const actDiv = document.createElement('div');
                actDiv.className = 'cc-feed-actions';
                const likeBtn = document.createElement('button');
                likeBtn.className = 'cc-feed-like' + (myLikes.has(sub.id) ? ' liked' : '');
                likeBtn.textContent = (myLikes.has(sub.id) ? '\u2665' : '\u2661') + ' ' + (likesMap[sub.id] || '');
                likeBtn.addEventListener('click', () => this._toggleLike(sub.id));
                actDiv.appendChild(likeBtn);
                body.appendChild(actDiv);
            } else {
                const nameEl = document.createElement('div');
                nameEl.className = 'cc-feed-name';
                nameEl.textContent = member?.name || 'Unknown';
                body.appendChild(nameEl);
                const status = document.createElement('div');
                status.className = 'cc-feed-status';
                status.textContent = p.status === 'timed_out' ? 'Timed out' : p.status === 'active' ? 'Working on it...' : 'Waiting...';
                body.appendChild(status);
            }
            item.appendChild(body);
            chainSec.appendChild(item);
        });
        detail.appendChild(chainSec);

        // Comments
        const commentsSec = document.createElement('div');
        commentsSec.className = 'cc-comments-section';
        const commentsTitle = document.createElement('div');
        commentsTitle.className = 'cc-comments-title';
        commentsTitle.textContent = 'Comments (' + (comments || []).length + ')';
        commentsSec.appendChild(commentsTitle);

        const commentsList = document.createElement('div');
        commentsList.className = 'cc-comments-list';
        if (!(comments || []).length) {
            const empty = document.createElement('div');
            empty.className = 'cc-comments-empty';
            empty.textContent = 'No comments yet';
            commentsList.appendChild(empty);
        } else {
            (comments || []).forEach(c => {
                const comment = document.createElement('div');
                comment.className = 'cc-comment';
                const author = document.createElement('span');
                author.className = 'cc-comment-author';
                author.textContent = (c.members?.name || 'Unknown') + ': ';
                comment.appendChild(author);
                const text = document.createElement('span');
                text.className = 'cc-comment-text';
                text.textContent = c.text_content || '';
                comment.appendChild(text);
                commentsList.appendChild(comment);
            });
        }
        commentsSec.appendChild(commentsList);

        if (myParticipant) {
            const commentForm = document.createElement('div');
            commentForm.className = 'cc-comment-form';
            const commentInput = document.createElement('input');
            commentInput.type = 'text';
            commentInput.className = 'cc-comment-input';
            commentInput.placeholder = 'Write a comment... @mention';
            commentForm.appendChild(commentInput);
            const commentSend = document.createElement('button');
            commentSend.className = 'cc-comment-send';
            commentSend.textContent = '\u2192';
            const sendComment = async () => {
                const text = commentInput.value.trim();
                if (!text) return;
                commentInput.value = '';
                await this._submitCommentText(text);
            };
            commentSend.addEventListener('click', sendComment);
            commentInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendComment(); });
            commentForm.appendChild(commentSend);
            commentsSec.appendChild(commentForm);
        }
        detail.appendChild(commentsSec);
        this.container.appendChild(detail);
        this._subscribeCircle(circleId);
    }

    // ═══════════════════════════════════════
    // SUBMISSION + TURN LOGIC
    // ═══════════════════════════════════════

    async _submitResponse(text, photoFile) {
        try {
            let photoUrl = null;
            if (photoFile) {
                const ext = photoFile.name.split('.').pop();
                const path = this.currentCircle.id + '/' + auth.getMemberId() + '.' + ext;
                const { error: uploadErr } = await this.sb.storage
                    .from('circle-photos').upload(path, photoFile, { upsert: true });
                if (!uploadErr) {
                    const { data: urlData } = this.sb.storage.from('circle-photos').getPublicUrl(path);
                    photoUrl = urlData?.publicUrl;
                }
            }
            await this.sb.from('circle_submissions').insert({
                circle_id: this.currentCircle.id, member_id: auth.getMemberId(),
                text_content: text, photo_url: photoUrl,
            });
            await this._advanceTurn(this.currentCircle.id);
            await this._openCircle(this.currentCircle.id);
        } catch (err) { console.error('Submit error:', err); }
    }

    async _advanceTurn(circleId) {
        const memberId = auth.getMemberId();
        await this.sb.from('circle_participants')
            .update({ status: 'completed', completed_at: new Date().toISOString() })
            .eq('circle_id', circleId).eq('member_id', memberId).eq('status', 'active');

        const { data: waiting } = await this.sb.from('circle_participants')
            .select('id, order_position').eq('circle_id', circleId)
            .eq('status', 'waiting').order('order_position').limit(1);

        if (waiting && waiting.length > 0) {
            const next = waiting[0];
            const now = new Date();
            const deadline = new Date(now.getTime() + (this.currentCircle.time_limit_hours || 24) * 3600000);
            await this.sb.from('circle_participants').update({
                status: 'active', assigned_at: now.toISOString(), deadline_at: deadline.toISOString(),
            }).eq('id', next.id);
            await this.sb.from('circles').update({ current_turn: next.order_position }).eq('id', circleId);
        } else {
            await this.sb.from('circles')
                .update({ status: 'completed', completed_at: new Date().toISOString() }).eq('id', circleId);
        }
        await this._updateScores(circleId, memberId);
    }

    async _updateScores(circleId, memberId) {
        const { data: skillTags } = await this.sb.from('circle_skill_tags')
            .select('skill_id, weight').eq('circle_id', circleId);
        for (const tag of (skillTags || [])) {
            const points = 10 * (tag.weight || 1);
            const { data: existing } = await this.sb.from('member_skill_scores')
                .select('score, circles_completed')
                .eq('member_id', memberId).eq('skill_id', tag.skill_id).single();
            if (existing) {
                await this.sb.from('member_skill_scores').update({
                    score: existing.score + points, circles_completed: existing.circles_completed + 1,
                    last_updated: new Date().toISOString(),
                }).eq('member_id', memberId).eq('skill_id', tag.skill_id);
            } else {
                await this.sb.from('member_skill_scores').insert({
                    member_id: memberId, skill_id: tag.skill_id, score: points, circles_completed: 1,
                });
            }
        }
    }

    async _toggleLike(submissionId) {
        const memberId = auth.getMemberId();
        const { data: existing } = await this.sb.from('circle_likes')
            .select('submission_id').eq('submission_id', submissionId).eq('member_id', memberId).single();
        if (existing) {
            await this.sb.from('circle_likes').delete().eq('submission_id', submissionId).eq('member_id', memberId);
        } else {
            await this.sb.from('circle_likes').insert({ submission_id: submissionId, member_id: memberId });
        }
        if (this.currentCircle) await this._openCircle(this.currentCircle.id);
    }

    async _submitCommentText(text) {
        if (!this.currentCircle) return;
        const mentionRegex = /@(\w+)/g;
        const mentionedNames = [];
        let match;
        while ((match = mentionRegex.exec(text)) !== null) mentionedNames.push(match[1]);
        let mentionedIds = [];
        if (mentionedNames.length) {
            const { data: mentioned } = await this.sb.from('members')
                .select('id, name').in('name', mentionedNames);
            mentionedIds = (mentioned || []).map(m => m.id);
        }
        await this.sb.from('circle_comments').insert({
            circle_id: this.currentCircle.id, member_id: auth.getMemberId(),
            text_content: text, mentioned_member_ids: mentionedIds,
        });
        await this._openCircle(this.currentCircle.id);
    }

    // ═══════════════════════════════════════
    // ADMIN ACTIONS
    // ═══════════════════════════════════════

    async _startCircle(circleId) {
        const { data: first } = await this.sb.from('circle_participants')
            .select('id').eq('circle_id', circleId).eq('order_position', 0).single();
        if (!first) return;
        const { data: circle } = await this.sb.from('circles').select('time_limit_hours').eq('id', circleId).single();
        const now = new Date();
        const deadline = new Date(now.getTime() + (circle?.time_limit_hours || 24) * 3600000);
        await this.sb.from('circle_participants').update({
            status: 'active', assigned_at: now.toISOString(), deadline_at: deadline.toISOString()
        }).eq('id', first.id);
        await this.sb.from('circles').update({
            status: 'active', started_at: now.toISOString(), current_turn: 0
        }).eq('id', circleId);
        await this._openCircle(circleId);
    }

    async _cancelCircle(circleId) {
        await this.sb.from('circles').update({ status: 'cancelled' }).eq('id', circleId);
        await this._loadCircleList();
    }

    async _showEditForm(circleId) {
        const { data: circle } = await this.sb.from('circles').select('*').eq('id', circleId).single();
        if (!circle) return;
        const newTitle = prompt('Title:', circle.title);
        if (newTitle === null) return;
        const newPrompt = prompt('Task prompt:', circle.task_prompt);
        if (newPrompt === null) return;
        await this.sb.from('circles').update({ title: newTitle, task_prompt: newPrompt }).eq('id', circleId);
        await this._openCircle(circleId);
    }

    // ═══════════════════════════════════════
    // CREATE CIRCLE — iOS Sheet
    // ═══════════════════════════════════════

    async _showCreateSheet() {
        const { data: members } = await this.sb.from('members')
            .select('id, name, avatar_url').order('name');
        this.members = members || [];

        document.querySelector('.ios-sheet-backdrop')?.remove();
        document.querySelector('.ios-sheet')?.remove();

        const backdrop = document.createElement('div');
        backdrop.className = 'ios-sheet-backdrop';
        document.body.appendChild(backdrop);

        const sheet = document.createElement('div');
        sheet.className = 'ios-sheet';
        sheet.style.maxHeight = '92vh';

        const handle = document.createElement('div');
        handle.className = 'ios-sheet-handle';
        sheet.appendChild(handle);

        const header = document.createElement('div');
        header.className = 'ios-sheet-header';
        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'ios-sheet-cancel';
        cancelBtn.textContent = 'Cancel';
        header.appendChild(cancelBtn);
        const headerTitle = document.createElement('span');
        headerTitle.textContent = 'Create Circle';
        header.appendChild(headerTitle);
        const doneBtn = document.createElement('button');
        doneBtn.className = 'ios-sheet-done';
        doneBtn.textContent = 'Done';
        header.appendChild(doneBtn);
        sheet.appendChild(header);

        // Details
        const detLabel = document.createElement('div');
        detLabel.className = 'ios-group-label'; detLabel.textContent = 'Details';
        sheet.appendChild(detLabel);
        const detGroup = document.createElement('div');
        detGroup.className = 'ios-group';
        const titleInput = this._makeCell(detGroup, 'Title', 'input', 'e.g. Write 4 lines of poetry');
        const promptInput = this._makeCell(detGroup, 'Challenge', 'textarea', 'What should each person do?');
        const guideInput = this._makeCell(detGroup, 'Guide (optional)', 'textarea', 'Tips or inspiration');

        const timeCell = document.createElement('div');
        timeCell.className = 'ios-cell';
        const timeCellRow = document.createElement('div');
        timeCellRow.style.cssText = 'display:flex;align-items:center;justify-content:space-between';
        const timeLabel = document.createElement('span');
        timeLabel.textContent = 'Time per turn';
        timeLabel.style.cssText = 'font-size:13px;color:var(--text-secondary)';
        timeCellRow.appendChild(timeLabel);
        const timeSelect = document.createElement('select');
        timeSelect.style.cssText = 'border:1px solid var(--border);border-radius:8px;padding:6px 10px;font-size:14px;background:var(--bg)';
        [6, 12, 24, 48, 72].forEach(h => {
            const opt = document.createElement('option');
            opt.value = String(h); opt.textContent = h + ' hours';
            if (h === 24) opt.selected = true;
            timeSelect.appendChild(opt);
        });
        timeCellRow.appendChild(timeSelect);
        timeCell.appendChild(timeCellRow);
        detGroup.appendChild(timeCell);
        sheet.appendChild(detGroup);

        // Skills
        const skillLabel = document.createElement('div');
        skillLabel.className = 'ios-group-label'; skillLabel.textContent = 'Skills';
        sheet.appendChild(skillLabel);
        const skillGroup = document.createElement('div');
        skillGroup.className = 'ios-group';
        const skillGrid = document.createElement('div');
        skillGrid.className = 'cc-skills-grid';
        this.skills.forEach(s => {
            const label = document.createElement('label');
            label.className = 'cc-skill-pill';
            const cb = document.createElement('input');
            cb.type = 'checkbox'; cb.value = s.id; cb.dataset.skill = '';
            label.appendChild(cb);
            const inner = document.createElement('span');
            inner.className = 'cc-skill-pill-inner';
            inner.textContent = s.icon + ' ' + (s.name_ru || s.name);
            label.appendChild(inner);
            skillGrid.appendChild(label);
        });
        skillGroup.appendChild(skillGrid);
        sheet.appendChild(skillGroup);

        // Members
        const memLabel = document.createElement('div');
        memLabel.className = 'ios-group-label'; memLabel.textContent = 'Members';
        sheet.appendChild(memLabel);
        const memGroup = document.createElement('div');
        memGroup.className = 'ios-group';
        const allToggle = document.createElement('label');
        allToggle.className = 'cc-all-toggle';
        const allCb = document.createElement('input');
        allCb.type = 'checkbox';
        allToggle.appendChild(allCb);
        const allLbl = document.createElement('span');
        allLbl.textContent = 'Select all';
        allToggle.appendChild(allLbl);
        memGroup.appendChild(allToggle);

        const memGrid = document.createElement('div');
        memGrid.className = 'cc-members-grid';
        this.members.forEach(m => {
            const label = document.createElement('label');
            label.className = 'cc-member-pill';
            const cb = document.createElement('input');
            cb.type = 'checkbox'; cb.value = m.id; cb.dataset.member = '';
            label.appendChild(cb);
            const inner = document.createElement('span');
            inner.className = 'cc-member-pill-inner';
            const ava = document.createElement('span');
            ava.className = 'cc-member-avatar';
            if (m.avatar_url) {
                const img = document.createElement('img');
                img.src = m.avatar_url; img.alt = '';
                ava.appendChild(img);
            } else {
                ava.textContent = (m.name || '?').charAt(0).toUpperCase();
            }
            inner.appendChild(ava);
            const name = document.createElement('span');
            name.className = 'cc-member-name';
            name.textContent = m.name || '';
            inner.appendChild(name);
            label.appendChild(inner);
            memGrid.appendChild(label);
        });
        memGroup.appendChild(memGrid);
        sheet.appendChild(memGroup);

        document.body.appendChild(sheet);
        requestAnimationFrame(() => { backdrop.classList.add('visible'); sheet.classList.add('visible'); });

        allCb.addEventListener('change', () => {
            sheet.querySelectorAll('[data-member]').forEach(cb => { cb.checked = allCb.checked; });
        });

        const close = () => {
            sheet.classList.remove('visible'); backdrop.classList.remove('visible');
            setTimeout(() => { sheet.remove(); backdrop.remove(); }, 350);
        };
        cancelBtn.addEventListener('click', close);
        backdrop.addEventListener('click', close);

        doneBtn.addEventListener('click', async () => {
            const title = titleInput.value.trim();
            const promptText = promptInput.value.trim();
            const guide = guideInput.value.trim();
            const timeLimit = parseInt(timeSelect.value) || 24;
            const selectedSkills = [...sheet.querySelectorAll('[data-skill]:checked')].map(cb => cb.value);
            const selectedMembers = [...sheet.querySelectorAll('[data-member]:checked')].map(cb => cb.value);

            if (!title || !promptText) { titleInput.focus(); return; }
            if (selectedMembers.length < 2) return;

            doneBtn.disabled = true; doneBtn.textContent = 'Creating...';
            try {
                const { data: circle, error } = await this.sb.from('circles').insert({
                    title, task_prompt: promptText, guide_text: guide || null,
                    time_limit_hours: timeLimit, created_by: auth.getMemberId(), status: 'draft',
                }).select().single();
                if (error) throw error;

                if (selectedSkills.length) {
                    await this.sb.from('circle_skill_tags').insert(
                        selectedSkills.map(sid => ({ circle_id: circle.id, skill_id: sid }))
                    );
                }
                const shuffled = this._shuffle([...selectedMembers]);
                await this.sb.from('circle_participants').insert(
                    shuffled.map((mid, i) => ({ circle_id: circle.id, member_id: mid, order_position: i }))
                );
                close();
                await this._loadCircleList();
            } catch (err) {
                console.error('Create circle error:', err);
                doneBtn.disabled = false; doneBtn.textContent = 'Done';
            }
        });
    }

    _makeCell(group, labelText, type, placeholder) {
        const cell = document.createElement('div');
        cell.className = 'ios-cell';
        const label = document.createElement('div');
        label.className = 'ios-cell-label';
        label.textContent = labelText;
        cell.appendChild(label);
        let input;
        if (type === 'textarea') {
            input = document.createElement('textarea');
            input.rows = 2;
        } else {
            input = document.createElement('input');
            input.type = 'text';
        }
        input.placeholder = placeholder || '';
        cell.appendChild(input);
        group.appendChild(cell);
        return input;
    }

    // ═══════════════════════════════════════
    // HELPERS
    // ═══════════════════════════════════════

    async _loadSkills() {
        const { data } = await this.sb.from('circle_skills').select('*').order('name');
        this.skills = data || [];
    }

    _subscribeCircle(circleId) {
        this.channels.forEach(ch => this.sb.removeChannel(ch));
        this.channels = [];
        const ch = this.sb.channel('cc-' + circleId)
            .on('postgres_changes', { event: '*', schema: 'public', table: 'circle_submissions', filter: 'circle_id=eq.' + circleId },
                () => this._openCircle(circleId))
            .on('postgres_changes', { event: '*', schema: 'public', table: 'circle_comments', filter: 'circle_id=eq.' + circleId },
                () => this._openCircle(circleId))
            .subscribe();
        this.channels.push(ch);
    }

    _startCountdown(deadlineStr) {
        this._clearCountdown();
        this.countdownTimer = setInterval(() => {
            const el = document.getElementById('cc-countdown');
            if (el) el.textContent = this._formatTimeLeft(deadlineStr);
        }, 1000);
    }

    _clearCountdown() {
        if (this.countdownTimer) { clearInterval(this.countdownTimer); this.countdownTimer = null; }
    }

    _formatTimeLeft(deadlineStr) {
        const diff = new Date(deadlineStr) - Date.now();
        if (diff <= 0) return 'Time up!';
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        return h + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    }

    _shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    destroy() {
        this._clearCountdown();
        this.channels.forEach(ch => this.sb.removeChannel(ch));
        this.channels = [];
    }
}
