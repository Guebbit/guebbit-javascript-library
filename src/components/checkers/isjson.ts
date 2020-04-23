/**
* 	controllo se l'oggetto è un JSON
* 	@param mixed test
* 	@return string il json già estratto, oppure bool = false
**/
export default (test:string) => {
	try {
		return JSON.parse(test);
	} catch (e) {
		return false;
	}
}
