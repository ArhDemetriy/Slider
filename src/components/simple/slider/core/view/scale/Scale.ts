import { Destructible } from "baseType";

import { HTMLElementBase } from "../HTMLElementBase";
class Scale extends HTMLElementBase<HTMLDivElement> implements Destructible{
  constructor(settings: { [k in string]: any }) {
    super(settings.mainElement)
  }
  updateSettings(){}
  destroy(){}
  protected generateMarks() { }
  protected mainElement: HTMLDivElement
  protected marks
  protected promoPoints: any[]
  protected min
  protected max
  protected step
  protected hiddenMarks: HTMLDivElement[]
}
export {
  Scale
}
