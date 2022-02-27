import { throttle } from 'lodash';
import { addEvent } from '../../../../src';

/**
 * TODO
 *
 * rotation - "guardare" verso il mouse, ruotare l'elemento ipotizzando che la testa sia sempre al centro dell'angolo a destra
 * center of mouse - il testo riesce a stare al centro, gli altri elementi no
 * speed = transition speed? Or CSS only?
 * object wrapper = {$el: element, parallax: () => {}, start, stop, reset, ...etc} per controllare individualmente il parallax anche dopo l'esecuzione
 */

interface mouseParallaxItemsMap {
  element: HTMLElement
  intensityX: number
  intensityY: number
}

interface mouseParallaxMap {
  container :Node
  items :mouseParallaxItemsMap[]
}

/**
 * Calculate the parallax movement based on x\y axis of the movement (mouse, touch or custom)
 * and the width & height of container element (usually the direct parent of the anchors)
 *
 * @param {number} x - axis X (mouse, touch, custom)
 * @param {number} y - axis Y (mouse, touch, custom)
 * @param {number} w - width of parent container
 * @param {number} h - height of parent container
 *
 * @return {number[]} - new X and Y positions calculated on the parent container
 */
export const calculateMouseParallax = (x = 0, y = 0, w = 0, h = 0) :[number, number] => {
  return [
    ((x - w / 2) / w),
    ((y - h / 2) / h)
  ];
};

/**
 * Execute parallax on anchor element
 *
 * @param {HTMLElement} anchor - element to move
 * @param {number} x - axis calculated on the parent container
 * @param {number} y - axis calculated on the parent container
 * @param {number} ix - % of intensity of movement, 0 = stopped, 100 = normal, 200 = double, etc
 * @param {number} iy - same as above, but for Y
 */
export const executeMouseParallax = (anchor :HTMLElement, x = 0, y = 0, ix = 100, iy = 100) :void => {
  if(!anchor){
    return;
  }
  anchor.style.left = (x * ix + 50) + '%';
  anchor.style.top = (y * iy + 50) + '%';
};


/**
 *  ALL IN ONE mouse parallax movements, calculation and application.
 *  Get values from function or from dataset in element
 *
 *  @param {HTMLElement[]} anchors - elements to move
 *  @param {HTMLElement} parent - frame \ limits
 *  @param {number} movementIntensity - general % intensity of movement (speed or slow up all anchors). Negative = backwards
 *  @param {number} throttleIntensity - how fluid is the movement (takes up memory resources)
 *  @param {boolean} css - Apply default css or not
 *  @param {document} $document
 *
 *  @return {Object} - object to control the parallax
 */
export default (anchors: HTMLElement[] = [], parent: HTMLElement | null = null, movementIntensity = 100, throttleIntensity = 20, css = false, $document = document): mouseParallaxMap | undefined => {
  // array of parallax control objects
  const parallaxArray :mouseParallaxItemsMap[] = [];
  // no elements no parallax
  if(anchors.length <= 0) {
    return;
  }
  // define parent, height and width
  let w = 0,
    h = 0;
  // default parent = element parent
  if (!parent && anchors[0])
    parent = anchors[0].parentElement;
  // width and height of parent
  if (parent) {
    w = parent.offsetWidth;
    h = parent.offsetHeight;
    // if no parent at this point, then document is parent
  } else if (document.documentElement) {
    parent = document.documentElement;
    w = document.documentElement.clientWidth;
    h = document.documentElement.clientHeight;
  } else {
    // something went wrong
    return;
  }

  // parent position
  const { left: parentPositionLeft, top: parentPositionTop } = parent.getBoundingClientRect();

  // create instruction objects (all calculations done here 1 time)
  for (let i = anchors.length; i--; ) {
    // default = 100%, no variations, follow mouse
    let intensityX = 100;
    let intensityY = 100;
    // if dataset is populated, I take the specific element instructions
    if (anchors[i]!.dataset) {
      // % generic speed
      if (anchors[i]!.dataset['parallaxMovementIntensity']){
        intensityX = parseInt(anchors[i]!.dataset['parallaxMovementIntensity']!) * movementIntensity / 100;
        intensityY = parseInt(anchors[i]!.dataset['parallaxMovementIntensity']!) * movementIntensity / 100;
      }
      // % speed on X axis only
      if (anchors[i]!.dataset['parallaxMovementIntensityX']){
        intensityX = parseInt(anchors[i]!.dataset['parallaxMovementIntensityX']!) * movementIntensity / 100;
      }
      // % speed on Y axis only
      if (anchors[i]!.dataset['parallaxMovementIntensityY']){
        intensityY = parseInt(anchors[i]!.dataset['parallaxMovementIntensityY']!) * movementIntensity / 100;
      }
    }

    // if needed, put default CSS here
    if(css){
      anchors[i]!.style.position = 'absolute';
      anchors[i]!.style.left = '50%';
      anchors[i]!.style.top = '50%';
      anchors[i]!.style.transform = 'translate(-50%, -50%)';
      anchors[i]!.style.transition = 'top 0.2s, left 0.2s, transform 0.2s';   // TODO speed?
    }

    // instruction objects for every anchor
    parallaxArray.push({
      element: anchors[i]!,
      // elementCenterX: anchors[i]!.offsetLeft + anchors[i]!.offsetWidth / 2,
      // elementCenterY: anchors[i]!.offsetTop + anchors[i]!.offsetHeight / 2,
      intensityX,
      intensityY
    })
  }

  // console.log("START", w, h, parentPositionLeft, parentPositionTop, [...parallaxArray]);

  addEvent($document, 'mousemove', parent as Node, throttle(function(e) :void {
    // calculate parent
    const [ cx, cy ] = calculateMouseParallax(e.clientX - parentPositionLeft, e.clientY - parentPositionTop, w, h);
    // execute on anchor
    for (let i = 0; i < parallaxArray.length; i++) {
      const { element, intensityX, intensityY } = parallaxArray[i]!;
      executeMouseParallax(element, cx, cy, intensityX, intensityY);
    }
  }, throttleIntensity));


  addEvent($document, 'mousemove', parent as Node, throttle(function(e) :void {
    // touch points can be more than 1, select only the first
    if(!e.changedTouches || e.changedTouches.length <= 0){
      return;
    }
    // calculate parent
    const [ cx, cy ] = calculateMouseParallax(e.changedTouches[0].pageX- parentPositionLeft, e.changedTouches[0].pageY - parentPositionTop, w, h);
    // execute on anchor
    for (let i = 0; i < parallaxArray.length; i++) {
      const { element, intensityX, intensityY } = parallaxArray[i]!;
      executeMouseParallax(element, cx, cy, intensityX, intensityY);
    }
  }, throttleIntensity));

  return {
    container: parent,
    items: parallaxArray
  };
};
