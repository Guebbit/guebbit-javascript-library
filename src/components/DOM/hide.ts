import formatdom from "./formatdom";

/**
* 	l'equivalente di $(element).hide()/.show() ma con display none
* 	@param HTMLElement element 	= elemento da manipolare
* 	@param object data 			= oggetto con i dati da compilare { id:{ column:value } }
*	@param object settings
**/

export default (element: HTMLElement | HTMLElement[], timer:number=500) => {
	let i:number;

	element = formatdom(element);
	if(!element)
		return false;

	for(i = element.length; i--; ){
		element[i].style.transition = "opacity " + (Math.round((timer/1000)*1000)/1000)+"s";
		element[i].style.opacity = "0";
	}
	setTimeout(function() {
		for(i = (element as HTMLElement[]).length; i--; ){
			element[i].style.display = "none";
			element[i].style.removeProperty('transition');
			element[i].style.removeProperty('opacity');
		}
	}, timer);
}
