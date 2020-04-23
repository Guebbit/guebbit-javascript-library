import getIndex from "../getters/getindex";

/**
*	Metto l'elemento selezionato al centro dello scroll
*	@param HTMLElement target
*	@param string mode: orizzontale con scrollLeft o vertical con scrollHeight
**/
export const setCenterScrollVertical = (target:HTMLElement) => {
	//TODO
}
export const setCenterScrollHorizontal = (target:HTMLElement) => {
	const parent = target.parentElement!,
		children = parent.children,
		len = getIndex(target);
	let scroll:number = 0,
		i:number;
	//Just need to add up the width of all the elements before our target.
	for(i = 0; i < len; i++)
		scroll += (children[i] as HTMLElement).offsetWidth;
	//scroll
	parent.scrollLeft = Math.max(0, scroll - (parent.offsetWidth - target.offsetWidth) / 2);
}
export const setCenterScroll = (target:HTMLElement, mode:string = "vertical") => {
	if(mode==="vertical")
		setCenterScrollVertical(target);
	if(mode==="horizontal")
		setCenterScrollHorizontal(target);
}



export default setCenterScroll;
