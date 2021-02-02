import { ObservableValue } from "../utils/mediator/ObservableValue";
import { AsyncActionRunner } from "../utils/mediator/AsyncActionRunner";

export class View {
  name = new ObservableValue<string | null>(null);
  Component = new AsyncActionRunner<React.FunctionComponent | null>(null);
  viewPath = new ObservableValue<string | null>(null);
  width = new ObservableValue<number>(0);
  height = new ObservableValue<number>(0);
  top = new ObservableValue<number>(0);
  left = new ObservableValue<number>(0);
  scale = new ObservableValue<number>(1);
  rotationX = new ObservableValue<number>(0);
  rotationY = new ObservableValue<number>(0);
  rotationZ = new ObservableValue<number>(0);
  hidden = new ObservableValue<boolean>(true);

  load(viewPath: string) {
    if (this.viewPath == null){

    }
    
    
  }

  dispose(){
    this.name.dispose();
    this.Component.dispose();
    this.viewPath.dispose();
    this.width.dispose();
    this.height.dispose();
    this.top.dispose();
    this.left.dispose();
    this.scale.dispose();
    this.rotationX.dispose();
    this.rotationY.dispose();
    this.rotationZ.dispose();
    this.hidden.dispose();
  }
}