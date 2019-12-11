import React from "react";
import useMotion from "../index";
import { rgba } from "polished";

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
  width: "15px",
};

const applyAttributeValues = (ref, values) => {
  if (ref.current != null && typeof ref.setAttribute != "function") {
    const element = ref.current;

    Object.keys(values).forEach(key => {
      element.setAttribute(key, values[key]);
    });
  }
};

const applyStyles = (ref, values) => {
  if (ref.current != null && ref.current.style != null) {
    const element = ref.current;

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

  const ref = useMotion(
    {
      d: `M ${originX} ${originY} C ${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${destinationX} ${destinationY}`
    },
    animate ? 5000 : 0,
    applyAttributeValues
  );

  const startKnobRef = useMotion(
    {
      transform: `translate(${originX - 5}px, ${originY - 5}px)`
    },
    animate ? 5000 : 0,
    applyStyles
  );

  const endKnobRef = useMotion(
    {
      transform: `translate(${destinationX - 8}px, ${destinationY - 16}px)`
    },
    animate ? 5000 : 0,
    applyStyles
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
