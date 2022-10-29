/**
 * hasOwnProperty but with recursion
 *
 * @param obj - object to edit
 * @param propertyPath - array of properties or string delimited with {delimiter} to create an array
 * @param delimiter - delimiter of string propertyPath (default is a point)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (obj ?:any, propertyPath :string | number | Array<string | number> = [], delimiter = ".") :boolean => {
  // no object = default false
  if(!obj)
    return false;
  // accept string to split with delimiter or directly array of parameters
  const properties :Array<string | number> = Array.isArray((propertyPath)) ? propertyPath : (propertyPath as string).split(delimiter);
  // if no properties, no need to check and it's always true
  if(properties.length < 1)
    return true;
  // loop through every property (in the correct order) and return false at the first missing parameter
	for (let i = 0; i < properties.length; i++) {
		if(!properties[i] || !Object.prototype.hasOwnProperty.call(obj, properties[i]!))
			return false;
    obj = obj[properties[i]!];
	}
  // everything was fine
	return true;
}
