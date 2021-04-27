import { Destructible } from 'components/type'

class Index implements Destructible {
  protected readonly mainElement: HTMLElement
  protected readonly addButton: HTMLButtonElement
  protected readonly template: HTMLTemplateElement
  protected readonly listDemos: HTMLDivElement

  private readonly bindedAddNewDemo = this.addNewDemo.bind(this);
  constructor(mainElement: HTMLElement, mainClass: string = 'index') {
    this.mainElement = mainElement
    this.addButton = mainElement.querySelector(`.${mainClass}__button--add_template`)
    this.template = mainElement.querySelector(`.${mainClass}__template`)
    this.listDemos = mainElement.querySelector(`.${mainClass}__list_demo`)

    this.addEventsListeners()
  }
  private addNewDemo(event: MouseEvent) {
    const clone = document.importNode(this.template.content, true)
    const nevSlider = clone.querySelector<HTMLDivElement>('.slider')

    this.listDemos.appendChild(clone)
  }
  protected addEventsListeners() {
    this.addButton.addEventListener('click', this.bindedAddNewDemo)
  }
  destroy() {
    this.addButton.removeEventListener('click', this.bindedAddNewDemo)
  }
}

export {
  Index,
}
