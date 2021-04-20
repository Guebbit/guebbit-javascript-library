Guebbit Javascript Library

# Guebbit Javascript Library

## Table of contents

### References

- [lazyloadHelper](README.md#lazyloadhelper)

### Properties

- [addEvent](README.md#addevent)
- [appendChildren](README.md#appendchildren)
- [array\_column](README.md#array_column)
- [associativeSlice](README.md#associativeslice)
- [chunks\_array](README.md#chunks_array)
- [classScroll](README.md#classscroll)
- [default](README.md#default)
- [divide\_array](README.md#divide_array)
- [getForm](README.md#getform)
- [getIFrame](README.md#getiframe)
- [getIndex](README.md#getindex)
- [getLast](README.md#getlast)
- [getSiblings](README.md#getsiblings)
- [getUUID](README.md#getuuid)
- [getValue](README.md#getvalue)
- [hasOwnNestedProperty](README.md#hasownnestedproperty)
- [intersectionHelper](README.md#intersectionhelper)
- [isEmail](README.md#isemail)
- [isEmpty](README.md#isempty)
- [isJson](README.md#isjson)
- [isUrl](README.md#isurl)
- [levenshteinDistance](README.md#levenshteindistance)
- [match](README.md#match)
- [matrixTranspose](README.md#matrixtranspose)
- [search](README.md#search)
- [shyScroll](README.md#shyscroll)
- [toDOM](README.md#todom)
- [whitelist](README.md#whitelist)

### Variables

- [scripts](README.md#scripts)

### Functions

- [toFormData](README.md#toformdata)

## References

### lazyloadHelper

Renames and exports: [\_\_type](README.md#__type)

## Properties

### addEvent

• **addEvent**: (`parent`: Node, `eventName`: *string*, `childSelector`: *string* \| Node, `callback`: (...`args`: *unknown*[]) => *void*) => *void*

#### Type declaration:

▸ (`parent`: Node, `eventName`: *string*, `childSelector`: *string* \| Node, `callback`: (...`args`: *unknown*[]) => *void*): *void*

	equivalente Jquery di .on()

#### Parameters:

| Name | Type |
| :------ | :------ |
| `parent` | Node |
| `eventName` | *string* |
| `childSelector` | *string* \| Node |
| `callback` | (...`args`: *unknown*[]) => *void* |

**Returns:** *void*

addEventListener

Defined in: [components/DOM/events/add.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/DOM/events/add.ts#L1)

___

### appendChildren

• **appendChildren**: (`element`: HTMLElement, ...`children`: HTMLElement[] \| Element[]) => HTMLElement

#### Type declaration:

▸ (`element`: HTMLElement, ...`children`: HTMLElement[] \| Element[]): HTMLElement

	javascript appendChild for arrays

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | HTMLElement |
| `...children` | HTMLElement[] \| Element[] |

**Returns:** HTMLElement

Defined in: [components/DOM/appendchildren.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/DOM/appendchildren.ts#L1)

___

### array\_column

• **array\_column**: (`array`: *any*[], `column`: *string*) => *any*[]

#### Type declaration:

▸ (`array`: *any*[], `column`: *string*): *any*[]

	php array_column
	Return the values from a single column in the input array

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | *any*[] | array |
| `column` | *string* | - |

**Returns:** *any*[]

Defined in: [components/array/array_column.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/array/array_column.ts#L1)

___

### associativeSlice

• **associativeSlice**: (`obj`: *Record*<string, unknown\>, `start`: *number*, `endd`: *number*) => *any*

#### Type declaration:

▸ (`obj`: *Record*<string, unknown\>, `start`: *number*, `endd`: *number*): *any*

	slice associative arrays / objects
	Funziona come array.slice() ma i numeri sono "immaginari", basati sull'ordine in cui sono stati inseriti

#### Parameters:

| Name | Type |
| :------ | :------ |
| `obj` | *Record*<string, unknown\> |
| `start` | *number* |
| `endd` | *number* |

**Returns:** *any*

object sliced associative array / object to slice

Defined in: [components/filters/associativeslice.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/filters/associativeslice.ts#L1)

___

### chunks\_array

• **chunks\_array**: (`array`: *unknown*[], `n`: *number*) => *unknown*[]

#### Type declaration:

▸ (`array`: *unknown*[], `n`: *number*): *unknown*[]

	Divide array in N numbers of sub-arrays.
	Sub-arrays' lengths differ as less as possible

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | *unknown*[] | items: array to split |
| `n` | *number* | - |

**Returns:** *unknown*[]

Defined in: [components/array/chunks_array.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/array/chunks_array.ts#L1)

___

### classScroll

• **classScroll**: (`element`: ``null`` \| HTMLElement \| HTMLElement[] \| NodeList \| HTMLCollection, `data`: classscrollSettingsMap[]) => *void*

#### Type declaration:

▸ (`element`: ``null`` \| HTMLElement \| HTMLElement[] \| NodeList \| HTMLCollection, `data`: classscrollSettingsMap[]): *void*

	Classi che aggiungo (o rimuovo) ad un certo scrollY

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | ``null`` \| HTMLElement \| HTMLElement[] \| NodeList \| HTMLCollection |
| `data` | classscrollSettingsMap[] |

**Returns:** *void*

Defined in: [components/DOM/events/classscroll.ts:8](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/DOM/events/classscroll.ts#L8)

___

### default

• **default**: *object*

#### Type declaration:

| Name | Type |
| :------ | :------ |
| `addEvent` | (`parent`: Node, `eventName`: *string*, `childSelector`: *string* \| Node, `callback`: (...`args`: *unknown*[]) => *void*) => *void* |
| `appendChildren` | (`element`: HTMLElement, ...`children`: HTMLElement[] \| Element[]) => HTMLElement |
| `array_column` | (`array`: *any*[], `column`: *string*) => *any*[] |
| `associativeSlice` | (`obj`: *Record*<string, unknown\>, `start`: *number*, `endd`: *number*) => *any* |
| `chunks_array` | (`array`: *unknown*[], `n`: *number*) => *unknown*[] |
| `classScroll` | (`element`: ``null`` \| HTMLElement \| HTMLElement[] \| NodeList \| HTMLCollection, `data`: classscrollSettingsMap[]) => *void* |
| `divide_array` | (`array`: *unknown*[], `n`: *number*) => *unknown*[] |
| `getForm` | (`form`: ``null`` \| HTMLElement, `selectors`: *string*) => *Record*<string, unknown\> |
| `getIFrame` | (`iframe`: ``null`` \| HTMLElement \| HTMLIFrameElement) => ``null`` \| HTMLElement \| HTMLBodyElement |
| `getIndex` | (`element`: ``null`` \| HTMLElement) => *number* |
| `getLast` | (`myArray`: *unknown*[]) => *unknown* |
| `getSiblings` | (`element`: ``null`` \| HTMLElement \| Element) => Element[] |
| `getUUID` | () => *string* |
| `getValue` | (`element`: ``null`` \| HTMLElement, `attribute`: *string*) => ``null`` \| *string* \| *number* \| *boolean* |
| `hasOwnNestedProperty` | (`obj`: *Record*<string, unknown\>, `propertyPath`: *string*) => *boolean* |
| `intersectionHelper` | (`element`: ``null`` \| HTMLElement \| HTMLElement[] \| NodeList \| HTMLCollection, `settings`: intersectionSettingsMap) => ``false`` \| IntersectionObserver |
| `isEmail` | (`string`: *string*) => *boolean* |
| `isEmpty` | (`test`: *unknown*) => *boolean* |
| `isJson` | (`test`: *string*) => ``false`` \| *Record*<string, unknown\> |
| `isUrl` | (`string`: *string*) => *boolean* |
| `lazyloadHelper` | (`element`: HTMLElement \| HTMLElement[] \| NodeList \| HTMLCollection \| ``null``) => *void* |
| `levenshteinDistance` | (`a`: *undefined* \| ``null`` \| *string*, `b`: *undefined* \| ``null`` \| *string*) => *number* |
| `match` | (`string1`: *string*, `string2`: *string*, `distance`: *number*) => *boolean* |
| `matrixTranspose` | (`m`: *unknown*[][]) => *unknown*[][] |
| `scripts` | *object* |
| `scripts.activator` | () => [``false`` \| IntersectionObserver, ``false`` \| IntersectionObserver] |
| `scripts.createPrototypes` | *object* |
| `scripts.lazyload` | () => ``false`` \| IntersectionObserver |
| `search` | (`haystack`: *any*[], `needles`: [*string*, *string*][], `mode`: *string*, `distance`: *number*) => *any*[] |
| `shyScroll` | (`element`: ``null`` \| HTMLElement, `settings`: shyscrollSettingsMap) => *void* |
| `toDOM` | (`html`: *string*) => *NodeListOf*<ChildNode\> |
| `toFormData` | (`obj`: *any*, `form`: ``null`` \| FormData, `namespace`: ``null`` \| *string*) => FormData |
| `whitelist` | (`objToFilter`: *Record*<string, unknown\>, `allowed`: *string*[]) => *Record*<string, unknown\> |

___

### divide\_array

• **divide\_array**: (`array`: *unknown*[], `n`: *number*) => *unknown*[]

#### Type declaration:

▸ (`array`: *unknown*[], `n?`: *number*): *unknown*[]

	Divide array in equals sub arrays

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | *unknown*[] | - | array: any array |
| `n` | *number* | 0 | - |

**Returns:** *unknown*[]

Defined in: [components/array/divide_array.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/array/divide_array.ts#L1)

___

### getForm

• **getForm**: (`form`: ``null`` \| HTMLElement, `selectors`: *string*) => *Record*<string, unknown\>

#### Type declaration:

▸ (`form`: ``null`` \| HTMLElement, `selectors?`: *string*): *Record*<string, unknown\>

	Raccolgo tutti i valori inseriti in input e textarea dentro l'elemento

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `form` | ``null`` \| HTMLElement | - |
| `selectors` | *string* | "input, textarea, select" |

**Returns:** *Record*<string, unknown\>

array ["name":"value"]

Defined in: [components/DOM/getters/getform.ts:2](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/DOM/getters/getform.ts#L2)

___

### getIFrame

• **getIFrame**: (`iframe`: ``null`` \| HTMLElement \| HTMLIFrameElement) => ``null`` \| HTMLElement \| HTMLBodyElement

#### Type declaration:

▸ (`iframe`: ``null`` \| HTMLElement \| HTMLIFrameElement): ``null`` \| HTMLElement \| HTMLBodyElement

	Ottengo il documento interno di un iframe

#### Parameters:

| Name | Type |
| :------ | :------ |
| `iframe` | ``null`` \| HTMLElement \| HTMLIFrameElement |

**Returns:** ``null`` \| HTMLElement \| HTMLBodyElement

HTMLElement

Defined in: [components/DOM/getters/getiframe.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/DOM/getters/getiframe.ts#L1)

___

### getIndex

• **getIndex**: (`element`: ``null`` \| HTMLElement) => *number*

#### Type declaration:

▸ (`element`: ``null`` \| HTMLElement): *number*

	equivalente Jquery di .index()

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | ``null`` \| HTMLElement |

**Returns:** *number*

mixed ultimo elemento dell'array

Defined in: [components/DOM/getters/getindex.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/DOM/getters/getindex.ts#L1)

___

### getLast

• **getLast**: (`myArray`: *unknown*[]) => *unknown*

#### Type declaration:

▸ (`myArray`: *unknown*[]): *unknown*

	tiro fuori l'ultimo elemento di un array

#### Parameters:

| Name | Type |
| :------ | :------ |
| `myArray` | *unknown*[] |

**Returns:** *unknown*

mixed ultimo elemento dell'array

Defined in: [components/getters/getlast.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/getters/getlast.ts#L1)

___

### getSiblings

• **getSiblings**: (`element`: ``null`` \| HTMLElement \| Element) => Element[]

#### Type declaration:

▸ (`element`: ``null`` \| HTMLElement \| Element): Element[]

	equivalente Jquery di .siblings()

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | ``null`` \| HTMLElement \| Element |

**Returns:** Element[]

array of siblings

Defined in: [components/DOM/getters/getsiblings.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/DOM/getters/getsiblings.ts#L1)

___

### getUUID

• **getUUID**: () => *string*

#### Type declaration:

▸ (): *string*

	Creo un id univoco così complicato che la collisione è impossibile
	[ECMAScript 6] random v4 UUID (gxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx)
	(per motivi di compatibilità, nella creazione di ID, non deve iniziare con un numero)
	WARNING: for CRYPTO SECURE use https://github.com/uuidjs/uuid

**Returns:** *string*

string random id

Defined in: [components/getters/getuuid.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/getters/getuuid.ts#L1)

___

### getValue

• **getValue**: (`element`: ``null`` \| HTMLElement, `attribute`: *string*) => ``null`` \| *string* \| *number* \| *boolean*

#### Type declaration:

▸ (`element`: ``null`` \| HTMLElement, `attribute?`: *string*): ``null`` \| *string* \| *number* \| *boolean*

	Ottieni valore\contenuto di un elemento (singolo)

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `element` | ``null`` \| HTMLElement | - |
| `attribute` | *string* | '' |

**Returns:** ``null`` \| *string* \| *number* \| *boolean*

string

Defined in: [components/DOM/getters/getvalue.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/DOM/getters/getvalue.ts#L1)

___

### hasOwnNestedProperty

• **hasOwnNestedProperty**: (`obj`: *Record*<string, unknown\>, `propertyPath`: *string*) => *boolean*

#### Type declaration:

▸ (`obj`: *Record*<string, unknown\>, `propertyPath`: *string*): *boolean*

	hasOwnProperty but with recursion

#### Parameters:

| Name | Type |
| :------ | :------ |
| `obj` | *Record*<string, unknown\> |
| `propertyPath` | *string* |

**Returns:** *boolean*

Defined in: [components/checkers/hasownnestedproperty.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/checkers/hasownnestedproperty.ts#L1)

___

### intersectionHelper

• **intersectionHelper**: (`element`: ``null`` \| HTMLElement \| HTMLElement[] \| NodeList \| HTMLCollection, `settings`: intersectionSettingsMap) => ``false`` \| IntersectionObserver

#### Type declaration:

▸ (`element`: ``null`` \| HTMLElement \| HTMLElement[] \| NodeList \| HTMLCollection, `settings?`: intersectionSettingsMap): ``false`` \| IntersectionObserver

	IntersectionObserver helper, per programmarlo meglio

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `element` | ``null`` \| HTMLElement \| HTMLElement[] \| NodeList \| HTMLCollection | - |
| `settings` | intersectionSettingsMap | {} |

**Returns:** ``false`` \| IntersectionObserver

Defined in: [components/DOM/helpers/intersection.ts:10](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/DOM/helpers/intersection.ts#L10)

___

### isEmail

• **isEmail**: (`string`: *string*) => *boolean*

#### Type declaration:

▸ (`string`: *string*): *boolean*

	Determino se si tratta di una mail

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | *string* | string |

**Returns:** *boolean*

boolean

Defined in: [components/checkers/isemail.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/checkers/isemail.ts#L1)

___

### isEmpty

• **isEmpty**: (`test`: *unknown*) => *boolean*

#### Type declaration:

▸ (`test`: *unknown*): *boolean*

	PHP's empty() equivalent, different from lodash's isEmpty

#### Parameters:

| Name | Type |
| :------ | :------ |
| `test` | *unknown* |

**Returns:** *boolean*

bool

Defined in: [components/checkers/isempty.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/checkers/isempty.ts#L1)

___

### isJson

• **isJson**: (`test`: *string*) => ``false`` \| *Record*<string, unknown\>

#### Type declaration:

▸ (`test`: *string*): ``false`` \| *Record*<string, unknown\>

	controllo se l'oggetto è un JSON

#### Parameters:

| Name | Type |
| :------ | :------ |
| `test` | *string* |

**Returns:** ``false`` \| *Record*<string, unknown\>

string il json già estratto, oppure bool = false

Defined in: [components/checkers/isjson.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/checkers/isjson.ts#L1)

___

### isUrl

• **isUrl**: (`string`: *string*) => *boolean*

#### Type declaration:

▸ (`string`: *string*): *boolean*

	Determino se url

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | *string* | string |

**Returns:** *boolean*

boolean

Defined in: [components/checkers/isurl.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/checkers/isurl.ts#L1)

___

### levenshteinDistance

• **levenshteinDistance**: (`a`: *undefined* \| ``null`` \| *string*, `b`: *undefined* \| ``null`` \| *string*) => *number*

#### Type declaration:

▸ (`a`: *undefined* \| ``null`` \| *string*, `b`: *undefined* \| ``null`` \| *string*): *number*

	Compute the edit distance between the two given strings

#### Parameters:

| Name | Type |
| :------ | :------ |
| `a` | *undefined* \| ``null`` \| *string* |
| `b` | *undefined* \| ``null`` \| *string* |

**Returns:** *number*

Defined in: [components/filters/levenshteindistance.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/filters/levenshteindistance.ts#L1)

___

### match

• **match**: (`string1`: *string*, `string2`: *string*, `distance`: *number*) => *boolean*

#### Type declaration:

▸ (`string1`: *string*, `string2`: *string*, `distance?`: *number*): *boolean*

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `string1` | *string* | - |
| `string2` | *string* | - |
| `distance` | *number* | 4 |

**Returns:** *boolean*

Defined in: [components/filters/match.ts:22](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/filters/match.ts#L22)

___

### matrixTranspose

• **matrixTranspose**: (`m`: *unknown*[][]) => *unknown*[][]

#### Type declaration:

▸ (`m`: *unknown*[][]): *unknown*[][]

	Transpose a matrix. Invert rows and columns
  [1,2,3],			[1,1,1],
  [1,2,3],	=> 		[2,2,2],
  [1,2,3],			[3,3,3],

#### Parameters:

| Name | Type |
| :------ | :------ |
| `m` | *unknown*[][] |

**Returns:** *unknown*[][]

Defined in: [components/math/matrixtranspose.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/math/matrixtranspose.ts#L1)

___

### search

• **search**: (`haystack`: *any*[], `needles`: [*string*, *string*][], `mode`: *string*, `distance`: *number*) => *any*[]

#### Type declaration:

▸ (`haystack`: *any*[], `needles`: [*string*, *string*][], `mode?`: *string*, `distance?`: *number*): *any*[]

	return Search(ArrayOfValues, searchable);

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `haystack` | *any*[] | - |
| `needles` | [*string*, *string*][] | - |
| `mode` | *string* | "AND" |
| `distance` | *number* | -1 |

**Returns:** *any*[]

Defined in: [components/filters/search.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/filters/search.ts#L1)

___

### shyScroll

• **shyScroll**: (`element`: ``null`` \| HTMLElement, `settings`: shyscrollSettingsMap) => *void*

#### Type declaration:

▸ (`element`: ``null`` \| HTMLElement, `settings?`: shyscrollSettingsMap): *void*

	sticky header che si mostra o nasconde in base allo scroll (necessita di "transition: top 0.1s")

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `element` | ``null`` \| HTMLElement | - |
| `settings` | shyscrollSettingsMap | {} |

**Returns:** *void*

Defined in: [components/DOM/events/shyscroll.ts:13](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/DOM/events/shyscroll.ts#L13)

___

### toDOM

• **toDOM**: (`html`: *string*) => *NodeListOf*<ChildNode\>

#### Type declaration:

▸ (`html`: *string*): *NodeListOf*<ChildNode\>

	Trasforma una stringa in un elemento

#### Parameters:

| Name | Type |
| :------ | :------ |
| `html` | *string* |

**Returns:** *NodeListOf*<ChildNode\>

HTML converted

Defined in: [components/DOM/todom.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/DOM/todom.ts#L1)

___

### whitelist

• **whitelist**: (`objToFilter`: *Record*<string, unknown\>, `allowed`: *string*[]) => *Record*<string, unknown\>

#### Type declaration:

▸ (`objToFilter`: *Record*<string, unknown\>, `allowed`: *string*[]): *Record*<string, unknown\>

	WHITELIST
	Filter object by array of allowed values

#### Parameters:

| Name | Type |
| :------ | :------ |
| `objToFilter` | *Record*<string, unknown\> |
| `allowed` | *string*[] |

**Returns:** *Record*<string, unknown\>

Defined in: [components/filters/whitelist.ts:1](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/filters/whitelist.ts#L1)

## Variables

### scripts

• `Const` **scripts**: *object*

#### Type declaration:

| Name | Type |
| :------ | :------ |
| `activator` | () => [``false`` \| IntersectionObserver, ``false`` \| IntersectionObserver] |
| `createPrototypes` | *object* |
| `lazyload` | () => ``false`` \| IntersectionObserver |

Defined in: [index.ts:45](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/index.ts#L45)

## Functions

### toFormData

▸ `Const`**toFormData**(`obj`: *any*, `form?`: ``null`` \| FormData, `namespace?`: ``null`` \| *string*): FormData

	Trasformo un array normale in un FormData
	Necessario per il passaggio di file o per evitare l'uso di php:\\input
	WARNING formData appiattisce tutti gli array multidimensionali,
	quindi è meglio trasformarli in un json.
	JSON.stringify(); prima e poi json_decode($_POST['']); nel php

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | *any* | - |
| `form` | ``null`` \| FormData | null |
| `namespace` | ``null`` \| *string* | null |

**Returns:** FormData

Defined in: [components/converters/toformdata.ts:26](https://github.com/Guebbit/guebbit-javascript-library/blob/edafe94/src/components/converters/toformdata.ts#L26)
