import { match } from "@/index"
import type { logicGatesType } from "@/interfaces";

/**
 * Fast array search
 * ALL values checked must be true
 */
export function filterAnd(toCheck :unknown | unknown[] = [], toMatch :unknown | unknown[] = [], sensitive = false, distance = 0){
  // distance = 0 insensitive: (1-way) fast array search: if both are arrays and distance is less than 1 (distance is indifferent in these cases)
  if(Array.isArray(toCheck) && Array.isArray(toMatch) && distance === 0 && !sensitive)
    // all elements of the {toCheck} array must be present in the {toMatch} array
    return toCheck.every((s) => toMatch.includes(s));
  // normal filter:
  const checkArray = Array.isArray(toCheck) ? toCheck : [toCheck];
  const matchArray = Array.isArray(toMatch) ? toMatch : [toMatch];
  // check every interaction of {toCheck} with every interaction of {toMatch} ????
  for(let i = matchArray.length; i--; )
    for(let k = checkArray.length; k--; )
      // if even one is false, the final result is false
      if(!match(checkArray[k], matchArray[i], sensitive, distance))
        return false;

  // if everything went well
  return true;
}

/**
 * At least 1 of all the values checked must be true
 * Searching for successes and returning true at the first
 * Reaaching the end and returning false (no success)
 */
export function filterOr(toCheck :unknown | unknown[] = [], toMatch :unknown | unknown[] = [], sensitive = false, distance = 0) {
  // (2-way) fast array search
  if(Array.isArray(toCheck) && Array.isArray(toMatch) && distance === 0 && !sensitive)
    // Just 1 element of the array must be in common
    return toMatch.some((s) => toCheck.includes(s)) || toCheck.some((s) => toMatch.includes(s));
  // normal filter:
  const checkArray = Array.isArray(toCheck) ? toCheck : [toCheck];
  const matchArray = Array.isArray(toMatch) ? toMatch : [toMatch];
  for(let i = matchArray.length; i--; )
    for(let k = checkArray.length; k--; )
      // at least 1 must be true
      if(match(checkArray[k], matchArray[i], sensitive, distance))
        return true;
  // if no successes were found
  return false;
}

export function filterNand(){
  return true;
}
export function filterNor(){
  return true;
}
export function filterXor(){
  return true;
}
export function filterXnor(){
  return true;
}

/**
 * Check 2 values: 1-way search so {toCheck} and {toMatch} are NOT the same and order is important.
 * They can be string or array, need to check every combination and apply the chosen logic
 * If {toCheck} AND {toMatch} are strings, {logic} doesn't matter, and it's the same as using the {function match}
 *
 * EXAMPLES:
 * array vs array: "list of categories to filter" against "list of categories belonging to item"
 *
 * @param {string | string[]} toCheck
 * @param {string | string[]} toMatch
 * @param {string} logic - and, or, etc
 * @param {boolean} sensitive - case sensitive or not
 * @param {number} distance - max levenshtein distance
 *  -2: They can be substring one of another
 *  -1: {toCheck} can be substring of {toMatch}
 *  0: then they must be the same (default), better for array calculations
 *  1+: maximum distance to be accepted
 */
export default (toCheck :unknown | unknown[] = [], toMatch :unknown | unknown[] = [], logic :logicGatesType = "and", sensitive = false, distance = 0) :boolean => {
  switch (logic.toLowerCase()){
    case "and":
      return filterAnd(toCheck, toMatch, sensitive, distance);
    case "or":
      return filterOr(toCheck, toMatch, sensitive, distance);
    case "nand":
      // TODO
      return filterNand();
    case "nor":
      // TODO
      return filterNor();
    case "xor":
      // TODO
      return filterXor();
    case "xnor":
      // TODO
      return filterXnor();
  }
  // wrong logic inserted
  return false;
}
