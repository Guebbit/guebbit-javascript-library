/**
*	Ottieni valore\contenuto di un elemento (singolo)
*	@param HTMLElement {element}
*	@param string {attribute}: if not empty, it's an attribute, where to take the data
*	@return string
**/
export default (element :HTMLElement | null, attribute = '') :string | number | boolean | null => {
	//if non valid element
	if(!element)
		return null;
	//if it's attribute
	if(attribute.length > 0)
		return element.getAttribute(attribute);
	//if its checkbox\radiobutton
	if((element as HTMLInputElement).type === 'checkbox')
		return (element as HTMLInputElement).checked;
	if((element as HTMLInputElement).type === 'radio'){
		const { parentElement } = element;
		if(!parentElement)
			return null;
		return (parentElement.querySelector('input[name="'+element.getAttribute('name')+'"]:checked') as HTMLInputElement).value;
	}
	return (element as HTMLInputElement | HTMLSelectElement).value || element.innerText || element.textContent;
}
