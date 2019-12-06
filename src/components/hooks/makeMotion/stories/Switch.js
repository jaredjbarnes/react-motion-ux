import React, { useMemo, useState } from "react";
import makeMotion from "../index";

const rail = {
  borderRadius: "15px",
  backgroundColor: "rgba(200, 200, 200, 1)",
  position: "relative",
  width: "60px",
  height: "30px"
};

const handle = {
  borderRadius: "15px",
  backgroundColor: "rgba(225, 225, 225, 1)",
  boxSizing: "border-box",
  border: "1px solid #ccc",
  width: "30px",
  height: "30px",
  position: "absolute",
  top: "0px",
  left: "0px",
  boxShadow: "0px 3px 5px rgba(0,0,0,0.2)"
};

const useRailStyles = makeMotion(
  {
    on: {
      backgroundColor: "rgba(0, 116, 217, 1)"
    },
    off: {
      backgroundColor: "rgba(200, 200, 200, 1)"
    }
  },
  800
);

const useHandleStyles = makeMotion(
  {
    on: {
      transform: "translate(100%, 0%)"
    },
    off: {
      transform: "translate(0%, 0%)"
    }
  },
  800
);

const Switch = ({ defaultState } = {}) => {
  defaultState = defaultState || "off";
  const [state, setState] = useState(defaultState);
  const animatedRailStyles = useRailStyles(state);
  const animatedHandleStyles = useHandleStyles(state);

  useMemo(() => {
    setState(defaultState);
  }, [defaultState]);

  const onClick = () => {
    if (state === "on") {
      setState("off");
    } else {
      setState("on");
    }
  };

  return (
    <div style={{ ...rail, ...animatedRailStyles }} onClick={onClick}>
      <div style={{ ...handle, ...animatedHandleStyles }}></div>
    </div>
  );
};

export default Switch;
