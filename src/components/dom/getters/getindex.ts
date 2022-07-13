/**
* 	equivalente Jquery di .index()
* 	@param HTMLelement element
* 	@param HTMLelement parent
* 	@return mixed ultimo elemento dell'array
**/
export default (element :HTMLElement | null) :number => {
	if(!element)
		return -1;
	const parent :HTMLElement | null = element.parentElement;
	if(!parent)
		return -1;
	return Array.from(parent.children).indexOf(element);
}
