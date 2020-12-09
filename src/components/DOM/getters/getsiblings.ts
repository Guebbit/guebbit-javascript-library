/**
* 	equivalente Jquery di .siblings()
* 	@param HTMLelement element of which we find siblings
* 	@return array of siblings
**/
export default (element: HTMLElement | Element | null) :Element[] => {
	if(!element)
		return [];
	return [...element.parentNode!.children].filter(child => child !== element);
}
