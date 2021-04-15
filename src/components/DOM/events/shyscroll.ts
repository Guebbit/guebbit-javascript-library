import { throttle } from "lodash";


interface settingsMap{
	// di quanto "tornare su"
	top? :number | string,
	// dopo quanto scroll attivare l'effetto (esempio: a 300px a partire dall'alto)
	scroll? :number,
	// di quanto deve essere cambiato il margine prima di attivarsi
	margin? :number,
	// ALTERNATIVA: classe da applicare quando effettuo lo scroll, a sostituzione della modifica dello style.top
	class? :string,
};


/**
* 	sticky header che si mostra o nasconde in base allo scroll (necessita di "transition: top 0.1s")
* 	@param HTMLElement element 	= il fixed nav da spostare
*	@param object settings
**/
export default (element :HTMLElement | null, settings :settingsMap = {} ) => {
	if(!element)
		return false;

	let lastScrollY :number = 0,
		scrollY :number,
		mytop :number;
	const {
		top = "auto",
		scroll = 100,
		margin = 0,
		class: myclass = "",
	} = settings;

	// "auto" + "class vuota" = l'altezza dell'header
	// "auto" + "class non vuota" = 0
	if(top === "auto")
		if(myclass === "")
			mytop = element.offsetHeight + 1;
		else
			mytop = 0;

	window.addEventListener('scroll', throttle(function(){
		if(getComputedStyle(element).position !== "fixed")
			return false;
		scrollY = window.scrollY;
		if(scrollY >= lastScrollY + margin){
			//nascondo se non è all'inizio della pagina (almeno 50px)
			if(scrollY >= scroll!){
				if(mytop != 0)
					element.style.top = -mytop + "px";
				if(myclass != '')
					element.classList.add(myclass!);
			}
		}else{
			if(mytop != 0)
				element.style.top = "0px";
			if(myclass != '')
				element.classList.remove(myclass!);
		}
		lastScrollY=scrollY;
	}, 10));
};
