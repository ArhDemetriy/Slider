import { mockModule } from 'jest-mock-implementations-preserving';
import { Demo } from '../demo';

jest.mock('../demo.ts', (this: Demo) => mockModule<{ Demo: typeof Demo }>(jest.requireActual('../demo.ts'), {
  Demo: {
  },
}));

describe('class Demo:', (this: Demo) => {
  let demo: Demo;
  beforeEach(() => {

  });
  it('should toBe ', () => {
    expect(Demo).toBeDefined();
  });
});
