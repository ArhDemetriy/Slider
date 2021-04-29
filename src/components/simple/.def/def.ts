import { Destructible } from 'baseType'

class Def implements Destructible {
  destroy() {
    this.mainElement.removeEventListener('click', this.bindedEventListener)
  }
  protected readonly mainElement: HTMLElement

  private readonly bindedEventListener = this.eventListener.bind(this)

  constructor(mainElement: HTMLElement, mainClass: string = 'def') {
    this.mainElement = mainElement

    this.addEventsListeners()
  }
  private eventListener(event: MouseEvent) {
  }
  protected addEventsListeners() {
    this.mainElement.addEventListener('click', this.bindedEventListener, { passive: true })
  }
}

export {
  Def,
}
