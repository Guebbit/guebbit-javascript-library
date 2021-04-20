/**
* 	javascript appendChild for arrays
* 	@param HTMLElement (singolo)
*	@param array of HTMLElements
**/
export default (element :HTMLElement, ...children :HTMLElement[] | Element[]) :HTMLElement => {
	const documentFragment = document.createDocumentFragment();
	children.forEach(child => {
		if (Array.isArray(child))
			child.forEach(child => documentFragment.appendChild(child))
		else
			documentFragment.appendChild(child);
	});
	element.appendChild(documentFragment);
	return element;
}
