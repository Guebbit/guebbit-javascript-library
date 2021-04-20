import { formatNodeList } from "../../_helpers";

export interface intersectionSettingsMap {
	single? :boolean,
	root? :Element,
	rootMargin? :string,
	threshold? :number,
	intersectingCallback? :(el:Element) => void,
	notIntersectingCallback? :(el:Element) => void
}

/**
* 	IntersectionObserver helper, per programmarlo meglio
* 	@param HTMLElement el 	= elemento da osservare
*	@param object settings
**/
export default (element :HTMLElement | HTMLElement[] | NodeList | HTMLCollection | null, settings :intersectionSettingsMap = {}) :IntersectionObserver | false => {	//:NodeListOf<Element>
	let i:number;
	const {
			single = false,
			root = null,
			rootMargin = "0px",
			threshold = 0,
			intersectingCallback = false,
			notIntersectingCallback = false
		} = settings,
		elementsArray = formatNodeList(element);

	//FALLBACK nel caso non esista l'IntersectionObserver
	if(!("IntersectionObserver" in window)){
		for(i = elementsArray.length; i--; )
			if(intersectingCallback && elementsArray[i])
				intersectingCallback(elementsArray[i]!);
		return false;
	}

	const observer :IntersectionObserver = new IntersectionObserver(
		(entries:IntersectionObserverEntry[], self:IntersectionObserver) => {
			for(i = entries.length; i--; ){
				if(!entries[i])
					continue;
				const { target, isIntersecting } = entries[i]!;
				if(isIntersecting){
					// Interrompo i monouso quando hanno successo la 1° volta
					if(intersectingCallback && intersectingCallback(target) && single)
						self.unobserve(target);
				}else{
					//NON sta intersecando
					if(notIntersectingCallback)
						notIntersectingCallback(target);
				}
			}
		}, {
			root,
			rootMargin,
			threshold,
		});

	for(i = elementsArray.length; i--; )
		if(elementsArray[i])
			observer.observe(elementsArray[i]!);

	return observer;
};
