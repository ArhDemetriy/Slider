import { Destructible } from 'baseType'

class Def implements Destructible {
  destroy() {
    this.mainElement.removeEventListener('click', this.bindedEventListener)
    this.destructible.forEach(elem => elem.destroy())
  }
  protected readonly mainElement: HTMLElement

  private readonly bindedEventListener = this.eventListener.bind(this)

  protected readonly destructible: Destructible[] = []

  constructor(mainElement: HTMLElement, mainClass: string = 'def') {
    this.mainElement = mainElement

    this.initComponents()
    this.addEventsListeners()
  }
  protected initComponents() {
    this.destructible.push()
  }
  private eventListener(event: MouseEvent) {
  }
  protected addEventsListeners() {
    this.mainElement.addEventListener('click', this.bindedEventListener)
  }
}

export {
  Def,
}
