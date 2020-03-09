import React, { CSSProperties } from "react";
import { useTransition, makeStyledTransition } from "./index";

const useStyledTransition = makeStyledTransition<HTMLDivElement>({
    default: {
        backgroundColor: "rgba(0,0,0,1)"
    },
    pressed: {
        backgroundColor: "rgba(0,0,0,0.5)"
    }
}, 100);

React.forwardRef<HTMLDivElement>((props, forwardedRef) => {
  const ref = useStyledTransition("default", {ref: forwardedRef});

  return <div ref={ref}></div>;
});

