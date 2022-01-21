// Adapted from Larry Davis <lazdnet@gmail.com>, 2013, License: BSD

/**
 * Attaches touchmove- and touchstart handlers to prevent bubbling of scroll-events to the body.
 * This is only an issue on iOS Safari.
 */
export function attachTouchHandlers() {

  // Enable by default if the browser supports -webkit-overflow-scrolling
  // Test this by setting the property with JavaScript on an element that exists in the DOM
  // Then, see if the property is reflected in the computed style
  const testDiv = document.createElement('div');
  document.documentElement.appendChild(testDiv);
  // @ts-ignore
  testDiv.style.WebkitOverflowScrolling = 'touch';
  const scrollSupport = 'getComputedStyle' in window && window.getComputedStyle(testDiv)['-webkit-overflow-scrolling'] === 'touch';
  document.documentElement.removeChild(testDiv);

  if (!scrollSupport) return

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

    let changeAge = 0;
    let prevScrollTop = scrollable?.scrollTop
    const checkBounds = ts => {
      if (scrollable.scrollTop == prevScrollTop) {
        changeAge += 1
      } else {
        prevScrollTop = scrollable.scrollTop
        changeAge = 0
      }
      if (scrollable.scrollTop === 0) {
        scrollable.scrollTop += 1
      } else if (scrollable.scrollHeight === scrollable.scrollTop + scrollable.offsetHeight) {
        scrollable.scrollTop += -1
      }
      if (changeAge < 10) {
        // Elastic scroll has not ended yet.
        window.requestAnimationFrame(checkBounds)
      }
    };
    window.requestAnimationFrame(checkBounds)


  }, {passive: false});
}
