/**
* 	equivalente Jquery di .index()
* 	@param HTMLelement element
* 	@param HTMLelement parent
* 	@return mixed ultimo elemento dell'array
**/
export default (element :HTMLElement | null) :number => {
	let parent :HTMLElement | null;
	if(!element)
		return -1;
	parent = element.parentElement;
	if(!parent)
		return -1;
	return Array.from(parent.children).indexOf(element);
}
