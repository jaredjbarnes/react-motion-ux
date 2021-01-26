"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bezierCurveEasings = exports.default = void 0;

var _motionUx = require("motion-ux");

var _default = {
  quad: _motionUx.easings.easeOutQuad,
  cubic: _motionUx.easings.easeOutCubic,
  quart: _motionUx.easings.easeOutQuart,
  quint: _motionUx.easings.easeOutQuint,
  sine: _motionUx.easings.easeOutSine,
  expo: _motionUx.easings.easeOutExpo,
  circ: _motionUx.easings.easeOutCirc,
  elastic: _motionUx.easings.easeOutElastic,
  overshoot: _motionUx.easings.easeOutBack,
  bounce: _motionUx.easings.linear,
  linear: _motionUx.easings.linear
};
exports.default = _default;
var bezierCurveEasings = {
  quad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  cubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  quart: "cubic-bezier(0.165, 0.84, 0.44, 1)",
  quint: "cubic-bezier(0.23, 1, 0.32, 1)",
  sine: "cubic-bezier(0.39, 0.575, 0.565, 1)",
  expo: "cubic-bezier(0.19, 1, 0.22, 1)",
  circ: "cubic-bezier(0.075, 0.82, 0.165, 1)",
  elastic: "linear",
  overshoot: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  bounce: "linear",
  linear: "linear"
};
exports.bezierCurveEasings = bezierCurveEasings;
//# sourceMappingURL=easeOut.js.map