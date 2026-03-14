const ROUTES = {
    '/':          () => import('../views/dashboard.js'),
    '/align':     () => import('../views/align.js'),
    '/chat':      () => import('../views/chat.js'),
    '/synch':     () => import('../views/synch.js'),
    '/stream':    () => import('../views/stream.js'),
    '/assistant': () => import('../views/assistant.js'),
    '/profile':   () => import('../views/profile.js'),
    '/crm':       () => import('../views/crm.js'),
};

class Router {
    constructor(container) {
        this.container = container;
        this.currentView = null;
        this.currentPath = null;
        window.addEventListener('hashchange', () => this.navigate());
    }

    async navigate(path) {
        if (!path) {
            path = location.hash.slice(1) || '/';
        }

        if (path === this.currentPath) return;

        const loader = ROUTES[path];
        if (!loader) {
            location.hash = '#/';
            return;
        }

        // Teardown current view
        if (this.currentView?.destroy) {
            this.currentView.destroy();
        }

        this.currentPath = path;
        this.container.innerHTML = '<div class="view-loading"></div>';

        try {
            const module = await loader();
            // Check if navigation changed while loading
            if (this.currentPath !== path) return;

            this.currentView = new module.default(this.container);
            await this.currentView.render();
        } catch (e) {
            console.error('View load error:', e);
            this.container.innerHTML = `<div class="view-error">Failed to load view</div>`;
        }

        // Update nav active state
        document.querySelectorAll('.tab-btn').forEach((btn) => {
            btn.classList.toggle('active', btn.dataset.route === path);
        });
    }

    getCurrentPath() {
        return this.currentPath;
    }
}

export { Router, ROUTES };
