import React, { useState } from "react";
import { Timeline, easings } from "motion-ux";

const transformToAnimation = (stateStyles, easing) => {
  const target = {};

  return Object.keys(stateStyles).map(cssProperty => {
    const value = stateStyles[cssProperty];

    return {
      target,
      name: cssProperty,
      from: value,
      to: value,
      startAt: 0,
      endAt: 1,
      easing: easings[easing] || easings.linear
    };
  });
};

const adjustAnimations = (
  currentValues,
  lastAnimations,
  animations
) => {
    return animations.map((animation)=>{

    });
};

const createStyledStates = states => {};

export default createStyledStates;

// const useStyledState = createStyledStates({
//     default: {
//         background: "",
//         position: "top",
//         opacity: "0"
//     },
//     maximized: {},
//     minimized: {}
// }, 2000, "easeOutExpo");

// const styles = useStyledState("maximized");
