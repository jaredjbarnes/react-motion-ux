import React, { useState } from "react";
import makeMotion from "../index";

const defaultStyles = {
  cursor: "pointer",
  display: "inline-flex",
  width: "50px",
  height: "50px",
  boxSizing: "border-box",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  background:
    "radial-gradient(circle, rgba(240,240,240,1) 0%, rgba(230,230,230,1) 100%)"
};

const useAnimatedStyles = makeMotion(
  {
    default: {
      transform: "scale(1)",
      boxShadow: "0px 5px 8px rgba(0,0,0,0.25)"
    },
    pressed: {
      transform: "scale(0.9)",
      boxShadow: "0px 3px 8px rgba(0, 116, 217, 0.5)"
    }
  },
  500
);

const Button = ({ children, onClick }) => {
  const [state, setState] = useState("default");
  const ref = useAnimatedStyles(state);

  const onMouseDown = () => {
    setState("pressed");
  };

  const restore = () => {
    setState("default");
  };

  return (
    <div
      style={defaultStyles}
      ref={ref}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseOut={restore}
      onMouseUp={restore}
    >
      {children}
    </div>
  );
};

export default Button;
