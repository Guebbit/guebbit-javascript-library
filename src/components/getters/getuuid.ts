/**
* 	Creo un id univoco così complicato che la collisione è impossibile
*	[ECMAScript 6] random v4 UUID (gxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx)
*	(per motivi di compatibilità, nella creazione di ID, non deve iniziare con un numero)
*	WARNING: for CRYPTO SECURE use https://github.com/uuidjs/uuid
*	@return string random id
**/
export default() :string => {
	return 'gxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		const r = Math.random() * 16 | 0,
			v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}
