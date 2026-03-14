import { auth } from './lib/auth.js';
import { Router } from './lib/router.js';
import { StreamMini } from './lib/pip.js';
import { renderNav } from './components/nav.js';

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

    // 7. Activity status tracking
    setupActivityTracking();

    // 8. Apply i18n
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
                    <a class="auth-bot-link" href="https://t.me/OnlyVlad_bot" target="_blank" rel="noopener">@OnlyVlad_bot</a>
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
                    <p class="auth-hint">You'll get a notification in Telegram once approved.</p>
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

    document.addEventListener('og-logout', () => { auth.logout(); location.reload(); }, { once: true });
}

function showAuthScreen() {
    const screen = document.getElementById('auth-screen');
    if (!screen) return;
    screen.style.display = 'flex';

    // Invite registration form
    if (auth._pendingInvite) {
        screen.innerHTML = `
            <div class="auth-card">
                <div class="auth-logo">OnlyGods</div>
                <div class="auth-subtitle">Join the Field</div>
                <div class="auth-body">
                    <p class="auth-text">You've been invited to join OnlyGods.</p>
                    <div class="invite-register-form">
                        <div class="form-group">
                            <label class="form-label">Name *</label>
                            <input type="text" class="form-input" id="reg-name" placeholder="Your name" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-input" id="reg-email" placeholder="your@email.com">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Telegram</label>
                            <input type="text" class="form-input" id="reg-telegram" placeholder="@username">
                        </div>
                        <button class="form-btn form-btn-primary" id="btn-register" style="width:100%;margin-top:16px">Join OnlyGods</button>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('btn-register')?.addEventListener('click', async () => {
            const name = document.getElementById('reg-name')?.value?.trim();
            if (!name) return;
            const email = document.getElementById('reg-email')?.value?.trim();
            const telegram = document.getElementById('reg-telegram')?.value?.trim();
            const btn = document.getElementById('btn-register');
            if (btn) { btn.disabled = true; btn.textContent = 'Creating account...'; }

            const success = await auth.registerWithInvite(name, email, telegram);
            if (success) {
                location.reload();
            } else {
                if (btn) { btn.disabled = false; btn.textContent = 'Join OnlyGods'; }
            }
        });
        return;
    }

    // Invite error
    if (auth._inviteError) {
        screen.innerHTML = `
            <div class="auth-card">
                <div class="auth-logo">OnlyGods</div>
                <div class="auth-subtitle">Invite Error</div>
                <div class="auth-body">
                    <p class="auth-text">${auth._inviteError}</p>
                    <div class="auth-divider"></div>
                    <a href="app.html" class="auth-back">Back</a>
                </div>
            </div>
        `;
        return;
    }

    // Default: get link from bot
    screen.innerHTML = `
        <div class="auth-card">
            <div class="auth-logo">OnlyGods</div>
            <div class="auth-subtitle">Resonance Network</div>
            <div class="auth-body">
                <p class="auth-text">To access the platform, get your personal link from</p>
                <a class="auth-bot-link" href="https://t.me/OnlyVlad_bot" target="_blank" rel="noopener">@OnlyVlad_bot</a>
                <p class="auth-hint">Send /profile in the bot to receive your access link</p>
            </div>
            <div class="auth-divider"></div>
            <div class="auth-footer">
                <a href="index.html" class="auth-back">Back to OnlyGods.xyz</a>
            </div>
        </div>
    `;
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
