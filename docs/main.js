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
___CSS_LOADER_EXPORT___.push([module.id, "/* Typography */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --primaryColor: #de506b;\n  --text-color: #fff;\n  --secondaryColor: #2b2b31;\n}\n\nbody {\n  background-color: #2b2b31;\n}\n\nhtml {\n  font-family: 'Quicksand', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.text-center {\n  text-align: center;\n}\n\n#footer {\n  width: 100%;\n  height: 75px;\n  background-color: var(--secondaryColor);\n  border: 1px solid var(--primaryColor);\n}\n\n#footer p {\n  color: var(--text-color);\n}\n\n.main-footer-container {\n  width: 80%;\n  margin: 0 auto;\n  height: 100%;\n  align-items: center;\n  padding-left: 2rem;\n}\n\nli {\n  list-style-type: none;\n}\n\nbutton,\ninput {\n  outline: none;\n  border: none;\n}\n\na {\n  text-decoration: none;\n}\n\nheader {\n  width: 100%;\n  height: 75px;\n  background-color: var(--secondaryColor);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  box-shadow: 3px 3px 3px var(--primaryColor);\n}\n\nheader .header-main-container {\n  width: 80%;\n  height: 100%;\n  margin: 0 auto;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo {\n  width: 200px;\n  margin-top: 2px;\n}\n\n.logo img {\n  width: 100%;\n  max-width: 100%;\n}\n\nnav ul li {\n  margin-right: 20px;\n  position: relative;\n}\n\nnav ul li a {\n  font-size: 1.2rem;\n  color: var(--text-color);\n  font-weight: 400;\n}\n\nnav ul li::after {\n  position: absolute;\n  content: ' ';\n  width: 100%;\n  height: 2px;\n  display: none;\n  background-color: var(--primaryColor);\n  margin-top: 3px;\n}\n\nnav ul li:hover::after {\n  display: block;\n}\n\n#main-section {\n  width: 100%;\n}\n\n.main-wrapper {\n  padding: 10rem 0;\n  width: 100%;\n}\n\n.items-list {\n  width: 100%;\n  flex-direction: column;\n}\n\n.item {\n  width: 80%;\n  margin: 0 auto;\n  padding: 1rem;\n  max-width: 400px;\n}\n\n.item .img-wrapper {\n  width: 100%;\n  text-align: center;\n  border-top-left-radius: 1.5rem;\n  border-top-right-radius: 1.5rem;\n  overflow: hidden;\n}\n\n.image img {\n  width: 100%;\n  height: 400px;\n}\n\n.item .img-wrapper img {\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n}\n\n.like-content {\n  width: 100%;\n  justify-content: space-between;\n  margin-top: 1rem;\n}\n\n.like-content .title {\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: var(--text-color);\n}\n\n.like {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--text-color);\n}\n\n.fas {\n  cursor: pointer;\n}\n\n.comment,\n.reserv {\n  width: 100%;\n  margin-top: 1rem;\n}\n\n.btn {\n  padding: 1rem 0;\n  width: 100%;\n  font-size: 1.1rem;\n  color: var(--text-color);\n  background-color: #d19592;\n  background-image: linear-gradient(315deg, #d19592 0%, #c81f70 74%);\n  font-weight: 400;\n  position: relative;\n  z-index: 1;\n  opacity: 0.99;\n  cursor: pointer;\n}\n\n.btn::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  background-color: #d19592;\n  background-image: linear-gradient(315deg, #d19592 0%, #c81f70 74%);\n  transition: transform 700ms;\n  transform-origin: left;\n  transform: scaleX(0);\n  z-index: -1;\n}\n\n.btn:hover::before {\n  transform: scaleX(1);\n}\n\n@media screen and (min-width: 920px) {\n  .items-list {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n  }\n\n  .comment,\n  .reserv,\n  .like-content {\n    width: 90%;\n    margin: 1rem auto;\n  }\n}\n\n/*\n          POPUP\n*/\n\n.popup {\n  position: fixed;\n  color: var(--text-color);\n  top: 77px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 3123;\n  background-color: #2b2b31c1;\n  padding: 0 20%;\n  overflow-y: scroll;\n}\n\n.popup::-webkit-scrollbar {\n  width: 15px;\n}\n\n.popup::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n\n.popup::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px var(--primaryColor);\n}\n\n.popup::-webkit-scrollbar-thumb:hover {\n  -webkit-box-shadow: inset 0 0 6px #bf1a38;\n}\n\n.char-info-ul {\n  flex-wrap: wrap;\n}\n\n.char-info-ul > li {\n  width: 50%;\n  padding-bottom: 10px;\n}\n\n.char-name {\n  text-align: center;\n  padding: 20px 0;\n}\n\n.char-info-ul > li:nth-child(even) {\n  text-align: right;\n}\n\n.image {\n  flex-basis: 80%;\n}\n\n.close-btn {\n  flex-basis: 20%;\n  text-align: center;\n}\n\n.material-icons {\n  font-size: 60px;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Typography */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --primaryColor: #de506b;\n  --text-color: #fff;\n  --secondaryColor: #2b2b31;\n}\n\nbody {\n  background-color: #2b2b31;\n}\n\nhtml {\n  font-family: 'Quicksand', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.text-center {\n  text-align: center;\n}\n\n#footer {\n  width: 100%;\n  height: 75px;\n  background-color: var(--secondaryColor);\n  border: 1px solid var(--primaryColor);\n}\n\n#footer p {\n  color: var(--text-color);\n}\n\n.main-footer-container {\n  width: 80%;\n  margin: 0 auto;\n  height: 100%;\n  align-items: center;\n  padding-left: 2rem;\n}\n\nli {\n  list-style-type: none;\n}\n\nbutton,\ninput {\n  outline: none;\n  border: none;\n}\n\na {\n  text-decoration: none;\n}\n\nheader {\n  width: 100%;\n  height: 75px;\n  background-color: var(--secondaryColor);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  box-shadow: 3px 3px 3px var(--primaryColor);\n}\n\nheader .header-main-container {\n  width: 80%;\n  height: 100%;\n  margin: 0 auto;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo {\n  width: 200px;\n  margin-top: 2px;\n}\n\n.logo img {\n  width: 100%;\n  max-width: 100%;\n}\n\nnav ul li {\n  margin-right: 20px;\n  position: relative;\n}\n\nnav ul li a {\n  font-size: 1.2rem;\n  color: var(--text-color);\n  font-weight: 400;\n}\n\nnav ul li::after {\n  position: absolute;\n  content: ' ';\n  width: 100%;\n  height: 2px;\n  display: none;\n  background-color: var(--primaryColor);\n  margin-top: 3px;\n}\n\nnav ul li:hover::after {\n  display: block;\n}\n\n#main-section {\n  width: 100%;\n}\n\n.main-wrapper {\n  padding: 10rem 0;\n  width: 100%;\n}\n\n.items-list {\n  width: 100%;\n  flex-direction: column;\n}\n\n.item {\n  width: 80%;\n  margin: 0 auto;\n  padding: 1rem;\n  max-width: 400px;\n}\n\n.item .img-wrapper {\n  width: 100%;\n  text-align: center;\n  border-top-left-radius: 1.5rem;\n  border-top-right-radius: 1.5rem;\n  overflow: hidden;\n}\n\n.image img {\n  width: 100%;\n  height: 400px;\n}\n\n.item .img-wrapper img {\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n}\n\n.like-content {\n  width: 100%;\n  justify-content: space-between;\n  margin-top: 1rem;\n}\n\n.like-content .title {\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: var(--text-color);\n}\n\n.like {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--text-color);\n}\n\n.fas {\n  cursor: pointer;\n}\n\n.comment,\n.reserv {\n  width: 100%;\n  margin-top: 1rem;\n}\n\n.btn {\n  padding: 1rem 0;\n  width: 100%;\n  font-size: 1.1rem;\n  color: var(--text-color);\n  background-color: #d19592;\n  background-image: linear-gradient(315deg, #d19592 0%, #c81f70 74%);\n  font-weight: 400;\n  position: relative;\n  z-index: 1;\n  opacity: 0.99;\n  cursor: pointer;\n}\n\n.btn::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  background-color: #d19592;\n  background-image: linear-gradient(315deg, #d19592 0%, #c81f70 74%);\n  transition: transform 700ms;\n  transform-origin: left;\n  transform: scaleX(0);\n  z-index: -1;\n}\n\n.btn:hover::before {\n  transform: scaleX(1);\n}\n\n@media screen and (min-width: 920px) {\n  .items-list {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n  }\n\n  .comment,\n  .reserv,\n  .like-content {\n    width: 90%;\n    margin: 1rem auto;\n  }\n}\n\n/*\n          POPUP\n*/\n\n.popup {\n  position: fixed;\n  color: var(--text-color);\n  top: 77px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 3123;\n  background-color: #2b2b31c1;\n  padding: 0 20%;\n  overflow-y: scroll;\n}\n\n.popup::-webkit-scrollbar {\n  width: 15px;\n}\n\n.popup::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n\n.popup::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px var(--primaryColor);\n}\n\n.popup::-webkit-scrollbar-thumb:hover {\n  -webkit-box-shadow: inset 0 0 6px #bf1a38;\n}\n\n.char-info-ul {\n  flex-wrap: wrap;\n}\n\n.char-info-ul > li {\n  width: 50%;\n  padding-bottom: 10px;\n}\n\n.char-name {\n  text-align: center;\n  padding: 20px 0;\n}\n\n.char-info-ul > li:nth-child(even) {\n  text-align: right;\n}\n\n.image {\n  flex-basis: 80%;\n}\n\n.close-btn {\n  flex-basis: 20%;\n  text-align: center;\n}\n\n.material-icons {\n  font-size: 60px;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
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

const getComment = async () => {
  const result = await _api__WEBPACK_IMPORTED_MODULE_0__.get(involUrl, `apps/${appId}/comments?item_id=item1`);
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
  const comments = await (0,_controllers__WEBPACK_IMPORTED_MODULE_0__.getComment)(id);
  const elem = createElem('article', ['flex', 'flex-col']);
  elem.innerHTML = `<div class='text-center padding-20'>
        <h3>Comments (<span class='comments-count'>${comments.length}</span>)</h3>
      </div>`;

  const ul = createElem('ul', ['flex', 'flex-col']);
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

const createPopup = async (content, id) => {
  const wrapper = createElem('section', ['popup', 'flex', 'flex-col']);
  wrapper.append(
    createImageWrapper(content.image),
    createCharInfoWrapper(content),
    await createCommentsWrapper(id),
  );

  wrapper.querySelector('.close').addEventListener('click', () => {
    const main = document.querySelector('main');
    main.removeChild(main.lastChild);
  });

  return wrapper;
};

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
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */





const logoWrapper = document.querySelector('.logo');
const img = document.createElement('img');
img.src = _assets_R_M_logo_png__WEBPACK_IMPORTED_MODULE_1__;
logoWrapper.append(img);

const itemCounter = (characters) => {
  let count = 0;
  for (let i = 0; i < characters.length; i = +1) {
    count += i;
  }
  console.log(count);
  return count;
};

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
      document.querySelector('main').append(await (0,_popup__WEBPACK_IMPORTED_MODULE_3__.createPopup)(items[elem.id - 1], elem.id - 1));
    });
  });
};

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
  // itemCounter(characters);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFV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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNxQjtBQUNvQjtBQUN5QjtBQUM1Qjs7QUFFdEM7QUFDQTtBQUNBLFVBQVUsaURBQUk7QUFDZDs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQVE7QUFDcEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsV0FBVztBQUMzQjtBQUNBO0FBQ0EsMkJBQTJCLFVBQVU7QUFDckM7QUFDQSxxQkFBcUIsUUFBUSxlQUFlLFVBQVU7QUFDdEQ7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsbURBQVc7QUFDN0QsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDBCQUEwQixzREFBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJEQUFhO0FBQ3hDO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9jb250cm9sbGVycy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9wb3B1cC5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBUeXBvZ3JhcGh5ICovXFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5Q29sb3I6ICNkZTUwNmI7XFxuICAtLXRleHQtY29sb3I6ICNmZmY7XFxuICAtLXNlY29uZGFyeUNvbG9yOiAjMmIyYjMxO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMzE7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnlDb2xvcik7XFxufVxcblxcbiNmb290ZXIgcCB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5tYWluLWZvb3Rlci1jb250YWluZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbn1cXG5cXG5oZWFkZXIgLmhlYWRlci1tYWluLWNvbnRhaW5lciB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxufVxcblxcbi5sb2dvIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxubmF2IHVsIGxpIHtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxubmF2IHVsIGxpIGEge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5uYXYgdWwgbGk6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG59XFxuXFxubmF2IHVsIGxpOmhvdmVyOjphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI21haW4tc2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1haW4td3JhcHBlciB7XFxuICBwYWRkaW5nOiAxMHJlbSAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pdGVtcy1saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLml0ZW0ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxufVxcblxcbi5pdGVtIC5pbWctd3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuNXJlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxLjVyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaW1hZ2UgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLml0ZW0gLmltZy13cmFwcGVyIGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxpa2UtY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5saWtlLWNvbnRlbnQgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmxpa2Uge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmZhcyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21tZW50LFxcbi5yZXNlcnYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uYnRuIHtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE5NTkyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2QxOTU5MiAwJSwgI2M4MWY3MCA3NCUpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBvcGFjaXR5OiAwLjk5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE5NTkyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2QxOTU5MiAwJSwgI2M4MWY3MCA3NCUpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDcwMG1zO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5idG46aG92ZXI6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTIwcHgpIHtcXG4gIC5pdGVtcy1saXN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgfVxcblxcbiAgLmNvbW1lbnQsXFxuICAucmVzZXJ2LFxcbiAgLmxpa2UtY29udGVudCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgfVxcbn1cXG5cXG4vKlxcbiAgICAgICAgICBQT1BVUFxcbiovXFxuXFxuLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIHRvcDogNzdweDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDMxMjM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjMxYzE7XFxuICBwYWRkaW5nOiAwIDIwJTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHZhcigtLXByaW1hcnlDb2xvcik7XFxufVxcblxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4ICNiZjFhMzg7XFxufVxcblxcbi5jaGFyLWluZm8tdWwge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY2hhci1pbmZvLXVsID4gbGkge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY2hhci1uYW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG59XFxuXFxuLmNoYXItaW5mby11bCA+IGxpOm50aC1jaGlsZChldmVuKSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmltYWdlIHtcXG4gIGZsZXgtYmFzaXM6IDgwJTtcXG59XFxuXFxuLmNsb3NlLWJ0biB7XFxuICBmbGV4LWJhc2lzOiAyMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZUFBZTs7QUFFZjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtSUFBbUk7QUFDckk7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFNBQVM7RUFDWDs7RUFFQTs7O0lBR0UsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBOztDQUVDOztBQUVEO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0RBQW9EO0VBQ3BELG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUeXBvZ3JhcGh5ICovXFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5Q29sb3I6ICNkZTUwNmI7XFxuICAtLXRleHQtY29sb3I6ICNmZmY7XFxuICAtLXNlY29uZGFyeUNvbG9yOiAjMmIyYjMxO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMzE7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnlDb2xvcik7XFxufVxcblxcbiNmb290ZXIgcCB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5tYWluLWZvb3Rlci1jb250YWluZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbn1cXG5cXG5oZWFkZXIgLmhlYWRlci1tYWluLWNvbnRhaW5lciB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxufVxcblxcbi5sb2dvIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxubmF2IHVsIGxpIHtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxubmF2IHVsIGxpIGEge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5uYXYgdWwgbGk6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG59XFxuXFxubmF2IHVsIGxpOmhvdmVyOjphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI21haW4tc2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1haW4td3JhcHBlciB7XFxuICBwYWRkaW5nOiAxMHJlbSAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pdGVtcy1saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLml0ZW0ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxufVxcblxcbi5pdGVtIC5pbWctd3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuNXJlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxLjVyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaW1hZ2UgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLml0ZW0gLmltZy13cmFwcGVyIGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxpa2UtY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5saWtlLWNvbnRlbnQgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmxpa2Uge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmZhcyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21tZW50LFxcbi5yZXNlcnYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uYnRuIHtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE5NTkyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2QxOTU5MiAwJSwgI2M4MWY3MCA3NCUpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBvcGFjaXR5OiAwLjk5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE5NTkyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2QxOTU5MiAwJSwgI2M4MWY3MCA3NCUpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDcwMG1zO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5idG46aG92ZXI6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTIwcHgpIHtcXG4gIC5pdGVtcy1saXN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgfVxcblxcbiAgLmNvbW1lbnQsXFxuICAucmVzZXJ2LFxcbiAgLmxpa2UtY29udGVudCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgfVxcbn1cXG5cXG4vKlxcbiAgICAgICAgICBQT1BVUFxcbiovXFxuXFxuLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIHRvcDogNzdweDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDMxMjM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjMxYzE7XFxuICBwYWRkaW5nOiAwIDIwJTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHZhcigtLXByaW1hcnlDb2xvcik7XFxufVxcblxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4ICNiZjFhMzg7XFxufVxcblxcbi5jaGFyLWluZm8tdWwge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY2hhci1pbmZvLXVsID4gbGkge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY2hhci1uYW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG59XFxuXFxuLmNoYXItaW5mby11bCA+IGxpOm50aC1jaGlsZChldmVuKSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmltYWdlIHtcXG4gIGZsZXgtYmFzaXM6IDgwJTtcXG59XFxuXFxuLmNsb3NlLWJ0biB7XFxuICBmbGV4LWJhc2lzOiAyMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cbmV4cG9ydCBjb25zdCBnZXQgPSBhc3luYyAodXJsLCBlbmRQb2ludCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgJHt1cmx9JHtlbmRQb2ludH1gKTtcbiAgcmV0dXJuIHJlc3VsdC5qc29uKCk7XG59O1xuXG5leHBvcnQgY29uc3QgcG9zdCA9IGFzeW5jICh1cmwsIGVuZFBvaW50LCBib2R5KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGAke3VybH0ke2VuZFBvaW50fWAsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5LFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCAqIGFzIEFwaSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHJpY2tNb3J0dFVybCA9ICdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpJztcbmNvbnN0IGludm9sVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS8nO1xuY29uc3QgYXBwSWQgPSAnVFMwb0h4TDQ0bjNNWnhhTm41QTcnO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hhcmFjdGVycyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpLmdldChyaWNrTW9ydHRVcmwsICcvY2hhcmFjdGVyL1sxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMl0nKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb21tZW50ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGkuZ2V0KGludm9sVXJsLCBgYXBwcy8ke2FwcElkfS9jb21tZW50cz9pdGVtX2lkPWl0ZW0xYCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgY29uc3QgcG9zdExpa2UgPSBhc3luYyAoYm9keSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGkucG9zdChpbnZvbFVybCwgYGFwcHMvJHthcHBJZH0vbGlrZXNgLCBKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgY29uc3QgcG9zdENvbW1lbnQgPSBhc3luYyAoYm9keSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGkucG9zdChpbnZvbFVybCwgYGFwcHMvJHthcHBJZH0vY29tbWVudHNgLCBKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaS5nZXQoaW52b2xVcmwsIGBhcHBzLyR7YXBwSWR9L2xpa2VzL2ApO1xuICByZXR1cm4gcmVzdWx0O1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBnZXRDb21tZW50IH0gZnJvbSAnLi9jb250cm9sbGVycyc7XG5cbmNvbnN0IGNyZWF0ZUVsZW0gPSAodGFnLCBjbCkgPT4ge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBlbGVtLmNsYXNzTGlzdC5hZGQoLi4uY2wpO1xuICByZXR1cm4gZWxlbTtcbn07XG5cbmNvbnN0IGNyZWF0ZUltYWdlV3JhcHBlciA9IChpbWcpID0+IHtcbiAgY29uc3QgaW1hZ2VXcmFwcGVyID0gY3JlYXRlRWxlbSgnYXJ0aWNsZScsIFsnaW1hZ2Utd3JhcHBlcicsICdmbGV4JywgJ2ZsZXgtcm93J10pO1xuICBpbWFnZVdyYXBwZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9J2ltYWdlJz5cbiAgICAgICAgPGltZyBzcmM9XCIke2ltZ31cIiBhbHQ9XCJpbWFnZSBvZiBhbiBjaGFyYWN0ZXJcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0nY2xvc2UtYnRuJz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBjbG9zZVwiPlxuY2xvc2Vcbjwvc3Bhbj5cbiAgICAgIDwvZGl2PmA7XG4gIHJldHVybiBpbWFnZVdyYXBwZXI7XG59O1xuXG5jb25zdCBjcmVhdGVDaGFySW5mb1dyYXBwZXIgPSAoaW5mbykgPT4ge1xuICBjb25zdCBlbGVtID0gY3JlYXRlRWxlbSgnYXJ0aWNsZScsIFsnY2hhci1pbmZvLXdyYXBwZXInXSk7XG4gIGVsZW0uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9J2NoYXItbmFtZSBwYWRkaW5nLTIwIHRleHQtY2VudGVyJz5cbiAgICAgICAgPGgyPiR7aW5mby5uYW1lfTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzcz0nY2hhci1pbmZvLXVsIGZsZXggZmxleC1yb3cnPlxuICAgICAgICA8bGk+R2VuZGVyOiAke2luZm8uZ2VuZGVyfTwvbGk+XG4gICAgICAgIDxsaT5TcGVjaWVzOiAke2luZm8uc3BlY2llc308L2xpPlxuICAgICAgICA8bGk+U3RhdHVzOiAke2luZm8uc3RhdHVzfTwvbGk+XG4gICAgICAgIDxsaT5DcmVhdGVkOiAke2luZm8uY3JlYXRlZH08L2xpPlxuICAgICAgICA8bGk+TG9jYXRpb246ICR7aW5mby5sb2NhdGlvbi5uYW1lfTwvbGk+XG4gICAgICAgIDxsaT5PcmlnaW46ICR7aW5mby5vcmlnaW4ubmFtZX08L2xpPlxuICAgICAgPC91bD5gO1xuICByZXR1cm4gZWxlbTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNvbW1lbnRzV3JhcHBlciA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnQoaWQpO1xuICBjb25zdCBlbGVtID0gY3JlYXRlRWxlbSgnYXJ0aWNsZScsIFsnZmxleCcsICdmbGV4LWNvbCddKTtcbiAgZWxlbS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0ndGV4dC1jZW50ZXIgcGFkZGluZy0yMCc+XG4gICAgICAgIDxoMz5Db21tZW50cyAoPHNwYW4gY2xhc3M9J2NvbW1lbnRzLWNvdW50Jz4ke2NvbW1lbnRzLmxlbmd0aH08L3NwYW4+KTwvaDM+XG4gICAgICA8L2Rpdj5gO1xuXG4gIGNvbnN0IHVsID0gY3JlYXRlRWxlbSgndWwnLCBbJ2ZsZXgnLCAnZmxleC1jb2wnXSk7XG4gIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPSdjb21tZW50LWRhdGUnPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz0nY29tbWVudC11c2VyJz4ke2NvbW1lbnQudXNlcm5hbWV9OiA8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9J2NvbW1lbnQtY29tbWVudCc+JHtjb21tZW50LmNvbW1lbnR9PC9zcGFuPmA7XG4gICAgdWwuYXBwZW5kKGxpKTtcbiAgfSk7XG4gIGVsZW0uYXBwZW5kKHVsKTtcbiAgcmV0dXJuIGVsZW07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUG9wdXAgPSBhc3luYyAoY29udGVudCwgaWQpID0+IHtcbiAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZUVsZW0oJ3NlY3Rpb24nLCBbJ3BvcHVwJywgJ2ZsZXgnLCAnZmxleC1jb2wnXSk7XG4gIHdyYXBwZXIuYXBwZW5kKFxuICAgIGNyZWF0ZUltYWdlV3JhcHBlcihjb250ZW50LmltYWdlKSxcbiAgICBjcmVhdGVDaGFySW5mb1dyYXBwZXIoY29udGVudCksXG4gICAgYXdhaXQgY3JlYXRlQ29tbWVudHNXcmFwcGVyKGlkKSxcbiAgKTtcblxuICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmxhc3RDaGlsZCk7XG4gIH0pO1xuXG4gIHJldHVybiB3cmFwcGVyO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi9hc3NldHMvUiZNLWxvZ28ucG5nJztcbmltcG9ydCB7IGdldENoYXJhY3RlcnMsIGdldExpa2VzLCBwb3N0TGlrZSB9IGZyb20gJy4vY29udHJvbGxlcnMnO1xuaW1wb3J0IHsgY3JlYXRlUG9wdXAgfSBmcm9tICcuL3BvcHVwJztcblxuY29uc3QgbG9nb1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xuY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5pbWcuc3JjID0gbG9nbztcbmxvZ29XcmFwcGVyLmFwcGVuZChpbWcpO1xuXG5jb25zdCBpdGVtQ291bnRlciA9IChjaGFyYWN0ZXJzKSA9PiB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhcmFjdGVycy5sZW5ndGg7IGkgPSArMSkge1xuICAgIGNvdW50ICs9IGk7XG4gIH1cbiAgY29uc29sZS5sb2coY291bnQpO1xuICByZXR1cm4gY291bnQ7XG59O1xuXG5jb25zdCBpbmNyZW1lbnRMaWtlID0gKGxpa2VzQnRuKSA9PiB7XG4gIGxpa2VzQnRuLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHBvc3RMaWtlKHtcbiAgICAgICAgaXRlbV9pZDogYnRuLmRhdGFzZXQubmFtZSxcbiAgICAgIH0pO1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxubGV0IGl0ZW1zID0gW107XG5jb25zdCByZW5kZXIgPSBhc3luYyAocmVuZGVyTGlrZSkgPT4ge1xuICBpdGVtcyA9IGF3YWl0IGdldENoYXJhY3RlcnMoKTtcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtcy1saXN0Jyk7XG4gIGxpc3QuaW5uZXJIVE1MID0gJyc7XG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgIGxpLmlubmVySFRNTCA9IGAgIDxkaXYgY2xhc3M9XCJpbWctd3JhcHBlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbWctYmdcIj48L2Rpdj5cbiAgICA8aW1nIHNyYz0nJHtpdGVtLmltYWdlfScgYWx0PVwiSW1nXCI+XG4gIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJsaWtlLWNvbnRlbnQgZmxleFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+JHtpdGVtLm5hbWV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibGlrZSBmbGV4XCI+XG4gICAgICA8c3Bhbj48aSBpZD0nJHtpdGVtLmlkfScgZGF0YS1uYW1lPScke2l0ZW0ubmFtZX0nIGNsYXNzPVwiZmFzIGZhLWhlYXJ0XCI+PC9pPjwvc3Bhbj5cbiAgICAgIDxzcGFuPlxuICAgICAgICAgIDxzcGFuPkxpa2U8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+JHtyZW5kZXJMaWtlKGl0ZW0pfTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbW1lbnRcIj48YnV0dG9uIGlkPScke2l0ZW0uaWR9JyBjbGFzcz1cImNvbW1lbnQtYnRuIGJ0blwiPkNvbW1lbnQ8L2J1dHRvbj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2XCI+PGJ1dHRvbiBjbGFzcz1cImJ0blwiPlJlc2VydmF0aW9uPC9idXR0b24+PC9kaXY+YDtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgfSk7XG4gIGluY3JlbWVudExpa2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhcycpKTtcbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWJ0bicpXS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5hcHBlbmQoYXdhaXQgY3JlYXRlUG9wdXAoaXRlbXNbZWxlbS5pZCAtIDFdLCBlbGVtLmlkIC0gMSkpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBsaWtlcyA9IFsuLi5hd2FpdCBnZXRMaWtlcygpXTtcbiAgY29uc3QgcmVuZGVyTGlrZSA9IChpdGVtKSA9PiB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBsaWtlcy5mb3JFYWNoKChsaWtlKSA9PiB7XG4gICAgICBpZiAobGlrZS5pdGVtX2lkID09PSBpdGVtLm5hbWUpIHtcbiAgICAgICAgY291bnQgPSBsaWtlLmxpa2VzO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb3VudDtcbiAgfTtcbiAgcmVuZGVyKHJlbmRlckxpa2UpO1xuICBjb25zdCBjaGFyYWN0ZXJzID0gYXdhaXQgZ2V0Q2hhcmFjdGVycygpO1xuICAvLyBpdGVtQ291bnRlcihjaGFyYWN0ZXJzKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9