We need to convert everything to typescript, and update to motion-ux 5.0


Make the endAt and startAt have default values when use complex configurations.

```ts
const useTransition = makeStyledTransition({
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
});
```

```ts

const pulse = Animation.fromKeyframes({
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
});

const shake = Animation.fromKeyframes({
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
});

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