import { getIFrame } from '../../../';

document.body.innerHTML =
	'<iframe id="iframe-test">'+
		'<div>Lorem</div>'+
		'<div>Ipsum</div>'+
	'</iframe>';

describe("(getIFrame) Get Iframe content", () => {

	test(" - ", () => {
		expect(
			getIFrame(document.getElementById('iframe-test'))!.tagName
		).toEqual('BODY')
	});

});
