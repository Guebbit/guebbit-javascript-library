export const formatNodeList = (elementsArray :HTMLElement | HTMLElement[] | NodeList | HTMLCollection | null) :HTMLElement[] => {
	if(!elementsArray)
		return [];
	if(elementsArray instanceof NodeList)
		elementsArray = Array.prototype.slice.call(elementsArray);
	if(!Array.isArray(elementsArray))
		elementsArray = [(elementsArray as HTMLElement)];
	return elementsArray;
}
