self.addEventListener('push', e => {
  if (!e.data) return;
  const data = e.data.json();
  e.waitUntil(
    self.registration.showNotification(data.title || '拣货系统', {
      body:  data.body  || '有新消息',
      icon:  '/icon.png',
      badge: '/icon.png',
      tag:   data.orderId || 'picking',
      renotify: true,
      data: { orderId: data.orderId }
    })
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      if (list.length) {
        list[0].focus();
        list[0].postMessage({ type: 'NEW_ORDER', orderId: e.notification.data?.orderId });
      } else {
        clients.openWindow('/');
      }
    })
  );
});

self.addEventListener('install',  () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
