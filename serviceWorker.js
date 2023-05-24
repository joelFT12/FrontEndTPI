const cacheName = "cache de delivery"
const laCache = [
  "/",
  "/index.html",
  "/style.css",
  "/aplicacion.js",
  "/images/icono.png",

]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(laCache);
      })
      .catch(error => {
        console.error('Error opening cache:', error);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
      .catch(error => {
        console.error('Error fetching from cache:', error);
      })
  );
});