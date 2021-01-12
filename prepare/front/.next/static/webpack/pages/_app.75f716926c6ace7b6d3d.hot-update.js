webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '제로초'
    },
    content: '첫 번째 게시글 # 해쉬태크 # 익스프레스',
    Images: [{
      src: 'https://i.imgur.com/Bf97WeF.png'
    }, {
      src: 'https://i.imgur.com/Bf97WeF.png'
    }, {
      src: 'https://i.imgur.com/Bf97WeF.png'
    }],
    Comments: [{
      User: {},
      comment: comment
    }]
  }]
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFPLElBQU1BLFlBQVksR0FBRTtBQUN2QkMsV0FBUyxFQUFHLENBQUM7QUFDVEMsTUFBRSxFQUFHLENBREk7QUFFVEMsUUFBSSxFQUFFO0FBQ0ZELFFBQUUsRUFBQyxDQUREO0FBRUZFLGNBQVEsRUFBRztBQUZULEtBRkc7QUFNVEMsV0FBTyxFQUFFLHlCQU5BO0FBT1RDLFVBQU0sRUFBRyxDQUNMO0FBQUNDLFNBQUcsRUFBQztBQUFMLEtBREssRUFFTDtBQUFDQSxTQUFHLEVBQUM7QUFBTCxLQUZLLEVBR0w7QUFBQ0EsU0FBRyxFQUFDO0FBQUwsS0FISyxDQVBBO0FBWVRDLFlBQVEsRUFBQyxDQUFDO0FBQ1JMLFVBQUksRUFBQyxFQURHO0FBSU5NLGFBQU8sRUFBUEE7QUFKTSxLQUFEO0FBWkEsR0FBRDtBQURXLENBQXBCOztBQXVCUCxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFnQztBQUFBLE1BQS9CQyxLQUErQix1RUFBdkJYLFlBQXVCO0FBQUEsTUFBVlksTUFBVTs7QUFDNUMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0k7QUFDSSxhQUFPRixLQUFQO0FBRlI7QUFJSCxDQUxEOztBQU9lRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjc1ZjcxNjkyNmM2YWNlN2I2ZDNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID17XHJcbiAgICBtYWluUG9zdHMgOiBbe1xyXG4gICAgICAgIGlkIDogMSxcclxuICAgICAgICBVc2VyIDp7XHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lIDogJ+ygnOuhnOy0iCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50IDon7LKrIOuyiOynuCDqsozsi5zquIAgIyDtlbTsiaztg5ztgawgIyDsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgICAgIEltYWdlcyA6IFtcclxuICAgICAgICAgICAge3NyYzonaHR0cHM6Ly9pLmltZ3VyLmNvbS9CZjk3V2VGLnBuZyd9LFxyXG4gICAgICAgICAgICB7c3JjOidodHRwczovL2kuaW1ndXIuY29tL0JmOTdXZUYucG5nJ30sXHJcbiAgICAgICAgICAgIHtzcmM6J2h0dHBzOi8vaS5pbWd1ci5jb20vQmY5N1dlRi5wbmcnfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIENvbW1lbnRzOlt7XHJcbiAgICAgICAgICBVc2VyOntcclxuXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21tZW50XHJcbiAgICAgICAgfV1cclxuICAgIH1dLFxyXG5cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSxhY3Rpb24pID0+e1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9