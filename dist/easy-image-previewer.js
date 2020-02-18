(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EasyImagePreviewer"] = factory();
	else
		root["EasyImagePreviewer"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/style/style.scss
var style = __webpack_require__(0);

// CONCATENATED MODULE: ./src/util/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * check if target is function
 * @param {Any} target 
 */
var isFunction = function isFunction(target) {
  return typeof target === 'function';
};
/**
 * check if target is number
 * @param {Any} target 
 */


var isNumber = function isNumber(target) {
  return typeof target === 'number' && target !== NaN;
};
/**
 * check if target is object
 * @param {object} target 
 */


var isObject = function isObject(target) {
  return _typeof(target) === 'object' && target !== null;
};

var forEach = function forEach(target, cb, startIndex) {
  if (target && isFunction(cb)) {
    if (Array.isArray(target) || target.length) {
      var len = target.length;
      startIndex = startIndex || 0;

      for (var i = startIndex; i < len; i++) {
        if (cb.call(target, target[i], i, target) === false) {
          break;
        }
      }
    } else if (isObject(target)) {
      Object.keys(target).forEach(function (k) {
        cb.call(target, k, target[k], target);
      });
    }
  }
};

var util_assign = Object.assign || function () {
  var result = arguments[0];
  forEach(arguments, function (object) {
    forEach(object, function (key, value) {
      result[key] = value;
    });
  }, 1);
  return result;
};

var bind = function bind(target, context) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    return target.apply(context, args);
  };
};

/* harmony default export */ var util = ({
  isNumber: isNumber,
  isFunction: isFunction,
  forEach: forEach,
  assign: util_assign,
  bind: bind
});
// CONCATENATED MODULE: ./src/core/defaults.js
var noop = function noop() {};

var genLabel = function genLabel(data) {
  return data.name;
};

/* harmony default export */ var defaults = ({
  mount: document.body,
  label: genLabel,
  showLabel: false,
  showToolBar: true,
  showToolBarAnimation: false,
  lockScroll: true,
  onShow: noop,
  onChange: noop,
  onClose: noop
});
// CONCATENATED MODULE: ./src/util/dom.js

/**
 * get element
 * @param {string} selector 
 */

var dom = function dom(selector) {
  return selector.indexOf('#') == 0 ? document.getElementById(selector) : document.querySelector(selector);
};

/* harmony default export */ var util_dom = (dom);
/**
 * add className to element
 * @param {element} el
 * @param {string} value 
 */

var dom_addClass = function addClass(el, value) {
  if (el.length) {
    util.forEach(el, function (element) {
      addClass(element, value);
      return;
    });
  }

  if (el.classList) {
    el.classList.add(value);
    return;
  }

  var className = el.className.trim();

  if (!className) {
    el.className = value;
  } else if (className.indexOf(value) == -1) {
    el.className = className + ' ' + value;
  }
};
// CONCATENATED MODULE: ./src/util/constants.js
var NAMESPACE = 'easy-previewer';
var CLASS_NAME_CORNER = "".concat(NAMESPACE, "__corner");
var CLASS_NAME_INDICATOR = "".concat(NAMESPACE, "__indicator");
var CLASS_NAME_BOARD = "".concat(NAMESPACE, "__board");
var CLASS_NAME_FOOTER = "".concat(NAMESPACE, "__footer");
var TEMPLATE = "\n  <div class=\"".concat(CLASS_NAME_CORNER, "\"></div>\n  <div class=\"").concat(CLASS_NAME_CORNER, "\"></div>\n  <div class=\"").concat(CLASS_NAME_BOARD, "\"></div>\n  <div class=\"").concat(CLASS_NAME_FOOTER, "\"></div>\n");
// CONCATENATED MODULE: ./src/core/Previewer.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var id = 1;

var Previewer_Previewer =
/*#__PURE__*/
function () {
  function Previewer(config) {
    _classCallCheck(this, Previewer);

    this.id = "__".concat(NAMESPACE).concat(id++);
    this.mounted = false;
    this.showing = false;
    this.setting = util.assign(defaults, config || {});
  }

  _createClass(Previewer, [{
    key: "_init",
    value: function _init() {
      var previewer = document.createElement('div');
      previewer.id = this.id;
      previewer.innerHTML = TEMPLATE;
      dom_addClass(previewer, "".concat(NAMESPACE));
      dom_addClass(previewer, "".concat(NAMESPACE, "--visible"));
      var settingMount = this.setting.mount;

      if (typeof settingMount === 'string') {
        this.setting.mount = util_dom(settingMount);
      }

      this.setting.mount.appendChild(previewer);
    }
  }, {
    key: "show",
    value: function show(option) {
      if (!this.mounted || !util_dom("#".concat(this.id))) {
        this._init();
      }

      if (this.showing) {
        return;
      }

      return this;
    }
  }, {
    key: "close",
    value: function close() {}
  }, {
    key: "onShow",
    value: function onShow() {
      return this;
    }
  }, {
    key: "onChange",
    value: function onChange() {
      return this;
    }
  }, {
    key: "onClose",
    value: function onClose() {
      return this;
    }
  }]);

  return Previewer;
}();

/* harmony default export */ var core_Previewer = (Previewer_Previewer);
// CONCATENATED MODULE: ./src/previewer.js



function createInstance(config) {
  var context = new core_Previewer(config);
  var instance = util.bind(core_Previewer.prototype.show, context);
  return instance;
}

var previewer_previewer = createInstance({});
previewer_previewer.create = createInstance;
/* harmony default export */ var src_previewer = (previewer_previewer);
// CONCATENATED MODULE: ./index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "default", function() { return src_previewer; });



/***/ })
/******/ ]);
});