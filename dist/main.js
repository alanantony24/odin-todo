/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --bgColor2:#ececec;\r\n    --bgColor3: #f2f3f5;\r\n    --bgColor1:#fefcfe;\r\n    --bgColorPopUp: #f3f1f3;\r\n    --textColor: #374958;\r\n    --accentDark: #2abd67;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Lato', sans-serif;\r\n    margin: 0;\r\n    color: var(--textColor);\r\n}\r\n\r\nh2 {\r\n    font-family: 'Lato', sans-serif;\r\n    color: var(--textColor);\r\n}\r\n\r\nh4 {\r\n    font-family: 'Lato', sans-serif;\r\n    font-weight: 300;\r\n    font-style: italic;\r\n    color: var(--textColor);\r\n}\r\n\r\nbody.dark{\r\n    --bgColor1: #15202b;\r\n    --bgColor2: #192734;\r\n    --bgColor3: #22303c;\r\n    --bgColorPopUp: #273746;\r\n    --textColor: #eaebec;\r\n    --accent: #2abd67;\r\n    --accentDark:#1f8d4d;\r\n}\r\n\r\n.mainContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.navBar {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px solid;\r\n    background-color: var(--bgColor3);\r\n}\r\n\r\n.hamburgerBtn {\r\n    width: 48px;\r\n    height: 48px;\r\n    margin-left: 25px;\r\n}\r\n\r\n.logoArea {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.toggleNightMode {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-right: 25px;\r\n}\r\n\r\n.darkModeLabel {\r\n    width: 50px;\r\n    height: 25px;\r\n    position: relative;\r\n    display: block;\r\n    background-color: #ebebeb;\r\n    border-radius: 200px;\r\n    /* box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0 -5px 15px rgba(255, 255, 255, 0.4); */\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n}\r\n\r\n.darkModeLabel:after {\r\n    content: \"\";\r\n    width: 22px;\r\n    height: 22px;\r\n    position: absolute;\r\n    top: 1px;\r\n    left: 1px;\r\n    background: linear-gradient(180deg, #ffcc89, #d8860b);\r\n    border-radius: 180px;;\r\n    /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); */\r\n    transition: 0.3s;\r\n}\r\n\r\n.darkModeInput {\r\n    width: 0;\r\n    height: 0;\r\n    visibility: hidden;   \r\n}\r\n\r\n.darkModeInput:checked + .darkModeLabel {\r\n    background: #242424;\r\n}\r\n\r\n.darkModeInput:checked + .darkModeLabel:after {\r\n    left: 42px;\r\n    transform: translateX(-100%);\r\n    background: linear-gradient(180deg, #777, #3a3a3a);\r\n}\r\n\r\n.darkModeLabel:active:after {\r\n    width: 26px;\r\n}\r\n\r\n.splitContent {\r\n    display: flex;\r\n    width: 100%;\r\n    flex-direction: row;\r\n    background-color: var(--bgColor2);\r\n}\r\n\r\n.material-symbols-outlined {\r\n    font-size: 45px;\r\n    color: var(--textColor);\r\n}\r\n\r\n.sideBar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 25%;\r\n    padding-left: 20px;\r\n    border-right: 1px solid ;\r\n    background-color: var(--bgColor1);\r\n}\r\n\r\n.mainTaskListObject {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    border-radius: 7px;\r\n    width: 90%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.selected {\r\n    background-color: rgba(47, 233, 124, 0.637);\r\n}\r\n\r\n.projectsList {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-right: 10px;\r\n}\r\n\r\n.projectObject {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-radius: 7px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.projectObject > h4 {\r\n    font-style: normal;\r\n    font-weight: bold;\r\n}\r\n\r\n.addProject {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.projectForm {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-right: 10px;\r\n}\r\n\r\n.projectForm > input {\r\n    height: 35px;\r\n    font-family: 'Lato', sans-serif;\r\n    font-style: italic;\r\n    border: 2px solid;\r\n}\r\n\r\n.projectButtons {\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-top: 10px;\r\n    gap: 10px;\r\n}\r\n\r\n.projectButtons > button {\r\n    font-family: 'Lato', sans-serif;\r\n    font-weight: bolder;\r\n    border: none;\r\n    height: 30px;\r\n    width: 70px;\r\n    border-radius: 5px;\r\n    color: var(--bgColor1);\r\n    text-align: center;\r\n}\r\n\r\n.addProjectBtn {\r\n    background-color: var(--accentDark);\r\n}\r\n\r\n.cancelProjectBtn {\r\n    background-color: red;\r\n}\r\n\r\n.hidden{\r\n    top:0;\r\n    left:0;\r\n    pointer-events: none !important;\r\n    position: absolute !important;\r\n    max-height:0 !important;\r\n    /* do nth but avoid opacity transition when position absolute */\r\n    transition: max-height 1s ease-out !important;    \r\n    opacity: 0 !important;\r\n}\r\n\r\n.listOfTasks {\r\n    margin: 30px;\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n.listOfTasks > h1 {\r\n    background-color: rgba(47, 233, 124, 0.637);\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n    color: var(--textColor);\r\n}\r\n\r\n.listOfTasks > p {\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: var(--textColor);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_domManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/domManipulation */ \"./src/modules/domManipulation.js\");\n\r\n\r\n//to toggle the sidebar.\r\nconst hamburgerBtn = document.querySelector(\".hamburgerBtn\");\r\nhamburgerBtn.addEventListener('click', () => {\r\n    const sideBar = document.querySelector(\".sideBar\");\r\n    sideBar.classList.toggle(\"hidden\");\r\n})\r\n\r\n//check what's the theme at the start of the app.\r\nconst toggleLightMode = document.getElementById(\"darkmodeToggle\");\r\nif (toggleLightMode.checked === true) {\r\n    document.body.classList.add(\"dark\");\r\n}\r\n\r\nelse {\r\n    document.body.classList.remove(\"dark\");\r\n}\r\n\r\n//when the switch is checked, toggle between light and dark modes.\r\ntoggleLightMode.addEventListener(\"change\", () => {\r\n    document.body.classList.toggle(\"dark\");\r\n});\r\n\r\n//displays all the projects on first loading of website\r\n(0,_modules_domManipulation__WEBPACK_IMPORTED_MODULE_1__.displayAllProjects)();\r\n\r\n//toggles the green color and text change when clicked on the mainTasksList and the projectsList\r\n(0,_modules_domManipulation__WEBPACK_IMPORTED_MODULE_1__.clickOnElementList)(\".mainTaskListObject\");\r\n(0,_modules_domManipulation__WEBPACK_IMPORTED_MODULE_1__.clickOnElementList)(\".projectObject\")\r\n\r\n//displays the createProject form\r\n;(0,_modules_domManipulation__WEBPACK_IMPORTED_MODULE_1__.displayCreateProjectForm)();\r\n//adds a new project\r\n(0,_modules_domManipulation__WEBPACK_IMPORTED_MODULE_1__.addNewProject)();\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/domManipulation.js":
/*!****************************************!*\
  !*** ./src/modules/domManipulation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewProject: () => (/* binding */ addNewProject),\n/* harmony export */   clickOnElementList: () => (/* binding */ clickOnElementList),\n/* harmony export */   displayAllProjects: () => (/* binding */ displayAllProjects),\n/* harmony export */   displayCreateProjectForm: () => (/* binding */ displayCreateProjectForm)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/modules/projects.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ \"./src/modules/localStorage.js\");\n\r\n\r\n//selects the taskLists from the sideBar, highlights them and changes the name of the heading in the right pane\r\nfunction clickOnElementList(elementList) {\r\n  const list = document.querySelectorAll(elementList);\r\n  const elementHeading = document.querySelector(\".elementHeading\");\r\n  list.forEach((element) => {\r\n    element.addEventListener(\"click\", () => {\r\n      var prevSelection = document.querySelector(\".selected\");\r\n      if (prevSelection) {\r\n        prevSelection.classList.remove(\"selected\");\r\n      }\r\n      if (elementList === \".mainTaskListObject\") {\r\n        elementHeading.textContent = element.children[1].textContent;\r\n      }\r\n      else {\r\n        elementHeading.textContent = element.children[0].textContent;\r\n      }\r\n      element.classList.toggle(\"selected\");\r\n    });\r\n  });\r\n}\r\n\r\n//to display the create project form\r\nfunction displayCreateProjectForm() {\r\n  const addProject = document.querySelector(\".addProject\"); //add project icon + text on the sidebar\r\n  addProject.addEventListener(\"click\", () => {\r\n    const projectForm = document.querySelector(\".projectForm\");\r\n    projectForm.classList.remove(\"hidden\");\r\n    const cancelBtn = projectForm.children[2].children[1];\r\n    cancelBtn.addEventListener(\"click\", () => {\r\n      projectForm.classList.add(\"hidden\");\r\n    });\r\n  });\r\n}\r\n\r\n//get data from the project form and save it to localStorage\r\nfunction addNewProject() {\r\n  const projectForm = document.querySelector(\".projectForm\");\r\n  if (projectForm) {\r\n    const projectName = document.getElementById(\"projectName\");\r\n    const addProjectBtn = document.getElementById(\"addProjectBtn\");\r\n    addProjectBtn.addEventListener(\"click\", () => {\r\n      const newProject = new _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectName.value);\r\n      (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.addProjectToLocalStorage)(newProject);\r\n      projectForm.classList.add(\"hidden\");\r\n    });\r\n  }\r\n}\r\n\r\n\r\n//get the data from localStorage, and generate the html for the inidividual project objects\r\nfunction displayAllProjects() {\r\n  const projectsListFromLocalStorage = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getProjectListFromLocalStorage)();\r\n  projectsListFromLocalStorage.forEach((project) => {\r\n    const projectsList = document.querySelector(\".projectsList\") \r\n    const projectObject = document.createElement(\"div\")\r\n    projectObject.classList.add(\"projectObject\");\r\n    const projectName = document.createElement(\"h4\");\r\n    projectName.textContent = project.name;\r\n    const kebabIcon = document.createElement(\"img\");\r\n    kebabIcon.src = \"../src/images/kebab.png\";\r\n    projectObject.appendChild(projectName);\r\n    projectObject.appendChild(kebabIcon);\r\n    projectsList.appendChild(projectObject);\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-todo/./src/modules/domManipulation.js?");

/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectToLocalStorage: () => (/* binding */ addProjectToLocalStorage),\n/* harmony export */   getProjectListFromLocalStorage: () => (/* binding */ getProjectListFromLocalStorage)\n/* harmony export */ });\nfunction getProjectListFromLocalStorage() {\r\n    var projectsList = JSON.parse(localStorage.getItem(\"projectsList\"));\r\n    if (projectsList == null) {\r\n        var initProjectList = [];\r\n        localStorage.setItem(\"projectsList\", JSON.stringify(initProjectList));\r\n    }\r\n    return projectsList;\r\n}\r\n\r\nfunction addProjectToLocalStorage(project) {\r\n    var projectsList;\r\n    projectsList = JSON.parse(localStorage.getItem(\"projectsList\"));\r\n    if (projectsList == null) {\r\n        projectsList = [];\r\n    }\r\n    projectsList.push(project);\r\n    localStorage.setItem(\"projectsList\", JSON.stringify(projectsList));\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-todo/./src/modules/localStorage.js?");

/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.listOfTasks = [];\r\n    }\r\n\r\n    setName(name) {\r\n        this.name = name;\r\n    }\r\n\r\n    getName() {\r\n        return this.name;\r\n    }\r\n\r\n    getTasks() {\r\n        return this.listOfTasks;\r\n    }\r\n    \r\n    setTasks() {\r\n        this.listOfTasks = this.listOfTasks;\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-todo/./src/modules/projects.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;