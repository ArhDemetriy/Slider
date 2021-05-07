interface ViewSettings<T>{
  min: T
  max: T

}
class View<T> {
  constructor(settings: ViewSettings<T>) {
  }
}

export { View, ViewSettings }
