/**
*	valore e testo di un'opzione
*	@param HTMLElement element
*	@return array of strings
**/
export default (element:HTMLSelectElement) => {
	return [
		element.options[element.selectedIndex].value,
		element.options[element.selectedIndex].text
	];
}
