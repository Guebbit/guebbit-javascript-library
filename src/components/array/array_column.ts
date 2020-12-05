/**
*	php array_column
*	Return the values from a single column in the input array
*	@param array array
*	@param string column
**/
export default (array :any[], column :string) => {
	return array.map((value :any) :any => {
		return value[column];
	});
 }
