// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"index.js":[function(require,module,exports) {
// Grab defaultImage and thumbnail
var defaultImage = document.getElementById('defaultImage');
var thumb1 = document.getElementById('thumb1');
var thumb2 = document.getElementById('thumb2');
var thumb3 = document.getElementById('thumb3');
var thumb4 = document.getElementById('thumb4');
// Grab icons
var singleRight = document.querySelector('.fa-angle-right');
var singleLeft = document.querySelector('.fa-angle-left');
var doubleRight = document.querySelector('.fa-angle-double-right');
var doubleLeft = document.querySelector('.fa-angle-double-left');
// Grab reading type input
var readingType = document.getElementById('readingTypeInput');
// Grab display all images tag - initilized empty div
var displayAllImages = document.getElementById('displayAllImages');
// Event listener on clicking default image
defaultImage.addEventListener("click", firstImage);

// Event listener on click on thumbnails
thumb1.addEventListener("click", nextImage);
thumb2.addEventListener("click", nextImage);
thumb3.addEventListener("click", nextImage);
thumb4.addEventListener("click", nextImage);

// Event listener on navigation icons - used the same function as clicking thumbnails function
// Single right navigator
singleRight.addEventListener('click', firstImage);
// Single left navigator
singleLeft.addEventListener('click', leftImage);
// Double left navigator
doubleLeft.addEventListener('click', start);
// Double right navigator
doubleRight.addEventListener('click', end);

// Event on change on the select for reading options
readingType.addEventListener('change', readingOption);

// Change the src of defaultImage to thumbnail
function nextImage(e) {
  defaultImage.src = this.src;
}
//When the default image is clicked the next thumbnail in line was displayed
function firstImage(e) {
  // Array of thumbnails
  var test123 = [thumb1, thumb2, thumb3, thumb4];
  // If clicked and default image is first image then set next image to first in thumbnails array
  if (defaultImage.src == "https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80") {
    defaultImage.src = test123[0].src;
  }
  // If default image is first of array then set to next image
  else if (defaultImage.src == test123[0].src) {
      defaultImage.src = test123[1].src;
    }
    // If default image is second of array then set to next image
    else if (defaultImage.src == test123[1].src) {
        defaultImage.src = test123[2].src;
      }
      // If default image is third of array then set to next image
      else if (defaultImage.src == test123[2].src) {
          defaultImage.src = test123[3].src;
        }
        // If default image is fourth of array then set to first image
        else if (defaultImage.src == test123[3].src) {
            defaultImage.src = test123[0].src;
          }
}
//When the default image is clicked the former thumbnail in line was displayed
function leftImage() {
  // Array of thumbnails
  var test123 = [thumb1, thumb2, thumb3, thumb4];
  // If clicked and default image is first image then set next image to first in thumbnails array
  if (defaultImage.src == "https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80") {
    defaultImage.src = test123[3].src;
  }
  // If default image is first of array then set to next image
  else if (defaultImage.src == test123[0].src) {
      defaultImage.src = test123[3].src;
    }
    // If default image is second of array then set to next image
    else if (defaultImage.src == test123[1].src) {
        defaultImage.src = test123[0].src;
      }
      // If default image is third of array then set to next image
      else if (defaultImage.src == test123[2].src) {
          defaultImage.src = test123[1].src;
        }
        // If default image is fourth of array then set to first image
        else if (defaultImage.src == test123[3].src) {
            defaultImage.src = test123[2].src;
          }
}

function start() {
  var test123 = [thumb1, thumb2, thumb3, thumb4];
  defaultImage.src = "https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80";
}
function end() {
  var test123 = [thumb1, thumb2, thumb3, thumb4];
  defaultImage.src = test123[3].src;
}

function readingOption() {
  // Condition if display all pages is selected
  var test123 = [thumb1, thumb2, thumb3, thumb4];
  if (document.getElementById('readingTypeInput').value == "Display All Pages") {
    // Append all images after default image
    displayAllImages.innerHTML += '<div id="displayAllImages">' + '<h2>Hello!</h2>' + '<img id="defaultImage" src="https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80">' + '<img id="defaultImage" src="https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80">' + '</div>';
    // To toggle: displayAllImages.style{"display:none"};
  }
}

// 1.Clicked on the arrow icon to change the default image to the next
// When single-icon right-side clicked, set src to be the next src in thumbnail-array -- End result: clicked to get the next image as default image
// When single-icon left-side clicked, set src to be the former src in thumbnail-array

// 2. Reading type: when "display all" is selected: All images are stacked on top of eachother

// 3. Table of content

// 4. Link up Github

// 5. Navbar

// 6. Styling

// Later: bigger gallery, browse gallery etc.
},{}],"..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '51321' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/comic-page.2abc2ea0.map