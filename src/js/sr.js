import assignProps from './assignProps';
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["fun", "easy", "a journey", "LIFE"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 200; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 400);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 200);
});
export default function() {
  const defaultProps = {
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '30px',
    duration: 1000,
    desktop: true,
    mobile: true
  };
  
  /* Section Title */
  ScrollReveal().reveal('.section-title', 
    assignProps(
      {
        delay:300,distance:'0px', 
        origin:'bottom'
      }, defaultProps)
  );

  /* Hero Section */
  ScrollReveal().reveal('.hero-title', 
    assignProps(
      { 
        delay: 500, 
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
      }, defaultProps)
  );
  
  ScrollReveal().reveal('.hero-cta', 
    assignProps(
      {
        delay: 1000, 
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
      }, defaultProps)
  );

  /* About Section */
  ScrollReveal().reveal('.about-wrapper__image', 
    assignProps(
      {
        delay: 600,
        origin: 'bottom'
      }, defaultProps)
  );

  ScrollReveal().reveal('.about-wrapper__info', 
    assignProps(
      {
        delay: 1000,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
      }, defaultProps)
  );

  /* Projects Section */
  ScrollReveal().reveal('.project-wrapper__text', 
    assignProps(
      {
        delay: 500,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
      }, defaultProps)
  );

  ScrollReveal().reveal('.project-wrapper__image', 
    assignProps(
      {
        delay: 1000,
        origin: window.innerWidth > 768 ? 'right' : 'bottom'
      }, defaultProps)
  );

  /* Contact Section */
  ScrollReveal().reveal('.contact-wrapper', 
    assignProps(
      {
        delay: 800,
        origin: 'bottom'
      }, defaultProps)
  );
}
