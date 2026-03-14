import { getClient } from '../lib/supabase.js';

export default class StreamView {
    constructor(container) {
        this.container = container;
    }

    async render() {
        // Check if mini-player is active, reclaim the stream
        const mini = window.streamMini;
        const streamUrl = mini?.getUrl();

        this.container.innerHTML = `
            <div class="view-stream">
                <div class="stream-player" id="stream-player">
                    <div class="stream-placeholder">
                        <div class="stream-placeholder-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <polygon points="5 3 19 12 5 21 5 3"/>
                            </svg>
                        </div>
                        <div class="stream-placeholder-text">No stream active</div>
                        <div class="stream-placeholder-sub">Streams will appear here when live</div>
                    </div>
                </div>
                <div class="stream-controls">
                    <button class="stream-ctrl-btn" id="btn-mini" title="Mini player">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <rect x="2" y="2" width="20" height="20" rx="2"/><rect x="11" y="11" width="10" height="10" rx="1"/>
                        </svg>
                        <span>Mini</span>
                    </button>
                    <button class="stream-ctrl-btn" id="btn-companion" title="Chat + Stream">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <rect x="2" y="2" width="9" height="20" rx="1"/><rect x="13" y="2" width="9" height="20" rx="1"/>
                        </svg>
                        <span>+ Chat</span>
                    </button>
                </div>
                <div class="stream-companion-chat" id="stream-chat" style="display:none">
                    <div class="stream-chat-messages" id="stream-chat-msgs"></div>
                    <div class="stream-chat-input-bar">
                        <input type="text" class="stream-chat-input" id="stream-chat-input" placeholder="Comment...">
                        <button class="stream-chat-send" id="stream-chat-send">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        `;

        // If mini-player was active, show the stream
        if (streamUrl && mini) {
            mini.hide();
            this._embedStream(streamUrl);
        }

        this._setupControls();
    }

    _embedStream(url) {
        const player = document.getElementById('stream-player');
        if (!player) return;
        player.innerHTML = `
            <iframe id="stream-iframe"
                    src="${url}"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                    style="width:100%;height:100%;border:none;">
            </iframe>
        `;
    }

    _setupControls() {
        const btnMini = document.getElementById('btn-mini');
        const btnCompanion = document.getElementById('btn-companion');

        if (btnMini) {
            btnMini.addEventListener('click', () => {
                const iframe = document.getElementById('stream-iframe');
                if (!iframe || !window.streamMini) return;
                window.streamMini.show(iframe.src);
                location.hash = '#/chat';
            });
        }

        if (btnCompanion) {
            btnCompanion.addEventListener('click', () => {
                const chat = document.getElementById('stream-chat');
                const view = this.container.querySelector('.view-stream');
                if (chat && view) {
                    const isOpen = chat.style.display !== 'none';
                    chat.style.display = isOpen ? 'none' : 'flex';
                    view.classList.toggle('companion-mode', !isOpen);
                }
            });
        }
    }

    destroy() {
        // If navigating away while stream is playing, move to mini-player
        const iframe = document.getElementById('stream-iframe');
        if (iframe && window.streamMini) {
            window.streamMini.show(iframe.src);
        }
    }
}
