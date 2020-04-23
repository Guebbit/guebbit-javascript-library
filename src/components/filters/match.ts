/**
*	Search for object with data[parameter] = search
*
**/
export default (search:string = "", data:any[] = [], parameter:string = "") => {
	return data.filter((data) => {
		if(data[parameter].indexOf(search) !== -1)
			return data;
	});
}
