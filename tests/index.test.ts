import * as library from '../src/index';
import { whitelist, scripts } from '../src/index';

describe("(MAIN) Check the integrity of the whole library", () => {

  test("Check random function", () => {
    expect(
      whitelist
    ).toBeTruthy()
  });

  test("Library all keys", () => {
    expect(
      Object.keys(library)
    ).toEqual([
      'divideArray',
      'chunksArray',
      'getArrayDepth',
      'hasOwnNestedProperty',
      'isEmail',
      'isEmpty',
      'isJson',
      'isUrl',
      'rangeOverlaps',
      'hexToRGB',
      'secondsToTime',
      'timeToSeconds',
      'toFormData',
      'classScroll',
      'addEvent',
      'removeEvent',
      'shyJs',
      'stickyJs',
      'getForm',
      'getIFrame',
      'getIndex',
      'getSiblings',
      'getValue',
      'intersectionHelper',
      'lazyloadHelper',
      'mouseParallax',
      'calculateMouseParallax',
      'executeMouseParallax',
      'createMouseParallaxItem',
      'toDOM',
      'appendChildren',
      'arrayColumns',
      'associativeSlice',
      'match',
      'whitelist',
      'filter',
      'filterAnd',
      'filterOr',
      'filterNand',
      'filterNor',
      'filterCheckNumberRule',
      'search',
      'searchAnd',
      'searchOr',
      'searchNand',
      'searchNor',
      'sort',
      'getJSON',
      'getLast',
      'getOverlapRange',
      'getUUID',
      'getDelta',
      'getMapDistance',
      'matrixTranspose',
      'levenshteinDistance',
      'debouncePromise',
      'scripts'
    ])
  });

  test("Check scripts", () => {
    expect(
      Object.keys(scripts)
    ).toEqual([
      'activator',
      'lazyload',
      'createPrototypes',
    ])
  });

  const keys = Object.keys(library);
  for(let i = keys.length; i--; )
    test("Check function " + keys[i], () => {
      expect(
        library[keys[i] as keyof typeof library]
      ).toBeTruthy()
    });

});
