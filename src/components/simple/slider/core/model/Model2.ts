import { Model, ModelSettings } from "./Model";
interface Model2Settings<T> extends ModelSettings<T>{
  initEndPosition: T
}
class Model2<T> extends Model<T> {
  constructor(settings: Model2Settings<T>) {
    super(settings)
  }
  setEndPosition(requestedPosition: T): T {
    return this.endPosition = requestedPosition
  }
  protected endPosition: T
}

export { Model2, Model2Settings }
