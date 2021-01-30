import React, { useState, useEffect } from "react";
import Compass from "./Compass";
import PipelinePath from "./PipelinePath";
import PointAndClick from "./PointAndClick";
import Switch from "../../makeStyledTransition/stories/Switch";

export default {
  component: null,
  title: "useTransition"
};

const bigHoverStyles = {
  display: "inline-flex",
  width: "100px",
  height: "100px",
  backgroundColor: "#dedede",
  border: "1px solid #ccc",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box"
};

const stateNames = ["up", "right", "down", "left"];
const getRandomState = () => {
  const index = Math.round(Math.random() * (stateNames.length - 1));
  return stateNames[index];
};

let initialPositions = new Array(50).fill("up");
initialPositions = initialPositions.map(() => {
  return getRandomState();
});

const generatedValue = max => {
  return Math.round(Math.random() * max);
};

const BigHoverButton = ({ style, children, ...props }) => {
  return (
    <div {...props} style={{ ...bigHoverStyles, ...style }}>
      {children}
    </div>
  );
};

export const Default = () => {
  const [positions, setPositions] = useState(initialPositions);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPositions = initialPositions.map(() => {
        return getRandomState();
      });
      setPositions(newPositions);
    }, 600);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const compasses = positions.map((position, index) => {
    return <Compass key={index} position={position} animate={animate} />;
  });

  return (
    <div>
      <Switch
        onChange={value => {
          setAnimate(value);
        }}
        defaultState="on"
      />
      <div style={{ display: "inline-block", width: "300px", height: "300px" }}>
        <BigHoverButton
          onMouseOver={() => {
            const newPositions = initialPositions.map(() => {
              return "up";
            });

            setPositions(newPositions);
          }}
        >
          Top
        </BigHoverButton>
        <BigHoverButton
          onMouseOver={() => {
            const newPositions = initialPositions.map(() => {
              return "right";
            });

            setPositions(newPositions);
          }}
        >
          Right
        </BigHoverButton>
        <br />
        <BigHoverButton
          onMouseOver={() => {
            const newPositions = initialPositions.map(() => {
              return "down";
            });

            setPositions(newPositions);
          }}
        >
          Bottom
        </BigHoverButton>
        <BigHoverButton
          onMouseOver={() => {
            const newPositions = initialPositions.map(() => {
              return "left";
            });

            setPositions(newPositions);
          }}
        >
          Left
        </BigHoverButton>
      </div>
      <br />
      {compasses}
    </div>
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

export const PointAndClickDemo = () => {
  return <PointAndClick />;
};
