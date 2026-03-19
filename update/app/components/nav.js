import { auth } from '../lib/auth.js';

const TABS = [
    { path: '/',          icon: 'field',    label: 'Field' },
    { path: '/align',     icon: 'align',    label: 'Align' },
    { path: '/chat',      icon: 'chat',     label: 'Chat' },
    { path: '/synch',     icon: 'synch',    label: 'Synch' },
    { path: '/stream',    icon: 'stream',   label: 'Stream' },
    { path: '/profile',   icon: 'profile',  label: 'Me' },
];

const ICONS = {
    field: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/></svg>`,
    align: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    chat: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    synch: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    stream: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
    profile: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
};

export function renderNav(container) {
    const currentPath = location.hash.slice(1) || '/';

    container.innerHTML = TABS.map((tab) => `
        <button class="tab-btn ${currentPath === tab.path ? 'active' : ''}"
                data-route="${tab.path}"
                onclick="location.hash='#${tab.path}'">
            <span class="tab-icon">${ICONS[tab.icon]}</span>
            <span class="tab-label">${tab.label}</span>
        </button>
    `).join('');
}

export function updateNavBadge(path, count) {
    const btn = document.querySelector(`.tab-btn[data-route="${path}"]`);
    if (!btn) return;

    let badge = btn.querySelector('.tab-badge');
    if (count > 0) {
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'tab-badge';
            btn.querySelector('.tab-icon').appendChild(badge);
        }
        badge.textContent = count > 99 ? '99+' : count;
    } else if (badge) {
        badge.remove();
    }
}
