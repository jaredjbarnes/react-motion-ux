import React, { useState, useMemo, useRef } from "react";
import useTransition from "../index";
import clone from "../../clone";
import { Easing } from "motion-ux";

const states = {
  left: {
    transform: {
      value: "translate(0px, 150px)",
      easing: new Easing([0, 0, 0, 1, 1, 1, 1, 1]),
    },
    border: "15px solid rgba(124, 151, 124, 1)",
  },
  up: {
    transform: {
      value: "translate(150px, 0px)",
      easing: new Easing([0, 0, 0, 1, 1, 1, 1, 1]),
    },
    border: "10px solid rgba(46, 66, 61, 1)",
  },
  down: {
    transform: {
      value: "translate(150px, 300px)",
      easing: new Easing([0, 0, 0, 1, 1, 1, 1, 1]),
    },
    border: "35px solid rgba(147, 170, 162, 1)",
  },
  right: {
    transform: {
      value: "translate(300px, 150px)",
      easing: new Easing([0, 0, 0, 1, 1, 1, 1, 1]),
    },
    border: "30px solid rgba(191, 192, 190, 1)",
  },
};

const applyStyleValues = (element, values) => {
  if (element != null && element.style != null) {
    Object.keys(values).forEach((key) => {
      element.style[key] = values[key];
    });
  }
};

const containerStyle = {
  display: "inline-block",
  position: "relative",
  width: "300px",
  height: "300px",
};

const Compass = ({ position: defaultPosition, animate }) => {
  const [position, setPosition] = useState(defaultPosition);
  const placement = states[position];

  useMemo(() => {
    setPosition(defaultPosition);
  }, [defaultPosition]);

  const ref = useTransition(clone(placement), {
    duration: 2000,
    applyValues: applyStyleValues,
    animate,
  });

  const style = {
    position: "absolute",
    background: "rgba(239, 240, 242, 1)",
    borderRadius: "50% 50%",
    width: "100px",
    height: "100px",
  };

  return (
    <div style={containerStyle}>
      <div ref={ref} style={style}></div>
    </div>
  );
};

export default Compass;
