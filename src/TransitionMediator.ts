import {
  Player,
  Animation,
  IAnimationKeyframes,
  IAnimationKeyframeValue,
} from "motion-ux";
import { EasingFunction } from "motion-ux/dist/easings";

interface ITransitionState {
  [key: string]: IAnimationKeyframeValue;
}

export class TransitionMediator {
  private currentStateName: string;
  private currentAnimation: Animation;
  private player: Player;
  private element: HTMLElement | null;

  constructor(keyframes: IAnimationKeyframes) {
    const stateName = "initial";
    const animation = Animation.fromKeyframes(stateName, keyframes);
    this.currentStateName = stateName;
    this.currentAnimation = animation;
    this.player = new Player(this.currentAnimation, { render: this.render });

    // These need to remember their context to work correctly, so we bind them.
    this.render = this.render.bind(this);
    this.setElement = this.setElement.bind(this);
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
    if (this.currentStateName !== name) {
      const currentPositions = this.player.animation.getCurrentValues()[
        this.currentStateName
      ];

      if (this.player.state === Player.states.STOPPED) {
        this.currentAnimation = Animation.fromKeyframes(name, {
          from: currentPositions,
          to: state,
        });

        this.player.animation = this.currentAnimation;
        this.player.seek(0);
      } else {
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
      }

      this.player.play();
    }
  }

  setElement(element: HTMLElement) {
    this.element = element;
  }
}
