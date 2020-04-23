import { deepCopy } from "./copy";


/**
* 	equivalente del $.extend({},obj);
*	var settings = extend({
*		test: "toast"
*	}, settings);
* 	@param array qualsiasi = array da estendere
* 	@return array esteso
**/
const extend = (...args:any[]) => {
	let result:any = args[0],
		deep:boolean = false,
		i:number;
	// se richiesta la deep copy
	if(typeof args[0] === "boolean"){
		result = args[1];
		if (args[0])
			deep = true;
	}
	//check
	if(result == null)
		return {};
	//if deep copy needed
	if(deep)
		for(i = args.length; i--; )
			args[i] = deepCopy(args[i]);
	//extending
	for(i=1; i<args.length; i++){
		for(let key in args[i]){
			if(args[i].hasOwnProperty(key)) {
				//recursion
				if (typeof result[key] === 'object'
					&& typeof args[i][key] === 'object')
							extend(result[key], args[i][key]);
				else
				   result[key] = args[i][key];
			 }
		}
	}
	return result;
};

export default extend;

/*
this.extend= function(){
	if(this.isNull(arguments[0])) return {};

	for(var i=1; i<arguments.length; i++){
		for(var key in arguments[i]){
			if(arguments[i].hasOwnProperty(key)) {
				if (typeof arguments[0][key] === 'object'
					&& typeof arguments[i][key] === 'object')
							this.extend(arguments[0][key], arguments[i][key]);
				else
				   arguments[0][key] = arguments[i][key];
			 }
		}
	}

	return arguments[0];
}
*/
