import { createNestedProperty } from "../../src";

describe("(createNestedProperty now LODASH.SET) create nested objects (and put value on the tip)", () => {
  let genericObject = {};
  // reload object
  beforeEach(() => {
    genericObject = {
      lorem: "ipsum",
      dolor: {
        sit: "consectetur"
      }
    };
  });

  test("Empty object + array parameters", () => {
    expect(
      createNestedProperty({}, ["lorem", "ipsum"], {})
    ).toStrictEqual({
      lorem: {
        ipsum: {}
      }
    });
  });
  test("Empty object + string parameter", () => {
    expect(
      createNestedProperty({}, "lorem.ipsum", 1)
    ).toStrictEqual({
      lorem: {
        ipsum: 1
      }
    });
  });
  test("Existing object + array parameters", () => {
    expect(
      createNestedProperty(genericObject, ["dolor", "adipiscing", "elit"], 1)
    ).toStrictEqual({
      lorem: "ipsum",
      dolor: {
        sit: "consectetur",
        adipiscing: {
          elit: 1
        }
      }
    });
  });
  test("Existing object + string parameter", () => {
    expect(
      createNestedProperty(genericObject, "dolor.adipiscing.elit", 1)
    ).toStrictEqual({
      lorem: "ipsum",
      dolor: {
        sit: "consectetur",
        adipiscing: {
          elit: 1
        }
      }
    });
  });
  test("Existing object + generate array", () => {
    expect(
      createNestedProperty(genericObject, "a[0].b.c", 4)
    ).toStrictEqual({
      lorem: "ipsum",
      dolor: {
        sit: "consectetur"
      },
      a: [
        {
          b: {
            c: 4
          }
        }
      ]
    });
  });
});
