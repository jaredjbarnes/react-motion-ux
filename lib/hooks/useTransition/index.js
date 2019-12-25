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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useTransition = function useTransition(animatedProperties, duration) {
  var applyValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _objectApplyValues.default;
  var ref = arguments.length > 3 ? arguments[3] : undefined;
  var animate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var objectRef = (0, _react.useRef)(null);
  var timeline = (0, _react.useRef)(null);
  var lastAnimatedProperties = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var callbackRef = (0, _react.useCallback)(function (node) {
    if (node != null) {
      if (typeof ref === "function") {
        ref(node);
      } else if (_typeof(ref) === "object" && ref != null && ref.hasOwnProperty("current")) {
        ref.current = node;
      }

      objectRef.current = node;
      applyValues(objectRef.current, values);
    }
  }, [ref, applyValues, values]);
  (0, _react.useEffect)(function () {
    return function () {
      if (timeline.current != null) {
        timeline.current.dispose();
      }
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

  (0, _transformAnimatedProperties.default)(animatedProperties);
  var isDifferent = !(0, _isEqual.default)(animatedProperties, lastAnimatedProperties.current);

  if (lastAnimatedProperties.current == null || !animate) {
    if (timeline.current != null) {
      timeline.current.dispose();
      timeline.current = null;
    }

    var _values = Object.keys(animatedProperties).reduce(function (properties, key) {
      properties[key] = animatedProperties[key].value;
      return properties;
    }, {});

    if (objectRef.current != null) {
      applyValues(objectRef.current, _values);
    } else {
      setValues(_values);
    }

    lastAnimatedProperties.current = animatedProperties;
    return callbackRef;
  } else if (isDifferent && lastAnimatedProperties.current != null) {
    (0, _assertAnimatingTheSameProperties.default)(animatedProperties, lastAnimatedProperties.current);

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

      if (objectRef.current != null) {
        applyValues(objectRef.current, animations.useTransition);
      }
    });
    timeline.current.observeTime(1, function () {
      timeline.current = null;
    });
    timeline.current.play();
    lastAnimatedProperties.current = animatedProperties;
    return callbackRef;
  }

  return callbackRef;
};

var _default = useTransition;
exports.default = _default;
//# sourceMappingURL=index.js.map