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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImagesZoom */ "./components/ImagesZoom/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




var _jsxFileName = "C:\\Users\\user\\Desktop\\Project\\WEB-Study\\React-Study\\prepare\\front\\components\\PostImages.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    position: fixed;\n    z-index: 5000;\n    top:0;\n    left: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());

var PostImages = function PostImages(_ref) {
  _s();

  var images = _ref.images;
  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setShowImagesZoom(true);
  }, []);
  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setShowImagesZoom(false);
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showImagesZoom = _useState[0],
      setShowImagesZoom = _useState[1];

  if (images.length === 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        role: "presentation",
        src: images[0].src,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_5__["default"], {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 36
      }, _this)]
    }, void 0, true);
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
        lineNumber: 35,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        role: "presentation",
        width: "50%",
        src: images[1].src,
        alt: images[1].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_5__["default"], {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 36
      }, _this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        role: "presentation",
        width: "50%",
        src: images[0].src,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        role: "presentaion",
        style: {
          display: 'inline-block',
          width: '50%',
          textAlign: 'center',
          verticalAlign: 'middle'
        },
        onClick: onZoom,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["PlusOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this), images.length - 1, " \uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_5__["default"], {
      images: images,
      onClose: onClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 32
    }, _this)]
  }, void 0, true);
};

_s(PostImages, "IIqO8rCvLeF3rX2Bms2C4Cl7RGI=");

_c = PostImages;
PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIk92ZXJsYXkiLCJzdHlsZWQiLCJkaXYiLCJQb3N0SW1hZ2VzIiwiaW1hZ2VzIiwib25ab29tIiwidXNlQ2FsbGJhY2siLCJzZXRTaG93SW1hZ2VzWm9vbSIsIm9uQ2xvc2UiLCJ1c2VTdGF0ZSIsInNob3dJbWFnZXNab29tIiwibGVuZ3RoIiwic3JjIiwiZGlzcGxheSIsIndpZHRoIiwidGV4dEFsaWduIiwidmVydGljYWxBbGlnbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUVDLHlEQUFNLENBQUNDLEdBQVQsbUJBQWI7O0FBUUEsSUFBTUMsVUFBVSxHQUFDLFNBQVhBLFVBQVcsT0FBWTtBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUN6QixNQUFNQyxNQUFNLEdBQUdDLHlEQUFXLENBQUMsWUFBSTtBQUMzQkMscUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNILEdBRnlCLEVBRXhCLEVBRndCLENBQTFCO0FBR0EsTUFBTUMsT0FBTyxHQUFHRix5REFBVyxDQUFDLFlBQUk7QUFDNUJDLHFCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDSCxHQUYwQixFQUV6QixFQUZ5QixDQUEzQjs7QUFKeUIsa0JBT2tCRSxzREFBUSxDQUFDLEtBQUQsQ0FQMUI7QUFBQSxNQU9sQkMsY0FQa0I7QUFBQSxNQU9GSCxpQkFQRTs7QUFRekIsTUFBSUgsTUFBTSxDQUFDTyxNQUFQLEtBQWdCLENBQXBCLEVBQXNCO0FBQ2xCLHdCQUNJO0FBQUEsOEJBQ0k7QUFBSyxZQUFJLEVBQUMsY0FBVjtBQUF5QixXQUFHLEVBQUVQLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FBeEM7QUFBNkMsV0FBRyxFQUFFUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVRLEdBQTVEO0FBQWlFLGVBQU8sRUFBRVA7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUtLLGNBQWMsaUJBQUkscUVBQUMsbURBQUQ7QUFBWSxjQUFNLEVBQUVOLE1BQXBCO0FBQTRCLGVBQU8sRUFBRUk7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZ2QjtBQUFBLG9CQURKO0FBT0g7O0FBQ0QsTUFBSUosTUFBTSxDQUFDTyxNQUFQLEtBQWdCLENBQXBCLEVBQXNCO0FBQ2xCLHdCQUNJO0FBQUEsOEJBQ0k7QUFBSyxZQUFJLEVBQUMsY0FBVjtBQUF5QixhQUFLLEVBQUMsS0FBL0I7QUFBcUMsV0FBRyxFQUFFUCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVRLEdBQXBEO0FBQXlELFdBQUcsRUFBRVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUF4RTtBQUE2RSxlQUFPLEVBQUVQO0FBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUssWUFBSSxFQUFDLGNBQVY7QUFBeUIsYUFBSyxFQUFDLEtBQS9CO0FBQXFDLFdBQUcsRUFBRUQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUFwRDtBQUF5RCxXQUFHLEVBQUVSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FBeEU7QUFBNkUsZUFBTyxFQUFFUDtBQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosRUFHS0ssY0FBYyxpQkFBSSxxRUFBQyxtREFBRDtBQUFZLGNBQU0sRUFBRU4sTUFBcEI7QUFBNEIsZUFBTyxFQUFFSTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSHZCO0FBQUEsb0JBREo7QUFRSDs7QUFDRCxzQkFDSTtBQUFBLDRCQUNJO0FBQUEsOEJBQ0k7QUFBSyxZQUFJLEVBQUMsY0FBVjtBQUF5QixhQUFLLEVBQUMsS0FBL0I7QUFBcUMsV0FBRyxFQUFFSixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVRLEdBQXBEO0FBQXlELFdBQUcsRUFBRVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUF4RTtBQUE2RSxlQUFPLEVBQUVQO0FBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQ0ksWUFBSSxFQUFDLGFBRFQ7QUFFSSxhQUFLLEVBQUU7QUFBQ1EsaUJBQU8sRUFBQyxjQUFUO0FBQXdCQyxlQUFLLEVBQUMsS0FBOUI7QUFBb0NDLG1CQUFTLEVBQUMsUUFBOUM7QUFBdURDLHVCQUFhLEVBQUM7QUFBckUsU0FGWDtBQUdJLGVBQU8sRUFBRVgsTUFIYjtBQUFBLGdDQUtJLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KLEVBT0tELE1BQU0sQ0FBQ08sTUFBUCxHQUFjLENBUG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBYUtELGNBQWMsaUJBQUkscUVBQUMsbURBQUQ7QUFBWSxZQUFNLEVBQUVOLE1BQXBCO0FBQTRCLGFBQU8sRUFBRUk7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJ2QjtBQUFBLGtCQURKO0FBa0JILENBN0NEOztHQUFNTCxVOztLQUFBQSxVO0FBK0NOQSxVQUFVLENBQUNjLFNBQVgsR0FBcUI7QUFDakJiLFFBQU0sRUFBR2MsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ0UsTUFBNUI7QUFEUSxDQUFyQjtBQUllakIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTg2YjZmNzlkZTdlMmU4ODRkMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlQ2FsbGJhY2ssdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtQbHVzT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEltYWdlc1pvb20gZnJvbSBcIi4vSW1hZ2VzWm9vbVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IE92ZXJsYXkgPXN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA1MDAwO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OiAwO1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IFBvc3RJbWFnZXM9KHtpbWFnZXN9KT0+e1xyXG4gICAgY29uc3Qgb25ab29tID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBzZXRTaG93SW1hZ2VzWm9vbSh0cnVlKTtcclxuICAgIH0sW10pO1xyXG4gICAgY29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgc2V0U2hvd0ltYWdlc1pvb20oZmFsc2UpO1xyXG4gICAgfSxbXSk7XHJcbiAgICBjb25zdCBbc2hvd0ltYWdlc1pvb20sIHNldFNob3dJbWFnZXNab29tXT0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgaWYgKGltYWdlcy5sZW5ndGg9PT0xKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzcmM9e2ltYWdlc1swXS5zcmN9IGFsdD17aW1hZ2VzWzBdLnNyY30gb25DbGljaz17b25ab29tfS8+XHJcbiAgICAgICAgICAgICAgICB7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlc1pvb20gaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9Lz59XHJcbiAgICAgICAgICAgIDwvPlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKGltYWdlcy5sZW5ndGg9PT0yKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiB3aWR0aD1cIjUwJVwiIHNyYz17aW1hZ2VzWzBdLnNyY30gYWx0PXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219Lz5cclxuICAgICAgICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHdpZHRoPVwiNTAlXCIgc3JjPXtpbWFnZXNbMV0uc3JjfSBhbHQ9e2ltYWdlc1sxXS5zcmN9IG9uQ2xpY2s9e29uWm9vbX0vPlxyXG4gICAgICAgICAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfS8+fVxyXG4gICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyByb2xlPVwicHJlc2VudGF0aW9uXCIgd2lkdGg9XCI1MCVcIiBzcmM9e2ltYWdlc1swXS5zcmN9IGFsdD17aW1hZ2VzWzBdLnNyY30gb25DbGljaz17b25ab29tfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhaW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsd2lkdGg6JzUwJScsdGV4dEFsaWduOidjZW50ZXInLHZlcnRpY2FsQWxpZ246J21pZGRsZSd9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8UGx1c091dGxpbmVkLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoLTF9IOqwnOydmCDsgqzsp4Qg642U67O06riwXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0vPn1cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5Qb3N0SW1hZ2VzLnByb3BUeXBlcz17XHJcbiAgICBpbWFnZXMgOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlczsiXSwic291cmNlUm9vdCI6IiJ9