interface settingsMap{
	single? :boolean,
	root? :any,
	rootMargin? :string,
	threshold? :number,
	intersectingCallback? :(el:Element) => void,
	notIntersectingCallback? :(el:Element) => void
};

/**
* 	IntersectionObserver helper, per programmarlo meglio
* 	@param HTMLElement el 	= elemento da osservare
*	@param object settings
**/
export default (element :HTMLElement | HTMLElement[] | NodeList | null, settings :settingsMap = {}) :IntersectionObserver | false => {	//:NodeListOf<Element>
	let i:number;

	if(!element)
		return false;
	if(element instanceof NodeList)
		element = Array.prototype.slice.call(element);
	if(!Array.isArray(element))
		element = [element];

	const {
		single = false,
		root = null,
		rootMargin = "0px",
		threshold = 0,
		intersectingCallback = false,
		notIntersectingCallback = false
	} = settings;


	//FALLBACK nel caso non esista l'IntersectionObserver
	//@ts-ignore
	if(!"IntersectionObserver" in window){
		for(i = element.length; i--; )
			if(intersectingCallback)
				intersectingCallback(element[i]);
		return false;
	}

	let observer :IntersectionObserver = new IntersectionObserver(
		(entries:IntersectionObserverEntry[], self:IntersectionObserver) => {
			for(i = entries.length; i--; ){
				if(entries[i].isIntersecting){
					// Interrompo i monouso quando hanno successo la 1° volta
					if(intersectingCallback && intersectingCallback(entries[i].target) && single)
						self.unobserve(entries[i].target);
				}else{
					//NON sta intersecando
					if(notIntersectingCallback)
						notIntersectingCallback(entries[i].target);
				}
			}
		}, {
			root,
			rootMargin,
			threshold,
		});

	for(i = element.length; i--; )
		if(element[i])
			observer.observe(element[i] as HTMLElement);

	return observer;
};
