We need to convert everything to typescript, and update to motion-ux 5.0

Make the endAt and startAt have default values when use complex configurations.

```ts
const useTransition = makeStyledTransition({
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
});
```

```ts

const pulse = {
  from: {
    transform: {
      value: "scale(1) translate(0px, 0px)",
      easeOut: "quad",
    },
  },
  "50%": {
    transform: {
      value: "scale(2) translate(0px, 0px)",
      easeIn: "quad",
      easeOut: "quad",
    },
  },
  to: {
    transform: {
      value: "scale(1) translate(0px, 0px)",
      easeIn: "quad",
    },
  },
};

const shake = {
  from: {
    transform: {
      value: "scale(1) translate(0px, 0px)",
      easeOut: "elastic",
    },
  },
  to: {
    transform: {
      value: "scale(1) translate(0px, 0px)",
      easeIn: "elastic",
    },
  },
};

const useAnimation = makeStyledAnimation({
  pulse: {
    animation: pulse,
    duration: 1000,
    iterationCount: Infinity // Defaults to 1
    transitionDuration: 700, // Defaults to the duration of the animation.
    transitionEasing: "easeOutBack", // Defaults to "linear".
  },
  shake: {
    animation: shake,
    duration: 1000,
    iterationCount: Infinity // Defaults to 1
    transitionDuration: 700, // Defaults to the duration of the animation.
    transitionEasing: "easeOutBack", // Defaults to "linear".
  }
});
```

```ts
const useStyledTransition = makeStyledTransition({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
});

const useStyledTransition = makeStyledTransition({
  hidden: {
    opacity: 0,
    display: {
      startAt: 1,
      endAt: 1,
      value: "none",
    },
  },
  visible: {
    opacity: 1,
    display: {
      startAt: 0,
      endAt: 0,
      value: "block",
    },
  },
});

const useStyledTransition = makeStyledTransition(
  {
    hidden: {
      opacity: 0,
      transform: {
        value: "translate(0px, 0px)",
        easeIn: "expo", // Defaults to linear
        easeOut: "quad", // Defaults to linear
        controlsOut: ["translate(50px, 50px)"], // Defaults to []
        controlsIn: ["translate(50px, 50px)"], // Defaults to []
      },
    },
    visible: {
      opacity: 1,
      transform: {
        value: "translate(100px, 100px)",
        easeIn: "expo",
        easeOut: "quad",
      },
    },
  },
  1000
);

const ref = useStyledTransition("hidden", {
  ref: myRef,
  duration: 1000, // Custom override.
  onFinish: () => {},
  onStart: () => {},
  delay: 1000,
  on: {
    "0%": () => {},
    "100%": () => {},
  },
  props: {
    customProps: 1,
  },
});
```

```ts
const ref = useTransition(
  {},
  {
    ref: myRef,
    render: (animation: Animation) => {},
    duration: 1000, // Custom override.
    onFinish: () => {},
    onStart: () => {},
    delay: 1000,
    on: {
      "0%": () => {},
      "100%": () => {},
    },
  }
);
```
