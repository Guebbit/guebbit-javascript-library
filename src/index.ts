// ------------- INTERFACES ------------

export type {
  numberRuleType,
  secondsToTimeMap,
  logicGatesType,
  filterRulesMap,
  filterGroupMap,
  filterFunctionMap,
  filterAnyMap
} from "./interfaces";

export type {
  mouseParallaxItemsMap,
  mouseParallaxMap
} from "./components/dom/manipulation/mouseparallax";

export type {
  classScrollSettingsMap
} from "./components/dom/events/classscroll";

export type {
  stickyjsSettingsMap
} from "./components/dom/events/shyjs";

// ------------- FUNCTIONS ------------

export { default as divideArray } from "./components/arrays/dividearray";
export { default as chunksArray } from "./components/arrays/chunksarray";
export { default as getArrayDepth } from "./components/arrays/getarraydepth";

export { default as isEmail } from "./components/checkers/isemail"
export { default as isEmpty } from "./components/checkers/isempty";
export { default as isJson } from "./components/checkers/isjson";
export { default as isUrl } from "./components/checkers/isurl";
export { default as rangeOverlaps } from "./components/checkers/rangeoverlaps";

export { default as hexToRGB } from "./components/converters/hextorgb";
export { default as secondsToTime } from "./components/converters/secondstotime";
export { default as timeToSeconds } from "./components/converters/timetoseconds";
export { default as toFormData } from "./components/converters/toformdata";

export { default as classScroll } from "./components/dom/events/classscroll";
export { addEvent, removeEvent } from "./components/dom/events/globalevents";
export { default as shyJs } from "./components/dom/events/shyjs";
export { default as stickyJs } from "./components/dom/events/stickyjs";

export { default as getForm } from "./components/dom/getters/getform";
export { default as getIFrame } from "./components/dom/getters/getiframe";
export { default as getIndex } from "./components/dom/getters/getindex";
export { default as getSiblings } from "./components/dom/getters/getsiblings";
export { default as getValue } from "./components/dom/getters/getvalue";

export { default as intersectionHelper, type intersectionSettingsMap } from "./components/dom/helpers/intersection";
export { default as lazyloadHelper } from "./components/dom/helpers/lazyload";

export {
  default as mouseParallax,
  calculateMouseParallax,
  executeMouseParallax,
  createMouseParallaxItem
} from "./components/dom/manipulation/mouseparallax";

export { default as toDOM } from "./components/dom/todom";
export { default as appendChildren } from "./components/dom/appendchildren";

export { default as arrayColumns } from "./components/filters/arraycolumns";
export { default as associativeSlice } from "./components/filters/associativeslice";
export { default as match } from "./components/filters/match";
export { default as whitelist } from "./components/filters/whitelist";
export {
  default as filter,
  filterAnd,
  filterOr,
  filterNand,
  filterNor,
  filterCheckNumberRule,
  type filterRuleParameter,
} from "./components/filters/filter";
export {
  default as search,
  searchAnd,
  searchOr,
  searchNand,
  searchNor,
} from "./components/filters/search";
export {
  default as sort,
  type sortParameterOrderType,
  type sortParameterType,
} from "./components/filters/sort";

export { default as getJSON } from "./components/getters/getjson";
export { default as getLast } from "./components/getters/getlast";
export { default as getOverlapRange } from "./components/getters/getoverlaprange";
export { default as getUUID } from "./components/getters/getuuid";

export { default as getDelta } from "./components/math/getdelta";
export { default as getMapDistance } from "./components/math/getmapdistance";
export { default as matrixTranspose } from "./components/math/matrixtranspose";
export { default as levenshteinDistance } from "./components/math/levenshteindistance";

export { default as createNestedProperty } from "./components/objects/createnestedproperty";
export { default as getNestedProperty } from "./components/objects/getnestedproperty";
export { default as hasOwnNestedProperty } from "./components/objects/hasownnestedproperty";
export { default as removeNestedProperty } from "./components/objects/removenestedproperty";

export { default as debouncePromise } from "./components/promises/debouncepromise";

// ------------- SCRIPTS ------------

import activator from "./scripts/activator";
import lazyload from "./scripts/lazyload";
import createPrototypes from "./scripts/createPrototypes";

export const scripts = {
  activator,
  lazyload,
  createPrototypes
};
