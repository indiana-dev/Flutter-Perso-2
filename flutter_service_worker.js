'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "26135e4be13343012ada35bf6692fcf3",
"index.html": "cfe03a9dcbfaaadd18667e52e4689a01",
"/": "cfe03a9dcbfaaadd18667e52e4689a01",
"main.dart.js": "76854ab78e7206e790ab5ec2d01de0fd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5b6deb1f2deec82d4d0364c215bdff39",
".git/config": "bc81aa994527848a5daacaeadefaf3c4",
".git/objects/59/89847641d7745a9c934ef5990d3d0d8cd7eda5": "a8e2e358a49ca7d09537455d6fd10f52",
".git/objects/50/92bd0dfb2c66b8594e2217485ce06cbf4e25b7": "468d3325433490cb9039001398a445ac",
".git/objects/6f/722880ed7072cac6d41375782f7f70472f842f": "9dc47fc7af0a6e3a329c45f305ef2d03",
".git/objects/03/fb49fb585b5a60866ac6979278e2e8f6f6d038": "6fa1e6da113bd17e33890c0b1deacdee",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/e175a7546362d61174c2372e48df364b5f1848": "26d9282bc2a4e408b28210c51b49edd4",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/58/448e1e2f23cc9ef06ec8191666816a50ccc4b6": "adb9773ff0fb9f3ce30472452e739e71",
".git/objects/5a/3cfdd9fbcc309d1060c50a7984396d6ba2600b": "db64847b14058db1c981dcaf73c10a8f",
".git/objects/5f/1880b5b2d0ed6ee753ef61c428a7347481222a": "2342d589514227bb7235704dd12f8021",
".git/objects/05/a093efc3f4923cc3fdf86d305cc9bd2464455f": "eefcaf4e1f792d6a07c2a7537b7149af",
".git/objects/9c/3d5d587c641abda4d7693cee8af41604246948": "9e85d6fabadd077b10e875899b62f155",
".git/objects/d7/de9e07572678d8e0a8fdff5638d2c9223ef70f": "c9511d631b22eeb033a88ae9d1d45f7e",
".git/objects/a2/d6a31393abdba48064e2d186f18e07efaa3f2b": "8525faf2509b46a7442aca45c18708f1",
".git/objects/bd/7bba63104a204d790c5432085090a75d389d19": "3f54cd94f5acb28937a52be80e751ff9",
".git/objects/bc/31d906672ed9fd7c1b8798282eb534592c1bc2": "02b40c54aaf93fa6734168dfd5d410aa",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/7dcd03d476c7351a332934af47c410a748b5d4": "a612bf3ccd6b9dc8282a82a1d52d6aba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f5/407ef1cf44fa7063e4e3ea56448b0263b90525": "3ce17b4b7366c6fdb888815660940df4",
".git/objects/ed/6b66fdc9cc72df60f95a9d1976a34e3a14197f": "bb974e6fb1b3ed9c3332944916a80ed3",
".git/objects/c6/0dc2dadac11be70af58d341061fb70c04a8c57": "e4d38d03e6fa3ef1c22459cbdf9dd95e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/45/7f4f6ade2634baeb23240829e5c5ad5b4ee699": "75b3d9c31ddff782e0b69d6907b9bc53",
".git/objects/80/58f065b4ba97c136c3ec69e57f6ee9b24ea06b": "c4bf9a13eb9208a57ab36a46586bbb78",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/468d94ace1ea4961a29d7fb78ab1439fd0b2a0": "d48d841e5db5efa723b2f364130196c0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/dc43562ee9b0775f7e4c6a8fe5cd52ff406ee0": "3d131e7e29596a00e5ee44db0064a49b",
".git/objects/31/ce03947900880d44eed66c5351a00c429b7bcd": "e58a58ba1667407b62d8b3f9e1983d62",
".git/objects/91/9ce4c47a0fd8565669ecee51f6307b32a9c0e7": "ad198ee0793a31ec3f6949f603e374e4",
".git/objects/3f/858496a1b3ed0ea67fa96f9535e16c16fbdb26": "8d8b1268f0140bdaec8329c005b631a7",
".git/objects/6d/3b2b297e688392370078d57ca5dea0ec72e93a": "f7d1253c26aba7b409c04b480f2f127b",
".git/objects/d4/07c086eb5cbc0e2957a7ec2a09d935a9b8dd5f": "d7f88540532c4700af40c26e0933336a",
".git/objects/a7/a6e97f1b849200d878be7173922714e17222cd": "d6d22fd2312222a23ef019fe2f0fe064",
".git/objects/b1/f187c7f14f436fd1efdc218542300f454bfae2": "ff0cf6cc28d688474aba411e480fedbe",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/73f3a1a4f1191aa68b5e4d4045506346b56ef0": "906658cd09fb8a4abec642257fc0d90f",
".git/objects/cc/d410f4139200340a060dded151ff4729286f35": "7223107e77372ac396b4c40fae5a3820",
".git/objects/f7/a3f32ea9564343b3d60634fd186a3b4f881e7e": "1a8e8bcea60218a34f22a20411668892",
".git/objects/fa/12a9a132fa7e55b217978ca9304863c2fc6d45": "264ef9af53bb8c052bbdb5f3bbfe47bb",
".git/objects/f8/a0eb719e61a0f78e9836a1da98ef538e5dfbb0": "00a14a4cef8c42076afdab986034a18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/23/c910b6b5ea8dd9c4d852527591dc7c447ff284": "cbabd01a4d086366a8db4f6e10b7c649",
".git/objects/14/3599baa59e000fadd7af950a488f55f343ffec": "c494d21e033539c6a116931a974de053",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c34e2a0612d53d208ad0b52dcb85220e",
".git/logs/refs/heads/master": "c34e2a0612d53d208ad0b52dcb85220e",
".git/logs/refs/remotes/origin/master": "320fa8ce8626293fd0786c2c0461e129",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "7adb16841fd5e8b75d4961c7d9c9b408",
".git/refs/remotes/origin/master": "7adb16841fd5e8b75d4961c7d9c9b408",
".git/index": "ffd1d8f60c5c3cc6b0b79f77317d4965",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/AssetManifest.json": "ea76275a7ac5d9269e746687481efd43",
"assets/NOTICES": "f2675f6ca766ab172c3abf1f28880260",
"assets/FontManifest.json": "05926c4dbf077f5d71e4708f65046d0e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/iphone1.png": "43eee8d4a4b282456627c81a0fa9739f",
"assets/google_fonts/CoveredByYourGrace-Regular.ttf": "c037ec9dfaaeac60bc844d598e0185dd"
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
