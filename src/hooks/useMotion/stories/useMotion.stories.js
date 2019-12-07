import React, { useState, useEffect } from "react";
import Compass from "./Compass";

export default {
  component: null,
  title: "useMotion"
};

const stateNames = ["up", "right", "down", "left"];
const getRandomState = () => {
  const index = Math.round(Math.random() * (stateNames.length - 1));
  return stateNames[index];
};

let initialPositions = new Array(20).fill("up");
initialPositions = initialPositions.map(() => {
  return getRandomState();
});

export const Default = () => {
  const [positions, setPositions] = useState(initialPositions);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPositions = initialPositions.map(() => {
        return getRandomState();
      });
      setPositions(newPositions);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const compasses = positions.map((position, index) => {
    return <Compass key={index} position={position} />;
  });

  return (
    <div>
      <button
        onClick={() => {
          const newPositions = initialPositions.map(() => {
            return "up";
          });

          setPositions(newPositions);
        }}
      >
        Top
      </button>
      <button
        onClick={() => {
          const newPositions = initialPositions.map(() => {
            return "right";
          });

          setPositions(newPositions);
        }}
      >
        Right
      </button>
      <button
        onClick={() => {
          const newPositions = initialPositions.map(() => {
            return "down";
          });

          setPositions(newPositions);
        }}
      >
        Bottom
      </button>
      <button
        onClick={() => {
          const newPositions = initialPositions.map(() => {
            return "left";
          });

          setPositions(newPositions);
        }}
      >
        Left
      </button>
      {compasses}
    </div>
  );
};
