'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b4705b1cf722abbeab5620c4ff31a746",
".git/config": "80eea39b52024e2f7c0835e07fd170fd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "3c4cdf6c3c69d615f0177a76c41564f0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "01b663d4c14e88f3565df299f878b1c7",
".git/logs/refs/heads/master": "01b663d4c14e88f3565df299f878b1c7",
".git/logs/refs/remotes/origin/master": "33feb9bbaca5feaacd71829ea7ecb085",
".git/objects/00/23a747d650c3e884a7181bde4a0c0a6a5f326f": "f1ac20b53d82180d11cf8c6a2cd8687f",
".git/objects/0c/3520309a5d034bbb40d2e5981a6023ea80aac8": "ec6be3a17f0073c588930f09125d6eba",
".git/objects/0c/d3933d5ca854cfd58b4f41b60dc90d066c3454": "ae57d3a3ab5b82ce72a3727cc860db89",
".git/objects/1b/ef58481f5934f501a4cfcb6dcd2584005081ab": "1b919553a86cefbd8128c9287751cecb",
".git/objects/1c/fc1b95bc5555e92586c412e179972796cff4f3": "41fac1b6303b6d9bde4c843045b1a243",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/81f7ba56e8d0e69c4b6deeeead291598670a58": "a34e24aab614b39ab394fd1dd6ed08c4",
".git/objects/38/274a9b3ea4f56d3faa7de54157c3cfd606c352": "df4268e350c45b1c651e4dec9c0a57b0",
".git/objects/38/49a2200163e132ebc046a0be46faf3b576a2b7": "1e915e32a440ffd79d65530c67fbfa26",
".git/objects/3e/98a95709549cfd5cc9d803cb884243959a2401": "35bea9b9fdb04af2daa9a349edea6788",
".git/objects/3f/6b9af5044baf9f06f1c5d7888cbf037ff018bb": "6042c463cc9b25d03feed0633e35d909",
".git/objects/41/ac65ce3ece7adcb57f0e0b2ad95ec0e0729e30": "5b199869b7ebb3ec04522c1575fc157a",
".git/objects/42/2cf10a2c106041b90053eecfc099a9abcff4ea": "9f2c2dcf762b0b42cd14d19cd5edb320",
".git/objects/44/f784ae2a3d8dca0aa3b5cdbb4065c5151069dc": "5803e06c62ad3ee3c0d98057c73fcdc0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/5a0127a63e62efbfb4b51f1138bee2374fc8a5": "6d80b059346ef7ddeb1783fe97241051",
".git/objects/52/9e13d3d2f2ec2b5de0ea1d73278619dc489f2d": "f83ac2ec2274ac3ae1d89a2b4184cb3b",
".git/objects/53/464d9ef8420e32cbac1d554fd987080ed3852b": "57ab27bfb485a7511923afe22c775b83",
".git/objects/54/98b740bf459b2d36bd360c3c70ebb0d340ef02": "200a5bb70166a8e549461c0cd05b68f8",
".git/objects/63/f97b6ef419793271d07a949317adb44d30be13": "c0de2c4133cc551ee9098200f8c63970",
".git/objects/64/bc76af6c0a03e88875482db852531e15419f1f": "6a68965d2d591d90980a21740bb42036",
".git/objects/75/8cde3b84d6d52e3fa75a04aa45dbe27c3067be": "1d465a804150efe0837d8d9a80d40d25",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/98ffaf5b422f9923208de6c0dbcc3881ffde4c": "8127b1e49427180f14efda9d665713fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/f3bca5f54001ab2c3b60029492fa75440c557c": "ed72c6bb6b91a620f90000958cecd6ce",
".git/objects/92/3ba60d0a4343f58381203f6ddf0651e47b3942": "c53f385bb75bae097676a5aa625e1746",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/4574cd27a72a801ea159fa5ee8516e6753e501": "462b6f6f74dda9b19c2ba497932cd6cb",
".git/objects/b4/c0b117d77c066f307399bca0044c7fcf7e801b": "bbee1e8d9c988b79c0fd35ea21cabba6",
".git/objects/b6/577b617084dee27876495b7802fe5dc593cff5": "18b867750a35f1f9d4ea9181b6468e38",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/07246974d26e64633b16591a1bfd96e5bab97c": "4f81b3b159922d6bad1f47a1e72b0664",
".git/objects/c9/54ee9e910d6df1cf7f2f2fbf7c50d144fb4e26": "7494474e53a456ac0c16f6c64f097b36",
".git/objects/ca/a9498d100dd46490a327a92151b7ca96210934": "315544753b4769d44de1d3cacd43c8f0",
".git/objects/cb/79218c6daf6d97f518106b7aa5bfa43f8478c7": "f4ee63b44c46cb337a30980f190a83f7",
".git/objects/cb/b4967227d0201e10e5a16a4e0f661db5015b14": "b6f2b5850ca8e7de019929da9e5e223c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/167164fa67d8037477089a0d4bd92dd0764ef0": "f4ecfa934f602adf03407ee61e2a4380",
".git/objects/da/db60a746d0400f9852bb34fe1649a0e7c4916c": "146117dbd5973d30b3e3d44519cf1bf3",
".git/objects/de/09ea1678ba5215ffffa32f98981fa924ef6494": "d8e13de96a0fdc8f68e9efca674da7e9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/f56b3ba898e7fad04e7a690e270eb98933cd46": "b717b89a2f8eaf6b49fbfbecc9a8ffdc",
".git/objects/fc/4c3ef3046556b97df09ee5856b3cf36c798d89": "22d2ae170f6300e261795f4658655d48",
".git/objects/fd/6029a34cac4a7f8cf355a2e77d7b79babb1c0e": "45c613c344cf475fc91eb30fc13ad323",
".git/objects/fd/eee8b566da3d364dfe8ba744cbfc55d67f41ce": "6d2200cb509822110e29fd96846f2a3b",
".git/objects/ff/4e5990f6839435b3b219f026ee49467f6f2c35": "f8cde557213adf4099a1218432edeece",
".git/refs/heads/master": "befad1bd27740e325a7407c42f717ac6",
".git/refs/remotes/origin/master": "befad1bd27740e325a7407c42f717ac6",
"assets/AssetManifest.json": "b68cb8f29b154dd61b0b4bf70293ed6d",
"assets/assets/files/LatrellNewGradResume.pdf": "b04464be237f85f989a74414cab0b20c",
"assets/assets/images/background.png": "59265d315ca19022676c8bb53690711b",
"assets/assets/images/click_me.png": "7a9d504f231e88be367480d3d13207e6",
"assets/assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/graphic.png": "d7aaa5a5615483382572b5d5c24c5e5b",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/heart.png": "25b824c2f628f98d9b5bf868a503d57c",
"assets/assets/images/Hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/assets/images/jorge_coca.png": "0381444367db766474902f8da04460ed",
"assets/assets/images/logo.png": "9da641fae38e6c56002e52e7ddf9a49c",
"assets/assets/images/me.png": "546a517e9be87d6f7226c55f5674a737",
"assets/assets/images/placeholder.png": "6ede1e25d66c72b4e0ca2e5459cfd8b1",
"assets/assets/images/recent_work_bg.png": "531a8461fd1ec42f03f4cfb891790635",
"assets/assets/images/ship.png": "98e873648b7c2d3062556f2f8c09d4c3",
"assets/assets/images/signature.png": "07db44ac1c35163177a5fdc5c4db1b56",
"assets/assets/json/feedback.json": "8970381b140f68fe1492ccaf347d98b1",
"assets/assets/json/recent_work.json": "3fd9e684a87c05d22c15f4c7dbb364ed",
"assets/assets/json/service.json": "a6c18cbfcc7ffddc0a88cdccef7d79d5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "26d572ba3a4c0a7a3ebfa50914e4883f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4bcbaabccefac7e340df646f418109dc",
"/": "4bcbaabccefac7e340df646f418109dc",
"main.dart.js": "ff5845a11e3b1284f99f6ed5a23d21e7",
"manifest.json": "44225d62c5278b40308d5fc8326ce31d",
"version.json": "50e1da01869134aa55af6afc40b83120"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
