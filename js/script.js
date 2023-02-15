// handle up/down scrollwheel on the scroller, as most folks don't have horizontal scroll
scrollableElement.addEventListener('wheel', (ev) => {
    ev.preventDefault();  // stop scrolling in another direction
    scrollableElement.scrollLeft += (ev.deltaY + ev.deltaX);
});

function smoothScroll(whereToScroll) {
  const element = document.getElementById(whereToScroll);
  element.scrollIntoView({behavior: "smooth", inline: "center"});
}