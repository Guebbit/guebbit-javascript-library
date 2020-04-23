import formatDOM from "../manipulation/formatdom";

/**
* 	javascript appendChild for arrays
* 	@param HTMLElement (singolo)
*	@param array of HTMLElements
**/
export default (element:HTMLElement, ...children:HTMLElement[]) => {
	const documentFragment = document.createDocumentFragment();
	children.forEach(child => {
		if (Array.isArray(child)) {
			//TODO recursion?
			child.forEach(child => documentFragment.appendChild(child))
		} else {
			documentFragment.appendChild(child);
		}
	});
	formatDOM(element)[0].appendChild(documentFragment);
	return true;
}
