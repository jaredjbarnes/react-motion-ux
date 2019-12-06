import React, { useMemo, useState } from "react";
import makeMotion from "../index";

const container = {
    position:"relative",
    width: "200px",
    height: "150px"
};

const homeButton = {
    width: "30px",
    height: "30px",
    borderRadius: "15px",
    backgroundColor: "rgba(225, 225, 225, 1)",
}

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

const Menu = ({ defaultState } = {}) => {
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

export default Menu;
