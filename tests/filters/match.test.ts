import { match } from '../../src';

describe("(match) Search in array for object with data[parameter] = search", () => {

	test("Check same string", () => {
		expect(
			match('lorem ipsum', 'lorem ipsum')
		).toBeTruthy();
	});
	test("Check substring contained in a string", () => {
		expect(
			match('lorem ipsum', 'lorem')
		).toBeTruthy();
	});
	test("Check similar strings (Levenshtein Distance employed, default 4)", () => {
		expect(
			match('lorem ipsum', 'lorem ispum', 4)
		).toBeTruthy();
	});
	test("Check different strings", () => {
		expect(
			match('lorem ipsum', 'dolor')
		).toBeFalsy();
	});
});
