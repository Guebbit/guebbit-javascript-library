import { getUUID } from '../../';

describe("(getUUID) random v4 UUID (gxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx)", () => {
	test("Regular Object", () => {
	    expect(getUUID()).toBeTruthy();  //TODO .toMatch(/gxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx/);
	});
});
