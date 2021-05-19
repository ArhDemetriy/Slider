import { Destructible } from "baseType";
import { ClassHTMLElementBase, ClassHTMLElementBaseSettings } from "HTMLElementBase";
import { View, ViewSettings } from "./View";
import { Bars, BarsSettings } from "./bars/Bars";
import { Row, RowSettings } from "./row/Row";
import { Scale } from "./scale/Scale";

interface View2Settings<T> extends ClassHTMLElementBaseSettings<HTMLDivElement>{
  readonly mainElement: HTMLDivElement
  readonly min: T
  readonly max: T
  readonly initPositions: [number, number]
  readonly step: T
  readonly promoPoints?: T[]
}
class View2<T> extends ClassHTMLElementBase<HTMLDivElement> implements Destructible{
  constructor(
    protected readonly s: View2Settings<T>,
    protected readonly setters: [
                                  ((requestedPercent: number) => number),
                                  ((requestedPercent: number) => number)
                                ]
  ) {
    super(s)
    this.init()
  }
  // public
  destroy() { }
  // values
  protected bars: Bars
  protected barsSettings: BarsSettings

  protected scale: Scale
  protected row: Row
  // methods
  // init methods
  protected init() {
    this.row = new Row(this.s)
    this.barsSettings = Object.assign({}, this.s, { rowElement: this.row.getRowElement() })
    this.bars = new Bars(this.barsSettings)
  }

}

export { View2, View2Settings }
