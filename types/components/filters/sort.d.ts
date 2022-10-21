/**
 * 0 = neutral
 * 1 = descending
 * 2 = ascending
 */
export declare type sortParameterOrderType = 0 | 1 | 2;
/**
 * Parameter to use for sorting
 * Sort order
 */
export declare type sortParameterType = [string, sortParameterOrderType];
/**
 * Single check
 * Make "FALSE" Boolean valid?
 *
 * @param {*} item1
 * @param {*} item2
 * @param {number} order
 */
export declare function check(item1: unknown, item2: unknown, order?: sortParameterOrderType): number;
/**
 *
 * @param {Object[]} haystack
 * @param {[string, number][]} parameters
 */
declare const _default: (haystack: Array<Record<string, unknown>>, parameters?: sortParameterType[]) => Record<string, unknown>[];
export default _default;
//# sourceMappingURL=sort.d.ts.map