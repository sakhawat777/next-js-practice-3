"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// First render html then load data\n// export async function getServerSideProps() {\nconst getServerSideProps = async ()=>{\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n    const data = await res.json();\n    return {\n        props: {\n            users: data\n        }\n    };\n};\nconst index = ({ users: users1  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"All Counties\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-3\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, undefined),\n            users1.map((users)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: users.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-3\\\\pages\\\\index.js\",\n                            lineNumber: 19,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-3\\\\pages\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-3\\\\pages\\\\index.js\",\n                    lineNumber: 17,\n                    columnNumber: 5\n                }, undefined)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-3\\\\pages\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUMxQixtQ0FBbUM7QUFDbkMsK0NBQStDO0FBQ3hDLE1BQU1DLGtCQUFrQixHQUFHLFVBQVk7SUFDN0MsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQztJQUNyRSxNQUFNQyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFDN0IsT0FBTztRQUNOQyxLQUFLLEVBQUU7WUFBRUMsS0FBSyxFQUFFSCxJQUFJO1NBQUU7S0FDdEIsQ0FBQztDQUNGLENBQUM7QUFFRixNQUFNSSxLQUFLLEdBQUcsQ0FBQyxFQUFFRCxLQUFLLEVBQUxBLE1BQUssR0FBRSxHQUFLO0lBQzVCLHFCQUNDLDhEQUFDRSxLQUFHOzswQkFDSCw4REFBQ0MsSUFBRTswQkFBQyxjQUFZOzs7Ozt5QkFBSztZQUNwQkgsTUFBSyxDQUFDSSxHQUFHLENBQUMsQ0FBQ0osS0FBSyxpQkFDaEIsOERBQUNFLEtBQUc7OEJBQ0gsNEVBQUNHLEdBQUM7a0NBQ0QsNEVBQUNDLElBQUU7c0NBQUVOLEtBQUssQ0FBQ08sSUFBSTs7Ozs7cUNBQU07Ozs7O2lDQUNsQjs7Ozs7NkJBQ0M7WUFDTixDQUFDOzs7Ozs7aUJBQ0csQ0FDTDtDQUNGO0FBRUQsaUVBQWVOLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMtcHJhY3RpY2UtMy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gRmlyc3QgcmVuZGVyIGh0bWwgdGhlbiBsb2FkIGRhdGFcclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJyk7XHJcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7IHVzZXJzOiBkYXRhIH0sXHJcblx0fTtcclxufTtcclxuXHJcbmNvbnN0IGluZGV4ID0gKHsgdXNlcnMgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aDE+QWxsIENvdW50aWVzPC9oMT5cclxuXHRcdFx0e3VzZXJzLm1hcCgodXNlcnMpID0+IChcclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdDxoMz57dXNlcnMubmFtZX08L2gzPlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpKX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInByb3BzIiwidXNlcnMiLCJpbmRleCIsImRpdiIsImgxIiwibWFwIiwiYSIsImgzIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();