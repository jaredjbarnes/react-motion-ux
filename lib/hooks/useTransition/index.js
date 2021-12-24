"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _objectApplyValues = _interopRequireDefault(require("./objectApplyValues"));

var _TransitionMediator = _interopRequireDefault(require("./TransitionMediator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var useTransition = function useTransition(animatedProperties) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      duration = _ref.duration,
      _ref$applyValues = _ref.applyValues,
      applyValues = _ref$applyValues === void 0 ? _objectApplyValues.default : _ref$applyValues,
      ref = _ref.ref,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? true : _ref$animate,
      onComplete = _ref.onComplete,
      configure = _ref.configure,
      _ref$initialPropertie = _ref.initialProperties,
      initialProperties = _ref$initialPropertie === void 0 ? null : _ref$initialPropertie;

  var transitionMediator = (0, _react.useMemo)(function () {
    return new _TransitionMediator.default();
  }, []);
  transitionMediator.setInitialProperties(initialProperties);
  transitionMediator.setDuration(duration);
  transitionMediator.setRenderCallback(applyValues);
  transitionMediator.setShouldAnimate(animate);
  transitionMediator.setOnCompleteCallback(onComplete);
  transitionMediator.setConfigureCallback(configure); // Keep refs up to date.

  var callbackRef = (0, _react.useCallback)(function (node) {
    if (node != null) {
      if (typeof ref === "function") {
        ref(node);
      } else if (_typeof(ref) === "object" && ref != null && ref.hasOwnProperty("current")) {
        ref.current = node;
      }

      transitionMediator.setNode(node);
    }
  }, [transitionMediator, ref]);
  (0, _react.useEffect)(function () {
    return function () {
      transitionMediator.dispose();
    };
  }, [transitionMediator]);
  transitionMediator.updateAnimationProperties(animatedProperties);
  return callbackRef;
};

var _default = useTransition;
exports.default = _default;
//# sourceMappingURL=index.js.map