/**
* 	Creo un id univoco così complicato che la collisione è impossibile
*	[ECMAScript 6] random v4 UUID (gxxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx)
*	(per motivi di compatibilità, nella creazione di ID, non deve iniziare con un numero)
*	@return string random id
**/
export default () => {
	// @ts-ignore
	return "g"+([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
};
