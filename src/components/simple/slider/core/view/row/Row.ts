import { Destructible } from "baseType";
import { HTMLElementBase, HTMLElementBaseSettings } from "../HTMLElementBase";
interface RowSettings extends HTMLElementBaseSettings<HTMLDivElement> {
}
class Row extends HTMLElementBase<HTMLDivElement> {
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
