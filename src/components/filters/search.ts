import { isEqual } from "lodash";
import { arrayColumns, getArrayDepth, filter } from "./../../index";
import type { filterRulesMap, logicGatesType } from "../../interfaces";

export interface filterGroupMap {
  rules: filterRulesMap[],
  logic?: logicGatesType
}


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
      // if search is not array and not string
      (!Array.isArray(search) && typeof search !== "string") ||
      (
        // if search is NOT array and stringLimit is set: search string must be longer than stringLimit
        (Array.isArray(search) || stringLimit < 1 || search.length >= stringLimit) &&
        // if search is empty string or array and allowEmpty is false: empty search means empty filter
        (allowEmpty || search.length > 0)
      )
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
  // get column values must be an array of arrays
  const columnsValues = arrayColumns([item], searchParams) as unknown[][];
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
    const { search = '', searchParams = [], logic, sensitive, distance, numberRule } = rules[i] as filterRulesMap;
    // get values from selected columns
    const columnsValues = getValues(item, searchParams);
    /**
     * first level of depth: value of item
     * second level of depth: the above value is an array
     * (these 2 are very different in purpose)
     * all must be true, so the first "false" make the entire {item} check false
     */
    if(getArrayDepth(columnsValues) < 2) {
      if (!filter(search, columnsValues, logic, { sensitive, distance, numberRule }))
        return false;
    }else {
      for (let i = columnsValues.length; i--;)
        if (!filter(search, columnsValues[i], logic, { sensitive, distance, numberRule }))
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
    const { search = '', searchParams = [], logic, sensitive, distance, numberRule } = rules[i] as filterRulesMap;
    const columnsValues = getValues(item, searchParams);
    /**
     * Same as searchAnd
     * just 1 needs to be true, so the first "true" make the entire {item} check true
     */
    if(getArrayDepth(columnsValues) < 2) {
      if(filter(search, columnsValues, logic, { sensitive, distance, numberRule }))
        return true;
    }else {
      for (let i = columnsValues.length; i--;)
        if(filter(search, columnsValues[i], logic, { sensitive, distance, numberRule }))
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
 * haystack to filter and single group of rules with their logic gate
 *
 * @param {array} haystack - array of objects
 * @param {array} rules - array of rules to apply to ALL requested parameters of the filterGroupMap
 * @param {string} logic - logic gate that wrap all the rules (they can have individual different logic gates)
 */
export function searchCore (haystack :Array<Record<string, unknown | unknown[]>>, rules: filterRulesMap[] = [], logic :logicGatesType = "and") :Record<string,unknown>[] {
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


/**
 *
 *
 * filterGroupMap were born better use the logic gates:
 * - GLOBAL logic gate is for all the rules (root),
 * - GROUP logic gate is for the group (parameter in filterGroupMap)
 * - LOCAL logic gate is for the single rule in exam (parameter in object filterRulesMap)
 *
 * TEMPORARY?
 *
 * TODO recursion to have infinite filterGroupMap layers
 * TODO CLONE RULE: se haystack ha cloni, si stanno usando usando filterGroupMaps
 *  e la GLOBAL logic è "OR", le copie verrebbero rimosse, creare un fix? Una Unique prop?
 * TODO filterGroupMaps GLOBAL logic "OR" cambia l'ordine dei risultati
 * TODO better order?
 * TODO <T>
 *
 * @param {array} haystack - array of objects
 * @param {array} rules - array of rules to apply to ALL requested parameters of the haystack
 * @param {string} logic - logic gate that wrap all the rules (they can have individual different logic gates)
 * @return {object[]} - result
 */
export default (haystack :Array<Record<string, unknown | unknown[]>>, rules: filterRulesMap[] | filterGroupMap[] = [], logic :logicGatesType = "and") :Array<Record<string, unknown | unknown[]>> => {
  // no rules = no changes
  if(rules.length < 0)
    return haystack;

  // if it's regular filterRulesMap, regular use, call searchCore a single time.
  if(Object.prototype.hasOwnProperty.call(rules[0], 'search'))
    return searchCore(haystack, rules as filterRulesMap[], logic);

  // if it's a filterGroupMap, we need to call searchCore for every group (for it's own logic gates)
  // (it must be a VALID group, else: no changes)
  if(!Object.prototype.hasOwnProperty.call(rules[0], 'rules'))
    return haystack;

  // GLOBAL logic
  switch (logic.toLowerCase()){
    case "and": {
      // We'll keep using result[0] and filter out items at every cycle
      let results = [...haystack];
      for(let i = 0, len = rules.length; i < len; i++)
        results =
          searchCore(
            results,
            (rules[i] as filterGroupMap).rules,
            // GROUP logic gate
            (rules[i] as filterGroupMap).logic
          )
      return results;
    }
    case "or": {
      // Add an extra layer because all groups will be used on the same haystack then merged
      const results :Record<string, unknown | unknown[]>[][] = [];
      let i :number;
      let len :number;
      for(i = 0, len = rules.length; i < len; i++)
        results.push(
          searchCore(
            [...haystack],
            (rules[i] as filterGroupMap).rules,
            // GROUP logic gate
            (rules[i] as filterGroupMap).logic
          )
        )
      // merge all arrays (results.flat() doesn't remove duplicates)
      const mergedResults :Record<string, unknown | unknown[]>[] = [];
      for(i = 0, len = results.length; i < len; i++)
        if(results[i])
          for(let k = 0, lenk = results[i]!.length; k < lenk; k++)
            if(results[i]![k] && !mergedResults.some((item) => isEqual(results[i]![k], item)))
              mergedResults.push(results[i]![k]!);
      return mergedResults;
    }
    case "nand":
      // TODO
      break;
    case "nor":
      // TODO
      break;
  }

  // if wrong logic gate
  return haystack;
}
