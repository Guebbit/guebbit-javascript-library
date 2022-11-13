export interface intersectionSettingsMap {
    single?: boolean;
    root?: Element;
    rootMargin?: string;
    threshold?: number;
    intersectingCallback?: (el: Element) => void;
    notIntersectingCallback?: (el: Element) => void;
}
/**
 *  IntersectionObserver helper, per programmarlo meglio
 *  @param {HTMLElement} element  = elemento da osservare
 *  @param {Object} settings
 **/
declare const _default: (element: HTMLElement | HTMLElement[] | NodeList | HTMLCollection | null, settings?: intersectionSettingsMap, $window?: Window) => IntersectionObserver | false;
export default _default;
//# sourceMappingURL=intersection.d.ts.map