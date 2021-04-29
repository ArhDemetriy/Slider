import { Destructible } from '../../type'

class Slider implements Destructible {
  moveRight() {
    this.moveBar(5)
  }
  moveLeft() {
    this.moveBar(-5)
  }

  protected readonly mainElement: HTMLElement
  protected readonly bar: HTMLDivElement

  protected readonly destructible: Destructible[] = []

  private _barPosition = 0
  protected get barPosition() {
    return this._barPosition
  }
  protected set barPosition(x) {
    this._barPosition = x
    this.mainElement.style.setProperty('--barPosition', this._barPosition.toString())
  }
  protected readonly bindedMouseDown = this.mouseDown.bind(this)
  constructor(mainElement: HTMLElement, mainClass: string = 'slider') {
    this.mainElement = mainElement
    this.bar = this.mainElement.querySelector(`.${mainClass}__bar`)
    this.initComponents()
    this.addEventsListeners()
  }
  protected initComponents() {
    this.mainElement.style.setProperty('--barPosition', this.barPosition.toString())
  }
  protected addEventsListeners() {
    this.mainElement.addEventListener('mousedown', this.bindedMouseDown, { passive: true })
  }
  protected moveBar(x: number) {
    this.barPosition += x
  }
  destroy() {
    this.mainElement.removeEventListener('mousedown', this.bindedMouseDown)
    this.destructible.forEach(elem => elem.destroy())
  }

  protected mouseDown(ev: MouseEvent) {
    console.log('***********');
    const local = ev.offsetX
    console.log(local);
    const w = window.getComputedStyle(this.mainElement).width
    console.log(w);
    console.log($(this.mainElement).css('--barPosition'));






  }
}

export {
  Slider,
}
