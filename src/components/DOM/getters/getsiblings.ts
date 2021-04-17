/**
* 	equivalente Jquery di .siblings()
* 	@param HTMLelement element of which we find siblings
* 	@return array of siblings
**/
export default (element: HTMLElement | Element | null) :Element[] => {
	if(!element)
		return [];
	const { children } :HTMLElement = element.parentNode as HTMLElement;
	return [...children].filter(child => child !== element);
}
