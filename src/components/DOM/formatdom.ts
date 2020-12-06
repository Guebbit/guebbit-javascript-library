/**
* 	Trasforma un qualsiasi elemento javascript o jquery in un array di elementi javascript
* 	@param HTMLElement
* 	@return array HTMLElement
**/
export default (element:HTMLElement |  HTMLElement[] | HTMLCollection | Node | NodeList):HTMLElement[] => {
	if(element == null || !element || (element as HTMLCollection).length < 1)
		return [];
	//se è jquery, lo traduco in javascript
	// @ts-ignore
	if (!!window.jQuery && element instanceof jQuery) {
		// @ts-ignore
		return element.toArray();
	}
	//lo trasformo in un array da 1 singolo, per compatibilità
	if(element instanceof HTMLElement){
		return [element];
	}
	return element as HTMLElement[];
}
