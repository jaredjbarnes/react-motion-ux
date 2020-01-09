import React, { useState } from "react";
import makeStyledTransition from "../index";

const useStyledMotion = makeStyledTransition(
  {
    opened: {
      opacity: "1",
      display: {
        startAt: 0.01,
        endAt: 0.01,
        value: "block"
      }
    },
    closed: {
      opacity: "0",
      display: {
        startAt: 0.99,
        endAt: 0.99,
        value: "none"
      }
    }
  },
  5000
);

const FadeToNothing = () => {
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

export default FadeToNothing;
