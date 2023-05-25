const cacheName = "DeliveryCache";

const addResourcesToCache = async (resources) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/src/image/icono.png",
      "/src/lib/lit-html.js",
      "/src/lib/lit-html.js.map",
      "/src/css/style.css",
      "/src/componentes/CardComponent.js",
      "/src/componentes/NavbarComponent.js",
      "/src/componentes/desplegable.js",
      "/index.html",
      "/categorias.html",
      "/comercio.html",
      "/producto.html",
      "/aplicacion.js",
      "/aplicacion2.js",
      "/aplicacion3.js",
      "/categoria.js",

    ])
  );
});


self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        // Recurso encontrado en la caché, se devuelve la respuesta almacenada
        return response;
      } else {
        // Recurso no encontrado en la caché, se realiza una solicitud a la red
        return fetch(event.request).then(function (networkResponse) {
          if (networkResponse && networkResponse.status === 200 && event.request.url.startsWith("http")) {
            // Clonar la respuesta de la red antes de almacenarla en la caché
            const clonedResponse = networkResponse.clone();

            // Almacenar el recurso clonado en la caché
            caches.open(cacheName).then(function (cache) {
              cache.put(event.request, clonedResponse);
            });
          }
          return networkResponse;
        });
      }
    })
  );
});

