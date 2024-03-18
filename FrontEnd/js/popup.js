const crossPop = document.getElementsByClassName(".fa-xmark");
const btnPop = document.getElementsByClassName(".btnpop");
const popup = document.getElementsByClassName(".popup");


btnPop.addEventListener("click", function() {
  popup.style.display = "block";
openPopup();

});

crossPop.addEventListener("click", function() {
  popup.style.display = "none";
});


function openPopup() {
    // Sélectionne toutes les images dans la galerie
    const galleryImages = document.querySelectorAll('.gallery img');
    // Sélectionne la div de la popup
    const popup = document.querySelector('.popup');
    // Sélectionne la div de la galerie dans la popup
    const popupGallery = popup.querySelector('.gallery-popup');
    
    // Vide la galerie popup pour éviter les duplications
    popupGallery.innerHTML = '';
    
    // Copie chaque image de la galerie à la popup
    galleryImages.forEach(img => {
      const imgCopy = img.cloneNode(true); // Clone l'élément img
      popupGallery.appendChild(imgCopy); // Ajoute l'image clonée à la galerie popup
    });
    
    // Affiche la popup
    popup.classList.remove('hidden');
  }