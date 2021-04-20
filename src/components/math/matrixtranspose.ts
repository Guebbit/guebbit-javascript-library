/**
*	Transpose a matrix. Invert rows and columns
*   [1,2,3],			[1,1,1],
*   [1,2,3],	=> 		[2,2,2],
*   [1,2,3],			[3,3,3],
**/
export default (m:unknown[][]) :unknown[][] => {
	if(m.length < 1)
		return [];
	return m[0]!.map((_x,i) => m.map(x => x[i]))
}
