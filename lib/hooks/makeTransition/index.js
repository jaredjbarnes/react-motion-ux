"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _useTransition = _interopRequireDefault(require("../useTransition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeTransition = function makeTransition(states, duration, applyValues) {
  return function (stateName) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        props = _ref.props,
        ref = _ref.ref,
        animate = _ref.animate,
        onComplete = _ref.onComplete;

    if (stateName == null) {
      throw new Error("Invalid Arguments: Did you forget to pass in the state in for a tranistion :)?");
    }

    var state;

    if (typeof states === "function") {
      var map = states(props);
      state = map[stateName];
    } else {
      state = states[stateName];
    }

    if (state == null) {
      throw new Error("Cannot find styles for the state named: ".concat(stateName, "."));
    }

    return (0, _useTransition.default)(state, {
      duration: duration,
      applyValues: applyValues,
      ref: ref,
      animate: animate,
      onComplete: onComplete
    });
  };
};

var _default = makeTransition;
exports.default = _default;
//# sourceMappingURL=index.js.map