import React, { useState, useEffect, useMemo } from "react";
import useMotion from "../index";
import clone from "../../clone";

const states = {
  left: {
    transform: "translate(0px, 150px)",
    border: "15px solid rgba(124, 151, 124, 1)"
  },
  up: {
    transform: "translate(150px, 0px)",
    border: "10px solid rgba(46, 66, 61, 1)"
  },
  down: {
    transform: "translate(150px, 300px)",
    border: "35px solid rgba(147, 170, 162, 1)"
  },
  right: {
    transform: "translate(300px, 150px)",
    border: "30px solid rgba(191, 192, 190, 1)"
  }
};

const stateNames = Object.keys(states);
const getRandomState = () => {
  const index = Math.round(Math.random() * (stateNames.length - 1));
  return stateNames[index];
};

const Compass = ({ position: defaultPosition }) => {
  const [position, setPosition] = useState(defaultPosition);
  const placement = states[position];

  useMemo(() => {
    setPosition(defaultPosition);
  }, [defaultPosition]);

  const { transform, border } = useMotion(clone(placement), 2000);

  const style = {
    position: "absolute",
    transform: transform,
    background: "rgba(239, 240, 242, 1)",
    borderRadius: "50% 50%",
    width: "100px",
    height: "100px",
    border: border
  };

  return (
    <div style={{ position: "relative", width: "300px", height: "300px" }}>
      <div style={style}></div>
    </div>
  );
};

export default Compass;
