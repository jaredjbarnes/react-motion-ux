import React, { useState } from "react";
import makeStyledTransition from "../index";

const useStyledMotion = makeStyledTransition(
  {
    initial: {
      opacity: "0",
    },
    opened: {
      opacity: "1",
    },
    closed: {
      opacity: "0",
    }
  },
  5000
);

const FadeInOnMount = () => {
  const [state, setState] = useState("opened");
  const style = { width: "300px", backgroundColor: "grey", height: "300px" };
  const ref = useStyledMotion(state);

  return (
    <div>
      <button
        onClick={() => {
          setState("opened");
        }}
      >
        Show
      </button>
      <button
        onClick={() => {
          setState("closed");
        }}
      >
        Hide
      </button>
      <div ref={ref} style={style}></div>
    </div>
  );
};

export default FadeInOnMount;
