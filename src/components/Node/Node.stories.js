import React from "react";
import Node from "./index";

export default {
  component: Node,
  title: "Node"
};

export const Default = () => {
  return <Node></Node>;
};

export const Show = () => {
  return <Node show></Node>;
};
