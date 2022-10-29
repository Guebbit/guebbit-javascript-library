import { removeNestedProperty } from '../../src';

describe("(removeNestedProperty) recursive hasOwnProperty", () => {
  let genericObject = {};
  // reload object
  beforeEach(() => {
    genericObject = {
      lorem: 'ipsum',
      dolor: {
        sit: 'consectetur',
        adipiscing:{
          elit: {
            sed: {
              do: 'eiusmod'
            }
          }
        }
      }
    };
  });

  test("Single parameter (better use hasOwnProperty)", () => {
    removeNestedProperty(genericObject, 'dolor');
    expect(genericObject).toStrictEqual({
      lorem: 'ipsum',
    });
  });
  test("Empty object + array parameters", () => {
    removeNestedProperty(genericObject, ["dolor", "adipiscing", "elit", "sed", "do"]);
    expect(genericObject).toStrictEqual({
      lorem: 'ipsum',
      dolor: {
        sit: 'consectetur',
        adipiscing:{
          elit: {
            sed: {}
          }
        }
      }
    });
  });
  test("Empty object + string parameter", () => {
    removeNestedProperty(genericObject, 'dolor.adipiscing.elit.sed.do');
    expect(genericObject).toStrictEqual({
      lorem: 'ipsum',
      dolor: {
        sit: 'consectetur',
        adipiscing:{
          elit: {
            sed: {}
          }
        }
      }
    });
  });
  test("Non Existing chain of parameters", () => {
    removeNestedProperty(genericObject, 'lorem.test.toast');
    expect(genericObject).toStrictEqual({
      lorem: 'ipsum',
      dolor: {
        sit: 'consectetur',
        adipiscing:{
          elit: {
            sed: {
              do: 'eiusmod'
            }
          }
        }
      }
    });
  });
});
