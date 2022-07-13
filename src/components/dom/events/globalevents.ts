/**
 *  equivalente Jquery di .on()
 *  @param HTMLelement parent
 *  @param string eventName = click, mousehover, etc
 *  @param string childSelector = selector / this
 *  @param function callback
 *  @return addEventListener
 **/
export const addEvent = (parent: Node, eventName: string, childSelector: string | Node, callback: (...args: unknown[]) => void): void => {
  return parent.addEventListener(eventName, function (event: Event) {
    const clickedElement = event.target;
    let matchingChild: Element | undefined;

    // stringa = closest
    if (typeof childSelector === "string")
      matchingChild = (clickedElement as Element).closest(childSelector as string)!;
    // elemento = equiparazione
    else if (childSelector.contains(clickedElement as Element))
      matchingChild = clickedElement as Element;

    if (matchingChild)
      callback.call(matchingChild, event); // matchingChild  pass as this
  });
}


export const removeEvent = (): void => {
  // TODO removeEvent
}
