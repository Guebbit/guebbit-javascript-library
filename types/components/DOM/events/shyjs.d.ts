export interface stickyjsSettingsMap {
    elementHeight?: number | string;
    treshold?: number;
    intensity?: number;
    className?: string;
    shyClassName?: string;
}
declare const _default: (element: HTMLElement | null, settings?: stickyjsSettingsMap, $window?: Window) => void;
/**
 *  alternativa sempre valida a position: sticky, con distinzione modalità "sticky"
 *  sticky header che si mostra o nasconde in base allo scroll (transition: top non inclusa)
 *
 *  @param HTMLElement element 	= il fixed nav da spostare
 *  @param object settings
 **/
export default _default;
//# sourceMappingURL=shyjs.d.ts.map