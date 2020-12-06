/**
*	Divide array in equals sub arrays
*	@param array array: any array
*	@param integer num: number of chunks (sub arrays)
**/
export default (array :any[], n :number = 0) :any[] => {
	let items :any[] = Object.assign([], array);
	return new Array(Math.ceil(items.length / n)).fill([]).map(_ => items.splice(0, n));
}
