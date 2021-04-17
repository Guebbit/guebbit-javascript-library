import { appendChildren } from '../../';

describe("(appendChildren) javascript appendChild for arrays", () => {
	let span :HTMLSpanElement = document.createElement('span');
	span.textContent = "lorem ipsum";
	test("Short array", () => {
		let element :any = appendChildren(
			document.createElement('div'),
			span.cloneNode(true) as HTMLSpanElement,
			span.cloneNode(true) as HTMLSpanElement,
		);
		expect(
			element.innerHTML
		).toEqual("<span>lorem ipsum</span><span>lorem ipsum</span>")
	});
});
