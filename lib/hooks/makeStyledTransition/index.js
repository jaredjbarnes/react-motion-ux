"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _makeTransition = _interopRequireDefault(require("../makeTransition"));

var _applyStyleValues = _interopRequireDefault(require("./applyStyleValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeStyledTransition = function makeStyledTransition(states, duration) {
  return (0, _makeTransition.default)(states, duration, _applyStyleValues.default);
};

var _default = makeStyledTransition;
exports.default = _default;
//# sourceMappingURL=index.js.map