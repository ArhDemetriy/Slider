import { Model2, Model2Settings } from "../Model2"
Model2.prototype.setStartPosition = jest.fn(Model2.prototype.setStartPosition)
Model2.prototype.setEndPosition = jest.fn(Model2.prototype.setEndPosition)

describe('Model2<number> class:', () => {
  let settings: Model2Settings<number> = { min: -3, max: 113, initStartPosition: -79, initEndPosition: 100500 }
  let model: Model2<number>
  beforeEach(() => {
    jest.clearAllMocks()
    model = new Model2(settings)
  })
  describe('constructor:', () => {
    it('should toBe ', function (this: Model2<number>) {
      expect(model).toBeDefined()
    })
    describe.skip('call/return this.setStartPosition in constructor:', () => {
      it('should call for ( settings.initStartPosition )', function (this: Model2<number>) {
        expect(model.setStartPosition).toBeCalledTimes(1)
        expect(model.setStartPosition).toBeCalledWith(settings.initStartPosition)
      })
      it('should return value in min..max interval', function (this: Model2<number>) {
        expect(model.setStartPosition).toReturnTimes(1)
        expect(model.setStartPosition).toReturnWith(settings.initStartPosition)
      })
    })
    describe('call/return this.setEndPosition in constructor:', () => {
      it('should call for ( settings.initEndPosition )', function (this: Model2<number>) {
        expect(model.setEndPosition).toBeCalledTimes(1)
        expect(model.setEndPosition).toBeCalledWith(settings.initEndPosition)
      })
      it('should return value in min..max interval', function (this: Model2<number>) {
        expect(model.setEndPosition).toReturnTimes(1)
        expect(model.setEndPosition).toReturnWith(settings.initEndPosition)
      })
    })
  })

  describe('setStartPosition method:', () => {
    it('should toBe ', function (this: Model2<number>) {
      expect(model.setEndPosition).toBeDefined()
      expect(model.setEndPosition).toEqual(expect.any(Function))
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
    it('should return number', function (this: Model2<number>) {
      for (const inputNumber of inputNumbers) {
        expect(model.setEndPosition(inputNumber)).toEqual(expect.any(Number))
      }
    })
    it('should return number in min..max interval', function (this: Model2<number>) {
      for (const inputNumber of inputNumbers) {
        expect(model.setEndPosition(inputNumber)).toBeGreaterThanOrEqual(settings.min)
      }
      for (const inputNumber of inputNumbers) {
        expect(model.setEndPosition(inputNumber)).toBeLessThanOrEqual(settings.max)
      }
    })
  })
  describe.skip('setStartPosition method:', () => {
    it('should toBe ', function (this: Model2<number>) {
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
    it('should return number', function (this: Model2<number>) {
      for (const inputNumber of inputNumbers) {
        expect(model.setStartPosition(inputNumber)).toEqual(expect.any(Number))
      }
    })
    it('should return number in min..max interval', function (this: Model2<number>) {
      for (const inputNumber of inputNumbers) {
        expect(model.setStartPosition(inputNumber)).toBeGreaterThanOrEqual(settings.min)
      }
      for (const inputNumber of inputNumbers) {
        expect(model.setStartPosition(inputNumber)).toBeLessThanOrEqual(settings.max)
      }
    })
  })

})

