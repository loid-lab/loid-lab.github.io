const words = ['loid-lab 👾', 'Code. Coffee. Chaos.'];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;
const el = document.getElementById('typewriter');

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
      el.textContent = currentWord;
    } else if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
      el.textContent = currentWord;
    }

    if (!isDeleting && j === words[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
    }
  } else {
    i = 0;
  }

  setTimeout(type, isDeleting ? 40 : 70);
}

type();