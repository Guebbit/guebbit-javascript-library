export interface stickyjsSettingsMap {
    top?: number | string;
    scroll?: number;
    margin?: number;
    class?: string;
}
declare const _default: (element: HTMLElement | null, settings?: stickyjsSettingsMap) => void;
/**
* 	sticky header che si mostra o nasconde in base allo scroll (necessita di "transition: top 0.1s")
* 	@param HTMLElement element 	= il fixed nav da spostare
*	@param object settings
**/
export default _default;
//# sourceMappingURL=stickyjs.d.ts.map
