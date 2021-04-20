import { intersectionHelper, lazyloadHelper } from '../../src';

// ----------- LAZYLOAD -----------
intersectionHelper(document.querySelectorAll('[data-src]:not(.lazyload-forced), [data-srcset]:not(.lazyload-forced), .lazyload-me'),{
	rootMargin: '0px 0px',	// 500px 0px per il lazyload serio
	single: true,			// lazyload è one-hit quindi fermo l'observer specifico di questa immagine appena ha fatto
	threshold: 1,			// 0 (default) in lazyload serio
	intersectingCallback: function(entry :HTMLElement){
		return lazyloadHelper(entry);
	}
});


// ----------- INTERSECTION -----------
intersectionHelper(document.querySelectorAll('#am-i-visible'),{						//document.getElementById('am-i-visible')
	rootMargin: '-300px 0px',
	threshold: 1,
	intersectingCallback: function(entry :HTMLElement){
		entry.classList.add("in-the-middle");
		return true;
	},
	notIntersectingCallback: function(entry :HTMLElement){
		entry.classList.remove("in-the-middle");
		return true;
	}
});
