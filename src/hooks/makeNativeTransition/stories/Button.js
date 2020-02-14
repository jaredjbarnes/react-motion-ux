import React, { useState } from "react";
import makeNativeTransition from "../index";

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
    "radial-gradient(circle, rgba(240,240,240,1) 0%, rgba(230,230,230,1) 100%)"
};

const useAnimatedStyles = makeNativeTransition(
  {
    default: {
      transform: "scale(1)",
      "box-shadow": "0px 5px 8px rgba(0,0,0,0.25)"
    },
    pressed: {
      transform: "scale(0.9)",
      "box-shadow": "0px 3px 8px rgba(0, 116, 217, 0.5)"
    }
  },
  600
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
        onClick={onClick}
        onMouseDown={onMouseDown}
        onMouseOut={restore}
        onMouseUp={restore}
      >
        <div style={defaultStyles} ref={animatedRef}>
          {children}
        </div>
      </div>
    );
  }
);

export default Button;
