import { Model, ModelSettings } from "./Model";
interface Model2Settings<T> {
  min: T
  max: T
  initPositions: [T, T]
}
class Model2<T> {
  constructor(protected settings: Model2Settings<T>) {
    this.init()
  }
  getPositions() {
    return Array.from(this.positions) as Model2<T>['positions']
  }
  getSetters(): [Model2<T>['setStartPosition'], Model2<T>['setEndPosition'],] {
    return [this.setStartPosition.bind(this), this.setEndPosition.bind(this)]
  }
  // methods
  protected setStartPosition(requestedPosition: T): T {
    return this.positions[0] = requestedPosition
  }
  protected setEndPosition(requestedPosition: T): T {
    return this.positions[1] = requestedPosition
  }
  // values
  protected readonly positions: [T, T]
  // init methods
  private init() {
    this.setStartPosition(this.settings.initPositions[0])
    this.setEndPosition(this.settings.initPositions[1])
  }
}

export { Model2, Model2Settings }
