"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _makeTransition = _interopRequireDefault(require("../makeTransition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var applyAttributeValues = function applyAttributeValues(obj, values) {
  if (obj != null && typeof obj.setAttribute === "function") {
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