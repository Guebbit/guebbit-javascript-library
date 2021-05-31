/**
*	hasOwnProperty but with recursion
*
*
**/
export default (obj :Record<string, unknown>, propertyPath :string) :boolean => {
	const properties :string[] = propertyPath.split('.');
	let i :number;
	for (i = 0; i < properties.length; i++) {
		if(!obj || !Object.prototype.hasOwnProperty.call(obj, properties[i] || ''))
			return false;
		else
			obj = obj[properties[i] || ''] as Record<string,unknown>;
	}
	return true;
}
