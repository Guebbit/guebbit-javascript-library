/**
 * php array_column
 * Return the values from a single column in the input array
 *
 * @param {array} array
 * @param {string} column
 */
export default (array: Record<string, unknown>[], column: string): unknown[] => {
  return array.map((value: Record<string, unknown>): unknown => {
    return value[column];
  });
}
