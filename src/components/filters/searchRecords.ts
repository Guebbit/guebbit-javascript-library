import { arrayColumns, filter } from "./../../index";
import type { filterRulesMap, logicGatesType } from "@/interfaces";

/**
 * Standardize parameters insertion
 *
 * @param {Object} item
 * @param {string | string[]} parameters
 */
function searchInterfaceParams(item :Record<string, unknown | unknown[]>, parameters :string | string[] | undefined = []){
  // if single parameters, transform into array of length 1
  let searchParams = Array.isArray(parameters) ? parameters : [parameters];
  // if searchParams empty or not specified, take all item's params
  searchParams = searchParams.length > 0 ? searchParams : Object.keys(item);
  return searchParams;
}

/**
 * Single item check if ALL rules are valid
 *
 * @param item - single item of the haystack
 * @param rules - all rules that need to be applied
 */
export function searchAnd(item :Record<string, unknown | unknown[]>, rules: filterRulesMap[] = []){
  // for every rule
  for(let i = rules.length; i--; ){
    if(!rules[i])
      continue;
    // break down the various parts
    const { search = '', searchParams :searchParamsRaw = [], logic, sensitive, distance } = rules[i] as filterRulesMap;
    // if no valid searchParams: fail
    const searchParams = searchInterfaceParams(item, searchParamsRaw)
    // must not be empty
    if(searchParams.length === 0)
      return false;
    // all must be true, so the first "false" make the entire {item} check false
    if(!filter(search, arrayColumns(item, searchParams), logic, sensitive, distance))
      return false;
  }
  return true;
}

/**
 * Single item check AT LEAST 1 must be valid
 *
 * @param item - single item of the haystack
 * @param rules - all rules that need to be applied
 */
export function searchOr(item :Record<string, unknown | unknown[]>, rules: filterRulesMap[] = []){
  // for every rule
  for(let i = rules.length; i--; ){
    if(!rules[i])
      continue;
    const { search = '', searchParams :searchParamsRaw = [], logic, sensitive, distance } = rules[i] as filterRulesMap;
    // if no valid searchParams: fail
    const searchParams = searchInterfaceParams(item, searchParamsRaw)
    // but must not be empty
    if(searchParams.length === 0)
      return false;
    // just 1 needs to be true, so the first "true" make the entire {item} check true
    if(filter(search, arrayColumns(item, searchParams), logic, sensitive, distance))
      return true;
  }
  return false;
}

export function searchNand(){
  return true;
}
export function searchNor(){
  return true;
}
export function searchXor(){
  return true;
}
export function searchXnor(){
  return true;
}

/**
 *
 * @param {array} haystack - array of objects
 * @param {array} rules - array of rules to apply to ALL requested parameters of the haystack
 * @param {string} logic - logic gate that wrap all the rules (they can have individual different logic gates)
 */
export default (haystack :Record<string, unknown | unknown[]>[], rules: filterRulesMap[] = [], logic :logicGatesType = "and") :Record<string,unknown>[] => {
	return haystack.filter((item :Record<string, unknown | unknown[]>) => {
    switch (logic.toLowerCase()){
      case "and":
        return searchAnd(item, rules);
      case "or": {
        return searchOr(item, rules);
      }
      case "nand":
        // TODO
        return searchNand();
      case "nor":
        // TODO
        return searchNor();
      case "xor":
        // TODO
        return searchXor();
      case "xnor":
        // TODO
        return searchXnor();
    }
    return false;
	});
}
