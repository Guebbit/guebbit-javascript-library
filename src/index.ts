import hasOwnNestedProperty from "./components/checkers/hasownnestedproperty";
import isEmail from "./components/checkers/isemail";
import isEmpty from "./components/checkers/isempty";
import isJson from "./components/checkers/isjson";
import isUrl from "./components/checkers/isurl";
import rangeOverlaps from "./components/checkers/rangeoverlaps";

import getUUID from "./components/getters/getuuid";
import getLast from "./components/getters/getlast";
import getOverlapRange from "./components/getters/getoverlaprange";
import getForm from "./components/DOM/getters/getform";
import getValue from "./components/DOM/getters/getvalue";
import getIFrame from "./components/DOM/getters/getiframe";
import getIndex from "./components/DOM/getters/getindex";
import getSiblings from "./components/DOM/getters/getsiblings";

import getDelta from "./components/math/getdelta";
import getMapDistance from "./components/math/getmapdistance";
import matrixTranspose from "./components/math/matrixtranspose";

import arrayColumn from "./components/array/arraycolumn";
import divideArray from "./components/array/dividearray";
import chunksArray from "./components/array/chunksarray";

import debouncePromise from "./components/async/debouncepromise";

import intersectionHelper from "./components/DOM/helpers/intersection";
import lazyloadHelper from "./components/DOM/helpers/lazyload";

import whitelist from "./components/filters/whitelist";
import levenshteinDistance from "./components/filters/levenshteindistance";
import match from "./components/filters/match";
import search from "./components/filters/search";
import associativeSlice from "./components/filters/associativeslice";

import hexToRGB from "./components/converters/hextorgb";
import secondsToTime from "./components/converters/secondstotime";
import timeToSeconds from "./components/converters/timetoseconds";
import toFormData from "./components/converters/toformdata";

import toDOM from "./components/DOM/todom";
import appendChildren from "./components/DOM/appendchildren";

import { addEvent, removeEvent } from "./components/DOM/events/globalevents";
import classScroll from "./components/DOM/events/classscroll";
import stickyJs from "./components/DOM/events/stickyjs";
import shyJs from "./components/DOM/events/shyjs";

import mouseParallax, { calculateMouseParallax, executeMouseParallax, createMouseParallaxItem } from "./components/DOM/manipulation/mouseparallax";

import activator from "./scripts/activator";
import lazyload from "./scripts/lazyload";
import createPrototypes from "./scripts/createPrototypes";

import type { calculationsMap } from "./interfaces";

const scripts = {
	activator,
	lazyload,
	createPrototypes
};

export {
	//getters
	getUUID,
	getLast,
  getOverlapRange,

	//filters
	associativeSlice,
	levenshteinDistance,
	match,
	search,
	whitelist,

	//checkers
	hasOwnNestedProperty,
	isEmail,
	isEmpty,
	isJson,
	isUrl,
  rangeOverlaps,

	//math
  getDelta,
  getMapDistance,
	matrixTranspose,

	//array
	arrayColumn,
	divideArray,
	chunksArray,

  // async
  debouncePromise,

  //converters
  hexToRGB,
  secondsToTime,
  timeToSeconds,
  toFormData,

	// ------------- DOM -------------

	//getters
	getForm,
	getValue,
	getIFrame,
	getIndex,
	getSiblings,

	//manipulations
	toDOM,
	appendChildren,

	//events
	addEvent,
  removeEvent,
	classScroll,
	stickyJs,
  shyJs,

  //manipulation
  mouseParallax,
  calculateMouseParallax,
  executeMouseParallax,
  createMouseParallaxItem,

	//helpers
	intersectionHelper,
	lazyloadHelper,

	scripts,

  // ------------- INTERFACES -------------

  calculationsMap
};



export default {
	//getters
	getUUID,
	getLast,
  getOverlapRange,

	//filters
	associativeSlice,
	levenshteinDistance,
	match,
	search,
	whitelist,

	//checkers
	hasOwnNestedProperty,
	isEmail,
	isEmpty,
	isJson,
	isUrl,
  rangeOverlaps,

	//math
  getDelta,
  getMapDistance,
  matrixTranspose,

	//array
	arrayColumn,
	divideArray,
	chunksArray,

  //converters
  hexToRGB,
  secondsToTime,
  timeToSeconds,
  toFormData,

	// ------------- DOM -------------

	//getters
	getForm,
	getValue,
	getIFrame,
	getIndex,
	getSiblings,

	//manipulations
	toDOM,
	appendChildren,

	//events
	addEvent,
	classScroll,
	stickyJs,

	//helpers
	intersectionHelper,
	lazyloadHelper,

	scripts,

  // INTERFACES CAN'T BE IN DEFAULT EXPORT
};
