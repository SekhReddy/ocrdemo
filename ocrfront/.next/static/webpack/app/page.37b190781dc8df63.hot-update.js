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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProcessImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _uploadthing_react_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uploadthing/react/styles.css */ \"(app-pages-browser)/./node_modules/@uploadthing/react/dist/index.css\");\n/* harmony import */ var _uploadthingutil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uploadthingutil */ \"(app-pages-browser)/./src/app/uploadthingutil.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ProcessImage() {\n    _s();\n    const [imageText, setImageText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [imageFile, setImageFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchImageText() {\n            const result = await fetch(\"\".concat(\"http://localhost:8000\", \"/\"));\n            const json = await result.json();\n            console.log(json);\n            setImageText(json);\n        }\n    }, []);\n    function handleChange(e) {\n        setImageText(e.target.value);\n    }\n    let formData = new FormData();\n    async function handleSubmit(image) {\n        const res = await fetch(\"\".concat(\"http://localhost:8000\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: image\n        }).then(async (r)=>{\n            if (r.ok) {\n                const json = await r.json();\n                const jsonText = JSON.parse(json);\n                setImageText(jsonText);\n                alert(\"Image uploaded successfully\");\n            }\n        }).catch((e)=>{\n            alert(\"Upload Error! \".concat(e.message));\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto p-10 m-10\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto p-3 m-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uploadthingutil__WEBPACK_IMPORTED_MODULE_3__.UploadButton, {\n                            endpoint: \"imageUploader\",\n                            onClientUploadComplete: (result)=>{\n                                const uploadedImage = result;\n                                formData.append(\"file\", uploadedImage);\n                                handleSubmit(uploadedImage);\n                                alert(\"File uploaded successfully\");\n                            },\n                            onUploadError: (error)=>{\n                                alert(\"Upload Error! \".concat(error.message));\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            value: imageText,\n                            onChange: handleChange,\n                            className: \"border-2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(ProcessImage, \"Gx0gyPnCAdjlILgNypgWZCd61HM=\");\n_c = ProcessImage;\nvar _c;\n$RefreshReg$(_c, \"ProcessImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaW1hZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ0w7QUFDVTtBQUVsQyxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDUixlQUFlTztZQUNiLE1BQU1DLFNBQVMsTUFBTUMsTUFBTSxHQUFtQyxPQUFoQ0MsdUJBQStCLEVBQUM7WUFDOUQsTUFBTUcsT0FBTyxNQUFNTCxPQUFPSyxJQUFJO1lBQzlCQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pULGFBQWFTO1FBQ2Y7SUFDRixHQUFHLEVBQUU7SUFFTCxTQUFTRyxhQUFhQyxDQUFNO1FBQzFCYixhQUFhYSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFFQSxJQUFJQyxXQUFXLElBQUlDO0lBRW5CLGVBQWVDLGFBQWFDLEtBQVU7UUFDcEMsTUFBTUMsTUFBTSxNQUFNZixNQUFNLEdBQW1DLE9BQWhDQyx1QkFBK0IsR0FBSTtZQUM1RGUsUUFBUTtZQUNSQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtZQUM5Q0MsTUFBTUo7UUFDUixHQUNHSyxJQUFJLENBQUMsT0FBT0M7WUFDWCxJQUFJQSxFQUFFQyxFQUFFLEVBQUU7Z0JBQ1IsTUFBTWpCLE9BQU8sTUFBTWdCLEVBQUVoQixJQUFJO2dCQUN6QixNQUFNa0IsV0FBV0MsS0FBS0MsS0FBSyxDQUFDcEI7Z0JBQzVCVCxhQUFhMkI7Z0JBQ2JHLE1BQU07WUFDUjtRQUNGLEdBQ0NDLEtBQUssQ0FBQyxDQUFDbEI7WUFDTmlCLE1BQU0saUJBQTJCLE9BQVZqQixFQUFFbUIsT0FBTztRQUNsQztJQUNKO0lBRUEscUJBQ0UsOERBQUNDO2tCQUNDLDRFQUFDQTtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDckMsMERBQVlBOzRCQUNYc0MsVUFBUzs0QkFDVEMsd0JBQXdCLENBQUNoQztnQ0FDdkIsTUFBTWlDLGdCQUFnQmpDO2dDQUN0QlksU0FBU3NCLE1BQU0sQ0FBQyxRQUFRRDtnQ0FDeEJuQixhQUFhbUI7Z0NBQ2JQLE1BQU07NEJBQ1I7NEJBQ0FTLGVBQWUsQ0FBQ0M7Z0NBQ2RWLE1BQU0saUJBQStCLE9BQWRVLE1BQU1SLE9BQU87NEJBQ3RDOzs7Ozs7c0NBRUYsOERBQUNTOzRCQUNDMUIsT0FBT2hCOzRCQUNQMkMsVUFBVTlCOzRCQUNWc0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hCO0dBakV3QnBDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvaW1hZ2UudHN4PzM3NGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIkB1cGxvYWR0aGluZy9yZWFjdC9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB7IFVwbG9hZEJ1dHRvbiB9IGZyb20gXCIuL3VwbG9hZHRoaW5ndXRpbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvY2Vzc0ltYWdlKCkge1xyXG4gIGNvbnN0IFtpbWFnZVRleHQsIHNldEltYWdlVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2VGaWxlLCBzZXRJbWFnZUZpbGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEltYWdlVGV4dCgpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vYCk7XHJcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhqc29uKTtcclxuICAgICAgc2V0SW1hZ2VUZXh0KGpzb24pO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGU6IGFueSkge1xyXG4gICAgc2V0SW1hZ2VUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoaW1hZ2U6IGFueSkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH1gLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgYm9keTogaW1hZ2UsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihhc3luYyAocikgPT4ge1xyXG4gICAgICAgIGlmIChyLm9rKSB7XHJcbiAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgci5qc29uKCk7XHJcbiAgICAgICAgICBjb25zdCBqc29uVGV4dCA9IEpTT04ucGFyc2UoanNvbik7XHJcbiAgICAgICAgICBzZXRJbWFnZVRleHQoanNvblRleHQpO1xyXG4gICAgICAgICAgYWxlcnQoXCJJbWFnZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBhbGVydChgVXBsb2FkIEVycm9yISAke2UubWVzc2FnZX1gKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBwLTEwIG0tMTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBwLTMgbS01XCI+XHJcbiAgICAgICAgICAgIDxVcGxvYWRCdXR0b25cclxuICAgICAgICAgICAgICBlbmRwb2ludD1cImltYWdlVXBsb2FkZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpZW50VXBsb2FkQ29tcGxldGU9eyhyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkZWRJbWFnZSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgdXBsb2FkZWRJbWFnZSk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQodXBsb2FkZWRJbWFnZSk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25VcGxvYWRFcnJvcj17KGVycm9yOiBFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYFVwbG9hZCBFcnJvciEgJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbWFnZVRleHR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMlwiXHJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJVcGxvYWRCdXR0b24iLCJQcm9jZXNzSW1hZ2UiLCJpbWFnZVRleHQiLCJzZXRJbWFnZVRleHQiLCJpbWFnZUZpbGUiLCJzZXRJbWFnZUZpbGUiLCJmZXRjaEltYWdlVGV4dCIsInJlc3VsdCIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJoYW5kbGVTdWJtaXQiLCJpbWFnZSIsInJlcyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwidGhlbiIsInIiLCJvayIsImpzb25UZXh0IiwiSlNPTiIsInBhcnNlIiwiYWxlcnQiLCJjYXRjaCIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJlbmRwb2ludCIsIm9uQ2xpZW50VXBsb2FkQ29tcGxldGUiLCJ1cGxvYWRlZEltYWdlIiwiYXBwZW5kIiwib25VcGxvYWRFcnJvciIsImVycm9yIiwidGV4dGFyZWEiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/image.tsx\n"));

/***/ })

});