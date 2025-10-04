// ========= Affichage du pays en page hero après le mot "Visit" ==========

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
