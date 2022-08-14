/**
 * php array_column
 * Return the values from a single or multiple {columns} from a single record or array {haystack}
 *
 * @param {array} haystack
 * @param {string} columns
 */
export default (haystack: Record<string, unknown> |  Record<string, unknown>[], columns: string | string []): Array<unknown | unknown[] | undefined> | unknown | unknown[] | undefined => {
  const isMultiHaystack = Array.isArray(haystack);
  const isMultiColumn = Array.isArray(columns);
  const columnArray = isMultiColumn ? columns : [columns];
  const haystackArray = isMultiHaystack ? haystack : [haystack];
  const resultArray = haystackArray.map((value: Record<string, unknown>): unknown => {
    const valuesArray :unknown[] = [];
    for(let i = 0, len = columnArray.length; i < len; i++)
      valuesArray.push(
        columnArray[i] && Object.prototype.hasOwnProperty.call(value, columnArray[i]!) ?
        value[columnArray[i]!] :
        undefined
      )
    return isMultiColumn ? valuesArray : valuesArray[0];
  });
  return isMultiHaystack ? resultArray : resultArray[0];
}
