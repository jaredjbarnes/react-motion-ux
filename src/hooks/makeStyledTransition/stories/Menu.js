import OptionButton from "./OptionButton";
import Button from "./Button";
import React, { useState, useRef } from "react";
import makeStyledTransition from "../index";
import { Easing } from "motion-ux";

const wrapper = {
  display: "inline-block",
  position: "relative",
};

const menuContainer = {
  display: "block",
  position: "relative",
};

const option = {
  display: "block",
  position: "absolute",
  top: "0px",
  left: "0px",
};

const useOneOptionMotion = makeStyledTransition(
  {
    opened: {
      transform: {
        value: "translate(0px, 60px)",
        controls: ["translate(0px, 0px)"],
        easing: new Easing([0, 0, 1, 1, 1, 1, 1]),
      },
      opacity: "1",
    },
    closed: {
      transform: "translate(0px, 0px)",
      opacity: "0",
    },
  },
  300
);

const useTwoOptionMotion = makeStyledTransition(
  {
    opened: {
      transform: {
        value: "translate(-60px, 30px)",
        controls: ["translate(0px, 40px)"],
        easing: new Easing([0, 0, 1, 1, 1, 1, 1]),
      },
      opacity: "1",
    },
    closed: {
      transform: {
        value: "translate(0px, 0px)",
        controls: ["translate(0px, 40px)"],
        easing: new Easing([0, 0, 1, 1, 1, 1, 1]),
      },

      opacity: "0",
    },
  },
  300
);

const useThreeOptionMotion = makeStyledTransition(
  {
    opened: {
      transform: {
        value: "translate(60px, 30px)",
        controls: ["translate(0px, 40px)"],
        easing: new Easing([0, 0, 1, 1, 1, 1, 1]),
      },
      opacity: "1",
    },
    closed: {
      transform: {
        value: "translate(0px, 0px)",
        controls: ["translate(0px, 40px)"],
        easing: new Easing([0, 0, 1, 1, 1, 1, 1]),
      },
      opacity: "0",
    },
  },
  300
);

const Menu = React.forwardRef((props = {}, ref) => {
  const [state, setState] = useState("closed");
  const oneRef = useOneOptionMotion(state);
  const twoRef = useTwoOptionMotion(state);
  const threeRef = useThreeOptionMotion(state);

  const onClick = () => {
    if (state === "opened") {
      setState("closed");
    } else {
      setState("opened");
    }
  };

  return (
    <div ref={ref} style={{ ...wrapper, ...props.style }}>
      <div style={menuContainer}>
        <div style={{ position: "relative" }}>
          {state === "opened" ? <Menu ref={oneRef} style={option} /> : null}
          <Button ref={twoRef} style={option}>
            2
          </Button>
          <Button ref={threeRef} style={option}>
            3
          </Button>
          <OptionButton onClick={onClick} />
        </div>
      </div>
    </div>
  );
});

export default Menu;
