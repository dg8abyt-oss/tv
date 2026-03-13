// A simple service worker to satisfy PWA install requirements
self.addEventListener('install', (e) => {
    console.log('Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
    // Let all network requests pass through normally
});
