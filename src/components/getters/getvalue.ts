/**
*	Ottieni valore\contenuto di un elemento (singolo)
*	@param HTMLElement element
*	@param string where: default false, raccolgo il dato normalmente.
*				Se specificato, è l'attributo da cui raccogliere i dati.
*	@return string
**/
export default (element:HTMLElement, where:string | boolean=false) => {
	if(where)
		return element.getAttribute(where as string);
	return (element as HTMLInputElement).value || element.innerText || element.textContent;
}
