/**
* 	equivalente Jquery di .on()
* 	@param HTMLelement parent
* 	@param string eventName = click, mousehover, etc
* 	@param string childSelector = selector / this
* 	@param function callback
* 	@return addEventListener
**/
export default function addEvent (parent:Node, eventName:string, childSelector:string | Node, callback:(...args: any[]) => void) {
	return parent.addEventListener(eventName, function(event:Event){
		const clickedElement = event.target;
		let matchingChild:Element | Boolean = false;

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
