(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["motionUX"] = factory();
	else
		root["motionUX"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var motion_ux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var motion_ux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(motion_ux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return motion_ux__WEBPACK_IMPORTED_MODULE_0__["Timeline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easings", function() { return motion_ux__WEBPACK_IMPORTED_MODULE_0__["easings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BezierCurve", function() { return motion_ux__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"]; });

/* harmony import */ var _hooks_useTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return _hooks_useTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _hooks_useNativeTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNativeTransition", function() { return _hooks_useNativeTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _hooks_makeStyledTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeStyledTransition", function() { return _hooks_makeStyledTransition__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _hooks_makePropertyTransition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePropertyTransition", function() { return _hooks_makePropertyTransition__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _hooks_makeAttributeTransition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeAttributeTransition", function() { return _hooks_makeAttributeTransition__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _hooks_makeTransition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeTransition", function() { return _hooks_makeTransition__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _hooks_makeNativeTransition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeNativeTransition", function() { return _hooks_makeNativeTransition__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _hooks_makeStyledTransition_applyStyleValues__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyleValues", function() { return _hooks_makeStyledTransition_applyStyleValues__WEBPACK_IMPORTED_MODULE_8__["default"]; });














/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Timeline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return _Timeline_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _easings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easings", function() { return _easings_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _BezierCurve_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BezierCurve", function() { return _BezierCurve_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });








/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timeline; });
/* harmony import */ var _DefaultClock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Scrubber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _AnimatorCreator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);




const defaultClock = new _DefaultClock_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

class Timeline {
  static get repeatDirections() {
    return _Scrubber_js__WEBPACK_IMPORTED_MODULE_1__["default"].repeatDirections;
  }

  constructor({ animations, duration, clock = defaultClock }) {
    this.clock = clock;
    this.adjustmentAnimators = [];
    this.render = this.render.bind(this);
    this.scrubber = new _Scrubber_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      clock,
      duration,
      render: this.render
    });
    this.duration = duration;
    this.animators = new _AnimatorCreator_js__WEBPACK_IMPORTED_MODULE_2__["default"](animations).getAnimators();
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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultClock; });
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


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scrubber; });
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


const repeatDirections = {
  DEFAULT: 0,
  ALTERNATE: 1
};

const states = {
  FORWARD: 1,
  REVERSE: -1,
  STOPPED: 0
};

class Scrubber extends _Observable_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
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


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Observable; });
/* harmony import */ var _Observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _TimeObserver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);



class Observable {
    constructor(){
        this.observers = [];
    }

    observeTime(time, callback){
        const observer = new _TimeObserver_js__WEBPACK_IMPORTED_MODULE_1__["default"](time, callback, ()=>{
            const index = this.observers.indexOf(observer);
            if (index > -1){
                this.observers.splice(index, 1);
            }
        });

        this.observers.push(observer);
        return observer;
    }

    observe(type, callback){
        const observer = new _Observer_js__WEBPACK_IMPORTED_MODULE_0__["default"](type, callback, ()=>{
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
        })
    }

    dispose(){
        this.observers = [];
    }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Observer; });

const states = {
    ACTIVE: 1,
    STOPPED: 0,
    DISPOSED: -1
};

class Observer {
    constructor(type, callback, unbind){
        this.type = type;
        this.callback = callback;
        this.unbind = unbind;
        this.state = states.ACTIVE;
    }

    notify(event){
        if (event.type === this.type){
            this.callback(event);
        } 
    }

    stop(){
        if (this.state === states.ACTIVE){
            this.state = states.STOPPED;
        }
    }

    start(){
        if (this.state !== states.DISPOSED){
            this.state = states.ACTIVE;
        }
    }

    dispose(){
        this.state = states.DISPOSED;
        this.unbind();
    }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeObserver; });
/* harmony import */ var _Observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);


class TimeObserver extends _Observer_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnimatorCreator; });
/* harmony import */ var _animators_CssValueNodeAnimator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _patterns_cssValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TimelineOption_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony import */ var _TreeNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57);
/* harmony import */ var _TreeUtility_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59);







const treeUtility = new _TreeUtility_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
const treeNormalizer = new _TreeNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"]();

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
      animationOption => new _TimelineOption_js__WEBPACK_IMPORTED_MODULE_3__["default"](animationOption)
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
        const cursor = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_2__["Cursor"](point);
        const node = _patterns_cssValue_js__WEBPACK_IMPORTED_MODULE_1__["default"].parse(cursor);
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

      return new _animators_CssValueNodeAnimator_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        ...options,
        controls
      });
    });
  }

  getAnimators() {
    return this.animators;
  }
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CssValueNodeAnimator; });
/* harmony import */ var _ValuesNodeAnimator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


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

      return new _ValuesNodeAnimator_js__WEBPACK_IMPORTED_MODULE_0__["default"](options);
    });
  }

  render(progress) {
    return this.animators.map(animator => animator.render(progress)).join(", ");
  }
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ValuesNodeAnimator; });
/* harmony import */ var _NumberNodeAnimator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _HexNodeAnimator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _UnitNodeAnimator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _MethodNodeAnimator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _NameNodeAnimator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);






class ValuesNodeAnimator {
  constructor(options) {
    this.options = options;

    this.nameToAnimatorMap = {
      number: _NumberNodeAnimator_js__WEBPACK_IMPORTED_MODULE_0__["default"],
      unit: _UnitNodeAnimator_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      method: _MethodNodeAnimator_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      name: _NameNodeAnimator_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      hex: _HexNodeAnimator_js__WEBPACK_IMPORTED_MODULE_1__["default"],
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


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumberNodeAnimator; });
/* harmony import */ var _NumberAnimator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


class NumberNodeAnimator {
  constructor(options) {
    this.options = options;
    
    this.animator = new _NumberAnimator_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
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


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumberAnimator; });
/* harmony import */ var _BezierCurve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);


class NumberAnimator {
  constructor(options) {
    this.controls = Array.isArray(options.controls) ? options.controls : [];
    this.options = options;
    this.bezierCurve = new _BezierCurve__WEBPACK_IMPORTED_MODULE_0__["default"](this.controls);
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


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BezierCurve; });
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


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HexNodeAnimator; });
/* harmony import */ var _NumberAnimator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


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
    this.redAnimator = new _NumberAnimator_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
      ...this.options,
      controls: this.reds
    });

    this.greenAnimator = new _NumberAnimator_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
      ...this.options,
      controls: this.greens
    });

    this.blueAnimator = new _NumberAnimator_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
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


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UnitNodeAnimator; });
/* harmony import */ var _NumberAnimator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


class UnitNodeAnimator {
  constructor(options) {
    this.options = options;

    this.animator = new _NumberAnimator_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
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


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MethodNodeAnimator; });
/* harmony import */ var _ValuesNodeAnimator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


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

      return new _ValuesNodeAnimator_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
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


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NameNodeAnimator; });
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


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);




const cssValue = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__["RepeatComposite"]("css-value", _values_js__WEBPACK_IMPORTED_MODULE_2__["default"], _divider_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (cssValue);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Node", {
  enumerable: true,
  get: function get() {
    return _Node.default;
  }
});
Object.defineProperty(exports, "CompositeNode", {
  enumerable: true,
  get: function get() {
    return _CompositeNode.default;
  }
});
Object.defineProperty(exports, "ValueNode", {
  enumerable: true,
  get: function get() {
    return _ValueNode.default;
  }
});
Object.defineProperty(exports, "Cursor", {
  enumerable: true,
  get: function get() {
    return _Cursor.default;
  }
});
Object.defineProperty(exports, "RegexValue", {
  enumerable: true,
  get: function get() {
    return _RegexValue.default;
  }
});
Object.defineProperty(exports, "AndValue", {
  enumerable: true,
  get: function get() {
    return _AndValue.default;
  }
});
Object.defineProperty(exports, "AnyOfThese", {
  enumerable: true,
  get: function get() {
    return _AnyOfThese.default;
  }
});
Object.defineProperty(exports, "Literal", {
  enumerable: true,
  get: function get() {
    return _Literal.default;
  }
});
Object.defineProperty(exports, "NotValue", {
  enumerable: true,
  get: function get() {
    return _NotValue.default;
  }
});
Object.defineProperty(exports, "OptionalValue", {
  enumerable: true,
  get: function get() {
    return _OptionalValue.default;
  }
});
Object.defineProperty(exports, "OrValue", {
  enumerable: true,
  get: function get() {
    return _OrValue.default;
  }
});
Object.defineProperty(exports, "RepeatValue", {
  enumerable: true,
  get: function get() {
    return _RepeatValue.default;
  }
});
Object.defineProperty(exports, "ValuePattern", {
  enumerable: true,
  get: function get() {
    return _ValuePattern.default;
  }
});
Object.defineProperty(exports, "AndComposite", {
  enumerable: true,
  get: function get() {
    return _AndComposite.default;
  }
});
Object.defineProperty(exports, "CompositePattern", {
  enumerable: true,
  get: function get() {
    return _CompositePattern.default;
  }
});
Object.defineProperty(exports, "OptionalComposite", {
  enumerable: true,
  get: function get() {
    return _OptionalComposite.default;
  }
});
Object.defineProperty(exports, "OrComposite", {
  enumerable: true,
  get: function get() {
    return _OrComposite.default;
  }
});
Object.defineProperty(exports, "RepeatComposite", {
  enumerable: true,
  get: function get() {
    return _RepeatComposite.default;
  }
});
Object.defineProperty(exports, "ParseError", {
  enumerable: true,
  get: function get() {
    return _ParseError.default;
  }
});
Object.defineProperty(exports, "Pattern", {
  enumerable: true,
  get: function get() {
    return _Pattern.default;
  }
});
Object.defineProperty(exports, "RecursivePattern", {
  enumerable: true,
  get: function get() {
    return _RecursivePattern.default;
  }
});
Object.defineProperty(exports, "ParseInspector", {
  enumerable: true,
  get: function get() {
    return _ParseInspector.default;
  }
});
Object.defineProperty(exports, "TextInspector", {
  enumerable: true,
  get: function get() {
    return _TextInspector.default;
  }
});

var _Node = _interopRequireDefault(__webpack_require__(20));

var _CompositeNode = _interopRequireDefault(__webpack_require__(21));

var _ValueNode = _interopRequireDefault(__webpack_require__(22));

var _Cursor = _interopRequireDefault(__webpack_require__(23));

var _RegexValue = _interopRequireDefault(__webpack_require__(25));

var _AndValue = _interopRequireDefault(__webpack_require__(29));

var _AnyOfThese = _interopRequireDefault(__webpack_require__(32));

var _Literal = _interopRequireDefault(__webpack_require__(33));

var _NotValue = _interopRequireDefault(__webpack_require__(34));

var _OptionalValue = _interopRequireDefault(__webpack_require__(30));

var _OrValue = _interopRequireDefault(__webpack_require__(35));

var _RepeatValue = _interopRequireDefault(__webpack_require__(36));

var _ValuePattern = _interopRequireDefault(__webpack_require__(27));

var _AndComposite = _interopRequireDefault(__webpack_require__(37));

var _CompositePattern = _interopRequireDefault(__webpack_require__(38));

var _OptionalComposite = _interopRequireDefault(__webpack_require__(39));

var _OrComposite = _interopRequireDefault(__webpack_require__(40));

var _RepeatComposite = _interopRequireDefault(__webpack_require__(41));

var _ParseError = _interopRequireDefault(__webpack_require__(26));

var _Pattern = _interopRequireDefault(__webpack_require__(28));

var _RecursivePattern = _interopRequireDefault(__webpack_require__(42));

var _ParseInspector = _interopRequireDefault(__webpack_require__(43));

var _TextInspector = _interopRequireDefault(__webpack_require__(44));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Node =
/*#__PURE__*/
function () {
  function Node(type, name, startIndex, endIndex) {
    _classCallCheck(this, Node);

    this.type = type;
    this.name = name;
    this.startIndex = startIndex;
    this.endIndex = endIndex;

    if (typeof this.startIndex !== "number" || typeof this.endIndex !== "number") {
      throw new Error("Invalid Arguments: startIndex and endIndex need to be number.");
    }
  }

  _createClass(Node, [{
    key: "filter",
    value: function filter() {
      throw new Error("Not Implemented Exception: expected subclass to override this method.");
    }
  }, {
    key: "clone",
    value: function clone() {
      throw new Error("Not Implemented Exception: expected subclass to override this method.");
    }
  }, {
    key: "toString",
    value: function toString() {
      throw new Error("Not Implemented Exception: expected subclass to override this method.");
    }
  }]);

  return Node;
}();

exports.default = Node;
//# sourceMappingURL=Node.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Node2 = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CompositeNode =
/*#__PURE__*/
function (_Node) {
  _inherits(CompositeNode, _Node);

  function CompositeNode(type, name) {
    var _this;

    var startIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var endIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, CompositeNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CompositeNode).call(this, type, name, startIndex, endIndex));
    _this.children = [];
    return _this;
  }

  _createClass(CompositeNode, [{
    key: "clone",
    value: function clone() {
      var node = new CompositeNode(this.type, this.name, this.startIndex, this.endIndex);
      node.children = this.children.map(function (child) {
        return child.clone();
      });
      return node;
    }
  }, {
    key: "filter",
    value: function filter(shouldKeep) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var childrenContext = context.slice();
      childrenContext.push(this);
      Object.freeze(childrenContext);
      var matches = this.children.reduce(function (acc, child) {
        return acc.concat(child.filter(shouldKeep, childrenContext));
      }, []);
      var match = shouldKeep(this, context);

      if (match) {
        matches.push(this);
      }

      return matches;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.children.map(function (child) {
        return child.toString();
      }).join("");
    }
  }]);

  return CompositeNode;
}(_Node2.default);

exports.default = CompositeNode;
//# sourceMappingURL=CompositeNode.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Node2 = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueNode =
/*#__PURE__*/
function (_Node) {
  _inherits(ValueNode, _Node);

  function ValueNode(type, name, value) {
    var _this;

    var startIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var endIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    _classCallCheck(this, ValueNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ValueNode).call(this, type, name, startIndex, endIndex));
    _this.value = value;
    return _this;
  }

  _createClass(ValueNode, [{
    key: "clone",
    value: function clone() {
      return new ValueNode(this.type, this.name, this.value, this.startIndex, this.endIndex);
    }
  }, {
    key: "filter",
    value: function filter(shouldKeep, context) {
      var match = shouldKeep(this, context);

      if (match) {
        return [this];
      }

      return [];
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }]);

  return ValueNode;
}(_Node2.default);

exports.default = ValueNode;
//# sourceMappingURL=ValueNode.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CursorHistory = _interopRequireDefault(__webpack_require__(24));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cursor =
/*#__PURE__*/
function () {
  function Cursor(string) {
    _classCallCheck(this, Cursor);

    this.string = string;
    this.assertValidity();
    this.index = 0;
    this.length = string.length;
    this.history = new _CursorHistory.default();
    this.isInErrorState = false;
  }

  _createClass(Cursor, [{
    key: "assertValidity",
    value: function assertValidity() {
      if (this.isNullOrEmpty(this.string)) {
        throw new Error("Illegal Argument: Cursor needs to have a string that has a length greater than 0.");
      }
    }
  }, {
    key: "startRecording",
    value: function startRecording() {
      this.history.startRecording();
    }
  }, {
    key: "stopRecording",
    value: function stopRecording() {
      this.history.stopRecording();
    }
  }, {
    key: "throwError",
    value: function throwError(parseError) {
      this.isInErrorState = true;
      this.history.addError(parseError);
    }
  }, {
    key: "addMatch",
    value: function addMatch(pattern, astNode) {
      this.history.addMatch(pattern, astNode);
    }
  }, {
    key: "resolveError",
    value: function resolveError() {
      this.isInErrorState = false;
    }
  }, {
    key: "hasUnresolvedError",
    value: function hasUnresolvedError() {
      return this.isInErrorState;
    }
  }, {
    key: "isNullOrEmpty",
    value: function isNullOrEmpty(value) {
      return value == null || typeof value === "string" && value.length === 0;
    }
  }, {
    key: "hasNext",
    value: function hasNext() {
      return this.index + 1 < this.string.length;
    }
  }, {
    key: "hasPrevious",
    value: function hasPrevious() {
      return this.index - 1 >= 0;
    }
  }, {
    key: "next",
    value: function next() {
      if (this.hasNext()) {
        this.index++;
      } else {
        throw new Error("Cursor: Out of Bounds Exception.");
      }
    }
  }, {
    key: "previous",
    value: function previous() {
      if (this.hasPrevious()) {
        this.index--;
      } else {
        throw new Error("Cursor: Out of Bounds Exception.");
      }
    }
  }, {
    key: "mark",
    value: function mark() {
      return this.index;
    }
  }, {
    key: "moveToMark",
    value: function moveToMark(mark) {
      this.index = mark;
    }
  }, {
    key: "moveToBeginning",
    value: function moveToBeginning() {
      this.index = 0;
    }
  }, {
    key: "moveToEnd",
    value: function moveToEnd() {
      this.index = this.string.length - 1;
    }
  }, {
    key: "getChar",
    value: function getChar() {
      return this.string.charAt(this.index);
    }
  }, {
    key: "getIndex",
    value: function getIndex() {
      return this.index;
    }
  }, {
    key: "setIndex",
    value: function setIndex(index) {
      if (typeof index === "number") {
        if (index < 0 || index > this.lastIndex()) {
          throw new Error("Cursor: Out of Bounds Exception.");
        }

        this.index = index;
      }
    }
  }, {
    key: "isAtBeginning",
    value: function isAtBeginning() {
      return this.index === 0;
    }
  }, {
    key: "isAtEnd",
    value: function isAtEnd() {
      return this.index === this.string.length - 1;
    }
  }, {
    key: "lastIndex",
    value: function lastIndex() {
      return this.length - 1;
    }
  }, {
    key: "didSuccessfullyParse",
    value: function didSuccessfullyParse() {
      return !this.hasUnresolvedError() && this.isAtEnd();
    }
  }, {
    key: "parseError",
    get: function get() {
      return this.history.getFurthestError();
    }
  }, {
    key: "lastMatch",
    get: function get() {
      return this.history.getFurthestMatch();
    }
  }]);

  return Cursor;
}();

exports.default = Cursor;
//# sourceMappingURL=Cursor.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CursorHistory =
/*#__PURE__*/
function () {
  function CursorHistory() {
    _classCallCheck(this, CursorHistory);

    this.isRecording = false;
    this.furthestMatch = {
      pattern: null,
      astNode: null
    };
    this.furthestError = null;
    this.patterns = [];
    this.astNodes = [];
    this.errors = [];
  }

  _createClass(CursorHistory, [{
    key: "addMatch",
    value: function addMatch(pattern, astNode) {
      if (this.isRecording) {
        this.patterns.push(pattern);
        this.astNodes.push(astNode);
      }

      if (this.furthestMatch.astNode == null || astNode.endIndex >= this.furthestMatch.astNode.endIndex) {
        this.furthestMatch.pattern = pattern;
        this.furthestMatch.astNode = astNode;
      }
    }
  }, {
    key: "addError",
    value: function addError(error) {
      if (this.isRecording) {
        this.errors.push(error);
      }

      if (this.furthestError == null || error.index >= this.furthestError.index) {
        this.furthestError = error;
      }
    }
  }, {
    key: "startRecording",
    value: function startRecording() {
      this.isRecording = true;
    }
  }, {
    key: "stopRecording",
    value: function stopRecording() {
      this.isRecording = false;
      this.clear();
    }
  }, {
    key: "clear",
    value: function clear() {
      this.patterns.length = 0;
      this.astNodes.length = 0;
      this.errors.length = 0;
    }
  }, {
    key: "getFurthestError",
    value: function getFurthestError() {
      return this.furthestError;
    }
  }, {
    key: "getFurthestMatch",
    value: function getFurthestMatch() {
      return this.furthestMatch;
    }
  }, {
    key: "getLastMatch",
    value: function getLastMatch() {
      if (this.isRecording) {
        return {
          pattern: this.patterns[this.patterns.length - 1] || null,
          astNode: this.astNodes[this.astNodes.length - 1] || null
        };
      } else {
        return this.furthestMatch;
      }
    }
  }, {
    key: "getLastError",
    value: function getLastError() {
      return this.errors[this.errors.length - 1] || null;
    }
  }, {
    key: "getAllParseStacks",
    value: function getAllParseStacks() {
      var stacks = this.astNodes.reduce(function (acc, node) {
        var container = acc[acc.length - 1];

        if (node.startIndex === 0) {
          container = [];
          acc.push(container);
        }

        container.push(node);
        return acc;
      }, []); // There are times when the matching will fail and hit again on the same node.
      // This filters them out. 
      // We simply check to see if there is any overlap with the previous one,
      // and if there is we don't add it. This is why we move backwards.

      var cleanedStack = stacks.map(function (stack) {
        var cleanedStack = [];

        for (var x = stack.length - 1; x >= 0; x--) {
          var currentNode = stack[x];
          var previousNode = stack[x + 1];

          if (previousNode == null) {
            cleanedStack.unshift(currentNode);
          } else {
            var left = Math.max(currentNode.startIndex, previousNode.startIndex);
            var right = Math.min(currentNode.endIndex, previousNode.endIndex);
            var isOverlapping = left <= right;

            if (!isOverlapping) {
              cleanedStack.unshift(currentNode);
            }
          }
        }

        return cleanedStack;
      });
      return cleanedStack;
    }
  }, {
    key: "getLastParseStack",
    value: function getLastParseStack() {
      var stacks = this.getAllParseStacks();
      return stacks[stacks.length - 1] || [];
    }
  }]);

  return CursorHistory;
}();

exports.default = CursorHistory;
//# sourceMappingURL=CursorHistory.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ParseError = _interopRequireDefault(__webpack_require__(26));

var _Cursor = _interopRequireDefault(__webpack_require__(23));

var _ValueNode = _interopRequireDefault(__webpack_require__(22));

var _ValuePattern2 = _interopRequireDefault(__webpack_require__(27));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RegexValue =
/*#__PURE__*/
function (_ValuePattern) {
  _inherits(RegexValue, _ValuePattern);

  function RegexValue(name, regex) {
    var _this;

    _classCallCheck(this, RegexValue);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RegexValue).call(this, "regex-value", name));
    _this.regexString = regex;
    _this.regex = new RegExp("^".concat(regex), "g");

    _this._assertArguments();

    return _this;
  }

  _createClass(RegexValue, [{
    key: "_assertArguments",
    value: function _assertArguments() {
      if (typeof this.regexString !== "string") {
        throw new Error("Invalid Arguments: The regex argument needs to be a string of regex.");
      }

      if (this.regexString.length < 1) {
        throw new Error("Invalid Arguments: The regex string argument needs to be at least one character long.");
      }

      if (this.regexString.charAt(0) === "^") {
        throw new Error("Invalid Arguments: The regex string cannot start with a '^' because it is expected to be in the middle of a string.");
      }

      if (this.regexString.charAt(this.regexString.length - 1) === "$") {
        throw new Error("Invalid Arguments: The regex string cannot end with a '$' because it is expected to be in the middle of a string.");
      }
    }
  }, {
    key: "parse",
    value: function parse(cursor) {
      this._reset(cursor);

      this._tryPattern();

      return this.node;
    }
  }, {
    key: "_reset",
    value: function _reset(cursor) {
      this.cursor = cursor;
      this.regex.lastIndex = 0;
      this.substring = this.cursor.string.substr(this.cursor.getIndex());
      this.node = null;
    }
  }, {
    key: "_tryPattern",
    value: function _tryPattern() {
      var result = this.regex.exec(this.substring);

      if (result != null && result.index === 0) {
        var currentIndex = this.cursor.getIndex();
        var newIndex = currentIndex + result[0].length - 1;
        this.node = new _ValueNode.default("regex-value", this.name, result[0], currentIndex, newIndex);
        this.cursor.index = newIndex;
        this.cursor.addMatch(this, this.node);
      } else {
        this._processError();
      }
    }
  }, {
    key: "_processError",
    value: function _processError() {
      var message = "ParseError: Expected regex pattern of '".concat(this.regexString, "' but found '").concat(this.substring, "'.");
      var parseError = new _ParseError.default(message, this.cursor.getIndex(), this);
      this.cursor.throwError(parseError);
    }
  }, {
    key: "clone",
    value: function clone(name) {
      if (typeof name !== "string") {
        name = this.name;
      }

      return new RegexValue(name, this.regexString);
    }
  }, {
    key: "getPossibilities",
    value: function getPossibilities() {
      return [this.getTokenValue()];
    }
  }, {
    key: "getTokenValue",
    value: function getTokenValue() {
      return this.name;
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      return [this.name];
    }
  }]);

  return RegexValue;
}(_ValuePattern2.default);

exports.default = RegexValue;
//# sourceMappingURL=RegexValue.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParseError = function ParseError(message, index, pattern) {
  _classCallCheck(this, ParseError);

  this.message = message;
  this.name = 'ParseError';
  this.index = index;
  this.pattern = pattern;
};

exports.default = ParseError;
//# sourceMappingURL=ParseError.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Pattern2 = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValuePattern =
/*#__PURE__*/
function (_Pattern) {
  _inherits(ValuePattern, _Pattern);

  function ValuePattern(type, name) {
    var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, ValuePattern);

    return _possibleConstructorReturn(this, _getPrototypeOf(ValuePattern).call(this, type, name, children));
  }

  _createClass(ValuePattern, [{
    key: "_assertChildren",
    value: function _assertChildren() {
      if (!Array.isArray(this._children)) {
        throw new Error("Invalid Arguments: The patterns argument need to be an array of ValuePattern.");
      }

      var areAllPatterns = this._children.every(function (pattern) {
        return pattern instanceof ValuePattern || pattern instanceof _Pattern2.default;
      });

      if (!areAllPatterns) {
        throw new Error("Invalid Argument: All patterns need to be an instance of ValuePattern.");
      }

      if (typeof this.name !== "string") {
        throw new Error("Invalid Argument: ValuePatterns needs to have a name that's a string.");
      }

      if (typeof this.type !== "string") {
        throw new Error("Invalid Argument: ValuePatterns needs to have a type that's a string.");
      }
    }
  }, {
    key: "clone",
    value: function clone() {
      throw new Error("Not Yet Implemented");
    }
  }]);

  return ValuePattern;
}(_Pattern2.default);

exports.default = ValuePattern;
//# sourceMappingURL=ValuePattern.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Cursor = _interopRequireDefault(__webpack_require__(23));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pattern =
/*#__PURE__*/
function () {
  function Pattern() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var name = arguments.length > 1 ? arguments[1] : undefined;
    var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, Pattern);

    this._type = type;
    this._name = name;
    this._children = [];
    this._parent = null;
    this.isSequence = false;

    this._assertName();

    this.children = children;
  }

  _createClass(Pattern, [{
    key: "_assertName",
    value: function _assertName() {
      if (typeof this.name !== "string") {
        throw new Error("Invalid Argument: Patterns needs to have a name that's a string.");
      }
    }
  }, {
    key: "parse",
    value: function parse() {
      throw new Error("Method Not Implemented");
    }
  }, {
    key: "exec",
    value: function exec(string) {
      var cursor = new _Cursor.default(string);
      var node = this.parse(cursor);

      if (cursor.didSuccessfullyParse()) {
        return node;
      } else {
        return null;
      }
    }
  }, {
    key: "test",
    value: function test(string) {
      return this.exec(string) != null;
    }
  }, {
    key: "_assertChildren",
    value: function _assertChildren() {// Empty, meant to be overridden by subclasses.
    }
  }, {
    key: "_cloneChildren",
    value: function _cloneChildren() {
      var _this = this;

      // We need to clone the patterns so nested patterns can be parsed.
      this._children = this._children.map(function (pattern) {
        if (!(pattern instanceof Pattern)) {
          throw new Error("The ".concat(_this.name, " pattern has an invalid child pattern."));
        }

        return pattern.clone();
      }); // We need to freeze the childen so they aren't modified.

      Object.freeze(this._children);
    }
  }, {
    key: "_assignAsParent",
    value: function _assignAsParent() {
      var _this2 = this;

      this._children.forEach(function (child) {
        return child.parent = _this2;
      });
    }
  }, {
    key: "clone",
    value: function clone() {
      throw new Error("Method Not Implemented");
    }
  }, {
    key: "getPossibilities",
    value: function getPossibilities() {
      throw new Error("Method Not Implemented");
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      throw new Error("Method Not Implemented");
    }
  }, {
    key: "getNextTokens",
    value: function getNextTokens() {
      var _this3 = this;

      if (this._parent != null) {
        var siblings = this._parent.children;
        var index = siblings.findIndex(function (c) {
          return c === _this3;
        });
        var nextSibling = siblings[index + 1]; // I don't like this, so I think we need to rethink this.

        if (this._parent.type.indexOf("repeat") === 0) {
          var tokens = this._parent.getNextTokens();

          if (index === 0 && siblings.length > 1) {
            return nextSibling.getTokens().concat(tokens);
          } else if (index === 1) {
            return siblings[0].getTokens().concat(tokens);
          } else {
            return this.getTokens().concat(tokens);
          }
        } // Another thing I don't like.


        if (this._parent.type.indexOf("and") === 0 && nextSibling != null && nextSibling.type.indexOf("optional") === 0) {
          var _tokens = [];

          for (var x = index + 1; x < siblings.length; x++) {
            var child = siblings[x];

            if (child.type.indexOf("optional") === 0) {
              _tokens = _tokens.concat(child.getTokens());
            } else {
              _tokens = _tokens.concat(child.getTokens());
              break;
            }

            if (x === siblings.length - 1) {
              _tokens = _tokens.concat(this._parent.getNextTokens());
            }
          }

          return _tokens;
        } // If you are an or you have already qualified.


        if (this._parent.type.indexOf("or") === 0) {
          return this._parent.getNextTokens();
        }

        if (nextSibling != null) {
          return nextSibling.getTokens();
        } else {
          return this._parent.getNextTokens();
        }
      }

      return [];
    }
  }, {
    key: "getTokenValue",
    value: function getTokenValue() {
      return null;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "type",
    get: function get() {
      return this._type;
    }
  }, {
    key: "parent",
    get: function get() {
      return this._parent;
    },
    set: function set(value) {
      if (value instanceof Pattern) {
        this._parent = value;
      }
    }
  }, {
    key: "children",
    get: function get() {
      return this._children;
    },
    set: function set(value) {
      this._children = value;

      this._cloneChildren();

      this._assertChildren();

      this._assignAsParent();
    }
  }]);

  return Pattern;
}();

exports.default = Pattern;
//# sourceMappingURL=Pattern.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ValuePattern2 = _interopRequireDefault(__webpack_require__(27));

var _ValueNode = _interopRequireDefault(__webpack_require__(22));

var _ParseError = _interopRequireDefault(__webpack_require__(26));

var _OptionalValue = _interopRequireDefault(__webpack_require__(30));

var _Permutor = _interopRequireDefault(__webpack_require__(31));

var _Pattern = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var permutor = new _Permutor.default();

var AndValue =
/*#__PURE__*/
function (_ValuePattern) {
  _inherits(AndValue, _ValuePattern);

  function AndValue(name, patterns) {
    var _this;

    _classCallCheck(this, AndValue);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AndValue).call(this, "and-value", name, patterns));

    _this._assertArguments();

    return _this;
  }

  _createClass(AndValue, [{
    key: "_assertArguments",
    value: function _assertArguments() {
      if (this._children.length < 2) {
        throw new Error("Invalid Argument: AndValue needs to have more than one value pattern.");
      }
    }
  }, {
    key: "_reset",
    value: function _reset(cursor) {
      this.index = 0;
      this.nodes = [];
      this.node = null;
      this.cursor = cursor;
      this.mark = this.cursor.mark();
    }
  }, {
    key: "parse",
    value: function parse(cursor) {
      this._reset(cursor);

      this._tryPatterns();

      return this.node;
    }
  }, {
    key: "_tryPatterns",
    value: function _tryPatterns() {
      while (true) {
        var pattern = this._children[this.index];
        var node = pattern.parse(this.cursor);

        if (this.cursor.hasUnresolvedError()) {
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
  }, {
    key: "_next",
    value: function _next() {
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
  }, {
    key: "_hasMorePatterns",
    value: function _hasMorePatterns() {
      return this.index + 1 < this._children.length;
    }
  }, {
    key: "_assertRestOfPatternsAreOptional",
    value: function _assertRestOfPatternsAreOptional() {
      var _this2 = this;

      var areTheRestOptional = this.children.every(function (pattern, index) {
        return index <= _this2.index || pattern instanceof _OptionalValue.default;
      });

      if (!areTheRestOptional) {
        var parseError = new _ParseError.default("Could not match ".concat(this.name, " before string ran out."), this.index, this);
        this.cursor.throwError(parseError);
      }
    }
  }, {
    key: "_processValue",
    value: function _processValue() {
      if (this.cursor.hasUnresolvedError()) {
        this.node = null;
      } else {
        this.nodes = this.nodes.filter(function (node) {
          return node != null;
        });
        var lastNode = this.nodes[this.nodes.length - 1];
        var startIndex = this.mark;
        var endIndex = lastNode.endIndex;
        var value = this.nodes.map(function (node) {
          return node.value;
        }).join("");
        this.node = new _ValueNode.default("and-value", this.name, value, startIndex, endIndex);
        this.cursor.index = this.node.endIndex;
        this.cursor.addMatch(this, this.node);
      }
    }
  }, {
    key: "clone",
    value: function clone(name) {
      if (typeof name !== "string") {
        name = this.name;
      }

      return new AndValue(name, this._children);
    }
  }, {
    key: "getPossibilities",
    value: function getPossibilities(rootPattern) {
      if (rootPattern == null || !(rootPattern instanceof _Pattern.default)) {
        rootPattern = this;
      }

      var possibilities = this.children.map(function (child) {
        return child.getPossibilities(rootPattern);
      });
      return permutor.permute(possibilities);
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      var tokens = [];

      for (var x = 0; x < this._children.length; x++) {
        var child = this._children[x];

        if (child instanceof _OptionalValue.default) {
          tokens = tokens.concat(child.getTokens());
        } else {
          tokens = tokens.concat(child.getTokens());
          break;
        }
      }

      return tokens;
    }
  }]);

  return AndValue;
}(_ValuePattern2.default);

exports.default = AndValue;
//# sourceMappingURL=AndValue.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ValuePattern2 = _interopRequireDefault(__webpack_require__(27));

var _Pattern = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var OptionalValue =
/*#__PURE__*/
function (_ValuePattern) {
  _inherits(OptionalValue, _ValuePattern);

  function OptionalValue(pattern) {
    var _this;

    _classCallCheck(this, OptionalValue);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OptionalValue).call(this, "optional-value", "optional-value", [pattern]));

    _this._assertArguments();

    return _this;
  }

  _createClass(OptionalValue, [{
    key: "_assertArguments",
    value: function _assertArguments() {
      if (!(this.children[0] instanceof _ValuePattern2.default)) {
        throw new Error("Invalid Arguments: Expected a ValuePattern.");
      }
    }
  }, {
    key: "parse",
    value: function parse(cursor) {
      var mark = cursor.mark();
      var node = this.children[0].parse(cursor);

      if (cursor.hasUnresolvedError()) {
        cursor.resolveError();
        cursor.moveToMark(mark);
        return null;
      } else {
        cursor.addMatch(this, node);
        return node;
      }
    }
  }, {
    key: "clone",
    value: function clone() {
      return new OptionalValue(this.children[0]);
    }
  }, {
    key: "getPossibilities",
    value: function getPossibilities(rootPattern) {
      if (rootPattern == null || !(rootPattern instanceof _Pattern.default)) {
        rootPattern = this;
      } // This is to prevent possibilities explosion.


      if (this.parent === rootPattern) {
        var possibilities = this.children[0].getPossibilities(rootPattern);
        possibilities.unshift("");
        return possibilities;
      } else {
        return this.children[0].getPossibilities(rootPattern);
      }
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      return this._children[0].getTokens();
    }
  }]);

  return OptionalValue;
}(_ValuePattern2.default);

exports.default = OptionalValue;
//# sourceMappingURL=OptionalValue.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Permutor =
/*#__PURE__*/
function () {
  function Permutor() {
    _classCallCheck(this, Permutor);

    this.array = [];
    this.positionToOptions = null;
  }

  _createClass(Permutor, [{
    key: "permute",
    value: function permute(array) {
      this.array = array;
      this.createPositionMap();
      return this.getPermutations();
    }
  }, {
    key: "getPermutations",
    value: function getPermutations() {
      var _this = this;

      return this.array[0].reduce(function (acc, value, index) {
        return acc.concat(_this.getOptions(0, index));
      }, []);
    }
  }, {
    key: "getKey",
    value: function getKey(x, y) {
      return "".concat(x, "|").concat(y);
    }
  }, {
    key: "createPositionMap",
    value: function createPositionMap() {
      var _this2 = this;

      this.positionToOptions = {};

      for (var x = this.array.length - 1; x >= 0; x--) {
        var _loop = function _loop(y) {
          var yValue = _this2.array[x][y];
          var nextX = x + 1;

          if (_this2.array[nextX] != null) {
            var options = _this2.array[nextX];
            var value = options.map(function (option, index) {
              var permutations = _this2.getOptions(nextX, index);

              return permutations.map(function (option) {
                return "".concat(yValue).concat(option);
              });
            }).reduce(function (acc, value) {
              return acc.concat(value);
            }, []);

            _this2.setOptions(x, y, value);
          } else {
            _this2.setOptions(x, y, [yValue]);
          }
        };

        for (var y = 0; y < this.array[x].length; y++) {
          _loop(y);
        }
      }
    }
  }, {
    key: "getOptions",
    value: function getOptions(x, y) {
      return this.positionToOptions[this.getKey(x, y)];
    }
  }, {
    key: "setOptions",
    value: function setOptions(x, y, value) {
      this.positionToOptions[this.getKey(x, y)] = value;
    }
  }]);

  return Permutor;
}();

exports.default = Permutor;
//# sourceMappingURL=Permutor.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ValuePattern2 = _interopRequireDefault(__webpack_require__(27));

var _ParseError = _interopRequireDefault(__webpack_require__(26));

var _ValueNode = _interopRequireDefault(__webpack_require__(22));

var _Pattern = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AnyOfThese =
/*#__PURE__*/
function (_ValuePattern) {
  _inherits(AnyOfThese, _ValuePattern);

  function AnyOfThese(name, characters) {
    var _this;

    _classCallCheck(this, AnyOfThese);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AnyOfThese).call(this, "any-of-these", name));
    _this.characters = characters;

    _this._assertArguments();

    return _this;
  }

  _createClass(AnyOfThese, [{
    key: "_assertArguments",
    value: function _assertArguments() {
      if (typeof this.characters !== "string") {
        throw new Error("Invalid Arguments: The characters argument needs to be a string of characters.");
      }

      if (this.characters.length < 1) {
        throw new Error("Invalid Arguments: The characters argument needs to be at least one character long.");
      }
    }
  }, {
    key: "parse",
    value: function parse(cursor) {
      this._reset(cursor);

      this._tryPattern();

      return this.node;
    }
  }, {
    key: "_reset",
    value: function _reset(cursor) {
      this.cursor = cursor;
      this.mark = this.cursor.mark();
      this.node = null;
    }
  }, {
    key: "_tryPattern",
    value: function _tryPattern() {
      if (this._isMatch()) {
        var value = this.cursor.getChar();
        var index = this.cursor.getIndex();
        this.node = new _ValueNode.default("any-of-these", this.name, value, index, index);
        this.cursor.addMatch(this, this.node);
      } else {
        this._processError();
      }
    }
  }, {
    key: "_isMatch",
    value: function _isMatch() {
      return this.characters.indexOf(this.cursor.getChar()) > -1;
    }
  }, {
    key: "_processError",
    value: function _processError() {
      var message = "ParseError: Expected one of these characters, '".concat(this.characters, "' but found '").concat(this.cursor.getChar(), "' while parsing for '").concat(this.name, "'.");
      var parseError = new _ParseError.default(message, this.cursor.getIndex(), this);
      this.cursor.throwError(parseError);
    }
  }, {
    key: "clone",
    value: function clone(name) {
      if (typeof name !== "string") {
        name = this.name;
      }

      return new AnyOfThese(name, this.characters);
    }
  }, {
    key: "getPossibilities",
    value: function getPossibilities(rootPattern) {
      if (rootPattern == null || !(rootPattern instanceof _Pattern.default)) {
        rootPattern = this;
      }

      return this.getTokens();
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      return this.characters.split("");
    }
  }]);

  return AnyOfThese;
}(_ValuePattern2.default);

exports.default = AnyOfThese;
//# sourceMappingURL=AnyOfThese.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ParseError = _interopRequireDefault(__webpack_require__(26));

var _ValueNode = _interopRequireDefault(__webpack_require__(22));

var _ValuePattern2 = _interopRequireDefault(__webpack_require__(27));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Literal =
/*#__PURE__*/
function (_ValuePattern) {
  _inherits(Literal, _ValuePattern);

  function Literal(name, literal) {
    var _this;

    _classCallCheck(this, Literal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Literal).call(this, "literal", name));
    _this.literal = literal;

    _this._assertArguments();

    return _this;
  }

  _createClass(Literal, [{
    key: "_assertArguments",
    value: function _assertArguments() {
      if (typeof this.literal !== "string") {
        throw new Error("Invalid Arguments: The literal argument needs to be a string of characters.");
      }

      if (this.literal.length < 1) {
        throw new Error("Invalid Arguments: The literalString argument needs to be at least one character long.");
      }
    }
  }, {
    key: "parse",
    value: function parse(cursor) {
      this._reset(cursor);

      this._tryPattern();

      return this.node;
    }
  }, {
    key: "_reset",
    value: function _reset(cursor) {
      this.cursor = cursor;
      this.mark = this.cursor.mark();
      this.substring = this.cursor.string.substring(this.mark, this.mark + this.literal.length);
      this.node = null;
    }
  }, {
    key: "_tryPattern",
    value: function _tryPattern() {
      if (this.substring === this.literal) {
        this._processMatch();
      } else {
        this._processError();
      }
    }
  }, {
    key: "_processError",
    value: function _processError() {
      var message = "ParseError: Expected '".concat(this.literal, "' but found '").concat(this.substring, "'.");
      var parseError = new _ParseError.default(message, this.cursor.getIndex(), this);
      this.cursor.throwError(parseError);
    }
  }, {
    key: "_processMatch",
    value: function _processMatch() {
      this.node = new _ValueNode.default("literal", this.name, this.substring, this.mark, this.mark + this.literal.length - 1);
      this.cursor.index = this.node.endIndex;
      this.cursor.addMatch(this, this.node);
    }
  }, {
    key: "clone",
    value: function clone(name) {
      if (typeof name !== "string") {
        name = this.name;
      }

      return new Literal(name, this.literal);
    }
  }, {
    key: "getPossibilities",
    value: function getPossibilities() {
      return [this.getTokenValue()];
    }
  }, {
    key: "getTokenValue",
    value: function getTokenValue() {
      return this.literal;
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      return [this.getTokenValue()];
    }
  }]);

  return Literal;
}(_ValuePattern2.default);

exports.default = Literal;
//# sourceMappingURL=Literal.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ValuePattern = _interopRequireDefault(__webpack_require__(27));

var _ValueNode = _interopRequireDefault(__webpack_require__(22));

var _ParseError = _interopRequireDefault(__webpack_require__(26));

var _Pattern2 = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NotValue =
/*#__PURE__*/
function (_Pattern) {
  _inherits(NotValue, _Pattern);

  function NotValue(name, pattern) {
    _classCallCheck(this, NotValue);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotValue).call(this, "not-value", name, [pattern]));
  }

  _createClass(NotValue, [{
    key: "_assertChildren",
    value: function _assertChildren() {
      if (!(this.children[0] instanceof _Pattern2.default)) {
        throw new Error("Invalid Arguments: Expected the pattern to be a ValuePattern.");
      }

      if (typeof this.name !== "string") {
        throw new Error("Invalid Arguments: Expected name to be a string.");
      }
    }
  }, {
    key: "_reset",
    value: function _reset(cursor) {
      this.match = "";
      this.node = null;
      this.cursor = cursor;
      this.mark = this.cursor.mark();
    }
  }, {
    key: "parse",
    value: function parse(cursor) {
      this._reset(cursor);

      this._tryPattern();

      return this.node;
    }
  }, {
    key: "_tryPattern",
    value: function _tryPattern() {
      while (true) {
        var mark = this.cursor.mark();
        this.children[0].parse(this.cursor);

        if (this.cursor.hasUnresolvedError()) {
          this.cursor.resolveError();
          this.cursor.moveToMark(mark);
          this.match += this.cursor.getChar();
          break;
        } else {
          this.cursor.moveToMark(mark);
          break;
        }
      }

      this._processMatch();
    }
  }, {
    key: "_processMatch",
    value: function _processMatch() {
      if (this.match.length === 0) {
        var parseError = new _ParseError.default("Didn't find any characters that didn't match the ".concat(this.children[0].name, " pattern."), this.mark, this);
        this.cursor.throwError(parseError);
      } else {
        this.node = new _ValueNode.default("not-value", this.name, this.match, this.mark, this.mark);
        this.cursor.index = this.node.endIndex;
        this.cursor.addMatch(this, this.node);
      }
    }
  }, {
    key: "clone",
    value: function clone(name) {
      if (typeof name !== "string") {
        name = this.name;
      }

      return new NotValue(name, this.children[0]);
    }
  }, {
    key: "getPossibilities",
    value: function getPossibilities() {
      return [];
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      return [];
    }
  }]);

  return NotValue;
}(_Pattern2.default);

exports.default = NotValue;
//# sourceMappingURL=NotValue.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ValuePattern2 = _interopRequireDefault(__webpack_require__(27));

var _ValueNode = _interopRequireDefault(__webpack_require__(22));

var _OptionalValue = _interopRequireDefault(__webpack_require__(30));

var _Pattern = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var OrValue =
/*#__PURE__*/
function (_ValuePattern) {
  _inherits(OrValue, _ValuePattern);

  function OrValue(name, patterns) {
    var _this;

    _classCallCheck(this, OrValue);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrValue).call(this, "or-value", name, patterns));

    _this._assertArguments();

    return _this;
  }

  _createClass(OrValue, [{
    key: "_assertArguments",
    value: function _assertArguments() {
      if (this._children.length < 2) {
        throw new Error("Invalid Argument: OrValue needs to have more than one value pattern.");
      }

      var hasOptionalChildren = this._children.some(function (pattern) {
        return pattern instanceof _OptionalValue.default;
      });

      if (hasOptionalChildren) {
        throw new Error("OrValues cannot have optional values.");
      }
    }
  }, {
    key: "_reset",
    value: function _reset(cursor) {
      this.index = 0;
      this.errors = [];
      this.node = null;
      this.cursor = cursor;
      this.mark = cursor.mark();
    }
  }, {
    key: "parse",
    value: function parse(cursor) {
      this._reset(cursor);

      this._tryPattern();

      return this.node;
    }
  }, {
    key: "_tryPattern",
    value: function _tryPattern() {
      while (true) {
        var pattern = this._children[this.index];
        var node = pattern.parse(this.cursor, this.parseError);

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
          this.node = new _ValueNode.default("or-value", this.name, node.value, node.startIndex, node.endIndex);
          this.cursor.index = this.node.endIndex;
          this.cursor.addMatch(this, this.node);
          break;
        }
      }
    }
  }, {
    key: "clone",
    value: function clone(name) {
      if (typeof name !== "string") {
        name = this.name;
      }

      return new OrValue(name, this._children);
    }
  }, {
    key: "getPossibilities",
    value: function getPossibilities(rootPattern) {
      if (rootPattern == null || !(rootPattern instanceof _Pattern.default)) {
        rootPattern = this;
      }

      return this.children.map(function (child) {
        return child.getPossibilities(rootPattern);
      }).reduce(function (acc, value) {
        return acc.concat(value);
      }, []);
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      var tokens = this._children.map(function (c) {
        return c.getTokens();
      });

      var hasPrimitiveTokens = tokens.every(function (t) {
        return t.every(function (value) {
          return typeof value === "string";
        });
      });

      if (hasPrimitiveTokens && tokens.length > 0) {
        return tokens.reduce(function (acc, t) {
          return acc.concat(t);
        }, []);
      }

      return this._children[0].getTokens();
    }
  }]);

  return OrValue;
}(_ValuePattern2.default);

exports.default = OrValue;
//# sourceMappingURL=OrValue.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ValuePattern2 = _interopRequireDefault(__webpack_require__(27));

var _ValueNode = _interopRequireDefault(__webpack_require__(22));

var _ParseError = _interopRequireDefault(__webpack_require__(26));

var _OptionalValue = _interopRequireDefault(__webpack_require__(30));

var _Pattern = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RepeatValue =
/*#__PURE__*/
function (_ValuePattern) {
  _inherits(RepeatValue, _ValuePattern);

  function RepeatValue(name, pattern, divider) {
    var _this;

    _classCallCheck(this, RepeatValue);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RepeatValue).call(this, "repeat-value", name, divider != null ? [pattern, divider] : [pattern]));
    _this._pattern = _this.children[0];
    _this._divider = _this.children[1];

    _this._assertArguments();

    return _this;
  }

  _createClass(RepeatValue, [{
    key: "_assertArguments",
    value: function _assertArguments() {
      if (this._pattern instanceof _OptionalValue.default) {
        throw new Error("Invalid Arguments: The pattern cannot be a optional pattern.");
      }
    }
  }, {
    key: "_reset",
    value: function _reset(cursor) {
      this.nodes = [];
      this.cursor = cursor;
      this.mark = this.cursor.mark();
    }
  }, {
    key: "parse",
    value: function parse(cursor) {
      this._reset(cursor);

      this._tryPattern();

      return this.node;
    }
  }, {
    key: "_tryPattern",
    value: function _tryPattern() {
      while (true) {
        var node = this._pattern.parse(this.cursor);

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
            var mark = this.cursor.mark();

            var _node = this._divider.parse(this.cursor);

            if (this.cursor.hasUnresolvedError()) {
              this.cursor.moveToMark(mark);

              this._processMatch();

              break;
            } else {
              this.nodes.push(_node);
              this.cursor.next();
            }
          }
        }
      }
    }
  }, {
    key: "_processMatch",
    value: function _processMatch() {
      this.cursor.resolveError();

      if (this.nodes.length === 0) {
        var parseError = new _ParseError.default("Did not find a repeating match of ".concat(this.name, "."), this.mark, this);
        this.cursor.throwError(parseError);
        this.node = null;
      } else {
        var value = this.nodes.map(function (node) {
          return node.value;
        }).join("");
        this.node = new _ValueNode.default("repeat-value", this.name, value, this.nodes[0].startIndex, this.nodes[this.nodes.length - 1].endIndex);
        this.cursor.index = this.node.endIndex;
        this.cursor.addMatch(this, this.node);
      }
    }
  }, {
    key: "clone",
    value: function clone(name) {
      if (typeof name !== "string") {
        name = this.name;
      }

      return new RepeatValue(name, this._pattern, this._divider);
    }
  }, {
    key: "getPossibilities",
    value: function getPossibilities(rootPattern) {
      if (rootPattern == null || !(rootPattern instanceof _Pattern.default)) {
        rootPattern = this;
      }

      if (this._divider != null) {
        var dividerPossibilities = this._divider.getPossibilities(rootPattern);

        return this._pattern.getPossibilities(rootPattern).map(function (possibility) {
          return dividerPossibilities.map(function (divider) {
            return "".concat(possibility).concat(divider);
          });
        }).reduce(function (acc, value) {
          return acc.concat(value);
        }, []);
      } else {
        return this._pattern.getPossibilities(rootPattern);
      }
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      return this._pattern.getTokens();
    }
  }]);

  return RepeatValue;
}(_ValuePattern2.default);

exports.default = RepeatValue;
//# sourceMappingURL=RepeatValue.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CompositePattern2 = _interopRequireDefault(__webpack_require__(38));

var _CompositeNode = _interopRequireDefault(__webpack_require__(21));

var _ParseError = _interopRequireDefault(__webpack_require__(26));

var _OptionalValue = _interopRequireDefault(__webpack_require__(30));

var _OptionalComposite = _interopRequireDefault(__webpack_require__(39));

var _Permutor = _interopRequireDefault(__webpack_require__(31));

var _Pattern = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var permutor = new _Permutor.default();

var AndComposite =
/*#__PURE__*/
function (_CompositePattern) {
  _inherits(AndComposite, _CompositePattern);

  function AndComposite(name) {
    var _this;

    var patterns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, AndComposite);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AndComposite).call(this, "and-composite", name, patterns));

    _this._assertArguments();

    return _this;
  }

  _createClass(AndComposite, [{
    key: "_assertArguments",
    value: function _assertArguments() {
      if (this._children.length < 2) {
        throw new Error("Invalid Argument: AndValue needs to have more than one value pattern.");
      }
    }
  }, {
    key: "_reset",
    value: function _reset(cursor) {
      this.index = 0;
      this.nodes = [];
      this.node = null;
      this.cursor = cursor;
      this.mark = this.cursor.mark();
    }
  }, {
    key: "parse",
    value: function parse(cursor) {
      this._reset(cursor);

      this._tryPatterns();

      return this.node;
    }
  }, {
    key: "_tryPatterns",
    value: function _tryPatterns() {
      while (true) {
        var pattern = this._children[this.index];
        var node = pattern.parse(this.cursor);

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
  }, {
    key: "_next",
    value: function _next() {
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
  }, {
    key: "_hasMorePatterns",
    value: function _hasMorePatterns() {
      return this.index + 1 < this._children.length;
    }
  }, {
    key: "_assertRestOfPatternsAreOptional",
    value: function _assertRestOfPatternsAreOptional() {
      var _this2 = this;

      var areTheRestOptional = this.children.every(function (pattern, index) {
        return index <= _this2.index || pattern instanceof _OptionalValue.default || pattern instanceof _OptionalComposite.default;
      });

      if (!areTheRestOptional) {
        var parseError = new _ParseError.default("Could not match ".concat(this.name, " before string ran out."), this.index, this);
        this.cursor.throwError(parseError);
      }
    }
  }, {
    key: "_processValue",
    value: function _processValue() {
      if (!this.cursor.hasUnresolvedError()) {
        this.nodes = this.nodes.filter(function (node) {
          return node != null;
        });
        var lastNode = this.nodes[this.nodes.length - 1];
        var startIndex = this.mark;
        var endIndex = lastNode.endIndex;
        this.node = new _CompositeNode.default("and-composite", this.name, startIndex, endIndex);
        this.node.children = this.nodes;
        this.cursor.index = this.node.endIndex;
        this.cursor.addMatch(this, this.node);
      } else {
        this.node = null;
      }
    }
  }, {
    key: "clone",
    value: function clone(name) {
      if (typeof name !== "string") {
        name = this.name;
      }

      return new AndComposite(name, this._children);
    }
  }, {
    key: "getPossibilities",
    value: function getPossibilities(rootPattern) {
      if (rootPattern == null || !(rootPattern instanceof _Pattern.default)) {
        rootPattern = this;
      }

      var possibilities = this.children.map(function (child) {
        return child.getPossibilities(rootPattern);
      });
      return permutor.permute(possibilities);
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      var tokens = [];

      for (var x = 0; x < this._children.length; x++) {
        var child = this._children[x];

        if (child instanceof _OptionalValue.default || child instanceof _OptionalComposite.default) {
          tokens = tokens.concat(child.getTokens());
        } else {
          tokens = tokens.concat(child.getTokens());
          break;
        }
      }

      return tokens;
    }
  }]);

  return AndComposite;
}(_CompositePattern2.default);

exports.default = AndComposite;
//# sourceMappingURL=AndComposite.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Pattern2 = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CompositePattern =
/*#__PURE__*/
function (_Pattern) {
  _inherits(CompositePattern, _Pattern);

  function CompositePattern(type, name) {
    var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, CompositePattern);

    return _possibleConstructorReturn(this, _getPrototypeOf(CompositePattern).call(this, type, name, children));
  }

  _createClass(CompositePattern, [{
    key: "clone",
    value: function clone() {
      throw new Error("Not Yet Implemented");
    }
  }]);

  return CompositePattern;
}(_Pattern2.default);

exports.default = CompositePattern;
//# sourceMappingURL=CompositePattern.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CompositePattern2 = _interopRequireDefault(__webpack_require__(38));

var _Pattern = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var OptionalComposite =
/*#__PURE__*/
function (_CompositePattern) {
  _inherits(OptionalComposite, _CompositePattern);

  function OptionalComposite(pattern) {
    _classCallCheck(this, OptionalComposite);

    return _possibleConstructorReturn(this, _getPrototypeOf(OptionalComposite).call(this, "optional-composite", "optional-composite", [pattern]));
  }

  _createClass(OptionalComposite, [{
    key: "parse",
    value: function parse(cursor) {
      var mark = cursor.mark();
      this.mark = mark;
      var node = this.children[0].parse(cursor);

      if (cursor.hasUnresolvedError()) {
        cursor.resolveError();
        cursor.moveToMark(mark);
        return null;
      } else {
        cursor.addMatch(this, node);
        return node;
      }
    }
  }, {
    key: "clone",
    value: function clone() {
      return new OptionalComposite(this.children[0]);
    }
  }, {
    key: "getPossibilities",
    value: function getPossibilities(rootPattern) {
      if (rootPattern == null || !(rootPattern instanceof _Pattern.default)) {
        rootPattern = this;
      } // This is to prevent possibilities explosion.


      if (this.parent === rootPattern) {
        var possibilities = this.children[0].getPossibilities(rootPattern);
        possibilities.unshift("");
        return possibilities;
      } else {
        return this.children[0].getPossibilities(rootPattern);
      }
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      return this._children[0].getTokens();
    }
  }]);

  return OptionalComposite;
}(_CompositePattern2.default);

exports.default = OptionalComposite;
//# sourceMappingURL=OptionalComposite.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CompositePattern2 = _interopRequireDefault(__webpack_require__(38));

var _OptionalValue = _interopRequireDefault(__webpack_require__(30));

var _OptionalComposite = _interopRequireDefault(__webpack_require__(39));

var _Pattern = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var OrComposite =
/*#__PURE__*/
function (_CompositePattern) {
  _inherits(OrComposite, _CompositePattern);

  function OrComposite(name, patterns) {
    var _this;

    _classCallCheck(this, OrComposite);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrComposite).call(this, "or-composite", name, patterns));

    _this._assertArguments();

    return _this;
  }

  _createClass(OrComposite, [{
    key: "_assertArguments",
    value: function _assertArguments() {
      if (this._children.length < 2) {
        throw new Error("Invalid Argument: OrValue needs to have more than one value pattern.");
      }

      var hasOptionalChildren = this._children.some(function (pattern) {
        return pattern instanceof _OptionalValue.default || pattern instanceof _OptionalComposite.default;
      });

      if (hasOptionalChildren) {
        throw new Error("OrComposite cannot have optional values.");
      }
    }
  }, {
    key: "_reset",
    value: function _reset(cursor) {
      this.cursor = cursor;
      this.mark = null;
      this.index = 0;
      this.node = null;
      this.mark = cursor.mark();
    }
  }, {
    key: "parse",
    value: function parse(cursor) {
      this._reset(cursor);

      this._tryPattern();

      if (this.node != null) {
        this.cursor.addMatch(this, this.node);
      }

      return this.node;
    }
  }, {
    key: "_tryPattern",
    value: function _tryPattern() {
      while (true) {
        var pattern = this._children[this.index];
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
  }, {
    key: "clone",
    value: function clone(name) {
      if (typeof name !== "string") {
        name = this.name;
      }

      return new OrComposite(name, this._children);
    }
  }, {
    key: "getPossibilities",
    value: function getPossibilities(rootPattern) {
      if (rootPattern == null || !(rootPattern instanceof _Pattern.default)) {
        rootPattern = this;
      }

      return this.children.map(function (child) {
        return child.getPossibilities(rootPattern);
      }).reduce(function (acc, value) {
        return acc.concat(value);
      }, []);
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      var tokens = this._children.map(function (c) {
        return c.getTokens();
      });

      var hasPrimitiveTokens = tokens.every(function (t) {
        return t.every(function (value) {
          return typeof value === "string";
        });
      });

      if (hasPrimitiveTokens && tokens.length > 0) {
        return tokens.reduce(function (acc, t) {
          return acc.concat(t);
        }, []);
      }

      return this._children[0].getTokens();
    }
  }]);

  return OrComposite;
}(_CompositePattern2.default);

exports.default = OrComposite;
//# sourceMappingURL=OrComposite.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CompositePattern2 = _interopRequireDefault(__webpack_require__(38));

var _CompositeNode = _interopRequireDefault(__webpack_require__(21));

var _ParseError = _interopRequireDefault(__webpack_require__(26));

var _OptionalComposite = _interopRequireDefault(__webpack_require__(39));

var _Pattern = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RepeatComposite =
/*#__PURE__*/
function (_CompositePattern) {
  _inherits(RepeatComposite, _CompositePattern);

  function RepeatComposite(name, pattern, divider) {
    var _this;

    _classCallCheck(this, RepeatComposite);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RepeatComposite).call(this, "repeat-composite", name, divider != null ? [pattern, divider] : [pattern]));
    _this._pattern = _this.children[0];
    _this._divider = _this.children[1];

    _this._assertArguments();

    return _this;
  }

  _createClass(RepeatComposite, [{
    key: "_assertArguments",
    value: function _assertArguments() {
      if (this._pattern instanceof _OptionalComposite.default) {
        throw new Error("Invalid Arguments: The pattern cannot be a optional pattern.");
      }
    }
  }, {
    key: "_reset",
    value: function _reset(cursor) {
      this.nodes = [];
      this.cursor = cursor;
      this.mark = this.cursor.mark();
    }
  }, {
    key: "parse",
    value: function parse(cursor) {
      this._reset(cursor);

      this._tryPattern();

      return this.node;
    }
  }, {
    key: "_tryPattern",
    value: function _tryPattern() {
      while (true) {
        var node = this._pattern.parse(this.cursor);

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
            var mark = this.cursor.mark();

            var _node = this._divider.parse(this.cursor);

            if (this.cursor.hasUnresolvedError()) {
              this.cursor.moveToMark(mark);

              this._processMatch();

              break;
            } else {
              this.nodes.push(_node);
              this.cursor.next();
            }
          }
        }
      }
    }
  }, {
    key: "_processMatch",
    value: function _processMatch() {
      this.cursor.resolveError();

      if (this.nodes.length === 0) {
        this.cursor.throwError(new _ParseError.default("Did not find a repeating match of ".concat(this.name, "."), this.mark, this));
        this.node = null;
      } else {
        this.node = new _CompositeNode.default("repeat-composite", this.name, this.nodes[0].startIndex, this.nodes[this.nodes.length - 1].endIndex);
        this.node.children = this.nodes;
        this.cursor.index = this.node.endIndex;
        this.cursor.addMatch(this, this.node);
      }
    }
  }, {
    key: "clone",
    value: function clone(name) {
      if (typeof name !== "string") {
        name = this.name;
      }

      return new RepeatComposite(name, this._pattern, this._divider);
    }
  }, {
    key: "getPossibilities",
    value: function getPossibilities(rootPattern) {
      if (rootPattern == null || !(rootPattern instanceof _Pattern.default)) {
        rootPattern = this;
      }

      if (this._divider != null) {
        var dividerPossibilities = this._divider.getPossibilities(rootPattern);

        return this._pattern.getPossibilities(rootPattern).map(function (possibility) {
          return dividerPossibilities.map(function (divider) {
            return "".concat(possibility).concat(divider);
          });
        }).reduce(function (acc, value) {
          return acc.concat(value);
        }, []);
      } else {
        return this._pattern.getPossibilities(rootPattern);
      }
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      return this._pattern.getTokens();
    }
  }]);

  return RepeatComposite;
}(_CompositePattern2.default);

exports.default = RepeatComposite;
//# sourceMappingURL=RepeatComposite.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Pattern2 = _interopRequireDefault(__webpack_require__(28));

var _ParseError = _interopRequireDefault(__webpack_require__(26));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RecursivePattern =
/*#__PURE__*/
function (_Pattern) {
  _inherits(RecursivePattern, _Pattern);

  function RecursivePattern(name) {
    var _this;

    _classCallCheck(this, RecursivePattern);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RecursivePattern).call(this, "recursive", name));
    _this.isRecursing = false;
    return _this;
  }

  _createClass(RecursivePattern, [{
    key: "getPattern",
    value: function getPattern() {
      var _this2 = this;

      return this._climb(this.parent, function (pattern) {
        if (pattern == null) {
          return false;
        }

        return pattern.name === _this2.name;
      });
    }
  }, {
    key: "_climb",
    value: function _climb(pattern, isMatch) {
      if (isMatch(pattern)) {
        return pattern;
      } else {
        if (pattern && pattern.parent != null) {
          return this._climb(pattern.parent, isMatch);
        }

        return null;
      }
    }
  }, {
    key: "parse",
    value: function parse(cursor) {
      if (this.pattern == null) {
        var pattern = this.getPattern();

        if (pattern == null) {
          cursor.throwError(new _ParseError.default("Couldn't find parent pattern to recursively parse, with the name ".concat(this.name, ".")), cursor.index, this);
          return null;
        }

        this.pattern = pattern.clone();
        this.pattern.parent = this;
      }

      var node = this.pattern.parse(cursor);

      if (!cursor.hasUnresolvedError()) {
        cursor.addMatch(this, node);
      }

      return node;
    }
  }, {
    key: "clone",
    value: function clone(name) {
      if (typeof name !== "string") {
        name = this.name;
      }

      return new RecursivePattern(name);
    }
  }, {
    key: "getPossibilities",
    value: function getPossibilities() {
      if (!this.isRecursing) {
        this.isRecursing = true;
        var possibilities = this.getPattern().getPossibilities();
        this.isRecursing = false;
        return possibilities;
      } else {
        return ["[".concat(this.name, "]")];
      }
    }
  }, {
    key: "getTokenValue",
    value: function getTokenValue() {
      return this.getPattern().getTokenValue();
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      if (!this.isRecursing) {
        this.isRecursing = true;
        var tokens = this.getPattern().getTokens();
        this.isRecursing = false;
        return tokens;
      }
    }
  }]);

  return RecursivePattern;
}(_Pattern2.default);

exports.default = RecursivePattern;
//# sourceMappingURL=RecursivePattern.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = __webpack_require__(19);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ParseInspector =
/*#__PURE__*/
function () {
  function ParseInspector() {
    _classCallCheck(this, ParseInspector);

    this.cursor = null;
    this.result = null;
    this.text = null;
    this.match = null;
    this.error = null;
    this.patternMatch = null;
    this.matchedText = "";
    this.rootPattern = null;
    this.possibilities = null;
  }

  _createClass(ParseInspector, [{
    key: "inspectParse",
    value: function inspectParse(text, pattern) {
      this.reset();
      this.text = text;
      this.rootPattern = pattern; // If no text all options are available.

      if (text.length === 0) {
        return {
          pattern: null,
          astNode: null,
          match: null,
          error: null,
          possibilities: {
            startIndex: 0,
            options: pattern.getPossibilities()
          },
          isComplete: false
        };
      }

      this.parse();
      this.saveMatchedText();
      this.saveMatch();
      this.saveError();
      this.savePossibilities();
      return {
        pattern: this.patternMatch.pattern,
        astNode: this.patternMatch.astNode,
        match: this.match,
        error: this.error,
        possibilities: this.possibilities,
        isComplete: this.cursor.didSuccessfullyParse()
      };
    }
  }, {
    key: "reset",
    value: function reset() {
      this.cursor = null;
      this.result = null;
      this.text = null;
      this.match = null;
      this.error = null;
      this.patternMatch = null;
      this.matchedText = "";
      this.rootPattern = null;
      this.possibilities = null;
    }
  }, {
    key: "parse",
    value: function parse() {
      this.rootPattern = this.rootPattern;
      this.cursor = new _index.Cursor(this.text);
      this.result = this.rootPattern.parse(this.cursor);
      this.patternMatch = this.cursor.lastMatch;
    }
  }, {
    key: "saveMatchedText",
    value: function saveMatchedText() {
      if (this.patternMatch.astNode != null) {
        this.matchedText = this.text.substring(0, this.patternMatch.astNode.endIndex + 1);
      }
    }
  }, {
    key: "saveMatch",
    value: function saveMatch() {
      var node = this.patternMatch.astNode;

      if (node == null) {
        this.match = null;
        return;
      }

      var endIndex = this.matchedText.length - 1;
      this.match = {
        text: this.matchedText,
        startIndex: 0,
        endIndex: endIndex
      };
    }
  }, {
    key: "saveError",
    value: function saveError() {
      if (this.patternMatch.astNode == null) {
        this.error = {
          startIndex: 0,
          endIndex: this.text.length - 1,
          text: this.text
        };
        return this;
      }

      if (this.text.length > this.matchedText.length) {
        var difference = this.text.length - this.matchedText.length;
        var startIndex = this.patternMatch.astNode.endIndex + 1;
        var endIndex = startIndex + difference - 1;
        this.error = {
          startIndex: startIndex,
          endIndex: endIndex,
          text: this.text.substring(startIndex, endIndex + 1)
        };
        return;
      } else {
        this.error = null;
        return;
      }
    }
  }, {
    key: "savePossibilities",
    value: function savePossibilities() {
      if (this.patternMatch.pattern === this.rootPattern && this.cursor.didSuccessfullyParse()) {
        this.possibilities = null;
        return;
      }

      if (this.patternMatch.astNode == null) {
        var _options = this.rootPattern.getPossibilities();

        var parts = this.text.split(" ").filter(function (part) {
          return part.length > 0;
        });
        _options = _options.filter(function (option) {
          return parts.some(function (part) {
            return option.indexOf(part) > -1;
          });
        });

        if (_options.length === 0) {
          this.possibilities = null;
          return;
        }

        this.possibilities = {
          startIndex: 0,
          options: _options
        };
        return;
      }

      var pattern = this.patternMatch.pattern;
      var parentPattern = pattern.parent;
      var index = parentPattern.children.indexOf(pattern);
      var parentClone = parentPattern.clone();
      parentClone.children = parentClone.children.slice(index + 1);
      var options = parentClone.getPossibilities();
      var startIndex = this.matchedText.length;

      if (this.matchedText.length < this.text.length) {
        var leftOver = this.text.substring(this.matchedText.length);
        var partialMatchOptions = options.filter(function (option) {
          return option.indexOf(leftOver) === 0;
        }).map(function (option) {
          return option.substring(leftOver.length);
        });

        if (partialMatchOptions.length === 0) {
          this.possibilities = null;
          return;
        } else {
          this.match = _objectSpread({}, this.match, {
            text: this.match.text + leftOver,
            endIndex: this.match.endIndex + leftOver.length
          });
          this.error = null;
          this.possibilities = {
            startIndex: this.match.endIndex + 1,
            options: partialMatchOptions
          };
          return;
        }
      }

      this.possibilities = {
        startIndex: startIndex,
        options: options
      };
    }
  }], [{
    key: "inspectParse",
    value: function inspectParse(text, pattern) {
      return new ParseInspector().inspectParse(text, pattern);
    }
  }]);

  return ParseInspector;
}();

exports.default = ParseInspector;
//# sourceMappingURL=ParseInspector.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = __webpack_require__(19);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TextInspector =
/*#__PURE__*/
function () {
  function TextInspector() {
    _classCallCheck(this, TextInspector);

    this.cursor = null;
    this.result = null;
    this.text = null;
    this.match = null;
    this.error = null;
    this.patternMatch = null;
    this.matchedText = "";
    this.rootPattern = null;
    this.tokens = null;
    this.options = [];
    this.parseStack = [];
  }

  _createClass(TextInspector, [{
    key: "inspect",
    value: function inspect(text, pattern) {
      this.reset();
      this.text = text;
      this.rootPattern = pattern; // If no text all options are available.

      if (text.length === 0) {
        return {
          pattern: null,
          astNode: null,
          match: null,
          error: null,
          tokens: {
            startIndex: 0,
            options: pattern.getTokens()
          },
          isComplete: false,
          parseStack: []
        };
      }

      this.parse();
      this.saveParseStack();
      this.saveMatchedText();
      this.saveMatch();
      this.saveError();
      this.saveOptions();
      this.saveNextToken();
      return {
        pattern: this.patternMatch.pattern,
        astNode: this.patternMatch.astNode,
        match: this.match,
        error: this.error,
        tokens: this.tokens,
        isComplete: this.cursor.didSuccessfullyParse(),
        parseStack: this.parseStack
      };
    }
  }, {
    key: "reset",
    value: function reset() {
      this.cursor = null;
      this.result = null;
      this.text = null;
      this.match = null;
      this.error = null;
      this.patternMatch = null;
      this.matchedText = "";
      this.rootPattern = null;
      this.tokens = null;
      this.options = [];
      this.parseStack = [];
    }
  }, {
    key: "parse",
    value: function parse() {
      this.rootPattern = this.rootPattern;
      this.cursor = new _index.Cursor(this.text);
      this.cursor.startRecording();
      this.result = this.rootPattern.parse(this.cursor);
      this.patternMatch = this.cursor.lastMatch;
    }
  }, {
    key: "saveParseStack",
    value: function saveParseStack() {
      this.parseStack = this.cursor.history.getLastParseStack();
    }
  }, {
    key: "saveMatchedText",
    value: function saveMatchedText() {
      if (this.patternMatch.astNode != null) {
        this.matchedText = this.text.substring(0, this.patternMatch.astNode.endIndex + 1);
      }
    }
  }, {
    key: "saveMatch",
    value: function saveMatch() {
      var node = this.patternMatch.astNode;

      if (node == null) {
        this.match = null;
        return;
      }

      var endIndex = this.matchedText.length - 1;
      this.match = {
        text: this.matchedText,
        startIndex: 0,
        endIndex: endIndex
      };
    }
  }, {
    key: "saveError",
    value: function saveError() {
      if (this.patternMatch.astNode == null) {
        this.error = {
          startIndex: 0,
          endIndex: this.text.length - 1,
          text: this.text
        };
        return this;
      }

      if (this.text.length > this.matchedText.length) {
        var difference = this.text.length - this.matchedText.length;
        var startIndex = this.patternMatch.astNode.endIndex + 1;
        var endIndex = startIndex + difference - 1;
        this.error = {
          startIndex: startIndex,
          endIndex: endIndex,
          text: this.text.substring(startIndex, endIndex + 1)
        };
        return;
      } else {
        this.error = null;
        return;
      }
    }
  }, {
    key: "saveNextToken",
    value: function saveNextToken() {
      if (this.patternMatch.pattern === this.rootPattern && this.cursor.didSuccessfullyParse()) {
        this.tokens = null;
        return;
      }

      if (this.patternMatch.astNode == null) {
        var _options = this.rootPattern.getTokens();

        var parts = this.text.split(" ").filter(function (part) {
          return part.length > 0;
        });
        _options = _options.filter(function (option) {
          return parts.some(function (part) {
            return option.indexOf(part) > -1;
          });
        });

        if (_options.length === 0) {
          this.tokens = null;
          return;
        }

        this.tokens = {
          startIndex: 0,
          options: _options
        };
        return;
      }

      var options = this.options;
      var startIndex = this.matchedText.length;

      if (this.matchedText.length < this.text.length) {
        var leftOver = this.text.substring(this.matchedText.length);
        var partialMatchOptions = options.filter(function (option) {
          return option.indexOf(leftOver) === 0;
        }).map(function (option) {
          return option.substring(leftOver.length);
        });

        if (partialMatchOptions.length === 0) {
          this.tokens = null;
          return;
        } else {
          this.match = _objectSpread({}, this.match, {
            text: this.match.text + leftOver,
            endIndex: this.match.endIndex + leftOver.length
          });
          this.error = null;
          this.tokens = {
            startIndex: this.match.endIndex + 1,
            options: partialMatchOptions
          };
          return;
        }
      }

      this.tokens = {
        startIndex: startIndex,
        options: options
      };
    }
  }, {
    key: "saveOptions",
    value: function saveOptions() {
      var _this = this;

      var furthestMatches = this.cursor.history.astNodes.reduce(function (acc, node, index) {
        if (node.endIndex === acc.furthestTextIndex) {
          acc.nodeIndexes.push(index);
        } else if (node.endIndex > acc.furthestTextIndex) {
          acc.furthestTextIndex = node.endIndex;
          acc.nodeIndexes = [index];
        }

        return acc;
      }, {
        furthestTextIndex: -1,
        nodeIndexes: []
      });
      var matches = furthestMatches.nodeIndexes.reduce(function (acc, index) {
        var pattern = _this.cursor.history.patterns[index];
        var tokens = pattern.getNextTokens();
        tokens.forEach(function (token) {
          acc[token] = true;
        });
        return acc;
      }, {});
      this.options = Object.keys(matches);
    }
  }], [{
    key: "inspect",
    value: function inspect(text, pattern) {
      return new TextInspector().inspect(text, pattern);
    }
  }]);

  return TextInspector;
}();

exports.default = TextInspector;
//# sourceMappingURL=TextInspector.js.map

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__);


const divider = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__["RegexValue"]("divider", "\\s*[,]\\s*");

/* harmony default export */ __webpack_exports__["default"] = (divider);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var _spaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);




const values = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__["RepeatComposite"]("values", _value_js__WEBPACK_IMPORTED_MODULE_1__["default"], _spaces_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (values);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _unit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var _hex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony import */ var _method_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);
/* harmony import */ var _name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52);
;






const value = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__["OrComposite"]("value", [_hex_js__WEBPACK_IMPORTED_MODULE_2__["default"], _method_js__WEBPACK_IMPORTED_MODULE_4__["default"], _unit_js__WEBPACK_IMPORTED_MODULE_1__["default"], _number_js__WEBPACK_IMPORTED_MODULE_3__["default"], _name_js__WEBPACK_IMPORTED_MODULE_5__["default"]]);

/* harmony default export */ __webpack_exports__["default"] = (value);


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);




const unitType = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__["RegexValue"]("unit-type", "[a-zA-Z%]+");
const unit = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__["AndComposite"]("unit", [_number_js__WEBPACK_IMPORTED_MODULE_1__["default"], unitType]);

/* harmony default export */ __webpack_exports__["default"] = (unit);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__);


const number = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__["RegexValue"](
  "number",
  "[-+]?[0-9]*[.]?[0-9]+([eE][-+]?[0-9]+)?"
);

/* harmony default export */ __webpack_exports__["default"] = (number);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__);


const hex = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__["RegexValue"]("hex", "#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}");

/* harmony default export */ __webpack_exports__["default"] = (hex);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
/* harmony import */ var _optionalSpaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony import */ var _divider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);






const openParen = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__["Literal"]("open-paren", "(");
const closeParen = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__["Literal"]("close-paren", ")");
const values = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__["RecursivePattern"]("values");
const args = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__["RepeatComposite"]("arguments", values, _divider_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
const optionalArgs = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__["OptionalComposite"](args);

const method = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__["AndComposite"]("method", [
  _name_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  openParen,
  _optionalSpaces_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  optionalArgs,
  _optionalSpaces_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  closeParen
]);

/* harmony default export */ __webpack_exports__["default"] = (method);


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__);


const name = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__["RegexValue"]("name", "[a-zA-Z]+[a-zA-Z0-9_-]*");

/* harmony default export */ __webpack_exports__["default"] = (name);


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _spaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);



const optionalSpaces = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__["OptionalValue"](_spaces_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (optionalSpaces);


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__);


const space = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__["Literal"]("space", " ");
const spaces = new clarity_pattern_parser__WEBPACK_IMPORTED_MODULE_0__["RepeatValue"]("spaces", space);

/* harmony default export */ __webpack_exports__["default"] = (spaces);


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimelineOption; });
/* harmony import */ var _easings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);


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
      this.easing = _easings_js__WEBPACK_IMPORTED_MODULE_0__["default"][easing];
    }

    if (!Array.isArray(this.controls)) {
      this.controls = [];
    }

    this.easing = this.easing || _easings_js__WEBPACK_IMPORTED_MODULE_0__["default"].linear;

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


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (easings);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TreeNormalizer; });
/* harmony import */ var _Visitor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);


const filterOutSpaces = child => child.name !== "spaces";
const filterOutDividers = child => child.name !== "divider";

class TreeNormalizer {
  constructor() {
    this.removeSpacesVisitor = new _Visitor_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.visitNode);
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


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Visitor; });
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


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TreeUtility; });
/* harmony import */ var _Visitor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);


const visitor = new _Visitor_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

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


/***/ })
/******/ ]);
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectApplyValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _TransitionMediator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);




const useTransition = (
  animatedProperties,
  {
    duration,
    applyValues = _objectApplyValues__WEBPACK_IMPORTED_MODULE_1__["default"],
    ref,
    animate = true,
    onComplete,
    configure,
    initialProperties = null,
  } = {}
) => {
  const transitionMediator = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return new _TransitionMediator__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }, []);

  transitionMediator.setInitialProperties(initialProperties);
  transitionMediator.setDuration(duration);
  transitionMediator.setRenderCallback(applyValues);
  transitionMediator.setShouldAnimate(animate);
  transitionMediator.setOnCompleteCallback(onComplete);
  transitionMediator.setConfigureCallback(configure);

  // Keep refs up to date.
  const callbackRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    return () => {
      transitionMediator.dispose();
    };
  }, [transitionMediator]);

  transitionMediator.updateAnimationProperties(animatedProperties);

  return callbackRef;
};

/* harmony default export */ __webpack_exports__["default"] = (useTransition);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(5);
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(6);
var checkPropTypes = __webpack_require__(7);

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.12.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?


var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be replaced with error codes
// during build.

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }

    if (condition) {
      return;
    }

    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610

      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarningWithoutStack$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;

function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }

    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum(); // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(void 0, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */



/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null; // Currently, key can be spread in as a prop. This causes a potential
  // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
  // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
  // but as an intermediary step, we will use jsxDEV for everything except
  // <div {...props} key="Hi" />, because we aren't currently able to tell if
  // key is explicitly declared to be undefined or not.

  if (maybeKey !== undefined) {
    key = '' + maybeKey;
  }

  if (hasValidKey(config)) {
    key = '' + config.key;
  }

  if (hasValidRef(config)) {
    ref = config.ref;
  } // Remaining properties are added to a new props object


  for (propName in config) {
    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
      props[propName] = config[propName];
    }
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  if (key || ref) {
    var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

    if (key) {
      defineKeyPropWarningGetter(props, displayName);
    }

    if (ref) {
      defineRefPropWarningGetter(props, displayName);
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum);
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error("React.Children.only expected to receive a single React element child.");
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !( // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0; // TODO: add a more generic warning for invalid values.

    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}
function useLayoutEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}
function useCallback(callback, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}
function useMemo(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}
function useImperativeHandle(ref, create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, inputs);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}
var emptyObject$1 = {};
function useResponder(responder, listenerProps) {
  var dispatcher = resolveDispatcher();

  {
    if (responder == null || responder.$$typeof !== REACT_RESPONDER_TYPE) {
      warning$1(false, 'useResponder: invalid first argument. Expected an event responder, but instead got %s', responder);
      return;
    }
  }

  return dispatcher.useResponder(responder, listenerProps || emptyObject$1);
}
function useTransition(config) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useTransition(config);
}
function useDeferredValue(value, config) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useDeferredValue(value, config);
}

function withSuspenseConfig(scope, config) {
  var previousConfig = ReactCurrentBatchConfig.suspense;
  ReactCurrentBatchConfig.suspense = config === undefined ? null : config;

  try {
    scope();
  } finally {
    ReactCurrentBatchConfig.suspense = previousConfig;
  }
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */
var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  var type = element.type;

  if (type === null || type === undefined || typeof type === 'string') {
    return;
  }

  var name = getComponentName(type);
  var propTypes;

  if (typeof type === 'function') {
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
  // Inner props are checked in the reconciler.
  type.$$typeof === REACT_MEMO_TYPE)) {
    propTypes = type.propTypes;
  } else {
    return;
  }

  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }

  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);
  var keys = Object.keys(fragment.props);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(source);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    var children = props.children;

    if (children !== undefined) {
      if (isStaticChildren) {
        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            validateChildKeys(children[i], type);
          }

          if (Object.freeze) {
            Object.freeze(children);
          }
        } else {
          warning$1(false, 'React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
        }
      } else {
        validateChildKeys(children, type);
      }
    }
  }

  if (hasOwnProperty$1.call(props, 'key')) {
    warning$1(false, 'React.jsx: Spreading a key to JSX is a deprecated pattern. ' + 'Explicitly pass a key after spreading props in your JSX call. ' + 'E.g. <ComponentName {...props} key={key} />');
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  return jsxWithValidation(type, props, key, true);
}
function jsxWithValidationDynamic(type, props, key) {
  return jsxWithValidation(type, props, key, false);
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type; // Legacy hook: remove it

  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarningWithoutStack$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

var hasBadMapPolyfill;

{
  hasBadMapPolyfill = false;

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
    // TODO: Consider warning about bad polyfills
    hasBadMapPolyfill = true;
  }
}

function createFundamentalComponent(impl) {
  // We use responder as a Map key later on. When we have a bad
  // polyfill, then we can't use it as a key as the polyfill tries
  // to add a property to the object.
  if ( true && !hasBadMapPolyfill) {
    Object.freeze(impl);
  }

  var fundamantalComponent = {
    $$typeof: REACT_FUNDAMENTAL_TYPE,
    impl: impl
  };

  {
    Object.freeze(fundamantalComponent);
  }

  return fundamantalComponent;
}

function createEventResponder(displayName, responderConfig) {
  var getInitialState = responderConfig.getInitialState,
      onEvent = responderConfig.onEvent,
      onMount = responderConfig.onMount,
      onUnmount = responderConfig.onUnmount,
      onRootEvent = responderConfig.onRootEvent,
      rootEventTypes = responderConfig.rootEventTypes,
      targetEventTypes = responderConfig.targetEventTypes,
      targetPortalPropagation = responderConfig.targetPortalPropagation;
  var eventResponder = {
    $$typeof: REACT_RESPONDER_TYPE,
    displayName: displayName,
    getInitialState: getInitialState || null,
    onEvent: onEvent || null,
    onMount: onMount || null,
    onRootEvent: onRootEvent || null,
    onUnmount: onUnmount || null,
    rootEventTypes: rootEventTypes || null,
    targetEventTypes: targetEventTypes || null,
    targetPortalPropagation: targetPortalPropagation || false
  }; // We use responder as a Map key later on. When we have a bad
  // polyfill, then we can't use it as a key as the polyfill tries
  // to add a property to the object.

  if ( true && !hasBadMapPolyfill) {
    Object.freeze(eventResponder);
  }

  return eventResponder;
}

function createScope() {
  var scopeComponent = {
    $$typeof: REACT_SCOPE_TYPE
  };

  {
    Object.freeze(scopeComponent);
  }

  return scopeComponent;
}

// Helps identify side effects in render-phase lifecycle hooks and setState
// reducers by double invoking them in Strict Mode.

 // To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.

 // Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:

 // Gather advanced timing metrics for Profiler subtrees.

 // Trace which interactions trigger each commit.

 // SSR experiments


 // Only used in www builds.

 // Only used in www builds.

 // Disable javascript: URL strings in href for XSS protection.

 // React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties

 // These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.

var exposeConcurrentModeAPIs = false;
 // Experimental React Flare event system and event components support.

var enableFlareAPI = false; // Experimental Host Component support.

var enableFundamentalAPI = false; // Experimental Scope support.

var enableScopeAPI = false; // New API for JSX transforms to target - https://github.com/reactjs/rfcs/pull/107

var enableJSXTransformAPI = false; // We will enforce mocking scheduler with scheduler/unstable_mock at some point. (v17?)
// Till then, we warn about the missing mock, but still fallback to a legacy mode compatible version

 // For tests, we flush suspense fallbacks in an act scope;
// *except* in some of our own tests, where we test incremental loading states.

 // Add a callback property to suspense to notify which promises are currently
// in the update queue. This allows reporting and tracing of what is causing
// the user to see a loading state.
// Also allows hydration callbacks to fire when a dehydrated boundary gets
// hydrated or deleted.

 // Part of the simplification of React.createElement so we can eventually move
// from React.createElement to React.jsx
// https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md





 // Flag to turn event.target and event.currentTarget in ReactNative from a reactTag to a component instance

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },
  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,
  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,
  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  Fragment: REACT_FRAGMENT_TYPE,
  Profiler: REACT_PROFILER_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,
  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,
  version: ReactVersion,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

if (exposeConcurrentModeAPIs) {
  React.useTransition = useTransition;
  React.useDeferredValue = useDeferredValue;
  React.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
  React.unstable_withSuspenseConfig = withSuspenseConfig;
}

if (enableFlareAPI) {
  React.unstable_useResponder = useResponder;
  React.unstable_createResponder = createEventResponder;
}

if (enableFundamentalAPI) {
  React.unstable_createFundamental = createFundamentalComponent;
}

if (enableScopeAPI) {
  React.unstable_createScope = createScope;
} // Note: some APIs are added with feature flags.
// Make sure that stable builds for open source
// don't modify the React object to avoid deopts.
// Also let's not expose their names in stable builds.


if (enableJSXTransformAPI) {
  {
    React.jsxDEV = jsxWithValidation;
    React.jsx = jsxWithValidationDynamic;
    React.jsxs = jsxWithValidationStatic;
  }
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.


var react = React$3.default || React$3;

module.exports = react;
  })();
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(8);
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const objectApplyValues = (obj, values) => {
  if (obj != null) {
    Object.keys(values).forEach(key => {
      obj[key] = values[key];
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (objectApplyValues);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransitionMediator; });
/* harmony import */ var _easeOut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var motion_ux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var motion_ux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(motion_ux__WEBPACK_IMPORTED_MODULE_1__);



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
    this.timeline = new motion_ux__WEBPACK_IMPORTED_MODULE_1__["Timeline"]({ animations, duration: this.duration });
  }

  createAdjustedTimeline() {
    const animations = this.createAdjustedAnimations();
    this.resetTimeline();
    this.timeline = new motion_ux__WEBPACK_IMPORTED_MODULE_1__["Timeline"]({ animations, duration: this.duration });
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
        easing: _easeOut__WEBPACK_IMPORTED_MODULE_0__["default"][property.easing] || _easeOut__WEBPACK_IMPORTED_MODULE_0__["default"].expo,
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
        easing: _easeOut__WEBPACK_IMPORTED_MODULE_0__["default"][option.easing] || _easeOut__WEBPACK_IMPORTED_MODULE_0__["default"].expo,
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


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bezierCurveEasings", function() { return bezierCurveEasings; });
/* harmony import */ var motion_ux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var motion_ux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(motion_ux__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  quad: motion_ux__WEBPACK_IMPORTED_MODULE_0__["easings"].easeOutQuad,
  cubic: motion_ux__WEBPACK_IMPORTED_MODULE_0__["easings"].easeOutCubic,
  quart: motion_ux__WEBPACK_IMPORTED_MODULE_0__["easings"].easeOutQuart,
  quint: motion_ux__WEBPACK_IMPORTED_MODULE_0__["easings"].easeOutQuint,
  sine: motion_ux__WEBPACK_IMPORTED_MODULE_0__["easings"].easeOutSine,
  expo: motion_ux__WEBPACK_IMPORTED_MODULE_0__["easings"].easeOutExpo,
  circ: motion_ux__WEBPACK_IMPORTED_MODULE_0__["easings"].easeOutCirc,
  elastic: motion_ux__WEBPACK_IMPORTED_MODULE_0__["easings"].easeOutElastic,
  overshoot: motion_ux__WEBPACK_IMPORTED_MODULE_0__["easings"].easeOutBack,
  bounce: motion_ux__WEBPACK_IMPORTED_MODULE_0__["easings"].easeOutBounce,
  linear: motion_ux__WEBPACK_IMPORTED_MODULE_0__["easings"].linear
});

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


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _transformAnimatedProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _useTransition_easeOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);




const useNativeTransition = (
  cssProperties,
  { duration: defaultDuration = 0, ref, onComplete, initialProperties = null }
) => {
  const [node, setNode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const callbackRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(
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
          Object(_transformAnimatedProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(initialProperties);

          Object.keys(initialProperties).forEach(key => {
            const { value } = initialProperties[key];
            node.style[key] = value;
          });
        } else {
          Object(_transformAnimatedProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(cssProperties);

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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (cssProperties != null && node != null) {
      Object(_transformAnimatedProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(cssProperties);

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
            _useTransition_easeOut__WEBPACK_IMPORTED_MODULE_2__["bezierCurveEasings"][easingName] != null
              ? _useTransition_easeOut__WEBPACK_IMPORTED_MODULE_2__["bezierCurveEasings"][easingName]
              : _useTransition_easeOut__WEBPACK_IMPORTED_MODULE_2__["bezierCurveEasings"].expo;
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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

/* harmony default export */ __webpack_exports__["default"] = (useNativeTransition);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (transformAnimatedProperties);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _makeTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _applyStyleValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);



const makeStyledTransition = (states, duration) => {
  return Object(_makeTransition__WEBPACK_IMPORTED_MODULE_0__["default"])(states, duration, _applyStyleValues__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (makeStyledTransition);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


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

    return Object(_useTransition__WEBPACK_IMPORTED_MODULE_0__["default"])(state, {
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

/* harmony default export */ __webpack_exports__["default"] = (makeTransition);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const applyStyleValues = (element, values) => {
  if (element != null && element.style != null) {
    Object.keys(values).forEach(key => {
      element.style[key] = values[key];
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (applyStyleValues);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _makeTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _applyValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);



const makePropertyTransition = (states, duration) => {
  return Object(_makeTransition__WEBPACK_IMPORTED_MODULE_0__["default"])(states, duration, _applyValues__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (makePropertyTransition);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const applyValues = (obj, values) => {
  if (obj != null) {
    Object.keys(values).forEach(key => {
      obj[key] = values[key];
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (applyValues);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _makeTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _applyAttributeValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);



const makeAttributeTransition = (states, duration) => {
  return Object(_makeTransition__WEBPACK_IMPORTED_MODULE_0__["default"])(states, duration, _applyAttributeValues__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (makeAttributeTransition);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const applyAttributeValues = (obj, values) => {
  if (obj != null && typeof obj.setAttribute === "function") {
    Object.keys(values).forEach(key => {
      obj.setAttribute(key, values[key]);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (applyAttributeValues);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useNativeTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


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

    return Object(_useNativeTransition__WEBPACK_IMPORTED_MODULE_0__["default"])(cssProperties, {
      duration,
      initialProperties,
      ...rest
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (makeNativeTransition);


/***/ })
/******/ ]);
});