import React from "react";
import useMotion from "../index";

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
  curveWidth: 100
};

const applyAttributeValues = (ref, values) => {
  if (ref.current != null && typeof ref.setAttribute != "function") {
    const element = ref.current;

    Object.keys(values).forEach(key => {
      element.setAttribute(key, values[key]);
    });
  }
};

const PipelinePath = (
  {
    originX = 0,
    originY = 0,
    destinationX = 0,
    destinationY = 0,
    curveWidth = 100
  },
  defaultValue
) => {
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
    5000,
    applyAttributeValues
  );

  return (
    <svg style={svgStyle}>
      <path
        ref={ref}
        d="M 0 0 C 0 0, 0 0, 0 0"
        fill="transparent"
        stroke="black"
        strokeWidth="5"
      />
    </svg>
  );
};

export default PipelinePath;
