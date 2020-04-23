/**
* 	shallow copy
*	clone/copia di un oggetto
*	per evitare di passarlo tramite reference
**/
export default (obj:object) => {
	return Object.assign({}, obj);
}
