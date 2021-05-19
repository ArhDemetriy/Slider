type HTMLElementBaseSettings<T extends HTMLElement> = {
  readonly mainElement: T
  readonly mainClass: string
}
class HTMLElementBase<T extends HTMLElement>{
  constructor(settings: HTMLElementBaseSettings<T>) {
    this.mainElement = settings.mainElement
    this.mainClass = settings.mainClass
  }
  // values
  protected readonly mainElement: T
  protected readonly mainClass: string
}
export {
  HTMLElementBase,
  HTMLElementBaseSettings
}
