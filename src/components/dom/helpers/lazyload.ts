import { formatNodeList } from "../../_helpers";

export const setSource = function (element: Element): boolean {
  let flag = false;
  if (element.hasAttribute("data-src")) {
    element.setAttribute("src", (element.getAttribute("data-src") as string));
    element.removeAttribute("data-src");
    flag = true;
  }
  if (element.hasAttribute("data-srcset")) {
    element.setAttribute("srcset", (element.getAttribute("data-srcset") as string));
    element.removeAttribute("data-srcset");
    flag = true;
  }
  return flag;
}

export const loadVideo = async function (video: HTMLVideoElement): Promise<boolean> {
  // Sfruttiamo il metodo race
  return await Promise.race([
    // Creiamo la prima promise, che si risolve
    // in corrispondenza dell'evento video.canplaythrough
    new Promise((resolve) => {
      video.addEventListener('canplaythrough', () => {
        // can play
        resolve(true);
      });
    }),
    // Creiamo la seconda promise, che si risolve
    // dopo un tempo predefinito (2 secondi)
    new Promise((resolve) => {
      setTimeout(() => {
        //video timedout
        resolve(false);
      }, 5000);
    }),
    //vediamo quale promise "ha fatto prima"
  ]).then((play) => {
    if (video.classList.contains('loaded'))
      return true;
    if (play) {
      video.play();
      video.classList.add('loaded');
      return true;
    }
    // rimuovo i source (che non hanno caricato in tempo)
    (Array.from(video.children) as HTMLElement[]).forEach((child: HTMLElement) => {
      if (child.tagName === 'SOURCE' && typeof child.dataset['src'] !== 'undefined')
        child.parentNode!.removeChild(child);
      return true;
    });
    // Ricarico il video senza source, per resettarlo
    video.load();
    return false;
  });
}


export const lazyloadHelperVideo = function (video: HTMLVideoElement): boolean {
  if (video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2)
    return true;
  if (window.matchMedia('(prefers-reduced-motion)').matches)
    return false;
  const children = Array.from(video.children);
  children.forEach(child => setSource(child));
  loadVideo(video);
  return true;
}

export const lazyloadHelperImage = function (element: HTMLImageElement): boolean {
  if (!setSource(element))
    return false;
  element.onload = function () {
    (this as HTMLElement).classList.add('loaded');
  };
  return true;
}

export const lazyloadHelperSource = function (element: HTMLSourceElement): boolean {
  if (!setSource(element))
    return false;
  try {
    element!.parentNode!.querySelector("img")!.onload = function () {
      (this as HTMLElement).classList.add('loaded');
    };
  } catch (e) {
    // source has no img
    return false;
  }
  return true;
}


export default function (element: HTMLElement | HTMLElement[] | NodeList | HTMLCollection | null): void {
  if (!element)
    return;

  let i: number;
  const elementsArray = formatNodeList(element);

  for (i = elementsArray.length; i--;)
    if (elementsArray[i])
      switch (elementsArray[i]!.tagName) {
        //se immagine
        case "IMG":
          lazyloadHelperImage(elementsArray[i] as HTMLImageElement);
          break;
        case "SOURCE":
          lazyloadHelperSource(elementsArray[i] as HTMLSourceElement);
          break;
        //case "PICTURE": non serve, funziona con "source"
        case "VIDEO":
          lazyloadHelperVideo(elementsArray[i] as HTMLVideoElement);
          break;
      }
}
