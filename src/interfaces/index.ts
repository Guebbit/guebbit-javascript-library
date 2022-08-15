/**
 * Logic gates
 *
 * AND: ALL checks must be true
 * OR: AT LEAST ONE check must be true
 * Nand: AT LEAST ONE check must be false
 * Nor: ALL checks must be false
 *
 * Xor, Xnor, Not and Buffer are not implemented
 */
export type logicGatesType = "and" | "AND" | "or" | "OR" | "nand" | "NAND" | "nor" | "NOR";

export interface filterRulesMap {
  /**
   * Array of parameters to search from, if empty = get all parameters of records
   */
  search: string | string[]
  /**
   * list of parameters to search from
   */
  searchParams: string | string[]
  /**
   * Logic gate
   */
  logic?: logicGatesType,
  /**
   * case-sensitive or not
   */
  sensitive?: boolean
  /**
   * MAX levenshtein distance
   *
   * -2: They can be substring one of another
   * -1: {toCheck} can be substring of {toMatch}
   * 0: then they must be the same (default), better for array calculations
   * 1+: maximum distance to be accepted
   */
  distance?: number
  /**
   * Disable filter if {search} is string and has less length than stringLimit
   * default: no limit
   */
  stringLimit?: number
  /**
   * Disable filter if {search} is empty array or empty string
   * Default: false
   */
  allowEmpty?: boolean
}


export interface calculationsMap {
  years :number
  months :number
  weeks :number
  days :number
  hours :number
  minutes :number
  seconds :number
  milliseconds :number
}

/* TODO
export interface timeObjectMap {
  years :number
  yearsOnly :number
  months :number
  monthsOnly :number
  weeks :number
  weeksOnly :number
  days :number
  daysOnly :number
  hours :number
  hoursOnly :number
  minutes :number
  minutesOnly :number
  seconds :number
  secondsOnly :number
  milliseconds :number
  millisecondsOnly :number
}
*/
