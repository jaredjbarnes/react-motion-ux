import React, { useRef } from "react";
import makeStyledTransition from "../index";

const defaultBallStyles = {
  position: "absolute",
  borderRadius: "3px",
  transformOrigin: "center center",
  transform: "translate(12px, 12px)",
  width: "6px",
  height: "6px",
  backgroundColor: "rgba(153, 153, 153, 1)"
};

const containerStyles = {
  display: "inline-flex",
  position: "relative",
  width: "30px",
  height: "30px"
};

const useTopBallAnimatedStyles = makeStyledTransition(
  {
    default: {
      transform: "translate(12px, 3px) rotate(0deg)",
      width: "6px",
      height: "6px",
      borderRadius: "3px",
      backgroundColor: "rgba(153, 153, 153, 1)"
    },
    close: {
      transform: "translate(3px, 14px) rotate(45deg)",
      width: "24px",
      height: "2px",
      borderRadius: "2px",
      backgroundColor: "rgba(200, 50, 50, 1)"
    }
  },
  300
);

const useBottomBallAnimtedStyles = makeStyledTransition(
  {
    default: {
      transform: "translate(12px, 21px) rotate(0deg)",
      width: "6px",
      height: "6px",
      borderRadius: "3px",
      backgroundColor: "rgba(153, 153, 153, 1)"
    },
    close: {
      transform: "translate(3px, 14px) rotate(-45deg)",
      width: "24px",
      height: "2px",
      borderRadius: "1px",
      backgroundColor: "rgba(200, 50, 50, 1)"
    }
  },
  300
);

const useMiddleBallAnimtedStyles = makeStyledTransition(
  {
    default: {
      opacity: "1"
    },
    close: {
      opacity: "0"
    }
  },
  300
);

const OptionButton = React.forwardRef(
  ({ state, style, className } = {}, ref) => {
    state = state || "default";
    const topRef = useTopBallAnimatedStyles(state);
    const bottomRef = useBottomBallAnimtedStyles(state);
    const middleRef = useMiddleBallAnimtedStyles(state);

    return (
      <div
        ref={ref}
        style={{
          display: "inline-block",
          width: "30px",
          height: "30px",
          ...style
        }}
        className={className}
      >
        <div style={containerStyles}>
          <div ref={topRef} style={defaultBallStyles}></div>
          <div ref={bottomRef} style={defaultBallStyles}></div>
          <div ref={middleRef} style={defaultBallStyles}></div>
        </div>
      </div>
    );
  }
);

export default OptionButton;
