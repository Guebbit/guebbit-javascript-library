import divide_array from "./divide_array";

/**
*	Divide array in N numbers of sub-arrays.
*	Sub-arrays' lengths differ as less as possible
*	@param array items: array to split
*	@param integer n: number of chunks
**/
export default (array :unknown[], n :number) :unknown[] => {
	const items = Object.assign([], array),
		len = items.length,
		output :unknown[] = [];
	let i = 0;

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
