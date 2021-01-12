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
    Comments: [{}]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU8sSUFBTUEsWUFBWSxHQUFFO0FBQ3ZCQyxXQUFTLEVBQUcsQ0FBQztBQUNUQyxNQUFFLEVBQUcsQ0FESTtBQUVUQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFDLENBREQ7QUFFRkUsY0FBUSxFQUFHO0FBRlQsS0FGRztBQU1UQyxXQUFPLEVBQUUseUJBTkE7QUFPVEMsVUFBTSxFQUFHLENBQ0w7QUFBQ0MsU0FBRyxFQUFDO0FBQUwsS0FESyxFQUVMO0FBQUNBLFNBQUcsRUFBQztBQUFMLEtBRkssRUFHTDtBQUFDQSxTQUFHLEVBQUM7QUFBTCxLQUhLLENBUEE7QUFZVEMsWUFBUSxFQUFDLENBQUMsRUFBRDtBQVpBLEdBQUQ7QUFEVyxDQUFwQjs7QUFvQlAsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBZ0M7QUFBQSxNQUEvQkMsS0FBK0IsdUVBQXZCVixZQUF1QjtBQUFBLE1BQVZXLE1BQVU7O0FBQzVDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJO0FBQ0ksYUFBT0YsS0FBUDtBQUZSO0FBSUgsQ0FMRDs7QUFPZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zYWUxMTU5YWI2ZjJiMTI0NWE2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9e1xyXG4gICAgbWFpblBvc3RzIDogW3tcclxuICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgVXNlciA6e1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZSA6ICfsoJzroZzstIgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudCA6J+yyqyDrsojsp7gg6rKM7Iuc6riAICMg7ZW07Ims7YOc7YGsICMg7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgICBJbWFnZXMgOiBbXHJcbiAgICAgICAgICAgIHtzcmM6J2h0dHBzOi8vaS5pbWd1ci5jb20vQmY5N1dlRi5wbmcnfSxcclxuICAgICAgICAgICAge3NyYzonaHR0cHM6Ly9pLmltZ3VyLmNvbS9CZjk3V2VGLnBuZyd9LFxyXG4gICAgICAgICAgICB7c3JjOidodHRwczovL2kuaW1ndXIuY29tL0JmOTdXZUYucG5nJ30sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBDb21tZW50czpbe31cclxuXHJcbiAgICAgICAgXVxyXG4gICAgfV0sXHJcblxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLGFjdGlvbikgPT57XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=