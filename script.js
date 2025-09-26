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


// Formulaire de contact
window.addEventListener("DOMContentLoaded", () => { // Ajouter un écouteur d’événement au chargement de la page
  const form = document.getElementById("contact-form"); // Sélectionner le formulaire
  const status = document.getElementById("form-status"); // Sélectionner le statut

  if (!form || !status) return; // Si le formulaire ou le statut n’existe pas, arrêter l’exécution

  form.addEventListener("submit", async (e) => { // Ajouter un écouteur d’événement au submit
    e.preventDefault(); // Empêcher le comportement par défaut du formulaire (soumission)

    const name = form.elements["name"].value.trim(); // Récupérer et nettoyer les valeurs des champs
    const email = form.elements["email"].value.trim(); 
    const message = form.elements["message"].value.trim();

    if (!name || !email || !message) { // Vérifier que tous les champs sont remplis
      status.style.color = "red"; // Changer la couleur du statut en rouge
      status.textContent = "Merci de remplir tous les champs."; // Afficher un message d’erreur
      status.classList.add("show"); // Afficher le statut
      return; // Arrêter l’exécution
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière pour valider l’email
    if (!emailRegex.test(email)) { // Si l’email n’est pas valide
      status.style.color = "red"; // Changer la couleur du statut en rouge
      status.textContent = "Merci de saisir un email valide."; // Afficher un message d’erreur
      status.classList.add("show"); // Afficher le statut
      return; // Arrêter l’exécution
    }

    const data = new FormData(form); // Créer un objet FormData avec les données du formulaire
    try { // Essayer de soumettre le formulaire
      const response = await fetch(form.action, { // Envoyer une requête HTTP avec le formulaire
        method: form.method, // Méthode de soumission
        body: data, // Données du formulaire
        headers: { 'Accept': 'application/json' } // En-têtes HTTP pour accepter JSON
      });

      if (response.ok) { // Si la réponse est OK
        status.style.color = "lightgreen"; // Changer la couleur du statut en vert
        status.textContent = "Message envoyé ! Merci 😊"; // Afficher un message de confirmation
        status.classList.add("show"); // Afficher le statut
        form.reset(); // Réinitialiser le formulaire
      } else {
        throw new Error("Erreur réseau"); // Si la réponse n’est pas OK, générer une erreur
      }
    } catch (error) { // Si une erreur survient
      status.style.color = "red"; // Changer la couleur du statut en rouge
      status.textContent = "Erreur lors de l'envoi. Réessayez plus tard."; // Afficher un message d’erreur
      status.classList.add("show"); // Afficher le statut
    }

    setTimeout(() => { // Retirer le statut après 5 secondes
      status.classList.remove("show"); // Cacher le statut
    }, 5000); // Intervalle de 5 secondes

  });
});
