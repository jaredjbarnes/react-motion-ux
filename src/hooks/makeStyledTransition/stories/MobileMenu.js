import React, { useState } from "react";
import NamedIcon from "./NamedIcon";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import AccessTimeOutlined from "@material-ui/icons/AccessTimeOutlined";
import SecurityOutlined from "@material-ui/icons/SecurityOutlined";
import Settings from "@material-ui/icons/Settings";

const MouseSensorPad = props => {
  return (
    <div
      {...props}
      style={{
        width: "100px",
        height: "50px",
        backgroundColor: "rgb(100,100,100)",
        border: "1px solid #000"
      }}
    ></div>
  );
};

const MobileMenu = () => {
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
      <div>
        <MouseSensorPad
          onMouseEnter={() => {
            setState("home");
          }}
        />
        <MouseSensorPad
          onMouseEnter={() => {
            setState("time");
          }}
        />
        <MouseSensorPad
          onMouseEnter={() => {
            setState("guard");
          }}
        />
        <MouseSensorPad
          onMouseEnter={() => {
            setState("settings");
          }}
        />
      </div>
      <div
        style={{
          display: "inline-flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "400px",
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

export default MobileMenu;
