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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constantse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constantse */ \"(app-pages-browser)/./src/app/components/constantse.ts\");\n/* harmony import */ var _DescriptionEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DescriptionEvents */ \"(app-pages-browser)/./src/app/components/DescriptionEvents.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SliderEvents = ()=>{\n    _s();\n    const [activeImage, setActiveImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const clickNext = ()=>{\n        activeImage === _constantse__WEBPACK_IMPORTED_MODULE_3__.images.length - 1 ? setActiveImage(0) : setActiveImage(activeImage + 1);\n    };\n    const clickPrev = ()=>{\n        activeImage === 0 ? setActiveImage(_constantse__WEBPACK_IMPORTED_MODULE_3__.images.length - 1) : setActiveImage(activeImage - 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            clickNext();\n        }, 5000);\n        return ()=>{\n            clearTimeout(timer);\n        };\n    }, [\n        activeImage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0\",\n                    children: _constantse__WEBPACK_IMPORTED_MODULE_3__.images.map((elem, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(idx === activeImage ? \"block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out\" : \"hidden\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: elem.src,\n                                alt: \"\",\n                                width: 400,\n                                height: 400,\n                                className: \"w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined)\n                        }, idx, false, {\n                            fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DescriptionEvents__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    activeImage: activeImage,\n                    clickNext: clickNext,\n                    clickPrev: clickPrev\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-bold mb-4 p-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Events Organised by Health Center\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center  p-3\",\n                            children: \"From health awareness campaigns to fitness workshops, the Health Center actively engages in initiatives that educate and empower individuals to make informed decisions about their health. Regular health check-ups, vaccination drives, and counseling sessions are organized to ensure preventive healthcare measures are accessible to all.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n            lineNumber: 35,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\SliderEvents.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SliderEvents, \"b1W1mnS2I3wGVRY4UoWI4lmX2HQ=\");\n_c = SliderEvents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SliderEvents);\nvar _c;\n$RefreshReg$(_c, \"SliderEvents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TbGlkZXJFdmVudHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUUrQjtBQUNhO0FBRU47QUFDUTtBQUU5QyxNQUFNSyxlQUFlOztJQUNuQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFFL0MsTUFBTU0sWUFBWTtRQUNoQkYsZ0JBQWdCSCwrQ0FBTUEsQ0FBQ00sTUFBTSxHQUFHLElBQzVCRixlQUFlLEtBQ2ZBLGVBQWVELGNBQWM7SUFDbkM7SUFDQSxNQUFNSSxZQUFZO1FBQ2hCSixnQkFBZ0IsSUFDWkMsZUFBZUosK0NBQU1BLENBQUNNLE1BQU0sR0FBRyxLQUMvQkYsZUFBZUQsY0FBYztJQUNuQztJQUVBTCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLFFBQVFDLFdBQVc7WUFDdkJKO1FBQ0YsR0FBRztRQUNILE9BQU87WUFDTEssYUFBYUY7UUFDZjtJQUNGLEdBQUc7UUFBQ0w7S0FBWTtJQUNoQixxQkFFRSw4REFBQ1E7a0JBRUQsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDRDtvQkFDQ0MsV0FBWTs4QkFFWGIsK0NBQU1BLENBQUNjLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxvQkFDakIsOERBQUNKOzRCQUVDQyxXQUFXLEdBSVYsT0FIQ0csUUFBUWIsY0FDSiwrRUFDQTtzQ0FHTiw0RUFBQ04sa0RBQUtBO2dDQUNKb0IsS0FBS0YsS0FBS0UsR0FBRztnQ0FDYkMsS0FBSTtnQ0FDSkMsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUlAsV0FBVTs7Ozs7OzJCQVpQRzs7Ozs7Ozs7Ozs4QkFpQlgsOERBQUNmLDBEQUFXQTtvQkFDVkUsYUFBYUE7b0JBQ2JFLFdBQVdBO29CQUNYRSxXQUFXQTs7Ozs7OzhCQUViLDhEQUFDSztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNROzRCQUFHUixXQUFVO3NDQUNWLDRFQUFDUzswQ0FBSzs7Ozs7Ozs7Ozs7c0NBQ1YsOERBQUNDOzRCQUFFVixXQUFVO3NDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEM7R0FqRU1YO0tBQUFBO0FBbUVOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9TbGlkZXJFdmVudHMudHN4PzNlNmEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgaW1hZ2VzIH0gZnJvbSBcIi4vY29uc3RhbnRzZVwiO1xyXG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSBcIi4vRGVzY3JpcHRpb25FdmVudHNcIjtcclxuXHJcbmNvbnN0IFNsaWRlckV2ZW50cyA9ICgpID0+IHtcclxuICBjb25zdCBbYWN0aXZlSW1hZ2UsIHNldEFjdGl2ZUltYWdlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBjbGlja05leHQgPSAoKSA9PiB7XHJcbiAgICBhY3RpdmVJbWFnZSA9PT0gaW1hZ2VzLmxlbmd0aCAtIDFcclxuICAgICAgPyBzZXRBY3RpdmVJbWFnZSgwKVxyXG4gICAgICA6IHNldEFjdGl2ZUltYWdlKGFjdGl2ZUltYWdlICsgMSk7XHJcbiAgfTtcclxuICBjb25zdCBjbGlja1ByZXYgPSAoKSA9PiB7XHJcbiAgICBhY3RpdmVJbWFnZSA9PT0gMFxyXG4gICAgICA/IHNldEFjdGl2ZUltYWdlKGltYWdlcy5sZW5ndGggLSAxKVxyXG4gICAgICA6IHNldEFjdGl2ZUltYWdlKGFjdGl2ZUltYWdlIC0gMSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNsaWNrTmV4dCgpO1xyXG4gICAgfSwgNTAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgfTtcclxuICB9LCBbYWN0aXZlSW1hZ2VdKTtcclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICA8bWFpbiA+XHJcbiAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBtZDpncmlkLWNvbHMtMiBncmlkLWNvbHMtMSB3LWZ1bGwgbXgtYXV0byBtYXgtdy01eGwgc2hhZG93LTJ4bCByb3VuZGVkLTJ4bFwiPlxyXG4gICAgICAgXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTQgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZWFzZS1pbi1vdXQgZHVyYXRpb24tNTAwIG1kOnJvdW5kZWQtMnhsIHAtNiBtZDpwLTBgfVxyXG4gICAgICA+XHJcbiAgICAgICAge2ltYWdlcy5tYXAoKGVsZW0sIGlkeCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICBpZHggPT09IGFjdGl2ZUltYWdlXHJcbiAgICAgICAgICAgICAgICA/IFwiYmxvY2sgdy1mdWxsIGgtWzgwdmhdIG9iamVjdC1jb3ZlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXRcIlxyXG4gICAgICAgICAgICAgICAgOiBcImhpZGRlblwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2VsZW0uc3JjfVxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBtZDpyb3VuZGVkLXRsLTN4bCBtZDpyb3VuZGVkLWJsLTN4bFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxEZXNjcmlwdGlvblxyXG4gICAgICAgIGFjdGl2ZUltYWdlPXthY3RpdmVJbWFnZX1cclxuICAgICAgICBjbGlja05leHQ9e2NsaWNrTmV4dH1cclxuICAgICAgICBjbGlja1ByZXY9e2NsaWNrUHJldn1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTQgcC0zXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPkV2ZW50cyBPcmdhbmlzZWQgYnkgSGVhbHRoIENlbnRlcjwvc3Bhbj48L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyICBwLTNcIj5cclxuICAgICAgICAgIEZyb20gaGVhbHRoIGF3YXJlbmVzcyBjYW1wYWlnbnMgdG8gZml0bmVzcyB3b3Jrc2hvcHMsIHRoZSBIZWFsdGggQ2VudGVyIGFjdGl2ZWx5IGVuZ2FnZXMgaW4gaW5pdGlhdGl2ZXMgdGhhdCBlZHVjYXRlIGFuZCBlbXBvd2VyIGluZGl2aWR1YWxzIHRvIG1ha2UgaW5mb3JtZWQgZGVjaXNpb25zIGFib3V0IHRoZWlyIGhlYWx0aC4gUmVndWxhciBoZWFsdGggY2hlY2stdXBzLCB2YWNjaW5hdGlvbiBkcml2ZXMsIGFuZCBjb3Vuc2VsaW5nIHNlc3Npb25zIGFyZSBvcmdhbml6ZWQgdG8gZW5zdXJlIHByZXZlbnRpdmUgaGVhbHRoY2FyZSBtZWFzdXJlcyBhcmUgYWNjZXNzaWJsZSB0byBhbGwuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlckV2ZW50cztcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbWFnZXMiLCJEZXNjcmlwdGlvbiIsIlNsaWRlckV2ZW50cyIsImFjdGl2ZUltYWdlIiwic2V0QWN0aXZlSW1hZ2UiLCJjbGlja05leHQiLCJsZW5ndGgiLCJjbGlja1ByZXYiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiZWxlbSIsImlkeCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiLCJzcGFuIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/SliderEvents.tsx\n"));

/***/ })

});