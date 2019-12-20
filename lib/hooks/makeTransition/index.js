"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _useTransition = _interopRequireDefault(require("../useTransition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeTransition = function makeTransition(states, duration, applyStyleValues) {
  if (typeof states === "function") {
    return function (stateName, props, ref, animate) {
      if (stateName == null) {
        throw new Error("Invalid Arguments: Did you forget to pass in the state in for a tranistion :)?");
      }

      var map = states(props);
      var state = map[stateName];

      if (state == null) {
        throw new Error("Cannot find styles for the state named: ".concat(stateName, "."));
      }

      return (0, _useTransition.default)(state, duration, applyStyleValues, ref, animate);
    };
  } else {
    return function (stateName, ref, animate) {
      if (stateName == null) {
        throw new Error("Invalid Arguments: Did you forget to pass in the state in for a tranistion :)?");
      }

      var state = states[stateName];

      if (state == null) {
        throw new Error("Cannot find styles for the state named: ".concat(stateName, "."));
      }

      return (0, _useTransition.default)(state, duration, applyStyleValues, ref, animate);
    };
  }
};

var _default = makeTransition;
exports.default = _default;
//# sourceMappingURL=index.js.map