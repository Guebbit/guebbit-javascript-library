import { getForm } from '../../../src';

document.body.innerHTML =
	'<form id="form-test">'+
		'<input name="input-test" value="Lorem Ipsum"/>'+
		'<select name="select-test">'+
			'<option value="lorem">ipsum</option>'+
			'<option value="dolor" selected>sit</option>'+
			'<option value="consectetur">adipiscing</option>'+
		'</select>'+
		'<textarea name="textarea-test">elit sed do</textarea>'+
		'<input type="checkbox" name="checkbox-test" name="checkbox-test" value="Eiusmod" checked/>'+
		'<input type="radio" name="radio-test" value="Lorem"/>'+
		'<input type="radio" name="radio-test" value="Ipsum" checked />'+
	'</form>';

describe("(getForm) Get all form-like values paired with their name (ignored if without name)", () => {

	test("Input", () => {
		expect(
			getForm(document.getElementById('form-test'))
		).toEqual({
			"checkbox-test": true,
			"input-test": "Lorem Ipsum",
			"radio-test": "Ipsum",
			"select-test": "dolor",
			"textarea-test": "elit sed do",
		});
	});

});
