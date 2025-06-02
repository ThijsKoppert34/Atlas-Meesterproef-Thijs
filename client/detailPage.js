gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".scene-1",
  start: "top top",
  end: "+=250",
  pin: true,
  // markers: "true"
});

gsap.to(".adress", {
  y: -1000,
  scrollTrigger: {
    trigger: ".adress",
    start: 95,
    end: 125,
    scrub: true,
    markers: "true"
  }
});

gsap.to(".family", {
  y: -1000,
  scrollTrigger: {
    trigger: ".family",
    start: 95,
    end: 125,
    scrub: true,
    markers: "true"
  }
});

gsap.to(".cloud-1", {
  x: 500,
  scrollTrigger: {
    trigger: ".cloud-1",
    start: 100,
    end: 250,
    scrub: true,
  }
});

gsap.to(".cloud-2", {
  x: 500,
  scrollTrigger: {
    trigger: ".cloud-2",
    start: 100,
    end: 250,
    scrub: true,
  }
});

gsap.to(".cloud-3", {
  x: -50,
  scrollTrigger: {
    trigger: ".cloud-3",
    start: 100,
    end: 250,
    scrub: true,
  }
});

gsap.to(".skyline-1", {
 scale:.1,
  x: -800,
  y: 200,
  scrollTrigger: {
    trigger: ".skyline-1",
    start: 100,
    end: 250,
    scrub: true,
  }
});

gsap.to(".skyline-2", {
 scale:.1,
  x: 800,
  y: 200,
  scrollTrigger: {
    trigger: ".skyline-2",
    start: 100,
    end: 250,
    scrub: true,
  }
});

gsap.to(".tree-1", {
 scale:3,
  x: -2000,
  scrollTrigger: {
    trigger: ".tree-1",
    start: 100,
    end: 250,
    scrub: true,
  }
});


gsap.to(".tree-2", {
 scale:3,
  x: 2000,
  scrollTrigger: {
    trigger: ".tree-2",
    start: 100,
    end: 250,
    scrub: true,
  }
});

gsap.to(".bike", {
 scale:10,
  x: -2250,
  scrollTrigger: {
    trigger: ".bike",
    start: 100,
    end: 250,
    scrub: true,
  }
});

gsap.to(".house", {
 scale:20,
  y: () => window.innerHeight - 200,
  scrollTrigger: {
    trigger: ".box",
    start: 100,
    end: 250,
    scrub: true,
  }
});

