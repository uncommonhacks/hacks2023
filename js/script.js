// handle up/down scrollwheel on the scroller, as most folks don't have horizontal scroll
scrollableElement.addEventListener('wheel', (ev) => {
    ev.preventDefault();  // stop scrolling in another direction
    scrollableElement.scrollLeft += (ev.deltaY + ev.deltaX);
});

const el = document.getElementsByClassName('nonScrollableElement');
for (var i = 0; i < el.length; i++) {
  var e = el[i];
  e.addEventListener('wheel', (ev) => {
    //ev.preventDefault();  // stop scrolling in another direction
    scrollableElement.scrollLeft -= (ev.deltaY + ev.deltaX);
    e.scrollTop += (ev.deltaY + ev.deltaX);
  }
)}

function smoothScroll(whereToScroll) {
  const element = document.getElementById(whereToScroll);
  element.scrollIntoView({behavior: "smooth", inline: "center"});
}