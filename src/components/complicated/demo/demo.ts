import { Destructible } from 'baseType'
import { Slider } from "simp/slider/slider";

class Demo implements Destructible {
  protected readonly mainElement: HTMLElement
  protected readonly controls: HTMLDivElement
  protected readonly leftButton: HTMLButtonElement
  protected readonly rightButton: HTMLButtonElement

  protected readonly sliderElement: HTMLElement
  protected readonly slider: Slider
  protected readonly destructible: Destructible[] = []

  private readonly bindedMoveLeftEvent = this.moveLeftEvent.bind(this);
  private readonly bindedMoveRightEvent = this.moveRightEvent.bind(this);
  constructor(mainElement: HTMLElement, mainClass: string = 'demo') {
    this.mainElement = mainElement

    this.controls = mainElement.querySelector(`.${mainClass}__controls`)
    this.leftButton = this.controls.querySelector(`.${mainClass}__left_button`)
    this.rightButton = this.controls.querySelector(`.${mainClass}__right_button`)

    this.sliderElement = mainElement.querySelector(`.${mainClass}__slider`)
    this.slider = new Slider(this.sliderElement)

    this.initComponents()
    this.addEventsListeners()
  }
  protected initComponents() {
    this.destructible.push(this.slider)
  }

  private moveLeftEvent(event: MouseEvent) {
    this.slider.moveLeft()
  }
  private moveRightEvent(event: MouseEvent) {
    this.slider.moveRight()
  }

  protected addEventsListeners() {
    this.leftButton.addEventListener('click',this.bindedMoveLeftEvent, { passive: true })
    this.rightButton.addEventListener('click',this.bindedMoveRightEvent, { passive: true })
  }
  destroy() {
    this.leftButton.removeEventListener('click',this.bindedMoveLeftEvent)
    this.rightButton.removeEventListener('click',this.bindedMoveRightEvent)
    this.destructible.forEach(elem => elem.destroy())
  }
}

export {
  Demo,
}
