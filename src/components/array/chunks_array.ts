import divide_array from './divide_array';

/**
*	Divide array in N numbers of subarrays
*	@param array array
*	@param integer n: number of chunks
*	@param boolean balanced:
*			true: subarrays' lengths differ as less as possible
*			even: all subarrays but the last have the same length
**/
export default (array :any[] = [], n :number, balanced :boolean = false) => {
	let size :number;

	if (n < 2)
		return [array];

	var len = array.length,
		output = [],
		i = 0;

	if(len % n === 0)
		return divide_array(array, Math.floor(len / n));

	if(balanced){
		while (i < len)
			output.push(
				// @ts-ignore
				array.slice(i, i += Math.ceil((len - i) / n--))
			);
		return output;
	}

	n--;
	size = Math.floor(len / n);
	if(len % size === 0)
		size--;
	while (i < size * n)
		output.push(
			// @ts-ignore
			array.slice(i, i += size)
		);
	output.push(
		// @ts-ignore
		array.slice(size * n)
	);
	return output;
}
