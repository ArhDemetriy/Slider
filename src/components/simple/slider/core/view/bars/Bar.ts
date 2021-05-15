import { Destructible } from "baseType";
import { HTMLElementBase, HTMLElementBaseSettings } from "../HTMLElementBase";
interface BarSettings<T> extends HTMLElementBaseSettings<HTMLDivElement> {

}
class Bar<T> extends HTMLElementBase<HTMLDivElement> implements Destructible{
  constructor(settings: BarSettings<T>) {
    super(settings)
  }
  destroy(){}
}
export {
  Bar,
  BarSettings,
}
