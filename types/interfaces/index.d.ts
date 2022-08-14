export declare type logicGatesType = "and" | "AND" | "or" | "OR" | "nand" | "NAND" | "nor" | "NOR" | "xor" | "XOR" | "XNOR" | "xnor";
export interface filterRulesMap {
    /**
     * Array of parameters to search from, if empty = get all parameters of records
     */
    search: string | string[];
    /**
     * list of parameters to search from
     */
    searchParams: string | string[];
    /**
     * Logic gate
     *
     * - AND: ALL needles must be true
     * - OR: JUST ONE needle need to be true
     * - Nand: TODO
     * - Nor: TODO
     * - Xor: TODO
     * - Xnor: TODO
     */
    logic?: logicGatesType;
    /**
     * case-sensitive or not
     */
    sensitive?: boolean;
    /**
     * MAX levenshtein distance
     *
     * -2: They can be substring one of another
     * -1: {toCheck} can be substring of {toMatch}
     * 0: then they must be the same (default), better for array calculations
     * 1+: maximum distance to be accepted
     */
    distance?: number;
}
export interface calculationsMap {
    years: number;
    months: number;
    weeks: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
}
//# sourceMappingURL=index.d.ts.map