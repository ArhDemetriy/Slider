import { Destructible } from "baseType";
import { HTMLElementBase, HTMLElementBaseSettings } from "./HTMLElementBase";
import { View, ViewSettings } from "./View";
import { Bars } from "./bars/Bars";
import { Scale } from "./scale/Scale";

interface View2Settings<T> extends HTMLElementBaseSettings<HTMLDivElement>{
  mainElement: HTMLDivElement
  min: T
  max: T
  initPosition: [T,T]
  step: T
  readonly promoPoints?: T[]
}
class View2<T> extends HTMLElementBase<HTMLDivElement> implements Destructible{
  constructor(
    protected s: View2Settings<T>,
    protected setters: [((x: number) => number), ((x: number) => number)]
  ) {
    super(s)
  }
  destroy() {  }
  protected bars: Bars<T>
  protected scale: Scale
}

export { View2, View2Settings }
