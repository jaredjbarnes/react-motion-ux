import easeOut from "./easeOut";
import { Timeline, BlendedEasing } from "motion-ux";

export default class TransitionMediator {
  constructor() {
    this.duration = 0;
    this.timeline = null;
    this.shouldAnimate = true;
    this.animatedProperties = null;
    this.initialProperties = null;
    this.lastAnimatedProperties = null;
    this.node = null;

    this.render = () => {};
    this.onComplete = () => {};
    this.configure = () => {};
  }

  setShouldAnimate(shouldAnimate) {
    this.shouldAnimate = shouldAnimate;
  }

  setAnimatedProperties(animatedProperties) {
    this.animatedProperties = animatedProperties;
    this.transformAnimatedProperties(animatedProperties);
  }

  setInitialProperties(initialProperties) {
    if (this.initialProperties != null && this.lastAnimatedProperties == null) {
      this.transformAnimatedProperties(initialProperties);
      this.initialProperties = initialProperties;
      this.lastAnimatedProperties = initialProperties;
    }
  }

  setOnCompleteCallback(onComplete) {
    if (typeof onComplete === "function") {
      this.onComplete = onComplete;
    }
  }

  setConfigureCallback(configure) {
    if (typeof configure === "function") {
      this.configure = configure;
    }
  }

  setNode(node) {
    if (this.node !== node) {
      this.node = node;

      if (this.node != null) {
        this.safelyRender(this.convertAnimatedPropertiesToValues());
        this.lastAnimatedProperties = this.animatedProperties;
      }
    }
  }

  setRenderCallback(render) {
    if (typeof render === "function") {
      this.render = render;
    }
  }

  setDuration(duration) {
    if (typeof duration === "number") {
      this.duration = duration;
    }
  }

  updateAnimationProperties(animatedProperties) {
    if (animatedProperties == null) {
      this.resetTimeline();
      this.lastAnimatedProperties = null;
      return;
    }

    this.setAnimatedProperties(animatedProperties);

    if (this.lastAnimatedProperties == null || !this.shouldAnimate) {
      this.resetTimeline();
      this.safelyRender(this.convertAnimatedPropertiesToValues());
      this.lastAnimatedProperties = this.animatedProperties;
      return;
    }

    if (this.needsTransition()) {
      this.assertAnimatingTheSameProperties();

      if (this.timeline == null) {
        this.createNewTimeline();
      } else {
        this.createAdjustedTimeline();
      }

      this.configureTimeline();
      this.timeline.play();
      this.lastAnimatedProperties = this.animatedProperties;
    }
  }

  safelyRender(properties) {
    if (this.node != null && typeof this.render === "function") {
      this.render(this.node, properties);
    }
  }

  needsTransition() {
    return (
      !this.isEqual(this.animatedProperties, this.lastAnimatedProperties) &&
      this.lastAnimatedProperties != null
    );
  }

  assertAnimatingTheSameProperties() {
    const keysA = Object.keys(this.animatedProperties);
    const keysB = Object.keys(this.lastAnimatedProperties);

    keysA.sort();
    keysB.sort();

    const areTheSame = keysA.join("|") === keysB.join("|");

    if (!areTheSame) {
      throw new Error(
        `Invalid Arguments: When transitioning, you need to animate all of the same properties, these have different property sets. From:${JSON.stringify(
          this.lastAnimatedProperties
        )}, To:${JSON.stringify(this.animatedProperties)}`
      );
    }
  }

  createNewTimeline() {
    const animations = this.createAnimations();
    this.timeline = new Timeline({ animations, duration: this.duration });
  }

  createAdjustedTimeline() {
    const animations = this.createAdjustedAnimations();
    this.resetTimeline();
    this.timeline = new Timeline({ animations, duration: this.duration });
  }

  configureTimeline() {
    if (typeof this.configure === "function") {
      this.configure(this.timeline);
    }

    this.timeline.observe("RENDER", ({ animations }) => {
      this.safelyRender(animations.useTransition);
    });

    this.timeline.observeTime(1, () => {
      this.timeline = null;
      if (typeof this.onComplete === "function") {
        this.onComplete();
      }
    });
  }

  convertAnimatedPropertiesToValues() {
    return Object.keys(this.animatedProperties).reduce((properties, key) => {
      properties[key] = this.animatedProperties[key].value;
      return properties;
    }, {});
  }

  transformAnimatedProperties(animatedProperties) {
    Object.keys(animatedProperties).forEach((key) => {
      animatedProperties[key] = this.transformStyle(animatedProperties[key]);
    });
  }

  transformStyle(value) {
    let objectValue = value;

    if (typeof value === "object" && value != null) {
      objectValue = value;
    } else {
      objectValue = {
        value: value,
      };
    }

    objectValue.value = objectValue.value.toString();
    return objectValue;
  }

  createAnimations() {
    const lastProperties = this.lastAnimatedProperties;
    const properties = this.animatedProperties;
    const name = "useTransition";

    const animations = Object.keys(properties).map((key) => {
      const property = properties[key];
      const lastProperty = lastProperties[key];

      return {
        ...property,
        from: lastProperty.value,
        to: property.value,
        property: key,
        name: name,
        startAt: typeof property.startAt === "number" ? property.startAt : 0,
        endAt: typeof property.endAt === "number" ? property.endAt : 1,
        easing: easeOut[property.easing] || easeOut.expo,
      };
    });

    return animations;
  }

  createAdjustedAnimations() {
    const timeline = this.timeline;
    const lastOptions = this.lastAnimatedProperties;
    const newOptions = this.animatedProperties;
    const name = "useTransition";
    const currentValues = timeline.getCurrentValues()[name];
    const shouldRedirect = timeline.progress !== 1;

    const animations = Object.keys(newOptions).map((key) => {
      const oldOption = lastOptions[key];
      const option = newOptions[key];
      const from = currentValues[key];
      const easing = easeOut[option.easing];

      const controls = Array.isArray(option.controls)
        ? option.controls.slice(0)
        : [];

      if (shouldRedirect) {
        new BlendedEasing({
          easingA: easeOut[oldOption.easing] || easeOut.expo,
          easingB: easeOut[option.easing] || easeOut.expo,
          offset: timeline.progress,
        });

        controls.unshift(oldOption.value);
        controls.push(option.value);
      }

      const animation = {
        ...option,
        property: key,
        name: name,
        to: option.value,
        from,
        controls,
        startAt: typeof option.startAt === "number" ? option.startAt : 0,
        endAt: typeof option.endAt === "number" ? option.endAt : 1,
        easing: easing,
      };

      return animation;
    });

    return animations;
  }

  isEqual(objectA, objectB) {
    return JSON.stringify(objectA) === JSON.stringify(objectB);
  }

  resetTimeline() {
    if (this.timeline != null) {
      this.timeline.dispose();
      this.timeline = null;
    }
  }

  dispose() {
    if (this.timeline != null) {
      this.timeline.dispose();
    }
  }
}
