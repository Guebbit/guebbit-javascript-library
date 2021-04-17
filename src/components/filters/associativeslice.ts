/**
* 	slice associative arrays / objects
*	Funziona come array.slice() ma i numeri sono "immaginari", basati sull'ordine in cui sono stati inseriti
* 	@param object associative array / object to slice
*	@param integer start = start of slice
* 	@param integer endd = end of slice
* 	@return object sliced associative array / object to slice
**/
export default (obj :any, start :number, endd :number) :any => {
	let sliced :object = {},
		i :number = 0;
	for (let k in obj) {
		if(obj.hasOwnProperty(k)){
			if (i >= start && i < endd){
				sliced[k] = obj[k];
			}
			i++;
		}
	}
	return sliced;
}
