import { XOR } from "baseType";
import { Model, ModelSettings } from "./model/Model";
import { Model2, Model2Settings } from "./model/Model2";
import { View, ViewSettings } from "./view/View";

type ControllerSettings<Count extends (1 | 2), T extends number> = {
  min: T
  max: T
  count: Count extends 1 ? 1 : 2
  initPositions: Count extends 1 ? [T] : [T, T]
  promoPoints?: T[]
}

class Controller<Count extends (1 | 2), T extends number = number> {
  constructor(settings: ControllerSettings<Count, T>) {
    this.s = settings
    this.init()
  }
  // public
  public getStartPosition() {
  }
  public getPositions() {
    return [this.getStartPosition()]
  }
  public getEndPosition(): Count extends 1 ? Error : T {
    throw new TypeError('')
  }
  // values
  protected readonly s: ControllerSettings<Count, T>
  protected model: Count extends 1 ? Model<T> : Model2<T>
  protected view: Count extends 1 ? View<T> : View<T>
  // methods
  private initOneBar(this: Controller<1, T>) {
    this.model = new Model(this.s)
   }
  private initTwoBar(this: Controller<2, T>) { }

  // преобразование позиции между форматами модели и вью. в модели T, а во вью нормированная к 1
  protected normalization(value: T): number{
    if (this.s.max !== this.s.min) {
      return value/(this.s.max - this.s.min)
    } else {
      return value/(this.s.max || this.s.min || 1)
    }
  }
  protected undoNormalization(value: number): T{
    // в данной версии контроллера T === number
    if (this.s.max !== this.s.min) {
      return this.s.min + value * (this.s.max - this.s.min) as T
    } else {
      return value * (this.s.max || this.s.min || 1) as T
    }
  }

  // init methods
  static getFixedSettings<Count extends (1 | 2), T extends number = number>(settings: Partial<ControllerSettings<Count, T>>) {
    const requiredSettings: ControllerSettings<Count, T> = Object.assign(
      getMin(settings),
      getMax(settings),
      getCount(settings),
      getInitPositions(settings),
      getPromoPoints(settings),
    )

    function getMin(settings: Partial<ControllerSettings<Count, T>>): { min: ControllerSettings<Count, T>['min'] }{
      let min: ControllerSettings<Count, T>['min']
      if (settings.min || (typeof settings.min != 'undefined')) {
        min = settings.min
      } else if (settings.initPositions) {
        min = settings.initPositions[0]
      } else if (settings.promoPoints) {
        min = settings.promoPoints[0]
      } else if (settings.max || (typeof settings.max != 'undefined')) {
        min = settings.max
      } else {
        throw new Error("the slider setting gotta include min")
      }
      return { min }
    }
    function getMax(settings: Partial<ControllerSettings<Count, T>>): { max: ControllerSettings<Count, T>['max'] } {
      let max: ControllerSettings<Count, T>['max']
      if (settings.max || (typeof settings.max != 'undefined')) {
        max = settings.max
      } else if (settings.initPositions && settings.initPositions.length > 1) {
        max = settings.initPositions[1]
      } else if (settings.promoPoints) {
        max = settings.promoPoints[0]
      } else if (settings.min || (typeof settings.min != 'undefined')) {
        max = settings.min
      } else {
        throw new Error("the slider setting gotta include max")
      }
      return { max }
    }
    function getCount(settings: Partial<ControllerSettings<Count, T>>): { count: ControllerSettings<Count, T>['count'] } {
      let count: ControllerSettings<Count, T>['count']
      return { count }
    }
    function getInitPositions(settings: Partial<ControllerSettings<Count, T>>): { initPositions: ControllerSettings<Count, T>['initPositions'] } {
      let initPositions: ControllerSettings<Count, T>['initPositions']
      return { initPositions }
    }
    function getPromoPoints(settings: Partial<ControllerSettings<Count, T>>): { promoPoints: ControllerSettings<Count, T>['promoPoints'] } {
      let promoPoints: ControllerSettings<Count, T>['promoPoints']
      promoPoints = settings.promoPoints
      return { promoPoints }
    }

    return requiredSettings
  }
  private init() {
    if (this.s.count == 1) {
      (this as Controller<1, T>).initOneBar()
    } else if (this.s.count == 2) {
      (this as Controller<2, T>).initTwoBar()
    } else {
      throw new Error("the slider settings.count must == 1 or 2")
    }
  }
}

export {
  Controller,
  ControllerSettings,
}
