"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/SliderEvents.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/SliderEvents.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constantse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constantse */ \"(app-pages-browser)/./src/app/components/constantse.ts\");\n/* harmony import */ var _DescriptionEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DescriptionEvents */ \"(app-pages-browser)/./src/app/components/DescriptionEvents.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SliderEvents = ()=>{\n    _s();\n    const [activeImage, setActiveImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const clickNext = ()=>{\n        activeImage === _constantse__WEBPACK_IMPORTED_MODULE_3__.images.length - 1 ? setActiveImage(0) : setActiveImage(activeImage + 1);\n    };\n    const clickPrev = ()=>{\n        activeImage === 0 ? setActiveImage(_constantse__WEBPACK_IMPORTED_MODULE_3__.images.length - 1) : setActiveImage(activeImage - 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            clickNext();\n        }, 5000);\n        return ()=>{\n            clearTimeout(timer);\n        };\n    }, [\n        activeImage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0\",\n                    children: _constantse__WEBPACK_IMPORTED_MODULE_3__.images.map((elem, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(idx === activeImage ? \"block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out\" : \"hidden\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: elem.src,\n                                alt: \"\",\n                                width: 400,\n                                height: 400,\n                                className: \"w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined)\n                        }, idx, false, {\n                            fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DescriptionEvents__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    activeImage: activeImage,\n                    clickNext: clickNext,\n                    clickPrev: clickPrev\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center mt-20 p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-bold mb-4 p-3 mx\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Events Organised by Health Center\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"From health awareness campaigns to fitness workshops, the Health Center actively engages in initiatives that educate and empower individuals to make informed decisions about their health. Regular health check-ups, vaccination drives, and counseling sessions are organized to ensure preventive healthcare measures are accessible to all.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n            lineNumber: 35,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SliderEvents, \"b1W1mnS2I3wGVRY4UoWI4lmX2HQ=\");\n_c = SliderEvents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SliderEvents);\nvar _c;\n$RefreshReg$(_c, \"SliderEvents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TbGlkZXJFdmVudHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUUrQjtBQUNhO0FBRU47QUFDUTtBQUU5QyxNQUFNSyxlQUFlOztJQUNuQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFFL0MsTUFBTU0sWUFBWTtRQUNoQkYsZ0JBQWdCSCwrQ0FBTUEsQ0FBQ00sTUFBTSxHQUFHLElBQzVCRixlQUFlLEtBQ2ZBLGVBQWVELGNBQWM7SUFDbkM7SUFDQSxNQUFNSSxZQUFZO1FBQ2hCSixnQkFBZ0IsSUFDWkMsZUFBZUosK0NBQU1BLENBQUNNLE1BQU0sR0FBRyxLQUMvQkYsZUFBZUQsY0FBYztJQUNuQztJQUVBTCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLFFBQVFDLFdBQVc7WUFDdkJKO1FBQ0YsR0FBRztRQUNILE9BQU87WUFDTEssYUFBYUY7UUFDZjtJQUNGLEdBQUc7UUFBQ0w7S0FBWTtJQUNoQixxQkFFRSw4REFBQ1E7a0JBRUQsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDRDtvQkFDQ0MsV0FBWTs4QkFFWGIsK0NBQU1BLENBQUNjLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxvQkFDakIsOERBQUNKOzRCQUVDQyxXQUFXLEdBSVYsT0FIQ0csUUFBUWIsY0FDSiwrRUFDQTtzQ0FHTiw0RUFBQ04sa0RBQUtBO2dDQUNKb0IsS0FBS0YsS0FBS0UsR0FBRztnQ0FDYkMsS0FBSTtnQ0FDSkMsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUlAsV0FBVTs7Ozs7OzJCQVpQRzs7Ozs7Ozs7Ozs4QkFpQlgsOERBQUNmLDBEQUFXQTtvQkFDVkUsYUFBYUE7b0JBQ2JFLFdBQVdBO29CQUNYRSxXQUFXQTs7Ozs7OzhCQUViLDhEQUFDSztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNROzRCQUFHUixXQUFVO3NDQUNWLDRFQUFDUzswQ0FBSzs7Ozs7Ozs7Ozs7c0NBQ1YsOERBQUNDO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBakVNckI7S0FBQUE7QUFtRU4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1NsaWRlckV2ZW50cy50c3g/M2U2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBpbWFnZXMgfSBmcm9tIFwiLi9jb25zdGFudHNlXCI7XHJcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tIFwiLi9EZXNjcmlwdGlvbkV2ZW50c1wiO1xyXG5cclxuY29uc3QgU2xpZGVyRXZlbnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVJbWFnZSwgc2V0QWN0aXZlSW1hZ2VdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGNsaWNrTmV4dCA9ICgpID0+IHtcclxuICAgIGFjdGl2ZUltYWdlID09PSBpbWFnZXMubGVuZ3RoIC0gMVxyXG4gICAgICA/IHNldEFjdGl2ZUltYWdlKDApXHJcbiAgICAgIDogc2V0QWN0aXZlSW1hZ2UoYWN0aXZlSW1hZ2UgKyAxKTtcclxuICB9O1xyXG4gIGNvbnN0IGNsaWNrUHJldiA9ICgpID0+IHtcclxuICAgIGFjdGl2ZUltYWdlID09PSAwXHJcbiAgICAgID8gc2V0QWN0aXZlSW1hZ2UoaW1hZ2VzLmxlbmd0aCAtIDEpXHJcbiAgICAgIDogc2V0QWN0aXZlSW1hZ2UoYWN0aXZlSW1hZ2UgLSAxKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY2xpY2tOZXh0KCk7XHJcbiAgICB9LCA1MDAwKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICB9O1xyXG4gIH0sIFthY3RpdmVJbWFnZV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxtYWluID5cclxuICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIG1kOmdyaWQtY29scy0yIGdyaWQtY29scy0xIHctZnVsbCBteC1hdXRvIG1heC13LTV4bCBzaGFkb3ctMnhsIHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICBcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtNCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBlYXNlLWluLW91dCBkdXJhdGlvbi01MDAgbWQ6cm91bmRlZC0yeGwgcC02IG1kOnAtMGB9XHJcbiAgICAgID5cclxuICAgICAgICB7aW1hZ2VzLm1hcCgoZWxlbSwgaWR4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgIGlkeCA9PT0gYWN0aXZlSW1hZ2VcclxuICAgICAgICAgICAgICAgID8gXCJibG9jayB3LWZ1bGwgaC1bODB2aF0gb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dFwiXHJcbiAgICAgICAgICAgICAgICA6IFwiaGlkZGVuXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17ZWxlbS5zcmN9XHJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICB3aWR0aD17NDAwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NDAwfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIG1kOnJvdW5kZWQtdGwtM3hsIG1kOnJvdW5kZWQtYmwtM3hsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERlc2NyaXB0aW9uXHJcbiAgICAgICAgYWN0aXZlSW1hZ2U9e2FjdGl2ZUltYWdlfVxyXG4gICAgICAgIGNsaWNrTmV4dD17Y2xpY2tOZXh0fVxyXG4gICAgICAgIGNsaWNrUHJldj17Y2xpY2tQcmV2fVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTIwIHAtM1wiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNCBwLTMgbXhcIj5cclxuICAgICAgICAgICAgPHNwYW4+RXZlbnRzIE9yZ2FuaXNlZCBieSBIZWFsdGggQ2VudGVyPC9zcGFuPjwvaDE+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBGcm9tIGhlYWx0aCBhd2FyZW5lc3MgY2FtcGFpZ25zIHRvIGZpdG5lc3Mgd29ya3Nob3BzLCB0aGUgSGVhbHRoIENlbnRlciBhY3RpdmVseSBlbmdhZ2VzIGluIGluaXRpYXRpdmVzIHRoYXQgZWR1Y2F0ZSBhbmQgZW1wb3dlciBpbmRpdmlkdWFscyB0byBtYWtlIGluZm9ybWVkIGRlY2lzaW9ucyBhYm91dCB0aGVpciBoZWFsdGguIFJlZ3VsYXIgaGVhbHRoIGNoZWNrLXVwcywgdmFjY2luYXRpb24gZHJpdmVzLCBhbmQgY291bnNlbGluZyBzZXNzaW9ucyBhcmUgb3JnYW5pemVkIHRvIGVuc3VyZSBwcmV2ZW50aXZlIGhlYWx0aGNhcmUgbWVhc3VyZXMgYXJlIGFjY2Vzc2libGUgdG8gYWxsLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJFdmVudHM7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW1hZ2VzIiwiRGVzY3JpcHRpb24iLCJTbGlkZXJFdmVudHMiLCJhY3RpdmVJbWFnZSIsInNldEFjdGl2ZUltYWdlIiwiY2xpY2tOZXh0IiwibGVuZ3RoIiwiY2xpY2tQcmV2IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImVsZW0iLCJpZHgiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwic3BhbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/SliderEvents.tsx\n"));

/***/ })

});