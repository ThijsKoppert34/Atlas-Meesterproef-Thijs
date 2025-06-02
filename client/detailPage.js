gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".scene1",
  start: "top top",
  end: "+=200", // length of pin
  pin: true,
  onEnter: () => lockScroll(),
  onLeave: () => unlockScroll(),
  markers: "true"
});

gsap.to(".box", {
 scale:20,
  y: () => window.innerHeight - 200,
  scrollTrigger: {
    trigger: ".box",
    start: 100,
    end: 200,
    // pin: true,
    scrub: true,
    // markers: "true"
  }
});


gsap.to(".skyline1", {
 scale:.1,
  x: -800,
  y: 200,
  scrollTrigger: {
    trigger: ".box",
    start: 100,
    end: 200,
    // pin: true,
    scrub: true,
    markers: "true"
  }
});

gsap.to(".skyline2", {
 scale:.1,
  x: 800,
  y: 200,
  scrollTrigger: {
    trigger: ".box",
    start: 100,
    end: 200,
    // pin: true,
    scrub: true,
    markers: "true"
  }
});