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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProcessImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _uploadthing_react_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uploadthing/react/styles.css */ \"(app-pages-browser)/./node_modules/@uploadthing/react/dist/index.css\");\n/* harmony import */ var _uploadthingutil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uploadthingutil */ \"(app-pages-browser)/./src/app/uploadthingutil.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ProcessImage() {\n    _s();\n    const [imageText, setImageText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [imageFile, setImageFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchImageText() {\n            const result = await fetch(\"\".concat(\"http://localhost:8000\", \"/\"));\n            const json = await result.json();\n            console.log(json);\n            setImageText(json);\n        }\n    }, []);\n    function handleChange(e) {\n        setImageText(e.target.value);\n    }\n    let formData = new FormData();\n    async function handleSubmit(image) {\n        const res = await fetch(\"\".concat(\"http://localhost:8000\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: image\n        }).then(async (r)=>{\n            if (r.ok) {\n                const json = await r.json();\n                const jsonText = JSON.parse(json);\n                setImageText(jsonText);\n                alert(\"Image uploaded successfully\");\n            }\n        }).catch((e)=>{\n            alert(\"Upload Error! \".concat(e.message));\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto p-10 m-10\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto p-3 m-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uploadthingutil__WEBPACK_IMPORTED_MODULE_3__.UploadButton, {\n                            endpoint: \"imageUploader\",\n                            onClientUploadComplete: (result)=>{\n                                const uploadedImage = result;\n                                const filestr = \"file\";\n                                const fileJSON = JSON.parse(\"{\".concat(filestr, \": \").concat(uploadedImage, \"}\"));\n                                handleSubmit(fileJSON);\n                                alert(\"File uploaded successfully\");\n                            },\n                            onUploadError: (error)=>{\n                                alert(\"Upload Error! \".concat(error.message));\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            value: imageText,\n                            onChange: handleChange,\n                            className: \"border-2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(ProcessImage, \"Gx0gyPnCAdjlILgNypgWZCd61HM=\");\n_c = ProcessImage;\nvar _c;\n$RefreshReg$(_c, \"ProcessImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaW1hZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ0w7QUFDVTtBQUVsQyxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDUixlQUFlTztZQUNiLE1BQU1DLFNBQVMsTUFBTUMsTUFBTSxHQUFtQyxPQUFoQ0MsdUJBQStCLEVBQUM7WUFDOUQsTUFBTUcsT0FBTyxNQUFNTCxPQUFPSyxJQUFJO1lBQzlCQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pULGFBQWFTO1FBQ2Y7SUFDRixHQUFHLEVBQUU7SUFFTCxTQUFTRyxhQUFhQyxDQUFNO1FBQzFCYixhQUFhYSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFFQSxJQUFJQyxXQUFXLElBQUlDO0lBRW5CLGVBQWVDLGFBQWFDLEtBQVU7UUFDcEMsTUFBTUMsTUFBTSxNQUFNZixNQUFNLEdBQW1DLE9BQWhDQyx1QkFBK0IsR0FBSTtZQUM1RGUsUUFBUTtZQUNSQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtZQUM5Q0MsTUFBTUo7UUFDUixHQUNHSyxJQUFJLENBQUMsT0FBT0M7WUFDWCxJQUFJQSxFQUFFQyxFQUFFLEVBQUU7Z0JBQ1IsTUFBTWpCLE9BQU8sTUFBTWdCLEVBQUVoQixJQUFJO2dCQUN6QixNQUFNa0IsV0FBV0MsS0FBS0MsS0FBSyxDQUFDcEI7Z0JBQzVCVCxhQUFhMkI7Z0JBQ2JHLE1BQU07WUFDUjtRQUNGLEdBQ0NDLEtBQUssQ0FBQyxDQUFDbEI7WUFDTmlCLE1BQU0saUJBQTJCLE9BQVZqQixFQUFFbUIsT0FBTztRQUNsQztJQUNKO0lBRUEscUJBQ0UsOERBQUNDO2tCQUNDLDRFQUFDQTtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDckMsMERBQVlBOzRCQUNYc0MsVUFBUzs0QkFDVEMsd0JBQXdCLENBQUNoQztnQ0FDdkIsTUFBTWlDLGdCQUFnQmpDO2dDQUN0QixNQUFNa0MsVUFBVTtnQ0FDaEIsTUFBTUMsV0FBV1gsS0FBS0MsS0FBSyxDQUFDLElBQWdCUSxPQUFaQyxTQUFRLE1BQWtCLE9BQWRELGVBQWM7Z0NBQzFEbkIsYUFBYXFCO2dDQUNiVCxNQUFNOzRCQUNSOzRCQUNBVSxlQUFlLENBQUNDO2dDQUNkWCxNQUFNLGlCQUErQixPQUFkVyxNQUFNVCxPQUFPOzRCQUN0Qzs7Ozs7O3NDQUVGLDhEQUFDVTs0QkFDQzNCLE9BQU9oQjs0QkFDUDRDLFVBQVUvQjs0QkFDVnNCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94QjtHQWxFd0JwQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2ltYWdlLnRzeD8zNzRmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCJAdXBsb2FkdGhpbmcvcmVhY3Qvc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgeyBVcGxvYWRCdXR0b24gfSBmcm9tIFwiLi91cGxvYWR0aGluZ3V0aWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2Nlc3NJbWFnZSgpIHtcclxuICBjb25zdCBbaW1hZ2VUZXh0LCBzZXRJbWFnZVRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlRmlsZSwgc2V0SW1hZ2VGaWxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hJbWFnZVRleHQoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2ApO1xyXG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coanNvbik7XHJcbiAgICAgIHNldEltYWdlVGV4dChqc29uKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlOiBhbnkpIHtcclxuICAgIHNldEltYWdlVGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGltYWdlOiBhbnkpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9YCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGJvZHk6IGltYWdlLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oYXN5bmMgKHIpID0+IHtcclxuICAgICAgICBpZiAoci5vaykge1xyXG4gICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHIuanNvbigpO1xyXG4gICAgICAgICAgY29uc3QganNvblRleHQgPSBKU09OLnBhcnNlKGpzb24pO1xyXG4gICAgICAgICAgc2V0SW1hZ2VUZXh0KGpzb25UZXh0KTtcclxuICAgICAgICAgIGFsZXJ0KFwiSW1hZ2UgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoYFVwbG9hZCBFcnJvciEgJHtlLm1lc3NhZ2V9YCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC0xMCBtLTEwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gcC0zIG0tNVwiPlxyXG4gICAgICAgICAgICA8VXBsb2FkQnV0dG9uXHJcbiAgICAgICAgICAgICAgZW5kcG9pbnQ9XCJpbWFnZVVwbG9hZGVyXCJcclxuICAgICAgICAgICAgICBvbkNsaWVudFVwbG9hZENvbXBsZXRlPXsocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwbG9hZGVkSW1hZ2UgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlc3RyID0gXCJmaWxlXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlSlNPTiA9IEpTT04ucGFyc2UoYHske2ZpbGVzdHJ9OiAke3VwbG9hZGVkSW1hZ2V9fWApO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0KGZpbGVKU09OKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRmlsZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvblVwbG9hZEVycm9yPXsoZXJyb3I6IEVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgVXBsb2FkIEVycm9yISAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2ltYWdlVGV4dH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yXCJcclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlVwbG9hZEJ1dHRvbiIsIlByb2Nlc3NJbWFnZSIsImltYWdlVGV4dCIsInNldEltYWdlVGV4dCIsImltYWdlRmlsZSIsInNldEltYWdlRmlsZSIsImZldGNoSW1hZ2VUZXh0IiwicmVzdWx0IiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImhhbmRsZVN1Ym1pdCIsImltYWdlIiwicmVzIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJ0aGVuIiwiciIsIm9rIiwianNvblRleHQiLCJKU09OIiwicGFyc2UiLCJhbGVydCIsImNhdGNoIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImVuZHBvaW50Iiwib25DbGllbnRVcGxvYWRDb21wbGV0ZSIsInVwbG9hZGVkSW1hZ2UiLCJmaWxlc3RyIiwiZmlsZUpTT04iLCJvblVwbG9hZEVycm9yIiwiZXJyb3IiLCJ0ZXh0YXJlYSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/image.tsx\n"));

/***/ })

});