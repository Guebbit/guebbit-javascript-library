import match from "./match";

/**
*	return Search(ArrayOfValues, searchable);
*	@param {array} haystack: array of objects
*	@param {array} needles: array of strings to search for
*	@param {string} mode:
*				- AND: ALL needles must be true
*				- OR: JUST ONE needle need to be true
 *			- NAND: TODO
 *		  - NOR: TODO
*	@param {integer} distance: levenshteinDistance if set
**/
export default (haystack :Record<string,unknown>[], needles:[string, string][], mode = "AND", distance = -1) :Record<string,unknown>[] => {
	if(mode === "")
		mode = "AND";
	return haystack.filter((item :Record<string,unknown>) => {
		let i :number,
			result :boolean;
		switch (mode) {

			case "AND":
				result = true;
				for(i = needles.length; i--; ){
					if(!needles[i])
						continue;
          if(
            !Object.prototype.hasOwnProperty.call(item, needles[i]![0]) ||
            (
              distance < 0 &&
              item[needles[i]![0]] !== needles[i]![1]
            ) ||
            (
              distance >= 0 &&
              !match(item[needles[i]![0]] as string, needles[i]![1], distance)
            )
          ){
            result = false;
            break;
          }
				}
			break;

			case "OR":
				result = false;
				for(i = needles.length; i--; ){
          if(
            !needles[i] ||
            !Object.prototype.hasOwnProperty.call(item, needles[i]![0])
          )
            continue;
          if(
            (distance < 0 && item[needles[i]![0]] === needles[i]![1]) ||
            (distance >= 0 && match(item[needles[i]![0]] as string, needles[i]![1], distance))
          ){
            result = true;
            break;
          }
				}
			break;

			default:
				result = false;
			break;
		}
		return result;
	});
}
