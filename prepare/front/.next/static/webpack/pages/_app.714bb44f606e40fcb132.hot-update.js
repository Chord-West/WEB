webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  user: {},
  post: {}
};
var loginAction = function loginAction(data) {
  return {
    type: 'LOG_IN',
    data: data
  };
};
var logoutAction = function logoutAction() {
  return {
    type: 'LOG_OUT'
  };
}; //데이터를 바꾸고 싶으면 Action을 만들어 주면 된다.
// const changeNickname = {
//     type : 'CHANGE_NICKNAME',
//     data : 'boogicho',
// }
// 데이터를 정적으로 바꾸는것보단 객체를 액션으로 만들어 동적으로 바꾸는게 좋다. (Action Creator )

var changeNickname = function changeNickname(data) {
  return {
    type: 'CHANGE_NICKNAME',
    data: data
  };
}; //  ex ) changeNickname('hyeonseo');
// (이전상태, 액션 ) => 다음상태


var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      console.log('HYDRATE', action);
      return _objectSpread(_objectSpread({}, state), action.payload);

    case 'LOG_IN':
      return _objectSpread(_objectSpread({}, state), {}, {
        // 참조 관계 유지
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          isLoggedIn: true,
          user: action.data
        })
      });

    case 'LOG_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          isLoggedIn: false,
          user: null
        })
      });

    default:
      // 초기화할때 없으면 undefined가 됨
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsInBvc3QiLCJsb2dpbkFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0QWN0aW9uIiwiY2hhbmdlTmlja25hbWUiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiaXNMb2dnZWRJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUU7QUFDaEJDLE1BQUksRUFBQyxFQURXO0FBR2hCQyxNQUFJLEVBQUc7QUFIUyxDQUFwQjtBQU9PLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBUztBQUNoQyxTQUFNO0FBQ0ZDLFFBQUksRUFBRSxRQURKO0FBRUZELFFBQUksRUFBSkE7QUFGRSxHQUFOO0FBSUgsQ0FMTTtBQU9BLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQUs7QUFDN0IsU0FBTTtBQUNGRCxRQUFJLEVBQUU7QUFESixHQUFOO0FBR0gsQ0FKTSxDLENBTVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0gsSUFBRCxFQUFTO0FBQzVCLFNBQU07QUFDRkMsUUFBSSxFQUFHLGlCQURMO0FBRUZELFFBQUksRUFBSkE7QUFGRSxHQUFOO0FBSUgsQ0FMRCxDLENBTUE7QUFFQTs7O0FBQ0EsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBK0I7QUFBQSxNQUE5QkMsS0FBOEIsdUVBQXZCVCxZQUF1QjtBQUFBLE1BQVZVLE1BQVU7O0FBQy9DLFVBQVFBLE1BQU0sQ0FBQ0wsSUFBZjtBQUNJLFNBQUtNLDBEQUFMO0FBQ0lDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBc0JILE1BQXRCO0FBQ0EsNkNBQVdELEtBQVgsR0FBb0JDLE1BQU0sQ0FBQ0ksT0FBM0I7O0FBQ0osU0FBSyxRQUFMO0FBQ0ksNkNBQ09MLEtBRFA7QUFDYztBQUNWUixZQUFJLGtDQUNHUSxLQUFLLENBQUNSLElBRFQ7QUFFQWMsb0JBQVUsRUFBRyxJQUZiO0FBR0FkLGNBQUksRUFBR1MsTUFBTSxDQUFDTjtBQUhkO0FBRlI7O0FBUUosU0FBSyxTQUFMO0FBQ0ksNkNBQ09LLEtBRFA7QUFFSVIsWUFBSSxrQ0FDR1EsS0FBSyxDQUFDUixJQURUO0FBRUFjLG9CQUFVLEVBQUcsS0FGYjtBQUdBZCxjQUFJLEVBQUc7QUFIUDtBQUZSOztBQVFKO0FBQVU7QUFDTixhQUFPUSxLQUFQO0FBdkJSO0FBeUJILENBMUJEOztBQTRCZUQsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43MTRiYjQ0ZjYwNmU0MGZjYjEzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIWURSQVRFfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPXtcclxuICAgIHVzZXI6e1xyXG4gICAgfSxcclxuICAgIHBvc3QgOiB7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiAnTE9HX0lOJyxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogJ0xPR19PVVQnLFxyXG4gICAgfVxyXG59XHJcblxyXG4vL+uNsOydtO2EsOulvCDrsJTqvrjqs6Ag7Iu27Jy866m0IEFjdGlvbuydhCDrp4zrk6TslrQg7KO866m0IOuQnOuLpC5cclxuLy8gY29uc3QgY2hhbmdlTmlja25hbWUgPSB7XHJcbi8vICAgICB0eXBlIDogJ0NIQU5HRV9OSUNLTkFNRScsXHJcbi8vICAgICBkYXRhIDogJ2Jvb2dpY2hvJyxcclxuLy8gfVxyXG4vLyDrjbDsnbTthLDrpbwg7KCV7KCB7Jy866GcIOuwlOq+uOuKlOqyg+uztOuLqCDqsJ3ssrTrpbwg7JWh7IWY7Jy866GcIOunjOuTpOyWtCDrj5nsoIHsnLzroZwg67CU6r6464qU6rKMIOyii+uLpC4gKEFjdGlvbiBDcmVhdG9yIClcclxuY29uc3QgY2hhbmdlTmlja25hbWUgPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZSA6ICdDSEFOR0VfTklDS05BTUUnLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuLy8gIGV4ICkgY2hhbmdlTmlja25hbWUoJ2h5ZW9uc2VvJyk7XHJcblxyXG4vLyAo7J207KCE7IOB7YOcLCDslaHshZggKSA9PiDri6TsnYzsg4Htg5xcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGU9IGluaXRpYWxTdGF0ZSxhY3Rpb24pID0+e1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsYWN0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLC4uLmFjdGlvbi5wYXlsb2FkfTtcclxuICAgICAgICBjYXNlICdMT0dfSU4nOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgLy8g7LC47KGwIOq0gOqzhCDsnKDsp4BcclxuICAgICAgICAgICAgICAgIHVzZXI6e1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbiA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlciA6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdMT0dfT1VUJzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB1c2VyOntcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW4gOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdCA6IC8vIOy0iOq4sO2ZlO2VoOuVjCDsl4bsnLzrqbQgdW5kZWZpbmVk6rCAIOuQqFxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9