interface ModelSettings<T>{
  min: T
  max: T
  initPositions: [T]
}
class Model<T> {
  constructor(settings: ModelSettings<T>) {
  }
  setStartPosition(requestedPosition: T): T {
    return this.startPosition = requestedPosition
  }
  protected min: T
  protected max: T
  protected startPosition: T
}

export { Model, ModelSettings }
