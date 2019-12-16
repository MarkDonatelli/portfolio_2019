const navButton = document.querySelector('.menu-icon');
const navButtonClose = document.querySelector('.menu-icon-close');

const tl = new TimelineLite({ paused: true });

tl.to('.menu-icon', 1, {
  right: -100,
  ease: Power4.easeOut,
})
  .to(
    '.main-menu',
    1,
    {
      left: 0,
      ease: Power4.easeOut,
    },
    '-=1'
  )
  .to(
    '.one',
    1,
    {
      opacity: 1,
      top: 0,
      ease: Power4.easeOut,
    },
    '0.5'
  )
  .to(
    '.two',
    1,
    {
      opacity: 1,
      top: 0,
      ease: Power4.easeOut,
    },
    '0.7'
  )
  .to(
    '.three',
    1,
    {
      opacity: 1,
      top: 0,
      ease: Power4.easeOut,
    },
    '0.9'
  )
  .to(
    '.four',
    1,
    {
      opacity: 1,
      top: 0,
      ease: Power4.easeOut,
    },
    '1.1'
  );

navButton.addEventListener('click', () => {
  tl.play();
});

navButtonClose.addEventListener('click', () => {
  tl.reverse();
});

