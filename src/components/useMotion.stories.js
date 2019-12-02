import React, { useState } from "react";
import Compass from "./Compass.js";

export default {
  component: null,
  title: "useMotion"
};

export const Default = () => {
  const [position, setPosition] = useState("left");

  return (
    <div>
      <button
        onClick={() => {
          setPosition("up");
        }}
      >
        Top
      </button>
      <button
        onClick={() => {
          setPosition("right");
        }}
      >
        Right
      </button>
      <button
        onClick={() => {
          setPosition("down");
        }}
      >
        Bottom
      </button>
      <button
        onClick={() => {
          setPosition("left");
        }}
      >
        Left
      </button>
      <Compass position={position} />
    </div>
  );
};
