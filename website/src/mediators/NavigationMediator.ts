import { ObservableValue } from "../utils/mediator/ObservableValue";

interface IViewport {
  width: number;
  height: number;
}

export class NavigationMediator {
  viewport = new ObservableValue<IViewport>({ width: 500, height: 500 });

  exampleViews = new ObservableValue([]);
  documentationViews = new ObservableValue([]);

  loadDocumentation;

  dispose() {}
}
