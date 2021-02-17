"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _easeOut = _interopRequireDefault(require("./easeOut"));

var _motionUx = require("motion-ux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TransitionMediator =
/*#__PURE__*/
function () {
  function TransitionMediator() {
    _classCallCheck(this, TransitionMediator);

    this.duration = 0;
    this.timeline = null;
    this.shouldAnimate = true;
    this.animatedProperties = null;
    this.initialProperties = null;
    this.lastAnimatedProperties = null;
    this.node = null;

    this.render = function () {};

    this.onComplete = function () {};

    this.configure = function () {};
  }

  _createClass(TransitionMediator, [{
    key: "setShouldAnimate",
    value: function setShouldAnimate(shouldAnimate) {
      this.shouldAnimate = shouldAnimate;
    }
  }, {
    key: "setAnimatedProperties",
    value: function setAnimatedProperties(animatedProperties) {
      this.animatedProperties = animatedProperties;
      this.transformAnimatedProperties(animatedProperties);
    }
  }, {
    key: "setInitialProperties",
    value: function setInitialProperties(initialProperties) {
      if (this.initialProperties != null && this.lastAnimatedProperties == null) {
        this.transformAnimatedProperties(initialProperties);
        this.initialProperties = initialProperties;
        this.lastAnimatedProperties = initialProperties;
      }
    }
  }, {
    key: "setOnCompleteCallback",
    value: function setOnCompleteCallback(onComplete) {
      if (typeof onComplete === "function") {
        this.onComplete = onComplete;
      }
    }
  }, {
    key: "setConfigureCallback",
    value: function setConfigureCallback(configure) {
      if (typeof configure === "function") {
        this.configure = configure;
      }
    }
  }, {
    key: "setNode",
    value: function setNode(node) {
      if (this.node !== node) {
        this.node = node;

        if (this.node != null) {
          this.safelyRender(this.convertAnimatedPropertiesToValues());
          this.lastAnimatedProperties = this.animatedProperties;
        }
      }
    }
  }, {
    key: "setRenderCallback",
    value: function setRenderCallback(render) {
      if (typeof render === "function") {
        this.render = render;
      }
    }
  }, {
    key: "setDuration",
    value: function setDuration(duration) {
      if (typeof duration === "number") {
        this.duration = duration;
      }
    }
  }, {
    key: "updateAnimationProperties",
    value: function updateAnimationProperties(animatedProperties) {
      if (animatedProperties == null) {
        this.resetTimeline();
        this.lastAnimatedProperties = null;
        return;
      }

      this.setAnimatedProperties(animatedProperties);

      if (this.lastAnimatedProperties == null || !this.shouldAnimate) {
        this.resetTimeline();
        this.safelyRender(this.convertAnimatedPropertiesToValues());
        this.lastAnimatedProperties = this.animatedProperties;
        return;
      }

      if (this.needsTransition()) {
        this.assertAnimatingTheSameProperties();

        if (this.timeline == null) {
          this.createNewTimeline();
        } else {
          this.createAdjustedTimeline();
        }

        this.configureTimeline();
        this.timeline.play();
        this.lastAnimatedProperties = this.animatedProperties;
      }
    }
  }, {
    key: "safelyRender",
    value: function safelyRender(properties) {
      if (this.node != null && typeof this.render === "function") {
        this.render(this.node, properties);
      }
    }
  }, {
    key: "needsTransition",
    value: function needsTransition() {
      return !this.isEqual(this.animatedProperties, this.lastAnimatedProperties) && this.lastAnimatedProperties != null;
    }
  }, {
    key: "assertAnimatingTheSameProperties",
    value: function assertAnimatingTheSameProperties() {
      var keysA = Object.keys(this.animatedProperties);
      var keysB = Object.keys(this.lastAnimatedProperties);
      keysA.sort();
      keysB.sort();
      var areTheSame = keysA.join("|") === keysB.join("|");

      if (!areTheSame) {
        throw new Error("Invalid Arguments: When transitioning, you need to animate all of the same properties, these have different property sets. From:".concat(JSON.stringify(this.lastAnimatedProperties), ", To:").concat(JSON.stringify(this.animatedProperties)));
      }
    }
  }, {
    key: "createNewTimeline",
    value: function createNewTimeline() {
      var animations = this.createAnimations();
      this.timeline = new _motionUx.Timeline({
        animations: animations,
        duration: this.duration
      });
    }
  }, {
    key: "createAdjustedTimeline",
    value: function createAdjustedTimeline() {
      var animations = this.createAdjustedAnimations();
      this.resetTimeline();
      this.timeline = new _motionUx.Timeline({
        animations: animations,
        duration: this.duration
      });
    }
  }, {
    key: "configureTimeline",
    value: function configureTimeline() {
      var _this = this;

      if (typeof this.configure === "function") {
        this.configure(this.timeline);
      }

      this.timeline.observe("RENDER", function (_ref) {
        var animations = _ref.animations;

        _this.safelyRender(animations.useTransition);
      });
      this.timeline.observeTime(1, function () {
        _this.timeline = null;

        if (typeof _this.onComplete === "function") {
          _this.onComplete();
        }
      });
    }
  }, {
    key: "convertAnimatedPropertiesToValues",
    value: function convertAnimatedPropertiesToValues() {
      var _this2 = this;

      return Object.keys(this.animatedProperties).reduce(function (properties, key) {
        properties[key] = _this2.animatedProperties[key].value;
        return properties;
      }, {});
    }
  }, {
    key: "transformAnimatedProperties",
    value: function transformAnimatedProperties(animatedProperties) {
      var _this3 = this;

      Object.keys(animatedProperties).forEach(function (key) {
        animatedProperties[key] = _this3.transformStyle(animatedProperties[key]);
      });
    }
  }, {
    key: "transformStyle",
    value: function transformStyle(value) {
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
    }
  }, {
    key: "createAnimations",
    value: function createAnimations() {
      var _this4 = this;

      var lastProperties = this.lastAnimatedProperties;
      var properties = this.animatedProperties;
      var name = "useTransition";
      var animations = Object.keys(properties).map(function (key) {
        var property = properties[key];
        var lastProperty = lastProperties[key];
        return _objectSpread({}, property, {
          from: lastProperty.value,
          to: property.value,
          property: key,
          name: name,
          startAt: typeof property.startAt === "number" ? property.startAt : 0,
          endAt: typeof property.endAt === "number" ? property.endAt : 1,
          easing: _this4.getEasing(property)
        });
      });
      return animations;
    }
  }, {
    key: "getEasing",
    value: function getEasing(property) {
      if (typeof property.easing === "string") {
        return _easeOut.default[property.easing];
      } else if (property.easing != null && typeof property.easing.valueAt === "function") {
        return property.easing;
      } else {
        return _easeOut.default.expo;
      }
    }
  }, {
    key: "createAdjustedAnimations",
    value: function createAdjustedAnimations() {
      var _this5 = this;

      var timeline = this.timeline;
      var lastOptions = this.lastAnimatedProperties;
      var newOptions = this.animatedProperties;
      var name = "useTransition";
      var currentValues = timeline.getCurrentValues()[name];
      var shouldRedirect = timeline.progress !== 1;
      var animations = Object.keys(newOptions).map(function (key) {
        var oldOption = lastOptions[key];
        var option = newOptions[key];
        var from = currentValues[key];
        var easing = _easeOut.default[option.easing];
        var controls = Array.isArray(option.controls) ? option.controls.slice(0) : [];

        if (shouldRedirect) {
          easing = new _motionUx.BlendedEasing({
            from: _this5.getEasing(oldOption),
            to: _this5.getEasing(option),
            offset: timeline.progress
          });
          controls.unshift(oldOption.value);
          controls.push(option.value);
        }

        var animation = _objectSpread({}, option, {
          property: key,
          name: name,
          to: option.value,
          from: from,
          controls: controls,
          startAt: typeof option.startAt === "number" ? option.startAt : 0,
          endAt: typeof option.endAt === "number" ? option.endAt : 1,
          easing: easing
        });

        return animation;
      });
      return animations;
    }
  }, {
    key: "isEqual",
    value: function isEqual(objectA, objectB) {
      return JSON.stringify(objectA) === JSON.stringify(objectB);
    }
  }, {
    key: "resetTimeline",
    value: function resetTimeline() {
      if (this.timeline != null) {
        this.timeline.dispose();
        this.timeline = null;
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this.timeline != null) {
        this.timeline.dispose();
      }
    }
  }]);

  return TransitionMediator;
}();

exports.default = TransitionMediator;
//# sourceMappingURL=TransitionMediator.js.map