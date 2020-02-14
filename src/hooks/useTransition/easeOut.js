import { easings } from "motion-ux";

export default {
  quad: easings.easeOutQuad,
  cubic: easings.easeOutCubic,
  quart: easings.easeOutQuart,
  quint: easings.easeOutQuint,
  sine: easings.easeOutSine,
  expo: easings.easeOutExpo,
  circ: easings.easeOutCirc,
  elastic: easings.easeOutElastic,
  overshoot: easings.easeOutBack,
  bounce: easings.easeOutBounce,
  linear: easings.linear
};

export const bezierCurveEasings = {
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
