import { createNestedProperty } from "../../src";

describe("(createNestedProperty) create nested objects (and put value on the tip)", () => {
	const genericObject = {
		lorem: "ipsum",
    dolor: {
      sit: "consectetur"
    }
	};

  test("Empty object + array parameters", () => {
    expect(
      createNestedProperty({}, ["lorem", "ipsum"])
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
      createNestedProperty(genericObject, "dolor___adipiscing___elit", 1, "___")
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
});
