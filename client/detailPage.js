gsap.registerPlugin(ScrollTrigger);

let tlScene1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scene-1",
  start: "top top",
  end: "+=800vh",
  pin: true,
  pinSpacing: true,
  scrub: 2,
  markers: true
  }
})
  
tlScene1
.to(".adress", { y: "-100vh", duration: 1}, 0)
.to(".family",{ y: "-100vh", duration: 1}, 0)
.to(".cloud-1",{ x: "50vw", duration: 1}, 0)
.to(".cloud-2",{ x: "50vw", duration: 1}, 0)
.to(".cloud-3",{ x: "-5vw", duration: 1}, 0)
.to(".skyline-1",{ x: "-100vw", y: "25vh", scale: .1, duration: 3}, .2)
.to(".skyline-2",{ x: "100vw", y: "25vh", scale: .1, duration: 3}, .2)
.to(".tree-1",{ x: "-250vw", scale: 10, duration: 3}, .2)
.to(".tree-2",{ x: "250vw", scale: 10, duration: 3}, .2)
.to(".bike", { x: "-175vw", scale: 20, duration: 3}, .2)
.to(".house", { scale: 40, duration: 3}, .2)
.to(".scene-1-transition", {opacity: 1, }, 1)