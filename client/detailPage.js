gsap.registerPlugin(SplitText, ScrollTrigger);

let tlScene1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scene-1",
    start: "top top",
    end: "+=800vh",
    pin: true,
    pinSpacing: true,
    scrub: 2,
    // markers: true
  },
});

tlScene1
  .to(".adress", { y: "-100vh", duration: 1 }, 0)
  .to(".family", { y: "-100vh", duration: 1 }, 0)
  .to(".cloud-1", { x: "50vw", duration: 1 }, 0)
  .to(".cloud-2", { x: "50vw", duration: 1 }, 0)
  .to(".cloud-3", { x: "-5vw", duration: 1 }, 0)
  .to(".skyline-1", { x: "-100vw", y: "25vh", scale: 0.1, duration: 3 }, 0.2)
  .to(".skyline-2", { x: "100vw", y: "25vh", scale: 0.1, duration: 3 }, 0.2)
  .to(".tree-1", { x: "-250vw", scale: 10, duration: 3 }, 0.2)
  .to(".tree-2", { x: "250vw", scale: 10, duration: 3 }, 0.2)
  .to(".bike", { x: "-175vw", scale: 20, duration: 3 }, 0.2)
  .to(".house", { scale: 50, duration: 3 }, 0.2)
  .to(".scene-1-transition", { opacity: 1 }, 1);

// chandelier
gsap.timeline({
  scrollTrigger: {
    trigger: ".scene-2",
    start: "top top",
    end: "bottom bottom",
    pin: ".chandelier",
    scrub: true,
    // markers: true
  },
});

const splitWedding = new SplitText(".wedding-text", { type: "words, chars" });
gsap.set(splitWedding.chars, { opacity: 0 });

// wedding scene
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scene-2-wedding",
      start: "top top",
      end: "+=800vh",
      pin: true,
      scrub: 2,
    },
  })
  .from(".bride", { x: "30vw", duration: 0.4 }, 0)
  .from(".groom", { x: "-30vw", duration: 0.3 }, 0)
  .to(".groom", { scaleX: -1, duration: 0.1 }, 0.6)
  .to(".bride", { x: "-105vw" }, 0.7)
  .to(".groom", { x: "-105vw" }, 0.7)
  .to(
    splitWedding.chars,
    {
      opacity: 1,
      ease: "none",
      stagger: 0.005,
      duration: 0.005,
    },
    0
  );

const splitChildren = new SplitText(".children-text", { type: "words, chars" });
gsap.set(splitChildren.chars, { opacity: 0 });
// children scene
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scene-2-children",
      start: "top top",
      end: "+=1000vh",
      pin: true,
      scrub: 2,
      // markers: true
    },
  })
  .set(".woman-1", { scaleX: -1, duration: 0.1 }, 0)
  .fromTo(".woman-1", { x: "-80vw" }, { x: "0vw", duration: 0.4 }, 0)
  .from(".child-boy", { x: "-80vw", duration: 0.4 }, 0)
  .from(".baby", { x: "-80vw", duration: 0.4 }, 0)
  .from(".husband", { x: "-80vw", duration: 0.4 }, 0)
  .to(
    splitChildren.chars,
    {
      opacity: 1,
      ease: "none",
      stagger: 0.0005,
      duration: 0.0005,
    },
    0
  );

const splitGrandma = new SplitText(".grandma-text", {type: "words, chars" });
gsap.set(splitGrandma.chars, { opacity: 0 });
gsap.timeline({
  scrollTrigger: {
    trigger: ".scene-2-grandmas",
    start: "top top",
    end: "+=1000vh",
    pin: true,
    scrub: 2,
    // markers: true
  }
})
.from(".woman-2", { x: "45vw", duration: 0.3 }, 0.1)
.from(".grandma-1", { x: "-70vw" }, 0.3)
.to(
    splitGrandma.chars,
    {
      opacity: 1,
      ease: "none",
      stagger: 0.0005,
      duration: 0.0005,
    },
    0
  );


gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scene-3",
    start: "top top",
      end: "+=2500vh",
      pin: ".ground-4",
      scrub: 2,
      // markers: true,
    },
  })
.fromTo(".customer", { x: "-150vw" }, { x: 0, duration: 0.3, stagger: { each: 0.2, from: "end" } }, 0)
// .fromTo(".customer:nth-child(-n+4)", {x:"-150vw"}, {x: 0, duration: 0.3,}, 0.3)
.to(".customer:nth-child(-n+6)", { scaleX: -1, duration: 0.1 }, 2.2)
.set(".customer:nth-child(-n+6)", { scaleX: -1, duration: 0.1 }, 2.2)
.fromTo(".customer:nth-child(-n+6)", {x:0}, {x: "-150vw", duration: 0.3,}, 2.8)

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scene-3-text-1",
      start: "top top",
      end: "+=500dvh",
      pin: true,
      scrub: 2,
      markers: true
    },
  })
.fromTo(".dentist-text-1", {x:"-150vw"}, {
    x: 0, duration: 0.1,
  }, 0)
.to({}, {duration: 0.8})
.to(".dentist-text-1", {x: "150vw"}, 0.8)



gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scene-3-text-2",
      start: "top top",
      end: "+=500dvh",
      pin: true,
      scrub: 2,
      markers: true
    },
  })
.fromTo(".dentist-text-2", {x:"-150vw"}, {
    x: 0, duration: 0.1,
  }, 0)
.to({}, {duration: 0.8})
.to(".dentist-text-2", {x: "150vw"}, 0.8)

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scene-3-text-3",
      start: "top top",
      end: "+=500dvh",
      pin: true,
      scrub: 2,
      markers: true
    },
  })
.fromTo(".dentist-text-3", {x:"-150vw"}, {
    x: 0, duration: 0.1, 
  }, 0)
.to({}, {duration: 0.8})
.to(".dentist-text-3", {x: "150vw"}, 0.8)

