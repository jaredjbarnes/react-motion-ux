"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _makeTransition = _interopRequireDefault(require("../makeTransition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var applyValues = function applyValues(obj, values) {
  if (obj != null) {
    Object.keys(values).forEach(function (key) {
      obj[key] = values[key];
    });
  }
};

var makePropertyTransition = function makePropertyTransition(states, duration) {
  return (0, _makeTransition.default)(states, duration, applyValues);
};

var _default = makePropertyTransition;
exports.default = _default;
//# sourceMappingURL=index.js.map