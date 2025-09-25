// Effet texte qui s’écrit
const text = "Ruken Dogan"; // Texte à afficher
let index = 0; // Index de la lettre en cours

function typeWriter() { // Fonction qui écrit le texte
  if (index < text.length) { // Si l’index est inférieur à la longueur du texte
    document.getElementById("typed-text").innerHTML += text.charAt(index); // Ajouter la lettre à l’élément
    index++; // Incrémenter l’index
    setTimeout(typeWriter, 80); // Appeler la fonction après un délai
  }
}
window.onload = typeWriter; // Appeler la fonction au chargement de la page


// Animation fade-in au scroll
const elements = document.querySelectorAll('.fade-in'); // Sélectionner les éléments à animer

function showElements() { // Fonction pour afficher les éléments
  elements.forEach(el => { // Pour chaque élément
    const rect = el.getBoundingClientRect(); // Obtenir la position de l’élément
    if (rect.top < window.innerHeight - 50) { // Si l’élément est dans la fenêtre
      el.classList.add('visible'); // Ajouter la classe visible
    }
  });
}
window.addEventListener('scroll', showElements); // Appeler la fonction au scroll
showElements(); // Appeler la fonction au chargement de la page


// Burger menu
const burger = document.getElementById("burger"); // Sélectionner l’icône burger
const navLinks = document.getElementById("nav-links"); // Sélectionner les liens de navigation

burger.addEventListener("click", () => { // Ajouter un écouteur d’événement au clic
  navLinks.classList.toggle("open"); // Basculer la classe open
});


// Slider images
const slides = document.querySelectorAll('.slider img'); // Sélectionner les images du slider
let current = 0; // Index de l’image en cours

function showSlide(index) { // Fonction pour afficher l’image
  slides.forEach((slide, i) => { // Pour chaque image
    slide.style.opacity = i === index ? '1' : '0'; // Afficher l’image courante, cacher les autres
  });
}
showSlide(current); // Afficher la première image

setInterval(() => { // Changer d’image toutes les 2 secondes
  current = (current + 1) % slides.length; // Incrémenter l’index, revenir au début si nécessaire
  showSlide(current); // Afficher l’image courante
}, 2000); // Intervalle de 2 secondes
