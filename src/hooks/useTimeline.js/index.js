import { useRef, useEffect } from "react";
import { Timeline } from "motion-ux";
import isEqual from "../isEqual";

const useTimeline = options => {
  const timeline = useRef(null);
  const lastOptions = useRef(null);
  const isDifferent = !isEqual(options, lastOptions.current);

  if (timeline.current == null) {
    timeline.current = new Timeline();
  } else if (isDifferent) {
    timeline.current.dispose();
    timeline.current = new Timeline();
  }

  useEffect(() => {
    return () => {
      return timeline.current.dispose();
    };
  }, []);

  lastOptions.current = options;
  return timeline.current;
};

export default useTimeline();
