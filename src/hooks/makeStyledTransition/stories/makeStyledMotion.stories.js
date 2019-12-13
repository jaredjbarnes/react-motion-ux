import React, { useState } from "react";
import Switch from "./Switch";
import Button from "./Button";
import Option from "./Option";
import OptionButton from "./OptionButton";
import Menu from "./Menu";
import FadeToNothing from "./FadeToNothing";
import NamedIcon from "./NamedIcon";
import Settings from "@material-ui/icons/Settings";
import MobileMenu from "./MobileMenu";
import Blink from "./Blink";
import Pulse from "./Pulse";

export default {
  component: null,
  title: "makeStyledTransition"
};

export const BlinkDemo = () => {
  return <Blink />;
};

export const PulseDemo = () => {
  return <Pulse />;
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

export const MenuDemo = () => {
  return <Menu style={{ position: "absolute", top: "0px", left: "100px" }} />;
};

export const DisplayNoneExample = () => {
  return <FadeToNothing />;
};

export const NamedIconDemo = () => {
  const [state, setState] = useState(true);

  const onActivateClick = () => {
    setState(true);
  };

  const onInactivate = () => {
    setState(false);
  };

  return (
    <div>
      <button onClick={onActivateClick}>Activate</button>
      <button onClick={onInactivate}>Inactivate</button>
      <br />
      <NamedIcon isActive={state} name="settings" width={70}>
        <Settings fontSize="large" />
      </NamedIcon>
    </div>
  );
};

export const MultipleNamedIconDemo = () => {
  return <MobileMenu />;
};
