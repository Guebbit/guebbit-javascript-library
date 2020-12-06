import formatDOM from "../DOM/formatdom";
import getValue from "./getvalue";

/**
*	Raccolgo tutti i valori inseriti in input e textarea dentro l'elemento
*	@param HTMLElement elemente
*	@param string selectors
*	@return array ["name":"value"]
**/
export default (element:HTMLElement | HTMLElement[], selectors:string = "input, textarea, select") => {
	let i:number,
		len:number,
		i2:number,
		len2:number,
		temp:string | null,
		results:object = {},
		elements:NodeList;

	element = formatDOM(element);

	for (i=0, len=element.length; i < len; i++){
		elements = element[i].querySelectorAll(selectors);
		for (i2=0, len2 = elements.length; i2 < len2; i2++){
			temp = (elements[i2] as HTMLElement).getAttribute("name");
			if(temp)
				results[temp] = getValue(elements[i2] as HTMLElement);
		}
	}
	return results;
}
