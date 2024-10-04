'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4c3598b5e3c35b00f9001f591449cd89",
"assets/AssetManifest.bin.json": "e10aa8b7463d09542c8757cca17c53ef",
"assets/AssetManifest.json": "5a68d66eda0d6a98ecfb57f38f78e391",
"assets/FontManifest.json": "915e5008885537296f25509ff716a9aa",
"assets/fonts/InterTight-Bold.ttf": "d992d45d0373e33b3d75e471af494b7b",
"assets/fonts/InterTight-BoldItalic.ttf": "7e8e429b7d4c775acf71ca91607701cc",
"assets/fonts/InterTight-Italic.ttf": "45df727fa3ea4b63d7883952f210a886",
"assets/fonts/InterTight-Light.ttf": "a838133e540468c71092d9a071f5e7c8",
"assets/fonts/InterTight-LightItalic.ttf": "c0bfd41835091f6cb6b2ad445ca37e52",
"assets/fonts/InterTight-Medium.ttf": "b4ab32bca9dae366fa7193b1b7bb1b4c",
"assets/fonts/InterTight-MediumItalic.ttf": "babfa3325296dcc5d9473ff21ec113c2",
"assets/fonts/InterTight-Regular.ttf": "6c7bcaa885b5c58fe97d7f025e26bd30",
"assets/fonts/InterTight-SemiBold.ttf": "701cf433d42ef71e28080e88d58354e1",
"assets/fonts/InterTight-SemiBoldItalic.ttf": "e0b43fd9b66d7ef6f5a459751119a686",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "a3eaeb8abaea4486e8aca5f472bd6871",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/svg/apple_logo.svg": "1040f1637228813cf045400406deeed6",
"assets/svg/apple_logo_white.svg": "abdd1842bf9ad45c95e10e4a36c18332",
"assets/svg/flags/de.svg": "c75e8d072cd0e13f748af7ec34bed807",
"assets/svg/flags/en.svg": "a91cf7c1cea9196585296cef7ac97e27",
"assets/svg/flags/fr.svg": "0bab52a09cc33d2bb005aaaf6af1718d",
"assets/svg/flags/he.svg": "f28661af33247dab4551895679257ce7",
"assets/svg/flags/it.svg": "f5312ab2c56a61792a6e70309d0a7b78",
"assets/svg/flags/pl.svg": "6bd536e17293fcfb962b19e278f48418",
"assets/svg/flags/uk.svg": "bcaf3630dc9d927461ce4f247a7a545a",
"assets/svg/google_logo.svg": "654887d3b17e2bf1e801db1edc8436ac",
"assets/svg/ic_bookmark.svg": "6666b321fb7cf593699bdf42e2689563",
"assets/svg/ic_check_circle.svg": "925256ab566e85c1a3359b5e15db0d0b",
"assets/svg/ic_chevron_left.svg": "f4167a85770186120885f5dd6e81c273",
"assets/svg/ic_chevron_right.svg": "0d40f4b653a147e11202ddbac0758975",
"assets/svg/ic_email.svg": "3cfb99e9e09ec958427fd030a24a2cc9",
"assets/svg/ic_eye-off.svg": "f960f2767741ad86fda3045f24b40cc5",
"assets/svg/ic_eye.svg": "f8380e89bf67158ef8f7df40900eba08",
"assets/svg/ic_home.svg": "3d19c026c87765550d06b3afd8440353",
"assets/svg/ic_lock.svg": "b735d0a0aac6a20cdaa64a8efcc81f10",
"assets/svg/ic_logo.svg": "85bf3c95d36e2b443c4e0895cc93c980",
"assets/svg/ic_search.svg": "800e74528f7f0931b9a0fa74118bedc5",
"assets/svg/ic_translate.svg": "633cb5d0a9c6dc42d9f81bad5344f961",
"assets/svg/ic_user.svg": "92c0f9a11219f2d30b37a0ad5e8455d2",
"assets/svg/ic_user_edit.svg": "7c408e5d8addffdebcafe23ec47e50b7",
"assets/svg/ic_wifi_off.svg": "08fca8fee2d7aeb3cbe96f5d7b7c2aac",
"assets/svg/ic_x.svg": "de218c1c0c696a9ce6cdd6eb19f70cbb",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"css/spinner.css": "418634961c41c782e9f9a6b729ea297a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "792faefc86a9ec746dd467ad41b714e1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bfa5654b64426e3c9416a50089576531",
"/": "bfa5654b64426e3c9416a50089576531",
"main.dart.js": "fec1b562146fa458b77204aa6dba5a00",
"main.dart.mjs": "138d35c50c67fd4737437f059118388a",
"main.dart.wasm": "e2914a4abf72b4cf4539840be8508ecc",
"manifest.json": "1deee1a2723a051b917315e6045446ba",
"version.json": "3af9019605781e528e8aa4b7a63de882"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
