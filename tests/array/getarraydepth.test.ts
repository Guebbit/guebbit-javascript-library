import { getArrayDepth } from '../../src';

describe("(getArrayDepth) Get depth of array", () => {

  test("Non array", () => {
    expect(
      getArrayDepth('lorem-ipsum')
    ).toBe(0);
  });

  test("1", () => {
    expect(
      getArrayDepth(['lorem-ipsum'])
    ).toBe(1);
  });

  test("2", () => {
    expect(
      getArrayDepth([['lorem-ipsum']])
    ).toBe(2);
  });

  test("3", () => {
    expect(
      getArrayDepth([[['lorem-ipsum']]])
    ).toBe(3);
  });

  test("4 (complex)", () => {
    expect(
      getArrayDepth([1,2,[3,4,[5,6],7,[8,[9,91]],10],11,12])
    ).toBe(4);
  });

});
