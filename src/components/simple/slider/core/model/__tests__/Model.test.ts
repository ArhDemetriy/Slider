import { Model, ModelSettings } from "../Model"
Model.prototype.setStartPosition = jest.fn(Model.prototype.setStartPosition)

describe('Model<number> class:', () => {
  let settings: ModelSettings<number> = { min: -3, max: 113, initStartPosition: -79 }
  let model: Model<number>
  beforeEach(() => {
    jest.clearAllMocks()
    model = new Model(settings)
  })
  describe('constructor:', () => {
    it('should toBe ', function (this: Model<number>) {
      expect(model).toBeDefined()
    })
    describe('call/return this.setStartPosition in constructor:', () => {
      it('should call for ( settings.initStartPosition )', function (this: Model<number>) {
        expect(model.setStartPosition).toBeCalledTimes(1)
        expect(model.setStartPosition).toBeCalledWith(settings.initStartPosition)
      })
      it('should return value in min..max interval', function (this: Model<number>) {
        expect(model.setStartPosition).toReturnTimes(1)
        expect(model.setStartPosition).toReturnWith(settings.initStartPosition)
      })
    })
  })

  describe('setStartPosition method:', () => {
    it('should toBe ', function (this: Model<number>) {
      expect(model.setStartPosition).toBeDefined()
      expect(model.setStartPosition).toEqual(expect.any(Function))
    })
    const inputNumbers = [
      -150,
      -5006587,
      -0,
      0,
      68763,
      17,
      Math.PI,
      -13.96875,
      13.456,
      113.765781,
      settings.min,
      settings.min + 2,
      settings.min - 2,
      settings.min * 2,
      settings.min / 2,
      settings.max,
      settings.max + 2,
      settings.max - 2,
      settings.max * 2,
      settings.max / 2,
    ]
    it('should return number', function (this: Model<number>) {
      for (const inputNumber of inputNumbers) {
        expect(model.setStartPosition(inputNumber)).toEqual(expect.any(Number))
      }
    })
    it('should return number in min..max interval', function (this: Model<number>) {
      for (const inputNumber of inputNumbers) {
        expect(model.setStartPosition(inputNumber)).toBeGreaterThanOrEqual(settings.min)
      }
      for (const inputNumber of inputNumbers) {
        expect(model.setStartPosition(inputNumber)).toBeLessThanOrEqual(settings.max)
      }
    })
  })
})

