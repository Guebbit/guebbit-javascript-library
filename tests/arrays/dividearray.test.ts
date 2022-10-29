import { divideArray } from '../../src';

describe("(divideArray) splits array in sub-arrays with MAX [num] elements", () => {
	const input :string[] = [
		'lorem',
		'ipsum',
		'dolor',
		'sit',
		'consectetur',
		'adipiscing',
		'elit',
		'sed do',
		'eiusmod'
	];

	test("2 max items", () => {
		expect(
			divideArray(input, 2)
		).toEqual([
			[
				'lorem',
				'ipsum',
			],
			[
				'dolor',
				'sit',
			],
			[
				'consectetur',
				'adipiscing',
			],
			[
				'elit',
				'sed do',
			],
			[
				'eiusmod'
			],
		]);
	});

	test("3 max items", () => {
		expect(
			divideArray(input, 3)
		).toEqual([
			[
				'lorem',
				'ipsum',
				'dolor'
			],
			[
				'sit',
				'consectetur',
				'adipiscing'
			],
			[
				'elit',
				'sed do',
				'eiusmod'
			]
		]);
	});

	test("5 max items", () => {
		expect(
			divideArray(input, 5)
		).toEqual([
			[
				'lorem',
				'ipsum',
				'dolor',
				'sit',
				'consectetur'
			],
			[
				'adipiscing',
				'elit',
				'sed do',
				'eiusmod'
			]
		]);
	});

	test("6 max items", () => {
		expect(
			divideArray(input, 6)
		).toEqual([
			[
				'lorem',
				'ipsum',
				'dolor',
				'sit',
				'consectetur',
				'adipiscing',
			],
			[
				'elit',
				'sed do',
				'eiusmod'
			]
		]);
	});

});
