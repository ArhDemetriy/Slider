import { Destructible } from '../../type'

class Demo implements Destructible {
  protected readonly mainElement: HTMLElement
  protected readonly controls: HTMLDivElement
  protected readonly slider: HTMLElement

  protected readonly destructible: Destructible[] = []

  private readonly bindedEventListener = this.eventListener.bind(this);
  constructor(mainElement: HTMLElement, mainClass: string = 'demo') {
    this.mainElement = mainElement
    this.controls = mainElement.querySelector(`.${mainClass}__controls`)
    this.slider = mainElement.querySelector(`.${mainClass}__slider`)

    this.initComponents()
  }
  protected initComponents() {

  }
  private eventListener(event: MouseEvent) {
  }
  protected addEventsListeners() {
  }
  destroy() {

    this.destructible.forEach(elem => elem.destroy())
  }
}

export {
  Demo,
}
