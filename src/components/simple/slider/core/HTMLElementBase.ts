type HTMLElementBaseSettings<T extends HTMLElement> = {
  readonly mainElement: T
}
class HTMLElementBase<T extends HTMLElement>{
  constructor(settings: HTMLElementBaseSettings<T>) {
    this.mainElement = settings.mainElement
  }
  // values
  protected readonly mainElement: T
}

interface ClassHTMLElementBaseSettings<T extends HTMLElement> extends HTMLElementBaseSettings<T> {
  readonly mainClass: string
}
class ClassHTMLElementBase<T extends HTMLElement> extends HTMLElementBase<T> {
  constructor(settings: ClassHTMLElementBaseSettings<T>) {
    super(settings)
    this.mainClass = settings.mainClass
  }
  // values
  protected readonly mainClass: string
}

export {
  HTMLElementBase,
  HTMLElementBaseSettings,
  ClassHTMLElementBase,
  ClassHTMLElementBaseSettings,
}
