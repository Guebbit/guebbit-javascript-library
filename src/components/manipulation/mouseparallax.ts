/**
*	mouse parallax, aggiornare https://guebbit.com/admin/view/244
*
*	@param int deep:
*	@param int disallow: 0 = none, 1 = Y, 2 = X, 3 = all (return false)
**/
export default (x:number, y:number, deep:number = 50, disallow:number = 0) => {
	if(deep < 10)
		return [0,0];
	let itemX = (disallow && disallow === 2) ? 0 : x / deep,
		itemY = (disallow && disallow === 1) ? 0 : y / deep;
	return [itemX, itemY];
}
