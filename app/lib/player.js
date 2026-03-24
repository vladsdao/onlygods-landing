// ═══════════════════════════════════════════
// Field Player — Audio Singleton + Media Session
// ═══════════════════════════════════════════

class Player {
    constructor() {
        this.audio = new Audio();
        this.audio.preload = 'metadata';
        this.currentPractice = null;
        this.isPlaying = false;
        this.practices = [];
        this.currentIndex = -1;
        this._listeners = [];
        this._progressRAF = null;

        // Audio element events
        this.audio.addEventListener('play', () => {
            this.isPlaying = true;
            this._startProgressLoop();
            this._emit('state');
            this._updateMediaSession();
        });
        this.audio.addEventListener('pause', () => {
            this.isPlaying = false;
            this._stopProgressLoop();
            this._emit('state');
        });
        this.audio.addEventListener('ended', () => {
            this.isPlaying = false;
            this._stopProgressLoop();
            if (!this.next()) {
                this._emit('end');
            }
        });
        this.audio.addEventListener('loadedmetadata', () => {
            this._emit('loaded');
        });
        this.audio.addEventListener('error', (e) => {
            console.error('Player audio error:', e);
            this.isPlaying = false;
            this._stopProgressLoop();
            this._emit('error');
        });

        // Media Session API
        if ('mediaSession' in navigator) {
            const ms = navigator.mediaSession;
            ms.setActionHandler('play', () => this.play());
            ms.setActionHandler('pause', () => this.pause());
            ms.setActionHandler('previoustrack', () => this.prev());
            ms.setActionHandler('nexttrack', () => this.next());
            ms.setActionHandler('seekbackward', (d) => {
                this.audio.currentTime = Math.max(0, this.audio.currentTime - (d.seekOffset || 15));
            });
            ms.setActionHandler('seekforward', (d) => {
                this.audio.currentTime = Math.min(
                    this.audio.duration || 0,
                    this.audio.currentTime + (d.seekOffset || 15)
                );
            });
        }
    }

    // ── Load & Play ──

    load(practice, practices = null) {
        if (!practice?.audio_url) return false;

        this.currentPractice = practice;
        if (practices) {
            this.practices = practices;
            this.currentIndex = practices.findIndex(p => p.id === practice.id);
        }

        this.audio.src = practice.audio_url;
        this.audio.load();
        this._updateMediaSession();
        this._emit('loaded');
        return true;
    }

    play() {
        if (!this.audio.src) return;
        const p = this.audio.play();
        if (p) p.catch(e => console.warn('Play blocked:', e));
    }

    pause() {
        this.audio.pause();
    }

    toggle() {
        if (this.isPlaying) this.pause();
        else this.play();
    }

    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
        this._stopProgressLoop();
        this._emit('state');
    }

    next() {
        if (this.practices.length === 0) return false;
        const nextIdx = this.currentIndex + 1;
        if (nextIdx >= this.practices.length) return false;
        this.load(this.practices[nextIdx], this.practices);
        this.play();
        return true;
    }

    prev() {
        // If more than 3s in, restart current track
        if (this.audio.currentTime > 3) {
            this.audio.currentTime = 0;
            return true;
        }
        if (this.practices.length === 0) return false;
        const prevIdx = this.currentIndex - 1;
        if (prevIdx < 0) {
            this.audio.currentTime = 0;
            return true;
        }
        this.load(this.practices[prevIdx], this.practices);
        this.play();
        return true;
    }

    seekTo(time) {
        this.audio.currentTime = Math.max(0, Math.min(time, this.audio.duration || 0));
    }

    // ── Getters ──

    get progress() {
        if (!this.audio.duration) return 0;
        return this.audio.currentTime / this.audio.duration;
    }

    get currentTime() {
        return this.audio.currentTime || 0;
    }

    get duration() {
        return this.audio.duration || this.currentPractice?.duration_seconds || 0;
    }

    get remaining() {
        return Math.max(0, this.duration - this.currentTime);
    }

    get hasTrack() {
        return !!this.currentPractice;
    }

    get hasPrev() {
        return this.currentIndex > 0 || this.audio.currentTime > 3;
    }

    get hasNext() {
        return this.currentIndex < this.practices.length - 1;
    }

    // ── Events ──

    onChange(fn) {
        this._listeners.push(fn);
        return () => {
            this._listeners = this._listeners.filter(f => f !== fn);
        };
    }

    _emit(type) {
        for (const fn of this._listeners) {
            try { fn(type, this); } catch (e) { console.error('Player listener error:', e); }
        }
    }

    // ── Progress loop (RAF for smooth ring updates) ──

    _startProgressLoop() {
        this._stopProgressLoop();
        const tick = () => {
            this._emit('progress');
            this._progressRAF = requestAnimationFrame(tick);
        };
        this._progressRAF = requestAnimationFrame(tick);
    }

    _stopProgressLoop() {
        if (this._progressRAF) {
            cancelAnimationFrame(this._progressRAF);
            this._progressRAF = null;
        }
    }

    // ── Media Session ──

    _updateMediaSession() {
        if (!('mediaSession' in navigator) || !this.currentPractice) return;
        const p = this.currentPractice;
        navigator.mediaSession.metadata = new MediaMetadata({
            title: p.title || 'Practice',
            artist: p.leader_name || 'OnlyGods',
            album: 'Focus Practices',
            artwork: [
                { src: '/app/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
                { src: '/app/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
            ]
        });
        navigator.mediaSession.playbackState = this.isPlaying ? 'playing' : 'paused';
    }

    // ── Formatting helpers ──

    static formatTime(seconds) {
        const s = Math.floor(seconds);
        const m = Math.floor(s / 60);
        const ss = s % 60;
        return `${m}:${ss.toString().padStart(2, '0')}`;
    }
}

export const player = new Player();
