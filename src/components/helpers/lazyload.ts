export const setSource = function (element:Element) {
	let flag:boolean = false;
	if(element.hasAttribute("data-srcset")){
		element.setAttribute("srcset", (element.getAttribute("data-srcset") as string));
		flag = true;
	}
	if(element.hasAttribute("data-src")){
		element.setAttribute("src", (element.getAttribute("data-src") as string));
		flag = true;
	}
	return flag;
}

export const loadVideo = async function(video:HTMLVideoElement) {
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
	if(window.matchMedia('(prefers-reduced-motion)').matches)
		return false;
	let children = Array.from(video.children);
	children.forEach(child => setSource(child));
	video.load();
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


export default function(element:HTMLElement){
	switch (element.tagName) {
		//se immagine
		case "IMG": return lazyloadHelperImage(element as HTMLImageElement);
		case "SOURCE": return lazyloadHelperSource(element as HTMLSourceElement);
		//case "PICTURE": non serve, funziona con "source"
		case "VIDEO": return lazyloadHelperVideo(element as HTMLVideoElement);
	}
	return false;
}
