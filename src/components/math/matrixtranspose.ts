/**
*	Transpose a matrix. Invert rows and columns
*   [1,2,3],			[1,1,1],
*   [1,2,3],	=> 		[2,2,2],
*   [1,2,3],			[3,3,3],
**/
export default (array:number[][]) => {
	return array[0].map((/*col,*/ i:number) => array.map(row => row[i]))
}
