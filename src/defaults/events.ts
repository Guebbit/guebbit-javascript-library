/* Fermo la navigazione (tipo backbutton) */
export const noBack = function(){
	history.pushState({}, "", "#");
	history.pushState({}, "", "#");
	window.onpopstate = function(){
		history.pushState({}, "", "#");
	};
}
