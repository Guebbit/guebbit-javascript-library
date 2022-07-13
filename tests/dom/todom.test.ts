import { toDOM } from '../../src';

describe("(toDOM) transform string in DocumentFragment", () => {
	test("String to HTMLElement", () => {
		const element :NodeListOf<ChildNode> = toDOM('<ul><li>Lorem</li><li>Ipsum</li></ul><div>Lorem Ipsum</div>');
		expect(
			element instanceof NodeList && element[0] instanceof HTMLUListElement && element[1] instanceof HTMLDivElement
		).toBeTruthy()
	});
});
