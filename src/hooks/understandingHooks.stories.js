import React, { useCallback, useState, useEffect, useMemo } from "react";

export default {
  component: null,
  title: "understandingHooks"
};

const CallbackComponent = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(state + 1);
      console.log(state);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [state]);

  const callbackRef = useCallback(
    node => {
      console.log("Callback called.", node);
    }, []
  );

  return <div ref={callbackRef}></div>;
};

export const useCallbackDemo = () => {
  return <CallbackComponent />;
};
