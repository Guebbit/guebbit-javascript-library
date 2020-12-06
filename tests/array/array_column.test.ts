import { array_column } from '../../index';


describe("(array_column) php equivalent of array_column", () => {
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
			],
			output = [
				'lorem ipsum',
				'dolor',
				'sit amet'
			];

		expect(
			array_column(input, "param")
		).toEqual(output);
	});
});
