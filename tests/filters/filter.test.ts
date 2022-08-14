import { filter } from '../../src';

// TODO sensitive + distance tests
// TODO other logics tests

// --------------------- AND LOGIC---------------------

describe("(filter) [AND logic] Generic filter values against values - All checks must be TRUE", () => {
  test("[AND] match 2 identical ARRAYS", () =>
    expect(
      filter(
        [
          "must",
          "be",
          "the",
          "same"
        ],
        [
          "must",
          "be",
          "the",
          "same"
        ]
      )
    ).toBeTruthy()
  );

  test("[AND] match 2 ARRAYS (true) - first (toCheck) must have all parameters of the second (toMatch)", () =>
    expect(
      filter(
        [
          "must",
          "be",
          "the",
          "same"
        ],
        [
          "must",
          "be",
          "the",
          "same",
          "error"
        ]
      )
    ).toBeTruthy()
  );

  test("[AND] match 2 ARRAYS (false) - same as above, but inverted {toCheck} and {toMatch}", () =>
    expect(
      filter(
        [
          "must",
          "be",
          "the",
          "same",
          "error"
        ],
        [
          "must",
          "be",
          "the",
          "same"
        ]
      )
    ).toBeFalsy()
  );

  test("[AND] match STRING with ARRAY - the string will be checked with all the array values, they must all be the same", () =>
    expect(
      filter("same", ["same", "same", "same"])
    ).toBeTruthy()
  );

  test("[AND] match STRING with ARRAY - same as above", () =>
    expect(
      filter("same", ["same", "not-same"]) &&
      filter(["same", "not-same"], "same")
    ).toBeFalsy()
  );
});


// --------------------- OR LOGIC---------------------

describe("(filter) [OR logic] Generic filter values against values - Just ONE check must be TRUE", () => {
  test("[OR] match 2 identical ARRAYS", () =>
    expect(
      filter(
        [
          "lorem",
          "ipsum",
          "sit dolor"
        ],
        [
          "lorem",
          "ipsum",
          "sit dolor"
        ],
        "or"
      )
    ).toBeTruthy()
  );

  test("[OR] match 2 ARRAYS - one must have at least 1 parameter of the other", () =>
    expect(
      filter(
        [
          "lorem",
          "test",
          "sit dolor"
        ],
        [
          "test",
          "toast"
        ],
        "or"
      ) &&
      filter(
        [
          "test",
          "toast"
        ],
        [
          "lorem",
          "test",
          "sit dolor"
        ],
        "or"
      )
    ).toBeTruthy()
  );

  test("[OR] match STRING with ARRAY - the string will be checked with all the array values, at least 1 must be the same", () =>
    expect(
      filter("ipsum", ["lorem", "ipsum", "sit dolor"], "or") &&
      filter(["lorem", "ipsum", "sit dolor"], "ipsum", "or")
    ).toBeTruthy()
  );
});


// --------------------- INDIFFERENT LOGIC---------------------

describe("(filter) [INDIFFERENT logic] STRING with STRING is the same as the {function match} tests", () =>
  test("Match STRING with STRING - its the same of the match tests", () =>
    expect(
      filter('lorem ipsum', 'Lorem Ispum', "and", false, 2) &&
      filter('lorem ipsum', 'Lorem Ispum', "or", false, 2) &&
      filter('lorem ipsum', 'Lorem Ispum', "and", true, 4) &&
      filter('lorem ipsum', 'Lorem Ispum', "or", true, 4)
    ).toBeTruthy()
  )
);
