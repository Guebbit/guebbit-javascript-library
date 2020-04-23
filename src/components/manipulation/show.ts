import formatdom from "../manipulation/formatdom";

/**
* 	l'equivalente di $(element).hide()/.show() ma con display none
* 	@param HTMLElement element 	= elemento da manipolare
* 	@param object data 			= oggetto con i dati da compilare { id:{ column:value } }
*	@param object settings
**/

export default (element:HTMLElement[] | HTMLElement, timer:number=500, display:string = "block") => {
	let i:number;

	element = formatdom(element) as HTMLElement[];
	if(!element)
		return false;

	for(i = element.length; i--; ){
		element[i].style.opacity = "0";
		element[i].style.display = display;
		element[i].style.transition = "opacity "+(Math.round((timer/1000)*1000)/1000)+"s";
		element[i].style.opacity = "1";
	}
	setTimeout(function() {
		for(i = (element as HTMLElement[]).length; i--; ){
			element[i].style.removeProperty('transition');
			element[i].style.removeProperty('opacity');
		}
	}, timer);
}
