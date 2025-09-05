// Effet texte qui s’écrit
const text = "Ruken Dogan";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 80);
  }
}
window.onload = typeWriter;

// Animation fade-in au scroll
const elements = document.querySelectorAll('.fade-in');

function showElements() {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showElements);
showElements();
