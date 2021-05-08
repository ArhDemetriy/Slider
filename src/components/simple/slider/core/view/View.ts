import { Bars } from "./bars/Bar";
import { Scale } from "./scale/Scale";
interface ViewSettings<T>{
  mainElement: HTMLDivElement
  min: T
  max: T
  step?: T
  promoPoints?: T
  barsInitPosition?: T
}
class View<T> {
  constructor(settings: ViewSettings<T>) {
  }
  protected bars: Bars
  protected scale: Scale
}

export { View, ViewSettings }
