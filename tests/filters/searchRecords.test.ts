import { searchRecords } from '../../src';

describe("(searchRecords) Search various keys in a haystack", () => {

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
      {
        id: 4,
        param1: 'lorem ipsum',
        param2: 'test',
        param3: 'lorem ipsum'
      },
      {
        id: 5,
        param1: 'test',
        param2: 'toast',
        param3: 'lorem ipsum'
      },
		];

  test("[AND/OR] (AND/OR) 1 needed parameter, AND or OR is the same", () => {
		expect(
			searchRecords(input, [
        {
          search: 'lorem ipsum',
          searchParams: ['param1']
        }
      ])
		).toEqual([
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
        id: 4,
        param1: 'lorem ipsum',
        param2: 'test',
        param3: 'lorem ipsum'
      },
		]);
	});

  test("[AND/OR] (AND) 2 needed parameters", () => {
    expect(
      searchRecords(input, [
        {
          search: 'lorem ipsum',
          searchParams: ['param1', 'param3'],
        }
      ])
    ).toEqual([{
        id: 4,
        param1: 'lorem ipsum',
        param2: 'test',
        param3: 'lorem ipsum'
      }]);
  });

  test("[AND/OR] (OR) 2 needed parameters", () => {
    expect(
      searchRecords(input, [
        {
          search: 'lorem ipsum',
          searchParams: ['param1', 'param3'],
          logic: "OR"
        }
      ])
    ).toEqual([
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
        id: 4,
        param1: 'lorem ipsum',
        param2: 'test',
        param3: 'lorem ipsum'
      },
      {
        id: 5,
        param1: 'test',
        param2: 'toast',
        param3: 'lorem ipsum'
      },
    ]);
  });

  test("[AND] (AND/OR) 2 different rules", () => {
    expect(
      searchRecords(input, [
        {
          search: 'adipiscing',
          searchParams: ['param1']
        },
        {
          search: 'eiusmod',
          searchParams: ['param3']
        }
      ])
    ).toEqual([{
        id: 3,
        param1: 'adipiscing',
        param2: 'elit sed do',
        param3: 'eiusmod'
      }]);
  });

  test("[OR] (AND/OR) 2 different rules", () => {
    expect(
      searchRecords(input, [
        {
          search: 'adipiscing',
          searchParams: ['param1']
        },
        {
          search: 'lorem ipsum',
          searchParams: ['param3']
        }
      ], "OR")
    ).toEqual([
      {
        id: 3,
        param1: 'adipiscing',
        param2: 'elit sed do',
        param3: 'eiusmod'
      },
      {
        id: 4,
        param1: 'lorem ipsum',
        param2: 'test',
        param3: 'lorem ipsum'
      },
      {
        id: 5,
        param1: 'test',
        param2: 'toast',
        param3: 'lorem ipsum'
      },
    ]);
  });


  test("[AND/OR] (AND/OR) (levenshteinDistance = 2) 1 needed parameter with fuzzy search", () => {
    expect(
      searchRecords(input, [
        {
          search: 'loerm ipsum',
          searchParams: ['param1'],
          distance: 2
        }
      ])
    ).toEqual([
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
        id: 4,
        param1: 'lorem ipsum',
        param2: 'test',
        param3: 'lorem ipsum'
      },
    ]);
  });

  test("[AND] (AND/OR) (levenshteinDistance = 2) 2 needed parameter with fuzzy search", () => {
    expect(
      searchRecords(input, [
        {
          search: 'loerm ipsum',
          searchParams: ['param1'],
          distance: 2
        },
        {
          search: 'lorem ispu',
          searchParams: ['param3'],
          distance: 3
        }
      ])
    ).toEqual([
      {
        id: 4,
        param1: 'lorem ipsum',
        param2: 'test',
        param3: 'lorem ipsum'
      },
    ]);
  });

  test("[OR] (AND/OR) (levenshteinDistance = 2) 2 needed parameter with fuzzy search", () => {
    expect(
      searchRecords(input, [
        {
          search: 'loerm ipsum',
          searchParams: ['param1'],
          distance: 2
        },
        {
          search: 'lorem ispu',
          searchParams: ['param3'],
          distance: 3
        }
      ], "OR")
    ).toEqual([
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
        id: 4,
        param1: 'lorem ipsum',
        param2: 'test',
        param3: 'lorem ipsum'
      },
      {
        id: 5,
        param1: 'test',
        param2: 'toast',
        param3: 'lorem ipsum'
      },
    ]);
  });

});
