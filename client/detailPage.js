gsap.registerPlugin(SplitText, ScrollTrigger, MorphSVGPlugin);

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

const splitGrandma = new SplitText(".grandma-text", { type: "words, chars" });
gsap.set(splitGrandma.chars, { opacity: 0 });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scene-2-grandmas",
      start: "top top",
      end: "+=1000vh",
      pin: true,
      scrub: 2,
      // markers: true
    },
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
      endTrigger: ".scene-4",
      // end: "+=2500vh",
      end: "top 45%",
      pin: ".ground-4",
      // pinSpacing: "false",
      scrub: 2,
      // markers: true,
    },
  })
  .fromTo(
    ".customer",
    { x: "-150vw" },
    { x: 0, duration: 0.3, stagger: { each: 0.2, from: "end" } },
    0
  )
  // .fromTo(".customer:nth-child(-n+4)", {x:"-150vw"}, {x: 0, duration: 0.3,}, 0.3)
  .to(".customer:nth-child(-n+6)", { scaleX: -1, duration: 0.1 }, 2.2)
  .set(".customer:nth-child(-n+6)", { scaleX: -1, duration: 0.1 }, 2.2)
  .fromTo(
    ".customer:nth-child(-n+6)",
    { x: 0 },
    { x: "-150vw", duration: 0.3 },
    2.8
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scene-3-text-1",
      start: "top top",
      end: "+=500dvh",
      pin: true,
      scrub: 2,
      // markers: true
    },
  })
  .fromTo(
    ".dentist-text-1",
    { x: "-150vw" },
    {
      x: 0,
      duration: 0.1,
    },
    0
  )
  .to({}, { duration: 0.8 })
  .to(".dentist-text-1", { x: "150vw" }, 0.8);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scene-3-text-2",
      start: "top top",
      end: "+=500dvh",
      pin: true,
      scrub: 2,
      // markers: true
    },
  })
  .fromTo(
    ".dentist-text-2",
    { x: "-150vw" },
    {
      x: 0,
      duration: 0.1,
    },
    0
  )
  .to({}, { duration: 0.8 })
  .to(".dentist-text-2", { x: "150vw" }, 0.8);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scene-3-text-3",
      start: "top top",
      end: "+=500dvh",
      pin: true,
      scrub: 2,
      // markers: true
    },
  })
  .fromTo(
    ".dentist-text-3",
    { x: "-150vw" },
    {
      x: 0,
      duration: 0.1,
    },
    0
  )
  .to({}, { duration: 0.8 })
  .to(".dentist-text-3", { x: "150vw" }, 0.8);

// ================
// einde deel joost
// ================

// floor text pin
// ScrollTrigger.create({
//   trigger: ".scene-4-text",
//   start: "top top",
//   endTrigger: ".scene-4-basement",
//   end: "bottom top",
//   scrub: 3,
//   pin: ".scene-4-text",
//   pinSpacing: false,
//   markers: true,
// })

// lamp pin
ScrollTrigger.create({
  trigger: ".scene-4-basement",
  start: "top top",
  end: "bottom top",
  scrub: 3,
  pin: ".scene-4-basement",
  pinSpacing: false,
  markers: true,
  onUpdate: (self) => {
    const swingCount = 4;
    const swing = Math.sin(self.progress * Math.PI * 2 * swingCount) * 4;
    gsap.set(".lamp", { rotation: swing });
  },
});

let tlScene4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scene-4-dark",
    start: "top center",
    end: "top top",
    scrub: 3,
    markers: true,
  },
});

tlScene4
  .to(".scene-4-dark", { backgroundColor: "var(--color-gray-20)" }, 0)
  .to(".scene-4-basement", { backgroundColor: "var(--color-gray-20)" }, 0)
  .to("#wire", { fill: "var(--color-gray-20)" }, 0)
  .to("#bulb", { fill: "var(--color-gray-20)" }, 0)
  .fromTo(
    ".scene-4-dark p",
    { x: "-150vw" },
    {
      x: 0,
      stagger: 2,
      ease: "power2.out",
    },
    ">"
  );

// ==============================
// scene 5
// ==============================

let tlCloud = gsap.timeline({
  scrollTrigger: {
    trigger: ".scene-5-train",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
    // markers: true,
  },
});

tlCloud
  .fromTo(
    ".train-cloud-1",
    { opacity: 0, y: "25dvh" },
    { opacity: 1, y: 10, duration: 1 },
    0
  )
  .fromTo(
    ".train-cloud-2",
    { opacity: 0, y: "25dvh" },
    { opacity: 1, y: 50, duration: 1 },
    0.2
  )
  .fromTo(
    ".train-cloud-3",
    { opacity: 0, y: "25dvh" },
    { opacity: 1, y: 90, duration: 1 },
    0.4
  )
  .fromTo(
    ".train-cloud-4",
    { opacity: 0, y: "25dvh" },
    { opacity: 1, y: 20, duration: 1 },
    0.6
  );

let tlTrain = gsap.timeline({
  scrollTrigger: {
    trigger: ".scene-5-train",
    start: "top 80%",
    end: "top 20%",
    scrub: 3,
    // markers: true,
  },
});

tlTrain
  .to(".scene-4-dark", { backgroundColor: "var(--color-gray-20)" }, 0)
  .to(".scene-4-basement", { backgroundColor: "var(--color-gray-20)" }, 0)
  // .to(".scene-5", { backgroundImage: "linear-gradient(0deg, #e0e0e0 0%, #e0e0e0 50%, #2d2d2d 100%)" }, 0)
  .fromTo(".train", { x: "100dvw" }, { x: "-100dvw" }, 0);

// cloud pin
ScrollTrigger.create({
  trigger: ".scene-5-clouds",
  start: "top top",
  endTrigger: ".scene-5-names",
  end: "bottom 95%",
  pin: ".scene-5-clouds",
  pinSpacing: false,
  // markers: true,
});

// cloud to bird morph
let tlBird = gsap.timeline({
  scrollTrigger: {
    trigger: ".scene-5-clouds",
    start: "top top",
    endTrigger: ".scene-5-names",
    end: "bottom 95%",
    scrub: 3,
    // markers: true,
  },
});

tlBird
  .to("#train-cloud-1", { morphSVG: "#bird-1", ease: "power1.inOut" })
  .to("#train-cloud-2", { morphSVG: "#bird-2", ease: "power1.inOut" })
  .to("#train-cloud-3", { morphSVG: "#bird-3", ease: "power1.inOut" })
  .to("#train-cloud-4", { morphSVG: "#bird-4", ease: "power1.inOut" });

// names
let tlScene5Names = gsap.timeline({
  scrollTrigger: {
    trigger: ".scene-5-names",
    start: "top 80%",
    end: "bottom 95%",
    scrub: 3,
    // markers: true,
  },
});

tlScene5Names
  .fromTo(".scene-5-names-text", { x: "100dvw" },
    {
      x: 0,
      stagger: 2,
      ease: "power2.out",
    },)
  .fromTo(".scene-5-names-dead li", 
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ease: "power2.out", stagger: 0.3 }, 
    "<0.5"
  )
  .fromTo(".scene-5-names-alive svg", {opacity:0}, {opacity: 1, stagger:0.3},0)



  // generic gedeelte
 
gsap.registerPlugin(ScrollTrigger);
 
// Selecteer elk blok
document.querySelectorAll('.story-block').forEach((block, index) => {
  let content = block.querySelectorAll('.text-content, img');
 
 
  // Timeline per blok
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: block,
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      markers: false,
    }
  });
 
  // Content komt naar binnen
  tl.to(content, {
    opacity: 1,
    y: 0,
    stagger: 1,
    duration: 1,
    ease: "power2.out"
  });
 
  // Content gaat weer weg
  tl.to(content, {
    opacity: 0,
    y: -300,
    stagger: 1,
    duration: 1,
    ease: "power2.in"
  });
});
 
 