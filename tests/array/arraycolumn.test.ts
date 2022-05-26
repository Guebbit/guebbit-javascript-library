import { arrayColumn } from '../../src';

describe("(arrayColumn) php equivalent of arrayColumn", () => {
	test("Return the values from a single column in the input array of objects, 'param' in this case", () => {
		const input = [
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
			];

		expect(
			arrayColumn(input, "param")
		).toEqual([
			'lorem ipsum',
			'dolor',
			'sit amet'
		]);
	});
});
