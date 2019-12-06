import React, { useState } from "react";
import Switch from "./Switch";
import Button from "./Button";
import Option from "./Option";
import OptionButton from "./OptionButton";

export default {
  component: null,
  title: "makeMotion"
};

export const SwitchDemo = () => {
  return <Switch />;
};

export const ButtonDemo = () => {
  return <Button></Button>;
};

export const OptionDemo = () => {
  const [state, setState] = useState("default");

  const onDefaultClick = () => {
    setState("default");
  };

  const onCloseClick = () => {
    setState("close");
  };

  return (
    <div>
      <button onClick={onDefaultClick}>Options State</button>
      <button onClick={onCloseClick}>Close State</button>
      <br />
      <Option state={state} />
    </div>
  );
};

export const OptionButtonDemo = () => {
    return <OptionButton></OptionButton>;
  };
