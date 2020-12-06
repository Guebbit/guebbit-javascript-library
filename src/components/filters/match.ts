/**
*	Search in array for object with data[parameter] = search
*
*	@param array data: array of objects to analyze
* 	@param string|string[] search: substring to search, can be an array
* 	@param string parameter: required paramter, if empty, all parameters
*	@param boolean exact: true if searched words are the exact string
* 	@return array of objects fitting the requirements
**/

export const matchItem = (item :any, search :string, parameter :string = "", exact :boolean = false) => {
	if(item[parameter] === search)
		return item;
	if(!exact && item[parameter].toString().toLowerCase().indexOf(search.toLowerCase()) !== -1)
		return item;
}

export default (data:any[] = [], search :string | string[] = "", parameter :string = "", exact :boolean = false) => {
	let i :number,
		output :any[] = [];

	if(!Array.isArray(search))
		search = [search];

	if(parameter !== "")
		for(i = 0; i < search.length; i++)
			output.push(
				...data.filter((item) => matchItem(item, search[i], parameter, exact))
			);
	else
		for(i = 0; i < search.length; i++)
			output.push(
				...data.filter((item) => {
					for (let param in item)
						if(item.hasOwnProperty(param))
							if(matchItem(item, search[i], param, exact))
								return true;
						})
					);

	return output;

}
