import { isVisible } from '../../index';

document.body.innerHTML =
	'<div>' +
	'  <span id="i-am-visible">Lorem Ipsum</span>' +
	'  <span id="i-am-not" style="display:none">Dolor</span>' +
	'</div>';

describe("[TODO] (isVisible) check if element is visible on screen", () => {
	test("Non-existing element", () => {
		expect(
			isVisible(document.getElementById('do-not-exist'))
		).toBeFalsy();
	});
	test("Visible element", () => {
		expect(
			isVisible(document.getElementById('i-am-visible'))
		).toBeTruthy();
	});
	test("Display:none element", () => {
		expect(
			isVisible(document.getElementById('i-am-not'))
		).toBeFalsy();
	});
});
