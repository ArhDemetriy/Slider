import { Destructible } from "baseType";
import { ClassHTMLElementBase, ClassHTMLElementBaseSettings } from "HTMLElementBase";
interface RowSettings extends ClassHTMLElementBaseSettings<HTMLDivElement> {
}
class Row extends ClassHTMLElementBase<HTMLDivElement> {
  constructor(settings: RowSettings) {
    super(settings)
    this.row = document.createElement('div')
    this.init()
  }
  // public
  getRowElement() {
    return this.row
  }
  // values
  protected readonly row: HTMLDivElement
  // methods
  // init methods
  protected init() {
    this.row.classList.add(`${this.mainClass}__row`)
    this.mainElement.appendChild(this.row)
  }
}
export {
  Row,
  RowSettings,
}
