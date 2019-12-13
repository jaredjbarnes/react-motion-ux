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
      if (stateName == null) {
        throw new Error("Invalid Arguments: Did you forget to pass in the state in for a tranistion :)?");
      }

      var map = states(props);
      var state = map[stateName];

      if (state == null) {
        throw new Error("Cannot find styles for the state named: ".concat(stateName, "."));
      }

      return (0, _useTransition.default)(state, duration, applyStyleValues);
    };
  } else {
    return function (stateName) {
      if (stateName == null) {
        throw new Error("Invalid Arguments: Did you forget to pass in the state in for a tranistion :)?");
      }

      var state = states[stateName];

      if (state == null) {
        throw new Error("Cannot find styles for the state named: ".concat(stateName, "."));
      }

      return (0, _useTransition.default)(state, duration, applyStyleValues);
    };
  }
};

var _default = makeTransition;
exports.default = _default;
//# sourceMappingURL=index.js.map