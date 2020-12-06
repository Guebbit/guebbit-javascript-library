/**
*	hasOwnProperty but with recursion
*
*
**/
const hasOwnNestedProperty = (obj :any, propertyPath :string) => {
	const properties :string[] = propertyPath.split('.');
	let i :number;
	for (i = 0; i < properties.length; i++) {
		if(!obj || !obj.hasOwnProperty(properties[i]))
			return false;
		else
			obj = obj[properties[i]];
	}
	return true;
}

export default hasOwnNestedProperty;

/*
// TODO mettere in guebbit lib
propertyPath = this_product.price.priceValue
Object.prototype.hasOwnNestedProperty = function(propertyPath){
	if(!propertyPath)
		return false;
	return hasOwnNestedProperty(this, propertyPath);
};
*/
