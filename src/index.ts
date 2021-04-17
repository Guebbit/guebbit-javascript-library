//export * from './components';


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

import addEvent from "./components/DOM/events/add";
import classScroll from "./components/DOM/events/classscroll";
import shyScroll from "./components/DOM/events/shyscroll";


import activator from "./scripts/activator";
import lazyload from "./scripts/lazyload";
import addEventPrototype from "./scripts/addEvent";

const scripts = {
	activator,
	lazyload,
	addEventPrototype
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
	shyScroll,

	//helpers
	intersectionHelper,
	lazyloadHelper,

	scripts,
};
