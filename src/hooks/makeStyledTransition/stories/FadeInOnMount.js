import React, { useState } from "react";
import makeStyledTransition from "../index";

const useStyledMotion = makeStyledTransition(
  {
    initial: {
      opacity: "0",
      display: {
        startAt: 1,
        endAt: 1,
        value: "none"
      }
    },
    opened: {
      opacity: "1",
      display: {
        startAt: 0,
        endAt: 0,
        value: "block"
      }
    },
    closed: {
      opacity: "0",
      display: {
        startAt: 1,
        endAt: 1,
        value: "none"
      }
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
