/**
 * 0 = neutral
 * 1 = descending
 * 2 = ascending
 */
export type sortParameterOrderType = 0 | 1 | 2;


/**
 * Parameter to use for sorting
 * Sort order
 */
export type sortParameterType = [string, sortParameterOrderType];

/**
 * Single check
 * Make "FALSE" Boolean valid?
 *
 * @param {*} item1
 * @param {*} item2
 * @param {number} order
 */
export function check(item1 :unknown, item2 :unknown, order: sortParameterOrderType = 0 ) : number {
  // 0 is neutral and useless to us
  if(order === 0)
    return 0;
  // if one of the items is undefined but other exist: the first loses
  if(!item1 && item2)
    return 1;
  if(!item2 && item1)
    return -1;
  // if arrays: sort by array length
  if(Array.isArray(item1))
    item1 = item1.length;
  if(Array.isArray(item2))
    item2 = item2.length;
  // if descending: the greatest win, if ascending: the lowest win
  if((item1 as number | string) > (item2 as number | string))
    return order === 1 ? -1 : 1;
  if((item1 as number | string) < (item2 as number | string))
    return order === 1 ? 1 : -1;
  // if they were the same, continue to the next
  return 0;
}

/**
 *
 * @param {Object[]} haystack
 * @param {[string, number][]} parameters
 */
export default (haystack :Array<Record<string, unknown>>, parameters :sortParameterType[] = []) => {
  return [...haystack].sort((item1, item2) => {
    for(let i = 0, len = parameters.length; i < len; i++){
      const [ key, order = 0 ] = parameters[i]!;
      const result = check(item1[key as keyof typeof item1], item2[key as keyof typeof item2], order);
      if(result === 0)
        continue;
      return result;
    }
    // in case every sortParameter was the same
    return 0;
  });
}
