import { isElement } from 'lodash';

/**
* 	se l'elemento è visibile
*	//source (2018-03-11): https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js
* 	@param mixed test
* 	@return bool se è vero o no
**/
export default (test :HTMLElement | null ) :boolean => {
	if(!test || !isElement(test))
		return false;
	return !!( test.offsetWidth || test.offsetHeight || test.getClientRects().length );
}
