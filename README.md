# React Motion UX

The react-motion-ux module offers helpful hooks and access to a powerful animation framework. 

Similar to CSS Transitions react-motion-ux offers ways to transition between styles. However it does it with the idea that styles should be organized by state. For an example, if you want to have an element reveal itself based on state you would create two states, 'visible', and a 'hidden' state. If you were to decide what each of those states looked like with css classes you may end up with something like this.

Visible
```css
.visible {
    opacity: 1;
}

.hidden {
    opacity: 0;
}
```

Now if you were to implement this within a react component it may look something like this.
```javascript
    import React from "react";
    
    const visible = {
        opacity: 1
    };

    const hidden = {
        opacity: 0
    };

    export default Reveal = ({children, isVisible}) => {
        let style;
        
        if (isVisible){
            style = visible;
        } else {
            style = hidden;
        }

        return <div style={style}>{
            children
        }</div>
    };
```

This component would work, however, the change would be harsh. But CSS has an easy fix for that, css transitions.

```javascript
    import React from "react";

    const visible = {
        opacity: 1,
        transition: "opacity 1000ms ease"
    };

    const hidden = {
        opacity: 0,
        transition: "opacity 1000ms ease"
    };

    const Reveal = ({children, isVisible}) => {
        let style;
        
        if (isVisible){
            style = visible;
        } else {
            style = hidden;
        }

        return <div style={style}>{
            children
        }</div>
    };

    export default Reveal;
```

The idea behind react-motion-ux is to make transitions between styled states to be smooth and configurable. Below is an examnple of how to do the example above using react-motion-ux.

```javascript
    import React from "react";
    import { makeStyledTransition } from "react-motion-ux";

    const useStyledTransition = makeStyledTransition({
        visible: {
            opacity: 1
        },
        hidden: {
            opacity: 0
        }
    }, 1000); // 1000 milliseconds - duration

    // visibility being either 'visible', or 'hidden'.
    const Reveal = ({ children, visibility }) => {
        const ref = useStyledTransition(visibility);
        return <div ref={ref}>{children}</div>;
    };

    export default Reveal;

```

Lets explore some of the options that don't exist within native CSS transitions.

## StartAt & EndAt

Lets assume we want the 'Reveal' component to shrink while becoming transparent, and grow while appearing. Let's add a second css property, transform.
```javascript
    import React from "react";
    import { makeStyledTransition } from "react-motion-ux";

    const useStyledTransition = makeStyledTransition({
        visible: {
            opacity: 1,
            transform: "scale(1)"
        },
        hidden: {
            opacity: 0,
            transform: "scale(0.5)"
        }
    }, 1000);

    // visibility being 'visible', or 'hidden'.
    const Reveal = ({ children, visibility }) => {
        const ref = useStyledTransition(visibility);
        return <div ref={ref}>{children}</div>;
    };

    export default Reveal;
```

Now that we have two properties we will use the startAt and endAt options to adjust when changes should happen to each of the animated css properties.

We will have the opacity finish before the scaling does.
```javascript
    import React from "react";
    import { makeStyledTransition } from "react-motion-ux";

    const useStyledTransition = makeStyledTransition({
        visible: {
            opacity: {
                value: 1,
                startAt: 0,
                endAt: 0.5
            },
            transform: "scale(1)"
        },
        hidden: {
            opacity: {
                value: 0,
                startAt: 0,
                endAt: 0.5
            },
            transform: "scale(0.5)"
        }
    }, 1000);

    // visibility being 'visible', or 'hidden'.
    const Reveal = ({ children, visibility }) => {
        const ref = useStyledTransition(visibility);
        return <div ref={ref}>{children}</div>;
    };

    export default Reveal;
```

This tells react-motion-ux, when animating to the visible state, to finish the opacity animation by 50 percent of the total duration of the transition. 

Often times when we make things completely transparent we don't want our users to click on those things. This requires us to clean up the dom from stale nodes. With react-motion-ux there is another way.

```javascript
    import React from "react";
    import { makeStyledTransition } from "react-motion-ux";

    const useStyledTransition = makeStyledTransition({
        visible: {
            opacity: {
                value: 1,
                startAt: 0,
                endAt: 0.5
            },
            display: {
                value: "block",
                startAt: 0.01,
                endAt: 0.01
            },
            transform: "scale(1)"
        },
        hidden: {
            opacity: {
                value: 0,
                startAt: 0,
                endAt: 0.5
            },
            display: {
                value: "none",
                startAt: 0.99,
                endAt: 0.99
            },
            transform: "scale(0.5)"
        }
    }, 1000);

    // visibility being 'visible', or 'hidden'.
    const Reveal = ({ children, visibility }) => {
        const ref = useStyledTransition(visibility);
        return <div ref={ref}>{children}</div>;
    };

    export default Reveal;
```

The code above tells react-motion-ux to assign the value instantanious at a certain point in the transition timeline. In this case we are just assigning a value of 'block' to 'none' or 'none' to 'block' depending on where you are going.

From react-motion-ux's perspective we are describing how we get to the state, not where we came from. This allows react-motion-ux to create intelligent segues when changing between state A and state B. If you are transitioning from state A to state B, but midway from getting to state B you decide to go to point C, react-motion-ux uses bezeir curves to go to state C by way of state B. This creates a smooth transition from any state to another state. We mostly hear of bezier curves being used for timing functions, which are great, but within react-motion-ux we also use them to ease into the new state. This idea isn't new, it has been used in video games to ease from a walking state to a running state. All the animators needed to do is define what a walking and running state look like and let math ease all the millions of variations inbetween.

