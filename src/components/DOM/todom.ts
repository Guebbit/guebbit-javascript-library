/**
* 	Trasforma una stringa in un elemento
* 	@param {String} string to convert
* 	@return {NodeListOf<ChildNode>} HTML converted
**/
export default (html :string) :NodeListOf<ChildNode> => {
	const template = document.createElement('template');
	template.innerHTML = html.trim();
	return template.content.childNodes;
}
