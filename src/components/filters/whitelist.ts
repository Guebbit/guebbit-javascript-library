/**
*	WHITELIST
*	Filter object by array of allowed values
* 	@param object filter
*	@param array allowed
**/
export default (objToFilter :any, allowed:string[]) => {
	return Object.keys(objToFilter)
		.filter(key => allowed.includes(key))
		.reduce((obj :any, key :string) => {
			obj[key] = objToFilter[key];
			return obj;
		}, {});
};
