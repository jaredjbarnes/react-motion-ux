import React, { useState } from "react";
import useMotion from "../useMotion";

const states = {
  left: {
    top: {
      from: "0px",
      to: "150px",
      easing: "easeOutExpo"
    },
    left: {
      from: "0px",
      to: "0px",
      easing: "easeOutExpo"
    },
    border: {
      from: "0px solid rgba(0,0,0,1)",
      to: "15px solid rgba(124, 151, 124, 1)",
      easing: "easeOutExpo"
    }
  },
  up: {
    top: {
      from: "0px",
      to: "0px",
      easing: "easeOutExpo"
    },
    left: {
      from: "0px",
      to: "150px",
      easing: "easeOutExpo"
    },
    border: {
      from: "0px solid rgba(0,0,0,1)",
      to: "10px solid rgba(46, 66, 61, 1)",
      easing: "easeOutExpo"
    }
  },
  down: {
    top: {
      from: "0px",
      to: "300px",
      easing: "easeOutExpo"
    },
    left: {
      from: "0px",
      to: "150px",
      easing: "easeOutExpo"
    },
    border: {
      from: "0px solid rgba(0,0,0,1)",
      to: "35px solid rgba(147, 170, 162, 1)",
      easing: "easeOutExpo"
    }
  },
  right: {
    top: {
      from: "0px",
      to: "150px",
      easing: "easeOutExpo"
    },
    left: {
      from: "0px",
      to: "300px",
      easing: "easeOutExpo"
    },
    border: {
      from: "0px solid rgba(0,0,0,1)",
      to: "30px solid rgba(191, 192, 190, 1)",
      easing: "easeOutExpo"
    }
  }
};

const Compass = ({ position: defaultPosition }) => {
  const [position, setPosition] = useState(defaultPosition);
  const placement = states[position];

  if (defaultPosition !== position) {
    setPosition(defaultPosition);
  }

  const { left, top, border } = useMotion(placement, 1000);

  const style = {
    position: "absolute",
    transform: `translate(${left}, ${top})`,
    background: "rgba(239, 240, 242, 1)",
    borderRadius: "50% 50%",
    width: "100px",
    height: "100px",
    border: border
  };

  return <div style={style}></div>;
};

export default Compass;
