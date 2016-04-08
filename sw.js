// Version 3

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('playbulb-candle').then(function(cache) {
      return cache.addAll([
        '/playbulbcandle/',
        '/playbulbcandle/index.html',
        '/playbulbcandle/styles.css',
        '/playbulbcandle/playbulbCandle.js',
        '/playbulbcandle/app.js',
        '/playbulbcandle/color-wheel.png',
        '/playbulbcandle/code.getmdl.io/1.0.4/material.green-light_green.min.css',
        '/playbulbcandle/code.getmdl.io/1.0.4/material.min.js',
        'https://fonts.googleapis.com/icon?family=Material+Icons',
      ]).then(function() {
        return self.skipWaiting();
      });
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
