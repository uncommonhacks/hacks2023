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
      e.scrollTop += (ev.deltaY *.5 + ev.deltaX * .5);
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

/* Members list */
let headShotsList = [
  "images/member_photos/Chang_Formal - Eric Chang.jpg",
  "images/member_photos/Cropped Senior Pic - Hunter Smith.jpeg",
  "images/member_photos/EmilyBaeTillFurtherNotice.jpg",
  "images/member_photos/IMG_0913 copy - Nicole Li.jpg",
  "images/member_photos/IMG_2010 - Irina Stamm.jpeg",
  "assets/member_photos/IMG_2865 copy - Jack Rong.JPG",
  "assets/member_photos/madhavvats.jpg",
  "assets/member_photos/michellechen.jpg",
  "assets/member_photos/nickliu.png",
  "assets/member_photos/nicoleli.jpg",
  "assets/member_photos/palashgoiporia.JPG",
  "assets/member_photos/reneehuang.jpeg",
  "assets/member_photos/samanthachen.JPG",
  "assets/member_photos/spencerng.jpg",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let currentPicture = getRandomInt(headShotsList.length);
let headShot = document.getElementById("headshots");

headShot.setAttribute("src", headShotsList[currentPicture]);
setInterval(() => {
  currentPicture =
    currentPicture == headShotsList.length - 1 ? 0 : currentPicture + 1;
  headShot.setAttribute("src", headShotsList[currentPicture]);
}, 2000);