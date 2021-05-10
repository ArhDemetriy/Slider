class Scale {
  constructor(settings: { [k in string]: any }) {
  }
  updateSettings(){}
  protected generateMarks(){}
  protected mainElement: HTMLDivElement
  protected marks
  protected promoPoints: any[]
  protected min
  protected max
  protected step
  protected hiddenMarks: HTMLDivElement[]
}
export {
  Scale
}
