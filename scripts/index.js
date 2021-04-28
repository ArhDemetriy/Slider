(self["webpackChunk"] = self["webpackChunk"] || []).push([["index"],{

/***/ "./components/complicated/demo/demo.js":
/*!*********************************************!*\
  !*** ./components/complicated/demo/demo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _demo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo.scss */ "./components/complicated/demo/demo.scss");


/***/ }),

/***/ "./components/complicated/index/index.js":
/*!***********************************************!*\
  !*** ./components/complicated/index/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./components/complicated/index/index.scss");


/***/ }),

/***/ "./components/simple/slider/slider.js":
/*!********************************************!*\
  !*** ./components/simple/slider/slider.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.scss */ "./components/simple/slider/slider.scss");


/***/ }),

/***/ "./layouts/base.js":
/*!*************************!*\
  !*** ./layouts/base.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @assets/fonts/fonts.css */ "./assets/fonts/fonts.css");


/***/ }),

/***/ "./pages/index/imports.js":
/*!********************************!*\
  !*** ./pages/index/imports.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Development_Projects_slider_src_components_complicated_index_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/complicated/index/index.js */ "./components/complicated/index/index.js");
/* harmony import */ var C_Development_Projects_slider_src_components_complicated_demo_demo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/complicated/demo/demo.js */ "./components/complicated/demo/demo.js");
/* harmony import */ var C_Development_Projects_slider_src_components_simple_slider_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/simple/slider/slider.js */ "./components/simple/slider/slider.js");




/***/ }),

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @layouts/base.js */ "./layouts/base.js");
/* harmony import */ var _imports_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imports.js */ "./pages/index/imports.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./pages/index/index.scss");
/* harmony import */ var _index_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.ts */ "./pages/index/index.ts");

 // import './imports.ts'




/***/ }),

/***/ "./components/complicated/demo/demo.ts":
/*!*********************************************!*\
  !*** ./components/complicated/demo/demo.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Demo": () => (/* binding */ Demo)
/* harmony export */ });
/* harmony import */ var simp_slider_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simp/slider/slider */ "./components/simple/slider/slider.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Demo = /*#__PURE__*/function () {
  function Demo(mainElement) {
    var mainClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'demo';

    _classCallCheck(this, Demo);

    _defineProperty(this, "mainElement", void 0);

    _defineProperty(this, "controls", void 0);

    _defineProperty(this, "slider", void 0);

    _defineProperty(this, "destructible", []);

    _defineProperty(this, "bindedEventListener", this.eventListener.bind(this));

    this.mainElement = mainElement;
    this.controls = mainElement.querySelector(".".concat(mainClass, "__controls"));
    this.slider = mainElement.querySelector(".".concat(mainClass, "__slider"));
    this.initComponents();
  }

  _createClass(Demo, [{
    key: "initComponents",
    value: function initComponents() {
      this.destructible.push(new simp_slider_slider__WEBPACK_IMPORTED_MODULE_0__.Slider(this.slider));
    }
  }, {
    key: "eventListener",
    value: function eventListener(event) {}
  }, {
    key: "addEventsListeners",
    value: function addEventsListeners() {}
  }, {
    key: "destroy",
    value: function destroy() {
      this.destructible.forEach(function (elem) {
        return elem.destroy();
      });
    }
  }]);

  return Demo;
}();



/***/ }),

/***/ "./components/complicated/index/DemosManager.ts":
/*!******************************************************!*\
  !*** ./components/complicated/index/DemosManager.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemosManager": () => (/* binding */ DemosManager)
/* harmony export */ });
/* harmony import */ var comp_demo_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! comp/demo/demo */ "./components/complicated/demo/demo.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var DemosManager = /*#__PURE__*/function () {
  function DemosManager(mainElement) {
    var mainClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'index';

    _classCallCheck(this, DemosManager);

    _defineProperty(this, "mainElement", void 0);

    _defineProperty(this, "addButton", void 0);

    _defineProperty(this, "template", void 0);

    _defineProperty(this, "listDemos", void 0);

    _defineProperty(this, "destructible", []);

    _defineProperty(this, "bindedAddNewDemo", this.addNewDemo.bind(this));

    this.mainElement = mainElement;
    this.addButton = mainElement.querySelector(".".concat(mainClass, "__button--add_template"));
    this.template = mainElement.querySelector(".".concat(mainClass, "__template"));
    this.listDemos = mainElement.querySelector(".".concat(mainClass, "__list_demo"));
    this.addEventsListeners();
  }

  _createClass(DemosManager, [{
    key: "addNewDemo",
    value: function addNewDemo(event) {
      var clone = document.importNode(this.template.content, true);
      this.destructible.push(new comp_demo_demo__WEBPACK_IMPORTED_MODULE_0__.Demo(clone));
      this.listDemos.appendChild(clone);
    }
  }, {
    key: "addEventsListeners",
    value: function addEventsListeners() {
      this.addButton.addEventListener('click', this.bindedAddNewDemo);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.addButton.removeEventListener('click', this.bindedAddNewDemo);
      this.destructible.forEach(function (elem) {
        return elem.destroy();
      });
    }
  }]);

  return DemosManager;
}();



/***/ }),

/***/ "./components/complicated/index/index.ts":
/*!***********************************************!*\
  !*** ./components/complicated/index/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "indexes": () => (/* binding */ indexes)
/* harmony export */ });
/* harmony import */ var comp_index_DemosManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! comp/index/DemosManager */ "./components/complicated/index/DemosManager.ts");

var classDemosManager = 'index';
var indexes = Array.from(document.querySelectorAll(".".concat(classDemosManager))).map(function (element) {
  return new comp_index_DemosManager__WEBPACK_IMPORTED_MODULE_0__.DemosManager(element, classDemosManager);
});


/***/ }),

/***/ "./components/simple/slider/slider.ts":
/*!********************************************!*\
  !*** ./components/simple/slider/slider.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slider": () => (/* binding */ Slider)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Slider = /*#__PURE__*/function () {
  function Slider(mainElement) {
    var mainClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'slider';

    _classCallCheck(this, Slider);

    _defineProperty(this, "mainElement", void 0);

    _defineProperty(this, "destructible", []);

    _defineProperty(this, "iterator", 0);

    _defineProperty(this, "bindedEventListener", this.eventListener.bind(this));

    this.mainElement = mainElement;
    this.initComponents();
    this.addEventsListeners();
  }

  _createClass(Slider, [{
    key: "initComponents",
    value: function initComponents() {}
  }, {
    key: "eventListener",
    value: function eventListener(event) {
      alert(this.iterator++);
    }
  }, {
    key: "addEventsListeners",
    value: function addEventsListeners() {
      this.mainElement.addEventListener('click', this.bindedEventListener);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.mainElement.removeEventListener('click', this.bindedEventListener);
      this.destructible.forEach(function (elem) {
        return elem.destroy();
      });
    }
  }]);

  return Slider;
}();



/***/ }),

/***/ "./pages/index/index.ts":
/*!******************************!*\
  !*** ./pages/index/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var comp_index_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! comp/index/index */ "./components/complicated/index/index.ts");

var actives = [];
actives.push(comp_index_index__WEBPACK_IMPORTED_MODULE_0__.indexes);

/***/ }),

/***/ "./components/complicated/demo/demo.scss":
/*!***********************************************!*\
  !*** ./components/complicated/demo/demo.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/complicated/index/index.scss":
/*!*************************************************!*\
  !*** ./components/complicated/index/index.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/simple/slider/slider.scss":
/*!**********************************************!*\
  !*** ./components/simple/slider/slider.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./pages/index/index.scss":
/*!********************************!*\
  !*** ./pages/index/index.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/fonts/fonts.css":
/*!********************************!*\
  !*** ./assets/fonts/fonts.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["npm.core-js","npm.babel","npm.regenerator-runtime"], () => (__webpack_exec__("../node_modules/@babel/polyfill/lib/index.js"), __webpack_exec__("./pages/index/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map