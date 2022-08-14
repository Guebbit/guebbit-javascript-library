import type { filterRulesMap, logicGatesType } from "@/interfaces";
/**
 * Single item check if ALL rules are valid
 *
 * @param item - single item of the haystack
 * @param rules - all rules that need to be applied
 */
export declare function searchAnd(item: Record<string, unknown | unknown[]>, rules?: filterRulesMap[]): boolean;
/**
 * Single item check AT LEAST 1 must be valid
 *
 * @param item - single item of the haystack
 * @param rules - all rules that need to be applied
 */
export declare function searchOr(item: Record<string, unknown | unknown[]>, rules?: filterRulesMap[]): boolean;
export declare function searchNand(): boolean;
export declare function searchNor(): boolean;
export declare function searchXor(): boolean;
export declare function searchXnor(): boolean;
/**
 *
 * @param {array} haystack - array of objects
 * @param {array} rules - array of rules to apply to ALL requested parameters of the haystack
 * @param {string} logic - logic gate that wrap all the rules (they can have individual different logic gates)
 */
declare const _default: (haystack: Record<string, unknown | unknown[]>[], rules?: filterRulesMap[], logic?: logicGatesType) => Record<string, unknown>[];
export default _default;
//# sourceMappingURL=searchRecords.d.ts.map