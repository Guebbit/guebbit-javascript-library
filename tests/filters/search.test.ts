import { search } from '../../index';

describe("(search) Search various keys in a haystack", () => {

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

	test("1 needed parameter, AND or OR is the same", () => {
		expect(
			search(input, [['param1', 'lorem ipsum']])
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
		]);
	});

	test("2 needed parameters, with AND", () => {
		expect(
			search(input, [['param1', 'lorem ipsum'], ['param3', 'consectetur']])
		).toEqual([
			{
				id: 2,
				param1: 'lorem ipsum',
				param2: 'sit amet',
				param3: 'consectetur'
			}
		]);
	});

	test("2 needed parameters, with OR", () => {
		expect(
			search(input, [['param2', 'dolor'], ['param3', 'eiusmod']], "OR")
		).toEqual([
			{
				id: 1,
				param1: 'lorem ipsum',
				param2: 'dolor'
			},
			{
				id: 3,
				param1: 'adipiscing',
				param2: 'elit sed do',
				param3: 'eiusmod'
			},
		]);
	});

	test("1 needed parameter, with AND, fuzzy search (case insensitive, substring search, levenshteinDistance = 0)", () => {
		expect(
			search(input, [['param1', 'lorem']], '', 0)
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
		]);
	});
	test("2 needed parameters, with OR, with fuzzy search (case insensitive, substring search, levenshteinDistance = 0)", () => {
		expect(
			search(input, [['param2', 'test'], ['param2', 'amet']], 'OR', 0)
		).toEqual([
			{
				id: 2,
				param1: 'lorem ipsum',
				param2: 'sit amet',
				param3: 'consectetur'
			},
		]);
	});

	test("1 needed parameter, with AND, with fuzzy search (case insensitive, substring search) BUT INSTEAD with levenshteinDistance = 2", () => {
		expect(
			search(input, [['param1', 'loerm ipsum']], '', 2)
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
		]);
	});
	test("2 needed parameter, with OR, with fuzzy search (case insensitive, substring search) BUT INSTEAD with levenshteinDistance = 2", () => {
		expect(
			search(input, [['param1', 'adipiscingg'], ['param2', 'doolr']], 'OR', 2)
		).toEqual([
			{
				id: 1,
				param1: 'lorem ipsum',
				param2: 'dolor'
			},
			{
				id: 3,
				param1: 'adipiscing',
				param2: 'elit sed do',
				param3: 'eiusmod'
			},
		]);
	});

});
