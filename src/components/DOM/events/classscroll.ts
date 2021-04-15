import { throttle } from "lodash";

interface dataMap {
	class :string,
	scroll :number,
	remove? :boolean,
};

/**
*	Classi che aggiungo (o rimuovo) ad un certo scrollY
* 	@param HTMLElement[] element 	= l'elemento a cui applicare le classi a seconda della posizione
*	@param array data				= array di oggetti
	[{
		class: "test",		//a 400px aggiungo la classe test
		scroll: 400,
		remove: true		//se remove=true (false di default), invece la rimuovo
	}]
**/
export default (element :HTMLElement[] | HTMLElement | null, data :dataMap[]) => {
	if(!element)
		return false;
	if(!Array.isArray(element))
		element = [element];

	window.addEventListener('scroll', throttle(function(){
		let i:number, k:number;
		//per ogni elemento
		for(k = (element as HTMLElement[]).length; k--; ){
			if(!element![k])
				continue;
			//per ogni opzione
			for(i = data.length; i--; ){
				//se remove non è specificato, allora è false
				if((data[i].remove || false ) === false ){
					//add on scrolling, oltre una certa soglia aggiungo la classe
					if(window.scrollY > (data[i].scroll || 0 )){
						element![k].classList.add(data[i].class);
					}else{
						element![k].classList.remove(data[i].class);
					}
				}else{
					//remove on scrolling, oltre una certa soglia rimuovo la classe
					if(window.scrollY > (data[i].scroll || 0)){
						element![k].classList.remove(data[i].class);
					}else{
						element![k].classList.add(data[i].class);
					}
				}
			}
		}
	}, 10));
};
