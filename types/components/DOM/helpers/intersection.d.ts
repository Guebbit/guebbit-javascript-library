export interface intersectionSettingsMap {
    single?: boolean;
    root?: Element;
    rootMargin?: string;
    threshold?: number;
    intersectingCallback?: (el: Element) => void;
    notIntersectingCallback?: (el: Element) => void;
}
declare const _default: (element: HTMLElement | HTMLElement[] | NodeList | HTMLCollection | null, settings?: intersectionSettingsMap) => IntersectionObserver | false;
/**
* 	IntersectionObserver helper, per programmarlo meglio
* 	@param HTMLElement el 	= elemento da osservare
*	@param object settings
**/
export default _default;
//# sourceMappingURL=intersection.d.ts.map