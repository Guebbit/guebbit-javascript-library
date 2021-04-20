/**
*	WHITELIST
*	Filter object by array of allowed values
* 	@param object filter
*	@param array allowed
**/
export default (objToFilter :Record<string, unknown>, allowed:string[]) :Record<string, unknown> => {
	return Object.keys(objToFilter)
		.filter(key => allowed.includes(key))
		.reduce((obj :Record<string, unknown>, key :string) => {
			obj[key] = objToFilter[key];
			return obj;
		}, {});
};
