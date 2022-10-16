/**
 * 0 = neutral
 * 1 = ascending
 * 2 = descending
 */
export declare type sortParameterOrder = 0 | 1 | 2;
/**
 * Parameter to use for sorting
 * Sort order
 */
export declare type sortParameters = [string, sortParameterOrder];
/**
 * Single check
 * Make "FALSE" Boolean valid?
 *
 * @param {*} item1
 * @param {*} item2
 * @param {number} order
 */
export declare function check(item1: unknown, item2: unknown, order?: sortParameterOrder): number;
/**
 *
 * @param {Object[]} haystack
 * @param {[string, number][]} parameters
 */
declare const _default: (haystack: Array<Record<string, unknown>>, parameters?: sortParameters[]) => Record<string, unknown>[];
export default _default;
//# sourceMappingURL=sort.d.ts.map