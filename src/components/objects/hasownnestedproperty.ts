/**
 * hasOwnProperty but with recursion
 *
 * @param obj
 * @param propertyPath
 * @param delimiter
 */
export default (obj ?:Record<string, unknown>, propertyPath :string | string[] = [], delimiter = ".") :boolean => {
  // no object = default false
  if(!obj)
    return false;
  // accept string to split with delimiter or directly array of parameters
  const properties :string[] = Array.isArray((propertyPath)) ? propertyPath : propertyPath.split(delimiter);
  // if no properties, no need to check and it's always true
  if(properties.length < 1)
    return true;
  // loop through every property (in the correct order) and return false at the first missing parameter
	for (let i = 0; i < properties.length; i++) {
		if(!properties[i] || !Object.prototype.hasOwnProperty.call(obj, properties[i]!))
			return false;
		else
			obj = obj[properties[i]!] as Record<string,unknown>;
	}
  // everything was fine
	return true;
}
