import React, { useState } from "react";
import makeStyledTransition from "../index";

const style = {
  width: "100px",
  height: "100px",
  borderRadius: "50px"
};

const useStyledMotion = makeStyledTransition(
  {
    red: {
      "background-color": "rgba(255,0,0,1)"
    },
    yellow: {
      "background-color": "rgba(255,255,0,1)"
    },
    green: {
      "background-color": "rgba(0,255,0,1)"
    }
  },
  1000
);

const TrafficLight = () => {
  const [state, setState] = useState("red");
  const ref = useStyledMotion(state);

  setTimeout(() => {
    switch (state) {
      case "red":
        setState("green");
        break;
      case "green":
        setState("yellow");
        break;
      case "yellow":
        setState("red");
        break;
      default:
        setState("red");
    }
  }, 2000);

  return <div ref={ref} style={style}></div>;
};

export default TrafficLight;
