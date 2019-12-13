"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _makeTransition = _interopRequireDefault(require("../makeTransition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var applyAttributeValues = function applyAttributeValues(ref, values) {
  if (ref.current != null && typeof ref.current.setAttribute === "function") {
    var obj = ref.current;
    Object.keys(values).forEach(function (key) {
      obj.setAttribute(key, values[key]);
    });
  }
};

var makeAttributeTransition = function makeAttributeTransition(states, duration) {
  return (0, _makeTransition.default)(states, duration, applyAttributeValues);
};

var _default = makeAttributeTransition;
exports.default = _default;
//# sourceMappingURL=index.js.map