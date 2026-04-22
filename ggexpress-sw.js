self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker ativo');
});

self.addEventListener('push', function(event) {
  const data = event.data ? event.data.text() : 'Nova entrega disponível!';

  event.waitUntil(
    self.registration.showNotification('GG Express', {
      body: data,
      icon: 'https://cdn-icons-png.flaticon.com/512/743/743922.png',
      badge: 'https://cdn-icons-png.flaticon.com/512/743/743922.png',
      vibrate: [300,100,300],
      data: { url: '/' }
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
