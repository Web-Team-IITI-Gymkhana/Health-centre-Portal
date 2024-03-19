"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Events",{

/***/ "./pages/Events.tsx":
/*!**************************!*\
  !*** ./pages/Events.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_app_components_EventsText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/app/components/EventsText */ \"./src/app/components/EventsText.tsx\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_app_components_constantse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/app/components/constantse */ \"./src/app/components/constantse.ts\");\n/* harmony import */ var _src_app_components_DescriptionEvents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/app/components/DescriptionEvents */ \"./src/app/components/DescriptionEvents.tsx\");\n/* harmony import */ var _src_app_components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/app/components/Navbar */ \"./src/app/components/Navbar.tsx\");\n/* harmony import */ var _app_components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/app/components/Header */ \"./src/app/components/Header.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Events = ()=>{\n    _s();\n    const [activeImage, setActiveImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const clickNext = ()=>{\n        activeImage === _src_app_components_constantse__WEBPACK_IMPORTED_MODULE_5__.images.length - 1 ? setActiveImage(0) : setActiveImage(activeImage + 1);\n    };\n    const clickPrev = ()=>{\n        activeImage === 0 ? setActiveImage(_src_app_components_constantse__WEBPACK_IMPORTED_MODULE_5__.images.length - 1) : setActiveImage(activeImage - 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            clickNext();\n        }, 5000);\n        return ()=>{\n            clearTimeout(timer);\n        };\n    }, [\n        activeImage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Header__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\pages\\\\Events.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_app_components_Navbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\pages\\\\Events.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_app_components_EventsText__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\pages\\\\Events.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0\",\n                        children: _src_app_components_constantse__WEBPACK_IMPORTED_MODULE_5__.images.map((elem, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(idx === activeImage ? \"block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out\" : \"hidden\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: elem.src,\n                                    alt: \"\",\n                                    width: 400,\n                                    height: 400,\n                                    className: \"w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\pages\\\\Events.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, idx, false, {\n                                fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\pages\\\\Events.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\pages\\\\Events.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_app_components_DescriptionEvents__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        activeImage: activeImage,\n                        clickNext: clickNext,\n                        clickPrev: clickPrev\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\pages\\\\Events.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\pages\\\\Events.tsx\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\pages\\\\Events.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Events, \"b1W1mnS2I3wGVRY4UoWI4lmX2HQ=\");\n_c = Events;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Events);\nvar _c;\n$RefreshReg$(_c, \"Events\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9FdmVudHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNhO0FBQ2M7QUFDeEI7QUFFd0I7QUFDUTtBQUNoQjtBQUNMO0FBRTdDLE1BQU1RLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1TLFlBQVk7UUFDaEJGLGdCQUFnQkwsa0VBQU1BLENBQUNRLE1BQU0sR0FBRyxJQUM1QkYsZUFBZSxLQUNmQSxlQUFlRCxjQUFjO0lBQ25DO0lBQ0EsTUFBTUksWUFBWTtRQUNoQkosZ0JBQWdCLElBQ1pDLGVBQWVOLGtFQUFNQSxDQUFDUSxNQUFNLEdBQUcsS0FDL0JGLGVBQWVELGNBQWM7SUFDbkM7SUFFQVIsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxRQUFRQyxXQUFXO1lBQ3ZCSjtRQUNGLEdBQUc7UUFDSCxPQUFPO1lBQ0xLLGFBQWFGO1FBQ2Y7SUFDRixHQUFHO1FBQUNMO0tBQVk7SUFDaEIscUJBR0UsOERBQUNROzswQkFDRyw4REFBQ1YsOERBQU1BOzs7OzswQkFDUCw4REFBQ0Qsa0VBQU1BOzs7OzswQkFDUCw4REFBQ0gsc0VBQVVBOzs7OzswQkFFZiw4REFBQ2U7Z0JBQUlDLFdBQVU7O2tDQUdiLDhEQUFDRDt3QkFDQ0MsV0FBWTtrQ0FFWGYsa0VBQU1BLENBQUNnQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsb0JBQ2pCLDhEQUFDSjtnQ0FFQ0MsV0FBVyxHQUlWLE9BSENHLFFBQVFiLGNBQ0osK0VBQ0E7MENBR04sNEVBQUNULG1EQUFLQTtvQ0FDSnVCLEtBQUtGLEtBQUtFLEdBQUc7b0NBQ2JDLEtBQUk7b0NBQ0pDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JQLFdBQVU7Ozs7OzsrQkFaUEc7Ozs7Ozs7Ozs7a0NBaUJYLDhEQUFDakIsNkVBQVdBO3dCQUNWSSxhQUFhQTt3QkFDYkUsV0FBV0E7d0JBQ1hFLFdBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkI7R0FoRU1MO0tBQUFBO0FBa0VOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0V2ZW50cy50c3g/ZTEwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBFdmVudHNUZXh0IGZyb20gXCIuLi9zcmMvYXBwL2NvbXBvbmVudHMvRXZlbnRzVGV4dFwiO1xyXG5pbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcyc7XHJcblxyXG5pbXBvcnQgeyBpbWFnZXMgfSBmcm9tIFwiLi4vc3JjL2FwcC9jb21wb25lbnRzL2NvbnN0YW50c2VcIjtcclxuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gXCIuLi9zcmMvYXBwL2NvbXBvbmVudHMvRGVzY3JpcHRpb25FdmVudHNcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vc3JjL2FwcC9jb21wb25lbnRzL05hdmJhclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5cclxuY29uc3QgRXZlbnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVJbWFnZSwgc2V0QWN0aXZlSW1hZ2VdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGNsaWNrTmV4dCA9ICgpID0+IHtcclxuICAgIGFjdGl2ZUltYWdlID09PSBpbWFnZXMubGVuZ3RoIC0gMVxyXG4gICAgICA/IHNldEFjdGl2ZUltYWdlKDApXHJcbiAgICAgIDogc2V0QWN0aXZlSW1hZ2UoYWN0aXZlSW1hZ2UgKyAxKTtcclxuICB9O1xyXG4gIGNvbnN0IGNsaWNrUHJldiA9ICgpID0+IHtcclxuICAgIGFjdGl2ZUltYWdlID09PSAwXHJcbiAgICAgID8gc2V0QWN0aXZlSW1hZ2UoaW1hZ2VzLmxlbmd0aCAtIDEpXHJcbiAgICAgIDogc2V0QWN0aXZlSW1hZ2UoYWN0aXZlSW1hZ2UgLSAxKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY2xpY2tOZXh0KCk7XHJcbiAgICB9LCA1MDAwKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICB9O1xyXG4gIH0sIFthY3RpdmVJbWFnZV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIFxyXG4gICAgPG1haW4+XHJcbiAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgPEV2ZW50c1RleHQvPlxyXG4gICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgbWQ6Z3JpZC1jb2xzLTIgZ3JpZC1jb2xzLTEgdy1mdWxsIG14LWF1dG8gbWF4LXctNXhsIHNoYWRvdy0yeGwgcm91bmRlZC0yeGxcIj5cclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC00IHRyYW5zaXRpb24tdHJhbnNmb3JtIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTUwMCBtZDpyb3VuZGVkLTJ4bCBwLTYgbWQ6cC0wYH1cclxuICAgICAgPlxyXG4gICAgICAgIHtpbWFnZXMubWFwKChlbGVtLCBpZHgpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgaWR4ID09PSBhY3RpdmVJbWFnZVxyXG4gICAgICAgICAgICAgICAgPyBcImJsb2NrIHctZnVsbCBoLVs4MHZoXSBvYmplY3QtY292ZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0XCJcclxuICAgICAgICAgICAgICAgIDogXCJoaWRkZW5cIlxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtlbGVtLnNyY31cclxuICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgbWQ6cm91bmRlZC10bC0zeGwgbWQ6cm91bmRlZC1ibC0zeGxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RGVzY3JpcHRpb25cclxuICAgICAgICBhY3RpdmVJbWFnZT17YWN0aXZlSW1hZ2V9XHJcbiAgICAgICAgY2xpY2tOZXh0PXtjbGlja05leHR9XHJcbiAgICAgICAgY2xpY2tQcmV2PXtjbGlja1ByZXZ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgIFxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudHM7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRXZlbnRzVGV4dCIsImltYWdlcyIsIkRlc2NyaXB0aW9uIiwiTmF2YmFyIiwiSGVhZGVyIiwiRXZlbnRzIiwiYWN0aXZlSW1hZ2UiLCJzZXRBY3RpdmVJbWFnZSIsImNsaWNrTmV4dCIsImxlbmd0aCIsImNsaWNrUHJldiIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJlbGVtIiwiaWR4Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Events.tsx\n"));

/***/ })

});