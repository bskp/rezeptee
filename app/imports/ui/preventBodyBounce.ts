// Adapted from Larry Davis <lazdnet@gmail.com>, 2013, License: BSD

/**
 * Attaches touchmove- and touchstart handlers to prevent bubbling of scroll-events to the body.
 * This is only an issue on Webkit-based browsers with touch events.
 */
export function attachTouchHandlers() {

  const isTouch = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0))
  const isWebkit = /AppleWebKit\/(\S+)/.test(navigator.userAgent)
  if (!isTouch || !isWebkit) return
  console.log("Webkit on touch device detected.")

  const findScrollableParent = (el: HTMLElement) => {
    while (el !== document.body) {
      // Get some style properties
      const style = window.getComputedStyle(el);

      if (!style) {
        break; // If we've encountered an element we can't compute the style for, get out
      }

      if (el.nodeName === 'INPUT' && el.getAttribute('type') === 'range') {
        return undefined; // Ignore range input element
      }
      // Determine if the element should scroll
      const isScrollable = style.getPropertyValue('overflow-y') === 'scroll';
      const canScroll = el.scrollHeight > el.offsetHeight;
      if (isScrollable && canScroll) return el

      el = el.parentElement as HTMLElement
    }
    return undefined
  }

  // Prevent scroll bubbling from non-scrollable elements
  document.body.addEventListener('touchmove', function (e) {
    const scrollable = findScrollableParent(e.target as HTMLElement)
    if (scrollable) return;
    e.preventDefault()
  }, {passive: false});

  // Prevent scroll bubbling from scrollable elements which have hit their bound
  document.body.addEventListener('touchstart', function (e) {
    const scrollable = findScrollableParent(e.target as HTMLElement)
    if (!scrollable) return;

    let lastChange = undefined;
    let prevScrollTop = scrollable?.scrollTop

    const checkBounds = timestamp => {

      if (scrollable.scrollTop != prevScrollTop) {
        prevScrollTop = scrollable.scrollTop
        lastChange = timestamp
      }

      // Keep viewport 1px away from scroll bounds
      if (scrollable.scrollTop === 0) {
        scrollable.scrollTop += 1
      } else if (scrollable.scrollHeight === scrollable.scrollTop + scrollable.offsetHeight) {
        scrollable.scrollTop += -1
      }

      if (lastChange == undefined || (timestamp - lastChange) < 100) {
        // Scroll bounce is still in progress.
        window.requestAnimationFrame(checkBounds)
      }
    };
    window.requestAnimationFrame(checkBounds)


  }, {passive: false});
}
