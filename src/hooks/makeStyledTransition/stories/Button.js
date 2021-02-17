import React, { useState, useRef } from "react";
import makeStyledTransition from "../index";

const defaultStyles = {
  cursor: "pointer",
  display: "flex",
  width: "50px",
  height: "50px",
  boxSizing: "border-box",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  background:
    "radial-gradient(circle, rgba(240,240,240,1) 0%, rgba(230,230,230,1) 100%)",
};

const useAnimatedStyles = makeStyledTransition(
  {
    default: {
      transform: "scale(1)",
      boxShadow: "0px 5px 8px rgba(0,0,0,0.25)",
    },
    pressed: {
      transform: "scale(0.9)",
      boxShadow: "0px 3px 8px rgba(0, 116, 217, 0.5)",
    },
  },
  500
);

const Button = React.forwardRef(
  ({ children, onClick, className, style = {} }, ref) => {
    const [state, setState] = useState("default");
    const animatedRef = useAnimatedStyles(state);

    const onMouseDown = () => {
      setState("pressed");
    };

    const restore = () => {
      setState("default");
    };

    return (
      <div
        ref={ref}
        style={{ display: "inline-block", ...style }}
        className={className}
      >
        <div
          style={defaultStyles}
          ref={animatedRef}
          onClick={onClick}
          onMouseDown={onMouseDown}
          onMouseOut={restore}
          onMouseUp={restore}
        >
          {children}
        </div>
      </div>
    );
  }
);

export default Button;
