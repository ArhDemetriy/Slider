import { mockModule } from 'jest-mock-implementations-preserving'
import { Demo } from '../demo'

jest.mock('../demo.ts', function (this: Demo) {
  return mockModule<{ Demo: typeof Demo }>(jest.requireActual('../demo.ts'), {
    Demo: {
    }
  })
})

describe('class Demo:', function (this: Demo) {

  let demo: Demo
  beforeEach(() => {

  })
  it('should toBe ', () => {
    expect(Demo).toBeDefined()
  })
})
