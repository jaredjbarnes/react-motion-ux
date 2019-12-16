import React, { useState, useRef } from "react";
import makeStyledTransition from "../index";
import useInterval from "../../useInterval";

const container = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100px",
  height: "100px"
};

const style = {
  backgroundColor: "rgba(204,204,204,1)",
  width: "0px",
  height: "0px",
  borderRadius: "50px"
};

const useStyledMotion = makeStyledTransition(
  {
    off: {
      width: "0px",
      height: "0px",
      opacity: "0"
    },
    on: {
      width: "100px",
      height: "100px",
      opacity: "1"
    }
  },
  1000
);

const Pulse = () => {
  const [state, setState] = useState("off");
  const ref = useRef(null);

  useStyledMotion(state, ref);

  useInterval(() => {
    if (state === "on") {
      setState("off");
    } else {
      setState("on");
    }
  }, 500);

  return (
    <div style={container}>
      <div ref={ref} style={style}></div>
    </div>
  );
};

export default Pulse;
