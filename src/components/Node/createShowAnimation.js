import { Timeline, easings } from "motion-ux";

export default target => {
  const timeline = new Timeline({
    animations: [
      {
        target,
        name: "transform",
        from: "scale(0.5)",
        to: "scale(1)",
        easing: easings.easeOutElastic,
        startAt: 0,
        endAt: 1
      },
      {
        target,
        name: "opacity",
        from: "0",
        to: "1",
        easing: easings.easeOutQuad,
        startAt: 0,
        endAt: 0.5
      }
    ],
    duration: 1500
  });

  return timeline;
};
