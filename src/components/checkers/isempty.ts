import { isNull, isUndefined, isElement } from 'lodash';

/**
* 	PHP's empty() equivalent, different from lodash's isEmpty
* 	@param mixed test: element to check
* 	@return bool
**/
export default (test :unknown) :boolean => {
	if(isNull(test) || isUndefined(test))
		return true;
	if(isElement(test))
		return false;
	return typeof test !== 'number' && (test === "" || Object.keys(test as unknown[]).length === 0);
}
