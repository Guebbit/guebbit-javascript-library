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

#### Type declaration

▸ (`parent`: Node, `eventName`: *string*, `childSelector`: *string* \| Node, `callback`: (...`args`: *unknown*[]) => *void*): *void*

	equivalente Jquery di .on()

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | Node |
| `eventName` | *string* |
| `childSelector` | *string* \| Node |
| `callback` | (...`args`: *unknown*[]) => *void* |

**Returns:** *void*

addEventListener

___

### appendChildren

• **appendChildren**: (`element`: HTMLElement, ...`children`: HTMLElement[] \| Element[]) => HTMLElement

#### Type declaration

▸ (`element`: HTMLElement, ...`children`: HTMLElement[] \| Element[]): HTMLElement

	javascript appendChild for arrays

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | HTMLElement |
| `...children` | HTMLElement[] \| Element[] |

**Returns:** HTMLElement

___

### array\_column

• **array\_column**: (`array`: *Record*<string, unknown\>[], `column`: *string*) => *unknown*[]

#### Type declaration

▸ (`array`: *Record*<string, unknown\>[], `column`: *string*): *unknown*[]

	php array_column
	Return the values from a single column in the input array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | *Record*<string, unknown\>[] | array |
| `column` | *string* | - |

**Returns:** *unknown*[]

___

### associativeSlice

• **associativeSlice**: (`obj`: *Record*<string, unknown\>, `start`: *number*, `endd`: *number*) => *Record*<string, unknown\>

#### Type declaration

▸ (`obj`: *Record*<string, unknown\>, `start`: *number*, `endd`: *number*): *Record*<string, unknown\>

	slice associative arrays / objects
	Funziona come array.slice() ma i numeri sono "immaginari", basati sull'ordine in cui sono stati inseriti

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | *Record*<string, unknown\> |
| `start` | *number* |
| `endd` | *number* |

**Returns:** *Record*<string, unknown\>

object sliced associative array / object to slice

___

### chunks\_array

• **chunks\_array**: (`array`: *unknown*[], `n`: *number*) => *unknown*[]

#### Type declaration

▸ (`array`: *unknown*[], `n`: *number*): *unknown*[]

	Divide array in N numbers of sub-arrays.
	Sub-arrays' lengths differ as less as possible

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | *unknown*[] | items: array to split |
| `n` | *number* | - |

**Returns:** *unknown*[]

___

### classScroll

• **classScroll**: (`element`: ``null`` \| HTMLElement \| HTMLElement[] \| NodeList \| HTMLCollection, `data`: classscrollSettingsMap[]) => *void*

#### Type declaration

▸ (`element`: ``null`` \| HTMLElement \| HTMLElement[] \| NodeList \| HTMLCollection, `data`: classscrollSettingsMap[]): *void*

	Classi che aggiungo (o rimuovo) ad un certo scrollY

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | ``null`` \| HTMLElement \| HTMLElement[] \| NodeList \| HTMLCollection |
| `data` | classscrollSettingsMap[] |

**Returns:** *void*

___

### default

• **default**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addEvent` | (`parent`: Node, `eventName`: *string*, `childSelector`: *string* \| Node, `callback`: (...`args`: *unknown*[]) => *void*) => *void* |
| `appendChildren` | (`element`: HTMLElement, ...`children`: HTMLElement[] \| Element[]) => HTMLElement |
| `array_column` | (`array`: *Record*<string, unknown\>[], `column`: *string*) => *unknown*[] |
| `associativeSlice` | (`obj`: *Record*<string, unknown\>, `start`: *number*, `endd`: *number*) => *Record*<string, unknown\> |
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
| `search` | (`haystack`: *Record*<string, string\>[], `needles`: [*string*, *string*][], `mode`: *string*, `distance`: *number*) => *Record*<string, string\>[] |
| `shyScroll` | (`element`: ``null`` \| HTMLElement, `settings`: shyscrollSettingsMap) => *void* |
| `toDOM` | (`html`: *string*) => *NodeListOf*<ChildNode\> |
| `toFormData` | (`obj`: *Record*<string, unknown\>, `form`: ``null`` \| FormData, `namespace`: ``null`` \| *string*) => FormData |
| `whitelist` | (`objToFilter`: *Record*<string, unknown\>, `allowed`: *string*[]) => *Record*<string, unknown\> |

___

### divide\_array

• **divide\_array**: (`array`: *unknown*[], `n`: *number*) => *unknown*[]

#### Type declaration

▸ (`array`: *unknown*[], `n?`: *number*): *unknown*[]

	Divide array in equals sub arrays

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | *unknown*[] | - | array: any array |
| `n` | *number* | 0 | - |

**Returns:** *unknown*[]

___

### getForm

• **getForm**: (`form`: ``null`` \| HTMLElement, `selectors`: *string*) => *Record*<string, unknown\>

#### Type declaration

▸ (`form`: ``null`` \| HTMLElement, `selectors?`: *string*): *Record*<string, unknown\>

	Raccolgo tutti i valori inseriti in input e textarea dentro l'elemento

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `form` | ``null`` \| HTMLElement | - |
| `selectors` | *string* | "input, textarea, select" |

**Returns:** *Record*<string, unknown\>

array ["name":"value"]

___

### getIFrame

• **getIFrame**: (`iframe`: ``null`` \| HTMLElement \| HTMLIFrameElement) => ``null`` \| HTMLElement \| HTMLBodyElement

#### Type declaration

▸ (`iframe`: ``null`` \| HTMLElement \| HTMLIFrameElement): ``null`` \| HTMLElement \| HTMLBodyElement

	Ottengo il documento interno di un iframe

#### Parameters

| Name | Type |
| :------ | :------ |
| `iframe` | ``null`` \| HTMLElement \| HTMLIFrameElement |

**Returns:** ``null`` \| HTMLElement \| HTMLBodyElement

HTMLElement

___

### getIndex

• **getIndex**: (`element`: ``null`` \| HTMLElement) => *number*

#### Type declaration

▸ (`element`: ``null`` \| HTMLElement): *number*

	equivalente Jquery di .index()

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | ``null`` \| HTMLElement |

**Returns:** *number*

mixed ultimo elemento dell'array

___

### getLast

• **getLast**: (`myArray`: *unknown*[]) => *unknown*

#### Type declaration

▸ (`myArray`: *unknown*[]): *unknown*

	tiro fuori l'ultimo elemento di un array

#### Parameters

| Name | Type |
| :------ | :------ |
| `myArray` | *unknown*[] |

**Returns:** *unknown*

mixed ultimo elemento dell'array

___

### getSiblings

• **getSiblings**: (`element`: ``null`` \| HTMLElement \| Element) => Element[]

#### Type declaration

▸ (`element`: ``null`` \| HTMLElement \| Element): Element[]

	equivalente Jquery di .siblings()

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | ``null`` \| HTMLElement \| Element |

**Returns:** Element[]

array of siblings

___

### getUUID

• **getUUID**: () => *string*

#### Type declaration

▸ (): *string*

	Creo un id univoco così complicato che la collisione è impossibile
	[ECMAScript 6] random v4 UUID (gxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx)
	(per motivi di compatibilità, nella creazione di ID, non deve iniziare con un numero)
	WARNING: for CRYPTO SECURE use https://github.com/uuidjs/uuid

**Returns:** *string*

string random id

___

### getValue

• **getValue**: (`element`: ``null`` \| HTMLElement, `attribute`: *string*) => ``null`` \| *string* \| *number* \| *boolean*

#### Type declaration

▸ (`element`: ``null`` \| HTMLElement, `attribute?`: *string*): ``null`` \| *string* \| *number* \| *boolean*

	Ottieni valore\contenuto di un elemento (singolo)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `element` | ``null`` \| HTMLElement | - |
| `attribute` | *string* | '' |

**Returns:** ``null`` \| *string* \| *number* \| *boolean*

string

___

### hasOwnNestedProperty

• **hasOwnNestedProperty**: (`obj`: *Record*<string, unknown\>, `propertyPath`: *string*) => *boolean*

#### Type declaration

▸ (`obj`: *Record*<string, unknown\>, `propertyPath`: *string*): *boolean*

	hasOwnProperty but with recursion

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | *Record*<string, unknown\> |
| `propertyPath` | *string* |

**Returns:** *boolean*

___

### intersectionHelper

• **intersectionHelper**: (`element`: ``null`` \| HTMLElement \| HTMLElement[] \| NodeList \| HTMLCollection, `settings`: intersectionSettingsMap) => ``false`` \| IntersectionObserver

#### Type declaration

▸ (`element`: ``null`` \| HTMLElement \| HTMLElement[] \| NodeList \| HTMLCollection, `settings?`: intersectionSettingsMap): ``false`` \| IntersectionObserver

	IntersectionObserver helper, per programmarlo meglio

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `element` | ``null`` \| HTMLElement \| HTMLElement[] \| NodeList \| HTMLCollection | - |
| `settings` | intersectionSettingsMap | {} |

**Returns:** ``false`` \| IntersectionObserver

___

### isEmail

• **isEmail**: (`string`: *string*) => *boolean*

#### Type declaration

▸ (`string`: *string*): *boolean*

	Determino se si tratta di una mail

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | *string* | string |

**Returns:** *boolean*

boolean

___

### isEmpty

• **isEmpty**: (`test`: *unknown*) => *boolean*

#### Type declaration

▸ (`test`: *unknown*): *boolean*

	PHP's empty() equivalent, different from lodash's isEmpty

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | *unknown* |

**Returns:** *boolean*

bool

___

### isJson

• **isJson**: (`test`: *string*) => ``false`` \| *Record*<string, unknown\>

#### Type declaration

▸ (`test`: *string*): ``false`` \| *Record*<string, unknown\>

	controllo se l'oggetto è un JSON

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | *string* |

**Returns:** ``false`` \| *Record*<string, unknown\>

string il json già estratto, oppure bool = false

___

### isUrl

• **isUrl**: (`string`: *string*) => *boolean*

#### Type declaration

▸ (`string`: *string*): *boolean*

	Determino se url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | *string* | string |

**Returns:** *boolean*

boolean

___

### levenshteinDistance

• **levenshteinDistance**: (`a`: *undefined* \| ``null`` \| *string*, `b`: *undefined* \| ``null`` \| *string*) => *number*

#### Type declaration

▸ (`a`: *undefined* \| ``null`` \| *string*, `b`: *undefined* \| ``null`` \| *string*): *number*

	Compute the edit distance between the two given strings

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | *undefined* \| ``null`` \| *string* |
| `b` | *undefined* \| ``null`` \| *string* |

**Returns:** *number*

___

### match

• **match**: (`string1`: *string*, `string2`: *string*, `distance`: *number*) => *boolean*

#### Type declaration

▸ (`string1`: *string*, `string2`: *string*, `distance?`: *number*): *boolean*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `string1` | *string* | - |
| `string2` | *string* | - |
| `distance` | *number* | 4 |

**Returns:** *boolean*

___

### matrixTranspose

• **matrixTranspose**: (`m`: *unknown*[][]) => *unknown*[][]

#### Type declaration

▸ (`m`: *unknown*[][]): *unknown*[][]

	Transpose a matrix. Invert rows and columns
  [1,2,3],			[1,1,1],
  [1,2,3],	=> 		[2,2,2],
  [1,2,3],			[3,3,3],

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | *unknown*[][] |

**Returns:** *unknown*[][]

___

### search

• **search**: (`haystack`: *Record*<string, string\>[], `needles`: [*string*, *string*][], `mode`: *string*, `distance`: *number*) => *Record*<string, string\>[]

#### Type declaration

▸ (`haystack`: *Record*<string, string\>[], `needles`: [*string*, *string*][], `mode?`: *string*, `distance?`: *number*): *Record*<string, string\>[]

	return Search(ArrayOfValues, searchable);

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `haystack` | *Record*<string, string\>[] | - |
| `needles` | [*string*, *string*][] | - |
| `mode` | *string* | "AND" |
| `distance` | *number* | -1 |

**Returns:** *Record*<string, string\>[]

___

### shyScroll

• **shyScroll**: (`element`: ``null`` \| HTMLElement, `settings`: shyscrollSettingsMap) => *void*

#### Type declaration

▸ (`element`: ``null`` \| HTMLElement, `settings?`: shyscrollSettingsMap): *void*

	sticky header che si mostra o nasconde in base allo scroll (necessita di "transition: top 0.1s")

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `element` | ``null`` \| HTMLElement | - |
| `settings` | shyscrollSettingsMap | {} |

**Returns:** *void*

___

### toDOM

• **toDOM**: (`html`: *string*) => *NodeListOf*<ChildNode\>

#### Type declaration

▸ (`html`: *string*): *NodeListOf*<ChildNode\>

	Trasforma una stringa in un elemento

#### Parameters

| Name | Type |
| :------ | :------ |
| `html` | *string* |

**Returns:** *NodeListOf*<ChildNode\>

HTML converted

___

### whitelist

• **whitelist**: (`objToFilter`: *Record*<string, unknown\>, `allowed`: *string*[]) => *Record*<string, unknown\>

#### Type declaration

▸ (`objToFilter`: *Record*<string, unknown\>, `allowed`: *string*[]): *Record*<string, unknown\>

	WHITELIST
	Filter object by array of allowed values

#### Parameters

| Name | Type |
| :------ | :------ |
| `objToFilter` | *Record*<string, unknown\> |
| `allowed` | *string*[] |

**Returns:** *Record*<string, unknown\>

## Variables

### scripts

• `Const` **scripts**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `activator` | () => [``false`` \| IntersectionObserver, ``false`` \| IntersectionObserver] |
| `createPrototypes` | *object* |
| `lazyload` | () => ``false`` \| IntersectionObserver |

Defined in: [index.ts:45](https://github.com/Guebbit/guebbit-javascript-library/blob/890e2e7/src/index.ts#L45)

## Functions

### toFormData

▸ `Const` **toFormData**(`obj`: *Record*<string, unknown\>, `form?`: ``null`` \| FormData, `namespace?`: ``null`` \| *string*): FormData

	Trasformo un array normale in un FormData
	Necessario per il passaggio di file o per evitare l'uso di php:\\input
	WARNING formData appiattisce tutti gli array multidimensionali,
	quindi è meglio trasformarli in un json.
	JSON.stringify(); prima e poi json_decode($_POST['']); nel php

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | *Record*<string, unknown\> | - |
| `form` | ``null`` \| FormData | null |
| `namespace` | ``null`` \| *string* | null |

**Returns:** FormData

Defined in: [components/converters/toformdata.ts:26](https://github.com/Guebbit/guebbit-javascript-library/blob/890e2e7/src/components/converters/toformdata.ts#L26)
