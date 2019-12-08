import OptionButton from "./OptionButton";
import Button from "./Button";
import React, { useState } from "react";
import makeMotion from "../index";

const wrapper = {
  display: "inline-block",
  position: "relative"
};

const menuContainer = {
  display: "inline-flex",
  position: "relative",
  width: "255px",
  height: "100px",
  justifyContent: "center",
  alignItems: "center"
};

const option = {
  position: "absolute",
  top: "0px",
  left: "0px"
};

const useOneOptionMotion = makeMotion(
  {
    opened: {
      transform: {
        value: "translate(0px, 60px)",
        controls: ["translate(0px, 0px)"]
      },
      opacity: "1"
    },
    closed: {
      transform: "translate(0px, 0px)",
      opacity: "0"
    }
  },
  300
);

const useTwoOptionMotion = makeMotion(
  {
    opened: {
      transform: {
        value: "translate(-60px, 30px)",
        controls: ["translate(0px, 40px)"]
      },
      opacity: "1"
    },
    closed: {
      transform: {
        value: "translate(0px, 0px)",
        controls: ["translate(0px, 40px)"]
      },

      opacity: "0"
    }
  },
  300
);

const useThreeOptionMotion = makeMotion(
  {
    opened: {
      transform: {
        value: "translate(60px, 30px)",
        controls: ["translate(0px, 40px)"]
      },
      opacity: "1"
    },
    closed: {
      transform: {
        value: "translate(0px, 0px)",
        controls: ["translate(0px, 40px)"]
      },
      opacity: "0"
    }
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
    <div ref={ref} style={wrapper}>
      <div style={menuContainer}>
        <div style={{ position: "relative" }}>
          <Button ref={oneRef} style={option}>
            1
          </Button>
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
