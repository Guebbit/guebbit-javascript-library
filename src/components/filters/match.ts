import levenshteinDistance from "./levenshteindistance";

/**
*	Match if 2 strings are similar
*		- they are the same?
*		- is one a substring of the other?
*		- regex fuzzy search
*
* 	@param string string:
*	@param string match: same as above
* 	@return boolean
**/

export const matchChecker = (string :string, match :string, distance = 0) :boolean => {
	if(string === match)
		return true;
	if(string.indexOf(match) !== -1)
		return true;
	if(distance > 0 && levenshteinDistance(string, match) <= distance)
		return true;
	return false;
}

export default (string1 :string, string2 :string, distance = 4) :boolean => {
	const s1 :string = string1.toLowerCase().trim(),
		s2 :string = string2.toLowerCase().trim();
	// in entrambe le vie
	return matchChecker(s1.toString(), s2.toString(), distance) || matchChecker(s2.toString(), s1.toString(), distance);
}
