const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
// Hero section elements
const heading = document.querySelector(".hero__heading h1");
const icons = document.querySelectorAll(".hero__heading i");
const author = document.querySelector(".author");
const quote = document.querySelector(".quote");
const logo = document.querySelector('.navbar__logo img');

// Create a GSAP timeline
let t1 = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power2.out",
    opacity: 0,
  },
});

// Animate the heading with slide-in from the left
t1.from(heading, {
  x: -100,
  overwrite: "auto",
});
t1.from(logo,{
    x:-100,
    scale: 0.6
},0)

// Animate icons with rotation and slide-in from the top
t1.from(
  icons,
  {
    y: -50,
    rotate: 720,
    stagger: 0.15,
  },
  "-=0.8"
); // Overlap with previous animation

// Animate the quote with slide-in from below
t1.from(
  quote,
  {
    y: 50,
  },
  "-=0.6"
); // Overlap with previous animation

// Animate the author with a slight scale effect and slide-in from below
t1.from(
  author,
  {
    y: 50,
    scale: 1.2,
  },
  "-=0.4"
); // Overlap with previous animation



// Category section animations

