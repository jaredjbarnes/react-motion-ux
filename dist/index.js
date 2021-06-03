'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

class DefaultClock {
  constructor() {
    this.registeredCallbacks = new Map();
    this._tick = this._tick.bind(this);
    this.animationFrame = null;
  }

  _tick() {
    this.registeredCallbacks.forEach(callback => {
      callback();
    });

    if (this.registeredCallbacks.size > 0) {
      this.animationFrame = requestAnimationFrame(this._tick);
    } else {
      this.animationFrame = null;
    }
  }

  register(callback) {
    this.registeredCallbacks.set(callback, callback);

    if (this.animationFrame == null) {
      this._tick();
    }
  }

  unregister(callback) {
    this.registeredCallbacks.delete(callback);
  }

  now() {
    return performance.now();
  }
}

const states$1 = {
    ACTIVE: 1,
    STOPPED: 0,
    DISPOSED: -1
};

class Observer {
    constructor(type, callback, unbind){
        this.type = type;
        this.callback = callback;
        this.unbind = unbind;
        this.state = states$1.ACTIVE;
    }

    notify(event){
        if (event.type === this.type){
            this.callback(event);
        } 
    }

    stop(){
        if (this.state === states$1.ACTIVE){
            this.state = states$1.STOPPED;
        }
    }

    start(){
        if (this.state !== states$1.DISPOSED){
            this.state = states$1.ACTIVE;
        }
    }

    dispose(){
        this.state = states$1.DISPOSED;
        this.unbind();
    }
}

class TimeObserver extends Observer {
    constructor(time, callback, unbind){
        super(null, callback, unbind);
        this.time = time;
    }

    notify(event){
        if (typeof event.lastProgress === "number" && typeof event.progress === "number"){
            const high = Math.max(event.progress, event.lastProgress);
            const low = Math.min(event.progress, event.lastProgress);

            if (this.time >= low && this.time <= high){
                this.callback(event);
            }
        }
    }
}

class Observable {
    constructor(){
        this.observers = [];
    }

    observeTime(time, callback){
        const observer = new TimeObserver(time, callback, ()=>{
            const index = this.observers.indexOf(observer);
            if (index > -1){
                this.observers.splice(index, 1);
            }
        });

        this.observers.push(observer);
        return observer;
    }

    observe(type, callback){
        const observer = new Observer(type, callback, ()=>{
            const index = this.observers.indexOf(observer);
            if (index > -1){
                this.observers.splice(index, 1);
            }
        });

        this.observers.push(observer);
        return observer;
    }

    notify(event){
        this.observers.forEach((observer)=>{
            observer.notify(event);
        });
    }

    dispose(){
        this.observers = [];
    }
}

const repeatDirections = {
  DEFAULT: 0,
  ALTERNATE: 1
};

const states = {
  FORWARD: 1,
  REVERSE: -1,
  STOPPED: 0
};

class Scrubber extends Observable {
  static get repeatDirections() {
    return repeatDirections;
  }

  static get states() {
    return states;
  }

  constructor({
    clock,
    duration,
    timeScale,
    render,
    repeatDirection = Scrubber.repeatDirections.DEFAULT
  }) {
    super();
    this._timeScale = 1;
    this._progress = 0;
    this._duration = 0;
    this._lastTimestamp = 0;
    this._animationFrame = null;
    this._iterations = 0;
    this._repeat = 1;
    this._repeatDirection = repeatDirection;
    this.tick = this.tick.bind(this);

    this.clock = clock;
    this.state = Scrubber.states.STOPPED;
    this.timeScale = timeScale;
    this.duration = duration;
    this.render = render;
  }

  get progress() {
    return this._progress;
  }

  get timeScale() {
    return this._timeScale;
  }

  set timeScale(value) {
    if (value > 0) {
      this._timeScale = value;
    }
  }

  get duration() {
    return this._duration;
  }

  set duration(value) {
    if (typeof value !== "number") {
      value = 0;
    }

    // Virtually Nothing.
    if (value === 0 || value < 0) {
      value = 0.00001;
    }

    this._duration = value;
  }

  get repeat() {
    return this._repeat;
  }

  set repeat(value) {
    if (typeof value !== "number" && value > 0) {
      return;
    }

    this._repeat = value;
  }

  get repeatDirection() {
    return this._repeatDirection;
  }

  set repeatDirection(value) {
    if ((value !== 0) & (value !== 1)) {
      return;
    }

    this._repeatDirection = value;
  }

  play() {
    if (this.state !== Scrubber.states.FORWARD) {
      this.notify({
        type: "PLAYED"
      });

      this._lastTimestamp = this.clock.now();
      this.state = Scrubber.states.FORWARD;
      this.clock.register(this.tick);
    }
  }

  tick() {
    const timestamp = this.clock.now();
    const deltaTime = timestamp - this._lastTimestamp;
    let step = (deltaTime / this.duration) * this._timeScale;

    if (step > 1) {
      step = 1;
    }

    if (deltaTime === 0) {
      return;
    }

    if (this.state === Scrubber.states.REVERSE) {
      let progress = this._progress - step;
      const repeatDirection = this.repeatDirection;
      const ALTERNATE = Scrubber.repeatDirections.ALTERNATE;

      if (progress <= 0) {
        this._iterations++;

        if (this._iterations >= this._repeat) {
          this.seek(0);
          this.stop();
          return;
        }

        if (repeatDirection === ALTERNATE) {
          progress = progress * -1;
          this.seek(progress);
          this.state = Scrubber.states.FORWARD;
        } else {
          progress = 1 + progress;
          this.seek(progress);
          this.state = Scrubber.states.REVERSE;
        }
      } else {
        this.seek(progress);
      }
    } else if (this.state === Scrubber.states.FORWARD) {
      let progress = this._progress + step;
      const repeatDirection = this.repeatDirection;
      const ALTERNATE = Scrubber.repeatDirections.ALTERNATE;

      if (progress >= 1) {
        this._iterations++;

        if (this._iterations >= this._repeat) {
          this.seek(1);
          this.stop();
          return;
        }

        if (repeatDirection === ALTERNATE) {
          progress = 1 - (progress - 1);
          this.seek(progress);
          this.state = Scrubber.states.REVERSE;
        } else {
          progress = progress - 1;
          this.seek(progress);
          this.state = Scrubber.states.FORWARD;
        }
      } else {
        this.seek(progress);
      }
    }

    this._lastTimestamp = timestamp;
  }

  stop() {
    if (this.state !== Scrubber.states.STOPPED) {
      this.notify({
        type: "STOPPED"
      });

      this.state = Scrubber.states.STOPPED;
      this.clock.unregister(this.tick);
    }
  }

  reverse() {
    if (this.state !== Scrubber.states.REVERSE) {
      this.notify({
        type: "REVERSED"
      });

      this._lastTimestamp = this.clock.now();
      this.state = Scrubber.states.REVERSE;
      this.clock.register(this.tick);
    }
  }

  seek(progress) {
    const lastProgress = this._progress;
    this._progress = progress;

    const animations = this.render();

    this.notify({
      type: "RENDER",
      progress: progress,
      lastProgress: lastProgress,
      animations
    });
  }

  dispose() {
    this.stop();
    super.dispose();
  }
}

class BezierCurve {
  constructor(points) {
    this.points = points;
    this.percentage = 0;
  }

  reduceToPoint(points) {
    const reducedPoints = points.reduce((reducedPoints, point, index) => {
      if (index !== points.length - 1) {
        const nextPoint = points[index + 1];
        reducedPoints.push((nextPoint - point) * this.percentage + point);
      }

      return reducedPoints;
    }, []);

    if (reducedPoints.length > 1) {
      return this.reduceToPoint(reducedPoints);
    }

    return reducedPoints[0];
  }

  valueAt(percentage) {
    this.percentage = percentage;

    this.validatePoints();
    return this.reduceToPoint(this.points);
  }

  validatePoints() {
    if (this.points.length < 2) {
      throw new Error("Invalid Points: The points need to be at least two.");
    }

    const controlPoints = this.points.slice(1, this.points.length - 2);

    controlPoints.forEach(point => this.assertValidPoint(point));
  }

  assertValidPoint(point) {
    if (typeof point !== "number") {
      throw new Error("Invalid point: Points need to be numbers.");
    }
  }
}

class NumberAnimator {
  constructor(options) {
    this.controls = Array.isArray(options.controls) ? options.controls : [];
    this.options = options;
    this.bezierCurve = new BezierCurve(this.controls);
  }

  render(progress) {
    if (progress <= this.options.startAt) {
      return this.controls[0];
    }

    if (progress >= this.options.endAt) {
      return this.controls[this.controls.length - 1];
    }

    const relativeProgress = progress - this.options.startAt;
    const duration = this.options.endAt - this.options.startAt;
    const progressWithEasing = this.options.easing(
      relativeProgress,
      0,
      1,
      duration
    );

    const value = this.bezierCurve.valueAt(progressWithEasing);
    return value;
  }
}

class NumberNodeAnimator {
  constructor(options) {
    this.options = options;
    
    this.animator = new NumberAnimator({
      ...options,
      controls: options.controls.map(node => parseFloat(node.value))
    });

    // The nodes become quite the memory hogs, so we need to remove references.
    this.options.controls.length = 0;
  }

  render(progress) {
    return this.animator.render(progress);
  }
}

const hexRegEx = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})|([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i;

class HexNodeAnimator {
  constructor(options) {
    this.options = options;
    this.progress = null;
    this.duration = null;

    this.parseValues();
    this.createAnimators();
  }

  parseValues() {
    const values = this.options.controls.map(node => {
      return this.hexToRgb(this.convertToFullHex(node.value));
    });

    // The nodes become quite the memory hogs, so we need to remove references.
    this.options.controls.length = 0;

    const { reds, greens, blues } = values.reduce(
      (acc, rgb) => {
        acc.reds.push(rgb[0]);
        acc.greens.push(rgb[1]);
        acc.blues.push(rgb[2]);
        return acc;
      },
      {
        reds: [],
        greens: [],
        blues: []
      }
    );

    this.reds = reds;
    this.greens = greens;
    this.blues = blues;
  }

  convertToFullHex(value) {
    if (value.length === 4) {
      value = value + value.substring(1);
    }
    return value;
  }

  hexToRgb(hex) {
    hexRegEx.lastIndex = 0;
    const result = hexRegEx.exec(hex);
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16)
        ]
      : null;
  }

  numberToHex(number) {
    if (number > 255) {
      number = 255;
    }

    if (number < 0) {
      number = 0;
    }

    let hex = number.toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }

    return hex;
  }

  createAnimators() {
    this.redAnimator = new NumberAnimator({
      ...this.options,
      controls: this.reds
    });

    this.greenAnimator = new NumberAnimator({
      ...this.options,
      controls: this.greens
    });

    this.blueAnimator = new NumberAnimator({
      ...this.options,
      controls: this.blues
    });
  }

  render(progress) {
    const red = this.numberToHex(Math.round(this.redAnimator.render(progress)));

    const green = this.numberToHex(
      Math.round(this.greenAnimator.render(progress))
    );

    const blue = this.numberToHex(
      Math.round(this.blueAnimator.render(progress))
    );

    return `#${red}${green}${blue}`;
  }
}

class UnitNodeAnimator {
  constructor(options) {
    this.options = options;

    this.animator = new NumberAnimator({
      ...options,
      controls: options.controls.map(node =>
        parseInt(node.children[0].value, 10)
      )
    });

    this.unit = this.options.controls[0].children[1].value;

    // The nodes become quite the memory hogs, so we need to remove references.
    this.options.controls.length = 0;
  }

  render(progress) {
    const value = this.animator.render(progress);
    const unit = this.unit;
    return `${value.toFixed(3)}${unit}`;
  }
}

const findArguments = node => node.name === "arguments";
const filterValues = node => node.name === "values";
const findMethodName = node => node.name === "name";
const findArgs = node => {
  return node.children.find(findArguments).children.filter(filterValues);
};

class MethodNodeAnimator {
  constructor(options) {
    this.options = options;
    this.createArgs();
    this.createAnimators();
    this.methodName = this.getMethodName();

    // The nodes become quite the memory hogs, so we need to remove references.
    this.options.controls.length = 0;
  }

  createArgs() {
    this.args = this.options.controls.map(findArgs);
  }

  createAnimators() {
    this.animators = this.args[0].map((_, index) => {
      const controls = this.args.map(arg => {
        return arg[index];
      });

      return new ValuesNodeAnimator({
        ...this.options,
        controls: controls
      });
    });
  }

  getMethodName() {
    return this.options.controls[0].children.find(findMethodName).value;
  }

  render(progress) {
    const methodName = this.methodName;
    const args = this.getArgs(progress);

    return `${methodName}(${args})`;
  }

  getArgs(progress) {
    return this.animators.map(animator => animator.render(progress)).join(", ");
  }
}

class NameNodeAnimator {
  constructor(options) {
    this.options = options;
    this.values = this.options.controls.map(node => {
      return node.value;
    });

    // The nodes become quite the memory hogs, so we need to remove references.
    this.options.controls.length = 0;
  }

  render(progress) {
    if (progress > 0) {
      return this.values[this.values.length - 1];
    } else {
      return this.values[0];
    }
  }
}

class ValuesNodeAnimator {
  constructor(options) {
    this.options = options;

    this.nameToAnimatorMap = {
      number: NumberNodeAnimator,
      unit: UnitNodeAnimator,
      method: MethodNodeAnimator,
      name: NameNodeAnimator,
      hex: HexNodeAnimator,
      values: ValuesNodeAnimator
    };

    this.createAnimators();
    
    // The nodes become quite the memory hogs, so we need to remove references.
    this.options.controls.length = 0;
  }

  createAnimators() {
    this.animators = this.options.controls[0].children.map((node, index) => {
      const controls = this.options.controls.map(node => {
        return node.children[index];
      });

      const options = {
        ...this.options,
        controls
      };

      return new this.nameToAnimatorMap[node.name](options);
    });
  }

  render(progress) {
    return this.animators.map(animator => animator.render(progress)).join(" ");
  }
}

class CssValueNodeAnimator {
  constructor(options) {
    this.options = options;
    this.createAnimators();
    
    // The nodes become quite the memory hogs, so we need to remove references.
    this.options.controls.length = 0;
  }

  createAnimators() {
    this.animators = this.options.controls[0].children.map((node, index) => {
      const controls = this.options.controls.map(node => {
        return node.children[index];
      });

      const options = {
        ...this.options,
        controls
      };

      return new ValuesNodeAnimator(options);
    });
  }

  render(progress) {
    return this.animators.map(animator => animator.render(progress)).join(", ");
  }
}

class Node {
  constructor(name, startIndex, endIndex) {
    this.name = name;
    this.startIndex = startIndex;
    this.endIndex = endIndex;

    if (
      typeof this.startIndex !== "number" ||
      typeof this.endIndex !== "number"
    ) {
      throw new Error(
        "Invalid Arguments: startIndex and endIndex need to be number."
      );
    }
  }

  clone() {
    throw new Error(
      "Not Implemented Exception: expected subclass to override this method."
    );
  }
}

class CompositeNode extends Node {
  constructor(name, startIndex = 0, endIndex = 0) {
    super(name, startIndex, endIndex);
    this.children = [];
  }

  clone() {
    const node = new CompositeNode(this.name, this.startIndex, this.endIndex);
    node.children = this.children.map(child => {
      return child.clone();
    });

    return node;
  }
}

// We might want reference to the pattern on the node.
class ValueNode extends Node {
  constructor(name, value, startIndex = 0, endIndex = 0) {
    super(name, startIndex, endIndex);
    this.value = value;
  }

  clone() {
    return new ValueNode(this.name, this.value, this.startIndex, this.endIndex);
  }
}

class Cursor {
  constructor(string, { verbose } = {}) {
    this.string = string;
    this.index = 0;
    this.length = string.length;
    this.parseError = null;
    this.verbose = typeof verbose === "boolean" ? verbose : false;
    this.isInErrorState = false;
    this.assertValidity();
  }

  throwError(parseError) {
    this.isInErrorState = true;
    if (this.parseError == null || parseError.index >= this.parseError.index){
      this.parseError = parseError;
    }
  }

  resolveError() {
    this.isInErrorState = false;
  }

  hasUnresolvedError() {
    return this.isInErrorState;
  }

  assertValidity() {
    if (this.isNullOrEmpty(this.string)) {
      throw new Error(
        "Illegal Argument: Cursor needs to have a string that has a length greater than 0."
      );
    }
  }

  isNullOrEmpty(value) {
    return value == null || (typeof value === "string" && value.length === 0);
  }

  hasNext() {
    return this.index + 1 < this.string.length;
  }

  hasPrevious() {
    return this.index - 1 >= 0;
  }

  next() {
    if (this.hasNext()) {
      this.index++;
    } else {
      throw new Error("Cursor: Out of Bounds Exception.");
    }
  }

  previous() {
    if (this.hasPrevious()) {
      this.index--;
    } else {
      throw new Error("Cursor: Out of Bounds Exception.");
    }
  }

  mark() {
    return this.index;
  }

  moveToMark(mark) {
    this.index = mark;
  }

  moveToBeginning() {
    this.index = 0;
  }

  moveToLast() {
    this.index = this.string.length - 1;
  }

  getChar() {
    return this.string.charAt(this.index);
  }

  getIndex() {
    return this.index;
  }

  setIndex(index) {
    if (typeof index === "number") {
      if (index < 0 || index > this.lastIndex()) {
        throw new Error("Cursor: Out of Bounds Exception.");
      }

      this.index = index;
    }
  }

  isAtBeginning() {
    return this.index === 0;
  }

  isAtEnd() {
    return this.index === this.string.length - 1;
  }

  lastIndex() {
    return this.length - 1;
  }
}

class ParseError {
    constructor(message, index, pattern){
        this.message = message;
        this.name = 'ParseError';
        this.index = index;
        this.pattern = pattern;
        this.stack = [];
    }
}

class Pattern {
  constructor(name = null) {
    this._name = name;
    this._parent = null;
    this._children = [];

    this._assertName();
  }

  _assertName() {
    if (typeof this.name !== "string") {
      throw new Error(
        "Invalid Argument: Patterns needs to have a name that's a string."
      );
    }
  }

  parse() {
    throw new Error("Method Not Implemented");
  }

  get name() {
    return this._name;
  }

  get parent() {
    return this._parent;
  }

  set parent(value) {
    if (value instanceof Pattern) {
      this._parent = value;
    }
  }

  get children() {
    return this._children;
  }

  set children(value) {
    this._children = value;
    this._assertChildren();
    this._assignAsParent();

    this._children = value.map(pattern => pattern.clone());
    Object.freeze(this._children);
  }

  _assertChildren() {
    if (!Array.isArray(this._children)) {
      throw new Error(
        "Invalid Arguments: The patterns argument need to be an array of Patterns."
      );
    }

    const areAllPatterns = this._children.every(
      pattern => pattern instanceof Pattern
    );

    if (!areAllPatterns) {
      throw new Error(
        "Invalid Argument: All patterns need to be an instance of Pattern."
      );
    }

    if (this._children.length < 2) {
      throw new Error(
        "Invalid Argument: Composite Patterns needs to have more than one value pattern."
      );
    }
  }

  _assignAsParent() {
    this._children.forEach(child => (child.parent = this));
  }

  clone() {
    throw new Error("Method Not Implemented");
  }
}

class ValuePattern extends Pattern {
  constructor(name, children = []) {
    super(name);
    this._children = children;
    this._assertPatternArguments();
    this._cloneChildren();
    this._assignAsParent();
  }

  _assertPatternArguments() {
    if (!Array.isArray(this._children)) {
      throw new Error(
        "Invalid Arguments: The patterns argument need to be an array of ValuePattern."
      );
    }

    const areAllPatterns = this._children.every(
      pattern => pattern instanceof ValuePattern
    );

    if (!areAllPatterns) {
      throw new Error(
        "Invalid Argument: All patterns need to be an instance of ValuePattern."
      );
    }

    if (typeof this.name !== "string") {
      throw new Error(
        "Invalid Argument: ValuePatterns needs to have a name that's a string."
      );
    }
  }

  _cloneChildren() {
    // We need to clone the patterns so nested patterns can be parsed.
    this._children = this._children.map(pattern => pattern.clone());

    // We need to freeze the childen so they aren't modified.
    Object.freeze(this._children);
  }

  _assignAsParent() {
    this._children.forEach(child => (child.parent = this));
  }

  clone() {
    throw new Error("Not Yet Implemented");
  }

  getCurrentMark(){
    throw new Error("Not Yet Implemented");
  }
}

class RegexValue extends ValuePattern {
  constructor(name, regex) {
    super(name);
    this.regexString = regex;
    this.regex = new RegExp(`^${regex}`, "g");
    this._assertArguments();
  }

  _assertArguments() {
    if (typeof this.regexString !== "string") {
      throw new Error(
        "Invalid Arguments: The regex argument needs to be a string of regex."
      );
    }

    if (this.regexString.length < 1) {
      throw new Error(
        "Invalid Arguments: The regex string argument needs to be at least one character long."
      );
    }

    if (this.regexString.charAt(0) === "^") {
      throw new Error(
        "Invalid Arguments: The regex string cannot start with a '^' because it is expected to be in the middle of a string."
      );
    }

    if (this.regexString.charAt(this.regexString.length - 1) === "$") {
      throw new Error(
        "Invalid Arguments: The regex string cannot end with a '$' because it is expected to be in the middle of a string."
      );
    }
  }

  parse(cursor) {
    this._reset(cursor);
    this._tryPattern();

    return this.node;
  }

  _reset(cursor) {
    this.cursor = cursor;
    this.regex.lastIndex = 0;
    this.substring = this.cursor.string.substr(this.cursor.getIndex());
    this.node = null;
  }

  _tryPattern() {
    const result = this.regex.exec(this.substring);

    if (result != null && result.index === 0) {
      const currentIndex = this.cursor.getIndex();
      const newIndex = currentIndex + result[0].length - 1;

      this.node = new ValueNode(this.name, result[0], currentIndex, newIndex);

      this.cursor.index = (newIndex);
    } else {
      this._processError();
    }
  }

  _processError() {
    const message = `ParseError: Expected regex pattern of '${this.regexString}' but found '${this.substring}'.`;
    const parseError = new ParseError(message, this.cursor.getIndex(), this);

    this.cursor.throwError(parseError);
  }

  clone(name) {
    if (typeof name !== "string") {
      name = this.name;
    }
    return new RegexValue(name, this.regexString);
  }

  getCurrentMark() {
    return this.cursor.getIndex();
  }
}

class OptionalValue extends ValuePattern {
  constructor(pattern) {
    super("optional-value", [pattern]);
    this._assertArguments();
  }

  _assertArguments() {
    if (!(this.children[0] instanceof ValuePattern)) {
      throw new Error("Invalid Arguments: Expected a ValuePattern.");
    }
  }

  parse(cursor) {
    const mark = cursor.mark();

    const node = this.children[0].parse(cursor);

    if (cursor.hasUnresolvedError()) {
      cursor.resolveError();
      cursor.moveToMark(mark);
      return null;
    } else {
      return node;
    }
  }

  clone() {
    return new OptionalValue(this.children[0]);
  }

  getCurrentMark() {
    return this.mark;
  }
}

class Literal extends ValuePattern {
  constructor(name, literal) {
    super(name);
    this.literal = literal;
    this._assertArguments();
  }

  _assertArguments() {
    if (typeof this.literal !== "string") {
      throw new Error(
        "Invalid Arguments: The literal argument needs to be a string of characters."
      );
    }

    if (this.literal.length < 1) {
      throw new Error(
        "Invalid Arguments: The literalString argument needs to be at least one character long."
      );
    }
  }

  parse(cursor) {
    this._reset(cursor);
    this._tryPattern();

    return this.node;
  }

  _reset(cursor) {
    this.cursor = cursor;
    this.mark = this.cursor.mark();
    this.substring = this.cursor.string.substring(
      this.mark,
      this.mark + this.literal.length
    );
    this.node = null;
  }
  
  _tryPattern() {
    if (this.substring === this.literal) {
      this._processMatch();
    } else {
      this._processError();
    }
  }

  _processError() {
    const message = `ParseError: Expected '${
      this.literal
    }' but found '${this.substring}'.`;

    const parseError = new ParseError(message, this.cursor.getIndex(), this);
    this.cursor.throwError(parseError);
  }

  _processMatch() {
    this.node = new ValueNode(
      this.name,
      this.substring,
      this.mark,
      this.mark + this.literal.length - 1
    );

    this.cursor.index = (this.node.endIndex);
  }

  clone(name) {
    if (typeof name !== "string") {
      name = this.name;
    }
    return new Literal(name, this.literal);
  }

  getCurrentMark() {
    return this.mark;
  }
}

class RepeatValue extends ValuePattern {
  constructor(name, pattern, divider) {
    super(name, divider != null ? [pattern, divider] : [pattern]);

    this._pattern = this.children[0];
    this._divider = this.children[1];

    this._assertArguments();
  }

  _assertArguments() {
    if (this._pattern instanceof OptionalValue) {
      throw new Error(
        "Invalid Arguments: The pattern cannot be a optional pattern."
      );
    }
  }

  _reset(cursor) {
    this.nodes = [];
    this.cursor = cursor;
    this.mark = this.cursor.mark();
  }

  parse(cursor) {
    this._reset(cursor);
    this._tryPattern();

    return this.node;
  }

  _tryPattern() {
    while (true) {
      const node = this._pattern.parse(this.cursor);

      if (this.cursor.hasUnresolvedError()) {
        this._processMatch();
        break;
      } else {
        this.nodes.push(node);

        if (node.endIndex === this.cursor.lastIndex()) {
          this._processMatch();
          break;
        }

        this.cursor.next();

        if (this._divider != null) {
          const mark = this.cursor.mark();
          const node = this._divider.parse(this.cursor);

          if (this.cursor.hasUnresolvedError()) {
            this.cursor.moveToMark(mark);
            this._processMatch();
            break;
          } else {
            this.nodes.push(node);
            this.cursor.next();
          }
        }
      }
    }
  }

  _processMatch() {
    this.cursor.resolveError();

    if (this.nodes.length === 0) {
      const parseError = new ParseError(
        `Did not find a repeating match of ${this.name}.`,
        this.mark,
        this
      );
      this.cursor.throwError(parseError);
      this.node = null;
    } else {
      const value = this.nodes.map(node => node.value).join("");

      this.node = new ValueNode(
        this.name,
        value,
        this.nodes[0].startIndex,
        this.nodes[this.nodes.length - 1].endIndex
      );

      this.cursor.index = this.node.endIndex;
    }
  }

  clone(name) {
    if (typeof name !== "string") {
      name = this.name;
    }
    return new RepeatValue(name, this._pattern, this._divider);
  }

  getCurrentMark() {
    return this.mark;
  }
}

class CompositePattern extends Pattern {
  constructor(name, children = []) {
    super(name);

    this._children = children;
    this._assertArguments();
    this._cloneChildren();
    this._assignAsParent();
  }

  _assertArguments() {
    if (!Array.isArray(this._children)) {
      throw new Error(
        "Invalid Arguments: The patterns argument need to be an array of Patterns."
      );
    }

    const areAllPatterns = this._children.every(
      pattern => pattern instanceof Pattern
    );

    if (!areAllPatterns) {
      throw new Error(
        "Invalid Argument: All patterns need to be an instance of Pattern."
      );
    }

    if (this._children.length < 2) {
      throw new Error(
        "Invalid Argument: Composite Patterns needs to have more than one value pattern."
      );
    }

    if (typeof this.name !== "string") {
      throw new Error(
        "Invalid Argument: Composite Patterns needs to have a name that's a string."
      );
    }
  }

  _cloneChildren() {
    // We need to clone the patterns so nested patterns can be parsed.
    this._children = this._children.map(pattern => pattern.clone());

    // We need to freeze the childen so they aren't modified.
    Object.freeze(this._children);
  }

  _assignAsParent(){
    this._children.forEach(child => (child.parent = this));
  }

  clone() {
    throw new Error("Not Yet Implemented");
  }
}

class OptionalComposite extends CompositePattern {
  constructor(pattern) {
    super("optional-composite", [pattern]);
    this._assertArguments();
  }

  _assertArguments() {
    if (!(this.children[0] instanceof Pattern)) {
      throw new Error("Invalid Arguments: Expected a Pattern.");
    }
  }

  parse(cursor) {
    const mark = cursor.mark();
    this.mark = mark;

    const node = this.children[0].parse(cursor);

    if (cursor.hasUnresolvedError()) {
      cursor.resolveError();
      cursor.moveToMark(mark);
      return null;
    } else {
      return node;
    }
  }

  clone() {
    return new OptionalComposite(this.children[0]);
  }

  getCurrentMark() {
    return this.mark;
  }
}

class AndComposite extends CompositePattern {
  constructor(name, patterns) {
    super(name, patterns);
    this._assertArguments();
  }

  _assertArguments() {
    if (this._children.length < 2) {
      throw new Error(
        "Invalid Argument: AndValue needs to have more than one value pattern."
      );
    }
  }

  _reset(cursor) {
    this.index = 0;
    this.nodes = [];
    this.node = null;
    this.cursor = cursor;
    this.mark = this.cursor.mark();
  }

  parse(cursor) {
    this._reset(cursor);
    this._tryPatterns();

    return this.node;
  }

  _tryPatterns() {
    while (true) {
      const pattern = this._children[this.index];
      const node = pattern.parse(this.cursor);

      if (this.cursor.hasUnresolvedError()) {
        this.cursor.moveToMark(this.mark);
        break;
      } else {
        this.nodes.push(node);
      }

      if (!this._next()) {
        this._processValue();
        break;
      }
    }
  }

  _next() {
    if (this._hasMorePatterns()) {
      if (this.cursor.hasNext()) {
        // If the last result was a failed optional, then don't increment the cursor.
        if (this.nodes[this.nodes.length - 1] != null) {
          this.cursor.next();
        }

        this.index++;
        return true;
      } else if (this.nodes[this.nodes.length - 1] == null) {
        this.index++;
        return true;
      }

      this._assertRestOfPatternsAreOptional();
      return false;
    } else {
      return false;
    }
  }

  _hasMorePatterns() {
    return this.index + 1 < this._children.length;
  }

  _assertRestOfPatternsAreOptional() {
    const areTheRestOptional = this.children.every((pattern, index) => {
      return (
        index <= this.index ||
        pattern instanceof OptionalValue ||
        pattern instanceof OptionalComposite
      );
    });

    if (!areTheRestOptional) {
      const parseError = new ParseError(
        `Could not match ${this.name} before string ran out.`,
        this.index,
        this
      );
      this.cursor.throwError(parseError);
    }
  }

  _processValue() {
    if (!this.cursor.hasUnresolvedError()) {
      this.nodes = this.nodes.filter(node => node != null);

      const lastNode = this.nodes[this.nodes.length - 1];
      const startIndex = this.mark;
      const endIndex = lastNode.endIndex;

      this.node = new CompositeNode(this.name, startIndex, endIndex);
      this.node.children = this.nodes;

      this.cursor.index = this.node.endIndex;
    } else {
      this.node = null;
    }
  }

  clone(name) {
    if (typeof name !== "string") {
      name = this.name;
    }
    return new AndComposite(name, this._children);
  }

  getCurrentMark() {
    return this.mark;
  }
}

class OrComposite extends CompositePattern {
  constructor(name, patterns) {
    super(name, patterns);
    this._assertArguments();
  }

  _assertArguments() {
    if (this._children.length < 2) {
      throw new Error(
        "Invalid Argument: OrValue needs to have more than one value pattern."
      );
    }

    const hasOptionalChildren = this._children.some(
      pattern =>
        pattern instanceof OptionalValue || pattern instanceof OptionalComposite
    );

    if (hasOptionalChildren) {
      throw new Error("OrComposite cannot have optional values.");
    }
  }

  _reset(cursor) {
    this.cursor = null;
    this.mark = null;
    this.index = 0;
    this.node = null;

    if (cursor != null) {
      this.cursor = cursor;
      this.mark = cursor.mark();
    }
  }

  parse(cursor) {
    this._reset(cursor);
    this._tryPattern();

    return this.node;
  }

  _tryPattern() {
    while (true) {
      const pattern = this._children[this.index];

      this.node = pattern.parse(this.cursor);

      if (this.cursor.hasUnresolvedError()) {
        if (this.index + 1 < this._children.length) {
          this.cursor.resolveError();
          this.index++;
          this.cursor.moveToMark(this.mark);
        } else {
          this.node = null;
          break;
        }
      } else {
        this.cursor.index = this.node.endIndex;
        break;
      }
    }
  }

  clone(name) {
    if (typeof name !== "string") {
      name = this.name;
    }
    return new OrComposite(name, this._children);
  }

  getCurrentMark() {
    return this.mark;
  }
}

class RepeatComposite extends CompositePattern {
  constructor(name, pattern, divider) {
    super(name, divider != null ? [pattern, divider] : [pattern]);
    this._pattern = this.children[0];
    this._divider = this.children[1];
    this._assertArguments();
  }

  _assertArguments() {
    if (this._pattern instanceof OptionalComposite) {
      throw new Error(
        "Invalid Arguments: The pattern cannot be a optional pattern."
      );
    }
  }

  _reset(cursor) {
    this.nodes = [];
    this.cursor = cursor;
    this.mark = this.cursor.mark();
  }

  parse(cursor) {
    this._reset(cursor);
    this._tryPattern();

    return this.node;
  }

  _tryPattern() {
    while (true) {
      const node = this._pattern.parse(this.cursor);

      if (this.cursor.hasUnresolvedError()) {
        this._processMatch();
        break;
      } else {
        this.nodes.push(node);

        if (node.endIndex === this.cursor.lastIndex()) {
          this._processMatch();
          break;
        }

        this.cursor.next();

        if (this._divider != null) {
          const mark = this.cursor.mark();
          const node = this._divider.parse(this.cursor);

          if (this.cursor.hasUnresolvedError()) {
            this.cursor.moveToMark(mark);
            this._processMatch();
            break;
          } else {
            this.nodes.push(node);
            this.cursor.next();
          }
        }
      }
    }
  }

  _processMatch() {
    this.cursor.resolveError();

    if (this.nodes.length === 0) {
      this.cursor.throwError(
        new ParseError(
          `Did not find a repeating match of ${this.name}.`,
          this.mark,
          this
        )
      );
      this.node = null;
    } else {
      this.node = new CompositeNode(
        this.name,
        this.nodes[0].startIndex,
        this.nodes[this.nodes.length - 1].endIndex
      );

      this.node.children = this.nodes;
      this.cursor.index = this.node.endIndex;
    }
  }

  clone(name) {
    if (typeof name !== "string") {
      name = this.name;
    }
    return new RepeatComposite(name, this._pattern, this._divider);
  }

  getCurrentMark() {
    return this.mark;
  }
}

class RecursivePattern extends Pattern {
  constructor(name) {
    super(name);
  }

  getPattern() {
    return this._climb(this.parent, pattern => {
      return pattern.name === this.name;
    });
  }

  _climb(pattern, isMatch) {
    if (isMatch(pattern)) {
      return pattern;
    } else {
      if (pattern.parent != null) {
        return this._climb(pattern.parent, isMatch);
      }
      return null;
    }
  }

  parse(cursor) {
    
    if (this.pattern == null) {
      const pattern = this.getPattern();

      if (pattern == null) {
        cursor.throwError(
          new ParseError(
            `Couldn't find parent pattern to recursively parse, with the name ${this.name}.`
          ),
          cursor.index,
          this
        );
        return null;
      }

      this.pattern = pattern.clone();
      this.pattern.parent = this;
    }

    return this.pattern.parse(cursor);
  }

  clone(name) {
    if (typeof name !== "string") {
      name = this.name;
    }
    return new RecursivePattern(name);
  }

  getCurrentMark() {
    return this.pattern.getCurrentMark();
  }
}

const divider = new RegexValue("divider", "\\s*[,]\\s*");

const number = new RegexValue(
  "number",
  "[-+]?[0-9]*[.]?[0-9]+([eE][-+]?[0-9]+)?"
);

const unitType = new RegexValue("unit-type", "[a-zA-Z%]+");
const unit = new AndComposite("unit", [number, unitType]);

const hex = new RegexValue("hex", "#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}");

const name = new RegexValue("name", "[a-zA-Z]+[a-zA-Z0-9_-]*");

const space = new Literal("space", " ");
const spaces = new RepeatValue("spaces", space);

const optionalSpaces = new OptionalValue(spaces);

const openParen = new Literal("open-paren", "(");
const closeParen = new Literal("close-paren", ")");
const values$1 = new RecursivePattern("values");
const args = new RepeatComposite("arguments", values$1, divider);
const optionalArgs = new OptionalComposite(args);

const method = new AndComposite("method", [
  name,
  openParen,
  optionalSpaces,
  optionalArgs,
  optionalSpaces,
  closeParen
]);

const value = new OrComposite("value", [hex, method, unit, number, name]);

const values = new RepeatComposite("values", value, spaces);

const cssValue = new RepeatComposite("css-value", values, divider);

const easings = {
    easeInQuad: function (t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function (t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function (t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function (t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function (t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function (t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function (t, b, c, d) {
        var s = 1.70158; var p = 0; var a = c;
        if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3;
        if (a < Math.abs(c)) { a = c; var s = p / 4; }
        else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function (t, b, c, d) {
        var s = 1.70158; var p = 0; var a = c;
        if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3;
        if (a < Math.abs(c)) { a = c; var s = p / 4; }
        else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function (t, b, c, d) {
        var s = 1.70158; var p = 0; var a = c;
        if (t == 0) return b; if ((t /= d / 2) == 2) return b + c; if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) { a = c; var s = p / 4; }
        else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function (t, b, c, d) {
        return c - easings.easeOutBounce(d - t, 0, c, d) + b;
    },
    easeOutBounce: function (t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function (t, b, c, d) {
        if (t < d / 2) return easings.easeInBounce(t * 2, 0, c, d) * .5 + b;
        return easings.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    },
    linear: function (t, b, c, d) {
        return c * t / d + b;
    }
};

class TimelineOption {
  constructor(animation) {
    this.name = animation.name;
    this.property = animation.property;
    this.to = animation.to;
    this.from = animation.from;
    this.startAt = animation.startAt;
    this.endAt = animation.endAt;
    this.easing = animation.easing;
    this.controls = animation.controls;

    if (typeof easing === "string") {
      this.easing = easings[easing];
    }

    if (!Array.isArray(this.controls)) {
      this.controls = [];
    }

    this.easing = this.easing || easings.linear;

    this.validate();
  }

  validate() {
    if (typeof this.property !== "string") {
      throw new Error(`The "property" property needs to be a string.`);
    }

    if (typeof this.to !== "string") {
      throw new Error(`The "to" property needs to be a string, but found ${this.to}.`);
    }

    if (typeof this.from !== "string") {
      throw new Error(`The "from" property needs to be a string, but found ${this.from}.`);
    }

    if (typeof this.name !== "string") {
      throw new Error(
        `Invalid Arguments: The "name" property needs to be an string.`
      );
    }

    if (
      typeof this.startAt !== "number" ||
      this.startAt < 0 ||
      this.startAt > 1
    ) {
      throw new Error(
        `The "startAt" property must be a number between 0 and 1.`
      );
    }

    if (typeof this.endAt !== "number" || this.endAt < 0 || this.endAt > 1) {
      throw new Error(`The "endAt" property must be a number between 0 and 1.`);
    }

    if (typeof this.easing !== "function") {
      throw new Error(`The "easing" property must be a function.`);
    }
  }
}

const emptyFn = () => {};

class Visitor {
  constructor(callback) {
    this.setCallback(callback);
    this.visitDown = this.visitDown.bind(this);
    this.visitUp = this.visitUp.bind(this);
  }

  walkUp(node) {
    if (Array.isArray(node.children)) {
      node.children.forEach(this.visitUp);
    }

    this.callback(node);
  }

  visitUp(node) {
    this.walkUp(node);
  }

  walkDown(node) {
    this.callback(node);

    if (Array.isArray(node.children)) {
      node.children.forEach(this.visitDown);
    }
  }

  visitDown(node) {
    this.walkDown(node);
  }

  setCallback(callback){
    if (typeof callback === "function") {
      this.callback = callback;
    } else {
      this.callback = emptyFn;
    }

    this.callback = callback;
  };
}

const filterOutSpaces = child => child.name !== "spaces";
const filterOutDividers = child => child.name !== "divider";

class TreeNormalizer {
  constructor() {
    this.removeSpacesVisitor = new Visitor(this.visitNode);
  }

  visitNode(node) {
    if (Array.isArray(node.children)) {
      node.children = node.children.filter(filterOutSpaces);
    }

    if (node.name === "css-value") {
      node.children = node.children.filter(filterOutDividers);
    }
  }

  normalize(node) {
    this.removeSpacesVisitor.visitDown(node);
  }
}

const visitor = new Visitor();

class TreeUtility {
  areTreeStructuresEqual(nodeA, nodeB) {
    const nodeASequence = [];
    const nodeBSequence = [];

    visitor.setCallback(node => {
      nodeASequence.push(node.name);
    });
    visitor.visitDown(nodeA);

    visitor.setCallback(node => {
      nodeBSequence.push(node.name);
    });
    visitor.visitDown(nodeB);

    return nodeASequence.join("|") === nodeBSequence.join("|");
  }
}

const treeUtility = new TreeUtility();
const treeNormalizer = new TreeNormalizer();

class AnimatorCreator {
  constructor(animationOptions) {
    this.animationOptions = animationOptions;

    this._assertAnimationOptions();
    this._convertAnimationsToTimelineOptions();
    this._sortTimelineOptions();
    this._createAnimators();
  }

  _assertAnimationOptions() {
    if (!Array.isArray(this.animationOptions)) {
      throw new Error("Expected animations to be an array.");
    }
  }

  _convertAnimationsToTimelineOptions() {
    this.timelineOptions = this.animationOptions.map(
      animationOption => new TimelineOption(animationOption)
    );
  }

  _sortTimelineOptions() {
    this.timelineOptions.sort((a, b) => {
      return a.startAt - b.startAt;
    });
  }

  _createAnimators() {
    this.animators = this.timelineOptions.map(options => {
      let points = [options.from, ...options.controls, options.to];
      let controls;

      controls = points.map(point => {
        const cursor = new Cursor(point);
        const node = cssValue.parse(cursor);
        treeNormalizer.normalize(node);

        if (cursor.hasUnresolvedError()) {
          throw new Error(
            `Parse Error: could not parse css ${options.controls}`
          );
        }

        return node;
      });

      const fromNode = controls[0];
      const allStructuresAreEqual = controls.every(node => {
        return treeUtility.areTreeStructuresEqual(fromNode, node);
      });

      if (!allStructuresAreEqual) {
        throw new Error(
          `Invalid Animation: The value types that are being animated do not match. From: ${JSON.stringify(
            options.from
          )}, To:${JSON.stringify(options.to)}, Controls: ${JSON.stringify(
            options.controls
          )}`
        );
      }

      return new CssValueNodeAnimator({
        ...options,
        controls
      });
    });
  }

  getAnimators() {
    return this.animators;
  }
}

const defaultClock = new DefaultClock();

class Timeline {
  static get repeatDirections() {
    return Scrubber.repeatDirections;
  }

  constructor({ animations, duration, clock = defaultClock }) {
    this.clock = clock;
    this.adjustmentAnimators = [];
    this.render = this.render.bind(this);
    this.scrubber = new Scrubber({
      clock,
      duration,
      render: this.render
    });
    this.duration = duration;
    this.animators = new AnimatorCreator(animations).getAnimators();
  }

  get duration() {
    return this.scrubber.duration;
  }

  set duration(value) {
    this.scrubber.duration = value;
  }

  get timeScale() {
    return this.scrubber.timeScale;
  }

  set timeScale(value) {
    this.scrubber.timeScale = value;
  }

  get repeat() {
    return this.scrubber.repeat;
  }

  set repeat(value) {
    this.scrubber.repeat = value;
  }

  get repeatDirection() {
    return this.scrubber.repeatDirection;
  }

  set repeatDirection(value) {
    this.scrubber.repeatDirection = value;
  }

  get progress() {
    return this.scrubber.progress;
  }

  play() {
    this.scrubber.play();
  }

  reverse() {
    this.scrubber.reverse();
  }

  stop() {
    this.scrubber.stop();
  }

  seek(progress) {
    this.scrubber.seek(progress);
  }

  render() {
    const progress = this.progress;
    const values = this.getValuesAt(progress);
    return values;
  }

  getCurrentValues() {
    return this.getValuesAt(this.progress);
  }

  getValuesAt(progress) {
    const results = {};

    this.animators
      .filter(animator => {
        let animation = results[animator.options.name];

        if (animation == null) {
          animation = results[animator.options.name] = {};
        }

        if (animation[animator.options.property] == null) {
          animation[animator.options.property] = animator.options.from;
        }

        return animator.options.startAt <= progress;
      })
      .forEach(animator => {
        const animation = results[animator.options.name];
        animation[animator.options.property] = animator.render(
          progress,
          this.duration
        );
      });

    this.animators
      .filter(animator => {
        const min = Math.max(animator.options.startAt, progress);
        const max = Math.min(animator.options.endAt, progress);

        return min <= max;
      })
      .forEach(animator => {
        const animation = results[animator.options.name];
        animation[animator.options.property] = animator.render(
          progress,
          this.duration
        );
      });

    return results;
  }

  dispose() {
    this.scrubber.dispose();
  }

  observeTime() {
    return this.scrubber.observeTime.apply(this.scrubber, arguments);
  }

  observe() {
    return this.scrubber.observe.apply(this.scrubber, arguments);
  }
}

const objectApplyValues = (obj, values) => {
  if (obj != null) {
    Object.keys(values).forEach(key => {
      obj[key] = values[key];
    });
  }
};

var easeOut = {
  quad: easings.easeOutQuad,
  cubic: easings.easeOutCubic,
  quart: easings.easeOutQuart,
  quint: easings.easeOutQuint,
  sine: easings.easeOutSine,
  expo: easings.easeOutExpo,
  circ: easings.easeOutCirc,
  elastic: easings.easeOutElastic,
  overshoot: easings.easeOutBack,
  bounce: easings.easeOutBounce,
  linear: easings.linear
};

const bezierCurveEasings = {
  quad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  cubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  quart: "cubic-bezier(0.165, 0.84, 0.44, 1)",
  quint: "cubic-bezier(0.23, 1, 0.32, 1)",
  sine: "cubic-bezier(0.39, 0.575, 0.565, 1)",
  expo: "cubic-bezier(0.19, 1, 0.22, 1)",
  circ: "cubic-bezier(0.075, 0.82, 0.165, 1)",
  elastic: "linear",
  overshoot: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  bounce: "linear",
  linear: "linear"
};

class TransitionMediator {
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
      this.timeline.current = null;
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
      const controls = Array.isArray(option.controls)
        ? option.controls.slice(0)
        : [];

      if (shouldRedirect) {
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
        easing: easeOut[option.easing] || easeOut.expo,
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

const useTransition = (
  animatedProperties,
  {
    duration,
    applyValues = objectApplyValues,
    ref,
    animate = true,
    onComplete,
    configure,
    initialProperties = null,
  } = {}
) => {
  const transitionMediator = react.useMemo(() => {
    return new TransitionMediator();
  }, []);

  transitionMediator.setInitialProperties(initialProperties);
  transitionMediator.setDuration(duration);
  transitionMediator.setRenderCallback(applyValues);
  transitionMediator.setShouldAnimate(animate);
  transitionMediator.setOnCompleteCallback(onComplete);
  transitionMediator.setConfigureCallback(configure);

  // Keep refs up to date.
  const callbackRef = react.useCallback(
    (node) => {
      if (node != null) {
        if (typeof ref === "function") {
          ref(node);
        } else if (
          typeof ref === "object" &&
          ref != null &&
          ref.hasOwnProperty("current")
        ) {
          ref.current = node;
        }

        transitionMediator.setNode(node);
      }
    },
    [transitionMediator, ref]
  );

  react.useEffect(() => {
    return () => {
      transitionMediator.dispose();
    };
  }, [transitionMediator]);

  transitionMediator.updateAnimationProperties(animatedProperties);

  return callbackRef;
};

const transformAnimatedProperties = animatedProperties => {
  Object.keys(animatedProperties).forEach(key => {
    animatedProperties[key] = transformStyle(animatedProperties[key]);
  });
};

const transformStyle = value => {
  let objectValue = value;

  if (typeof value === "object" && value != null) {
    objectValue = value;
  } else {
    objectValue = {
      value: value
    };
  }

  objectValue.value = objectValue.value.toString();
  return objectValue;
};

const useNativeTransition = (
  cssProperties,
  { duration: defaultDuration = 0, ref, onComplete, initialProperties = null }
) => {
  const [node, setNode] = react.useState(null);

  const callbackRef = react.useCallback(
    node => {
      if (node != null) {
        if (typeof ref === "function") {
          ref(node);
        } else if (
          typeof ref === "object" &&
          ref != null &&
          ref.hasOwnProperty("current")
        ) {
          ref.current = node;
        }

        if (initialProperties != null) {
          transformAnimatedProperties(initialProperties);

          Object.keys(initialProperties).forEach(key => {
            const { value } = initialProperties[key];
            node.style[key] = value;
          });
        } else {
          transformAnimatedProperties(cssProperties);

          Object.keys(cssProperties).forEach(key => {
            const { value } = cssProperties[key];
            node.style[key] = value;
          });
        }

        setNode(node);
      }
    },
    [ref, initialProperties, cssProperties]
  );

  react.useEffect(() => {
    if (cssProperties != null && node != null) {
      transformAnimatedProperties(cssProperties);

      const transition = Object.keys(cssProperties)
        .map(property => {
          let {
            duration: durationOverride,
            easing: easingName,
            startAt = 0,
            endAt = 1
          } = cssProperties[property];

          let delay;
          let easing =
            bezierCurveEasings[easingName] != null
              ? bezierCurveEasings[easingName]
              : bezierCurveEasings.expo;
          let duration =
            typeof durationOverride === "number"
              ? durationOverride
              : defaultDuration;

          startAt = typeof startAt === "number" ? startAt : 0;
          endAt = typeof endAt === "number" ? endAt : 0;

          const originalDuration = duration;
          duration = (endAt - startAt) * originalDuration;
          delay = `${startAt * originalDuration}`;

          return `${property} ${duration}ms ${easing} ${delay}ms`;
        })
        .join(", ");

      node.style.transition = transition;

      Object.keys(cssProperties).forEach(key => {
        const { value } = cssProperties[key];
        node.style[key] = value;
      });
    }
  }, [initialProperties, cssProperties, defaultDuration, node]);

  react.useEffect(() => {
    if (node != null) {
      if (typeof onComplete === "function") {
        node.addEventListener("transitionend", onComplete);
      }
      return () => {
        node.removeEventListener("transitionend", onComplete);
      };
    }
  }, [node, onComplete]);

  return callbackRef;
};

const makeTransition = (states, duration, applyValues) => {
  return (stateName, { props, ref, animate, onComplete, configure, duration: durationOverride } = {}) => {
    duration = typeof durationOverride === "number" ? durationOverride : duration;
    
    if (stateName == null) {
      throw new Error(
        `Invalid Arguments: Cannot find '${stateName}' within defined states: ${Object.keys(
          states
        ).join(", ")}, you may have forgotten to pass the state name in as an argument.`
      );
    }

    let map;

    if (typeof states === "function") {
      map = states(props);
    } else {
      map = states;
    }

    const state = map[stateName];
    const initialProperties = map.initial || null;

    if (state == null) {
      throw new Error(`Invalid Arguments: Cannot find '${stateName}' within defined states: ${Object.keys(
        states
      ).join(", ")}.`);
    }

    return useTransition(state, {
      duration,
      applyValues,
      ref,
      animate,
      onComplete,
      configure,
      initialProperties
    });
  };
};

const applyStyleValues = (element, values) => {
  if (element != null && element.style != null) {
    Object.keys(values).forEach(key => {
      element.style[key] = values[key];
    });
  }
};

const makeStyledTransition = (states, duration) => {
  return makeTransition(states, duration, applyStyleValues);
};

const applyValues = (obj, values) => {
  if (obj != null) {
    Object.keys(values).forEach(key => {
      obj[key] = values[key];
    });
  }
};

const makePropertyTransition = (states, duration) => {
  return makeTransition(states, duration, applyValues);
};

const applyAttributeValues = (obj, values) => {
  if (obj != null && typeof obj.setAttribute === "function") {
    Object.keys(values).forEach(key => {
      obj.setAttribute(key, values[key]);
    });
  }
};

const makeAttributeTransition = (states, duration) => {
  return makeTransition(states, duration, applyAttributeValues);
};

const makeNativeTransition = (suppliedStates, duration) => {
  return (name, { props, ...rest } = {}) => {
    let states;

    if (typeof suppliedStates === "function") {
      states = suppliedStates(props);
    } else {
      states = suppliedStates;
    }

    const stateNames = Object.keys(states).join(", ");
    const initialProperties = states.initial;
    const cssProperties = states[name];

    if (cssProperties == null) {
      throw new Error(
        `Invalid Arguments: Cannot find '${name}' within defined states: ${stateNames}.`
      );
    }

    if (name == null) {
      throw new Error(
        `Invalid Arguments: Cannot find '${name}' within defined states: ${stateNames}, you may have forgotten to pass the state name in as an argument.`
      );
    }

    return useNativeTransition(cssProperties, {
      duration,
      initialProperties,
      ...rest
    });
  };
};

exports.BezierCurve = BezierCurve;
exports.Timeline = Timeline;
exports.applyStyleValues = applyStyleValues;
exports.easings = easings;
exports.makeAttributeTransition = makeAttributeTransition;
exports.makeNativeTransition = makeNativeTransition;
exports.makePropertyTransition = makePropertyTransition;
exports.makeStyledTransition = makeStyledTransition;
exports.makeTransition = makeTransition;
exports.useNativeTransition = useNativeTransition;
exports.useTransition = useTransition;
//# sourceMappingURL=index.js.map
