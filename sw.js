// Version 7

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('playbulbcandle').then(function(cache) {
            return cache.addAll([
                '/demos/playbulb-candle-ba/',
                '/demos/playbulb-candle-ba/index.html',
                '/demos/playbulb-candle-ba/styles.css',
                '/demos/playbulb-candle-ba/bower_components/gatt-ip-js/gattip.js',
                '/demos/playbulb-candle-ba/wb-polyfill.js',
                '/demos/playbulb-candle-ba/playbulbCandle.js',
                '/demos/playbulb-candle-ba/app.js',
                '/demos/playbulb-candle-ba/color-wheel.png',
                '/demos/playbulb-candle-ba/code.getmdl.io/1.0.4/material.green-light_green.min.css',
                '/demos/playbulb-candle-ba/code.getmdl.io/1.0.4/material.min.js',
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