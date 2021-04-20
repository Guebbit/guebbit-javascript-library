/**
* 	equivalente Jquery di .on()
* 	@param HTMLelement parent
* 	@param string eventName = click, mousehover, etc
* 	@param string childSelector = selector / this
* 	@param function callback
* 	@return addEventListener
**/
export default (parent:Node, eventName:string, childSelector:string | Node, callback:(...args: unknown[]) => void) :void => {
	return parent.addEventListener(eventName, function(event:Event){
		const clickedElement = event.target;
		let matchingChild:Element | undefined;

		//stringa = closest
		if(typeof childSelector === "string")
			matchingChild = (clickedElement as Element).closest(childSelector as string)!;
		else
		//elemento = equiparazione
			if(childSelector.contains(clickedElement as Element))
				matchingChild = clickedElement as Element;

		if(matchingChild)
			callback.call(matchingChild, event); //pass as this
	});
}
