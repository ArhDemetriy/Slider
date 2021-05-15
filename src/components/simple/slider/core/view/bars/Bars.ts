import { HTMLElementBase, HTMLElementBaseSettings } from "../HTMLElementBase";

interface BarsSettings<T> extends HTMLElementBaseSettings<HTMLDivElement> {

}
class Bars<T> extends HTMLElementBase<HTMLDivElement>{
  constructor(settings: BarsSettings<T>) {
    super(settings)
  }
}
export {
  Bars,
  BarsSettings,
}
