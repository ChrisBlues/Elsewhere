// Affichage de l'image agrandie de "Gallery" dans la modale
document.addEventListener("DOMContentLoaded", function () {
  const popImages = document.querySelectorAll(".pop");
  const modal = new bootstrap.Modal(document.getElementById("imagemodal"));
  const modalImg = document.querySelector(".modal-image");
  const closeBtn = document.querySelector(".close-modal");

  // Clic sur image agrandie pour fermer
  modalImg.addEventListener("click", function () {
    modal.hide();
  });

  // Clic sur image miniature pour ouvrir
  popImages.forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      const src = el.querySelector("img").getAttribute("src");
      modalImg.setAttribute("src", src);
      modal.show();
    });
  });
});

// ========== Affichage du pays en page hero après le mot "Visit" ===============

const countries = [
  "France", "Spain", "United States", "China", "India",
  "Pakistan", "Italy", "Turkey", "Mexico", "Germany", "United Kingdom"
];

let index = 0;
const textElement = document.getElementById("change-text");

function changeCountry() {
  textElement.style.opacity = 0;

  setTimeout(() => {
    textElement.textContent = countries[index];
    textElement.style.opacity = 1;
    index = (index + 1) % countries.length;
  }, 1000); // temps du fondu de sortie
}

setInterval(changeCountry, 3000); // 1s sortie + 1s entrée + 1s affichage

// ==============================================================================

// JavaScript : détection du bas de page pour le footer de remerciements en fondu
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.body.offsetHeight;
  const footer = document.getElementById('thank-you-footer');

  if (scrollPosition >= pageHeight - 50) {
    footer.classList.add('visible');
  } else {
    footer.classList.remove('visible');
  }
});

// ================================= Modale discrète sur Services ===================================

function openModal(id) {
  document.getElementById('modal-' + id).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById('modal-' + id).style.display = 'none';
}

// Nouvelles modales
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Boutons d'ouverture
document.getElementById('openServices').onclick = () => openModal('modalServices');
document.getElementById('openGallery').onclick = () => openModal('modalGallery');

// Boutons de fermeture
document.querySelectorAll('.close').forEach(btn => {
  btn.onclick = () => closeModal(btn.dataset.close);
});

// Fermeture en cliquant hors de la modale
window.onclick = function(event) {
  ['modalServices', 'modalGallery'].forEach(id => {
    const modal = document.getElementById(id);
    if (event.target === modal) modal.style.display = 'none';
  });
};

console.log("Script chargé !");

