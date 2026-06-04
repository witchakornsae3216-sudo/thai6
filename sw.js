
self.addEventListener('install',e=>{
e.waitUntil(caches.open('triphumi-v1').then(c=>c.addAll(['./','index.html','logo.jpg'])));
});
self.addEventListener('fetch',e=>{
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
