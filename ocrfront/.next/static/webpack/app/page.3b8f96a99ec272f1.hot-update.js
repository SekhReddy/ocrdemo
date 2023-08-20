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

/***/ "(app-pages-browser)/./src/app/image.tsx":
/*!***************************!*\
  !*** ./src/app/image.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProcessImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _uploadthing_react_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uploadthing/react/styles.css */ \"(app-pages-browser)/./node_modules/@uploadthing/react/dist/index.css\");\n/* harmony import */ var _uploadthingutil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uploadthingutil */ \"(app-pages-browser)/./src/app/uploadthingutil.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ProcessImage() {\n    _s();\n    const [imageText, setImageText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [imageFile, setImageFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchImageText() {\n            const result = await fetch(\"\".concat(\"http://localhost:8000\", \"/\"));\n            const json = await result.json();\n            console.log(json);\n            setImageText(json);\n        }\n    }, []);\n    function handleChange(e) {\n        setImageText(e.target.value);\n    }\n    async function handleSubmit(image) {\n        const res = await fetch(\"\".concat(\"http://localhost:8000\"), {\n            method: \"POST\",\n            body: JSON.stringify({\n                file: image\n            })\n        }).then(async (r)=>{\n            if (r.ok) {\n                const json = await r.json();\n                const jsonText = JSON.parse(json);\n                setImageText(jsonText);\n                alert(\"Image uploaded successfully\");\n            }\n        }).catch((e)=>{\n            alert(\"Upload Error! \".concat(e.message));\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto p-10 m-10\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto p-3 m-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uploadthingutil__WEBPACK_IMPORTED_MODULE_3__.UploadButton, {\n                            endpoint: \"imageUploader\",\n                            onClientUploadComplete: (result)=>{\n                                const uploadedImage = result;\n                                handleSubmit(uploadedImage);\n                                alert(\"File uploaded successfully\");\n                            },\n                            onUploadError: (error)=>{\n                                alert(\"Upload Error! \".concat(error.message));\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            value: imageText,\n                            onChange: handleChange,\n                            className: \"border-2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(ProcessImage, \"Gx0gyPnCAdjlILgNypgWZCd61HM=\");\n_c = ProcessImage;\nvar _c;\n$RefreshReg$(_c, \"ProcessImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaW1hZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ0w7QUFDVTtBQUVsQyxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDUixlQUFlTztZQUNiLE1BQU1DLFNBQVMsTUFBTUMsTUFBTSxHQUFtQyxPQUFoQ0MsdUJBQStCLEVBQUM7WUFDOUQsTUFBTUcsT0FBTyxNQUFNTCxPQUFPSyxJQUFJO1lBQzlCQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pULGFBQWFTO1FBQ2Y7SUFDRixHQUFHLEVBQUU7SUFFTCxTQUFTRyxhQUFhQyxDQUFNO1FBQzFCYixhQUFhYSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFFQSxlQUFlQyxhQUFhQyxLQUFVO1FBQ3BDLE1BQU1DLE1BQU0sTUFBTWIsTUFBTSxHQUFtQyxPQUFoQ0MsdUJBQStCLEdBQUk7WUFDNURhLFFBQVE7WUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxNQUFNTjtZQUFNO1FBQ3JDLEdBQ0dPLElBQUksQ0FBQyxPQUFPQztZQUNYLElBQUlBLEVBQUVDLEVBQUUsRUFBRTtnQkFDUixNQUFNakIsT0FBTyxNQUFNZ0IsRUFBRWhCLElBQUk7Z0JBQ3pCLE1BQU1rQixXQUFXTixLQUFLTyxLQUFLLENBQUNuQjtnQkFDNUJULGFBQWEyQjtnQkFDYkUsTUFBTTtZQUNSO1FBQ0YsR0FDQ0MsS0FBSyxDQUFDLENBQUNqQjtZQUNOZ0IsTUFBTSxpQkFBMkIsT0FBVmhCLEVBQUVrQixPQUFPO1FBQ2xDO0lBQ0o7SUFFQSxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNBO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNwQywwREFBWUE7NEJBQ1hxQyxVQUFTOzRCQUNUQyx3QkFBd0IsQ0FBQy9CO2dDQUN2QixNQUFNZ0MsZ0JBQWdCaEM7Z0NBQ3RCWSxhQUFhb0I7Z0NBQ2JQLE1BQU07NEJBQ1I7NEJBQ0FRLGVBQWUsQ0FBQ0M7Z0NBQ2RULE1BQU0saUJBQStCLE9BQWRTLE1BQU1QLE9BQU87NEJBQ3RDOzs7Ozs7c0NBRUYsOERBQUNROzRCQUNDeEIsT0FBT2hCOzRCQUNQeUMsVUFBVTVCOzRCQUNWcUIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hCO0dBN0R3Qm5DO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvaW1hZ2UudHN4PzM3NGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIkB1cGxvYWR0aGluZy9yZWFjdC9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB7IFVwbG9hZEJ1dHRvbiB9IGZyb20gXCIuL3VwbG9hZHRoaW5ndXRpbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvY2Vzc0ltYWdlKCkge1xyXG4gIGNvbnN0IFtpbWFnZVRleHQsIHNldEltYWdlVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2VGaWxlLCBzZXRJbWFnZUZpbGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEltYWdlVGV4dCgpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vYCk7XHJcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhqc29uKTtcclxuICAgICAgc2V0SW1hZ2VUZXh0KGpzb24pO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGU6IGFueSkge1xyXG4gICAgc2V0SW1hZ2VUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChpbWFnZTogYW55KSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfWAsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBmaWxlOiBpbWFnZSB9KSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGFzeW5jIChyKSA9PiB7XHJcbiAgICAgICAgaWYgKHIub2spIHtcclxuICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByLmpzb24oKTtcclxuICAgICAgICAgIGNvbnN0IGpzb25UZXh0ID0gSlNPTi5wYXJzZShqc29uKTtcclxuICAgICAgICAgIHNldEltYWdlVGV4dChqc29uVGV4dCk7XHJcbiAgICAgICAgICBhbGVydChcIkltYWdlIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KGBVcGxvYWQgRXJyb3IhICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtMTAgbS0xMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHAtMyBtLTVcIj5cclxuICAgICAgICAgICAgPFVwbG9hZEJ1dHRvblxyXG4gICAgICAgICAgICAgIGVuZHBvaW50PVwiaW1hZ2VVcGxvYWRlclwiXHJcbiAgICAgICAgICAgICAgb25DbGllbnRVcGxvYWRDb21wbGV0ZT17KHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGxvYWRlZEltYWdlID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0KHVwbG9hZGVkSW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGaWxlIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uVXBsb2FkRXJyb3I9eyhlcnJvcjogRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGBVcGxvYWQgRXJyb3IhICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICB2YWx1ZT17aW1hZ2VUZXh0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTJcIlxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVXBsb2FkQnV0dG9uIiwiUHJvY2Vzc0ltYWdlIiwiaW1hZ2VUZXh0Iiwic2V0SW1hZ2VUZXh0IiwiaW1hZ2VGaWxlIiwic2V0SW1hZ2VGaWxlIiwiZmV0Y2hJbWFnZVRleHQiLCJyZXN1bHQiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJpbWFnZSIsInJlcyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmlsZSIsInRoZW4iLCJyIiwib2siLCJqc29uVGV4dCIsInBhcnNlIiwiYWxlcnQiLCJjYXRjaCIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJlbmRwb2ludCIsIm9uQ2xpZW50VXBsb2FkQ29tcGxldGUiLCJ1cGxvYWRlZEltYWdlIiwib25VcGxvYWRFcnJvciIsImVycm9yIiwidGV4dGFyZWEiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/image.tsx\n"));

/***/ })

});