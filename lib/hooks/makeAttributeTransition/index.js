"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _makeTransition = _interopRequireDefault(require("../makeTransition"));

var _applyAttributeValues = _interopRequireDefault(require("./applyAttributeValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeAttributeTransition = function makeAttributeTransition(states, duration) {
  return (0, _makeTransition.default)(states, duration, _applyAttributeValues.default);
};

var _default = makeAttributeTransition;
exports.default = _default;
//# sourceMappingURL=index.js.map