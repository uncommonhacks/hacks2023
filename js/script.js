// handle up/down scrollwheel on the scroller, as most folks don't have horizontal scroll
scrollableElement.addEventListener('wheel', (ev) => {
    ev.preventDefault();  // stop scrolling in another direction
    scrollableElement.scrollLeft += (ev.deltaY + ev.deltaX);
});

/* Allow up/down scroll only on special non-scrollable elements. 
 * After scrolling entirely through the element, continue horizontal scroll.
 */
const el = document.getElementsByClassName('verticalScrollElement');
for (var i = 0; i < el.length; i++) {
  el[i].addEventListener('wheel', (ev) => {
    var e = ev.currentTarget;
    if (hasScrollbar(e) && !((atBottom(e) && ev.deltaY > 0) || (atTop(e) && ev.deltaY < 0))) {
      scrollableElement.scrollLeft -= (ev.deltaY + ev.deltaX);
      e.scrollTop += (ev.deltaY + ev.deltaX);
    }
  }
)}

function hasScrollbar(element) {
  return element.scrollHeight > element.clientHeight;
}

function atBottom(element) {
  // -2 to give margin, since sometimes it isn't entirely at bottom for some reason.
  return (element.scrollTop >= element.scrollHeight - element.clientHeight - 2);
}

function atTop(element) {
  return element.scrollTop == 0;
}

function smoothScroll(whereToScroll) {
  const element = document.getElementById(whereToScroll);
  element.scrollIntoView({behavior: "smooth", inline: "center"});
}