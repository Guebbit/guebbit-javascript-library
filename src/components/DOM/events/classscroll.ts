import { throttle } from "lodash";

interface dataMap{
	name:string,
	scroll_top:number,
	remove:boolean,
};

/**
*	Classi che aggiungo (o rimuovo) ad un certo scrollY
* 	@param HTMLElement[] element 	= l'elemento a cui applicare le classi a seconda della posizione
*	@param array data				= array di oggetti
	[{
		name: "test",		//a 400px aggiungo la classe test
		scroll_top: 400,
		remove: true		//se remove=true (false di default), invece la rimuovo
	}]
**/
export default (element:HTMLElement[] | HTMLElement, data:dataMap[]) => {
	if(!element)
		return false;

	window.addEventListener('scroll', throttle(function(){
		let i:number, k:number;
		//per ogni elemento
		for(k = 0; k < (element as HTMLElement[]).length; k++){
			//per ogni opzione
			for(i = 0; i < data.length; i++){
				if((data[i].remove || false ) === false ){
					//add on scrolling, oltre una certa soglia aggiungo la classe
					if(window.scrollY > (data[i].scroll_top || 0 )){
						element[k].classList.add(data[i].name);
					}else{
						element[k].classList.remove(data[i].name);
					}
				}else{
					//remove on scrolling, oltre una certa soglia rimuovo la classe
					if(window.scrollY > (data[i].scroll_top || 0)){
						element[k].classList.remove(data[i].name);
					}else{
						element[k].classList.add(data[i].name);
					}
				}
			}
		}
	}, 10));
};
