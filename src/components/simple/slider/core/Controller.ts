import { Model, ModelSettings } from "./model/Model";
import { Model2, Model2Settings } from "./model/Model2";
import { View, ViewSettings } from "./view/View";
type TMark = number | string
interface ControllerSettings<T>{

}
class Controller<T extends TMark = number> {
  constructor(settings: ControllerSettings<T>) {
  }
  protected model: Model<T> | Model2<T>
  protected view: View<T>
}

export { Controller, ControllerSettings, TMark }
