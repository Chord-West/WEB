webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\Users\\user\\Desktop\\Project\\WEB-Study\\React-Study\\prepare\\front\\components\\PostImages.js",
    _this = undefined,
    _s = $RefreshSig$();




var PostImages = function PostImages(_ref) {
  _s();

  var images = _ref.images;
  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setShowImagesZoom(true);
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showImagesZoom = _useState[0],
      setShowImagesZoom = _useState[1];

  if (images.length === 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        role: "presentation",
        src: images[0].src,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, _this)
    }, void 0, false);
  }

  if (images.length === 2) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        role: "presentation",
        width: "50%",
        src: images[0].src,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        role: "presentation",
        width: "50%",
        src: images[1].src,
        alt: images[1].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "\uAD6C\uD604\uC911"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, _this);
};

_s(PostImages, "6fM0KzUJ3NeAwQCAtUmg5xYL5y0=");

_c = PostImages;
PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

var _c;

$RefreshReg$(_c, "PostImages");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIlBvc3RJbWFnZXMiLCJpbWFnZXMiLCJvblpvb20iLCJ1c2VDYWxsYmFjayIsInNldFNob3dJbWFnZXNab29tIiwidXNlU3RhdGUiLCJzaG93SW1hZ2VzWm9vbSIsImxlbmd0aCIsInNyYyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFDLFNBQVhBLFVBQVcsT0FBWTtBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUN6QixNQUFNQyxNQUFNLEdBQUdDLHlEQUFXLENBQUMsWUFBSTtBQUMzQkMscUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNILEdBRnlCLEVBRXhCLEVBRndCLENBQTFCOztBQUR5QixrQkFJa0JDLHNEQUFRLENBQUMsS0FBRCxDQUoxQjtBQUFBLE1BSWxCQyxjQUprQjtBQUFBLE1BSUZGLGlCQUpFOztBQUt6QixNQUFJSCxNQUFNLENBQUNNLE1BQVAsS0FBZ0IsQ0FBcEIsRUFBc0I7QUFDbEIsd0JBQ0k7QUFBQSw2QkFDSTtBQUFLLFlBQUksRUFBQyxjQUFWO0FBQXlCLFdBQUcsRUFBRU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVTyxHQUF4QztBQUE2QyxXQUFHLEVBQUVQLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVU8sR0FBNUQ7QUFBaUUsZUFBTyxFQUFFTjtBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoscUJBREo7QUFNSDs7QUFDRCxNQUFJRCxNQUFNLENBQUNNLE1BQVAsS0FBZ0IsQ0FBcEIsRUFBc0I7QUFDbEIsd0JBQ0k7QUFBQSw4QkFDSTtBQUFLLFlBQUksRUFBQyxjQUFWO0FBQXlCLGFBQUssRUFBQyxLQUEvQjtBQUFxQyxXQUFHLEVBQUVOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVU8sR0FBcEQ7QUFBeUQsV0FBRyxFQUFFUCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVPLEdBQXhFO0FBQTZFLGVBQU8sRUFBRU47QUFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBSyxZQUFJLEVBQUMsY0FBVjtBQUF5QixhQUFLLEVBQUMsS0FBL0I7QUFBcUMsV0FBRyxFQUFFRCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVPLEdBQXBEO0FBQXlELFdBQUcsRUFBRVAsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVTyxHQUF4RTtBQUE2RSxlQUFPLEVBQUVOO0FBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBLG9CQURKO0FBT0g7O0FBQ0Qsc0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBNUJEOztHQUFNRixVOztLQUFBQSxVO0FBOEJOQSxVQUFVLENBQUNTLFNBQVgsR0FBcUI7QUFDakJSLFFBQU0sRUFBR1MsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ0UsTUFBNUI7QUFEUSxDQUFyQjtBQUllWix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iOTU0NTAwZGFiYTBhZGJlMjhiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VDYWxsYmFjayx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgUG9zdEltYWdlcz0oe2ltYWdlc30pPT57XHJcbiAgICBjb25zdCBvblpvb20gPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIHNldFNob3dJbWFnZXNab29tKHRydWUpO1xyXG4gICAgfSxbXSk7XHJcbiAgICBjb25zdCBbc2hvd0ltYWdlc1pvb20sIHNldFNob3dJbWFnZXNab29tXT0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgaWYgKGltYWdlcy5sZW5ndGg9PT0xKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzcmM9e2ltYWdlc1swXS5zcmN9IGFsdD17aW1hZ2VzWzBdLnNyY30gb25DbGljaz17b25ab29tfS8+XHJcbiAgICAgICAgICAgIDwvPlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKGltYWdlcy5sZW5ndGg9PT0yKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiB3aWR0aD1cIjUwJVwiIHNyYz17aW1hZ2VzWzBdLnNyY30gYWx0PXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219Lz5cclxuICAgICAgICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHdpZHRoPVwiNTAlXCIgc3JjPXtpbWFnZXNbMV0uc3JjfSBhbHQ9e2ltYWdlc1sxXS5zcmN9IG9uQ2xpY2s9e29uWm9vbX0vPlxyXG4gICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICDqtaztmITspJFcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5Qb3N0SW1hZ2VzLnByb3BUeXBlcz17XHJcbiAgICBpbWFnZXMgOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlczsiXSwic291cmNlUm9vdCI6IiJ9