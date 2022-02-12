declare const _default: (haystack: Record<string, unknown>[], needles: [string, string][], mode?: string, distance?: number) => Record<string, unknown>[];
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
export default _default;
//# sourceMappingURL=search.d.ts.map