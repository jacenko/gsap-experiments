window.onload = function start() {
    modernLoader();
}

function modernLoader() {
  TweenLite.to("#box1", 2, {
    delay:1,
    rotation:360,
    transformOrigin:"0px 0px",
    ease: Power4.easeOut
  });

  TweenLite.to("#box2", 2.2, {
    delay:1,
    rotation:360,
    transformOrigin:"10px 0px",
    ease: Power4.easeOut
  });

  TweenLite.to("#box3", 2.4, {
    delay:1,
    rotation:360,
    transformOrigin:"20px 0px",
    ease: Power4.easeOut
  });

  TweenLite.to("#box4", 2.6, {
    delay:1,
    rotation:360,
    transformOrigin:"40px 0px",
    ease: Power4.easeOut
  });

  TweenLite.to("#box5", 2.8, {
    delay:1,
    rotation:360,
    transformOrigin:"60px 0px",
    ease: Power4.easeOut
  });
}
