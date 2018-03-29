self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('the-magic-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/css/bootstrap.min.css',
          '/css/mdb.min.css',
          '/manifest.json',
          '/css/style.css',
          '/js/jquery-3.2.1.min.js',
          '/main.js',
          '/js/popper.min.js',
          'js/bootstrap.min.js',
          '/js/mdb.min.js',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });