Da fare
- integrare le vecchie funzionalità in /.old
- ricostruire filter_by (unire a search_by?)
- isVisible fix

---------------------------------------------------

Sostituiti da Lodash o altro
 - /main/shallowcopy.ts
 - /main/deepcopy.ts
 - /main/extend.ts
 - /checkers/isNull.ts
 - /checkers/isObject.ts
 - /filters/toObject.ts
 - /filters/match.ts

Cambiati
 - /filters/match.ts e /filters/matchfuzzy.ts uniti. In più ora sono un check tra 2 stringhe

---------------------------------------------------

describe("lorem ipsum", () => {
	let input :any[];
	beforeEach(() => {
		input = [
			'lorem',
			'ipsum',
			'dolor',
			'sit',
			'consectetur',
			'adipiscing',
			'elit',
			'sed do',
			'eiusmod'
		];
	});

	test("something", () => {
		// code
	});

});
