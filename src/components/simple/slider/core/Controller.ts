import { Model, ModelSettings } from "./model/Model";
import { Model2, Model2Settings } from "./model/Model2";
import { View, ViewSettings } from "./view/View";
type XOR<T1 extends { [k in string]: any }, T2 extends { [k in string]: any }> =
  | ({ [k in keyof T1]: T1[k] } & { [k in Exclude<(keyof T2), (keyof T1)>]?: never })
  | ({ [k in keyof T2]: T2[k] } & { [k in Exclude<(keyof T1), (keyof T2)>]?: never });

type TMark = number | string
type oneBar<T> = { initPositions: [T, never], quantityBars?: 1 } | { initPositions?: [T, never], quantityBars: 1 }
type twoBar<T> = { initPositions: [T, T], quantityBars?: 2 } | { initPositions?: [T, T], quantityBars: 2 }
type ControllerSettings<T> = {
  min: T
  max: T
  quantityBars?: 1 | 2
  initPositions?: [T] | [T, T]
  promoPoints?: T[]
}

class Controller<T extends TMark = number> {
  private readonly quantityBars: 1 | 2
  constructor(settings: ControllerSettings<T>) {
    settings.initPositions = settings.initPositions || [settings.min]
    settings.initPositions[0] = settings.initPositions[0] || settings.min
    if (settings.quantityBars == 2) {
      settings.initPositions[1] = settings.initPositions[1] || settings.max
    }
    this.quantityBars = settings.quantityBars || settings.initPositions.length
  }
  public getStartPosition() {

  }
  public getPositions() {
    return [this.getStartPosition()]
  }
  public getEndPosition(){

  }
  protected model: Model<T> | Model2<T>
  protected view: View<T>
  protected initOneBar() { }
  protected initTwoBar() { }
}

export { Controller, ControllerSettings, TMark }
