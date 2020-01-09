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
    throw new Error("Invalid Arguments: When transitioning, you need to animate all of the same properties, these have different property sets. From:".concat(JSON.stringify(animatedPropertiesA), ", To:").concat(JSON.stringify(animatedPropertiesB)));
  }
};

var _default = assertAnimatingTheSameProperties;
exports.default = _default;
//# sourceMappingURL=assertAnimatingTheSameProperties.js.map