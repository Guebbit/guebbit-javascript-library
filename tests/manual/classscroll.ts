//@ts-ignore
import { classScroll } from 'index';

classScroll(document.getElementById("test-shyclassscroll"), [
	{
		class: "classscroll-test",		//a 400px aggiungo la classe test
		scroll: 200,
		//remove: true		//se remove=true (false di default), invece la rimuovo
	}
]);
