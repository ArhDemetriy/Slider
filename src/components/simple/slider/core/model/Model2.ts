import { Model, ModelSettings } from "./Model";
interface Model2Settings<T> extends ModelSettings<T>{

}
class Model2<T> extends Model<T> {
  constructor(settings: Model2Settings<T>) {
    super(settings)
  }
}

export { Model2, Model2Settings }
