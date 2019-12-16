"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _motionUx = require("motion-ux");

var _createAnimations = _interopRequireDefault(require("./createAnimations"));

var _createAdjustedAnimations = _interopRequireDefault(require("./createAdjustedAnimations"));

var _isEqual = _interopRequireDefault(require("../isEqual"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var transformAnimatedProperties = function transformAnimatedProperties(animatedProperties) {
  Object.keys(animatedProperties).forEach(function (key) {
    animatedProperties[key] = transformStyle(animatedProperties[key]);
  });
};

var transformStyle = function transformStyle(value) {
  var objectValue = value;

  if (_typeof(value) === "object" && value != null) {
    objectValue = value;
  } else {
    objectValue = {
      value: value
    };
  }

  objectValue.value = objectValue.value.toString();
  return objectValue;
};

var defaultApplyValues = function defaultApplyValues(obj, values) {
  if (obj != null) {
    Object.keys(values).forEach(function (key) {
      obj[key] = values[key];
    });
  }
};

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

var assertObjectRef = function assertObjectRef(ref) {
  if (ref == null) {
    throw new Error("Invalid Arguments: objectRef cannot be null or undefined.");
  }
};

var useTransition = function useTransition(animatedProperties, duration) {
  var applyValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultApplyValues;
  var objectRef = arguments.length > 3 ? arguments[3] : undefined;
  var animate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  assertObjectRef(objectRef);
  var timeline = (0, _react.useRef)(null);
  var lastAnimatedProperties = (0, _react.useRef)(null);
  var animationFrame = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    return function () {
      if (timeline.current != null) {
        timeline.current.dispose();
      }

      cancelAnimationFrame(animationFrame.current);
    };
  }, []); // This will reset useTransition.

  if (animatedProperties == null) {
    // Stop the current animation, if there is one.
    if (timeline.current != null) {
      timeline.current.dispose();
    } // Reset


    lastAnimatedProperties.current = null;
    return objectRef;
  }

  transformAnimatedProperties(animatedProperties);
  var isDifferent = !(0, _isEqual.default)(animatedProperties, lastAnimatedProperties.current);
  /* 
    Since we didn't come from anything just set the values. This will prevent unneeded 
    chern on the CPU on initialization. This is a little tricky because these refs are 
    associated with other components, so the ref may not be here when this component mounts.
    So we try to render every animation frame until this is unmounted or it actually renders 
    it's initial value.
  */

  if (lastAnimatedProperties.current == null || !animate) {
    if (timeline.current != null) {
      timeline.current.dispose();
      timeline.current = null;
    }

    var values = Object.keys(animatedProperties).reduce(function (properties, key) {
      properties[key] = animatedProperties[key].value;
      return properties;
    }, {});

    var updateObject = function updateObject(values) {
      if (objectRef.current == null) {
        animationFrame.current = requestAnimationFrame(function () {
          updateObject(values);
        });
      } else {
        applyValues(objectRef.current, values);
      }
    };

    updateObject(values);
    lastAnimatedProperties.current = animatedProperties;
    return objectRef;
  } else if (isDifferent && lastAnimatedProperties.current != null) {
    assertAnimatingTheSameProperties(animatedProperties, lastAnimatedProperties.current);

    if (timeline.current == null) {
      var animations = (0, _createAnimations.default)(lastAnimatedProperties.current, animatedProperties);
      timeline.current = new _motionUx.Timeline({
        animations: animations,
        duration: duration
      });
    } else {
      var _animations = (0, _createAdjustedAnimations.default)(timeline.current, lastAnimatedProperties.current, animatedProperties);

      timeline.current.dispose();
      timeline.current = new _motionUx.Timeline({
        animations: _animations,
        duration: duration
      });
    }

    timeline.current.observe("RENDER", function (_ref) {
      var animations = _ref.animations;
      applyValues(objectRef.current, animations.useTransition);
    });
    timeline.current.observeTime(1, function () {
      timeline.current = null;
    });
    timeline.current.play();
    lastAnimatedProperties.current = animatedProperties;
    return objectRef;
  }

  return objectRef;
};

var _default = useTransition;
exports.default = _default;
//# sourceMappingURL=index.js.map