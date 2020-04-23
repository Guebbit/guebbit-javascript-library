/**
*	Ottengo il documento interno di un iframe
*	@param HTMLElement iframe
*	@return HTMLElement
**/
export default (iframe:HTMLIFrameElement): HTMLElement | boolean => {
	if(!iframe.contentWindow)
		return false;
	return iframe.contentWindow!.document.body;
}
