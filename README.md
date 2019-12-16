# React Motion UX

The react-motion-ux module offers helpful hooks and access to a powerful animation framework. The purpose of this document is to give examples of basic animations through advance animations.

## Transition Inteligently Between States

```javascript
import React, {useState, useEffect} from "react";
import { makeStyledTransition } from "react-motion-ux";

const style = {
    backgroundColor: "rgba(204,204,204,1)",
    width: "100px",
    height: "100px",
    borderRadius: "50px"
};

const useStyledMotion = makeStyledTransition({
    on: {},
    off: {}
}, 1000);

const useInterval = (callback, time) => {
    const interval = useRef(null);
    useEffect(()=>{
        interval.current = setInterval(callback, time);
        return ()=>{
            clearInterval(interval.current);
        }
    }, []);
};

const MyComponent = () => {
    const [state, setState] = useState("off");
    const ref = useStyledMotion(state);

    useInterval(()=>{
        if (state === "on"){
            setState("off");
        } else {
            setState("on");
        }
    }, 1000);

    return <div ref={ref} style={style}></div>
};
```


## Notes
We could make a shore circuit parsing for typical css like units, numbers, hex, rgba, rgb. And allow the harder parsing to be done with the parsing engine. We could use RegEx to check for these possibilities first. Then if they match create an AST that looks like it was parsed. This could be a potentially huge performance gain for simple values.