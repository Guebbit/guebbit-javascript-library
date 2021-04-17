import { lazyloadHelper, intersectionHelper } from "../";


export default () => {
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
