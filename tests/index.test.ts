import library from '@/index';

describe("(MAIN) Check the integrity of the whole library", () => {

  test("Library all keys", () => {
    expect(
      Object.keys(library)
    ).toEqual([
      //getters
      'getUUID',
      'getLast',
      'getOverlapRange',

      //filters
      'arrayColumns',
      'associativeSlice',
      'whitelist',
      'match',
      'filter',
      'filterAnd',
      'filterOr',
      'filterNand',
      'filterNor',
      'searchRecords',
      'searchAnd',
      'searchOr',
      'searchNand',
      'searchNor',

      //checkers
      'hasOwnNestedProperty',
      'isEmail',
      'isEmpty',
      'isJson',
      'isUrl',
      'rangeOverlaps',

      //math
      'getDelta',
      'getMapDistance',
      'matrixTranspose',
      'levenshteinDistance',

      //array
      'divideArray',
      'chunksArray',
      'getArrayDepth',

      //converters
      'hexToRGB',
      'secondsToTime',
      'timeToSeconds',
      'toFormData',

      //getters
      'getForm',
      'getValue',
      'getIFrame',
      'getIndex',
      'getSiblings',

      //manipulations
      'toDOM',
      'appendChildren',

      //events
      'addEvent',
      'classScroll',
      'stickyJs',

      //helpers
      'intersectionHelper',
      'lazyloadHelper',

      'scripts',
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
