import { HTMLElementBase, HTMLElementBaseSettings } from "HTMLElementBase";
interface BarSettings extends HTMLElementBaseSettings<HTMLDivElement> {
  cssVar: string
}
class Bar extends HTMLElementBase<HTMLDivElement>{
  constructor(settings: BarSettings) {
    super(settings)
    this.cssVar = settings.cssVar
  }
  // public
  get position() {
    return this._position
  }
  set position(v) {
    this._position = v
    this.mainElement.style.setProperty(this.cssVar, this._position.toString())
  }
  // values
  private _position: number
  private readonly cssVar: string
  // methods
  // init methods
}

export {
  Bar,
  BarSettings,
}
