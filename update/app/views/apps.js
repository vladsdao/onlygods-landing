import { getClient } from '../lib/supabase.js';
import { auth } from '../lib/auth.js';

const TYPE_FILTERS = ['all', 'game', 'tool', 'meditation', 'practice', 'experiment'];

export default class AppsView {
    constructor(container) {
        this.container = container;
        this.sb = getClient();
        this.apps = [];
        this.activeFilter = 'all';
        this.sessionStart = null;
        this.currentApp = null;
    }

    async render() {
        this.container.innerHTML = `
            <div class="view-apps">
                <div class="apps-header">
                    <div class="apps-title">Web Apps</div>
                    ${auth.isAdmin() ? '<button class="apps-add-btn" id="btn-add-app">+ Add App</button>' : ''}
                </div>
                <div class="apps-filters" id="apps-filters">
                    ${TYPE_FILTERS.map((f) => `<button class="apps-filter ${f === 'all' ? 'active' : ''}" data-filter="${f}">${f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}</button>`).join('')}
                </div>
                <div class="apps-grid" id="apps-grid">
                    <div class="apps-loading">Loading apps...</div>
                </div>
            </div>
            <div class="apps-launcher hidden" id="apps-launcher">
                <div class="launcher-header">
                    <button class="launcher-close" id="launcher-close">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                    <span class="launcher-title" id="launcher-title"></span>
                </div>
                <iframe id="launcher-iframe" class="launcher-iframe"></iframe>
            </div>
        `;

        await this._loadApps();
        this._setupListeners();
    }

    async _loadApps() {
        const { data: apps } = await this.sb
            .from('web_apps')
            .select('*')
            .eq('is_active', true)
            .order('sort_order', { ascending: true });

        this.apps = apps || [];
        this._renderGrid();
    }

    _renderGrid() {
        const grid = document.getElementById('apps-grid');
        if (!grid) return;

        const filtered = this.activeFilter === 'all'
            ? this.apps
            : this.apps.filter((a) => a.type === this.activeFilter);

        if (filtered.length === 0) {
            grid.innerHTML = '<div class="apps-empty">No apps available yet</div>';
            return;
        }

        grid.innerHTML = filtered.map((app) => `
            <div class="app-card" data-app-id="${app.id}">
                <div class="app-thumb">
                    ${app.thumbnail_url
                        ? `<img src="${app.thumbnail_url}" alt="" class="app-thumb-img">`
                        : `<div class="app-thumb-placeholder">${this._typeIcon(app.type)}</div>`
                    }
                </div>
                <div class="app-info">
                    <div class="app-name">${this._esc(app.title)}</div>
                    ${app.description ? `<div class="app-desc">${this._esc(app.description)}</div>` : ''}
                    <div class="app-meta">
                        <span class="app-type-badge">${app.type}</span>
                        ${app.play_count > 0 ? `<span class="app-plays">${app.play_count} plays</span>` : ''}
                    </div>
                </div>
            </div>
        `).join('');

        // Click handlers
        grid.querySelectorAll('.app-card').forEach((card) => {
            card.addEventListener('click', () => {
                const appId = card.dataset.appId;
                const app = this.apps.find((a) => a.id === appId);
                if (app) this._launchApp(app);
            });
        });
    }

    _launchApp(app) {
        this.currentApp = app;
        this.sessionStart = Date.now();

        const launcher = document.getElementById('apps-launcher');
        const title = document.getElementById('launcher-title');
        const iframe = document.getElementById('launcher-iframe');

        if (title) title.textContent = app.title;
        if (iframe) iframe.src = app.url;
        if (launcher) launcher.classList.remove('hidden');

        // Increment play count
        this.sb.rpc('increment_play_count', { app_id: app.id }).catch(() => {
            // Fallback: direct update if RPC doesn't exist
            this.sb.from('web_apps')
                .update({ play_count: (app.play_count || 0) + 1 })
                .eq('id', app.id)
                .then();
        });
    }

    _closeApp() {
        const launcher = document.getElementById('apps-launcher');
        const iframe = document.getElementById('launcher-iframe');

        if (iframe) iframe.src = '';
        if (launcher) launcher.classList.add('hidden');

        // Track session
        if (this.currentApp && this.sessionStart && auth.isAuthenticated()) {
            const duration = Math.round((Date.now() - this.sessionStart) / 1000);
            this.sb.from('web_app_sessions').insert({
                app_id: this.currentApp.id,
                member_id: auth.getMemberId(),
                duration_seconds: duration,
            }).then();
        }

        this.currentApp = null;
        this.sessionStart = null;
    }

    _setupListeners() {
        // Filter buttons
        document.querySelectorAll('.apps-filter').forEach((btn) => {
            btn.addEventListener('click', () => {
                this.activeFilter = btn.dataset.filter;
                document.querySelectorAll('.apps-filter').forEach((b) => b.classList.remove('active'));
                btn.classList.add('active');
                this._renderGrid();
            });
        });

        // Close launcher
        const closeBtn = document.getElementById('launcher-close');
        if (closeBtn) closeBtn.addEventListener('click', () => this._closeApp());

        // Add app (admin)
        const addBtn = document.getElementById('btn-add-app');
        if (addBtn) addBtn.addEventListener('click', () => this._showAddForm());
    }

    _showAddForm() {
        // Simple prompt-based form for MVP
        const title = prompt('App title:');
        if (!title) return;
        const url = prompt('App URL (relative like /apps/game.html or full URL):');
        if (!url) return;
        const type = prompt('Type (game/tool/meditation/practice/experiment):', 'game');
        const description = prompt('Description (optional):');

        this.sb.from('web_apps').insert({
            title,
            url,
            type: type || 'game',
            description: description || null,
            author_id: auth.getMemberId(),
        }).then(({ error }) => {
            if (error) { alert('Failed to add app: ' + error.message); return; }
            this._loadApps();
        });
    }

    _typeIcon(type) {
        const icons = {
            game: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="16" cy="10" r="1"/><circle cx="18" cy="12" r="1"/></svg>',
            tool: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
            meditation: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>',
            practice: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
            experiment: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 3h6v5.586l4.707 4.707A1 1 0 0 1 19 14.707V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4.293a1 1 0 0 1 .293-.707L10 9.586V3z"/></svg>',
        };
        return icons[type] || icons.tool;
    }

    _esc(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    destroy() {
        this._closeApp();
    }
}
