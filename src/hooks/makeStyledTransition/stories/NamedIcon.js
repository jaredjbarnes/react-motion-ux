import React, { useRef } from "react";
import makeStyledTransition from "../index";

const wrapperStyle = {
  display: "inline-block"
};

const containerStyle = {
  display: "block",
  position: "relative",
  height: "40px",
  width: "30px",
  overflow: "hidden",
  cursor: "pointer",
  userSelect: "none"
};

const lineStyle = {
  position: "absolute",
  bottom: "0px",
  left: "0px",
  width: "0px",
  height: "3px",
  backgroundColor: "#ccc",
  borderRadius: "2px"
};

const nameStyle = {
  position: "absolute",
  top: 0,
  left: "32px",
  fontFamily: "Arial",
  fontSize: "18px",
  height: "40px",
  lineHeight: "30px",
  boxSizing: "border-box"
};

const iconContainer = {
  position: "absolute",
  width: "30px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "30px",
  color: "#ccc"
};

const useLineStyledMotion = makeStyledTransition(
  ({ width }) => ({
    inactive: {
      width: "0px",
      left: "0px"
    },
    active: {
      width: `${width}px`,
      left: "30px"
    }
  }),
  400
);

const useContainerStyledMotion = makeStyledTransition(
  ({ width }) => ({
    inactive: {
      width: "30px"
    },
    active: {
      width: `${width + 30}px`
    }
  }),
  400
);

const useNameStyledMotion = makeStyledTransition(
  {
    inactive: {
      transform: { value: "translate(0px, 40px)", startAt: 0, endAt: 0.5 }
    },
    active: {
      transform: "translate(0px, 10px)"
    }
  },
  400
);

const useIconStyledMotion = makeStyledTransition(
  ({ color }) => ({
    inactive: {
      transform: "scale(1, 1)",
      color: "rgba(204,204,204,1)"
    },
    active: {
      transform: {
        value: "scale(1, 1)",
        controls: ["scale(1,1.75)"],
        easing: "overshoot"
      },
      color: color
    }
  }),
  800
);

const NamedIcon = ({
  color: backgroundColor = "rgba(118, 209, 197, 1)",
  name,
  width = 100,
  isActive = false,
  children,
  ...props
} = {}) => {
  const state = isActive ? "active" : "inactive";
  const lineRef = useRef(null);
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const iconRef = useRef(null);

  useLineStyledMotion(state, { width }, lineRef);
  useContainerStyledMotion(state, { width }, containerRef);
  useNameStyledMotion(state, nameRef);
  useIconStyledMotion(state, { color: backgroundColor }, iconRef);

  return (
    <div style={wrapperStyle} {...props}>
      <div ref={containerRef} style={containerStyle}>
        <div ref={nameRef} style={{ ...nameStyle, color: backgroundColor }}>
          {name}
        </div>
        <div ref={lineRef} style={{ ...lineStyle, backgroundColor }}></div>
        <div ref={iconRef} style={iconContainer}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default NamedIcon;
