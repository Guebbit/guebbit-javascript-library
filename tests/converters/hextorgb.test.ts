import { hexToRGB } from '../../src';

describe("(secondsToTime) Transform a milliseconds integer in an object with all possible time variations", () => {
  test("Black", () => {
    expect(
      hexToRGB('#000000')
    ).toEqual([0, 0, 0]);
  });

  test("Blue", () => {
    expect(
      hexToRGB('#0086ff')
    ).toEqual([0, 134, 255]);
  });
});
