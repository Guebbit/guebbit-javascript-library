import match from "./match";

/**
*	return Search(ArrayOfValues, searchable);
*	@param array haystack: array of objects
*	@param array needles: array of strings to search for
*	@param string mode:
*				- AND: ALL needles must be true
*				- OR: JUST ONE needle need to be true
*	@param integer distance: levenshteinDistance if set
**/
export default (haystack :any[], needles:[string, string][], mode = "AND", distance = -1) :any[] => {
	if(mode === "")
		mode = "AND";
	return haystack.filter((item :any) => {
		let i :number,
			result :boolean;
		switch (mode) {
			case "AND":
				result = true;
				for(i = needles.length; i--; ){
					if(!needles[i])
						continue;
					if(!Object.prototype.hasOwnProperty.call(item, needles[i]![0]))
						result = false;
					if(distance < 0 && item[needles[i]![0]] !== needles[i]![1])
						result = false;
					if(distance >= 0 && !match(item[needles[i]![0]], needles[i]![1], distance))
						result = false;
				}
			break;
			case "OR":
				result = false;
				for(i = needles.length; i--; ){
					if(!Object.prototype.hasOwnProperty.call(item, needles[i]![0]))
						continue;
					if(distance < 0 && item[needles[i]![0]] === needles[i]![1])
						result = true;
					if(distance >= 0 && match(item[needles[i]![0]], needles[i]![1], distance))
						result = true;
				}
			break;
			default:
				result = false;
			break;
		}
		return result;
	});
}
