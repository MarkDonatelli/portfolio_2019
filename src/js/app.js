const navButton = document.querySelector(".menu-icon");
const navButtonClose = document.querySelector(".menu-icon-close");

const tl = new TimelineLite({ paused: true });

tl.to(".menu-icon", 1, {
  x: 500,
  opacity: 0,
  ease: Power4.easeOut
})
  .to(
    ".main-menu",
    1,
    {
      top: 0,
      ease: Power4.easeOut
    },
    "-=1"
  )
  .to(
    ".one",
    1,
    {
      opacity: 1,
      top: 0,
      ease: Power4.easeOut
    },
    "0.5"
  )
  .to(
    ".two",
    1,
    {
      opacity: 1,
      top: 0,
      ease: Power4.easeOut
    },
    "0.7"
  )
  .to(
    ".three",
    1,
    {
      opacity: 1,
      top: 0,
      ease: Power4.easeOut
    },
    "0.9"
  )
  .to(
    ".four",
    1,
    {
      opacity: 1,
      top: 0,
      ease: Power4.easeOut
    },
    "1.1"
  );

navButton.addEventListener("click", () => {
  tl.play();
});

navButtonClose.addEventListener("click", () => {
  tl.reverse();
});

var animateIn = new TimelineMax();

animateIn.fromTo(
  ".overlay-animation",
  2,
  { skewX: 30, scale: 1.5 },
  { skewX: 0, xPercent: 100, transformOrigin: "0% 100%", ease: Power4.easeOut }
);
