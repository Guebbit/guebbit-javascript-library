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
declare const _default: (obj?: any, propertyPath?: string | number | Array<string | number>, value?: any, delimiter?: string) => any;
export default _default;
//# sourceMappingURL=createnestedproperty.d.ts.map