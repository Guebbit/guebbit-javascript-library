export interface classscrollSettingsMap {
    class: string;
    scroll: number;
    remove?: boolean;
}
declare const _default: (element: HTMLElement | HTMLElement[] | NodeList | HTMLCollection | null, data: classscrollSettingsMap[], $window?: Window) => void;
/**
*	Classi che aggiungo (o rimuovo) ad un certo scrollY
* @param {HTMLElement[]} element 	= l'elemento a cui applicare le classi a seconda della posizione
*	@param {Array} data				= array di oggetti
*	@param {Window} $window
    [{
        class: "test",		//a 400px aggiungo la classe test
        scroll: 400,
        remove: true		//se remove=true (false di default), invece la rimuovo
    }]
**/
export default _default;
//# sourceMappingURL=classscroll.d.ts.map