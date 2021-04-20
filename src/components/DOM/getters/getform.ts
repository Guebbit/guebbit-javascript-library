import getValue from "./getvalue";
import { formatNodeList } from "../../_helpers";

/**
*	Raccolgo tutti i valori inseriti in input e textarea dentro l'elemento
*	@param HTMLElement elemente
*	@param string selectors
*	@return array ["name":"value"]
**/
export default (form :HTMLElement | null, selectors = "input, textarea, select") :Record<string, unknown> => {
	if(!form)
		return {};
	let i :number,
		temp :string | null;

	const results :Record<string, unknown> = {},
		elementsArray = formatNodeList(form.querySelectorAll(selectors));

	for (i = elementsArray.length; i--; ){
		temp = (elementsArray[i] as HTMLElement).getAttribute("name");
		if(temp)
			results[temp] = getValue(elementsArray[i] as HTMLElement);
	}
	return results;
}
