import React, { useState, useRef } from "react";
import useTransition from "../index";

const containerStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
};

const dotStyle = {
  position: "absolute",
  top: "0px",
  left: "0px",
  transform: "translate(0px,0px)",
  borderRadius: "50%",
  backgroundColor: "red",
  width: "50px",
  height: "50px",
};

const getRandomNumber = (min, max) => {
  const range = max - min;
  return min + Math.round(Math.random() * range);
};

const createRandomColor = () => {
  return `rgba(${getRandomNumber(0, 255)},${getRandomNumber(
    0,
    255
  )},${getRandomNumber(0, 255)},${(0, getRandomNumber(0.5, 1))})`;
};

const applyStyles = (element, values) => {
  if (element != null && element.style != null) {
    Object.keys(values).forEach((key) => {
      element.style[key] = values[key];
    });
  }
};

function Ball({ x, y, backgroundColor }) {
  const ref = useTransition(
    {
      transform: `translate(${x}px, ${y}px)`,
      backgroundColor: backgroundColor,
    },
    {
      duration: 3000,
      applyValues: applyStyles,
    }
  );

  return <div ref={ref} style={dotStyle}></div>;
}

const PointAndClick = () => {
  const containerRef = useRef(null);
  const timeoutRef = useRef(0);

  const [state, setState] = useState(() => ({
    x: 0,
    y: 0,
    backgroundColor: "rgba(255,0,0,1)",
  }));

  const onClick = (event) => {
    const color = createRandomColor();
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = event.pageX - containerRect.left;
    const y = event.pageY - containerRect.top;

    clearTimeout(timeoutRef.current);

    setTimeout(() => {
      setState({
        x,
        y,
        backgroundColor: color,
      });
    }, 100);
  };

  return (
    <div ref={containerRef} style={containerStyle} onMouseMove={onClick}>
      <Ball {...state} />
    </div>
  );
};

export default PointAndClick;
