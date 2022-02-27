/**
 *  equivalente Jquery di .on()
 *  @param HTMLelement parent
 *  @param string eventName = click, mousehover, etc
 *  @param string childSelector = selector / this
 *  @param function callback
 *  @return addEventListener
 **/
export declare const addEvent: (parent: Node, eventName: string, childSelector: string | Node, callback: (...args: unknown[]) => void) => void;
export declare const removeEvent: () => void;
//# sourceMappingURL=globalevents.d.ts.map