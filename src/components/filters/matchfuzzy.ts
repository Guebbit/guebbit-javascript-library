/**
*	Same as match.ts, but Fuzzy (with regex)
*
**/
export default (search:string = "", data:any[] = [], parameter:string = "") => {
	var reg = new RegExp(search.split('').join('\\w*').replace(/\W/, ""), 'i');
	return data.filter((data) => {
		if(data[parameter].match(reg))
			return data;
	});
}
