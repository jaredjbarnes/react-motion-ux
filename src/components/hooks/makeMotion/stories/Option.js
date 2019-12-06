import React from "react";
import makeMotion from "../index";

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

const useTopBallAnimatedStyles = makeMotion(
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
  500
);

const useBottomBallAnimtedStyles = makeMotion(
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
  500
);

const useMiddleBallAnimtedStyles = makeMotion(
  {
    default: {
      opacity: "1"
    },
    close: {
      opacity: "0"
    }
  },
  500
);

const OptionButton = ({ state } = {}) => {
  state = state || "default";
  const topStyle = useTopBallAnimatedStyles(state);
  const bottomStyle = useBottomBallAnimtedStyles(state);
  const middleStyle = useMiddleBallAnimtedStyles(state);

  return (
    <div style={containerStyles}>
      <div style={{ ...defaultBallStyles, ...topStyle }}></div>
      <div style={{ ...defaultBallStyles, ...bottomStyle }}></div>
      <div style={{ ...defaultBallStyles, ...middleStyle }}></div>
    </div>
  );
};

export default OptionButton;
