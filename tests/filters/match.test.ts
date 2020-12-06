import { match } from '../../index';

describe("(match) Search in array for object with data[parameter] = search", () => {

	const arrayOfObjects = [
			{
				id: 1,
				param: 'lorem ipsum'
			},
			{
				id: 2,
				param: 'dolor'
			},
			{
				id: 3,
				param: 'sit amet'
			},
			{
				id: 4,
				param: 'adipiscing elit'
			},
			{
				id: 5,
				param: 'sed do eiusmod'
			},
		];

	test("Successful search of single element in defined param", () => {
		expect(
			match(arrayOfObjects, 'dolor', 'param')
		).toEqual([
			{
				id: 2,
				param: 'dolor'
			}
		]);
	});
	test("Failed search of single element in defined param", () => {
		expect(
			match(arrayOfObjects, 'lorem', 'param')
		).toEqual([
			{
				id: 1,
				param: 'lorem ipsum'
			}
		]);
	});

	test("Successful EXACT search of single element in defined param", () => {
		expect(
			match(arrayOfObjects, 'dolor', 'param', true)
		).toEqual([
			{
				id: 2,
				param: 'dolor'
			}
		]);
	});
	test("Failed EXACT search of single element in defined param", () => {
		expect(
			match(arrayOfObjects, 'lorem', 'param', true)
		).toEqual([]);
	});


	test("Successful search of ARRAY of elements in defined param", () => {
		expect(
			match(arrayOfObjects, ['lorem', 'dolor'], 'param')
		).toEqual([
			{
				id: 1,
				param: 'lorem ipsum'
			},
			{
				id: 2,
				param: 'dolor'
			}
		]);
	});

	/*
	test("Successful search of single element in non defined param (so in every param)", () => {
		expect(
			match(arrayOfObjects, 'dolor')
		).toEqual([

		]);
	});
	*/
});
