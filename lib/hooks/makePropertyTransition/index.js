"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _makeTransition = _interopRequireDefault(require("../makeTransition"));

var _applyValues = _interopRequireDefault(require("./applyValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makePropertyTransition = function makePropertyTransition(states, duration) {
  return (0, _makeTransition.default)(states, duration, _applyValues.default);
};

var _default = makePropertyTransition;
exports.default = _default;
//# sourceMappingURL=index.js.map