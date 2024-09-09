var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = ['/index.html'];
// Кэшируем файлы при установке Service Worker
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Загружаем кэшированные файлы при запросе
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Возвращаем файл из кэша, если он найден
      if (response) {
        return response;
      }
      // Попробуем загрузить файл с сервера
      return fetch(event.request).catch(function () {
        // Если загрузка не удалась (например, отсутствует интернет), возвращаем оффлайн страницу
        return caches.match('/index.html');
      });
    })
  );
});
