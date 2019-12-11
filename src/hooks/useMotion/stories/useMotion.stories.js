import React, { useState, useEffect } from "react";
import Compass from "./Compass";
import PipelinePath from "./PipelinePath";

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

const generatedValue = max => {
  return Math.round(Math.random() * max);
};

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

export const PipelinePathDemo = () => {
  return (
    <PipelinePath
      originX={0}
      originY={0}
      destinationX={100}
      destinationY={100}
    />
  );
};

export const AnimatedPipelinePath = () => {
  const [state, setState] = useState({
    originX: 300,
    originY: 300,
    destinationX: 100,
    destinationY: 100
  });

  const interval = setInterval(() => {
    const state = {
      originX: generatedValue(300),
      originY: generatedValue(300),
      destinationX: generatedValue(300),
      destinationY: generatedValue(300)
    };

    setState(state);
  }, 2000);

  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div style={{ position: "relative", width: "800px", height: "800px" }}>
      <PipelinePath {...state} />
    </div>
  );
};

export const AnimatedPipelinePathWithoutAnimation = () => {
  const [state, setState] = useState({
    originX: 300,
    originY: 300,
    destinationX: 100,
    destinationY: 100,
    animate: false
  });

  const interval = setInterval(() => {
    const state = {
      originX: generatedValue(300),
      originY: generatedValue(300),
      destinationX: generatedValue(300),
      destinationY: generatedValue(300),
      animate: false
    };

    setState(state);
  }, 2000);

  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div style={{ position: "relative", width: "800px", height: "800px" }}>
      <PipelinePath {...state} />
    </div>
  );
};
