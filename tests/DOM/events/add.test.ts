import { addEvent } from '../../../';

describe("(addEvent) Like Jquery add event", () => {
	test("MANUAL CHECK via 'npm run serve', use /index.html and /tests/index.ts", () => {
		expect(addEvent).toBeTruthy();
	});
});
