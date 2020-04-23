import { shallowCopy, deepCopy } from "./main/copy";
import extend from "./main/extend";
import isUrl from "./checkers/isurl";
import getUUID from "./helpers/getuuid";
import intersectionHelper from "./helpers/intersection";
import whitelist from "./filters/whitelist";
import levenshteinDistance from "./filters/levenshteindistance";
import mouseParallax from "./manipulation/mouseparallax";

export {
	//main
	shallowCopy,
	deepCopy,
	extend,
	//filters
	whitelist,
	levenshteinDistance,
	//checkers
	isUrl,
	//helpers
	getUUID,
	intersectionHelper,
	//manipulations
	mouseParallax,
};

export default {
	//main
	shallowCopy,
	deepCopy,
	extend,
	//filters
	whitelist,
	levenshteinDistance,
	//checkers
	isUrl,
	//helpers
	getUUID,
	intersectionHelper,
	//manipulations
	mouseParallax,
};
