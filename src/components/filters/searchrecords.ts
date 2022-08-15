import { arrayColumns, getArrayDepth, filter } from "./../../index";
import type { filterRulesMap, logicGatesType } from "@/interfaces";

/**
 * Disable/filter out all the filter rules that have a "disabler" active.
 * Ex: allowEmpty and stringLimit and their conditions
 *
 * @param {object[]} rules
 */
function searchFilterRules(rules :filterRulesMap[] = []){
  const filteredRules :filterRulesMap[] = [];
  for(const key in rules){
    if(!Object.prototype.hasOwnProperty.call(rules, key))
      continue;
    const { search = [], stringLimit = 0, allowEmpty = false } = rules[key] || {};
    if(
      // if search is NOT array and stringLimit is set: search string must be longer than stringLimit
      (Array.isArray(search) || stringLimit < 1 || search.length >= stringLimit) &&
      // if search is empty string or array and allowEmpty is false: empty search means empty filter
      (allowEmpty || search.length > 0)
    )
      filteredRules.push({ ...rules[key]! })
  }
  return filteredRules;
}

/**
 * Standardize parameters insertion
 *
 * @param {Object} item
 * @param {string | string[]} parameters
 */
function getValues(item :Record<string, unknown | unknown[]> = {}, parameters :string | string[] = []) :unknown[] {
  // if single parameters, transform into array of length 1
  let searchParams = Array.isArray(parameters) ? parameters : [parameters];
  // if searchParams empty or not specified, take all item's params
  searchParams = searchParams.length > 0 ? searchParams : Object.keys(item);
  // must not be empty
  if(searchParams.length === 0)
    return [];
  // get column values must be an array
  const columnsValues = arrayColumns([item], searchParams);
  return columnsValues[0]!;
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
    const { search = '', searchParams = [], logic, sensitive, distance } = rules[i] as filterRulesMap;
    // get values from selected columns
    const columnsValues = getValues(item, searchParams);
    /**
     * first level of depth: value of item
     * second level of depth: the above value is an array
     * (these 2 are very different in purpose)
     * all must be true, so the first "false" make the entire {item} check false
     */
    if(getArrayDepth(columnsValues) < 2) {
      if (!filter(search, columnsValues, logic, sensitive, distance))
        return false;
    }else {
      for (let i = columnsValues.length; i--;)
        if (!filter(search, columnsValues[i], logic, sensitive, distance))
          return false;
    }
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
  for(let i = rules.length; i--; ){
    if(!rules[i])
      continue;
    const { search = '', searchParams = [], logic, sensitive, distance } = rules[i] as filterRulesMap;
    const columnsValues = getValues(item, searchParams);
    /**
     * Same as searchAnd
     * just 1 needs to be true, so the first "true" make the entire {item} check true
     */
    if(getArrayDepth(columnsValues) < 2) {
      if(filter(search, columnsValues, logic, sensitive, distance))
        return true;
    }else {
      for (let i = columnsValues.length; i--;)
        if(filter(search, columnsValues[i], logic, sensitive, distance))
          return true;
    }
  }
  return false;
}

export function searchNand(){
  return true;
}
export function searchNor(){
  return true;
}

/**
 *
 * @param {array} haystack - array of objects
 * @param {array} rules - array of rules to apply to ALL requested parameters of the haystack
 * @param {string} logic - logic gate that wrap all the rules (they can have individual different logic gates)
 */
export default (haystack :Record<string, unknown | unknown[]>[], rules: filterRulesMap[] = [], logic :logicGatesType = "and") :Record<string,unknown>[] => {
  const filteredRules :filterRulesMap[] = searchFilterRules(rules);
  // no changes
  if(!filteredRules || filteredRules.length < 1)
    return haystack;
  // filter
  return haystack.filter((item :Record<string, unknown | unknown[]>) => {
    switch (logic.toLowerCase()){
      case "and":
        return searchAnd(item, filteredRules);
      case "or":
        return searchOr(item, filteredRules);
      case "nand":
        // TODO
        return searchNand();
      case "nor":
        // TODO
        return searchNor();
    }
    return false;
  });
}
