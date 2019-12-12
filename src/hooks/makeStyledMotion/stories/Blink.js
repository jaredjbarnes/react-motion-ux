import React, { useState } from "react";
import makeStyledMotion from "../index";
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

const useStyledMotion = makeStyledMotion(
  {
    on: {
      width: "100px",
      height: "100px",
      opacity: "1"
    },
    off: {
      width: "0px",
      height: "0px",
      opacity: "0"
    }
  },
  1000
);

const Blink = () => {
  const [state, setState] = useState("off");
  const ref = useStyledMotion(state);

  useInterval(() => {
    if (state === "on") {
      setState("off");
    } else {
      setState("on");
    }
  }, 2000);

  return (
    <div style={container}>
      <div ref={ref} style={style}></div>
    </div>
  );
};

export default Blink;
