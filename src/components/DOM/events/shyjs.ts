import { throttle } from 'lodash';


export interface stickyjsSettingsMap{
  // how much go back on top (auto = element calculated height)
  // can be needed in special cases
  elementHeight? :number | string,
  // scroll after which apply shy (hide) (example: 300px from top)
  treshold? :number,
  // how much intensity of scroll does trigger the shy (hide) effect
  intensity? :number,
  // class that applies when stick to the top
  className? :string,
  // class that applies when hide
  shyClassName? :string,
}


/**
 *  alternativa sempre valida a position: sticky, con distinzione modalità "sticky"
 *  sticky header che si mostra o nasconde in base allo scroll (transition: top non inclusa)
 *
 *  @param HTMLElement element 	= il fixed nav da spostare
 *  @param object settings
 **/
export default (element :HTMLElement | null, settings :stickyjsSettingsMap = {}, $window :Window = window ) :void => {
  if(!element)
    return;

  let lastScrollY = 0,
    hideTop = 0;
  const {
    elementHeight = 'auto',
    treshold = 0,
    intensity = 0,
    className = 'shyjs-active'
  } = settings;

  // determine height if not specified (should never be specified)
  if(elementHeight === 'auto')
    hideTop = element.offsetHeight + 1;

  $window.addEventListener('scroll', throttle(function() :void {
    // scroll of window
    const scrollY = $window.scrollY;

    if(scrollY >= lastScrollY + intensity && scrollY >= treshold && scrollY > 10){
      // active shy mode: if this scroll > lastscroll then we are scrolling bottom. If we are above the scroll treshold: hide
      // WARNING: if on top of page DO NOT hide (10px?). Bugs can occur.
        if(hideTop != 0)
          element.style.top = -hideTop + 'px';
        element.classList.add(className);
    }else{
      // remove shy mode: when scrolling top, header need to reappear
      if(hideTop != 0)
        element.style.top = '0px';
      element.classList.remove(className);
    }
    // record last scroll position, to determine the direction of the next
    lastScrollY=scrollY;
  }, 10));
};
