import hasOwnNestedProperty from "./checkers/hasownnestedproperty";
import isEmail from "./checkers/isemail";
import isEmpty from "./checkers/isempty";
import isJson from "./checkers/isjson";
import isUrl from "./checkers/isurl";
import isVisible from "./checkers/isvisible";

import getUUID from "./getters/getuuid";
import getLast from "./getters/getlast";
import getForm from "./getters/getform";
import getValue from "./getters/getvalue";
import getSelected from "./getters/getselected";
import getIFrame from "./getters/getiframe";
import getIndex from "./getters/getindex";
import getSiblings from "./getters/getsiblings";

import matrixTranspose from "./math/matrixtranspose";

import array_column from "./array/array_column";
import divide_array from "./array/divide_array";
import chunks_array from "./array/chunks_array";


import intersectionHelper from "./helpers/intersection";
import lazyloadHelper from "./helpers/lazyload";

import whitelist from "./filters/whitelist";
import levenshteinDistance from "./filters/levenshteindistance";
import match from "./filters/match";
import search from "./filters/search";
import associativeSlice from "./filters/associativeslice";

import toFormData from "./converters/toformdata";

import formatDOM from "./DOM/formatdom";
import toDom from "./DOM/todom";
import mouseParallax from "./DOM/mouseparallax";
import hide from "./DOM/hide";
import show from "./DOM/show";
import appendChildren from "./DOM/appendchildren";
import { setCenterScrollVertical, setCenterScrollHorizontal, setCenterScroll } from "./DOM/scrollposition";

import addEvent from "./DOM/events/add";
import classScroll from "./DOM/events/classscroll";
import shyScroll from "./DOM/events/shyscroll";

export {

	//getters
	getUUID,
	getLast,
	getForm,
	getValue,
	getSelected,
	getIFrame,
	getIndex,
	getSiblings,

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
	isVisible,	//DOM

	//math
	matrixTranspose,

	//array
	array_column,
	divide_array,
	chunks_array,

	//helpers
	intersectionHelper,
	lazyloadHelper,

	//manipulations
	toFormData,

	// ------------- DOM -------------

	//manipulations
	formatDOM,
	toDom,
	mouseParallax,
	hide,
	show,
	appendChildren,
	setCenterScrollVertical,
	setCenterScrollHorizontal,
	setCenterScroll,

	//events
	addEvent,
	classScroll,
	shyScroll,

};
