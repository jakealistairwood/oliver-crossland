"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(site)/page",{

/***/ "(app-pages-browser)/./layouts/ComponentRenderer.jsx":
/*!***************************************!*\
  !*** ./layouts/ComponentRenderer.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var _components_Masthead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Masthead */ \"(app-pages-browser)/./components/Masthead.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst ScalableImageOnScroll = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_c = ()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_components_ScalableImageOnScroll_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/ScalableImageOnScroll */ \"(app-pages-browser)/./components/ScalableImageOnScroll.jsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"/Users/jakewood/Freelance/olicrossland/layouts/ComponentRenderer.jsx -> \" + \"@/components/ScalableImageOnScroll\"\n        ]\n    }\n});\n_c1 = ScalableImageOnScroll;\nconst ScrollableText = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_c2 = ()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_components_ScrollableText_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/ScrollableText */ \"(app-pages-browser)/./components/ScrollableText.jsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"/Users/jakewood/Freelance/olicrossland/layouts/ComponentRenderer.jsx -> \" + \"@/components/ScrollableText\"\n        ]\n    }\n});\n_c3 = ScrollableText;\nconst ComponentRenderer = (param)=>{\n    let { components = [] } = param;\n    const renderComponent = (layoutName, props)=>{\n        const Component = {\n            masthead: _components_Masthead__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            scalableImageOnScroll: ScalableImageOnScroll,\n            scrollableText: ScrollableText\n        }[layoutName];\n        return Component ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...props\n        }, \"\".concat(props.key), false, {\n            fileName: \"/Users/jakewood/Freelance/olicrossland/layouts/ComponentRenderer.jsx\",\n            lineNumber: 16,\n            columnNumber: 28\n        }, undefined) : null;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: components === null || components === void 0 ? void 0 : components.map((layout, index)=>{\n            const layoutName = layout.component;\n            console.log(layoutName);\n            const key = layout === null || layout === void 0 ? void 0 : layout._key;\n            return renderComponent(layoutName, {\n                ...layout[layoutName],\n                key\n            });\n        })\n    }, void 0, false);\n};\n_c4 = ComponentRenderer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComponentRenderer);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"ScalableImageOnScroll$dynamic\");\n$RefreshReg$(_c1, \"ScalableImageOnScroll\");\n$RefreshReg$(_c2, \"ScrollableText$dynamic\");\n$RefreshReg$(_c3, \"ScrollableText\");\n$RefreshReg$(_c4, \"ComponentRenderer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xheW91dHMvQ29tcG9uZW50UmVuZGVyZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBRW1DO0FBQ1M7QUFDNUMsTUFBTUUsd0JBQXdCRix3REFBT0EsTUFBQyxJQUFNLDRQQUE0Qzs7Ozs7Ozs7QUFDeEYsTUFBTUcsaUJBQWlCSCx3REFBT0EsT0FBQyxJQUFNLHVPQUFxQzs7Ozs7Ozs7QUFFMUUsTUFBTUksb0JBQW9CO1FBQUMsRUFBRUMsYUFBYSxFQUFFLEVBQUU7SUFDMUMsTUFBTUMsa0JBQWtCLENBQUNDLFlBQVlDO1FBQ2pDLE1BQU1DLFlBQVk7WUFDZEMsVUFBVVQsNERBQVFBO1lBQ2xCVSx1QkFBdUJUO1lBQ3ZCVSxnQkFBZ0JUO1FBQ3BCLENBQUMsQ0FBQ0ksV0FBVztRQUViLE9BQU9FLDBCQUFZLDhEQUFDQTtZQUFnQyxHQUFHRCxLQUFLO1dBQXpCLEdBQWEsT0FBVkEsTUFBTUssR0FBRzs7Ozt3QkFBcUI7SUFDeEU7SUFFQSxxQkFDSTtrQkFDS1IsdUJBQUFBLGlDQUFBQSxXQUFZUyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUM7WUFDdEIsTUFBTVQsYUFBYVEsT0FBT0UsU0FBUztZQUNuQ0MsUUFBUUMsR0FBRyxDQUFDWjtZQUNaLE1BQU1NLE1BQU1FLG1CQUFBQSw2QkFBQUEsT0FBUUssSUFBSTtZQUN4QixPQUFPZCxnQkFBZ0JDLFlBQVk7Z0JBQUUsR0FBR1EsTUFBTSxDQUFDUixXQUFXO2dCQUFFTTtZQUFJO1FBQ3BFOztBQUdaO01BckJNVDtBQXVCTiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dHMvQ29tcG9uZW50UmVuZGVyZXIuanN4P2RkODQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCBNYXN0aGVhZCBmcm9tIFwiQC9jb21wb25lbnRzL01hc3RoZWFkXCJcbmNvbnN0IFNjYWxhYmxlSW1hZ2VPblNjcm9sbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiQC9jb21wb25lbnRzL1NjYWxhYmxlSW1hZ2VPblNjcm9sbFwiKSk7XG5jb25zdCBTY3JvbGxhYmxlVGV4dCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiQC9jb21wb25lbnRzL1Njcm9sbGFibGVUZXh0XCIpKTtcblxuY29uc3QgQ29tcG9uZW50UmVuZGVyZXIgPSAoeyBjb21wb25lbnRzID0gW10gfSkgPT4ge1xuICAgIGNvbnN0IHJlbmRlckNvbXBvbmVudCA9IChsYXlvdXROYW1lLCBwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSB7XG4gICAgICAgICAgICBtYXN0aGVhZDogTWFzdGhlYWQsXG4gICAgICAgICAgICBzY2FsYWJsZUltYWdlT25TY3JvbGw6IFNjYWxhYmxlSW1hZ2VPblNjcm9sbCxcbiAgICAgICAgICAgIHNjcm9sbGFibGVUZXh0OiBTY3JvbGxhYmxlVGV4dCxcbiAgICAgICAgfVtsYXlvdXROYW1lXTtcblxuICAgICAgICByZXR1cm4gQ29tcG9uZW50ID8gPENvbXBvbmVudCBrZXk9e2Ake3Byb3BzLmtleX1gfSB7Li4ucHJvcHN9ICAvPiA6IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtjb21wb25lbnRzPy5tYXAoKGxheW91dCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXlvdXROYW1lID0gbGF5b3V0LmNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsYXlvdXROYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBsYXlvdXQ/Ll9rZXk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckNvbXBvbmVudChsYXlvdXROYW1lLCB7IC4uLmxheW91dFtsYXlvdXROYW1lXSwga2V5IH0pO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50UmVuZGVyZXI7Il0sIm5hbWVzIjpbImR5bmFtaWMiLCJNYXN0aGVhZCIsIlNjYWxhYmxlSW1hZ2VPblNjcm9sbCIsIlNjcm9sbGFibGVUZXh0IiwiQ29tcG9uZW50UmVuZGVyZXIiLCJjb21wb25lbnRzIiwicmVuZGVyQ29tcG9uZW50IiwibGF5b3V0TmFtZSIsInByb3BzIiwiQ29tcG9uZW50IiwibWFzdGhlYWQiLCJzY2FsYWJsZUltYWdlT25TY3JvbGwiLCJzY3JvbGxhYmxlVGV4dCIsImtleSIsIm1hcCIsImxheW91dCIsImluZGV4IiwiY29tcG9uZW50IiwiY29uc29sZSIsImxvZyIsIl9rZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./layouts/ComponentRenderer.jsx\n"));

/***/ })

});