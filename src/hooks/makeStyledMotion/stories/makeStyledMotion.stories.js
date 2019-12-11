import React, { useState } from "react";
import Switch from "./Switch";
import Button from "./Button";
import Option from "./Option";
import OptionButton from "./OptionButton";
import Menu from "./Menu";
import FadeToNothing from "./FadeToNothing";
import NamedIcon from "./NamedIcon";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import AccessTimeOutlined from "@material-ui/icons/AccessTimeOutlined";
import SecurityOutlined from "@material-ui/icons/SecurityOutlined";
import Settings from "@material-ui/icons/Settings";

export default {
  component: null,
  title: "makeStyledMotion"
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
  const [state, setState] = useState("home");

  return (
    <div
      style={{
        width: "100%",
        height: "800px",
        backgroundColor: "#ccc",
        paddingTop: "100px",
        textAlign: "center"
      }}
    >
      <div
        style={{
          display: "inline-flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "350px",
          height: "100px",
          borderRadius: "10px 10px 50px 50px",
          backgroundColor: "rgba(240,240,240,1)",
          boxShadow: "0px 5px 15px rgba(0,0,0,0.25)"
        }}
      >
        <NamedIcon
          isActive={state === "home"}
          name="Home"
          onClick={() => {
            setState("home");
          }}
          width={53}
        >
          <HomeIcon fontSize="large" />
        </NamedIcon>
        <NamedIcon
          isActive={state === "time"}
          name="Time"
          onClick={() => {
            setState("time");
          }}
          width={43}
        >
          <AccessTimeOutlined fontSize="large" />
        </NamedIcon>
        <NamedIcon
          isActive={state === "guard"}
          name="Guard"
          onClick={() => {
            setState("guard");
          }}
          width={55}
        >
          <SecurityOutlined fontSize="large" />
        </NamedIcon>
        <NamedIcon
          isActive={state === "settings"}
          name="Settings"
          onClick={() => {
            setState("settings");
          }}
          width={70}
        >
          <Settings fontSize="large" />
        </NamedIcon>
      </div>
    </div>
  );
};
