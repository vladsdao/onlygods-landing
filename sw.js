const CACHE_SHELL = 'og-shell-v7';
const CACHE_CDN = 'og-cdn-v1';

const SHELL_ASSETS = [
    '/app.html',
    '/app/app.css',
    '/app/app.js',
    '/app/lib/auth.js',
    '/app/lib/supabase.js',
    '/app/lib/router.js',
    '/app/lib/pip.js',
    '/app/components/nav.js',
    '/app/components/chat-bubble.js',
    '/app/views/chat.js',
    '/app/views/stream.js',
    '/app/views/synch.js',
    '/app/views/circle-chain.js',
    '/app/views/profile.js',
    '/app/views/dashboard.js',
    '/app/views/assistant.js',
    '/app/views/apps.js',
    '/app/views/crm.js',
    '/translations.js',
    '/manifest.webmanifest'
];

// Install: cache app shell
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_SHELL).then((cache) => cache.addAll(SHELL_ASSETS))
    );
    self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.filter((k) => k !== CACHE_SHELL && k !== CACHE_CDN)
                    .map((k) => caches.delete(k))
            )
        )
    );
    self.clients.claim();
});

// Fetch strategy
self.addEventListener('fetch', (e) => {
    const url = new URL(e.request.url);

    // Supabase API: network only (never cache dynamic data)
    if (url.hostname.includes('supabase.co')) return;

    // CDN assets (fonts, libraries): cache first
    if (url.hostname.includes('cdn.jsdelivr.net') ||
        url.hostname.includes('fonts.googleapis.com') ||
        url.hostname.includes('fonts.gstatic.com')) {
        e.respondWith(
            caches.match(e.request).then((cached) => {
                if (cached) return cached;
                return fetch(e.request).then((response) => {
                    const clone = response.clone();
                    caches.open(CACHE_CDN).then((cache) => cache.put(e.request, clone));
                    return response;
                });
            })
        );
        return;
    }

    // App shell assets: cache first, update in background
    if (SHELL_ASSETS.some((asset) => url.pathname === asset)) {
        e.respondWith(
            caches.match(e.request).then((cached) => {
                const fetchPromise = fetch(e.request).then((response) => {
                    const clone = response.clone();
                    caches.open(CACHE_SHELL).then((cache) => cache.put(e.request, clone));
                    return response;
                }).catch(() => cached);

                return cached || fetchPromise;
            })
        );
        return;
    }

    // Everything else: network first, fall back to cache
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});
