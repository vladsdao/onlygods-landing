class StreamMini {
    constructor() {
        this.container = document.getElementById('stream-mini');
        this.isVisible = false;
        this.streamUrl = null;
        this._setupDrag();
    }

    show(url) {
        if (!this.container) return;
        this.streamUrl = url;
        this.container.innerHTML = `
            <div class="mini-header">
                <span class="mini-live-dot"></span>
                <span class="mini-title">LIVE</span>
                <button class="mini-expand" onclick="location.hash='#/stream'">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
                        <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
                    </svg>
                </button>
                <button class="mini-close" onclick="window.streamMini.hide()">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>
            <iframe src="${url}" allow="autoplay" style="width:100%;height:calc(100% - 28px);border:none;border-radius:0 0 12px 12px;"></iframe>
        `;
        this.container.classList.remove('hidden');
        this.isVisible = true;
    }

    hide() {
        if (!this.container) return;
        this.container.classList.add('hidden');
        this.container.innerHTML = '';
        this.isVisible = false;
        this.streamUrl = null;
    }

    isActive() {
        return this.isVisible && !!this.streamUrl;
    }

    getUrl() {
        return this.streamUrl;
    }

    _setupDrag() {
        if (!this.container) return;
        let isDragging = false;
        let startX, startY, startLeft, startTop;

        this.container.addEventListener('mousedown', (e) => {
            if (e.target.closest('button') || e.target.closest('iframe')) return;
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            const rect = this.container.getBoundingClientRect();
            startLeft = rect.left;
            startTop = rect.top;
            this.container.style.transition = 'none';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            this.container.style.left = (startLeft + dx) + 'px';
            this.container.style.top = (startTop + dy) + 'px';
            this.container.style.right = 'auto';
            this.container.style.bottom = 'auto';
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            this.container.style.transition = '';
        });
    }
}

export { StreamMini };
