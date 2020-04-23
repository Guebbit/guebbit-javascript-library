import isNull from "./isnull"

/**
* 	equivalente di empty()
* 	@param mixed test
* 	@return bool se è vero o no
**/
export default (test:HTMLElement | any[] | string) => {
	return !isNull(test) && (test === "" || Object.keys(test).length === 0);
}
