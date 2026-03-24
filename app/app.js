import { auth } from './lib/auth.js';
import { Router } from './lib/router.js';
import { StreamMini } from './lib/pip.js';
import { renderNav } from './components/nav.js';
import { player } from './lib/player.js';

let router = null;

async function init() {
    // 1. Init auth
    const authed = await auth.init();

    // 2. Show auth screen if not authenticated
    if (!authed) {
        showAuthScreen();
        return;
    }

    // 3. Check approval status — only approved/active members or admins can enter
    if (!auth.isApproved()) {
        showPendingScreen();
        return;
    }

    // 4. Hide auth screen
    const authScreen = document.getElementById('auth-screen');
    if (authScreen) authScreen.style.display = 'none';

    // 4. Init nav
    const nav = document.getElementById('app-nav');
    if (nav) renderNav(nav);

    // 5. Init stream mini-player
    window.streamMini = new StreamMini();

    // 6. Init router
    const viewContainer = document.getElementById('app-view');
    router = new Router(viewContainer);
    await router.navigate();

    // 7. Init focus mini-player
    setupMiniPlayer();

    // 8. Activity status tracking
    setupActivityTracking();

    // 9. Apply i18n
    if (typeof OGLang !== 'undefined') {
        OGLang.applyLang(OGLang.getLang());
    }
}

function showPendingScreen() {
    const screen = document.getElementById('auth-screen');
    if (!screen) return;
    screen.style.display = 'flex';

    const status = auth.getMembershipStatus();
    const member = auth.getMember();

    if (status === 'suspended') {
        screen.innerHTML = `
            <div class="auth-card">
                <div class="auth-logo">OnlyGods</div>
                <div class="auth-subtitle">Account Suspended</div>
                <div class="auth-body">
                    <p class="auth-text">Your access has been suspended. Contact admin for details.</p>
                </div>
                <div class="auth-divider"></div>
                <div class="auth-footer">
                    <button class="auth-logout-btn" onclick="document.dispatchEvent(new Event('og-logout'))">Sign Out</button>
                </div>
            </div>
        `;
    } else {
        screen.innerHTML = `
            <div class="auth-card">
                <div class="auth-logo">OnlyGods</div>
                <div class="auth-subtitle">Awaiting Approval</div>
                <div class="auth-body">
                    <p class="auth-text">Welcome${member?.name ? ', ' + member.name : ''}! Your account is pending admin approval.</p>
                    <p class="auth-hint">You'll receive an email once approved.</p>
                    <div class="auth-pending-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#86868b" stroke-width="1"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    </div>
                </div>
                <div class="auth-divider"></div>
                <div class="auth-footer">
                    <button class="auth-logout-btn" onclick="document.dispatchEvent(new Event('og-logout'))">Sign Out</button>
                </div>
            </div>
        `;
    }

    document.addEventListener('og-logout', async () => { await auth.logout(); window.location.href = '/playground.html'; }, { once: true });
}

function showAuthScreen() {
    // Redirect all unauthenticated users to playground (login gateway)
    window.location.href = '/playground.html';
}

function setupMiniPlayer() {
    const mp = document.getElementById('mini-player');
    if (!mp) return;

    const btn = document.createElement('button');
    btn.className = 'mini-player-btn';
    mp.appendChild(btn);

    const info = document.createElement('div');
    info.className = 'mini-player-info';
    const title = document.createElement('div');
    title.className = 'mini-player-title';
    info.appendChild(title);
    mp.appendChild(info);

    const time = document.createElement('div');
    time.className = 'mini-player-time';
    mp.appendChild(time);

    const progress = document.createElement('div');
    progress.className = 'mini-player-progress';
    mp.appendChild(progress);

    function updateIcon() {
        const svgNS = 'http://www.w3.org/2000/svg';
        btn.textContent = '';
        const svg = document.createElementNS(svgNS, 'svg');
        svg.setAttribute('width', '14'); svg.setAttribute('height', '14');
        svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('fill', 'currentColor');
        if (player.isPlaying) {
            const r1 = document.createElementNS(svgNS, 'rect');
            r1.setAttribute('x', '6'); r1.setAttribute('y', '4'); r1.setAttribute('width', '4'); r1.setAttribute('height', '16');
            svg.appendChild(r1);
            const r2 = document.createElementNS(svgNS, 'rect');
            r2.setAttribute('x', '14'); r2.setAttribute('y', '4'); r2.setAttribute('width', '4'); r2.setAttribute('height', '16');
            svg.appendChild(r2);
        } else {
            const poly = document.createElementNS(svgNS, 'polygon');
            poly.setAttribute('points', '6 3 20 12 6 21 6 3');
            svg.appendChild(poly);
        }
        btn.appendChild(svg);
    }

    function fmtTime(s) {
        const sec = Math.floor(s);
        return Math.floor(sec / 60) + ':' + (sec % 60).toString().padStart(2, '0');
    }

    btn.addEventListener('click', (e) => { e.stopPropagation(); player.toggle(); });
    mp.addEventListener('click', () => { location.hash = '#/synch'; });

    player.onChange((type) => {
        const isOnSynch = location.hash === '#/synch';
        const shouldShow = player.hasTrack && player.isPlaying && !isOnSynch;
        mp.classList.toggle('visible', shouldShow);
        document.body.classList.toggle('has-mini-player', shouldShow);

        if (type === 'state' || type === 'loaded') {
            title.textContent = player.currentPractice?.title || '';
            updateIcon();
        }
        if (type === 'progress') {
            time.textContent = fmtTime(player.remaining);
            progress.style.width = (player.progress * 100) + '%';
        }
    });

    window.addEventListener('hashchange', () => {
        const isOnSynch = location.hash === '#/synch';
        if (isOnSynch) {
            mp.classList.remove('visible');
            document.body.classList.remove('has-mini-player');
        } else if (player.hasTrack && player.isPlaying) {
            mp.classList.add('visible');
            document.body.classList.add('has-mini-player');
        }
    });
}

async function setupActivityTracking() {
    if (!auth.member) return;
    const { getClient } = await import('./lib/supabase.js');
    const sb = getClient();

    const memberId = auth.getMemberId();
    let activityTimeout = null;

    const updateStatus = async (status) => {
        await sb.from('members')
            .update({ activity_status: status, last_seen: new Date().toISOString() })
            .eq('id', memberId);
    };

    // Set online
    updateStatus('online');

    // Track visibility
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            activityTimeout = setTimeout(() => updateStatus('away'), 5 * 60 * 1000);
        } else {
            clearTimeout(activityTimeout);
            updateStatus('online');
        }
    });

    // Set offline on close
    window.addEventListener('beforeunload', () => {
        navigator.sendBeacon?.(
            `https://bnfkicmzxljkhahqxfla.supabase.co/rest/v1/members?id=eq.${memberId}`,
            JSON.stringify({ activity_status: 'offline', last_seen: new Date().toISOString() })
        );
    });
}

// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch((err) => {
        console.warn('SW registration failed:', err);
    });
}

// Boot
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
