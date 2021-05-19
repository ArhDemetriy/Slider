import { HTMLElementBase, HTMLElementBaseSettings } from "HTMLElementBase";
import { Bar, BarSettings } from "./Bar";

interface BarsSettings extends HTMLElementBaseSettings<HTMLDivElement> {
  readonly rowElement: HTMLDivElement
  readonly initPositions: [number, number]
}
class Bars {
  constructor(settings: BarsSettings) {
    this.s = settings
    this.bars = this.getBars()
    this.init()
  }
  // public
  // values
  protected readonly s: BarsSettings
  protected readonly bars: [Bar, Bar]

  // methods
  // init methods
  private getBars(): [Bar, Bar] {
    return [
      new Bar({ cssVar: `--startBar`, mainElement: this.s.mainElement }),
      new Bar({ cssVar: `--endBar`, mainElement: this.s.mainElement })
    ]
  }
  private init() {
    this.bars[0]
  }
}
export {
  Bars,
  BarsSettings,
}
