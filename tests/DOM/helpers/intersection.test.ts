import { intersectionHelper } from '../../../src/';

describe("(intersectionHelper) helper to automate Observer intersecate detection (when something is on screen most of the time)", () => {
	test("MANUAL CHECK via 'npm run serve', use /index.html and /tests/index.ts", () => {
		expect(intersectionHelper).toBeTruthy();
	});
});
