import getValue from "./getvalue";

/**
*	Raccolgo tutti i valori inseriti in input e textarea dentro l'elemento
*	@param HTMLElement elemente
*	@param string selectors
*	@return array ["name":"value"]
**/
export default (form:HTMLElement | null, selectors:string = "input, textarea, select") => {
	let i :number,
		temp :string | null,
		elements :NodeList,
		results :object = {};

	if(!form)
		return [];
	elements = form.querySelectorAll(selectors);
	for (i = elements.length; i--; ){
		temp = (elements[i] as HTMLElement).getAttribute("name");
		if(temp)
			results[temp] = getValue(elements[i] as HTMLElement);
	}
	return results;
}
