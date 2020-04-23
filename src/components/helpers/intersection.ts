import extend from "../main/extend";

interface settingsMap{
	single?:boolean,
	root?:any,
	rootMargin?:string,
	threshold?:number,
	intersectingCallback?:(el:Element)=>boolean,
	notIntersectingCallback?:(el:Element)=>boolean
};

/**
* 	IntersectionObserver helper, per programmarlo meglio
* 	@param HTMLElement el 	= elemento da osservare
*	@param object settings
**/
export default (element:NodeListOf<Element>, settings:settingsMap = {}) => {
	let i:number;

	settings = extend({
		single: false,
		root: null,
		rootMargin: "0px",
		threshold: 0,
		intersectingCallback: false,
		notIntersectingCallback: false
	}, settings);

	//controllo che esista l'observer helper
	//@ts-ignore
	if(!"IntersectionObserver" in window){
		element.forEach(function(el){
			if(settings.intersectingCallback)
				settings.intersectingCallback(el);
		});
		return false;
	}

	let observer:IntersectionObserver = new IntersectionObserver(
		//(entries:IntersectionObserverEntry[], self:IntersectionObserver) => {
		(entries, self) => {
			for(i = entries.length; i--; ){
				if(entries[i].isIntersecting){
					// Interrompo i monouso quando hanno successo la 1° volta
					if(settings.intersectingCallback && settings.intersectingCallback(entries[i].target) && settings.single)
						self.unobserve(entries[i].target);
				}else{
					//NON sta intersecando
					if(settings.notIntersectingCallback)
						settings.notIntersectingCallback(entries[i].target);
				}
			}
		}, settings);

	for(i = element.length; i--; )
		observer.observe(element[i]);

	return observer;
};
