type HTMLElementBaseSettings<T extends HTMLElement> = {
  mainElement: T
}
class HTMLElementBase<T extends HTMLElement>{
  protected mainElement: T
  constructor(settings: HTMLElementBaseSettings<T>) {
    this.mainElement = settings.mainElement
  }
}
export {
  HTMLElementBase,
  HTMLElementBaseSettings
}
