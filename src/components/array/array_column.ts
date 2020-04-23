/**
*	php array_column
*	@param array array
*	@param string column
**/
export default (array :any[], column :string) => {
	return array.map(function(value :any/*, index :string */) {
		return value[column];
	});
 }
