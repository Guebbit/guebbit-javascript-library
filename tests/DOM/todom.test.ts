//@ts-ignore
import { toDOM } from 'index';

describe("(toDOM) transform string in DocumentFragment", () => {
	test("String to HTMLElement", () => {
		let element :NodeListOf<ChildNode> = toDOM('<ul><li>Lorem</li><li>Ipsum</li></ul><div>Lorem Ipsum</div>');
		expect(
			element instanceof NodeList && element[0] instanceof HTMLUListElement && element[1] instanceof HTMLDivElement
		).toBeTruthy()
	});
});
