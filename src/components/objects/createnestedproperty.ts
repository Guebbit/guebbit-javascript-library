/**
 * Recursively create parameters for the given object,
 * then place the given value on top of them (empty default)
 * WARNING: this edit the object given
 *
 * @param obj - object to edit
 * @param propertyPath - array of properties or string delimited with {delimiter} to create an array
 * @param value - value to put on top, (default is an empty object)
 * @param delimiter - delimiter of string propertyPath (default is a point)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (obj ?:any, propertyPath :string | string[] = [], value :any = {}, delimiter = ".") :any => {
  // if object does not exist: create a new
  if(!obj)
    obj = {};
  // pointer to object, will change to last tip of object in the for loop cycle
  let current = obj;
  // accept string to split with delimiter or directly array of parameters
  const properties :string[] = Array.isArray((propertyPath)) ? propertyPath : propertyPath.split(delimiter);
  const lastProperty = properties.pop();
  // if undefined that means properties are empty,
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
