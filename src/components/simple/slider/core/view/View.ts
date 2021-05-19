import { Destructible } from "baseType";
import { HTMLElementBase, HTMLElementBaseSettings } from "../HTMLElementBase";
import { Bar } from "./bars/Bar";
import { Scale } from "./scale/Scale";
interface ViewSettings<T> extends HTMLElementBaseSettings<HTMLDivElement> {
  min: T
  max: T
  step?: T
  promoPoints?: T
  barsInitPosition?: T
}
class View<T> extends HTMLElementBase<HTMLDivElement> implements Destructible{
  constructor(settings: ViewSettings<T>) {
    super(settings)
  }
  destroy() {
    this.scale.destroy()
  }
  protected bar: Bar
  protected scale: Scale
}

export { View, ViewSettings }
