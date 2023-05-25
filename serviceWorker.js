const cacheName = "cacheDelivery"
const laCache = [
  "/",
      "/src/image/icono.png",
      "/src/css/style.css",
      "/src/lib/lit-html.js",
      "/src/js/CardComponent.js",
      "/src/js/NavbarComponent.js",
      "/src/js/desplegable.js",
      "/index.html",
      "/categorias.html",
      "/comercio.html",
      "/producto.html",
      "/aplicacion.js",
      "/aplicacion2.js",
      "/aplicacion3.js",
      "/categorias.js",
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