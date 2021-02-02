import { Subject, Observer } from 'rxjs';

export class ObservableValue<T, TInitial = T, TError = any> {
  readonly valueSubject = new Subject<T>();
  private _value: T | TInitial;

  readonly errorSubject = new Subject<TError | null>();
  private _error: TError | null = null;

  private readonly _observer = {
    next: (value: T) => this.setValue(value),
    error: (error: TError | null) => this.setError(error),
    complete: () => {},
  };

  constructor(initialState: T | TInitial) {
    this._value = initialState;
  }

  next(value: T) {
    this._value = value;
    return this.valueSubject.next(value);
  }

  getValue() {
    return this._value;
  }

  setValue(value: T) {
    return this.next(value);
  }

  setError(e: TError | null) {
    this._error = e;
    this.errorSubject.next(e);
  }

  getError() {
    return this._error;
  }

  onError(callback: (e: TError | null) => void) {
    return this.errorSubject.subscribe({ next: callback });
  }

  onChange(callback: (value: T) => void) {
    return this.valueSubject.subscribe({ next: callback });
  }

  /**
   * ADVANCED FEATURE
   * Use this when piping values to an `ObservableValue` like:
   *
   * ```ts
   * getUserRunner = new AsyncActionRunner<User, null>(null);
   * userName = new ObservableValue<string, null>(null);
   *
   * constructor() {
   *    this.getUserRunner.valueSubject
   *      .pipe(map(user => user.name))
   *      .subscribe(this.userName.getObserver());  <----- You can pipe values to another ObservableValue.
   * }
   * ```
   */
  getObserver(): Observer<T> {
    return this._observer;
  }

  dispose() {
    this.valueSubject.complete();
    this.errorSubject.complete();
  }
}

export default ObservableValue;
