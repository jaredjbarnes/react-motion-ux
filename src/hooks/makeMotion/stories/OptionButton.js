import React, { useState } from "react";
import Button from "./Button";
import Option from "./Option";

const OptionButton = ({ onClick } = {}) => {
  const [state, setState] = useState("default");

  const toggle = (...args) => {
    if (state === "default") {
      setState("close");
    } else {
      setState("default");
    }

    if (typeof onClick === "function") {
      onClick(...args);
    }
  };

  return (
    <Button onClick={toggle}>
      <Option state={state} />
    </Button>
  );
};

export default OptionButton;
