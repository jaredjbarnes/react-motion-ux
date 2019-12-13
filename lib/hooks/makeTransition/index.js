"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _useTransition = _interopRequireDefault(require("../useTransition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeTransition = function makeTransition(states, duration, applyStyleValues) {
  if (typeof states === "function") {
    return function (stateName, props) {
      var map = states(props);
      return (0, _useTransition.default)(map[stateName], duration, applyStyleValues);
    };
  } else {
    return function (stateName) {
      return (0, _useTransition.default)(states[stateName], duration, applyStyleValues);
    };
  }
};

var _default = makeTransition;
exports.default = _default;
//# sourceMappingURL=index.js.map