import { lazyloadHelper } from '../../../src';

describe("(lazyloadHelper) helper to automate Observer lazyload operations", () => {
	test("MANUAL CHECK via 'npm run serve', use /index.html and /tests/index.ts", () => {
		expect(lazyloadHelper).toBeTruthy();
	});
});
