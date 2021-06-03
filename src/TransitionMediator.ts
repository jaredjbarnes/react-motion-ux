import { Player, Animation, IAnimationKeyframeValue } from "motion-ux";
import { EasingFunction } from "motion-ux/dist/easings";

interface ITransitionState {
  [key: string]: IAnimationKeyframeValue;
}

const defaultOnComplete = () => {};

export class TransitionMediator {
  private currentStateName: string;
  private currentAnimation: Animation;
  private player: Player;
  private element: HTMLElement | null;
  private onComplete = defaultOnComplete;

  constructor(from: ITransitionState, to: ITransitionState) {
    const stateName = "$__initial__";
    const animation = Animation.fromKeyframes(stateName, { from, to });
    this.currentStateName = stateName;
    this.currentAnimation = animation;

    // These need to remember their context to work correctly, so we bind them.
    this.render = this.render.bind(this);
    this.setElement = this.setElement.bind(this);

    this.player = new Player(this.currentAnimation, { render: this.render });
    this.player.play();
    this.player.observeTime(1, () => {
      this.onComplete();
    });
  }

  render(animation: Animation) {
    if (this.element == null) {
      return;
    }

    const values = animation.getCurrentValues();
    const cssProperties = values[this.currentStateName];

    Object.keys(cssProperties).forEach((key) => {
      this.element.style[key] = cssProperties[key];
    });
  }

  transitionTo(
    name: string,
    state: ITransitionState,
    duration: number,
    transitionDuration: number,
    transitionEasing: EasingFunction
  ) {
    // If its a different state then transition.
    if (this.currentStateName !== name) {
      this.currentAnimation = Animation.fromKeyframes(name, {
        from: state,
        to: state,
      });

      this.player.transitionToAnimation(
        this.currentAnimation,
        duration,
        transitionDuration,
        transitionEasing
      );

      this.player.play();
    }
  }

  setElement(element: HTMLElement) {
    this.element = element;
  }

  setOnComplete(onComplete: () => void) {
    this.onComplete = onComplete;
  }

  dispose() {
    this.player.dispose();
  }
}
