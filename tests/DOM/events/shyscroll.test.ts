import { shyScroll } from '../../..//';

describe("(shyScroll) standard mobile header that show or hides based on the user scroll", () => {
	test("MANUAL CHECK via 'npm run serve', use /index.html and /tests/index.ts", () => {
		expect(shyScroll).toBeTruthy();
	});
});
