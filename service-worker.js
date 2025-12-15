self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("cartas-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json"
      ]);
    })
  );
});
