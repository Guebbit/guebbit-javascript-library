/**
* 	Trasforma una stringa in un elemento
* 	@param string
* 	@return HTMLElement
**/
export default (string:string) => {
	const temp = document.createElement('template');
	temp.innerHTML = string.trim();
	return temp.content;
}
