/**
* 	equivalente Jquery di .index()
* 	@param HTMLelement element
* 	@param HTMLelement parent
* 	@return mixed ultimo elemento dell'array
**/
export default (element:HTMLElement, parent:Boolean | HTMLElement = false) => {
	if(!parent)
		parent = element.parentElement!;
	return Array.from((parent as HTMLElement).children).indexOf(element);
}
