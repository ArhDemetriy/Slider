import { Destructible } from 'baseType'
import { Demo } from "comp/demo/demo";

class DemosManager implements Destructible {
  protected readonly mainElement: HTMLElement
  protected readonly addButton: HTMLButtonElement
  protected readonly template: HTMLTemplateElement
  protected readonly listDemos: HTMLDivElement

  protected readonly destructible: Destructible[] = []

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
    this.destructible.push(new Demo(clone as unknown as HTMLDivElement))
    this.listDemos.appendChild(clone)
  }
  protected addEventsListeners() {
    this.addButton.addEventListener('click', this.bindedAddNewDemo)
  }
  destroy() {
    this.addButton.removeEventListener('click', this.bindedAddNewDemo)

    this.destructible.forEach(elem => elem.destroy())
  }
}

export {
  DemosManager,
}
