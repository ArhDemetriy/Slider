import { XOR } from "baseType";
import { Model, ModelSettings } from "./model/Model";
import { Model2, Model2Settings } from "./model/Model2";
import { View, ViewSettings } from "./view/View";

type ControllerSettings<Count extends (1 | 2), T extends number | string> = {
  min: T
  max: T
  promoPoints?: T[]
} & Count extends 1
  ? {
    count?: 1
    initPositions?: [T]
  } : {
    count?: 2
    initPositions?: [T, T?]
  }
  // Count extends 1 ? Model : Model2
class Controller<Count extends (1 | 2), T extends number | string = number> {
  constructor(settings: ControllerSettings<Count, T>) {
  }
  public getStartPosition() {
  }
  public getPositions() {
    return [this.getStartPosition()]
  }
  public getEndPosition(): Count extends 1 ? Error : T {
    throw new TypeError('')
  }
  protected model: Count extends 1 ? Model<T> : Model2<T>
  protected view: Count extends 1 ? View<T> : View<T>
  protected initOneBar() { }
  protected initTwoBar() { }
}

export {
  Controller,
  ControllerSettings,
}
