import React, { useRef } from "react";
import useTransition from "../index";

const svgStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%"
};

const defaultValue = {
  originX: 0,
  originY: 0,
  destinationX: 0,
  destinationY: 0,
  curveWidth: 100,
  animated: true
};

const startKnobStyle = {
  backgroundColor: "rgba(0,0,0,1)",
  borderRadius: "0px 5px 5px 0px",
  height: "9px",
  width: "9px"
};

const endKnobStyle = {
  backgroundColor: "rgba(0,0,0,1)",
  borderRadius: "8px 0px 0px 8px",
  height: "15px",
  width: "15px"
};

const applyAttributeValues = (element, values) => {
  if (element != null && typeof element.setAttribute === "function") {
    Object.keys(values).forEach(key => {
      element.setAttribute(key, values[key]);
    });
  }
};

const applyStyles = (element, values) => {
  if (element != null && element.style != null) {
    Object.keys(values).forEach(key => {
      element.style[key] = values[key];
    });
  }
};

const PipelinePath = ({
  originX = 0,
  originY = 0,
  destinationX = 0,
  destinationY = 0,
  curveWidth = 100,
  animate = true
} = defaultValue) => {
  const controlPoint1 = {
    x: originX + curveWidth,
    y: originY
  };

  const controlPoint2 = {
    x: destinationX - curveWidth,
    y: destinationY
  };

  const ref = useTransition(
    {
      d: `M ${originX} ${originY} C ${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${destinationX} ${destinationY}`
    },
    {
      duration: animate ? 5000 : 0,
      applyValues: applyAttributeValues
    }
  );

  const startKnobRef = useTransition(
    {
      transform: `translate(${originX - 5}px, ${originY - 5}px)`
    },
    {
      duration: animate ? 5000 : 0,
      applyValues: applyStyles
    }
  );

  const endKnobRef = useTransition(
    {
      transform: `translate(${destinationX - 8}px, ${destinationY - 16}px)`
    },
    {
      duration: animate ? 5000 : 0,
      applyValues: applyStyles
    }
  );

  return (
    <div style={svgStyle}>
      <svg style={svgStyle}>
        <path
          ref={ref}
          d="M 0 0 C 0 0, 0 0, 0 0"
          fill="transparent"
          stroke="black"
          strokeWidth="3"
        />
      </svg>
      <div ref={startKnobRef} style={startKnobStyle}></div>
      <div ref={endKnobRef} style={endKnobStyle}></div>
    </div>
  );
};

export default PipelinePath;
