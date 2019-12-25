"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var assertAnimatingTheSameProperties = function assertAnimatingTheSameProperties(animatedPropertiesA, animatedPropertiesB) {
  var keysA = Object.keys(animatedPropertiesA);
  var keysB = Object.keys(animatedPropertiesB);
  keysA.sort();
  keysB.sort();
  var areTheSame = keysA.join("|") === keysB.join("|");

  if (!areTheSame) {
    throw new Error("Invalid Arguments: useTransition cannot transition between animatedProperties that don't match between states: ".concat(JSON.stringify(animatedPropertiesA), ", ").concat(JSON.stringify(animatedPropertiesB)));
  }
};

var _default = assertAnimatingTheSameProperties;
exports.default = _default;
//# sourceMappingURL=assertAnimatingTheSameProperties.js.map