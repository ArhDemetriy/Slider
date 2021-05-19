import { Destructible } from "baseType";
import { HTMLElementBase, HTMLElementBaseSettings } from "./HTMLElementBase";
import { View, ViewSettings } from "./View";
import { Bars, BarsSettings } from "./bars/Bars";
import { Row, RowSettings } from "./row/Row";
import { Scale } from "./scale/Scale";

interface View2Settings<T> extends HTMLElementBaseSettings<HTMLDivElement>{
  readonly mainElement: HTMLDivElement
  readonly min: T
  readonly max: T
  readonly initPositions: [T,T]
  readonly step: T
  readonly promoPoints?: T[]
}
class View2<T> extends HTMLElementBase<HTMLDivElement> implements Destructible{
  constructor(
    protected readonly s: View2Settings<T>,
    protected readonly setters: [((requestedPercent: number) => number), ((requestedPercent: number) => number)]
  ) {
    super(s)
    this.init()
  }
  // public
  destroy() { }
  // values
  protected bars: Bars<T>
  protected scale: Scale
  protected row: Row
  // methods
  // init methods
  protected init() {
    this.row = new Row(this.s)
  }

}

export { View2, View2Settings }
