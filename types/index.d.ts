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
declare const scripts: {
    activator: () => [false | IntersectionObserver, false | IntersectionObserver];
    lazyload: () => false | IntersectionObserver;
    createPrototypes: {};
};
export { getUUID, getLast, associativeSlice, levenshteinDistance, match, search, whitelist, hasOwnNestedProperty, isEmail, isEmpty, isJson, isUrl, matrixTranspose, array_column, divide_array, chunks_array, toFormData, getForm, getValue, getIFrame, getIndex, getSiblings, toDOM, appendChildren, addEvent, classScroll, shyScroll, intersectionHelper, lazyloadHelper, scripts, };
declare const _default: {
    getUUID: () => string;
    getLast: (myArray: unknown[]) => unknown;
    associativeSlice: (obj: Record<string, unknown>, start: number, endd: number) => Record<string, unknown>;
    levenshteinDistance: (a: string | null | undefined, b: string | null | undefined) => number;
    match: (string1: string, string2: string, distance?: number) => boolean;
    search: (haystack: Record<string, string>[], needles: [string, string][], mode?: string, distance?: number) => Record<string, string>[];
    whitelist: (objToFilter: Record<string, unknown>, allowed: string[]) => Record<string, unknown>;
    hasOwnNestedProperty: (obj: Record<string, unknown>, propertyPath: string) => boolean;
    isEmail: (string: string) => boolean;
    isEmpty: (test: unknown) => boolean;
    isJson: (test: string) => false | Record<string, unknown>;
    isUrl: (string: string) => boolean;
    matrixTranspose: (m: unknown[][]) => unknown[][];
    array_column: (array: Record<string, unknown>[], column: string) => unknown[];
    divide_array: (array: unknown[], n?: number) => unknown[];
    chunks_array: (array: unknown[], n: number) => unknown[];
    toFormData: (obj: Record<string, unknown>, form?: FormData | null, namespace?: string | null) => FormData;
    getForm: (form: HTMLElement | null, selectors?: string) => Record<string, unknown>;
    getValue: (element: HTMLElement | null, attribute?: string) => string | number | boolean | null;
    getIFrame: (iframe: HTMLElement | HTMLIFrameElement | null) => HTMLElement | HTMLBodyElement | null;
    getIndex: (element: HTMLElement | null) => number;
    getSiblings: (element: HTMLElement | Element | null) => Element[];
    toDOM: (html: string) => NodeListOf<ChildNode>;
    appendChildren: (element: HTMLElement, ...children: HTMLElement[] | Element[]) => HTMLElement;
    addEvent: (parent: Node, eventName: string, childSelector: string | Node, callback: (...args: unknown[]) => void) => void;
    classScroll: (element: HTMLElement | HTMLElement[] | NodeList | HTMLCollection | null, data: import("./components/DOM/events/classscroll").classscrollSettingsMap[]) => void;
    shyScroll: (element: HTMLElement | null, settings?: import("./components/DOM/events/shyscroll").shyscrollSettingsMap) => void;
    intersectionHelper: (element: HTMLElement | HTMLElement[] | NodeList | HTMLCollection | null, settings?: import("./components/DOM/helpers/intersection").intersectionSettingsMap) => false | IntersectionObserver;
    lazyloadHelper: typeof lazyloadHelper;
    scripts: {
        activator: () => [false | IntersectionObserver, false | IntersectionObserver];
        lazyload: () => false | IntersectionObserver;
        createPrototypes: {};
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map