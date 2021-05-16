import { View, ViewSettings } from "./View";
import { Bars } from "./bars/Bars";
import { Scale } from "./scale/Scale";

interface View2Settings<T> extends ViewSettings<T>{
  mainElement: HTMLDivElement
  min: T
  max: T
  step?: T
  promoPoints?: T
  barsInitPosition?: T
}
class View2<T> extends View<T> {
  constructor(settings: View2Settings<T>) {
    super(settings)
  }
  destroy() {  }
  protected bars: Bars<T>
  protected scale: Scale
}

export { View2, View2Settings }
