import { merge, throttle } from "lodash";


interface settingsMap{
	top?:number,
	scroll_top?:number,
	margin?:number,
};


/**
* 	sticky header che si mostra o nasconde in base allo scroll (necessita di "transition: top 0.1s")
* 	@param HTMLElement element 	= il fixed nav da spostare
*	@param object settings
**/
export default (element:HTMLElement, settings:settingsMap={}) => {
	if(!element)
		return false;

	settings = merge({
		top: element.offsetHeight+1,	//di quanto "tornare su". Se non specificato è l'altezza dell'header
		scroll_top: 100,				//dopo quanto attivare l'effetto
		margin: 0						//di quanto deve essere cambiato il margine prima di attivarsi
	}, settings);
	let lastScrollY:number = 0,
		scrollY:number;

	window.addEventListener('scroll', throttle(function(){
		if(getComputedStyle(element).position !== "fixed")
			return false;
		scrollY = window.scrollY;
		if(scrollY >= lastScrollY + settings.margin!){
			//nascondo se non è all'inizio della pagina (almeno 50px)
			if(scrollY >= settings.scroll_top!)
				element.style.top = -settings.top! + "px";
		}else{
			element.style.top = "0px";
		}
		lastScrollY=scrollY;
	}, 10));
};
