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

var _transformAnimatedProperties = _interopRequireDefault(require("./transformAnimatedProperties"));

var _objectApplyValues = _interopRequireDefault(require("./objectApplyValues"));

var _assertAnimatingTheSameProperties = _interopRequireDefault(require("./assertAnimatingTheSameProperties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var convertToValues = function convertToValues(animatedProperties) {
  return Object.keys(animatedProperties).reduce(function (properties, key) {
    properties[key] = animatedProperties[key].value;
    return properties;
  }, {});
};

var useTransition = function useTransition(animatedProperties) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      duration = _ref.duration,
      _ref$applyValues = _ref.applyValues,
      applyValues = _ref$applyValues === void 0 ? _objectApplyValues.default : _ref$applyValues,
      ref = _ref.ref,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? true : _ref$animate,
      onComplete = _ref.onComplete;

  var state = (0, _react.useRef)({
    lastAnimatedProperties: null,
    animatedProperties: animatedProperties,
    duration: duration,
    applyValues: applyValues,
    ref: ref,
    animate: animate,
    timeline: null,
    node: null
  });
  state.current.animatedProperties = animatedProperties;
  state.current.duration = duration;
  state.current.applyValues = applyValues;
  state.current.ref = ref;
  state.current.animate = animate; // Keep refs up to date.

  var callbackRef = (0, _react.useCallback)(function (node) {
    var _state$current = state.current,
        animatedProperties = _state$current.animatedProperties,
        applyValues = _state$current.applyValues,
        ref = _state$current.ref;

    if (node != null) {
      if (typeof ref === "function") {
        ref(node);
      } else if (_typeof(ref) === "object" && ref != null && ref.hasOwnProperty("current")) {
        ref.current = node;
      }

      state.current.node = node; // This should run when the element is mounted.

      var values = convertToValues(animatedProperties);
      applyValues(state.current.node, values);
      state.current.lastAnimatedProperties = animatedProperties;
    }
  }, []); // Clean up timeline to prevent memory leak.

  (0, _react.useEffect)(function () {
    return function () {
      if (state.current.timeline != null) {
        state.current.timeline.dispose();
      }
    };
  }, []);

  if (animatedProperties == null) {
    // Stop the current animation, if there is one.
    if (state.current.timeline != null) {
      state.current.timeline.dispose();
    } // Reset


    state.current.lastAnimatedProperties = null;
    return callbackRef;
  }

  (0, _transformAnimatedProperties.default)(animatedProperties);
  var isDifferent = !(0, _isEqual.default)(animatedProperties, state.current.lastAnimatedProperties);

  if (state.current.lastAnimatedProperties == null || !animate) {
    if (state.current.timeline != null) {
      state.current.timeline.dispose();
      state.current.timeline = null;
    }

    var values = convertToValues(animatedProperties);

    if (state.current.node != null) {
      applyValues(state.current.node, values);
    }

    state.current.lastAnimatedProperties = animatedProperties;
    return callbackRef;
  } else if (isDifferent && state.current.lastAnimatedProperties != null) {
    (0, _assertAnimatingTheSameProperties.default)(animatedProperties, state.current.lastAnimatedProperties);

    if (state.current.timeline == null) {
      var animations = (0, _createAnimations.default)(state.current.lastAnimatedProperties, animatedProperties);
      state.current.timeline = new _motionUx.Timeline({
        animations: animations,
        duration: duration
      });
    } else {
      var _animations = (0, _createAdjustedAnimations.default)(state.current.timeline, state.current.lastAnimatedProperties, animatedProperties);

      state.current.timeline.dispose();
      state.current.timeline = new _motionUx.Timeline({
        animations: _animations,
        duration: duration
      });
    }

    state.current.timeline.observe("RENDER", function (_ref2) {
      var animations = _ref2.animations;

      if (state.current.node != null) {
        applyValues(state.current.node, animations.useTransition);
      }
    });
    state.current.timeline.observeTime(1, function () {
      state.current.timeline.current = null;

      if (typeof onComplete === "function") {
        onComplete();
      }
    });
    state.current.timeline.play();
    state.current.lastAnimatedProperties = animatedProperties;
  }

  return callbackRef;
};

var _default = useTransition;
exports.default = _default;
//# sourceMappingURL=index.js.map