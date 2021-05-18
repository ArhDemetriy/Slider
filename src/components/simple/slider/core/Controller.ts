import { XOR } from "baseType";
import { HTMLElementBaseSettings } from "./view/HTMLElementBase";
import { Model, ModelSettings } from "./model/Model";
import { Model2, Model2Settings } from "./model/Model2";
import { View, ViewSettings } from "./view/View";
import { View2, View2Settings } from "./view/View2";

interface ControllerSettings<Count extends (1 | 2), T extends number> extends HTMLElementBaseSettings<HTMLDivElement> {
  min: T
  max: T
  count: 2
  initPositions: [T, T]
  step: T
  readonly promoPoints?: T[]
}

class Controller<Count extends 2, T extends number = number> {
  constructor(settings: ControllerSettings<Count, T>) {
    this.s = settings
    this.initModel()
    this.modelSetters = this.model.getSetters()
    this.initView()
  }
  // public
  public getStartPosition() {
  }
  public getPositions() {
    return [this.getStartPosition()]
  }
  public getEndPosition() {
  }
  // values
  protected readonly s: ControllerSettings<Count, T>
  protected model: Model2<T>
  protected readonly modelSetters: ReturnType<Model2<T>['getSetters']>
  protected view: View2<T>
  // methods

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
  private initModel() {
    this.model = new Model2(this.s)
    this.s.initPositions = this.model.getPositions()
  }
  private initView() {
    // this.view = new View(this.s)
  }


}

export {
  Controller,
  ControllerSettings,
}
