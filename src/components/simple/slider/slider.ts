import { Destructible } from '../../type'

class Slider implements Destructible {
  protected readonly mainElement: HTMLElement

  protected readonly destructible: Destructible[] = []
  private iterator = 0

  private readonly bindedEventListener = this.eventListener.bind(this);
  constructor(mainElement: HTMLElement, mainClass: string = 'slider') {
    this.mainElement = mainElement

    this.initComponents()
    this.addEventsListeners()
  }
  protected initComponents() {

  }
  private eventListener(event: MouseEvent) {
    alert(this.iterator++)
  }
  protected addEventsListeners() {
    this.mainElement.addEventListener('click',this.bindedEventListener)
  }
  destroy() {
    this.mainElement.removeEventListener('click',this.bindedEventListener)

    this.destructible.forEach(elem => elem.destroy())
  }
}

export {
  Slider,
}
