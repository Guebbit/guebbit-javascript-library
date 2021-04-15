export const setSource = function (element :Element) {
	let flag:boolean = false;
	if(element.hasAttribute("data-src")){
		element.setAttribute("src", (element.getAttribute("data-src") as string));
		element.removeAttribute("data-src");
		flag = true;
	}
	if(element.hasAttribute("data-srcset")){
		element.setAttribute("srcset", (element.getAttribute("data-srcset") as string));
		element.removeAttribute("data-srcset");
		flag = true;
	}
	return flag;
}

export const loadVideo = async function(video:HTMLVideoElement) :Promise<boolean> {
	// Sfruttiamo il metodo race
	return await Promise.race([
		// Creiamo la prima promise, che si risolve
		// in corrispondenza dell'evento video.canplaythrough
		new Promise((resolve) => {
			video.addEventListener('canplaythrough', () => {
				// can play
				resolve(true);
			});
		}),
		// Creiamo la seconda promise, che si risolve
		// dopo un tempo predefinito (2 secondi)
		new Promise((resolve) => {
			setTimeout(() => {
				//video timedout
				resolve(false);
			}, 5000);
		}),
	//vediamo quale promise "ha fatto prima"
	]).then(( play ) => {
		if(video.classList.contains('loaded'))
			return true;
		if (play as Boolean) {
			video.play();
			video.classList.add('loaded');
			return true;
		}
		// rimuovo i source (che non hanno caricato in tempo)
		(Array.from(video.children) as HTMLElement[]).forEach((child: HTMLElement) => {
			if (child.tagName === 'SOURCE' && typeof child.dataset.src !== 'undefined')
				child.parentNode!.removeChild(child);
			return true;
		});
		// Ricarico il video senza source, per resettarlo
		video.load();
		return false;
	});
 }






export const lazyloadHelperVideo = function(video:HTMLVideoElement){
	let children :any [];
	if(!!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2))
		return true;
	if(window.matchMedia('(prefers-reduced-motion)').matches)
		return false;
	children = Array.from(video.children);
	children.forEach(child => setSource(child));
	loadVideo(video);
	return true;
}

 export const lazyloadHelperImage = function(element:HTMLImageElement){
	 if(!setSource(element))
	 	return false;
	 element.onload = function() {
		 (this as HTMLElement).classList.add('loaded');
	 };
	 return true;
 }

 export const lazyloadHelperSource = function(element:HTMLSourceElement){
	if(!setSource(element))
		return false;
	try{
		//@ts-ignore (sto dentro un "try")
		element.parentNode.querySelector("img").onload = function() {
			(this as HTMLElement).classList.add('loaded');
		};
	}catch(e){
		// source has no img
		return false;
	}
	return true;
 }


export default function(element :HTMLElement | HTMLElement[] | NodeList | null) :void {
	let i:number;

	if(!element)
		return;
	if(element instanceof NodeList)
		element = Array.prototype.slice.call(element);
	if(!Array.isArray(element))
		element = [element];

	for(i = element.length; i--; )
		if(element[i])
			switch (element[i].tagName) {
				//se immagine
				case "IMG": lazyloadHelperImage(element[i] as HTMLImageElement);
				case "SOURCE": lazyloadHelperSource(element[i] as HTMLSourceElement);
				//case "PICTURE": non serve, funziona con "source"
				case "VIDEO": lazyloadHelperVideo(element[i] as HTMLVideoElement);
			}
}
