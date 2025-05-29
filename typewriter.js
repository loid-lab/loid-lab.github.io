const typewriterEl = document.getElementById('typewriter');

const baseText = "loid-lab 👾";
const words = ["Code", "Coffee", "Chaos"];
const typingSpeed = 120;
const erasingSpeed = 70;
const delayBetween = 1500;

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isBaseDone = false;

function type() {
  if (!isBaseDone) {
    // Type base text once
    if (charIndex < baseText.length) {
      typewriterEl.textContent += baseText.charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      isBaseDone = true;
      setTimeout(type, delayBetween);
      charIndex = 0;
    }
  } else {
    const currentWord = words[wordIndex];
    if (!isDeleting && charIndex <= currentWord.length) {
      // Typing word
      typewriterEl.textContent = baseText + " " + currentWord.substring(0, charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      // Deleting word
      typewriterEl.textContent = baseText + " " + currentWord.substring(0, charIndex);
      charIndex--;
      setTimeout(type, erasingSpeed);
    } else {
      // Switch typing/deleting
      isDeleting = !isDeleting;
      if (!isDeleting) {
        wordIndex = (wordIndex + 1) % words.length;
      }
      setTimeout(type, delayBetween);
    }
  }
}

type();