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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProcessImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _uploadthing_react_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uploadthing/react/styles.css */ \"(app-pages-browser)/./node_modules/@uploadthing/react/dist/index.css\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _uploadthingutil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uploadthingutil */ \"(app-pages-browser)/./src/app/uploadthingutil.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProcessImage() {\n    _s();\n    const [imageText, setImageText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const formDataBody = __webpack_require__(/*! form-data-body */ \"(app-pages-browser)/./node_modules/form-data-body/index.js\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    function handleChange(e) {\n        setImageText(e.target.value);\n    }\n    const handleSubmit = async (req)=>{\n        console.log(req);\n        console.log(req[0]);\n        const formData = {\n            name: String(req[0].name),\n            url: String(req[0].fileUrl),\n            size: String(req[0].size)\n        };\n        const parsedFormData = JSON.stringify(formData, null, 4);\n        console.log(formData);\n        console.log(parsedFormData);\n        try {\n            const response = await fetch(\"\".concat(\"http://localhost:8000\", \"/\"), {\n                method: \"POST\",\n                body: parsedFormData,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const result = await response.json();\n            console.log(result);\n            handleChange(result[\"Image Text\"]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto p-10 m-10\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto p-3 m-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uploadthingutil__WEBPACK_IMPORTED_MODULE_4__.UploadButton, {\n                            endpoint: \"imageUploader\",\n                            onClientUploadComplete: (uploadedImage)=>{\n                                handleSubmit(uploadedImage);\n                                alert(\"File uploaded successfully\");\n                            },\n                            onUploadError: (error)=>{\n                                alert(\"Upload Error! \".concat(error.message));\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            value: imageText,\n                            onChange: handleChange,\n                            className: \"border-2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Code\\\\ocrdemo\\\\ocrfront\\\\src\\\\app\\\\image.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(ProcessImage, \"nxDcTH9WT7TobKRhowbLNb5of10=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ProcessImage;\nvar _c;\n$RefreshReg$(_c, \"ProcessImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaW1hZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFaUM7QUFDTTtBQUNLO0FBQ0s7QUFFbEMsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNTSxlQUFlQyxtQkFBT0EsQ0FBQyxrRkFBZ0I7SUFDN0MsTUFBTUMsU0FBU1AsMERBQVNBO0lBRXhCLFNBQVNRLGFBQWFDLENBQU07UUFDMUJMLGFBQWFLLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUM3QjtJQUVBLE1BQU1DLGVBQWUsT0FBT0M7UUFDMUJDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWkMsUUFBUUMsR0FBRyxDQUFDRixHQUFHLENBQUMsRUFBRTtRQUNsQixNQUFNRyxXQUFXO1lBQ2ZDLE1BQU1DLE9BQU9MLEdBQUcsQ0FBQyxFQUFFLENBQUNJLElBQUk7WUFDeEJFLEtBQUtELE9BQU9MLEdBQUcsQ0FBQyxFQUFFLENBQUNPLE9BQU87WUFDMUJDLE1BQU1ILE9BQU9MLEdBQUcsQ0FBQyxFQUFFLENBQUNRLElBQUk7UUFDMUI7UUFDQSxNQUFNQyxpQkFBaUJDLEtBQUtDLFNBQVMsQ0FBQ1IsVUFBVSxNQUFNO1FBQ3RERixRQUFRQyxHQUFHLENBQUNDO1FBQ1pGLFFBQVFDLEdBQUcsQ0FBQ087UUFFWixJQUFJO1lBQ0YsTUFBTUcsV0FBVyxNQUFNQyxNQUFNLEdBQW1DLE9BQWhDQyx1QkFBK0IsRUFBQyxNQUFJO2dCQUNsRUcsUUFBUTtnQkFDUkMsTUFBTVQ7Z0JBQ05VLFNBQVM7b0JBQUUsZ0JBQWdCO2dCQUFtQjtZQUNoRDtZQUNBLE1BQU1DLFNBQVMsTUFBTVIsU0FBU1MsSUFBSTtZQUNsQ3BCLFFBQVFDLEdBQUcsQ0FBQ2tCO1lBQ1p6QixhQUFheUIsTUFBTSxDQUFDLGFBQWE7UUFDbkMsRUFBRSxPQUFPRSxPQUFPO1lBQ2RyQixRQUFRQyxHQUFHLENBQUNvQjtRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNBO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNwQywwREFBWUE7NEJBQ1hxQyxVQUFTOzRCQUNUQyx3QkFBd0IsQ0FBQ0M7Z0NBQ3ZCNUIsYUFBYTRCO2dDQUNiQyxNQUFNOzRCQUNSOzRCQUNBQyxlQUFlLENBQUNQO2dDQUNkTSxNQUFNLGlCQUErQixPQUFkTixNQUFNUSxPQUFPOzRCQUN0Qzs7Ozs7O3NDQUVGLDhEQUFDQzs0QkFDQ2pDLE9BQU9SOzRCQUNQMEMsVUFBVXJDOzRCQUNWNkIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hCO0dBNUR3Qm5DOztRQUdQRixzREFBU0E7OztLQUhGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2ltYWdlLnRzeD8zNzRmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiQHVwbG9hZHRoaW5nL3JlYWN0L3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBVcGxvYWRCdXR0b24gfSBmcm9tIFwiLi91cGxvYWR0aGluZ3V0aWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2Nlc3NJbWFnZSgpIHtcclxuICBjb25zdCBbaW1hZ2VUZXh0LCBzZXRJbWFnZVRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgZm9ybURhdGFCb2R5ID0gcmVxdWlyZShcImZvcm0tZGF0YS1ib2R5XCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZTogYW55KSB7XHJcbiAgICBzZXRJbWFnZVRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKHJlcTogYW55KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXEpO1xyXG4gICAgY29uc29sZS5sb2cocmVxWzBdKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0ge1xyXG4gICAgICBuYW1lOiBTdHJpbmcocmVxWzBdLm5hbWUpLFxyXG4gICAgICB1cmw6IFN0cmluZyhyZXFbMF0uZmlsZVVybCksXHJcbiAgICAgIHNpemU6IFN0cmluZyhyZXFbMF0uc2l6ZSksXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcGFyc2VkRm9ybURhdGEgPSBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSwgbnVsbCwgNCk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhwYXJzZWRGb3JtRGF0YSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9gLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBwYXJzZWRGb3JtRGF0YSxcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIGhhbmRsZUNoYW5nZShyZXN1bHRbXCJJbWFnZSBUZXh0XCJdKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBwLTEwIG0tMTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBwLTMgbS01XCI+XHJcbiAgICAgICAgICAgIDxVcGxvYWRCdXR0b25cclxuICAgICAgICAgICAgICBlbmRwb2ludD1cImltYWdlVXBsb2FkZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpZW50VXBsb2FkQ29tcGxldGU9eyh1cGxvYWRlZEltYWdlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCh1cGxvYWRlZEltYWdlKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRmlsZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvblVwbG9hZEVycm9yPXsoZXJyb3I6IEVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgVXBsb2FkIEVycm9yISAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2ltYWdlVGV4dH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yXCJcclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlVwbG9hZEJ1dHRvbiIsIlByb2Nlc3NJbWFnZSIsImltYWdlVGV4dCIsInNldEltYWdlVGV4dCIsImZvcm1EYXRhQm9keSIsInJlcXVpcmUiLCJyb3V0ZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJyZXEiLCJjb25zb2xlIiwibG9nIiwiZm9ybURhdGEiLCJuYW1lIiwiU3RyaW5nIiwidXJsIiwiZmlsZVVybCIsInNpemUiLCJwYXJzZWRGb3JtRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsInJlc3VsdCIsImpzb24iLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImVuZHBvaW50Iiwib25DbGllbnRVcGxvYWRDb21wbGV0ZSIsInVwbG9hZGVkSW1hZ2UiLCJhbGVydCIsIm9uVXBsb2FkRXJyb3IiLCJtZXNzYWdlIiwidGV4dGFyZWEiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/image.tsx\n"));

/***/ })

});