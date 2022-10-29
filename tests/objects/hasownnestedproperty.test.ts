import { hasOwnNestedProperty } from '../../src';

describe("(hasOwnNestedProperty) recursive hasOwnProperty", () => {
	const genericObject = {
		lorem: 'ipsum',
		dolor: {
			sit: 'consectetur',
			adipiscing:{
				elit: {
					sed: {
						do: 'eiusmod'
					}
				}
			}
		}
	};

	test("Single parameter (better use hasOwnProperty)", () => {
		expect(
			hasOwnNestedProperty(genericObject, 'lorem')
		).toBeTruthy();
	});
	test("Empty object + array parameters", () => {
		expect(
			hasOwnNestedProperty(genericObject, ["dolor", "adipiscing", "elit", "sed", "do"])
		).toBeTruthy();
	});
	test("Empty object + string parameter", () => {
		expect(
			hasOwnNestedProperty(genericObject, 'dolor.adipiscing.elit.sed.do')
		).toBeTruthy();
	});
	test("Non Existing chain of parameters", () => {
		expect(
			hasOwnNestedProperty(genericObject, 'lorem.dolor')
		).toBeFalsy();
	});
});
