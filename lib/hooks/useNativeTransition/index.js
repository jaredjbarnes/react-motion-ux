"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _transformAnimatedProperties = _interopRequireDefault(require("./transformAnimatedProperties"));

var _easeOut = require("../useTransition/easeOut");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useNativeTransition = function useNativeTransition(cssProperties, _ref) {
  var _ref$duration = _ref.duration,
      defaultDuration = _ref$duration === void 0 ? 0 : _ref$duration,
      ref = _ref.ref,
      onComplete = _ref.onComplete,
      _ref$initialPropertie = _ref.initialProperties,
      initialProperties = _ref$initialPropertie === void 0 ? null : _ref$initialPropertie;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      node = _useState2[0],
      setNode = _useState2[1];

  var callbackRef = (0, _react.useCallback)(function (node) {
    if (node != null) {
      if (typeof ref === "function") {
        ref(node);
      } else if (_typeof(ref) === "object" && ref != null && ref.hasOwnProperty("current")) {
        ref.current = node;
      }

      if (initialProperties != null) {
        (0, _transformAnimatedProperties.default)(initialProperties);
        Object.keys(initialProperties).forEach(function (key) {
          var value = initialProperties[key].value;
          node.style[key] = value;
        });
      } else {
        (0, _transformAnimatedProperties.default)(cssProperties);
        Object.keys(cssProperties).forEach(function (key) {
          var value = cssProperties[key].value;
          node.style[key] = value;
        });
      }

      setNode(node);
    }
  }, [ref, initialProperties, cssProperties]);
  (0, _react.useEffect)(function () {
    if (cssProperties != null && node != null) {
      (0, _transformAnimatedProperties.default)(cssProperties);
      var transition = Object.keys(cssProperties).map(function (property) {
        var _cssProperties$proper = cssProperties[property],
            durationOverride = _cssProperties$proper.duration,
            easingName = _cssProperties$proper.easing,
            _cssProperties$proper2 = _cssProperties$proper.startAt,
            startAt = _cssProperties$proper2 === void 0 ? 0 : _cssProperties$proper2,
            _cssProperties$proper3 = _cssProperties$proper.endAt,
            endAt = _cssProperties$proper3 === void 0 ? 1 : _cssProperties$proper3;
        var delay;
        var easing = _easeOut.bezierCurveEasings[easingName] != null ? _easeOut.bezierCurveEasings[easingName] : _easeOut.bezierCurveEasings.expo;
        var duration = typeof durationOverride === "number" ? durationOverride : defaultDuration;
        startAt = typeof startAt === "number" ? startAt : 0;
        endAt = typeof endAt === "number" ? endAt : 0;
        var originalDuration = duration;
        duration = (endAt - startAt) * originalDuration;
        delay = "".concat(startAt * originalDuration);
        return "".concat(property, " ").concat(duration, "ms ").concat(easing, " ").concat(delay, "ms");
      }).join(", ");
      node.style.transition = transition;
      Object.keys(cssProperties).forEach(function (key) {
        var value = cssProperties[key].value;
        node.style[key] = value;
      });
    }
  }, [initialProperties, cssProperties, defaultDuration, node]);
  (0, _react.useEffect)(function () {
    if (node != null) {
      if (typeof onComplete === "function") {
        node.addEventListener("transitionend", onComplete);
      }

      return function () {
        node.removeEventListener("transitionend", onComplete);
      };
    }
  }, [node, onComplete]);
  return callbackRef;
};

var _default = useNativeTransition;
exports.default = _default;
//# sourceMappingURL=index.js.map