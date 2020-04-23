/**
* 	deep copy
*	clone/copia precisa a tutti i layer di un oggetto
*	per evitare di passarlo tramite reference
**/
const deepCopy = (obj:object) => {
	let clone:object = {};
	for(let i in obj) {
		if(obj[i] != null && typeof(obj[i]) == "object")
			clone[i] = deepCopy(obj[i]);
		else
			clone[i] = obj[i];
	}
	return clone;
}

export default deepCopy;
