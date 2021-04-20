import intersectionHelper from "../components/DOM/helpers/intersection";

export default () :[ IntersectionObserver | false, IntersectionObserver | false ] => {
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
