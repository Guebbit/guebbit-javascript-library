import { getJSON } from '../../src';

describe("(getJSON) Safe conversion of JSON", () => {

  test("Empty", () => {
    expect(
      getJSON()
    ).toBeFalsy()
  });

  test("Random string", () => {
    expect(
      getJSON("12345")
    ).toBe(12345)
  });

  test("Empty object (json)", () => {
    expect(
      getJSON("{}")
    ).toBeTruthy()
  });

  test("Empty array (json)", () => {
    expect(
      getJSON("[]")
    ).toBeTruthy()
  });

  test("Wrong object (json)", () => {
    expect(
      getJSON("{ 'test': 'toast' }")
    ).toBeFalsy()
  });

  test("Wrong array (json)", () => {
    expect(
      getJSON("['bim', 'bum', 'bam']")
    ).toBeFalsy()
  });

  test("Correct object (json)", () => {
    expect(
      getJSON("{\"test\":\"toast\",\"lorem\":\"ipsum\"}")
    ).toBeTruthy()
  });

  test("Correct array (json)", () => {
    expect(
      getJSON("[\"bim\",\"bum\",\"bam\"]")
    ).toBeTruthy()
  });
});
