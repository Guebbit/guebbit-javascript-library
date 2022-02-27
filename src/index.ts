import hasOwnNestedProperty from "./components/checkers/hasownnestedproperty";
import isEmail from "./components/checkers/isemail";
import isEmpty from "./components/checkers/isempty";
import isJson from "./components/checkers/isjson";
import isUrl from "./components/checkers/isurl";

import getUUID from "./components/getters/getuuid";
import getLast from "./components/getters/getlast";
import getForm from "./components/DOM/getters/getform";
import getValue from "./components/DOM/getters/getvalue";
import getIFrame from "./components/DOM/getters/getiframe";
import getIndex from "./components/DOM/getters/getindex";
import getSiblings from "./components/DOM/getters/getsiblings";

import matrixTranspose from "./components/math/matrixtranspose";

import array_column from "./components/array/array_column";
import divide_array from "./components/array/divide_array";
import chunks_array from "./components/array/chunks_array";

import debouncePromise from "./components/async/debouncepromise";

import intersectionHelper from "./components/DOM/helpers/intersection";
import lazyloadHelper from "./components/DOM/helpers/lazyload";

import whitelist from "./components/filters/whitelist";
import levenshteinDistance from "./components/filters/levenshteindistance";
import match from "./components/filters/match";
import search from "./components/filters/search";
import associativeSlice from "./components/filters/associativeslice";

import toFormData from "./components/converters/toformdata";

import toDOM from "./components/DOM/todom";
import appendChildren from "./components/DOM/appendchildren";

import { addEvent, removeEvent } from "./components/DOM/events/globalevents";
import classScroll from "./components/DOM/events/classscroll";
import stickyJs from "./components/DOM/events/stickyjs";
import shyJs from "./components/DOM/events/shyjs";

import mouseParallax from "./components/DOM/manipulation/mouseparallax";

import activator from "./scripts/activator";
import lazyload from "./scripts/lazyload";
import createPrototypes from "./scripts/createPrototypes";

const scripts = {
	activator,
	lazyload,
	createPrototypes
};

export {
	//getters
	getUUID,
	getLast,

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

	//math
	matrixTranspose,

	//array
	array_column,
	divide_array,
	chunks_array,

  // async
  debouncePromise,

	//manipulations
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

	//helpers
	intersectionHelper,
	lazyloadHelper,

	scripts,
};



export default {
	//getters
	getUUID,
	getLast,

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

	//math
	matrixTranspose,

	//array
	array_column,
	divide_array,
	chunks_array,

	//manipulations
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
};
