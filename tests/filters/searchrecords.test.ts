import { searchRecords } from '../../src';


describe("(searchRecords) [AND] (OR) VRMETAGAMES real case test", () => {
  const gameList = [
    {
      id: "item-2",
      title: "Acron: Attack of the Squirrels!",
      author: "Resolution Games",
      description: "",
      categories: ["party-game", "action"],
      stations: ["Oculus"],
      tags: [
        "PVP",
        "COOP"
      ],
      maxPlayersOffline: 8,
      maxPlayersOnline: 0,
      flagFamilyFriendly: true,
    },
    {
      id: "item-3",
      title: "Angry Birds VR: Isle of Pigs",
      author: "Resolution Games",
      description: "",
      categories: ["puzzle"],
      stations: ["Oculus"],
      tags: [],
      maxPlayersOffline: 1,
      maxPlayersOnline: 0,
      flagFamilyFriendly: true,
    },
    {
      id: "item-5",
      title: "Echo Arena",
      author: "",
      description: "",
      categories: ["sport"],
      stations: ["Oculus"],
      tags: [],
      maxPlayersOffline: 1,
      maxPlayersOnline: 2,
      flagFamilyFriendly: true,
    },
    {
      id: "item-6",
      title: "Loco Dojo",
      author: "Make Real",
      description: "",
      categories: ["action"],
      stations: ["Oculus"],
      tags: [],
      maxPlayersOffline: 1,
      maxPlayersOnline: 2,
      flagFamilyFriendly: true,
    },
    {
      id: "item-9",
      title: "Puzzle Bobble 3D: Vacation Odyssey",
      author: "Survios, Taito Corporation",
      description: "",
      categories: ["puzzle"],
      stations: ["Oculus"],
      tags: [],
      maxPlayersOffline: 1,
      maxPlayersOnline: 2,
      flagFamilyFriendly: true,
    },
    {
      id: "item-10",
      title: "Ragnarock",
      author: "WanadevStudio",
      description: "",
      categories: ["rhythm"],
      stations: ["Oculus"],
      tags: [
        "Music"
      ],
      maxPlayersOffline: 1,
      maxPlayersOnline: 0,
      flagFamilyFriendly: true,
    },
    {
      id: "item-12",
      title: "Walkabout Mini Golf",
      author: "Mighty Coconut",
      description: "",
      categories: ["sport"],
      stations: ["Oculus"],
      tags: [
        "Golf",
        "PVP"
      ],
      maxPlayersOffline: 1,
      maxPlayersOnline: 2,
      flagFamilyFriendly: true,
    },
    {
      id: "item-13",
      title: "Zenith: The Last City",
      author: "Ramen VR",
      description: "",
      categories: ["action"],
      stations: ["Oculus"],
      tags: [
        "Open World"
      ],
      maxPlayersOffline: 1,
      maxPlayersOnline: 20,
      flagFamilyFriendly: false,
    },
  ];

  test("(searchRecords) Empty Search with allowEmpty", () => {
    expect(
      searchRecords(gameList, [
        {
          search: '',
          searchParams: ['title', 'author', 'description'],
          logic: 'OR',
          stringLimit: 2,
          distance: -1
        },
        {
          search: [],
          searchParams: ['categories'],
          logic: 'OR',
        }
      ])
    ).toEqual(gameList);
  });

  test("Empty Search without allowEmpty", () => {
    expect(
      searchRecords(gameList, [
        {
          search: '',
          searchParams: ['title', 'author', 'description'],
          logic: 'OR',
          stringLimit: 2,
          distance: -1,
          allowEmpty: true
        },
        {
          search: [],
          searchParams: ['categories'],
          logic: 'OR',
          allowEmpty: true
        }
      ])
    ).toEqual([]);
  });


  test("Text Search (IMPORTANT distance: -1)", () => {
    expect(
      searchRecords(gameList, [
        {
          search: 'Wa',
          searchParams: ['title', 'author', 'description'],
          logic: 'OR',
          stringLimit: 2,
          distance: -1
        },
        {
          search: [],
          searchParams: ['categories'],
          logic: 'OR',
        }
      ])
    ).toEqual([
      {
        id: "item-10",
        title: "Ragnarock",
        author: "WanadevStudio",
        description: "",
        categories: ["rhythm"],
        stations: ["Oculus"],
        tags: [
          "Music"
        ],
        maxPlayersOffline: 1,
        maxPlayersOnline: 0,
        flagFamilyFriendly: true,
      },
      {
        id: "item-12",
        title: "Walkabout Mini Golf",
        author: "Mighty Coconut",
        description: "",
        categories: ["sport"],
        stations: ["Oculus"],
        tags: [
          "Golf",
          "PVP"
        ],
        maxPlayersOffline: 1,
        maxPlayersOnline: 2,
        flagFamilyFriendly: true,
      },
    ]);
  });

  test("Single Category Search", () => {
    expect(
      searchRecords(gameList, [
        {
          search: '',
          searchParams: ['title', 'author', 'description'],
          logic: 'OR',
          stringLimit: 2,
          distance: -1
        },
        {
          search: ['sport'],
          searchParams: ['categories'],
          logic: 'OR',
        }
      ])
    ).toEqual([
      {
        id: "item-5",
        title: "Echo Arena",
        author: "",
        description: "",
        categories: ["sport"],
        stations: ["Oculus"],
        tags: [],
        maxPlayersOffline: 1,
        maxPlayersOnline: 2,
        flagFamilyFriendly: true,
      },
      {
        id: "item-12",
        title: "Walkabout Mini Golf",
        author: "Mighty Coconut",
        description: "",
        categories: ["sport"],
        stations: ["Oculus"],
        tags: [
          "Golf",
          "PVP"
        ],
        maxPlayersOffline: 1,
        maxPlayersOnline: 2,
        flagFamilyFriendly: true,
      }
    ]);
  });

  test("Multiple Category Search", () => {
    expect(
      searchRecords(gameList, [
        {
          search: '',
          searchParams: ['title', 'author', 'description'],
          logic: 'OR',
          stringLimit: 2,
          distance: -1
        },
        {
          search: ['party-game', 'sport'],
          searchParams: ['categories'],
          logic: 'OR',
        }
      ])
    ).toEqual([
      {
        id: "item-2",
        title: "Acron: Attack of the Squirrels!",
        author: "Resolution Games",
        description: "",
        categories: ["party-game", "action"],
        stations: ["Oculus"],
        tags: [
          "PVP",
          "COOP"
        ],
        maxPlayersOffline: 8,
        maxPlayersOnline: 0,
        flagFamilyFriendly: true,
      },
      {
        id: "item-5",
        title: "Echo Arena",
        author: "",
        description: "",
        categories: ["sport"],
        stations: ["Oculus"],
        tags: [],
        maxPlayersOffline: 1,
        maxPlayersOnline: 2,
        flagFamilyFriendly: true,
      },
      {
        id: "item-12",
        title: "Walkabout Mini Golf",
        author: "Mighty Coconut",
        description: "",
        categories: ["sport"],
        stations: ["Oculus"],
        tags: [
          "Golf",
          "PVP"
        ],
        maxPlayersOffline: 1,
        maxPlayersOnline: 2,
        flagFamilyFriendly: true,
      }
    ]);
  });

  test("(SPECIAL) [AND] Multiple Category Search WITH AND", () => {
    expect(
      searchRecords(gameList, [
        {
          search: '',
          searchParams: ['title', 'author', 'description'],
          logic: 'OR',
          stringLimit: 2,
          distance: -1
        },
        {
          search: ['party-game', 'action'],
          searchParams: ['categories'],
          logic: 'and',
        }
      ])
    ).toEqual([
      {
        id: "item-2",
        title: "Acron: Attack of the Squirrels!",
        author: "Resolution Games",
        description: "",
        categories: ["party-game", "action"],
        stations: ["Oculus"],
        tags: [
          "PVP",
          "COOP"
        ],
        maxPlayersOffline: 8,
        maxPlayersOnline: 0,
        flagFamilyFriendly: true,
      },
    ]);
  });


  test("Category + text search", () => {
    expect(
      searchRecords(gameList, [
        {
          search: 'mi',
          searchParams: ['title', 'author', 'description'],
          logic: 'OR',
          stringLimit: 2,
          distance: -1
        },
        {
          search: ['sport'],
          searchParams: ['categories'],
          logic: 'OR',
        }
      ])
    ).toEqual([
      {
        id: "item-12",
        title: "Walkabout Mini Golf",
        author: "Mighty Coconut",
        description: "",
        categories: ["sport"],
        stations: ["Oculus"],
        tags: [
          "Golf",
          "PVP"
        ],
        maxPlayersOffline: 1,
        maxPlayersOnline: 2,
        flagFamilyFriendly: true,
      },
    ]);
  });

  test("(SPECIAL) [OR] Category + text search WITH OR", () => {
    expect(
      searchRecords(gameList, [
        {
          search: 'wa',
          searchParams: ['title', 'author', 'description'],
          logic: 'OR',
          stringLimit: 2,
          distance: -1
        },
        {
          search: ['sport'],
          searchParams: ['categories'],
          logic: 'OR',
        }
      ], "OR")
    ).toEqual([
      {
        id: "item-5",
        title: "Echo Arena",
        author: "",
        description: "",
        categories: ["sport"],
        stations: ["Oculus"],
        tags: [],
        maxPlayersOffline: 1,
        maxPlayersOnline: 2,
        flagFamilyFriendly: true,
      },
      {
        id: "item-10",
        title: "Ragnarock",
        author: "WanadevStudio",
        description: "",
        categories: ["rhythm"],
        stations: ["Oculus"],
        tags: [
          "Music"
        ],
        maxPlayersOffline: 1,
        maxPlayersOnline: 0,
        flagFamilyFriendly: true,
      },
      {
        id: "item-12",
        title: "Walkabout Mini Golf",
        author: "Mighty Coconut",
        description: "",
        categories: ["sport"],
        stations: ["Oculus"],
        tags: [
          "Golf",
          "PVP"
        ],
        maxPlayersOffline: 1,
        maxPlayersOnline: 2,
        flagFamilyFriendly: true,
      },
    ]);
  });
});


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
