interface ModelSettings<T>{
  min: T
  max: T

}
class Model<T> {
  constructor(settings: ModelSettings<T>) {
  }
}

export { Model, ModelSettings }
