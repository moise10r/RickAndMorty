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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_unnamed_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/unnamed.jpg */ "./src/assets/unnamed.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_unnamed_jpg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Typography */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --primaryColor: #cf000f;\n  --text-color: #fff;\n  --secondaryColor: #161616;\n}\n\nbody {\n  background-color: var(--secondaryColor);\n}\n\nhtml {\n  font-family: 'Quicksand', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.text-center {\n  text-align: center;\n}\n\n#footer {\n  width: 100%;\n  height: 75px;\n  border: 1px solid var(--primaryColor);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n\n#footer .bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--secondaryColor);\n  opacity: 0.93;\n  z-index: 1;\n}\n\n#footer p {\n  color: var(--text-color);\n  z-index: 10;\n  font-size: 1.3rem;\n}\n\n.main-footer-container {\n  width: 80%;\n  margin: 0 auto;\n  height: 100%;\n  align-items: center;\n  padding-left: 2rem;\n}\n\nli {\n  list-style-type: none;\n}\n\nbutton,\ninput {\n  outline: none;\n  border: none;\n}\n\na {\n  text-decoration: none;\n}\n\nheader {\n  width: 100%;\n  height: 75px;\n  background-color: var(--secondaryColor);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  box-shadow: 3px 3px 3px var(--primaryColor);\n}\n\nheader .header-main-container {\n  width: 80%;\n  height: 100%;\n  margin: 0 auto;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo {\n  width: 200px;\n  margin-top: 2px;\n}\n\n.logo img {\n  width: 100%;\n  max-width: 100%;\n}\n\nnav ul li {\n  margin-right: 20px;\n  position: relative;\n}\n\nnav ul li a {\n  font-size: 1.2rem;\n  color: var(--text-color);\n  font-weight: 400;\n}\n\nnav ul li::after {\n  position: absolute;\n  content: ' ';\n  width: 100%;\n  height: 2px;\n  display: none;\n  background-color: var(--primaryColor);\n  margin-top: 3px;\n}\n\nnav ul li:first-child::after {\n  display: block;\n}\n\nnav ul li:hover::after {\n  display: block;\n}\n\n#main-section {\n  width: 100%;\n}\n\n.main-wrapper {\n  padding: 10rem 0;\n  width: 100%;\n}\n\n.items-list {\n  width: 100%;\n  flex-direction: column;\n}\n\n.item {\n  width: 80%;\n  margin: 0 auto;\n  padding: 1rem;\n  max-width: 400px;\n}\n\n.item .img-wrapper {\n  width: 100%;\n  text-align: center;\n  border-radius: 1.5rem;\n  overflow: hidden;\n  transform: skewY(5deg);\n  margin-bottom: 2rem;\n}\n\n.image img {\n  width: 100%;\n  height: 400px;\n}\n\n.item .img-wrapper img {\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n  transition: 0.75s;\n}\n\n.image-wrapper .image img {\n  max-width: 100%;\n}\n\n.item .img-wrapper img:hover {\n  transform: scale(1.1);\n}\n\n.like-content {\n  width: 100%;\n  justify-content: space-between;\n  margin-top: 1rem;\n}\n\n.like-content .title {\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: var(--text-color);\n}\n\n.like {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--text-color);\n}\n\n.fas {\n  cursor: pointer;\n}\n\n.comment,\n.reserv {\n  width: 100%;\n  margin-top: 1rem;\n}\n\n.comment-btn {\n  border-bottom-left-radius: 1.5rem;\n  border-top-right-radius: 1.5rem;\n}\n\n.reserv-btn {\n  border-bottom-right-radius: 1.5rem;\n  border-bottom-left-radius: 1.5rem;\n}\n\n.btn {\n  padding: 1rem 0;\n  width: 100%;\n  font-size: 1.1rem;\n  color: var(--text-color);\n  background-color: #cf000f;\n  background-image: linear-gradient(315deg, #d19592 0%, #cf000f 74%);\n  font-weight: 400;\n  position: relative;\n  z-index: 1;\n  opacity: 0.99;\n  cursor: pointer;\n  overflow: hidden;\n}\n\n.comment-btn::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  background-color: #f57f79;\n  border-bottom-left-radius: 1.5rem;\n  border-top-right-radius: 1.5rem;\n  background-image: linear-gradient(315deg, #f57f79 0%, #8b040d 74%);\n  transition: transform 700ms;\n  transform-origin: left;\n  transform: scaleX(0);\n  z-index: -1;\n}\n\n.comment-btn:hover::before {\n  transform: scaleX(1);\n}\n\n.reserv-btn::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  background-color: #f57f79;\n  background-image: linear-gradient(315deg, #f57f79 0%, #8b040d 74%);\n  border-bottom-right-radius: 1.5rem;\n  border-bottom-left-radius: 1.5rem;\n  transition: transform 700ms;\n  transform-origin: left;\n  transform: scaleX(0);\n  z-index: -1;\n}\n\n.reserv-btn:hover::before {\n  transform: scaleX(1);\n}\n\n/*\n          POPUP\n*/\n\n.popup {\n  position: fixed;\n  color: var(--text-color);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  background-color: #36363699;\n  justify-self: center;\n  padding: 3rem 0;\n  overflow-y: scroll;\n}\n\n.main-popup {\n  width: 90%;\n  margin: 0 auto;\n  background-color: #222;\n  position: relative;\n}\n\n.image-wrapper {\n  padding-top: 3rem;\n  width: 100%;\n}\n\n.image-wrapper .image {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.char-info-wrapper {\n  width: 80%;\n  margin: 1rem auto;\n}\n\n.char-info-wrapper h2 {\n  font-size: 1.4rem;\n}\n\n.comment-wrapper {\n  width: 80%;\n  margin: 1rem auto;\n}\n\n.add-comment-section {\n  width: 80%;\n  margin: 1rem auto;\n}\n\n.add-comment-section .container:nth-child(2),\n.add-comment-section .container:nth-child(3) {\n  width: 70%;\n}\n\n.add-comment-section .container:nth-child(2) input {\n  margin-top: 1rem;\n}\n\n.add-comment-section .container:nth-child(2) input,\n.add-comment-section .container:nth-child(3) textarea {\n  padding: 1rem 1rem;\n  width: 100%;\n  font-size: 1rem;\n}\n\n.popup::-webkit-scrollbar {\n  width: 15px;\n}\n\n.popup::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n\n.popup::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px var(--primaryColor);\n}\n\n.popup::-webkit-scrollbar-thumb:hover {\n  -webkit-box-shadow: inset 0 0 6px #bf1a38;\n}\n\n.char-info-ul {\n  flex-wrap: wrap;\n}\n\n.char-info-ul > li {\n  width: 50%;\n  padding-bottom: 10px;\n}\n\n.char-name {\n  text-align: center;\n  padding: 20px 0;\n}\n\n.char-info-ul > li:nth-child(even) {\n  text-align: right;\n}\n\n.close-btn {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n}\n\n.material-icons {\n  font-size: 3rem;\n  cursor: pointer;\n}\n\n/*\n    Add a comment section\n*/\n\n.name-inp,\n.comment-inp {\n  padding: 10px;\n  border: none;\n  outline: none;\n  margin-bottom: 10px;\n}\n\n.add-comment-btn {\n  width: 20%;\n}\n\n@media screen and (min-width: 920px) {\n  .items-list {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n  }\n\n  .comment,\n  .reserv,\n  .like-content {\n    width: 90%;\n    margin: 1rem auto;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Typography */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --primaryColor: #cf000f;\n  --text-color: #fff;\n  --secondaryColor: #161616;\n}\n\nbody {\n  background-color: var(--secondaryColor);\n}\n\nhtml {\n  font-family: 'Quicksand', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.text-center {\n  text-align: center;\n}\n\n#footer {\n  width: 100%;\n  height: 75px;\n  border: 1px solid var(--primaryColor);\n  background-image: url('./assets/unnamed.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n\n#footer .bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--secondaryColor);\n  opacity: 0.93;\n  z-index: 1;\n}\n\n#footer p {\n  color: var(--text-color);\n  z-index: 10;\n  font-size: 1.3rem;\n}\n\n.main-footer-container {\n  width: 80%;\n  margin: 0 auto;\n  height: 100%;\n  align-items: center;\n  padding-left: 2rem;\n}\n\nli {\n  list-style-type: none;\n}\n\nbutton,\ninput {\n  outline: none;\n  border: none;\n}\n\na {\n  text-decoration: none;\n}\n\nheader {\n  width: 100%;\n  height: 75px;\n  background-color: var(--secondaryColor);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  box-shadow: 3px 3px 3px var(--primaryColor);\n}\n\nheader .header-main-container {\n  width: 80%;\n  height: 100%;\n  margin: 0 auto;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo {\n  width: 200px;\n  margin-top: 2px;\n}\n\n.logo img {\n  width: 100%;\n  max-width: 100%;\n}\n\nnav ul li {\n  margin-right: 20px;\n  position: relative;\n}\n\nnav ul li a {\n  font-size: 1.2rem;\n  color: var(--text-color);\n  font-weight: 400;\n}\n\nnav ul li::after {\n  position: absolute;\n  content: ' ';\n  width: 100%;\n  height: 2px;\n  display: none;\n  background-color: var(--primaryColor);\n  margin-top: 3px;\n}\n\nnav ul li:first-child::after {\n  display: block;\n}\n\nnav ul li:hover::after {\n  display: block;\n}\n\n#main-section {\n  width: 100%;\n}\n\n.main-wrapper {\n  padding: 10rem 0;\n  width: 100%;\n}\n\n.items-list {\n  width: 100%;\n  flex-direction: column;\n}\n\n.item {\n  width: 80%;\n  margin: 0 auto;\n  padding: 1rem;\n  max-width: 400px;\n}\n\n.item .img-wrapper {\n  width: 100%;\n  text-align: center;\n  border-radius: 1.5rem;\n  overflow: hidden;\n  transform: skewY(5deg);\n  margin-bottom: 2rem;\n}\n\n.image img {\n  width: 100%;\n  height: 400px;\n}\n\n.item .img-wrapper img {\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n  transition: 0.75s;\n}\n\n.image-wrapper .image img {\n  max-width: 100%;\n}\n\n.item .img-wrapper img:hover {\n  transform: scale(1.1);\n}\n\n.like-content {\n  width: 100%;\n  justify-content: space-between;\n  margin-top: 1rem;\n}\n\n.like-content .title {\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: var(--text-color);\n}\n\n.like {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--text-color);\n}\n\n.fas {\n  cursor: pointer;\n}\n\n.comment,\n.reserv {\n  width: 100%;\n  margin-top: 1rem;\n}\n\n.comment-btn {\n  border-bottom-left-radius: 1.5rem;\n  border-top-right-radius: 1.5rem;\n}\n\n.reserv-btn {\n  border-bottom-right-radius: 1.5rem;\n  border-bottom-left-radius: 1.5rem;\n}\n\n.btn {\n  padding: 1rem 0;\n  width: 100%;\n  font-size: 1.1rem;\n  color: var(--text-color);\n  background-color: #cf000f;\n  background-image: linear-gradient(315deg, #d19592 0%, #cf000f 74%);\n  font-weight: 400;\n  position: relative;\n  z-index: 1;\n  opacity: 0.99;\n  cursor: pointer;\n  overflow: hidden;\n}\n\n.comment-btn::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  background-color: #f57f79;\n  border-bottom-left-radius: 1.5rem;\n  border-top-right-radius: 1.5rem;\n  background-image: linear-gradient(315deg, #f57f79 0%, #8b040d 74%);\n  transition: transform 700ms;\n  transform-origin: left;\n  transform: scaleX(0);\n  z-index: -1;\n}\n\n.comment-btn:hover::before {\n  transform: scaleX(1);\n}\n\n.reserv-btn::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  background-color: #f57f79;\n  background-image: linear-gradient(315deg, #f57f79 0%, #8b040d 74%);\n  border-bottom-right-radius: 1.5rem;\n  border-bottom-left-radius: 1.5rem;\n  transition: transform 700ms;\n  transform-origin: left;\n  transform: scaleX(0);\n  z-index: -1;\n}\n\n.reserv-btn:hover::before {\n  transform: scaleX(1);\n}\n\n/*\n          POPUP\n*/\n\n.popup {\n  position: fixed;\n  color: var(--text-color);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  background-color: #36363699;\n  justify-self: center;\n  padding: 3rem 0;\n  overflow-y: scroll;\n}\n\n.main-popup {\n  width: 90%;\n  margin: 0 auto;\n  background-color: #222;\n  position: relative;\n}\n\n.image-wrapper {\n  padding-top: 3rem;\n  width: 100%;\n}\n\n.image-wrapper .image {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.char-info-wrapper {\n  width: 80%;\n  margin: 1rem auto;\n}\n\n.char-info-wrapper h2 {\n  font-size: 1.4rem;\n}\n\n.comment-wrapper {\n  width: 80%;\n  margin: 1rem auto;\n}\n\n.add-comment-section {\n  width: 80%;\n  margin: 1rem auto;\n}\n\n.add-comment-section .container:nth-child(2),\n.add-comment-section .container:nth-child(3) {\n  width: 70%;\n}\n\n.add-comment-section .container:nth-child(2) input {\n  margin-top: 1rem;\n}\n\n.add-comment-section .container:nth-child(2) input,\n.add-comment-section .container:nth-child(3) textarea {\n  padding: 1rem 1rem;\n  width: 100%;\n  font-size: 1rem;\n}\n\n.popup::-webkit-scrollbar {\n  width: 15px;\n}\n\n.popup::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n\n.popup::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px var(--primaryColor);\n}\n\n.popup::-webkit-scrollbar-thumb:hover {\n  -webkit-box-shadow: inset 0 0 6px #bf1a38;\n}\n\n.char-info-ul {\n  flex-wrap: wrap;\n}\n\n.char-info-ul > li {\n  width: 50%;\n  padding-bottom: 10px;\n}\n\n.char-name {\n  text-align: center;\n  padding: 20px 0;\n}\n\n.char-info-ul > li:nth-child(even) {\n  text-align: right;\n}\n\n.close-btn {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n}\n\n.material-icons {\n  font-size: 3rem;\n  cursor: pointer;\n}\n\n/*\n    Add a comment section\n*/\n\n.name-inp,\n.comment-inp {\n  padding: 10px;\n  border: none;\n  outline: none;\n  margin-bottom: 10px;\n}\n\n.add-comment-btn {\n  width: 20%;\n}\n\n@media screen and (min-width: 920px) {\n  .items-list {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n  }\n\n  .comment,\n  .reserv,\n  .like-content {\n    width: 90%;\n    margin: 1rem auto;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* eslint-disable import/prefer-default-export */



const createElem = (tag, cl) => {
  const elem = document.createElement(tag);
  elem.classList.add(...cl);
  return elem;
};

const wrapper = createElem('section', ['popup']); // popup wrapper
let comments = []; // comments array

const mainContainer = createElem('div', ['main-popup', 'flex', 'flex-col']);

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
  const date = createDate();
  const comment = comments[comments.length - 1];
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
        <h3>Comments (<span class='comments-count'>${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.getCommentsCounter)(comments)}</span>)</h3>
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
  wrap.innerHTML = `<div class="container">
          <h3 class='text-center'>Add a comment</h3>
        </div>

        <div class="container">
          <input type='text' placeholder='Your name' class='name-inp'>
        </div>

        <div class="container">
          <textarea name="comment"  id="comment" cols="30" rows="10" placeholder='Your comment here' class='comment-inp'>
          </textarea>
        </div>

        <div class="container">
          <input type="button" value='Comment' class='add-comment-btn btn'>
        </div>`;
  return wrap;
};

const createPopup = async (content, id) => {
  mainContainer.innerHTML = '';
  wrapper.innerHTML = '';
  mainContainer.append(
    createImageWrapper(content.image),
    createCharInfoWrapper(content),
    await createCommentsWrapper(id),
    createAddCommentSection(),
  );
  wrapper.append(mainContainer);
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
/* harmony export */   "getCommentsCounter": () => (/* binding */ getCommentsCounter),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemCounter = (items) => items.length;
const getCommentsCounter = (comments) => comments.length;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);

/***/ }),

/***/ "./src/assets/R&M-logo.png":
/*!*********************************!*\
  !*** ./src/assets/R&M-logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c0d7d35f26f0650ea76.png";

/***/ }),

/***/ "./src/assets/unnamed.jpg":
/*!********************************!*\
  !*** ./src/assets/unnamed.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3740276b7c796394f15.jpg";

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
    <div class="reserv"><button class="reserv-btn btn">Reservation</button></div>`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FB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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ3FCO0FBQ29CO0FBQ3lCO0FBQzVCO0FBQ0o7O0FBRWxDO0FBQ0E7QUFDQSxVQUFVLGlEQUFJO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzREFBUTtBQUNwQjtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQiwyREFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQztBQUNBLHFCQUFxQixRQUFRLGVBQWUsVUFBVTtBQUN0RDtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQVc7QUFDdkIsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkRBQWE7QUFDeEMsd0JBQXdCLCtDQUFXLGFBQWE7QUFDaEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvY29udHJvbGxlcnMuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9hc3NldHMvdW5uYW1lZC5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBUeXBvZ3JhcGh5ICovXFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5Q29sb3I6ICNjZjAwMGY7XFxuICAtLXRleHQtY29sb3I6ICNmZmY7XFxuICAtLXNlY29uZGFyeUNvbG9yOiAjMTYxNjE2O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2Zvb3RlciAuYmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xcbiAgb3BhY2l0eTogMC45MztcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiNmb290ZXIgcCB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICB6LWluZGV4OiAxMDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubWFpbi1mb290ZXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTAwO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG59XFxuXFxuaGVhZGVyIC5oZWFkZXItbWFpbi1jb250YWluZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbn1cXG5cXG4ubG9nbyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbm5hdiB1bCBsaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbm5hdiB1bCBsaSBhIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxubmF2IHVsIGxpOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiAnICc7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMnB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcblxcbm5hdiB1bCBsaTpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbm5hdiB1bCBsaTpob3Zlcjo6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNtYWluLXNlY3Rpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMTByZW0gMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaXRlbXMtbGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pdGVtIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4uaXRlbSAuaW1nLXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiBza2V3WSg1ZGVnKTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5pbWFnZSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4uaXRlbSAuaW1nLXdyYXBwZXIgaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxufVxcblxcbi5pbWFnZS13cmFwcGVyIC5pbWFnZSBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaXRlbSAuaW1nLXdyYXBwZXIgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmxpa2UtY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5saWtlLWNvbnRlbnQgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmxpa2Uge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmZhcyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21tZW50LFxcbi5yZXNlcnYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS41cmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEuNXJlbTtcXG59XFxuXFxuLnJlc2Vydi1idG4ge1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuNXJlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuNXJlbTtcXG59XFxuXFxuLmJ0biB7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmMDAwZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkMTk1OTIgMCUsICNjZjAwMGYgNzQlKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbiAgb3BhY2l0eTogMC45OTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jb21tZW50LWJ0bjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1N2Y3OTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuNXJlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZjU3Zjc5IDAlLCAjOGIwNDBkIDc0JSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzAwbXM7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmNvbW1lbnQtYnRuOmhvdmVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblxcbi5yZXNlcnYtYnRuOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3Zjc5O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2Y1N2Y3OSAwJSwgIzhiMDQwZCA3NCUpO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuNXJlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuNXJlbTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3MDBtcztcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ucmVzZXJ2LWJ0bjpob3Zlcjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cXG4vKlxcbiAgICAgICAgICBQT1BVUFxcbiovXFxuXFxuLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY5OTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogM3JlbSAwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ubWFpbi1wb3B1cCB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW1hZ2Utd3JhcHBlciB7XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW1hZ2Utd3JhcHBlciAuaW1hZ2Uge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uY2hhci1pbmZvLXdyYXBwZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbn1cXG5cXG4uY2hhci1pbmZvLXdyYXBwZXIgaDIge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5jb21tZW50LXdyYXBwZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQtc2VjdGlvbiB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxufVxcblxcbi5hZGQtY29tbWVudC1zZWN0aW9uIC5jb250YWluZXI6bnRoLWNoaWxkKDIpLFxcbi5hZGQtY29tbWVudC1zZWN0aW9uIC5jb250YWluZXI6bnRoLWNoaWxkKDMpIHtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi5hZGQtY29tbWVudC1zZWN0aW9uIC5jb250YWluZXI6bnRoLWNoaWxkKDIpIGlucHV0IHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5hZGQtY29tbWVudC1zZWN0aW9uIC5jb250YWluZXI6bnRoLWNoaWxkKDIpIGlucHV0LFxcbi5hZGQtY29tbWVudC1zZWN0aW9uIC5jb250YWluZXI6bnRoLWNoaWxkKDMpIHRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG59XFxuXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggI2JmMWEzODtcXG59XFxuXFxuLmNoYXItaW5mby11bCB7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jaGFyLWluZm8tdWwgPiBsaSB7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jaGFyLW5hbWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweCAwO1xcbn1cXG5cXG4uY2hhci1pbmZvLXVsID4gbGk6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbiAgICBBZGQgYSBjb21tZW50IHNlY3Rpb25cXG4qL1xcblxcbi5uYW1lLWlucCxcXG4uY29tbWVudC1pbnAge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQtYnRuIHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkyMHB4KSB7XFxuICAuaXRlbXMtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDogMXJlbTtcXG4gIH1cXG5cXG4gIC5jb21tZW50LFxcbiAgLnJlc2VydixcXG4gIC5saWtlLWNvbnRlbnQge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxlQUFlOztBQUVmO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLG1JQUFtSTtBQUNySTs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLHlEQUE2QztFQUM3QywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVBO0VBQ0Us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RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsU0FBUztFQUNYOztFQUVBOzs7SUFHRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVHlwb2dyYXBoeSAqL1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcHJpbWFyeUNvbG9yOiAjY2YwMDBmO1xcbiAgLS10ZXh0LWNvbG9yOiAjZmZmO1xcbiAgLS1zZWNvbmRhcnlDb2xvcjogIzE2MTYxNjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnlDb2xvcik7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL3VubmFtZWQuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2Zvb3RlciAuYmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xcbiAgb3BhY2l0eTogMC45MztcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiNmb290ZXIgcCB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICB6LWluZGV4OiAxMDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubWFpbi1mb290ZXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTAwO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG59XFxuXFxuaGVhZGVyIC5oZWFkZXItbWFpbi1jb250YWluZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbn1cXG5cXG4ubG9nbyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbm5hdiB1bCBsaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbm5hdiB1bCBsaSBhIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxubmF2IHVsIGxpOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiAnICc7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMnB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcblxcbm5hdiB1bCBsaTpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbm5hdiB1bCBsaTpob3Zlcjo6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNtYWluLXNlY3Rpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMTByZW0gMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaXRlbXMtbGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pdGVtIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4uaXRlbSAuaW1nLXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiBza2V3WSg1ZGVnKTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5pbWFnZSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4uaXRlbSAuaW1nLXdyYXBwZXIgaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxufVxcblxcbi5pbWFnZS13cmFwcGVyIC5pbWFnZSBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaXRlbSAuaW1nLXdyYXBwZXIgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmxpa2UtY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5saWtlLWNvbnRlbnQgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmxpa2Uge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmZhcyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21tZW50LFxcbi5yZXNlcnYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS41cmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEuNXJlbTtcXG59XFxuXFxuLnJlc2Vydi1idG4ge1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuNXJlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuNXJlbTtcXG59XFxuXFxuLmJ0biB7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmMDAwZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkMTk1OTIgMCUsICNjZjAwMGYgNzQlKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbiAgb3BhY2l0eTogMC45OTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jb21tZW50LWJ0bjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1N2Y3OTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuNXJlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZjU3Zjc5IDAlLCAjOGIwNDBkIDc0JSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzAwbXM7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmNvbW1lbnQtYnRuOmhvdmVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblxcbi5yZXNlcnYtYnRuOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3Zjc5O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2Y1N2Y3OSAwJSwgIzhiMDQwZCA3NCUpO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuNXJlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuNXJlbTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3MDBtcztcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ucmVzZXJ2LWJ0bjpob3Zlcjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cXG4vKlxcbiAgICAgICAgICBQT1BVUFxcbiovXFxuXFxuLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY5OTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogM3JlbSAwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ubWFpbi1wb3B1cCB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW1hZ2Utd3JhcHBlciB7XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW1hZ2Utd3JhcHBlciAuaW1hZ2Uge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uY2hhci1pbmZvLXdyYXBwZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbn1cXG5cXG4uY2hhci1pbmZvLXdyYXBwZXIgaDIge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5jb21tZW50LXdyYXBwZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQtc2VjdGlvbiB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxufVxcblxcbi5hZGQtY29tbWVudC1zZWN0aW9uIC5jb250YWluZXI6bnRoLWNoaWxkKDIpLFxcbi5hZGQtY29tbWVudC1zZWN0aW9uIC5jb250YWluZXI6bnRoLWNoaWxkKDMpIHtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi5hZGQtY29tbWVudC1zZWN0aW9uIC5jb250YWluZXI6bnRoLWNoaWxkKDIpIGlucHV0IHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5hZGQtY29tbWVudC1zZWN0aW9uIC5jb250YWluZXI6bnRoLWNoaWxkKDIpIGlucHV0LFxcbi5hZGQtY29tbWVudC1zZWN0aW9uIC5jb250YWluZXI6bnRoLWNoaWxkKDMpIHRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG59XFxuXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggI2JmMWEzODtcXG59XFxuXFxuLmNoYXItaW5mby11bCB7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jaGFyLWluZm8tdWwgPiBsaSB7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jaGFyLW5hbWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweCAwO1xcbn1cXG5cXG4uY2hhci1pbmZvLXVsID4gbGk6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbiAgICBBZGQgYSBjb21tZW50IHNlY3Rpb25cXG4qL1xcblxcbi5uYW1lLWlucCxcXG4uY29tbWVudC1pbnAge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQtYnRuIHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkyMHB4KSB7XFxuICAuaXRlbXMtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDogMXJlbTtcXG4gIH1cXG5cXG4gIC5jb21tZW50LFxcbiAgLnJlc2VydixcXG4gIC5saWtlLWNvbnRlbnQge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cbmV4cG9ydCBjb25zdCBnZXQgPSBhc3luYyAodXJsLCBlbmRQb2ludCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgJHt1cmx9JHtlbmRQb2ludH1gKTtcbiAgcmV0dXJuIHJlc3VsdC5qc29uKCk7XG59O1xuXG5leHBvcnQgY29uc3QgcG9zdCA9IGFzeW5jICh1cmwsIGVuZFBvaW50LCBib2R5KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGAke3VybH0ke2VuZFBvaW50fWAsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5LFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCAqIGFzIEFwaSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHJpY2tNb3J0dFVybCA9ICdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpJztcbmNvbnN0IGludm9sVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS8nO1xuY29uc3QgYXBwSWQgPSAnVFMwb0h4TDQ0bjNNWnhhTm41QTcnO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hhcmFjdGVycyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpLmdldChyaWNrTW9ydHRVcmwsICcvY2hhcmFjdGVyL1sxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMl0nKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb21tZW50ID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaS5nZXQoaW52b2xVcmwsIGBhcHBzLyR7YXBwSWR9L2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBjb25zdCBwb3N0TGlrZSA9IGFzeW5jIChib2R5KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaS5wb3N0KGludm9sVXJsLCBgYXBwcy8ke2FwcElkfS9saWtlc2AsIEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBjb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChib2R5KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaS5wb3N0KGludm9sVXJsLCBgYXBwcy8ke2FwcElkfS9jb21tZW50c2AsIEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpLmdldChpbnZvbFVybCwgYGFwcHMvJHthcHBJZH0vbGlrZXMvYCk7XG4gIHJldHVybiByZXN1bHQ7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IGdldENvbW1lbnQsIHBvc3RDb21tZW50IH0gZnJvbSAnLi9jb250cm9sbGVycyc7XG5pbXBvcnQgeyBnZXRDb21tZW50c0NvdW50ZXIgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgY3JlYXRlRWxlbSA9ICh0YWcsIGNsKSA9PiB7XG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGVsZW0uY2xhc3NMaXN0LmFkZCguLi5jbCk7XG4gIHJldHVybiBlbGVtO1xufTtcblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZUVsZW0oJ3NlY3Rpb24nLCBbJ3BvcHVwJ10pOyAvLyBwb3B1cCB3cmFwcGVyXG5sZXQgY29tbWVudHMgPSBbXTsgLy8gY29tbWVudHMgYXJyYXlcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW0oJ2RpdicsIFsnbWFpbi1wb3B1cCcsICdmbGV4JywgJ2ZsZXgtY29sJ10pO1xuXG5jb25zdCB1cGRhdGVDb21tZW50Q291bnRzID0gKCkgPT4ge1xuICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1jb3VudCcpLmlubmVySFRNTCA9IGNvbW1lbnRzLmxlbmd0aDtcbn07XG5cbmNvbnN0IHJlbW92ZVBvcHVwID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKTtcbn07XG5cbmNvbnN0IHNldENsb3NlRXZlbnQgPSAoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZVBvcHVwKCk7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlRGF0ZSA9ICgpID0+IHtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRheSA9IChgMCR7ZC5nZXREYXRlKCl9YCkuc2xpY2UoLTIpO1xuICBjb25zdCBtb250aCA9IChgMCR7ZC5nZXRNb250aCgpICsgMX1gKS5zbGljZSgtMik7XG4gIGNvbnN0IHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XG5cbiAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG59O1xuXG5jb25zdCB1cGRhdGVDb21tZW50cyA9ICgpID0+IHtcbiAgY29uc3QgdWwgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy11bCcpO1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGRhdGUgPSBjcmVhdGVEYXRlKCk7XG4gIGNvbnN0IGNvbW1lbnQgPSBjb21tZW50c1tjb21tZW50cy5sZW5ndGggLSAxXTtcbiAgbGkuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPSdjb21tZW50LWRhdGUnPiR7ZGF0ZX08L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9J2NvbW1lbnQtdXNlcic+JHtjb21tZW50LnVzZXJuYW1lfTogPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPSdjb21tZW50LWNvbW1lbnQnPiR7Y29tbWVudC5jb21tZW50fTwvc3Bhbj5gO1xuICB1bC5hcHBlbmQobGkpO1xufTtcblxuY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChjb250ZW50LCBpZCkgPT4ge1xuICBjb25zdCBuYW1lSW5wID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcubmFtZS1pbnAnKTtcbiAgY29uc3QgY29tbWVudElucCA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtaW5wJyk7XG4gIGNvbnN0IG5hbWUgPSBuYW1lSW5wLnZhbHVlO1xuICBjb25zdCBjb21tZW50ID0gY29tbWVudElucC52YWx1ZTtcbiAgaWYgKG5hbWUgJiYgY29tbWVudCkge1xuICAgIGNvbW1lbnRzLnB1c2goeyBpdGVtX2lkOiBpZCwgdXNlcm5hbWU6IG5hbWUsIGNvbW1lbnQgfSk7XG4gICAgdXBkYXRlQ29tbWVudHMoKTtcbiAgICB1cGRhdGVDb21tZW50Q291bnRzKCk7XG4gICAgbmFtZUlucC52YWx1ZSA9ICcnO1xuICAgIGNvbW1lbnRJbnAudmFsdWUgPSAnJztcbiAgICBwb3N0Q29tbWVudCh7IGl0ZW1faWQ6IGlkLCB1c2VybmFtZTogbmFtZSwgY29tbWVudCB9KTtcbiAgfVxufTtcblxuY29uc3Qgc2V0QWRkQ29tZW50RXZlbnQgPSAoY29udGVudCwgaWQpID0+IHtcbiAgd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuYWRkLWNvbW1lbnQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkQ29tbWVudChjb250ZW50LCBpZCk7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlSW1hZ2VXcmFwcGVyID0gKGltZykgPT4ge1xuICBjb25zdCBpbWFnZVdyYXBwZXIgPSBjcmVhdGVFbGVtKCdhcnRpY2xlJywgWydpbWFnZS13cmFwcGVyJywgJ2ZsZXgnLCAnZmxleC1yb3cnXSk7XG4gIGltYWdlV3JhcHBlci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0naW1hZ2UnPlxuICAgICAgICA8aW1nIHNyYz1cIiR7aW1nfVwiIGFsdD1cImltYWdlIG9mIGFuIGNoYXJhY3RlclwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSdjbG9zZS1idG4nPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGNsb3NlXCI+XG5jbG9zZVxuPC9zcGFuPlxuICAgICAgPC9kaXY+YDtcbiAgcmV0dXJuIGltYWdlV3JhcHBlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUNoYXJJbmZvV3JhcHBlciA9IChpbmZvKSA9PiB7XG4gIGNvbnN0IGVsZW0gPSBjcmVhdGVFbGVtKCdhcnRpY2xlJywgWydjaGFyLWluZm8td3JhcHBlciddKTtcbiAgZWxlbS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0nY2hhci1uYW1lIHBhZGRpbmctMjAgdGV4dC1jZW50ZXInPlxuICAgICAgICA8aDI+JHtpbmZvLm5hbWV9PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzPSdjaGFyLWluZm8tdWwgZmxleCBmbGV4LXJvdyc+XG4gICAgICAgIDxsaT5HZW5kZXI6ICR7aW5mby5nZW5kZXJ9PC9saT5cbiAgICAgICAgPGxpPlNwZWNpZXM6ICR7aW5mby5zcGVjaWVzfTwvbGk+XG4gICAgICAgIDxsaT5TdGF0dXM6ICR7aW5mby5zdGF0dXN9PC9saT5cbiAgICAgICAgPGxpPkNyZWF0ZWQ6ICR7aW5mby5jcmVhdGVkfTwvbGk+XG4gICAgICAgIDxsaT5Mb2NhdGlvbjogJHtpbmZvLmxvY2F0aW9uLm5hbWV9PC9saT5cbiAgICAgICAgPGxpPk9yaWdpbjogJHtpbmZvLm9yaWdpbi5uYW1lfTwvbGk+XG4gICAgICA8L3VsPmA7XG4gIHJldHVybiBlbGVtO1xufTtcblxuY29uc3QgY3JlYXRlQ29tbWVudHNXcmFwcGVyID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudChpZCk7XG4gIGlmICghQXJyYXkuaXNBcnJheShjb21tZW50cykpIGNvbW1lbnRzID0gW107XG4gIGNvbnN0IGVsZW0gPSBjcmVhdGVFbGVtKCdhcnRpY2xlJywgWydmbGV4JywgJ2ZsZXgtY29sJywgJ2NvbW1lbnQtd3JhcHBlciddKTtcbiAgZWxlbS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0ndGV4dC1jZW50ZXIgcGFkZGluZy0yMCc+XG4gICAgICAgIDxoMz5Db21tZW50cyAoPHNwYW4gY2xhc3M9J2NvbW1lbnRzLWNvdW50Jz4ke2dldENvbW1lbnRzQ291bnRlcihjb21tZW50cyl9PC9zcGFuPik8L2gzPlxuICAgICAgPC9kaXY+YDtcblxuICBjb25zdCB1bCA9IGNyZWF0ZUVsZW0oJ3VsJywgWydmbGV4JywgJ2ZsZXgtY29sJywgJ2NvbW1lbnRzLXVsJ10pO1xuICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz0nY29tbWVudC1kYXRlJz4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX08L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9J2NvbW1lbnQtdXNlcic+JHtjb21tZW50LnVzZXJuYW1lfTogPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPSdjb21tZW50LWNvbW1lbnQnPiR7Y29tbWVudC5jb21tZW50fTwvc3Bhbj5gO1xuICAgIHVsLmFwcGVuZChsaSk7XG4gIH0pO1xuICBlbGVtLmFwcGVuZCh1bCk7XG4gIHJldHVybiBlbGVtO1xufTtcblxuY29uc3QgY3JlYXRlQWRkQ29tbWVudFNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHdyYXAgPSBjcmVhdGVFbGVtKCdzZWN0aW9uJywgWydhZGQtY29tbWVudC1zZWN0aW9uJywgJ2ZsZXgnLCAnZmxleC1jb2wnXSk7XG4gIHdyYXAuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8aDMgY2xhc3M9J3RleHQtY2VudGVyJz5BZGQgYSBjb21tZW50PC9oMz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nWW91ciBuYW1lJyBjbGFzcz0nbmFtZS1pbnAnPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJjb21tZW50XCIgIGlkPVwiY29tbWVudFwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPSdZb3VyIGNvbW1lbnQgaGVyZScgY2xhc3M9J2NvbW1lbnQtaW5wJz5cbiAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT0nQ29tbWVudCcgY2xhc3M9J2FkZC1jb21tZW50LWJ0biBidG4nPlxuICAgICAgICA8L2Rpdj5gO1xuICByZXR1cm4gd3JhcDtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3B1cCA9IGFzeW5jIChjb250ZW50LCBpZCkgPT4ge1xuICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB3cmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZChcbiAgICBjcmVhdGVJbWFnZVdyYXBwZXIoY29udGVudC5pbWFnZSksXG4gICAgY3JlYXRlQ2hhckluZm9XcmFwcGVyKGNvbnRlbnQpLFxuICAgIGF3YWl0IGNyZWF0ZUNvbW1lbnRzV3JhcHBlcihpZCksXG4gICAgY3JlYXRlQWRkQ29tbWVudFNlY3Rpb24oKSxcbiAgKTtcbiAgd3JhcHBlci5hcHBlbmQobWFpbkNvbnRhaW5lcik7XG4gIHNldENsb3NlRXZlbnQod3JhcHBlcik7XG4gIHNldEFkZENvbWVudEV2ZW50KGNvbnRlbnQsIGlkKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuYXBwZW5kKHdyYXBwZXIpO1xufTsiLCJjb25zdCBpdGVtQ291bnRlciA9IChpdGVtcykgPT4gaXRlbXMubGVuZ3RoO1xuZXhwb3J0IGNvbnN0IGdldENvbW1lbnRzQ291bnRlciA9IChjb21tZW50cykgPT4gY29tbWVudHMubGVuZ3RoO1xuZXhwb3J0IGRlZmF1bHQgaXRlbUNvdW50ZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2dvIGZyb20gJy4vYXNzZXRzL1ImTS1sb2dvLnBuZyc7XG5pbXBvcnQgeyBnZXRDaGFyYWN0ZXJzLCBnZXRMaWtlcywgcG9zdExpa2UgfSBmcm9tICcuL2NvbnRyb2xsZXJzJztcbmltcG9ydCB7IGNyZWF0ZVBvcHVwIH0gZnJvbSAnLi9wb3B1cCc7XG5pbXBvcnQgaXRlbUNvdW50ZXIgZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGxvZ29XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcbmNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuaW1nLnNyYyA9IGxvZ287XG5sb2dvV3JhcHBlci5hcHBlbmQoaW1nKTtcblxuY29uc3QgaW5jcmVtZW50TGlrZSA9IChsaWtlc0J0bikgPT4ge1xuICBsaWtlc0J0bi5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBwb3N0TGlrZSh7XG4gICAgICAgIGl0ZW1faWQ6IGJ0bi5kYXRhc2V0Lm5hbWUsXG4gICAgICB9KTtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmxldCBpdGVtcyA9IFtdO1xuY29uc3QgcmVuZGVyID0gYXN5bmMgKHJlbmRlckxpa2UpID0+IHtcbiAgaXRlbXMgPSBhd2FpdCBnZXRDaGFyYWN0ZXJzKCk7XG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbXMtbGlzdCcpO1xuICBsaXN0LmlubmVySFRNTCA9ICcnO1xuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICBsaS5pbm5lckhUTUwgPSBgICA8ZGl2IGNsYXNzPVwiaW1nLXdyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW1nLWJnXCI+PC9kaXY+XG4gICAgPGltZyBzcmM9JyR7aXRlbS5pbWFnZX0nIGFsdD1cIkltZ1wiPlxuICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibGlrZS1jb250ZW50IGZsZXhcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPiR7aXRlbS5uYW1lfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImxpa2UgZmxleFwiPlxuICAgICAgPHNwYW4+PGkgaWQ9JyR7aXRlbS5pZH0nIGRhdGEtbmFtZT0nJHtpdGVtLm5hbWV9JyBjbGFzcz1cImZhcyBmYS1oZWFydFwiPjwvaT48L3NwYW4+XG4gICAgICA8c3Bhbj5cbiAgICAgICAgICA8c3Bhbj5MaWtlPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPiR7cmVuZGVyTGlrZShpdGVtKX08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb21tZW50XCI+PGJ1dHRvbiBpZD0nJHtpdGVtLmlkfScgY2xhc3M9XCJjb21tZW50LWJ0biBidG5cIj5Db21tZW50PC9idXR0b24+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJlc2VydlwiPjxidXR0b24gY2xhc3M9XCJyZXNlcnYtYnRuIGJ0blwiPlJlc2VydmF0aW9uPC9idXR0b24+PC9kaXY+YDtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgfSk7XG4gIGluY3JlbWVudExpa2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhcycpKTtcbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWJ0bicpXS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGNyZWF0ZVBvcHVwKGl0ZW1zW2VsZW0uaWQgLSAxXSwgZWxlbS5pZCAtIDEpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYXItY291bnQnKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBsaWtlcyA9IFsuLi5hd2FpdCBnZXRMaWtlcygpXTtcbiAgY29uc3QgcmVuZGVyTGlrZSA9IChpdGVtKSA9PiB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBsaWtlcy5mb3JFYWNoKChsaWtlKSA9PiB7XG4gICAgICBpZiAobGlrZS5pdGVtX2lkID09PSBpdGVtLm5hbWUpIHtcbiAgICAgICAgY291bnQgPSBsaWtlLmxpa2VzO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb3VudDtcbiAgfTtcbiAgcmVuZGVyKHJlbmRlckxpa2UpO1xuICBjb25zdCBjaGFyYWN0ZXJzID0gYXdhaXQgZ2V0Q2hhcmFjdGVycygpO1xuICBjb3VudC5pbm5lckhUTUwgPSBgKCR7aXRlbUNvdW50ZXIoY2hhcmFjdGVycyl9KWA7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==