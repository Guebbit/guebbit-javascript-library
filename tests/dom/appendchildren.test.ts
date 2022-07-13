import { appendChildren } from '../../src';

describe("(appendChildren) javascript appendChild for arrays", () :void => {
	const span :HTMLSpanElement = document.createElement('span');
	span.textContent = "lorem ipsum";
	test("Short array", () => {
		const element = appendChildren(
			document.createElement('div'),
			span.cloneNode(true) as HTMLSpanElement,
			span.cloneNode(true) as HTMLSpanElement,
		);
		expect(
			element.innerHTML
		).toEqual("<span>lorem ipsum</span><span>lorem ipsum</span>")
	});
});
