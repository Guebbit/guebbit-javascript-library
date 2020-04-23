/**
* 	clone/copia di un oggetto
*	per evitare di passarlo tramite reference
**/
export const shallowCopy = (obj:object) => {
	return Object.assign({}, obj);
}

export const deepCopy = (obj:any) => {
	let clone:any = {};
	for(let i in obj) {
		if(obj[i] != null && typeof(obj[i]) == "object")
			clone[i] = deepCopy(obj[i]);
		else
			clone[i] = obj[i];
	}
	return clone;
}
