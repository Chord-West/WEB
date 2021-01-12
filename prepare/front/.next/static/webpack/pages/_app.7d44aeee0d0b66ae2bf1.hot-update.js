webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
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
      User: {
        nickname: 'nero'
      },
      comment: '우와 개정판이 나왔군요'
    }, {
      User: {
        nickname: 'hero'
      },
      comment: '얼른 사고싶어요'
    }]
  }],
  imagePaths: [],
  postAdded: false
};
var ADD_POST = 'ADD_POST';
var addPost = {
  type: ADD_POST
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImNvbW1lbnQiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJhZGRQb3N0IiwidHlwZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLFlBQVksR0FBRTtBQUN2QkMsV0FBUyxFQUFHLENBQUM7QUFDVEMsTUFBRSxFQUFHLENBREk7QUFFVEMsUUFBSSxFQUFFO0FBQ0ZELFFBQUUsRUFBQyxDQUREO0FBRUZFLGNBQVEsRUFBRztBQUZULEtBRkc7QUFNVEMsV0FBTyxFQUFFLHlCQU5BO0FBT1RDLFVBQU0sRUFBRyxDQUNMO0FBQUNDLFNBQUcsRUFBQztBQUFMLEtBREssRUFFTDtBQUFDQSxTQUFHLEVBQUM7QUFBTCxLQUZLLEVBR0w7QUFBQ0EsU0FBRyxFQUFDO0FBQUwsS0FISyxDQVBBO0FBWVRDLFlBQVEsRUFBQyxDQUFDO0FBQ1JMLFVBQUksRUFBQztBQUNEQyxnQkFBUSxFQUFFO0FBRFQsT0FERztBQUlOSyxhQUFPLEVBQUM7QUFKRixLQUFELEVBS1A7QUFDRU4sVUFBSSxFQUFDO0FBQ0RDLGdCQUFRLEVBQUU7QUFEVCxPQURQO0FBSUVLLGFBQU8sRUFBRTtBQUpYLEtBTE87QUFaQSxHQUFELENBRFc7QUF5QnZCQyxZQUFVLEVBQUMsRUF6Qlk7QUEwQnZCQyxXQUFTLEVBQUM7QUExQmEsQ0FBcEI7QUE2QlAsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ08sSUFBTUMsT0FBTyxHQUFHO0FBQ25CQyxNQUFJLEVBQUdGO0FBRFksQ0FBaEI7O0FBSVAsSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBZ0M7QUFBQSxNQUEvQkMsS0FBK0IsdUVBQXZCaEIsWUFBdUI7QUFBQSxNQUFWaUIsTUFBVTs7QUFDNUMsVUFBUUEsTUFBTSxDQUFDSCxJQUFmO0FBQ0ksU0FBS0YsUUFBTDtBQUNBO0FBQ0ksYUFBT0ksS0FBUDtBQUhSO0FBS0gsQ0FORDs7QUFRZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43ZDQ0YWVlZTBkMGI2NmFlMmJmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9e1xyXG4gICAgbWFpblBvc3RzIDogW3tcclxuICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgVXNlciA6e1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZSA6ICfsoJzroZzstIgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudCA6J+yyqyDrsojsp7gg6rKM7Iuc6riAICMg7ZW07Ims7YOc7YGsICMg7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgICBJbWFnZXMgOiBbXHJcbiAgICAgICAgICAgIHtzcmM6J2h0dHBzOi8vaS5pbWd1ci5jb20vQmY5N1dlRi5wbmcnfSxcclxuICAgICAgICAgICAge3NyYzonaHR0cHM6Ly9pLmltZ3VyLmNvbS9CZjk3V2VGLnBuZyd9LFxyXG4gICAgICAgICAgICB7c3JjOidodHRwczovL2kuaW1ndXIuY29tL0JmOTdXZUYucG5nJ30sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBDb21tZW50czpbe1xyXG4gICAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgICAgbmlja25hbWU6ICduZXJvJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbW1lbnQ6J+yasOyZgCDqsJzsoJXtjJDsnbQg64KY7JmU6rWw7JqUJyxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ2hlcm8nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21tZW50OiAn7Ja866W4IOyCrOqzoOyLtuyWtOyalCcsXHJcbiAgICAgICAgfV1cclxuICAgIH1dLFxyXG4gICAgaW1hZ2VQYXRoczpbXSxcclxuICAgIHBvc3RBZGRlZDpmYWxzZSxcclxufVxyXG5cclxuY29uc3QgQUREX1BPU1QgPSAnQUREX1BPU1QnO1xyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcclxuICAgIHR5cGUgOiBBRERfUE9TVCxcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSxhY3Rpb24pID0+e1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVDpcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=