import { arrayColumns } from '../../src';

describe("(arrayColumns) php equivalent of arrayColumns - but extended to use an array of columns", () => {
  const input = [
    {
      id: 1,
      param1: 'lorem ipsum',
      param2: 'dolor'
    },
    {
      id: 2,
      param1: 'lorem ipsum',
      param2: 'sit amet',
      param3: 'consectetur'
    },
    {
      id: 3,
      param1: 'adipiscing',
      param2: 'elit sed do',
      param3: 'eiusmod'
    },
  ];

  test("Return the values from a single column ({param1} in this case)", () => {
		expect(
			arrayColumns(input, "param1")
		).toEqual([
			'lorem ipsum',
			'lorem ipsum',
			'adipiscing'
		]);
	});

  test("Return the values from 2 columns", () => {
    expect(
      arrayColumns(input, ["param1", "param3"])
    ).toEqual([
      ['lorem ipsum', undefined],
      ['lorem ipsum', 'consectetur'],
      ['adipiscing', 'eiusmod']
    ]);
  });

  test("Return the values from some columns of a single object", () => {
    expect(
      arrayColumns(input[2]!, ["param1", "param2"])
    ).toEqual([
      'adipiscing',
      'elit sed do'
    ]);
  });

});
