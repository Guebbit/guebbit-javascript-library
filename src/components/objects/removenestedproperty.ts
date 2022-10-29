import { unset } from "lodash";

/**
 * LODASH.UNSET
 *
 * @param obj - object to edit
 * @param propertyPath - array of properties or string delimited with "."
 */
export default unset;

/**
 * Recursively traverse an object to remove the chosen parameter
 * WARNING: this methods mutates the object given
 * WARNING: LODASH.UNSET could do the same thing, but this is more personalized
 *
 * @param obj - object were we need to remove the selected parameter
 * @param propertyPath - array of properties or string delimited with {delimiter} to create an array
 * @param delimiter - delimiter of string propertyPath (default is a point)
 */
/*
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (obj ?:any, propertyPath :string | number | Array<string | number> = [], delimiter = ".") :any => {
  if(!obj)
    return;
  // pointer to object, will change to the last tip of object after the loop cycle that will traverse it
  let current = obj;
  // accept string to split with delimiter or directly array of parameters
  const properties :Array<string | number> = Array.isArray((propertyPath)) ? propertyPath : (propertyPath as string).split(delimiter);
  // necessary to correctly use the reference pointer, we can't directly access it
  const lastProperty = properties.pop();
  // if undefined that means there are no properties, so nothing to remove
  if(!lastProperty)
    return;
  // loop through every property (in the correct order)
  for (let i = 0; i < properties.length; i++) {
    if(!properties[i])
      continue;
    // if property does not exist, return undefined
    if(!Object.prototype.hasOwnProperty.call(current, properties[i]!))
      return;
    // change reference to the next property
    current = current[properties[i]!];
  }
  // return the requested tip of the object
  delete current[lastProperty];
  return obj;
}
*/
