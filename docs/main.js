/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Typography */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --primaryColor: #cf000f;\n  --text-color: #fff;\n  --secondaryColor: #161616;\n}\n\nbody {\n  background-color: var(--secondaryColor);\n}\n\nhtml {\n  font-family: 'Quicksand', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.text-center {\n  text-align: center;\n}\n\n#footer {\n  width: 100%;\n  height: 75px;\n  background-color: var(--secondaryColor);\n  border: 1px solid var(--primaryColor);\n}\n\n#footer p {\n  color: var(--text-color);\n}\n\n.main-footer-container {\n  width: 80%;\n  margin: 0 auto;\n  height: 100%;\n  align-items: center;\n  padding-left: 2rem;\n}\n\nli {\n  list-style-type: none;\n}\n\nbutton,\ninput {\n  outline: none;\n  border: none;\n}\n\na {\n  text-decoration: none;\n}\n\nheader {\n  width: 100%;\n  height: 75px;\n  background-color: var(--secondaryColor);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  box-shadow: 3px 3px 3px var(--primaryColor);\n}\n\nheader .header-main-container {\n  width: 80%;\n  height: 100%;\n  margin: 0 auto;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo {\n  width: 200px;\n  margin-top: 2px;\n}\n\n.logo img {\n  width: 100%;\n  max-width: 100%;\n}\n\nnav ul li {\n  margin-right: 20px;\n  position: relative;\n}\n\nnav ul li a {\n  font-size: 1.2rem;\n  color: var(--text-color);\n  font-weight: 400;\n}\n\nnav ul li::after {\n  position: absolute;\n  content: ' ';\n  width: 100%;\n  height: 2px;\n  display: none;\n  background-color: var(--primaryColor);\n  margin-top: 3px;\n}\n\nnav ul li:hover::after {\n  display: block;\n}\n\n#main-section {\n  width: 100%;\n}\n\n.main-wrapper {\n  padding: 10rem 0;\n  width: 100%;\n}\n\n.items-list {\n  width: 100%;\n  flex-direction: column;\n}\n\n.item {\n  width: 80%;\n  margin: 0 auto;\n  padding: 1rem;\n  max-width: 400px;\n}\n\n.item .img-wrapper {\n  width: 100%;\n  text-align: center;\n  border-top-left-radius: 1.5rem;\n  border-top-right-radius: 1.5rem;\n  overflow: hidden;\n}\n\n.image img {\n  width: 100%;\n  height: 400px;\n  transform: skewX(45deg);\n  display: none;\n}\n.image img:hover {\n  transform: translateY(-3rem);\n}\n.image img::before {\n    display: block;\n    position: absolute;\n    content: \"\";\n    top: -0.9rem;\n    left: 0.1rem;\n    width: 100%;\n    height: 1rem;\n    background-color: darken(var(--primaryColor), 60);\n    transform-origin: bottom;\n    transform: skewX(45deg);\n    transition: 0.5s;\n    border-radius: 0.2rem;\n}\n.image img::after {\n  display: block;\n  position: absolute;\n  content: \"\";\n  top: -0.9rem;\n  left: -0.8rem;\n  width: 1rem;\n  height: 63.5%;\n  background-color: darken(var(--primaryColor), 60);\n  transform-origin: left;\n  transform: skewY(45deg);\n  transition: 0.5s;\n  border-radius: 0.2rem;\n  border-bottom: 20rem solid darken(var(--primaryColor), 60);\n}\n\n.item .img-wrapper img {\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n}\n\n.like-content {\n  width: 100%;\n  justify-content: space-between;\n  margin-top: 1rem;\n}\n\n.like-content .title {\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: var(--text-color);\n}\n\n.like {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--text-color);\n}\n\n.fas {\n  cursor: pointer;\n}\n\n.comment,\n.reserv {\n  width: 100%;\n  margin-top: 1rem;\n}\n\n.btn {\n  padding: 1rem 0;\n  width: 100%;\n  font-size: 1.1rem;\n  color: var(--text-color);\n  background-color: #cf000f;\n  background-image: linear-gradient(315deg, #d19592 0%, #cf000f 74%);\n  font-weight: 400;\n  position: relative;\n  z-index: 1;\n  opacity: 0.99;\n  cursor: pointer;\n}\n\n.btn::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  background-color: #d19592;\n  background-image: linear-gradient(315deg, #d19592 0%, #c81f70 74%);\n  transition: transform 700ms;\n  transform-origin: left;\n  transform: scaleX(0);\n  z-index: -1;\n}\n\n.btn:hover::before {\n  transform: scaleX(1);\n}\n\n@media screen and (min-width: 920px) {\n  .items-list {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n  }\n\n  .comment,\n  .reserv,\n  .like-content {\n    width: 90%;\n    margin: 1rem auto;\n  }\n}\n\n/*\n          POPUP\n*/\n\n.popup {\n  position: fixed;\n  color: var(--text-color);\n  top: 77px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 3123;\n  background-color: #2b2b31c1;\n  padding: 0 20%;\n  overflow-y: scroll;\n  padding-bottom: 100px;\n}\n\n.popup::-webkit-scrollbar {\n  width: 15px;\n}\n\n.popup::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n\n.popup::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px var(--primaryColor);\n}\n\n.popup::-webkit-scrollbar-thumb:hover {\n  -webkit-box-shadow: inset 0 0 6px #bf1a38;\n}\n\n.char-info-ul {\n  flex-wrap: wrap;\n}\n\n.char-info-ul > li {\n  width: 50%;\n  padding-bottom: 10px;\n}\n\n.char-name {\n  text-align: center;\n  padding: 20px 0;\n}\n\n.char-info-ul > li:nth-child(even) {\n  text-align: right;\n}\n\n.image {\n  flex-basis: 80%;\n}\n\n.close-btn {\n  flex-basis: 20%;\n  text-align: center;\n}\n\n.material-icons {\n  font-size: 60px;\n  cursor: pointer;\n}\n\n/*\n    Add a comment section\n*/\n\n.name-inp,\n.comment-inp {\n  padding: 10px;\n  border: none;\n  outline: none;\n  margin-bottom: 10px;\n}\n\n.add-comment-btn {\n  width: 20%;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Typography */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --primaryColor: #cf000f;\n  --text-color: #fff;\n  --secondaryColor: #161616;\n}\n\nbody {\n  background-color: var(--secondaryColor);\n}\n\nhtml {\n  font-family: 'Quicksand', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.text-center {\n  text-align: center;\n}\n\n#footer {\n  width: 100%;\n  height: 75px;\n  background-color: var(--secondaryColor);\n  border: 1px solid var(--primaryColor);\n}\n\n#footer p {\n  color: var(--text-color);\n}\n\n.main-footer-container {\n  width: 80%;\n  margin: 0 auto;\n  height: 100%;\n  align-items: center;\n  padding-left: 2rem;\n}\n\nli {\n  list-style-type: none;\n}\n\nbutton,\ninput {\n  outline: none;\n  border: none;\n}\n\na {\n  text-decoration: none;\n}\n\nheader {\n  width: 100%;\n  height: 75px;\n  background-color: var(--secondaryColor);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  box-shadow: 3px 3px 3px var(--primaryColor);\n}\n\nheader .header-main-container {\n  width: 80%;\n  height: 100%;\n  margin: 0 auto;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo {\n  width: 200px;\n  margin-top: 2px;\n}\n\n.logo img {\n  width: 100%;\n  max-width: 100%;\n}\n\nnav ul li {\n  margin-right: 20px;\n  position: relative;\n}\n\nnav ul li a {\n  font-size: 1.2rem;\n  color: var(--text-color);\n  font-weight: 400;\n}\n\nnav ul li::after {\n  position: absolute;\n  content: ' ';\n  width: 100%;\n  height: 2px;\n  display: none;\n  background-color: var(--primaryColor);\n  margin-top: 3px;\n}\n\nnav ul li:hover::after {\n  display: block;\n}\n\n#main-section {\n  width: 100%;\n}\n\n.main-wrapper {\n  padding: 10rem 0;\n  width: 100%;\n}\n\n.items-list {\n  width: 100%;\n  flex-direction: column;\n}\n\n.item {\n  width: 80%;\n  margin: 0 auto;\n  padding: 1rem;\n  max-width: 400px;\n}\n\n.item .img-wrapper {\n  width: 100%;\n  text-align: center;\n  border-top-left-radius: 1.5rem;\n  border-top-right-radius: 1.5rem;\n  overflow: hidden;\n}\n\n.image img {\n  width: 100%;\n  height: 400px;\n  transform: skewX(45deg);\n  display: none;\n}\n.image img:hover {\n  transform: translateY(-3rem);\n}\n.image img::before {\n    display: block;\n    position: absolute;\n    content: \"\";\n    top: -0.9rem;\n    left: 0.1rem;\n    width: 100%;\n    height: 1rem;\n    background-color: darken(var(--primaryColor), 60);\n    transform-origin: bottom;\n    transform: skewX(45deg);\n    transition: 0.5s;\n    border-radius: 0.2rem;\n}\n.image img::after {\n  display: block;\n  position: absolute;\n  content: \"\";\n  top: -0.9rem;\n  left: -0.8rem;\n  width: 1rem;\n  height: 63.5%;\n  background-color: darken(var(--primaryColor), 60);\n  transform-origin: left;\n  transform: skewY(45deg);\n  transition: 0.5s;\n  border-radius: 0.2rem;\n  border-bottom: 20rem solid darken(var(--primaryColor), 60);\n}\n\n.item .img-wrapper img {\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n}\n\n.like-content {\n  width: 100%;\n  justify-content: space-between;\n  margin-top: 1rem;\n}\n\n.like-content .title {\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: var(--text-color);\n}\n\n.like {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--text-color);\n}\n\n.fas {\n  cursor: pointer;\n}\n\n.comment,\n.reserv {\n  width: 100%;\n  margin-top: 1rem;\n}\n\n.btn {\n  padding: 1rem 0;\n  width: 100%;\n  font-size: 1.1rem;\n  color: var(--text-color);\n  background-color: #cf000f;\n  background-image: linear-gradient(315deg, #d19592 0%, #cf000f 74%);\n  font-weight: 400;\n  position: relative;\n  z-index: 1;\n  opacity: 0.99;\n  cursor: pointer;\n}\n\n.btn::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  background-color: #d19592;\n  background-image: linear-gradient(315deg, #d19592 0%, #c81f70 74%);\n  transition: transform 700ms;\n  transform-origin: left;\n  transform: scaleX(0);\n  z-index: -1;\n}\n\n.btn:hover::before {\n  transform: scaleX(1);\n}\n\n@media screen and (min-width: 920px) {\n  .items-list {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n  }\n\n  .comment,\n  .reserv,\n  .like-content {\n    width: 90%;\n    margin: 1rem auto;\n  }\n}\n\n/*\n          POPUP\n*/\n\n.popup {\n  position: fixed;\n  color: var(--text-color);\n  top: 77px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 3123;\n  background-color: #2b2b31c1;\n  padding: 0 20%;\n  overflow-y: scroll;\n  padding-bottom: 100px;\n}\n\n.popup::-webkit-scrollbar {\n  width: 15px;\n}\n\n.popup::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n\n.popup::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px var(--primaryColor);\n}\n\n.popup::-webkit-scrollbar-thumb:hover {\n  -webkit-box-shadow: inset 0 0 6px #bf1a38;\n}\n\n.char-info-ul {\n  flex-wrap: wrap;\n}\n\n.char-info-ul > li {\n  width: 50%;\n  padding-bottom: 10px;\n}\n\n.char-name {\n  text-align: center;\n  padding: 20px 0;\n}\n\n.char-info-ul > li:nth-child(even) {\n  text-align: right;\n}\n\n.image {\n  flex-basis: 80%;\n}\n\n.close-btn {\n  flex-basis: 20%;\n  text-align: center;\n}\n\n.material-icons {\n  font-size: 60px;\n  cursor: pointer;\n}\n\n/*\n    Add a comment section\n*/\n\n.name-inp,\n.comment-inp {\n  padding: 10px;\n  border: none;\n  outline: none;\n  margin-bottom: 10px;\n}\n\n.add-comment-btn {\n  width: 20%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "post": () => (/* binding */ post)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */

const get = async (url, endPoint) => {
  const result = await fetch(`${url}${endPoint}`);
  return result.json();
};

const post = async (url, endPoint, body) => {
  const result = await fetch(`${url}${endPoint}`, {
    method: 'POST',
    body,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return result;
};

/***/ }),

/***/ "./src/controllers.js":
/*!****************************!*\
  !*** ./src/controllers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCharacters": () => (/* binding */ getCharacters),
/* harmony export */   "getComment": () => (/* binding */ getComment),
/* harmony export */   "postLike": () => (/* binding */ postLike),
/* harmony export */   "postComment": () => (/* binding */ postComment),
/* harmony export */   "getLikes": () => (/* binding */ getLikes)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* eslint-disable import/prefer-default-export */


const rickMorttUrl = 'https://rickandmortyapi.com/api';
const involUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId = 'TS0oHxL44n3MZxaNn5A7';

const getCharacters = async () => {
  const result = await _api__WEBPACK_IMPORTED_MODULE_0__.get(rickMorttUrl, '/character/[1,2,3,4,5,6,7,8,9,10,11,12]');
  return result;
};

const getComment = async (id) => {
  const result = await _api__WEBPACK_IMPORTED_MODULE_0__.get(involUrl, `apps/${appId}/comments?item_id=${id}`);
  return result;
};

const postLike = async (body) => {
  const result = await _api__WEBPACK_IMPORTED_MODULE_0__.post(involUrl, `apps/${appId}/likes`, JSON.stringify(body));
  return result;
};

const postComment = async (body) => {
  const result = await _api__WEBPACK_IMPORTED_MODULE_0__.post(involUrl, `apps/${appId}/comments`, JSON.stringify(body));
  return result;
};

const getLikes = async () => {
  const result = await _api__WEBPACK_IMPORTED_MODULE_0__.get(involUrl, `apps/${appId}/likes/`);
  return result;
};

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopup": () => (/* binding */ createPopup)
/* harmony export */ });
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers */ "./src/controllers.js");
/* eslint-disable import/prefer-default-export */


const createElem = (tag, cl) => {
  const elem = document.createElement(tag);
  elem.classList.add(...cl);
  return elem;
};

const wrapper = createElem('section', ['popup', 'flex', 'flex-col']); // popup wrapper
let comments = []; // comments array

const updateCommentCounts = () => {
  wrapper.querySelector('.comments-count').innerHTML = comments.length;
};

const removePopup = () => {
  const main = document.querySelector('main');
  main.removeChild(main.lastChild);
};

const setCloseEvent = (element) => {
  element.querySelector('.close').addEventListener('click', () => {
    removePopup();
  });
};

const createDate = () => {
  const d = new Date();
  const day = (`0${d.getDate()}`).slice(-2);
  const month = (`0${d.getMonth() + 1}`).slice(-2);
  const year = d.getFullYear();

  return `${year}-${month}-${day}`;
};

const updateComments = () => {
  const ul = wrapper.querySelector('.comments-ul');
  const li = document.createElement('li');
  const comment = comments[comments.length - 1];
  const date = createDate();
  li.innerHTML = `<span class='comment-date'>${date}</span>
    <span class='comment-user'>${comment.username}: </span>
    <span class='comment-comment'>${comment.comment}</span>`;
  ul.append(li);
};

const addComment = async (content, id) => {
  const nameInp = wrapper.querySelector('.name-inp');
  const commentInp = wrapper.querySelector('.comment-inp');
  const name = nameInp.value;
  const comment = commentInp.value;
  if (name && comment) {
    comments.push({ item_id: id, username: name, comment });
    updateComments();
    updateCommentCounts();
    nameInp.value = '';
    commentInp.value = '';
    (0,_controllers__WEBPACK_IMPORTED_MODULE_0__.postComment)({ item_id: id, username: name, comment });
  }
};

const setAddComentEvent = (content, id) => {
  wrapper.querySelector('.add-comment-btn').addEventListener('click', () => {
    addComment(content, id);
  });
};

const createImageWrapper = (img) => {
  const imageWrapper = createElem('article', ['image-wrapper', 'flex', 'flex-row']);
  imageWrapper.innerHTML = `<div class='image'>
        <img src="${img}" alt="image of an character">
      </div>
      <div class='close-btn'>
        <span class="material-icons close">
close
</span>
      </div>`;
  return imageWrapper;
};

const createCharInfoWrapper = (info) => {
  const elem = createElem('article', ['char-info-wrapper']);
  elem.innerHTML = `<div class='char-name padding-20 text-center'>
        <h2>${info.name}</h2>
      </div>
      <ul class='char-info-ul flex flex-row'>
        <li>Gender: ${info.gender}</li>
        <li>Species: ${info.species}</li>
        <li>Status: ${info.status}</li>
        <li>Created: ${info.created}</li>
        <li>Location: ${info.location.name}</li>
        <li>Origin: ${info.origin.name}</li>
      </ul>`;
  return elem;
};

const createCommentsWrapper = async (id) => {
  comments = await (0,_controllers__WEBPACK_IMPORTED_MODULE_0__.getComment)(id);
  if (!Array.isArray(comments)) comments = [];
  const elem = createElem('article', ['flex', 'flex-col', 'comment-wrapper']);
  elem.innerHTML = `<div class='text-center padding-20'>
        <h3>Comments (<span class='comments-count'>${comments.length}</span>)</h3>
      </div>`;

  const ul = createElem('ul', ['flex', 'flex-col', 'comments-ul']);
  comments.forEach((comment) => {
    const li = document.createElement('li');
    li.innerHTML = `<span class='comment-date'>${comment.creation_date}</span>
    <span class='comment-user'>${comment.username}: </span>
    <span class='comment-comment'>${comment.comment}</span>`;
    ul.append(li);
  });
  elem.append(ul);
  return elem;
};

const createAddCommentSection = () => {
  const wrap = createElem('section', ['add-comment-section', 'flex', 'flex-col']);
  wrap.innerHTML = `<article>
          <h3 class='text-center'>Add a comment</h3>
        </article>

        <article>
          <input type='text' placeholder='Your name' class='name-inp'>
        </article>

        <article>
          <textarea name="comment" id="comment" cols="30" rows="10" placeholder='Your comment here' class='comment-inp'>

          </textarea>
        </article>

        <article>
          <input type="button" value='Comment' class='add-comment-btn btn'>
        </article>`;
  return wrap;
};

const createPopup = async (content, id) => {
  wrapper.innerHTML = '';
  wrapper.append(
    createImageWrapper(content.image),
    createCharInfoWrapper(content),
    await createCommentsWrapper(id),
    createAddCommentSection(),
  );

  setCloseEvent(wrapper);
  setAddComentEvent(content, id);

  document.querySelector('main').append(wrapper);
};

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemCounter = (items) => items.length;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);

/***/ }),

/***/ "./src/assets/R&M-logo.png":
/*!*********************************!*\
  !*** ./src/assets/R&M-logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96d7acb2dc167028858d.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_R_M_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/R&M-logo.png */ "./src/assets/R&M-logo.png");
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers */ "./src/controllers.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup */ "./src/popup.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */






const logoWrapper = document.querySelector('.logo');
const img = document.createElement('img');
img.src = _assets_R_M_logo_png__WEBPACK_IMPORTED_MODULE_1__;
logoWrapper.append(img);

const incrementLike = (likesBtn) => {
  likesBtn.forEach((btn) => {
    btn.addEventListener('click', async () => {
      await (0,_controllers__WEBPACK_IMPORTED_MODULE_2__.postLike)({
        item_id: btn.dataset.name,
      });
      location.reload();
    });
  });
};

let items = [];
const render = async (renderLike) => {
  items = await (0,_controllers__WEBPACK_IMPORTED_MODULE_2__.getCharacters)();
  const list = document.querySelector('.items-list');
  list.innerHTML = '';
  items.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `  <div class="img-wrapper">
    <div class="img-bg"></div>
    <img src='${item.image}' alt="Img">
  </div>
    <div class="like-content flex">
      <div class="title">${item.name}</div>
      <div class="like flex">
      <span><i id='${item.id}' data-name='${item.name}' class="fas fa-heart"></i></span>
      <span>
          <span>Like</span>
          <span>${renderLike(item)}</span>
        </span>
      </div>
    </div>
    <div class="comment"><button id='${item.id}' class="comment-btn btn">Comment</button></div>
    <div class="reserv"><button class="btn">Reservation</button></div>`;
    list.appendChild(li);
  });
  incrementLike(document.querySelectorAll('.fas'));
  [...document.querySelectorAll('.comment-btn')].forEach((elem) => {
    elem.addEventListener('click', async () => {
      await (0,_popup__WEBPACK_IMPORTED_MODULE_3__.createPopup)(items[elem.id - 1], elem.id - 1);
    });
  });
};

const count = document.querySelector('#char-count');
window.addEventListener('load', async () => {
  const likes = [...await (0,_controllers__WEBPACK_IMPORTED_MODULE_2__.getLikes)()];
  const renderLike = (item) => {
    let count = 0;
    likes.forEach((like) => {
      if (like.item_id === item.name) {
        count = like.likes;
      }
    });
    return count;
  };
  render(renderLike);
  const characters = await (0,_controllers__WEBPACK_IMPORTED_MODULE_2__.getCharacters)();
  count.innerHTML = `(${(0,_utils__WEBPACK_IMPORTED_MODULE_4__.default)(characters)})`;
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFXO0FBQ3ZCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixzREFBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJEQUFhO0FBQ3hDLHdCQUF3QiwrQ0FBVyxhQUFhO0FBQ2hELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvY29udHJvbGxlcnMuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVHlwb2dyYXBoeSAqL1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcHJpbWFyeUNvbG9yOiAjY2YwMDBmO1xcbiAgLS10ZXh0LWNvbG9yOiAjZmZmO1xcbiAgLS1zZWNvbmRhcnlDb2xvcjogIzE2MTYxNjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnlDb2xvcik7XFxufVxcblxcbiNmb290ZXIgcCB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5tYWluLWZvb3Rlci1jb250YWluZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbn1cXG5cXG5oZWFkZXIgLmhlYWRlci1tYWluLWNvbnRhaW5lciB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxufVxcblxcbi5sb2dvIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxubmF2IHVsIGxpIHtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxubmF2IHVsIGxpIGEge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5uYXYgdWwgbGk6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG59XFxuXFxubmF2IHVsIGxpOmhvdmVyOjphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI21haW4tc2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1haW4td3JhcHBlciB7XFxuICBwYWRkaW5nOiAxMHJlbSAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pdGVtcy1saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLml0ZW0ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxufVxcblxcbi5pdGVtIC5pbWctd3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuNXJlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxLjVyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaW1hZ2UgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIHRyYW5zZm9ybTogc2tld1goNDVkZWcpO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmltYWdlIGltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNyZW0pO1xcbn1cXG4uaW1hZ2UgaW1nOjpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgdG9wOiAtMC45cmVtO1xcbiAgICBsZWZ0OiAwLjFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbih2YXIoLS1wcmltYXJ5Q29sb3IpLCA2MCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZyk7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG59XFxuLmltYWdlIGltZzo6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRvcDogLTAuOXJlbTtcXG4gIGxlZnQ6IC0wLjhyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogNjMuNSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4odmFyKC0tcHJpbWFyeUNvbG9yKSwgNjApO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gIHRyYW5zZm9ybTogc2tld1koNDVkZWcpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gIGJvcmRlci1ib3R0b206IDIwcmVtIHNvbGlkIGRhcmtlbih2YXIoLS1wcmltYXJ5Q29sb3IpLCA2MCk7XFxufVxcblxcbi5pdGVtIC5pbWctd3JhcHBlciBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5saWtlLWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4ubGlrZS1jb250ZW50IC50aXRsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5saWtlIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5mYXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tbWVudCxcXG4ucmVzZXJ2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmJ0biB7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmMDAwZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkMTk1OTIgMCUsICNjZjAwMGYgNzQlKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbiAgb3BhY2l0eTogMC45OTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxOTU5MjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkMTk1OTIgMCUsICNjODFmNzAgNzQlKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3MDBtcztcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uYnRuOmhvdmVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkyMHB4KSB7XFxuICAuaXRlbXMtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDogMXJlbTtcXG4gIH1cXG5cXG4gIC5jb21tZW50LFxcbiAgLnJlc2VydixcXG4gIC5saWtlLWNvbnRlbnQge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIH1cXG59XFxuXFxuLypcXG4gICAgICAgICAgUE9QVVBcXG4qL1xcblxcbi5wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICB0b3A6IDc3cHg7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAzMTIzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIzMWMxO1xcbiAgcGFkZGluZzogMCAyMCU7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxufVxcblxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbn1cXG5cXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCAjYmYxYTM4O1xcbn1cXG5cXG4uY2hhci1pbmZvLXVsIHtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNoYXItaW5mby11bCA+IGxpIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNoYXItbmFtZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxufVxcblxcbi5jaGFyLWluZm8tdWwgPiBsaTpudGgtY2hpbGQoZXZlbikge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5pbWFnZSB7XFxuICBmbGV4LWJhc2lzOiA4MCU7XFxufVxcblxcbi5jbG9zZS1idG4ge1xcbiAgZmxleC1iYXNpczogMjAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbiAgICBBZGQgYSBjb21tZW50IHNlY3Rpb25cXG4qL1xcblxcbi5uYW1lLWlucCxcXG4uY29tbWVudC1pbnAge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQtYnRuIHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZUFBZTs7QUFFZjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxtSUFBbUk7QUFDckk7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osaURBQWlEO0lBQ2pELHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlEQUFpRDtFQUNqRCxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsMERBQTBEO0FBQzVEOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0VBQWtFO0VBQ2xFLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxTQUFTO0VBQ1g7O0VBRUE7OztJQUdFLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTs7Q0FFQzs7QUFFRDtFQUNFLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvREFBb0Q7RUFDcEQsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBOztDQUVDOztBQUVEOztFQUVFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUeXBvZ3JhcGh5ICovXFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5Q29sb3I6ICNjZjAwMGY7XFxuICAtLXRleHQtY29sb3I6ICNmZmY7XFxuICAtLXNlY29uZGFyeUNvbG9yOiAjMTYxNjE2O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG59XFxuXFxuI2Zvb3RlciBwIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLm1haW4tZm9vdGVyLWNvbnRhaW5lciB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHZhcigtLXByaW1hcnlDb2xvcik7XFxufVxcblxcbmhlYWRlciAuaGVhZGVyLW1haW4tY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIG1hcmdpbi10b3A6IDJweDtcXG59XFxuXFxuLmxvZ28gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5uYXYgdWwgbGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5uYXYgdWwgbGkgYSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbm5hdiB1bCBsaTo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJyAnO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG5cXG5uYXYgdWwgbGk6aG92ZXI6OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jbWFpbi1zZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFpbi13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDEwcmVtIDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLml0ZW1zLWxpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaXRlbSB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG59XFxuXFxuLml0ZW0gLmltZy13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS41cmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEuNXJlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5pbWFnZSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZyk7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaW1hZ2UgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3JlbSk7XFxufVxcbi5pbWFnZSBpbWc6OmJlZm9yZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB0b3A6IC0wLjlyZW07XFxuICAgIGxlZnQ6IDAuMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKHZhcigtLXByaW1hcnlDb2xvciksIDYwKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDQ1ZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbn1cXG4uaW1hZ2UgaW1nOjphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgdG9wOiAtMC45cmVtO1xcbiAgbGVmdDogLTAuOHJlbTtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiA2My41JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbih2YXIoLS1wcmltYXJ5Q29sb3IpLCA2MCk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbiAgdHJhbnNmb3JtOiBza2V3WSg0NWRlZyk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMjByZW0gc29saWQgZGFya2VuKHZhcigtLXByaW1hcnlDb2xvciksIDYwKTtcXG59XFxuXFxuLml0ZW0gLmltZy13cmFwcGVyIGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxpa2UtY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5saWtlLWNvbnRlbnQgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmxpa2Uge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmZhcyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21tZW50LFxcbi5yZXNlcnYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uYnRuIHtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2YwMDBmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2QxOTU5MiAwJSwgI2NmMDAwZiA3NCUpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBvcGFjaXR5OiAwLjk5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE5NTkyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2QxOTU5MiAwJSwgI2M4MWY3MCA3NCUpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDcwMG1zO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5idG46aG92ZXI6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTIwcHgpIHtcXG4gIC5pdGVtcy1saXN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgfVxcblxcbiAgLmNvbW1lbnQsXFxuICAucmVzZXJ2LFxcbiAgLmxpa2UtY29udGVudCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgfVxcbn1cXG5cXG4vKlxcbiAgICAgICAgICBQT1BVUFxcbiovXFxuXFxuLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIHRvcDogNzdweDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDMxMjM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjMxYzE7XFxuICBwYWRkaW5nOiAwIDIwJTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXG59XFxuXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHZhcigtLXByaW1hcnlDb2xvcik7XFxufVxcblxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4ICNiZjFhMzg7XFxufVxcblxcbi5jaGFyLWluZm8tdWwge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY2hhci1pbmZvLXVsID4gbGkge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY2hhci1uYW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG59XFxuXFxuLmNoYXItaW5mby11bCA+IGxpOm50aC1jaGlsZChldmVuKSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmltYWdlIHtcXG4gIGZsZXgtYmFzaXM6IDgwJTtcXG59XFxuXFxuLmNsb3NlLWJ0biB7XFxuICBmbGV4LWJhc2lzOiAyMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuICAgIEFkZCBhIGNvbW1lbnQgc2VjdGlvblxcbiovXFxuXFxuLm5hbWUtaW5wLFxcbi5jb21tZW50LWlucCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5hZGQtY29tbWVudC1idG4ge1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuZXhwb3J0IGNvbnN0IGdldCA9IGFzeW5jICh1cmwsIGVuZFBvaW50KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGAke3VybH0ke2VuZFBvaW50fWApO1xuICByZXR1cm4gcmVzdWx0Lmpzb24oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBwb3N0ID0gYXN5bmMgKHVybCwgZW5kUG9pbnQsIGJvZHkpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYCR7dXJsfSR7ZW5kUG9pbnR9YCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0ICogYXMgQXBpIGZyb20gJy4vYXBpJztcblxuY29uc3Qgcmlja01vcnR0VXJsID0gJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGknO1xuY29uc3QgaW52b2xVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpLyc7XG5jb25zdCBhcHBJZCA9ICdUUzBvSHhMNDRuM01aeGFObjVBNyc7XG5cbmV4cG9ydCBjb25zdCBnZXRDaGFyYWN0ZXJzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGkuZ2V0KHJpY2tNb3J0dFVybCwgJy9jaGFyYWN0ZXIvWzEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyXScpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpLmdldChpbnZvbFVybCwgYGFwcHMvJHthcHBJZH0vY29tbWVudHM/aXRlbV9pZD0ke2lkfWApO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGNvbnN0IHBvc3RMaWtlID0gYXN5bmMgKGJvZHkpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpLnBvc3QoaW52b2xVcmwsIGBhcHBzLyR7YXBwSWR9L2xpa2VzYCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGNvbnN0IHBvc3RDb21tZW50ID0gYXN5bmMgKGJvZHkpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpLnBvc3QoaW52b2xVcmwsIGBhcHBzLyR7YXBwSWR9L2NvbW1lbnRzYCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGkuZ2V0KGludm9sVXJsLCBgYXBwcy8ke2FwcElkfS9saWtlcy9gKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHsgZ2V0Q29tbWVudCwgcG9zdENvbW1lbnQgfSBmcm9tICcuL2NvbnRyb2xsZXJzJztcblxuY29uc3QgY3JlYXRlRWxlbSA9ICh0YWcsIGNsKSA9PiB7XG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGVsZW0uY2xhc3NMaXN0LmFkZCguLi5jbCk7XG4gIHJldHVybiBlbGVtO1xufTtcblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZUVsZW0oJ3NlY3Rpb24nLCBbJ3BvcHVwJywgJ2ZsZXgnLCAnZmxleC1jb2wnXSk7IC8vIHBvcHVwIHdyYXBwZXJcbmxldCBjb21tZW50cyA9IFtdOyAvLyBjb21tZW50cyBhcnJheVxuXG5jb25zdCB1cGRhdGVDb21tZW50Q291bnRzID0gKCkgPT4ge1xuICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1jb3VudCcpLmlubmVySFRNTCA9IGNvbW1lbnRzLmxlbmd0aDtcbn07XG5cbmNvbnN0IHJlbW92ZVBvcHVwID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKTtcbn07XG5cbmNvbnN0IHNldENsb3NlRXZlbnQgPSAoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZVBvcHVwKCk7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlRGF0ZSA9ICgpID0+IHtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRheSA9IChgMCR7ZC5nZXREYXRlKCl9YCkuc2xpY2UoLTIpO1xuICBjb25zdCBtb250aCA9IChgMCR7ZC5nZXRNb250aCgpICsgMX1gKS5zbGljZSgtMik7XG4gIGNvbnN0IHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XG5cbiAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG59O1xuXG5jb25zdCB1cGRhdGVDb21tZW50cyA9ICgpID0+IHtcbiAgY29uc3QgdWwgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy11bCcpO1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGNvbW1lbnQgPSBjb21tZW50c1tjb21tZW50cy5sZW5ndGggLSAxXTtcbiAgY29uc3QgZGF0ZSA9IGNyZWF0ZURhdGUoKTtcbiAgbGkuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPSdjb21tZW50LWRhdGUnPiR7ZGF0ZX08L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9J2NvbW1lbnQtdXNlcic+JHtjb21tZW50LnVzZXJuYW1lfTogPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPSdjb21tZW50LWNvbW1lbnQnPiR7Y29tbWVudC5jb21tZW50fTwvc3Bhbj5gO1xuICB1bC5hcHBlbmQobGkpO1xufTtcblxuY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChjb250ZW50LCBpZCkgPT4ge1xuICBjb25zdCBuYW1lSW5wID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcubmFtZS1pbnAnKTtcbiAgY29uc3QgY29tbWVudElucCA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtaW5wJyk7XG4gIGNvbnN0IG5hbWUgPSBuYW1lSW5wLnZhbHVlO1xuICBjb25zdCBjb21tZW50ID0gY29tbWVudElucC52YWx1ZTtcbiAgaWYgKG5hbWUgJiYgY29tbWVudCkge1xuICAgIGNvbW1lbnRzLnB1c2goeyBpdGVtX2lkOiBpZCwgdXNlcm5hbWU6IG5hbWUsIGNvbW1lbnQgfSk7XG4gICAgdXBkYXRlQ29tbWVudHMoKTtcbiAgICB1cGRhdGVDb21tZW50Q291bnRzKCk7XG4gICAgbmFtZUlucC52YWx1ZSA9ICcnO1xuICAgIGNvbW1lbnRJbnAudmFsdWUgPSAnJztcbiAgICBwb3N0Q29tbWVudCh7IGl0ZW1faWQ6IGlkLCB1c2VybmFtZTogbmFtZSwgY29tbWVudCB9KTtcbiAgfVxufTtcblxuY29uc3Qgc2V0QWRkQ29tZW50RXZlbnQgPSAoY29udGVudCwgaWQpID0+IHtcbiAgd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuYWRkLWNvbW1lbnQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkQ29tbWVudChjb250ZW50LCBpZCk7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlSW1hZ2VXcmFwcGVyID0gKGltZykgPT4ge1xuICBjb25zdCBpbWFnZVdyYXBwZXIgPSBjcmVhdGVFbGVtKCdhcnRpY2xlJywgWydpbWFnZS13cmFwcGVyJywgJ2ZsZXgnLCAnZmxleC1yb3cnXSk7XG4gIGltYWdlV3JhcHBlci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0naW1hZ2UnPlxuICAgICAgICA8aW1nIHNyYz1cIiR7aW1nfVwiIGFsdD1cImltYWdlIG9mIGFuIGNoYXJhY3RlclwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSdjbG9zZS1idG4nPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGNsb3NlXCI+XG5jbG9zZVxuPC9zcGFuPlxuICAgICAgPC9kaXY+YDtcbiAgcmV0dXJuIGltYWdlV3JhcHBlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUNoYXJJbmZvV3JhcHBlciA9IChpbmZvKSA9PiB7XG4gIGNvbnN0IGVsZW0gPSBjcmVhdGVFbGVtKCdhcnRpY2xlJywgWydjaGFyLWluZm8td3JhcHBlciddKTtcbiAgZWxlbS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0nY2hhci1uYW1lIHBhZGRpbmctMjAgdGV4dC1jZW50ZXInPlxuICAgICAgICA8aDI+JHtpbmZvLm5hbWV9PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzPSdjaGFyLWluZm8tdWwgZmxleCBmbGV4LXJvdyc+XG4gICAgICAgIDxsaT5HZW5kZXI6ICR7aW5mby5nZW5kZXJ9PC9saT5cbiAgICAgICAgPGxpPlNwZWNpZXM6ICR7aW5mby5zcGVjaWVzfTwvbGk+XG4gICAgICAgIDxsaT5TdGF0dXM6ICR7aW5mby5zdGF0dXN9PC9saT5cbiAgICAgICAgPGxpPkNyZWF0ZWQ6ICR7aW5mby5jcmVhdGVkfTwvbGk+XG4gICAgICAgIDxsaT5Mb2NhdGlvbjogJHtpbmZvLmxvY2F0aW9uLm5hbWV9PC9saT5cbiAgICAgICAgPGxpPk9yaWdpbjogJHtpbmZvLm9yaWdpbi5uYW1lfTwvbGk+XG4gICAgICA8L3VsPmA7XG4gIHJldHVybiBlbGVtO1xufTtcblxuY29uc3QgY3JlYXRlQ29tbWVudHNXcmFwcGVyID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudChpZCk7XG4gIGlmICghQXJyYXkuaXNBcnJheShjb21tZW50cykpIGNvbW1lbnRzID0gW107XG4gIGNvbnN0IGVsZW0gPSBjcmVhdGVFbGVtKCdhcnRpY2xlJywgWydmbGV4JywgJ2ZsZXgtY29sJywgJ2NvbW1lbnQtd3JhcHBlciddKTtcbiAgZWxlbS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0ndGV4dC1jZW50ZXIgcGFkZGluZy0yMCc+XG4gICAgICAgIDxoMz5Db21tZW50cyAoPHNwYW4gY2xhc3M9J2NvbW1lbnRzLWNvdW50Jz4ke2NvbW1lbnRzLmxlbmd0aH08L3NwYW4+KTwvaDM+XG4gICAgICA8L2Rpdj5gO1xuXG4gIGNvbnN0IHVsID0gY3JlYXRlRWxlbSgndWwnLCBbJ2ZsZXgnLCAnZmxleC1jb2wnLCAnY29tbWVudHMtdWwnXSk7XG4gIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPSdjb21tZW50LWRhdGUnPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz0nY29tbWVudC11c2VyJz4ke2NvbW1lbnQudXNlcm5hbWV9OiA8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9J2NvbW1lbnQtY29tbWVudCc+JHtjb21tZW50LmNvbW1lbnR9PC9zcGFuPmA7XG4gICAgdWwuYXBwZW5kKGxpKTtcbiAgfSk7XG4gIGVsZW0uYXBwZW5kKHVsKTtcbiAgcmV0dXJuIGVsZW07XG59O1xuXG5jb25zdCBjcmVhdGVBZGRDb21tZW50U2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgd3JhcCA9IGNyZWF0ZUVsZW0oJ3NlY3Rpb24nLCBbJ2FkZC1jb21tZW50LXNlY3Rpb24nLCAnZmxleCcsICdmbGV4LWNvbCddKTtcbiAgd3JhcC5pbm5lckhUTUwgPSBgPGFydGljbGU+XG4gICAgICAgICAgPGgzIGNsYXNzPSd0ZXh0LWNlbnRlcic+QWRkIGEgY29tbWVudDwvaDM+XG4gICAgICAgIDwvYXJ0aWNsZT5cblxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1lvdXIgbmFtZScgY2xhc3M9J25hbWUtaW5wJz5cbiAgICAgICAgPC9hcnRpY2xlPlxuXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiY29tbWVudFwiIGlkPVwiY29tbWVudFwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPSdZb3VyIGNvbW1lbnQgaGVyZScgY2xhc3M9J2NvbW1lbnQtaW5wJz5cblxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDwvYXJ0aWNsZT5cblxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPSdDb21tZW50JyBjbGFzcz0nYWRkLWNvbW1lbnQtYnRuIGJ0bic+XG4gICAgICAgIDwvYXJ0aWNsZT5gO1xuICByZXR1cm4gd3JhcDtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3B1cCA9IGFzeW5jIChjb250ZW50LCBpZCkgPT4ge1xuICB3cmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICB3cmFwcGVyLmFwcGVuZChcbiAgICBjcmVhdGVJbWFnZVdyYXBwZXIoY29udGVudC5pbWFnZSksXG4gICAgY3JlYXRlQ2hhckluZm9XcmFwcGVyKGNvbnRlbnQpLFxuICAgIGF3YWl0IGNyZWF0ZUNvbW1lbnRzV3JhcHBlcihpZCksXG4gICAgY3JlYXRlQWRkQ29tbWVudFNlY3Rpb24oKSxcbiAgKTtcblxuICBzZXRDbG9zZUV2ZW50KHdyYXBwZXIpO1xuICBzZXRBZGRDb21lbnRFdmVudChjb250ZW50LCBpZCk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZCh3cmFwcGVyKTtcbn07IiwiY29uc3QgaXRlbUNvdW50ZXIgPSAoaXRlbXMpID0+IGl0ZW1zLmxlbmd0aDtcbmV4cG9ydCBkZWZhdWx0IGl0ZW1Db3VudGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2Fzc2V0cy9SJk0tbG9nby5wbmcnO1xuaW1wb3J0IHsgZ2V0Q2hhcmFjdGVycywgZ2V0TGlrZXMsIHBvc3RMaWtlIH0gZnJvbSAnLi9jb250cm9sbGVycyc7XG5pbXBvcnQgeyBjcmVhdGVQb3B1cCB9IGZyb20gJy4vcG9wdXAnO1xuaW1wb3J0IGl0ZW1Db3VudGVyIGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBsb2dvV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJyk7XG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmltZy5zcmMgPSBsb2dvO1xubG9nb1dyYXBwZXIuYXBwZW5kKGltZyk7XG5cbmNvbnN0IGluY3JlbWVudExpa2UgPSAobGlrZXNCdG4pID0+IHtcbiAgbGlrZXNCdG4uZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgcG9zdExpa2Uoe1xuICAgICAgICBpdGVtX2lkOiBidG4uZGF0YXNldC5uYW1lLFxuICAgICAgfSk7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5sZXQgaXRlbXMgPSBbXTtcbmNvbnN0IHJlbmRlciA9IGFzeW5jIChyZW5kZXJMaWtlKSA9PiB7XG4gIGl0ZW1zID0gYXdhaXQgZ2V0Q2hhcmFjdGVycygpO1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1zLWxpc3QnKTtcbiAgbGlzdC5pbm5lckhUTUwgPSAnJztcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgbGkuaW5uZXJIVE1MID0gYCAgPGRpdiBjbGFzcz1cImltZy13cmFwcGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImltZy1iZ1wiPjwvZGl2PlxuICAgIDxpbWcgc3JjPScke2l0ZW0uaW1hZ2V9JyBhbHQ9XCJJbWdcIj5cbiAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImxpa2UtY29udGVudCBmbGV4XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke2l0ZW0ubmFtZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsaWtlIGZsZXhcIj5cbiAgICAgIDxzcGFuPjxpIGlkPScke2l0ZW0uaWR9JyBkYXRhLW5hbWU9JyR7aXRlbS5uYW1lfScgY2xhc3M9XCJmYXMgZmEtaGVhcnRcIj48L2k+PC9zcGFuPlxuICAgICAgPHNwYW4+XG4gICAgICAgICAgPHNwYW4+TGlrZTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj4ke3JlbmRlckxpa2UoaXRlbSl9PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPjxidXR0b24gaWQ9JyR7aXRlbS5pZH0nIGNsYXNzPVwiY29tbWVudC1idG4gYnRuXCI+Q29tbWVudDwvYnV0dG9uPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyZXNlcnZcIj48YnV0dG9uIGNsYXNzPVwiYnRuXCI+UmVzZXJ2YXRpb248L2J1dHRvbj48L2Rpdj5gO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcbiAgaW5jcmVtZW50TGlrZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFzJykpO1xuICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQtYnRuJyldLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgY3JlYXRlUG9wdXAoaXRlbXNbZWxlbS5pZCAtIDFdLCBlbGVtLmlkIC0gMSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhci1jb3VudCcpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxpa2VzID0gWy4uLmF3YWl0IGdldExpa2VzKCldO1xuICBjb25zdCByZW5kZXJMaWtlID0gKGl0ZW0pID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGxpa2VzLmZvckVhY2goKGxpa2UpID0+IHtcbiAgICAgIGlmIChsaWtlLml0ZW1faWQgPT09IGl0ZW0ubmFtZSkge1xuICAgICAgICBjb3VudCA9IGxpa2UubGlrZXM7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9O1xuICByZW5kZXIocmVuZGVyTGlrZSk7XG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBhd2FpdCBnZXRDaGFyYWN0ZXJzKCk7XG4gIGNvdW50LmlubmVySFRNTCA9IGAoJHtpdGVtQ291bnRlcihjaGFyYWN0ZXJzKX0pYDtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9