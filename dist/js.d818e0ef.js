// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/CardBuilder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//Make object containing all the information
//Go over object destructuring
//builder pattern
var CardBuilder = function CardBuilder() {
  var name = "";
  var profession = "";
  var imagePath = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd2%2FQuestion_mark.svg%2F1920px-Question_mark.svg.png&f=1&nofb=1";
  var phoneNumber = "";
  var roomNumber = "";
  var webUrl = "";
  var email = "";
  var description = "";
  var readMoreLink = "";
  return {
    withName: function withName(value) {
      name = value;
      return this;
    },
    withProfession: function withProfession(value) {
      profession = value;
      return this;
    },
    withImagePath: function withImagePath(value) {
      imagePath = value;
      return this;
    },
    withPhoneNumber: function withPhoneNumber(value) {
      phoneNumber = value;
      return this;
    },
    withRoomNumber: function withRoomNumber(value) {
      roomNumber = value;
      return this;
    },
    withWebUrl: function withWebUrl(value) {
      webUrl = value;
      return this;
    },
    withEmail: function withEmail(value) {
      email = value;
      return this;
    },
    withDescription: function withDescription(value) {
      description = value;
      return this;
    },
    withReadMoreLink: function withReadMoreLink(value) {
      readMoreLink = value;
      return this;
    },
    build: function build() {
      return {
        name: name,
        profession: profession,
        imagePath: imagePath,
        phoneNumber: phoneNumber,
        roomNumber: roomNumber,
        webUrl: webUrl,
        email: email,
        description: description,
        readMoreLink: readMoreLink
      };
    }
  };
};

var _default = CardBuilder;
exports.default = _default;
},{}],"src/js/CardArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardArray = exports.userCardMaker = void 0;

var _CardBuilder = _interopRequireDefault(require("./CardBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDefined = function isDefined(string) {
  return string != null || string != undefined;
};

var cardArray = []; //for each row create object and push it into the array

exports.cardArray = cardArray;

var userCardMaker = function userCardMaker(_ref) {
  var name = _ref.name,
      profession = _ref.profession,
      imagePath = _ref.imagePath,
      phoneNumber = _ref.phoneNumber,
      roomNumber = _ref.roomNumber,
      webUrl = _ref.webUrl,
      email = _ref.email,
      description = _ref.description,
      readMoreLink = _ref.readMoreLink;
  var card = (0, _CardBuilder.default)();
  if (isDefined(name)) card.withName(name);
  if (isDefined(profession)) card.withProfession(profession);
  if (isDefined(imagePath)) card.withImagePath(imagePath);
  if (isDefined(phoneNumber)) card.withPhoneNumber(phoneNumber);
  if (isDefined(roomNumber)) card.withRoomNumber(roomNumber);
  if (isDefined(webUrl)) card.withWebUrl(webUrl);
  if (isDefined(email)) card.withEmail(email);
  if (isDefined(description)) card.withDescription(description);
  if (isDefined(readMoreLink)) card.withReadMoreLink(readMoreLink);
  cardArray.push(card.build());
};

exports.userCardMaker = userCardMaker;
},{"./CardBuilder":"src/js/CardBuilder.js"}],"src/js/LinkBuilder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var LinkBuilder = function LinkBuilder() {
  var linkHtml = "";
  var linkContentHtml = "";
  var linkName = "";
  return {
    withLinkName: function withLinkName(value) {
      linkHtml = "<button id=".concat(value, "><div id=").concat(value, "><p>").concat(value, "</p></div></button>");
      linkName = value;
      return this;
    },
    withLinkContent: function withLinkContent(value) {
      linkContentHtml = "<div id=\"".concat(linkName, "\" class=\"section\">").concat(value, "<p></p></div>");
      return this;
    },
    build: function build() {
      return {
        linkHtml: linkHtml,
        linkContentHtml: linkContentHtml,
        linkName: linkName
      };
    }
  };
};

var _default = LinkBuilder; //If user 

exports.default = _default;
},{}],"src/js/LinkArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkArray = exports.linkMaker = void 0;

var _LinkBuilder = _interopRequireDefault(require("./LinkBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDefined = function isDefined(string) {
  return string != null || string != undefined;
};

var linkArray = []; //for each row create object and push it into the array

exports.linkArray = linkArray;

var linkMaker = function linkMaker(_ref) {
  var linkName = _ref.linkName,
      linkContent = _ref.linkContent;
  var link = (0, _LinkBuilder.default)();
  if (isDefined(linkName)) link.withLinkName(linkName);
  if (isDefined(linkContent)) link.withLinkContent(linkContent);
  linkArray.push(link.build());
};

exports.linkMaker = linkMaker;
},{"./LinkBuilder":"src/js/LinkBuilder.js"}],"src/js/ViewModel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var createViewModel = function createViewModel(cardObject) {
  var element = "\n  <div class=\"card\">\n    <div class=\"card-inner\">\n        <div class=\"card-front\" style=\"background-image:linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.81)), url('".concat(cardObject.imagePath, "')\" mix-blend-mode:\"multiply\">\n          <div class=\"caption\">\n            <p id=\"name\">").concat(cardObject.name, "</p>\n            <p id=\"position\">").concat(cardObject.profession, "</p>\n          </div>\n        </div>\n  \n        <div class=\"card-back\">\n          ").concat(removeIfEmpty(cardObject.phoneNumber, "<div class=\"info\"><span>Phone:</span> <br>".concat(cardObject.phoneNumber, "</div>")), "\n          ").concat(removeIfEmpty(cardObject.roomNumber, "<div class=\"info\"><span>Room:</span> <br>".concat(cardObject.roomNumber, "</div>")), "\n          ").concat(removeIfEmpty(cardObject.webUrl, "<div class=\"info\"><span>Website (URL):</span> ".concat(cardObject.webUrl, "</div>")), "\n          ").concat(removeIfEmpty(cardObject.email, "<div class=\"info\"><span>Email:</span> ".concat(cardObject.email, "</div>")), "\n          ").concat(removeIfEmpty(cardObject.description, " <div class=\"info\" id=\"skills\">".concat(cardObject.description, "</div>")), "\n          ").concat(removeIfEmpty(cardObject.readMoreLink, "  <div><a src=\"\"></a><button type=\"button\" onclick=\"location.href = 'http://".concat(cardObject.readMoreLink, "';\">Read More</a></button></div>")), "\n\n          \n          \n         \n         \n        </div>\n  \n    </div>\n   </div>\n   ");
  return element;
};

var isEmpty = function isEmpty(string) {
  return string.trim().length == 0;
};

var removeIfEmpty = function removeIfEmpty(content, html) {
  return isEmpty(content) ? "" : html;
};

var _default = createViewModel;
exports.default = _default;
},{}],"src/js/index.js":[function(require,module,exports) {
"use strict";

var _CardBuilder = _interopRequireDefault(require("./CardBuilder"));

var _CardArray = require("./CardArray");

var _LinkArray = require("./LinkArray");

var _ViewModel = _interopRequireDefault(require("./ViewModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//----------------------------------------omni dependecies
//OMNIUPDATE VARIABLES
// newArray.forEach(s => {
//   userCardMaker({
//   imagePath:s[0].trim(),
//   name:s[1],
//   profession:s[2],
//   phoneNumber:s[3],
//   roomNumber:s[4],
//   webUrl:s[5],
//   email:s[6],
//   description:s[7],
//   readMoreLink:s[8]
//   })
//    })
// link array = omniUpdate var name
// linkArray.forEach
// (s => {
//   linkMaker({
//     linkName:s[0],
//     linkContent:s[1]
//   })
// })
//${aboutView}
//${contactView}
//----------------------------------------omni dependecies
(0, _CardArray.userCardMaker)({
  name: "Stephen Curry",
  profession: "NBA Player",
  email: "jack@yahoo.com",
  roomNumber: "224",
  phoneNumber: "(718)-435-45656",
  readMoreLink: "google.com",
  imagePath: "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MTg4NzMwNzU3MDk3MzQ1/stephen-curry-unlikely-return-injury.jpg"
});
(0, _CardArray.userCardMaker)({
  name: "Lil Tjay",
  profession: "Rapper",
  readMoreLink: "google.com",
  roomNumber: "254",
  phoneNumber: "(718)-435-45656",
  imagePath: "https://memberdata.s3.amazonaws.com/hi/hitsdd/photos/hitsdd_photo_gal__photo_1839800802.jpg"
});
(0, _CardArray.userCardMaker)({
  name: "Lil Tecca",
  profession: "Rapper",
  readMoreLink: "google.com",
  webUrl: "jack.org",
  imagePath: "https://static01.nyt.com/images/2019/10/06/arts/music/doas-tecca-promo/GettyImages-1165612474-square640.jpg"
});
(0, _CardArray.userCardMaker)({
  name: "Lebron James",
  profession: "NBA Player",
  email: "jack@yahoo.com",
  roomNumber: "224",
  readMoreLink: "google.com",
  imagePath: "https://nba.nbcsports.com/wp-content/uploads/sites/12/2020/04/GettyImages-1206647160-e1586390067316.jpg?w=610&h=343&crop=1"
});
(0, _CardArray.userCardMaker)({
  name: "Ninja",
  profession: "Streamer",
  readMoreLink: "google.com",
  imagePath: "https://api.time.com/wp-content/uploads/2019/04/tyler-blevins-ninja-time-100-2019-002-1.jpg?quality=85&zoom=2"
});
(0, _CardArray.userCardMaker)({
  name: "Shiggy",
  profession: "Comedian",
  readMoreLink: "google.com",
  imagePath: "https://static.vibe.com/files/2018/08/GettyImages-1001042940-1533829844-compressed.jpg"
});
(0, _CardArray.userCardMaker)({
  name: "Donald Trump",
  readMoreLink: "google.com",
  profession: "US President"
});
(0, _CardArray.userCardMaker)({
  name: "Lamelo Ball",
  readMoreLink: "google.com",
  profession: "Basketball Player"
});
var staffView = "";

_CardArray.cardArray.map(function (item) {
  return (0, _ViewModel.default)(item);
}).forEach(function (view) {
  staffView += view;
});

(0, _LinkArray.linkMaker)({
  linkName: "Staff",
  linkContent: "<div id=\"card-container\">\n    ".concat(staffView, "\n    </div>")
});
(0, _LinkArray.linkMaker)({
  linkName: "about",
  linkContent: "Lol im here in about"
});

var routes = _LinkArray.linkArray.reduce(function (acc, post) {
  var linkName = post.linkName,
      linkHtml = post.linkHtml,
      linkContentHtml = post.linkContentHtml;
  return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, linkName, acc[linkName] = linkContentHtml));
}, {
  staff: "<div id =\"card-container\">".concat(staffView, "</div>")
});

console.log(routes);
var links = "";
var header = document.getElementById("header");

_LinkArray.linkArray.forEach(function (item) {
  if (item.link != "") links += item.linkHtml;
});

header.innerHTML = links;

var setActiveLink = function setActiveLink(id) {
  var links = document.querySelectorAll("#header div");

  for (var index = 0; index < links.length; index++) {
    var element = links[index];
    var routeName = element.getAttribute("id");

    if (routeName == id) {
      element.setAttribute("class", "active");
    } else {
      element.removeAttribute("class");
    }
  }
};

var contentDiv = document.getElementById("content");
var state = {
  initialState: routes.staff
};

function render(id) {
  contentDiv.innerHTML = state.initialState;
  setActiveLink(id);
} //Init


(function initialize() {
  window.history.replaceState(state, null, "");
  render(state);
  setActiveLink("Staff");
})();

var addClickListener = function addClickListener(e, id) {
  return e.addEventListener("click", function () {
    state.initialState = routes[id];
    console.log(routes[id]);
    window.history.pushState(state, null, "");
    render(id);
  });
};

var linkElements = _LinkArray.linkArray.map(function (s) {
  return document.getElementById(s.linkName);
});

linkElements.forEach(function (s) {
  addClickListener(s, s.id);
  console.log(s.id);
});

window.onpopstate = function (event) {
  if (event.state) {
    console.log(event.state.initialState);
    state = event.state;
    setActiveLink(event.state.id);
  }

  render(state);
  setActiveLink(event.state.id);
};
},{"./CardBuilder":"src/js/CardBuilder.js","./CardArray":"src/js/CardArray.js","./LinkArray":"src/js/LinkArray.js","./ViewModel":"src/js/ViewModel.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "39321" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/index.js"], null)
//# sourceMappingURL=/js.d818e0ef.js.map