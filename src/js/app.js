/*const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');

var ctrl = new ScrollMagic.Controller();

// Create scenes in jQuery each() loop

if ($('section').length > 0) {
  $('section').each(function(i) {
    var inner = $(this).find('.inner');
    var outer = $(this).find('.outer');

    var tl = new TimelineMax();

    tl.from(outer, 0.25, { scaleX: 0 });
    tl.from(inner, 0.65, { yPercent: 100, ease: Back.easeOut });

    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.15,
    })
      .setTween(tl)

      .addTo(ctrl);
  });
}*/

const navButton = document.querySelector('.menu-icon');
const navButtonClose = document.querySelector('.menu-icon-close');

const tl = new TimelineLite({ paused: true });

tl.to('.menu-icon', 1, {
  right: -100,
  ease: Power4.easeOut,
}).to(
  '.main-menu',
  1,
  {
    left: 0,
    ease: Power4.easeOut,
  },
  '-=1'
);

/*.to(".nav-items", 1, {
    height: "100%",
    ease: Power4.easeOut
  });*/

navButton.addEventListener('click', () => {
  tl.play();
});

navButtonClose.addEventListener('click', () => {
  tl.reverse();
});

/*function toggleTween(tween){
  tween.reverse() ? tween.play : tween.reverse
}*/
