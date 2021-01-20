webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Project\\WEB-Study\\React-Study\\prepare\\front\\components\\ImagesZoom\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  text-align: center;\n  &>div{\n    width: 75px;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 15px;\n    background: #313131;\n    display: inline-block;\n    text-align: center;\n    color: white;\n    font-size: 15px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  padding: 32px;\n  text-align: center;\n  &img{\n    margin: 0 auto;\n    max-height: 750px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    height: calc(100% - 44px);\n    background: #090909;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  headder:44px;\n  background: white;\n  position : relative;\n  padding: 0;\n  text-align: center;\n  & h1{\n    margin: 0;\n    font-size: 17px;\n    color:#333;\n    line-height: 44px;\n  }\n  &button{\n    position: relative;\n    right: 0;\n    top:0;\n    padding: 15px;\n    line-height: 14px;\n    cursor: pointer;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    position: fixed;\n    z-index: 5000;\n    top:0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
_c = Overlay;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].header(_templateObject2());
_c2 = Header;
var SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject3());
_c3 = SlickWrapper;
var ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].header(_templateObject4());
_c4 = ImgWrapper;
var Indicator = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject5());

var ImagesZoom = function ImagesZoom(_ref) {
  _s();

  var images = _ref.images,
      onClose = _ref.onClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      currentSlide = _useState[0],
      setCurrentSlide = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Overlay, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "\uC0C1\uC138\uC774\uBBF8\uC9C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: onClose,
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SlickWrapper, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, {
          initialSlide: 0,
          afterChange: function afterChange(slide) {
            return setCurrentSlide(slide);
          },
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          children: images.map(function (v) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ImgWrapper, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: v.src,
                alt: v.src
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 33
              }, _this)
            }, v.src, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 9
  }, _this);
};

_s(ImagesZoom, "sE4xlZhH97dGAc3DgtGOgBKnMZM=");

_c5 = ImagesZoom;
ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Overlay");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "SlickWrapper");
$RefreshReg$(_c4, "ImgWrapper");
$RefreshReg$(_c5, "ImagesZoom");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIl0sIm5hbWVzIjpbIk92ZXJsYXkiLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXIiLCJoZWFkZXIiLCJTbGlja1dyYXBwZXIiLCJJbWdXcmFwcGVyIiwiSW5kaWNhdG9yIiwiSW1hZ2VzWm9vbSIsImltYWdlcyIsIm9uQ2xvc2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlIiwibWFwIiwidiIsInNyYyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxPQUFPLEdBQUVDLHlEQUFNLENBQUNDLEdBQVQsbUJBQWI7S0FBTUYsTztBQVFOLElBQU1HLE1BQU0sR0FBRUYseURBQU0sQ0FBQ0csTUFBVCxvQkFBWjtNQUFNRCxNO0FBcUJOLElBQU1FLFlBQVksR0FBR0oseURBQU0sQ0FBQ0MsR0FBVixvQkFBbEI7TUFBTUcsWTtBQUtOLElBQU1DLFVBQVUsR0FBRUwseURBQU0sQ0FBQ0csTUFBVCxvQkFBaEI7TUFBTUUsVTtBQVFOLElBQU1DLFNBQVMsR0FBR04seURBQU0sQ0FBQ0MsR0FBVixvQkFBZjs7QUFlQSxJQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFxQjtBQUFBOztBQUFBLE1BQW5CQyxNQUFtQixRQUFuQkEsTUFBbUI7QUFBQSxNQUFaQyxPQUFZLFFBQVpBLE9BQVk7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUMsQ0FBRCxDQURYO0FBQUEsTUFDN0JDLFlBRDZCO0FBQUEsTUFDaEJDLGVBRGdCOztBQUdwQyxzQkFDSSxxRUFBQyxPQUFEO0FBQUEsNEJBQ0kscUVBQUMsTUFBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFRLGVBQU8sRUFBRUgsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUtJLHFFQUFDLFlBQUQ7QUFBQSw2QkFDSTtBQUFBLCtCQUNJLHFFQUFDLGtEQUFEO0FBQ0ksc0JBQVksRUFBRSxDQURsQjtBQUVJLHFCQUFXLEVBQUUscUJBQUNJLEtBQUQ7QUFBQSxtQkFBVUQsZUFBZSxDQUFDQyxLQUFELENBQXpCO0FBQUEsV0FGakI7QUFHSSxrQkFBUSxNQUhaO0FBSUksZ0JBQU0sRUFBRSxLQUpaO0FBS0ksc0JBQVksRUFBRSxDQUxsQjtBQU1JLHdCQUFjLEVBQUUsQ0FOcEI7QUFBQSxvQkFRS0wsTUFBTSxDQUFDTSxHQUFQLENBQVcsVUFBQ0MsQ0FBRDtBQUFBLGdDQUNSLHFFQUFDLFVBQUQ7QUFBQSxxQ0FDSTtBQUFLLG1CQUFHLEVBQUVBLENBQUMsQ0FBQ0MsR0FBWjtBQUFpQixtQkFBRyxFQUFFRCxDQUFDLENBQUNDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixlQUFpQkQsQ0FBQyxDQUFDQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURRO0FBQUEsV0FBWDtBQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMEJILENBN0JEOztHQUFNVCxVOztNQUFBQSxVO0FBZ0NOQSxVQUFVLENBQUNVLFNBQVgsR0FBdUI7QUFDbkJULFFBQU0sRUFBQ1UsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ0UsTUFBNUIsRUFBb0NDLFVBRHhCO0FBRW5CWixTQUFPLEVBQUNTLGlEQUFTLENBQUNJLElBQVYsQ0FBZUQ7QUFGSixDQUF2QjtBQUtlZCx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNDdlZWFjOTZhMzAzZmM5YmY1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgU2xpY2sgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5jb25zdCBPdmVybGF5ID1zdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogNTAwMDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG5gO1xyXG5jb25zdCBIZWFkZXIgPXN0eWxlZC5oZWFkZXJgXHJcbiAgaGVhZGRlcjo0NHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgJiBoMXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiMzMzM7XHJcbiAgICBsaW5lLWhlaWdodDogNDRweDtcclxuICB9XHJcbiAgJmJ1dHRvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOjA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTbGlja1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NHB4KTtcclxuICAgIGJhY2tncm91bmQ6ICMwOTA5MDk7XHJcbmA7XHJcblxyXG5jb25zdCBJbWdXcmFwcGVyID1zdHlsZWQuaGVhZGVyYFxyXG4gIHBhZGRpbmc6IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICZpbWd7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDc1MHB4O1xyXG4gIH1cclxuYDtcclxuY29uc3QgSW5kaWNhdG9yID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgJj5kaXZ7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICMzMTMxMzE7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VzWm9vbSA9ICh7aW1hZ2VzLG9uQ2xvc2V9KSA9PntcclxuICAgIGNvbnN0IFtjdXJyZW50U2xpZGUsc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8T3ZlcmxheT5cclxuICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoMT7sg4HshLjsnbTrr7jsp4A8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT5YPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8U2xpY2tXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlckNoYW5nZT17KHNsaWRlKT0+IHNldEN1cnJlbnRTbGlkZShzbGlkZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdz17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW1hZ2VzLm1hcCgodik9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWdXcmFwcGVyIGtleT17di5zcmN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2LnNyY30gYWx0PXt2LnNyY30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWdXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1NsaWNrPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU2xpY2tXcmFwcGVyPlxyXG4gICAgICAgIDwvT3ZlcmxheT5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5JbWFnZXNab29tLnByb3BUeXBlcyA9IHtcclxuICAgIGltYWdlczpQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gICAgb25DbG9zZTpQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlc1pvb207Il0sInNvdXJjZVJvb3QiOiIifQ==