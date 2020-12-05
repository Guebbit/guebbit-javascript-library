import { array_column } from '../../index';


describe("Filter function", () => {
	test("it should filter by a search term (link)", () => {
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
