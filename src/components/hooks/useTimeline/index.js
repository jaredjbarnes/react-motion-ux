import { useRef, useEffect, useState } from "react";
import { Timeline, easings } from "motion-ux";
import getValues from "../getValues";
import isEqual from "../isEqual";

const cleanUp = (timeline, observer) => {
  if (timeline.current != null) {
    timeline.current.stop();
  }

  if (observer.current != null) {
    observer.current.dispose();
  }
};

const useTimeline = options => {
  const timeline = useRef(null);
  const observer = useRef(null);
  const lastOptions = useRef(options);
  const [values, setValues] = useState(null);
  const isDifferent = !isEqual(lastOptions, options);

  if (isDifferent) {
    cleanUp(timeline, observer);

    timeline.current = new Timeline(options);
    observer.current = timeline.current.observe("RENDER", () => {
      setValues(getValues(timeline.current));
    });

    timeline.current.play();
  }

  useEffect(() => {
    return () => {
      cleanUp(timeline, observer);
    };
  }, []);

  lastOptions.current = options;

  return [values || getValues(timeline.current), timeline.current];
};

export { easings };

export default useTimeline;
