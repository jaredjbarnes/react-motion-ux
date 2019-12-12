import { useEffect, useRef } from "react";

const useInterval = (callback, time) => {
  const callbackRef = useRef(null);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof time === "number") {
      const interval = setInterval(() => {
        callbackRef.current();
      }, time);

      return () => {
        clearInterval(interval);
      };
    }
  }, [time]);
};

export default useInterval;
