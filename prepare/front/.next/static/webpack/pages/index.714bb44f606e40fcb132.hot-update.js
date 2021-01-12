webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsInBvc3QiLCJsb2dpbkFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0QWN0aW9uIiwiY2hhbmdlTmlja25hbWUiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiaXNMb2dnZWRJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUU7QUFDaEJDLE1BQUksRUFBQyxFQURXO0FBR2hCQyxNQUFJLEVBQUc7QUFIUyxDQUFwQjtBQU9PLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBUztBQUNoQyxTQUFNO0FBQ0ZDLFFBQUksRUFBRSxRQURKO0FBRUZELFFBQUksRUFBSkE7QUFGRSxHQUFOO0FBSUgsQ0FMTTtBQU9BLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQUs7QUFDN0IsU0FBTTtBQUNGRCxRQUFJLEVBQUU7QUFESixHQUFOO0FBR0gsQ0FKTSxDLENBTVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0gsSUFBRCxFQUFTO0FBQzVCLFNBQU07QUFDRkMsUUFBSSxFQUFHLGlCQURMO0FBRUZELFFBQUksRUFBSkE7QUFGRSxHQUFOO0FBSUgsQ0FMRCxDLENBTUE7QUFFQTs7O0FBQ0EsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBK0I7QUFBQSxNQUE5QkMsS0FBOEIsdUVBQXZCVCxZQUF1QjtBQUFBLE1BQVZVLE1BQVU7O0FBQy9DLFVBQVFBLE1BQU0sQ0FBQ0wsSUFBZjtBQUNJLFNBQUtNLDBEQUFMO0FBQ0lDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBc0JILE1BQXRCO0FBQ0EsNkNBQVdELEtBQVgsR0FBb0JDLE1BQU0sQ0FBQ0ksT0FBM0I7O0FBQ0osU0FBSyxRQUFMO0FBQ0ksNkNBQ09MLEtBRFA7QUFDYztBQUNWUixZQUFJLGtDQUNHUSxLQUFLLENBQUNSLElBRFQ7QUFFQWMsb0JBQVUsRUFBRyxJQUZiO0FBR0FkLGNBQUksRUFBR1MsTUFBTSxDQUFDTjtBQUhkO0FBRlI7O0FBUUosU0FBSyxTQUFMO0FBQ0ksNkNBQ09LLEtBRFA7QUFFSVIsWUFBSSxrQ0FDR1EsS0FBSyxDQUFDUixJQURUO0FBRUFjLG9CQUFVLEVBQUcsS0FGYjtBQUdBZCxjQUFJLEVBQUc7QUFIUDtBQUZSOztBQVFKO0FBQVU7QUFDTixhQUFPUSxLQUFQO0FBdkJSO0FBeUJILENBMUJEOztBQTRCZUQsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzE0YmI0NGY2MDZlNDBmY2IxMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SFlEUkFURX0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID17XHJcbiAgICB1c2VyOntcclxuICAgIH0sXHJcbiAgICBwb3N0IDoge1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogJ0xPR19JTicsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9ICgpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6ICdMT0dfT1VUJyxcclxuICAgIH1cclxufVxyXG5cclxuLy/rjbDsnbTthLDrpbwg67CU6r646rOgIOyLtuycvOuptCBBY3Rpb27snYQg66eM65Ok7Ja0IOyjvOuptCDrkJzri6QuXHJcbi8vIGNvbnN0IGNoYW5nZU5pY2tuYW1lID0ge1xyXG4vLyAgICAgdHlwZSA6ICdDSEFOR0VfTklDS05BTUUnLFxyXG4vLyAgICAgZGF0YSA6ICdib29naWNobycsXHJcbi8vIH1cclxuLy8g642w7J207YSw66W8IOygleyggeycvOuhnCDrsJTqvrjripTqsoPrs7Tri6gg6rCd7LK066W8IOyVoeyFmOycvOuhnCDrp4zrk6TslrQg64+Z7KCB7Jy866GcIOuwlOq+uOuKlOqyjCDsoovri6QuIChBY3Rpb24gQ3JlYXRvciApXHJcbmNvbnN0IGNoYW5nZU5pY2tuYW1lID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGUgOiAnQ0hBTkdFX05JQ0tOQU1FJyxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcbi8vICBleCApIGNoYW5nZU5pY2tuYW1lKCdoeWVvbnNlbycpO1xyXG5cclxuLy8gKOydtOyghOyDge2DnCwg7JWh7IWYICkgPT4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlPSBpbml0aWFsU3RhdGUsYWN0aW9uKSA9PntcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLGFjdGlvbilcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwuLi5hY3Rpb24ucGF5bG9hZH07XHJcbiAgICAgICAgY2FzZSAnTE9HX0lOJzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIC8vIOywuOyhsCDqtIDqs4Qg7Jyg7KeAXHJcbiAgICAgICAgICAgICAgICB1c2VyOntcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW4gOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIgOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnTE9HX09VVCc6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjp7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuICAgICAgICAgICAgICAgICAgICBpc0xvZ2dlZEluIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlciA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQgOiAvLyDstIjquLDtmZTtlaDrlYwg7JeG7Jy866m0IHVuZGVmaW5lZOqwgCDrkKhcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==