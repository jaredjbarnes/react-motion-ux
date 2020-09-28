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
        onComplete = _ref.onComplete,
        onArrival = _ref.onArrival,
        configure = _ref.configure,
        durationOverride = _ref.duration;

    duration = typeof durationOverride === "number" ? durationOverride : duration;

    if (stateName == null) {
      throw new Error("Invalid Arguments: Cannot find '".concat(stateName, "' within defined states: ").concat(Object.keys(states).join(", "), ", you may have forgotten to pass the state name in as an argument."));
    }

    var map;

    if (typeof states === "function") {
      map = states(props);
    } else {
      map = states;
    }

    var state = map[stateName];
    var initialProperties = map.initial || null;

    if (state == null) {
      throw new Error("Invalid Arguments: Cannot find '".concat(stateName, "' within defined states: ").concat(Object.keys(states).join(", "), "."));
    }

    var onCompleteWrapper = function onCompleteWrapper() {
      if (typeof onComplete === "function") {
        onComplete();
      }

      if (typeof onArrival === "function") {
        onArrival(stateName);
      }
    };

    return (0, _useTransition.default)(state, {
      duration: duration,
      applyValues: applyValues,
      ref: ref,
      animate: animate,
      onComplete: onCompleteWrapper,
      configure: configure,
      initialProperties: initialProperties
    });
  };
};

var _default = makeTransition;
exports.default = _default;
//# sourceMappingURL=index.js.map