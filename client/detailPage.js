console.log("Hello world");

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
 scale:3, // Move it completely off-screen upwards
  scrollTrigger: {
    trigger: ".box",
    start: "10",     // When the top of .box hits the top of the viewport
    end: "+=300",         // Animate over 300px of scrolling
    // pin: true,
    scrub: true,          // Smooth scroll-linked animation
  }
});