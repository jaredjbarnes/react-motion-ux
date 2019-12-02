import React, { useRef, useEffect } from "react";
import createShowAnimation from "./createShowAnimation";

const Button = props => {
  const ref = useRef(null);
  const style = {
    backgroundColor: "red",
    width: "100px",
    height: "100px"
  };

  useEffect(() => {
    if (props.show) {
      try {
        const timeline = createShowAnimation(ref.current.style);
        timeline.play();

        return () => {
          timeline.stop();
        };
      } catch (error) {
        debugger;
      }
    }
  });

  return (
    <div ref={ref} style={style}>
      box
    </div>
  );
};

export default Button;
