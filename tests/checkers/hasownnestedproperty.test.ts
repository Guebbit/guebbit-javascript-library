//@ts-ignore
import { hasOwnNestedProperty } from 'index';

describe("(hasOwnNestedProperty) recursive hasOwnProperty", () => {
	let genericObject = {
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

	test("Sigle parameter (better use hasOwnProperty)", () => {
		expect(
			hasOwnNestedProperty(genericObject, 'lorem')
		).toBeTruthy();
	});
	test("Existing short chain of parameters", () => {
		expect(
			hasOwnNestedProperty(genericObject, 'dolor.sit')
		).toBeTruthy();
	});
	test("Existing long chain of parameters", () => {
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
