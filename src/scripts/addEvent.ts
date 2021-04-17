import addEvent from '../components/DOM/events/add'

export default () => {
	// @ts-ignore
	Node.prototype.addEvent = function (eventName:string, callback:(...args: any[]) => void) {
		addEvent(document, eventName, this, callback);
		return this;
	}
	// @ts-ignore
	NodeList.prototype.addEvent = function (eventName:string, callback:(...args: any[]) => void) {
		for(let i:number = this.length; i--; )
			addEvent(document, eventName, this[i], callback);
		return this;
	}
};
