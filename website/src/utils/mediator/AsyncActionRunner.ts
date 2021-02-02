import ObservableValue from './ObservableValue';
import { AsyncAction, CancelledError } from './AsyncAction';

export enum Status {
  INITIAL = 'initial',
  PENDING = 'pending',
  ERROR = 'error',
  SUCCESS = 'success',
  DISABLED = 'disabled',
}

export class AsyncActionRunner<
  TResult,
  TInitial = TResult,
  TError = any
> extends ObservableValue<TResult, TInitial, TError> {
  private _internalState: State<TResult, TInitial, TError> = new InitialState<
    TResult,
    TInitial,
    TError
  >(this);

  readonly status = new ObservableValue<Status>(Status.INITIAL);
  action: AsyncAction<TResult> | null;

  changeState(state: State<TResult, TInitial, TError>) {
    this._internalState = state;
    this.status.next(state.getName());
  }

  disable() {
    return this._internalState.disable();
  }

  enable() {
    return this._internalState.enable();
  }

  execute(action: AsyncAction<TResult>) {
    return this._internalState.execute(action);
  }

  cancel() {
    return this._internalState.cancel();
  }

  retry() {
    return this._internalState.retry();
  }

  reset() {
    this._internalState.cancel();
    this.setError(null);
    this.changeState(new InitialState<TResult, TInitial, TError>(this));
  }

  dispose() {
    super.dispose();
    this.status.dispose();
  }
}

abstract class State<TResult, TInitial, TError> {
  protected context: AsyncActionRunner<TResult, TInitial, TError>;

  constructor(context: AsyncActionRunner<TResult, TInitial, TError>) {
    this.context = context;
  }

  abstract getName(): Status;

  enable() {
    // Do Nothing.
  }

  disable() {
    // Do Nothing.
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  execute(action: AsyncAction<TResult>): Promise<TResult> {
    // disabled linter per defining an interface that needs to be followed on other states
    // Throw because this should never be hit.
    return Promise.reject(new Error('Not Yet Implmented'));
  }

  retry() {
    // Do nothing
  }

  cancel() {
    // Do nothing.
  }
}

class InitialState<TResult, TInitial, TError> extends State<TResult, TInitial, TError> {
  getName() {
    return Status.INITIAL;
  }

  disable() {
    this.context.changeState(new DisabledState<TResult, TInitial, TError>(this.context));
  }

  execute(action: AsyncAction<TResult>) {
    this.context.action = action;

    const pendingState = new PendingState<TResult, TInitial, TError>(this.context);
    this.context.changeState(pendingState);

    return pendingState.executingPromise;
  }
}

class PendingState<TResult, TInitial, TError> extends State<TResult, TInitial, TError> {
  private isEnabled = true;
  readonly executingPromise: Promise<TResult>;

  constructor(context: AsyncActionRunner<TResult, TInitial, TError>) {
    super(context);
    const action = this.context.action;

    if (action == null) {
      throw new Error(
        'Cannot switch to pending state without an action set to the context.'
      );
    }

    this.executingPromise = action
      .execute()
      .then((nextValue: TResult) => {
        this.context.next(nextValue);
        this.context.changeState(
          new SuccessState<TResult, TInitial, TError>(this.context)
        );
        return nextValue;
      })
      .catch((error: TError) => {
        if (!(error instanceof CancelledError)) {
          this.context.setError(error);
          this.context.changeState(
            new ErrorState<TResult, TInitial, TError>(this.context)
          );
        }

        throw error;
      })
      .finally(() => {
        if (!this.isEnabled) {
          this.context.changeState(
            new DisabledState<TResult, TInitial, TError>(this.context)
          );
        }
      });
  }

  cancel() {
    this.context.action?.cancelExecution();
  }

  disable() {
    this.isEnabled = false;
  }

  enable() {
    this.isEnabled = true;
  }

  execute() {
    return this.executingPromise;
  }

  getName() {
    return Status.PENDING;
  }
}

class SuccessState<TResult, TInitial, TError> extends State<TResult, TInitial, TError> {
  getName() {
    return Status.SUCCESS;
  }

  execute(action: AsyncAction<TResult>) {
    this.context.action = action;

    const pendingState = new PendingState<TResult, TInitial, TError>(this.context);
    this.context.changeState(pendingState);

    return pendingState.executingPromise;
  }

  disable() {
    this.context.changeState(new DisabledState<TResult, TInitial, TError>(this.context));
  }
}

class ErrorState<TResult, TInitial, TError> extends State<TResult, TInitial, TError> {
  retry() {
    const pendingState = new PendingState<TResult, TInitial, TError>(this.context);
    this.context.changeState(pendingState);
  }

  getName() {
    return Status.ERROR;
  }

  execute(action: AsyncAction<TResult>) {
    this.context.action = action;

    const pendingState = new PendingState<TResult, TInitial, TError>(this.context);
    this.context.changeState(pendingState);

    return pendingState.executingPromise;
  }

  disable() {
    this.context.changeState(new DisabledState<TResult, TInitial, TError>(this.context));
  }
}

class DisabledState<TResult, TInitial, TError> extends State<TResult, TInitial, TError> {
  execute() {
    return Promise.reject(new Error('Cannot execute while runner is disabled.'));
  }

  getName() {
    return Status.DISABLED;
  }

  enable() {
    this.context.changeState(new InitialState(this.context));
  }
}
