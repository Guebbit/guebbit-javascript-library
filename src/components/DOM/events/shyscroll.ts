import { throttle, merge } from "lodash";


interface settingsMap{
	top? :number | string,
	scroll_top? :number,
	margin? :number,
	class? :string,
};


/**
* 	sticky header che si mostra o nasconde in base allo scroll (necessita di "transition: top 0.1s")
* 	@param HTMLElement element 	= il fixed nav da spostare
*	@param object settings
**/
export default (element :HTMLElement, settings :settingsMap = {} ) => {
	let lastScrollY :number = 0,
		scrollY :number;

	if(!element)
		return false;

	settings = merge({
		"top": "auto",					// di quanto "tornare su"
		"scroll_top": 100,				// dopo quanto scroll attivare l'effetto (esempio: a 300px a partire dall'alto)
		"margin": 0,					// di quanto deve essere cambiato il margine prima di attivarsi
		"class": "",					// classe da applicare quando effettuo lo scroll
	}, settings);
	// "auto" + "class vuota" = l'altezza dell'header
	// "auto" + "class non vuota" = 0
	if(settings.top === "auto")
		if(settings.class === "")
			settings.top = element.offsetHeight + 1;
		else
			settings.top = 0;

	window.addEventListener('scroll', throttle(function(){
		if(getComputedStyle(element).position !== "fixed")
			return false;
		scrollY = window.scrollY;
		if(scrollY >= lastScrollY + settings.margin!){
			//nascondo se non è all'inizio della pagina (almeno 50px)
			if(scrollY >= settings.scroll_top!){
				if(settings.top != 0)
					element.style.top = -settings.top! + "px";
				if(settings.class != '')
					element.classList.add(settings.class!);
			}
		}else{
			if(settings.top != 0)
				element.style.top = "0px";
			if(settings.class != '')
				element.classList.remove(settings.class!);
		}
		lastScrollY=scrollY;
	}, 10));
};
