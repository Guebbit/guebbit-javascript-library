import { chunks_array } from '../../src';

describe("(chunks_array) divide array in [num] numbers of sub-arrays, lengths differ as less as possible", () => {
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

	test("2 balanced sub-arrays", () => {
		expect(
			chunks_array(input, 2)
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

	test("3 sub-arrays from a 9 lenght array, perfect division and perfect balance", () => {
		expect(
			chunks_array(input, 3)
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

	test("4 balanced sub-arrays", () => {
		expect(
			chunks_array(input, 4)
		).toEqual([
			[
				'lorem',
				'ipsum',
				'dolor'
			],
			[
				'sit',
				'consectetur'
			],
			[
				'adipiscing',
				'elit'
			],
			[
				'sed do',
				'eiusmod'
			]
		]);
	});

	test("5 balanced sub-arrays", () => {
		expect(
			chunks_array(input, 5)
		).toEqual([
			[
				'lorem',
				'ipsum'
			],
			[
				'dolor',
				'sit'
			],
			[
				'consectetur',
				'adipiscing'
			],
			[
				'elit',
				'sed do'
			],
			[
				'eiusmod'
			]
		]);
	});

	test("7 balanced sub-arrays", () => {
		expect(
			chunks_array(input, 7)
		).toEqual([
			[
				'lorem',
				'ipsum'
			],
			[
				'dolor',
				'sit'
			],
			[
				'consectetur'
			],
			[
				'adipiscing'
			],
			[
				'elit',
			],
			[
				'sed do'
			],
			[
				'eiusmod'
			],
		]);
	});

});
