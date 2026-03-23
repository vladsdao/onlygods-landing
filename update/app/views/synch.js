import { getClient } from '../lib/supabase.js';
import { auth } from '../lib/auth.js';
import { player } from '../lib/player.js';

// Tabs
const TAB_FOCUS = 'focus';
const TAB_CIRCLE = 'circle';

// Format helper
function fmtTime(s) {
    const sec = Math.floor(s);
    const m = Math.floor(sec / 60);
    const ss = sec % 60;
    return `${m}:${ss.toString().padStart(2, '0')}`;
}

export default class SynchView {
    constructor(container) {
        this.container = container;
        this.sb = getClient();
        this.activeTab = localStorage.getItem('synch_tab') || TAB_FOCUS;
        this.circleChainView = null;
        this.practices = [];
        this.history = [];
        this.onlineMembers = [];
        this.sessionCount = 0;
        this._playerUnsub = null;
        this.channels = [];
    }

    async render() {
        this.container.textContent = '';

        // Segmented Control
        const seg = document.createElement('div');
        seg.className = 'ios-segment';

        const slider = document.createElement('div');
        slider.className = 'ios-segment-slider' + (this.activeTab === TAB_CIRCLE ? ' right' : '');
        seg.appendChild(slider);

        [TAB_FOCUS, TAB_CIRCLE].forEach(tab => {
            const btn = document.createElement('button');
            btn.className = 'ios-segment-btn' + (this.activeTab === tab ? ' active' : '');
            btn.dataset.tab = tab;
            btn.textContent = tab === TAB_FOCUS ? 'Focus' : 'Circle';
            btn.addEventListener('click', () => this._switchTab(tab));
            seg.appendChild(btn);
        });

        this.container.appendChild(seg);

        const content = document.createElement('div');
        content.id = 'synch-tab-content';
        content.style.padding = '0 20px 40px';
        this.container.appendChild(content);

        await this._renderActiveTab();
    }

    async _switchTab(tab) {
        if (tab === this.activeTab) return;
        if (this.activeTab === TAB_CIRCLE && this.circleChainView) {
            this.circleChainView.destroy();
            this.circleChainView = null;
        }
        if (this.activeTab === TAB_FOCUS) this._cleanupFocus();

        this.activeTab = tab;
        localStorage.setItem('synch_tab', tab);

        const sl = this.container.querySelector('.ios-segment-slider');
        if (sl) sl.classList.toggle('right', tab === TAB_CIRCLE);
        this.container.querySelectorAll('.ios-segment-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.tab === tab);
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
        } else {
            await this._renderFocus(content);
        }
    }

    // ═══════════════════════════════════════
    // FOCUS TAB
    // ═══════════════════════════════════════

    async _renderFocus(target) {
        const p = player;
        const hasTrack = p.hasTrack;
        const timeStr = hasTrack ? fmtTime(p.remaining || p.duration) : '—:——';
        const labelStr = hasTrack ? (p.isPlaying ? 'playing' : 'ready') : 'choose a practice';
        const ringClass = hasTrack ? (p.isPlaying ? 'playing' : '') : 'idle';
        const circ = 2 * Math.PI * 100;
        const dashOff = hasTrack ? circ * (1 - p.progress) : circ;

        const wrap = document.createElement('div');
        wrap.className = 'view-synch';

        // Build DOM safely
        // -- Presence
        const presDiv = document.createElement('div');
        presDiv.className = 'fp-presence';
        presDiv.id = 'fp-presence';
        presDiv.style.display = 'none';
        const presDot = document.createElement('span');
        presDot.className = 'live-dot';
        presDiv.appendChild(presDot);
        const presCount = document.createElement('span');
        presCount.id = 'fp-online-count';
        presCount.textContent = '0';
        presDiv.appendChild(presCount);
        presDiv.appendChild(document.createTextNode(' in the field'));
        const presAvas = document.createElement('div');
        presAvas.className = 'fp-presence-avatars';
        presAvas.id = 'fp-avatars';
        presDiv.appendChild(presAvas);
        wrap.appendChild(presDiv);

        // -- Player (using template for SVG which is safe/static)
        const playerDiv = document.createElement('div');
        playerDiv.className = 'fp-player';
        const ringWrap = document.createElement('div');
        ringWrap.className = 'fp-ring-wrap ' + ringClass;
        ringWrap.id = 'fp-ring-wrap';

        const svgNS = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(svgNS, 'svg');
        svg.setAttribute('viewBox', '0 0 220 220');
        svg.setAttribute('class', 'fp-ring-svg');

        const bgCircle = document.createElementNS(svgNS, 'circle');
        bgCircle.setAttribute('cx', '110'); bgCircle.setAttribute('cy', '110');
        bgCircle.setAttribute('r', '100'); bgCircle.setAttribute('fill', 'none');
        bgCircle.setAttribute('stroke', 'rgba(0,0,0,0.04)'); bgCircle.setAttribute('stroke-width', '2.5');
        svg.appendChild(bgCircle);

        const progCircle = document.createElementNS(svgNS, 'circle');
        progCircle.setAttribute('cx', '110'); progCircle.setAttribute('cy', '110');
        progCircle.setAttribute('r', '100'); progCircle.setAttribute('fill', 'none');
        progCircle.setAttribute('stroke', 'var(--text)'); progCircle.setAttribute('stroke-width', '2.5');
        progCircle.setAttribute('stroke-dasharray', String(circ));
        progCircle.setAttribute('stroke-dashoffset', String(dashOff));
        progCircle.setAttribute('stroke-linecap', 'round');
        progCircle.setAttribute('transform', 'rotate(-90 110 110)');
        progCircle.id = 'fp-progress';
        svg.appendChild(progCircle);
        ringWrap.appendChild(svg);

        const center = document.createElement('div');
        center.className = 'fp-ring-center';
        const timeEl = document.createElement('div');
        timeEl.className = 'fp-ring-time';
        timeEl.id = 'fp-time';
        timeEl.textContent = timeStr;
        center.appendChild(timeEl);
        const labelEl = document.createElement('div');
        labelEl.className = 'fp-ring-label';
        labelEl.id = 'fp-label';
        labelEl.textContent = labelStr;
        center.appendChild(labelEl);
        ringWrap.appendChild(center);
        playerDiv.appendChild(ringWrap);
        wrap.appendChild(playerDiv);

        // -- Now Playing
        const nowDiv = document.createElement('div');
        nowDiv.className = 'fp-now-playing';
        const nowTitle = document.createElement('div');
        nowTitle.className = 'fp-now-title';
        nowTitle.id = 'fp-now-title';
        nowTitle.textContent = hasTrack ? (p.currentPractice.title || '') : 'No practice selected';
        nowDiv.appendChild(nowTitle);
        const nowMeta = document.createElement('div');
        nowMeta.className = 'fp-now-meta';
        nowMeta.id = 'fp-now-meta';
        nowMeta.textContent = hasTrack ? `by ${p.currentPractice.leader_name || 'Unknown'} · ${Math.round(p.duration / 60)} min` : '';
        nowDiv.appendChild(nowMeta);
        wrap.appendChild(nowDiv);

        // -- Controls
        const ctrlDiv = document.createElement('div');
        ctrlDiv.className = 'fp-controls';

        const prevBtn = this._makeCtrlBtn('fp-prev', 'fp-ctrl-btn fp-ctrl-skip', !p.hasPrev,
            '<path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z"/>');
        prevBtn.addEventListener('click', () => player.prev());
        ctrlDiv.appendChild(prevBtn);

        const playBtn = this._makeCtrlBtn('fp-play', 'fp-ctrl-btn fp-ctrl-play', !hasTrack,
            p.isPlaying
                ? '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>'
                : '<polygon points="6 3 20 12 6 21 6 3"/>');
        playBtn.addEventListener('click', () => player.toggle());
        ctrlDiv.appendChild(playBtn);

        const nextBtn = this._makeCtrlBtn('fp-next', 'fp-ctrl-btn fp-ctrl-skip', !p.hasNext,
            '<path d="M6 18l8.5-6L6 6v12zm10-12v12h2V6h-2z"/>');
        nextBtn.addEventListener('click', () => player.next());
        ctrlDiv.appendChild(nextBtn);

        wrap.appendChild(ctrlDiv);

        // -- Practices section header
        const secDiv = document.createElement('div');
        secDiv.className = 'fp-section';
        const secTitle = document.createElement('div');
        secTitle.className = 'fp-section-title';
        secTitle.textContent = 'Practices';
        secDiv.appendChild(secTitle);

        if (auth.isAdmin()) {
            const addBtn = document.createElement('button');
            addBtn.className = 'fp-section-action';
            addBtn.id = 'fp-add-practice';
            const addSvg = document.createElementNS(svgNS, 'svg');
            addSvg.setAttribute('width', '14'); addSvg.setAttribute('height', '14');
            addSvg.setAttribute('viewBox', '0 0 24 24'); addSvg.setAttribute('fill', 'none');
            addSvg.setAttribute('stroke', 'currentColor'); addSvg.setAttribute('stroke-width', '2');
            const l1 = document.createElementNS(svgNS, 'line');
            l1.setAttribute('x1', '12'); l1.setAttribute('y1', '5');
            l1.setAttribute('x2', '12'); l1.setAttribute('y2', '19');
            addSvg.appendChild(l1);
            const l2 = document.createElementNS(svgNS, 'line');
            l2.setAttribute('x1', '5'); l2.setAttribute('y1', '12');
            l2.setAttribute('x2', '19'); l2.setAttribute('y2', '12');
            addSvg.appendChild(l2);
            addBtn.appendChild(addSvg);
            addBtn.addEventListener('click', () => this._showUploadSheet());
            secDiv.appendChild(addBtn);
        }
        wrap.appendChild(secDiv);

        // -- Practice list container
        const listDiv = document.createElement('div');
        listDiv.className = 'fp-practice-list';
        listDiv.id = 'fp-practice-list';
        const loadingText = document.createElement('div');
        loadingText.className = 'fp-empty';
        loadingText.textContent = 'Loading practices...';
        listDiv.appendChild(loadingText);
        wrap.appendChild(listDiv);

        // -- History section header
        const histSec = document.createElement('div');
        histSec.className = 'fp-section';
        const histTitle = document.createElement('div');
        histTitle.className = 'fp-section-title';
        histTitle.textContent = 'Your Sessions';
        histSec.appendChild(histTitle);
        wrap.appendChild(histSec);

        const histDiv = document.createElement('div');
        histDiv.className = 'fp-history';
        histDiv.id = 'fp-history';
        const histLoading = document.createElement('div');
        histLoading.className = 'fp-empty';
        histLoading.textContent = 'Loading...';
        histDiv.appendChild(histLoading);
        wrap.appendChild(histDiv);

        target.textContent = '';
        target.appendChild(wrap);

        // Subscribe to player
        this._playerUnsub = player.onChange((type) => this._onPlayerUpdate(type));

        // Load data
        await Promise.all([
            this._loadPractices(),
            this._loadHistory(),
            this._loadOnlineMembers(),
        ]);
        this._subscribePresence();
    }

    _makeCtrlBtn(id, className, disabled, svgContent) {
        const btn = document.createElement('button');
        btn.className = className;
        btn.id = id;
        btn.disabled = disabled;
        const svgNS = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(svgNS, 'svg');
        svg.setAttribute('width', '24'); svg.setAttribute('height', '24');
        svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('fill', 'currentColor');
        // For SVG path content we use a temporary container (safe — no user data)
        const tmp = document.createElement('div');
        tmp.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg">${svgContent}</svg>`;
        const tmpSvg = tmp.querySelector('svg');
        if (tmpSvg) {
            while (tmpSvg.firstChild) svg.appendChild(tmpSvg.firstChild);
        }
        btn.appendChild(svg);
        return btn;
    }

    // ── Player Updates ──

    _onPlayerUpdate(type) {
        const ringWrap = document.getElementById('fp-ring-wrap');
        const timeEl = document.getElementById('fp-time');
        const labelEl = document.getElementById('fp-label');
        const progressEl = document.getElementById('fp-progress');
        const playBtn = document.getElementById('fp-play');

        if (type === 'progress' && progressEl) {
            const circ = 2 * Math.PI * 100;
            progressEl.setAttribute('stroke-dashoffset', String(circ * (1 - player.progress)));
            if (timeEl) timeEl.textContent = fmtTime(player.remaining);
        }

        if (type === 'state' || type === 'loaded') {
            if (ringWrap) {
                ringWrap.classList.remove('idle', 'playing');
                if (!player.hasTrack) ringWrap.classList.add('idle');
                else if (player.isPlaying) ringWrap.classList.add('playing');
            }
            if (timeEl) timeEl.textContent = player.hasTrack ? fmtTime(player.remaining || player.duration) : '—:——';
            if (labelEl) labelEl.textContent = player.hasTrack ? (player.isPlaying ? 'playing' : 'ready') : 'choose a practice';

            if (playBtn) {
                playBtn.disabled = !player.hasTrack;
                // Update play/pause icon
                const svg = playBtn.querySelector('svg');
                if (svg) {
                    const tmp = document.createElement('div');
                    const iconContent = player.isPlaying
                        ? '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>'
                        : '<polygon points="6 3 20 12 6 21 6 3"/>';
                    tmp.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg">${iconContent}</svg>`;
                    const tmpSvg = tmp.querySelector('svg');
                    while (svg.firstChild) svg.removeChild(svg.firstChild);
                    if (tmpSvg) while (tmpSvg.firstChild) svg.appendChild(tmpSvg.firstChild);
                }
            }

            const prevBtn = document.getElementById('fp-prev');
            const nextBtn = document.getElementById('fp-next');
            if (prevBtn) prevBtn.disabled = !player.hasPrev;
            if (nextBtn) nextBtn.disabled = !player.hasNext;

            const titleEl = document.getElementById('fp-now-title');
            const metaEl = document.getElementById('fp-now-meta');
            if (titleEl && player.currentPractice) titleEl.textContent = player.currentPractice.title;
            if (metaEl && player.currentPractice) {
                metaEl.textContent = `by ${player.currentPractice.leader_name || 'Unknown'} · ${Math.round(player.duration / 60)} min`;
            }

            this._updatePracticeHighlight();
            window.dispatchEvent(new CustomEvent('player-state-change', { detail: { player } }));
        }

        if (type === 'end' && labelEl) labelEl.textContent = 'completed';
    }

    _updatePracticeHighlight() {
        const list = document.getElementById('fp-practice-list');
        if (!list) return;
        list.querySelectorAll('.fp-practice-row').forEach(row => {
            const id = row.dataset.practiceId;
            const isCurrent = player.currentPractice?.id === id;
            row.classList.toggle('now-playing', isCurrent);

            const indicator = row.querySelector('.fp-practice-indicator');
            if (!indicator) return;
            if (isCurrent && player.isPlaying) {
                indicator.classList.add('playing');
                if (!indicator.querySelector('.playing-bars')) {
                    indicator.textContent = '';
                    const bars = document.createElement('div');
                    bars.className = 'playing-bars';
                    for (let i = 0; i < 3; i++) bars.appendChild(document.createElement('span'));
                    indicator.appendChild(bars);
                }
            } else {
                indicator.classList.remove('playing');
                const idx = this.practices.findIndex(p => p.id === id);
                indicator.textContent = String(idx + 1);
            }
        });
    }

    // ── Load Data ──

    async _loadPractices() {
        const { data } = await this.sb
            .from('guided_practices').select('*')
            .eq('is_published', true)
            .order('created_at', { ascending: false });

        this.practices = data || [];
        const el = document.getElementById('fp-practice-list');
        if (!el) return;
        el.textContent = '';

        if (this.practices.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'fp-empty';
            empty.textContent = 'No practices yet';
            el.appendChild(empty);
            return;
        }

        this.practices.forEach((p, i) => {
            const isCurrent = player.currentPractice?.id === p.id;
            const isPlaying = isCurrent && player.isPlaying;

            const row = document.createElement('div');
            row.className = 'fp-practice-row' + (isCurrent ? ' now-playing' : '');
            row.dataset.practiceId = p.id;

            const indicator = document.createElement('div');
            indicator.className = 'fp-practice-indicator' + (isPlaying ? ' playing' : '');
            if (isPlaying) {
                const bars = document.createElement('div');
                bars.className = 'playing-bars';
                for (let j = 0; j < 3; j++) bars.appendChild(document.createElement('span'));
                indicator.appendChild(bars);
            } else {
                indicator.textContent = String(i + 1);
            }
            row.appendChild(indicator);

            const info = document.createElement('div');
            info.className = 'fp-practice-info';
            const title = document.createElement('div');
            title.className = 'fp-practice-title' + (isCurrent ? ' fp-now-playing-title' : '');
            title.textContent = p.title || '';
            info.appendChild(title);
            const sub = document.createElement('div');
            sub.className = 'fp-practice-subtitle';
            sub.textContent = `by ${p.leader_name || 'Unknown'} · ${Math.round(p.duration_seconds / 60)} min`;
            info.appendChild(sub);
            row.appendChild(info);

            if (auth.isAdmin()) {
                const more = document.createElement('button');
                more.className = 'fp-practice-more';
                more.textContent = '⋯';
                more.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this._showPracticeMenu(p.id);
                });
                row.appendChild(more);
            }

            row.addEventListener('click', (e) => {
                if (e.target.closest('.fp-practice-more')) return;
                player.load(p, this.practices);
                player.play();
            });

            el.appendChild(row);
        });

        await this._loadSessionCount();
    }

    async _loadSessionCount() {
        const { count } = await this.sb
            .from('sync_sessions').select('id', { count: 'exact', head: true })
            .eq('member_id', auth.getMemberId());
        this.sessionCount = count || 0;
    }

    async _loadHistory() {
        const { data } = await this.sb
            .from('sync_sessions').select('*, guided_practices(title)')
            .eq('member_id', auth.getMemberId())
            .order('created_at', { ascending: false }).limit(5);

        this.history = data || [];
        const el = document.getElementById('fp-history');
        if (!el) return;
        el.textContent = '';

        if (this.history.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'fp-empty';
            empty.textContent = 'No sessions yet. Pick a practice to begin.';
            el.appendChild(empty);
            return;
        }

        this.history.forEach(s => {
            const diff = (s.post_mood || 0) - (s.pre_mood || 0);
            const diffText = diff > 0 ? `+${diff}` : diff === 0 ? '—' : String(diff);
            const diffClass = diff > 0 ? 'positive' : diff < 0 ? 'negative' : '';
            const date = new Date(s.created_at);
            const dateStr = date.toLocaleDateString('en', { month: 'short', day: 'numeric' });
            const title = s.guided_practices?.title || 'Session';

            const item = document.createElement('div');
            item.className = 'fp-history-item';
            const left = document.createElement('span');
            left.className = 'fp-history-left';
            left.textContent = `${dateStr} · ${title}`;
            item.appendChild(left);
            const right = document.createElement('span');
            right.className = 'fp-history-diff ' + diffClass;
            right.textContent = diffText;
            item.appendChild(right);
            el.appendChild(item);
        });
    }

    async _loadOnlineMembers() {
        const { data } = await this.sb
            .from('members').select('id, name, avatar_url')
            .in('activity_status', ['online', 'in_practice']).limit(10);
        this.onlineMembers = data || [];
        this._renderPresence();
    }

    _renderPresence() {
        const el = document.getElementById('fp-presence');
        const countEl = document.getElementById('fp-online-count');
        const avatarsEl = document.getElementById('fp-avatars');
        if (!el) return;
        if (this.onlineMembers.length === 0) { el.style.display = 'none'; return; }
        el.style.display = 'flex';
        if (countEl) countEl.textContent = String(this.onlineMembers.length);
        if (avatarsEl) {
            avatarsEl.textContent = '';
            this.onlineMembers.slice(0, 5).forEach(m => {
                const ava = document.createElement('div');
                ava.className = 'fp-presence-ava';
                if (m.avatar_url) {
                    const img = document.createElement('img');
                    img.src = m.avatar_url; img.alt = '';
                    ava.appendChild(img);
                } else {
                    ava.textContent = (m.name || '?').charAt(0).toUpperCase();
                }
                avatarsEl.appendChild(ava);
            });
        }
    }

    _subscribePresence() {
        const ch = this.sb.channel('synch-presence')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'members' }, () => {
                this._loadOnlineMembers();
            }).subscribe();
        this.channels.push(ch);
    }

    // ── Admin Upload Sheet ──

    _showUploadSheet() {
        document.querySelector('.ios-sheet-backdrop')?.remove();
        document.querySelector('.ios-sheet')?.remove();

        const backdrop = document.createElement('div');
        backdrop.className = 'ios-sheet-backdrop';
        document.body.appendChild(backdrop);

        const sheet = document.createElement('div');
        sheet.className = 'ios-sheet';

        // Handle
        const handle = document.createElement('div');
        handle.className = 'ios-sheet-handle';
        sheet.appendChild(handle);

        // Header
        const header = document.createElement('div');
        header.className = 'ios-sheet-header';
        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'ios-sheet-cancel';
        cancelBtn.textContent = 'Cancel';
        header.appendChild(cancelBtn);
        const headerTitle = document.createElement('span');
        headerTitle.textContent = 'Upload Practice';
        header.appendChild(headerTitle);
        const doneBtn = document.createElement('button');
        doneBtn.className = 'ios-sheet-done';
        doneBtn.textContent = 'Done';
        doneBtn.disabled = true;
        header.appendChild(doneBtn);
        sheet.appendChild(header);

        // Details group
        const detLabel = document.createElement('div');
        detLabel.className = 'ios-group-label';
        detLabel.textContent = 'Details';
        sheet.appendChild(detLabel);

        const detGroup = document.createElement('div');
        detGroup.className = 'ios-group';

        const titleCell = document.createElement('div');
        titleCell.className = 'ios-cell';
        const titleLabel = document.createElement('div');
        titleLabel.className = 'ios-cell-label';
        titleLabel.textContent = 'Title';
        titleCell.appendChild(titleLabel);
        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.placeholder = 'e.g. Morning Awakening';
        titleCell.appendChild(titleInput);
        detGroup.appendChild(titleCell);

        const descCell = document.createElement('div');
        descCell.className = 'ios-cell';
        const descLabel = document.createElement('div');
        descLabel.className = 'ios-cell-label';
        descLabel.textContent = 'Description';
        descCell.appendChild(descLabel);
        const descInput = document.createElement('textarea');
        descInput.rows = 2;
        descInput.placeholder = 'Brief description';
        descCell.appendChild(descInput);
        detGroup.appendChild(descCell);
        sheet.appendChild(detGroup);

        // Audio group
        const audLabel = document.createElement('div');
        audLabel.className = 'ios-group-label';
        audLabel.textContent = 'Audio';
        sheet.appendChild(audLabel);

        const audGroup = document.createElement('div');
        audGroup.className = 'ios-group';
        const audCell = document.createElement('div');
        audCell.className = 'ios-cell';
        const uploadZone = document.createElement('div');
        uploadZone.className = 'ios-upload-zone';
        const fileLabel = document.createElement('span');
        fileLabel.textContent = 'Tap to upload audio';
        uploadZone.appendChild(fileLabel);
        audCell.appendChild(uploadZone);
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'audio/*';
        fileInput.style.display = 'none';
        audCell.appendChild(fileInput);
        audGroup.appendChild(audCell);
        sheet.appendChild(audGroup);

        document.body.appendChild(sheet);

        requestAnimationFrame(() => {
            backdrop.classList.add('visible');
            sheet.classList.add('visible');
        });

        let selectedFile = null;
        let audioDuration = 0;

        const close = () => {
            sheet.classList.remove('visible');
            backdrop.classList.remove('visible');
            setTimeout(() => { sheet.remove(); backdrop.remove(); }, 350);
        };

        cancelBtn.addEventListener('click', close);
        backdrop.addEventListener('click', close);
        uploadZone.addEventListener('click', () => fileInput.click());

        fileInput.addEventListener('change', (e) => {
            selectedFile = e.target.files?.[0];
            if (selectedFile) {
                fileLabel.textContent = selectedFile.name;
                uploadZone.classList.add('has-file');
                doneBtn.disabled = false;
                const tmp = new Audio();
                tmp.src = URL.createObjectURL(selectedFile);
                tmp.addEventListener('loadedmetadata', () => {
                    audioDuration = Math.round(tmp.duration);
                    URL.revokeObjectURL(tmp.src);
                });
            }
        });

        doneBtn.addEventListener('click', async () => {
            if (!selectedFile) return;
            const title = titleInput.value.trim();
            if (!title) { titleInput.focus(); return; }
            const desc = descInput.value.trim() || null;
            const member = auth.getMember();
            doneBtn.disabled = true;
            doneBtn.textContent = 'Uploading...';

            const ext = selectedFile.name.split('.').pop() || 'mp3';
            const path = `practices/${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;
            const { error: upErr } = await this.sb.storage
                .from('practices').upload(path, selectedFile, { contentType: selectedFile.type });
            if (upErr) { console.error('Upload error:', upErr); doneBtn.disabled = false; doneBtn.textContent = 'Done'; return; }

            const { data: { publicUrl } } = this.sb.storage.from('practices').getPublicUrl(path);

            await this.sb.from('guided_practices').insert({
                leader_id: auth.getMemberId(), title, description: desc,
                duration_seconds: audioDuration || 600, audio_url: publicUrl,
                audio_format: ext, is_prebuilt: false,
                leader_name: member?.name || 'Unknown',
                leader_avatar_url: member?.avatar_url || null,
            });
            close();
            await this._loadPractices();
        });
    }

    _showPracticeMenu(practiceId) {
        const p = this.practices.find(x => x.id === practiceId);
        if (!p) return;
        if (confirm(`Delete "${p.title}"?`)) {
            this.sb.from('guided_practices').update({ is_published: false })
                .eq('id', practiceId).then(() => this._loadPractices());
        }
    }

    // ── Cleanup ──

    _cleanupFocus() {
        if (this._playerUnsub) { this._playerUnsub(); this._playerUnsub = null; }
        this.channels.forEach(ch => this.sb.removeChannel(ch));
        this.channels = [];
    }

    destroy() {
        this._cleanupFocus();
        if (this.circleChainView) { this.circleChainView.destroy(); this.circleChainView = null; }
    }
}
