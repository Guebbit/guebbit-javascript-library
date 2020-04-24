/**
* 	se l'elemento è visibile
*	//source (2018-03-11): https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js
* 	@param mixed test
* 	@return bool se è vero o no
**/
export default ( test:HTMLElement ) => {
	return !!test && !!( test.offsetWidth || test.offsetHeight || test.getClientRects().length );
}