import { rangeOverlaps } from '../../src';

describe("(rangeOverlaps) check if 2 range overlapses", () => {

  test("No intersection", () => {
    expect(
      rangeOverlaps(50, 100, 150, 200),
    ).toBeFalsy();
  });

  test("B starts in A", () => {
    expect(
      rangeOverlaps(50, 100, 80, 200),
    ).toBeTruthy();
  });

  test("B ends in A", () => {
    expect(
      rangeOverlaps(50, 100, 20, 60),
    ).toBeTruthy();
  });

  test("A in B", () => {
    expect(
      rangeOverlaps(50, 100, 10, 200),
    ).toBeTruthy();
  });

  test("B in A", () => {
    expect(
      rangeOverlaps(50, 100, 70, 80),
    ).toBeTruthy();
  });

});
