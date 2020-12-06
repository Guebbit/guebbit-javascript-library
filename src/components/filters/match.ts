import levenshteinDistance from './levenshteindistance';

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

const match = (string :string, match :string, distance :number = 0) => {
	if(string === match)
		return true;
	if(string.indexOf(match) !== -1)
		return true;
	if(distance > 0 && levenshteinDistance(string, match) <= distance)
		return true;
	return false;
}

export default (string1 :string, string2 :string, distance :number = 4) => {
	let s1 :string = string1.toLowerCase().trim(),
		s2 :string = string2.toLowerCase().trim();
	// in entrambe le vie
	return match(s1.toString(), s2.toString(), distance) || match(s2.toString(), s1.toString(), distance);
}
