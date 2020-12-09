/**
*	Ottengo il documento interno di un iframe
*	@param HTMLElement iframe
*	@return HTMLElement
**/
export default (iframe :HTMLElement | HTMLIFrameElement | null) :HTMLElement | HTMLBodyElement | null => {
	if(!iframe || iframe.tagName !== 'IFRAME')
		return null;
	if(!(iframe as HTMLIFrameElement).contentWindow)
		return null;
	return (iframe as HTMLIFrameElement).contentWindow!.document.body;
}
