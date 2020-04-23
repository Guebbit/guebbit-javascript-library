/**
* 	controllo se è un oggetto
* 	@param mixed test
* 	@return bool se è vero o no
**/
export default (test:any) => {
	const type = typeof test;
	return type === 'function' || type === 'object' && !!test;
}
