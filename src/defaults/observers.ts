import intersectionHelper from "../components/helpers/intersection";
import lazyloadHelper from "../components/helpers/lazyload";


export const lazyload = function(){
	document.querySelectorAll('.lazyload-forced').forEach(
		(element) => lazyloadHelper(element as HTMLElement)
	);
	return intersectionHelper(document.querySelectorAll('[data-src]:not(.lazyload-forced), [data-srcset]:not(.lazyload-forced), .lazyload-me'),{
		rootMargin: '500px 0px',	//carica l'immagine 500px prima che entri nel viewport (100px sull'asse Y)
		single: true,				// lazyload è one-hit quindi fermo l'observer specifico di questa immagine appena ha fatto
		intersectingCallback: function(entry){
			return lazyloadHelper(entry as HTMLElement);
		}
	});
}


export const activator = function(){
	return [

		intersectionHelper(document.querySelectorAll('.observer-activate'),{
			threshold: 1,
			intersectingCallback: function(entry){
				//se è solo mobile
				if(entry.classList.contains("observer-mobile-only") && !window.matchMedia("(max-width: 600px)").matches)
					return false;
				//intersezione
				entry.classList.add("active");
				return true;
			},
			notIntersectingCallback: function(entry){
				//se è solo mobile
				if(entry.classList.contains("observer-mobile-only") && !window.matchMedia("(max-width: 600px)").matches)
					return false;
				//fine intersezione
				entry.classList.remove("active");
				return true;
			}
		}),

		intersectionHelper(document.querySelectorAll('.observer-activate-once'),{
			threshold: 1,
			intersectingCallback: function(entry){
				if(entry.classList.contains("observer-mobile-only") && !window.matchMedia("(max-width: 600px)").matches)
					return false;
				entry.classList.add("active");
				return true;
			},
		})

	];

}
