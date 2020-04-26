/**
*	TODO Divide array in equals sub arrays
*	@param array array
*	@param integer chunks: how many elements per piece TODO divide array into equal X pieces
**/
export default (array :any[], max :number) => {
	var i:number, len:number, new_array:any[] = [];
	for (i=0, len=array.length; i<len; i+=max)
		new_array.push(array.slice(i,i+max));
	return new_array;
}
