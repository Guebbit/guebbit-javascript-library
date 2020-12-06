import { isEmpty } from '../../index';

document.body.innerHTML =
	'<div>' +
	'  <span id="here-i-am">Lorem Ipsum</span>' +
	'</div>';

describe("(isEmpty) php equivalent, check if element/object/value exist and/or is empty, different from lodash's", () => {
	let voidVar :void;

	test("Void variable", () => {
		expect(
			isEmpty(voidVar)
		).toBeTruthy();
	});
	test("Null variable", () => {
		expect(
			isEmpty(null)
		).toBeTruthy();
	});
	test("Undefined variable", () => {
		expect(
			isEmpty(undefined)
		).toBeTruthy();
	});
	test("Empty String variable", () => {
		expect(
			isEmpty('')
		).toBeTruthy();
	});
	test("Empty array", () => {
		expect(
			isEmpty([])
		).toBeTruthy();
	});
	test("Empty object", () => {
		expect(
			isEmpty({})
		).toBeTruthy();
	});

	test("String variable", () => {
		expect(
			isEmpty('123')
		).toBeFalsy();
	});
	test("Number variable", () => {
		expect(
			isEmpty(123)
		).toBeFalsy();
	});
	test("Array with values", () => {
		expect(
			isEmpty(['lorem', 'ipsum'])
		).toBeFalsy();
	});
	test("Object with values", () => {
		expect(
			isEmpty({ lorem: 'ipsum' })
		).toBeFalsy();
	});

	test("Non existing HTML element", () => {
		expect(
			isEmpty(document.getElementById('not-here'))
		).toBeTruthy();
	});
	test("Existing HTML element", () => {
		expect(
			isEmpty(document.getElementById('here-i-am'))
		).toBeFalsy();
	});
	//TODO html element
});
