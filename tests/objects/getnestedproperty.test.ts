import { getNestedProperty } from "../../src";

describe("(getNestedProperty = LODASH.GET) Using lodash.get that do the same thing", () => {
  const object = { "a": [{ "b": { "c": 3 } }] };

  test("string to value", () => {
    expect(
      getNestedProperty(object, "a[0].b.c")
    ).toBe(3);
  });
  test("array to value", () => {
    expect(
      getNestedProperty(object, ["a", "0", "b", "c"])
    ).toBe(3);
  });
  test("string to object", () => {
    expect(
      getNestedProperty(object, "a[0].b")
    ).toStrictEqual({ "c": 3 });
  });
  test("with default", () => {
    expect(
      getNestedProperty(object, "a.b.c", "default")
    ).toBe("default");
  });
});
