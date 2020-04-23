/**
*	WHITELIST
*	Filter object by array of allowed values
* 	@param object filter
*	@param array allowed
**/
export default (filter:any, allowed:Array<string>) => {
	return Object.keys(filter)
		.filter(key => allowed.includes(key))
		.reduce((obj:any, key) => {
			obj[key] = filter[key];
			return obj;
		}, {});
};
