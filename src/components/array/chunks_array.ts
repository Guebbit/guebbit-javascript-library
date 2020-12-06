import divide_array from './divide_array';

/**
*	Divide array in N numbers of sub-arrays.
*	Sub-arrays' lengths differ as less as possible
*	@param array items: array to split
*	@param integer n: number of chunks
**/
export default (array :any[], n :number) :any[] => {
	let items = Object.assign([], array),	//deep clone
		i :number = 0,
		len :number = items.length,
		output :any[] = [];

	if (n < 1)
		return [];

	if (n < 2)
		return [items];

	if(len % n === 0)
		return divide_array(items, Math.floor(len / n));

	while (i < len)
		output.push(
			items.slice(i, i += Math.ceil((len - i) / n--))
		);
	return output;
}
