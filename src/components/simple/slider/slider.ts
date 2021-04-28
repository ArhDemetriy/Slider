import { Destructible } from '../../type'

class Slider implements Destructible {
  moveRight() {
    this.moveBar(5)
  }
  moveLeft() {
    this.moveBar(-5)
  }


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
  protected moveBar(x: number) {

    const barPosition = this.mainElement.style.getPropertyValue('--barPosition')
    console.log(barPosition);

  }
  destroy() {
    this.mainElement.removeEventListener('click',this.bindedEventListener)

    this.destructible.forEach(elem => elem.destroy())
  }
}

export {
  Slider,
}
