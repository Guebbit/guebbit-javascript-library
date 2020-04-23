/**
* 	slice associative arrays / objects
*	Non si tratta di un array classico. I numeri sono "immaginari", ordinati in base a come è stato ordinato l'associative array (???)
* 	@param object associative array / object to slice
*	@param integer start = start of slice
* 	@param integer endd = end of slice
* 	@return object sliced associative array / object to slice
**/
export default (obj:object, start:number, endd:number):object => {
	var sliced = {},
		i = 0;
	for (var k in obj) {
		if(obj.hasOwnProperty(k)){
			if (i >= start && i < endd){
				sliced[k] = obj[k];
			}
			i++;
		}
	}
	return sliced;
}
