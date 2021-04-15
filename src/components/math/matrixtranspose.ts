/**
*	Transpose a matrix. Invert rows and columns
*   [1,2,3],			[1,1,1],
*   [1,2,3],	=> 		[2,2,2],
*   [1,2,3],			[3,3,3],
**/
export default (m:any[][]) => {
	return m[0].map((x,i) => m.map(x => x[i]))
}
