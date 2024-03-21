// service-worker.js

var cacheName = "lessons-v1";
var cecheFiles = [
    "index.html",
    
    //"lessons.js",

    "images/bangla.png",
    "images/math.png",
    "images/english.png",
    "images/french.png",
    "images/spanish.png",
    "images/art.png",
    "images/yoga.png",

];

// Cache assets during installation
self.addEventListener("install", function(event) {
    console.log("[Service Worker] Install");
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log("[Service Worker] Caching all the files");
            return cache.addAll(cacheFiles);
        })
    );
});

// Serve cached content or fetch from network
self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request).then(function(cachedFile) {
            //return the file if it is in the cache
            if (cachedFile) {
                console.log("[Service Worker] Resource fetched from the cache for: " + event.request.url);
               
                return cachedFile;
            } else { //download the file if it is not in the cache
                return fetch(event.request).then(function(response) {
                    
                    return caches.open(cacheName).then(function (cache) {
                        //add the new file to the cache
                        cache.put(event.request, response.clone());
                console.log("[Service Worker] Resource fetched and saved in the cache for: " + event.request.url);
                
                return response;
            });
        });
    }
})

);

});
