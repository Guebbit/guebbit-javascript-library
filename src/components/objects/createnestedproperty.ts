import { set } from "lodash";

/**
 * LODASH.SET
 *
 * @param obj - object to edit
 * @param propertyPath - array of properties or string delimited with "."
 * @param value - value to put on top (no default)
 */
export default set;

/**
 * Recursively create parameters for the given object,
 * then place the given value on top of them (empty default)
 * WARNING: this methods mutates the object given
 * WARNING: LODASH.SET could do the same thing, but this is more personalized
 *
 * @param obj - object to edit
 * @param propertyPath - array of properties or string delimited with {delimiter} to create an array
 * @param value - value to put on top, (default is an empty object)
 * @param delimiter - delimiter of string propertyPath (default is a point)
 */
/*
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (obj ?:any, propertyPath :string | number | Array<string | number> = [], value :any = {}, delimiter = ".") :any => {
  // if object does not exist: create a new
  if(!obj)
    obj = {};
  // pointer to object, will change to the last tip of object after the loop cycle that will traverse it
  let current = obj;
  // accept string to split with delimiter or directly array of parameters
  const properties :Array<string | number> = Array.isArray((propertyPath)) ? propertyPath : (propertyPath as string).split(delimiter);
  const lastProperty = properties.pop();
  // if undefined that means there are no properties,
  // no modifications can be done to object because no parameters were given
  if(!lastProperty)
    return obj;
  // loop through every property (in the correct order)
  for (let i = 0; i < properties.length; i++) {
    if(!properties[i])
      continue;
    // if property does not exist: create it
    if(!Object.prototype.hasOwnProperty.call(current, properties[i]!))
      current[properties[i]!] = {};
    // change reference to the next property
    current = current[properties[i]!];
  }
  // put the value on the last property (previously detached)
  current[lastProperty] = value;
  // return modified object, but it was already modified within the function
  // (deep clone to prevent would be unnecessarily resource hungry)
  return obj;
}
*/
