import React, { useState } from "react";
import Switch from "./Switch";
import Button from "./Button";
import Option from "./Option";
import OptionButton from "./OptionButton";
import Menu from "./Menu";
import FadeInOnMount from "./FadeInOnMount";
import NamedIcon from "./NamedIcon";
import Settings from "@material-ui/icons/Settings";
import MobileMenu from "./MobileMenu";
import makeStyledTransition from "..";
import TrafficLight from "./TrafficLight";

export default {
  component: null,
  title: "makeNativeTransition"
};

export const InitialState = ()=>{
  return <FadeInOnMount />
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

export const TrafficLightDemo = () => {
  return <TrafficLight />;
};

const useStyledTransition = makeStyledTransition(
  {
    opened: {
      opacity: "1"
    },
    closed: {
      opacity: "0"
    }
  },
  1000
);

export const InvalidStateName = () => {
  const ref = useStyledTransition("invalid-name");
  return <div ref={ref}></div>;
};

export const NullStateName = () => {
  const ref = useStyledTransition(null);
  return <div ref={ref}></div>;
};

const useMissingStyledTransition = makeStyledTransition(
  {
    opened: {
      opacity: "1"
    },
    closed: {
      backgroundColor: "rgba(0,0,0,1)"
    }
  },
  1000
);