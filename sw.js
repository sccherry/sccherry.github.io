const CACHE_VERSION = 'v1';
const CONTENT_CACHE = 'content';
const MEDIA_CACHE = 'media';
const STATIC_CACHE = 'static';

const OFFLINE = {
  page: './offline.html',
  image: './assets/safari-pinned-tab.svg',
};

const STATIC_ASSETS = [
  ...Object.values(OFFLINE),
  './assets/android-chrome-192x192.png',
  './assets/android-chrome-512x512.png',
  './assets/apple-touch-icon.png',
  './assets/favicon-16x16.png',
  './assets/favicon-32x32.png',
  './assets/mstile-150x150.png',
  './assets/favicon.ico',
  './css/main.css',
  './js/main.js',
  './',
];

/**
 * Utility functions
 */

const cacheName = (key) => {
  return `${CACHE_VERSION}-${key}`;
};

const getCacheKey = (request) => {
  const acceptHeader = request.headers.get('Accept');

  if (acceptHeader.indexOf('text/html') !== -1) {
    return CONTENT_CACHE;
  }

  if (acceptHeader.indexOf('image') !== -1) {
    return MEDIA_CACHE;
  }

  return STATIC_CACHE;
};

const shouldHandleFetch = (request) => {
  const url = new URL(request.url);

  const criteria = {
    isGETRequest: request.method === 'GET',
    isSameOrigin: url.origin === self.location.origin,
  };

  return Object.keys(criteria)
    .map((key) => criteria[key])
    .reduce((acc, curr) => acc && curr);
};

const addToCache = (key, request, response) => {
  if (response.ok) {
    const req = request.clone();
    const res = response.clone();

    caches.open(cacheName(key)).then((cache) => {
      cache.put(req, res);
    });
  }

  return response;
};

const fetchFromNetwork = (key, request) => {
  const req = request.clone();

  return fetch(req).then((response) => addToCache(key, request, response));
};

const fetchFromCache = (key, request) => {
  const req = request.clone();

  return caches
    .open(cacheName(key))
    .then((cache) => {
      return cache.match(req).then((response) => {
        fetchFromNetwork(key, request);

        return response;
      });
    })
    .then((response) => response || Promise.reject('no-match'));
};

const offlineResponse = (key) => {
  if (key === MEDIA_CACHE) {
    return caches.match(OFFLINE.image);
  }

  if (key === CONTENT_CACHE) {
    return caches.match(OFFLINE.page);
  }

  return undefined;
};

/**
 * Install event
 */

const onInstall = () => {
  return caches.open(cacheName(STATIC_CACHE)).then((cache) => {
    return cache.addAll(STATIC_ASSETS);
  });
};

/**
 * Activate event
 */

const onActivate = () => {
  return caches
    .keys()
    .then((keys) =>
      Promise.all(
        keys.filter((key) => key.indexOf(CACHE_VERSION) !== 0).map((key) => caches.delete(key))
      )
    );
};

/**
 * Fetch event
 */

const onFetch = ({ request }) => {
  const key = getCacheKey(request);

  if (key === CONTENT_CACHE) {
    return fetchFromNetwork(key, request)
      .catch(() => fetchFromCache(key, request))
      .catch(() => offlineResponse(key));
  }

  return fetchFromCache(key, request)
    .catch(() => fetchFromNetwork(key, request))
    .catch(() => offlineResponse(key));
};

/**
 * Event listeners
 */

self.addEventListener('install', (e) => {
  e.waitUntil(onInstall(e).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(onActivate(e).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  if (!shouldHandleFetch(e.request)) {
    return;
  }

  e.respondWith(onFetch(e));
});
