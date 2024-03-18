const btnPop = document.querySelector(".btn-pop");
const crossPop = document.querySelector(".cross-btn");
const popup = document.querySelector(".popup");



btnPop.addEventListener("click", function() {
  popup.style.display = "flex";
openPopup();
});


crossPop.addEventListener("click", function() {
  popup.style.display = "none"; // Modifiez l'opacité pour cacher la popup
  console.log("fermeture");
});



function openPopup() {
    // Sélectionne toutes les images dans la galerie
    const galleryImages = document.querySelectorAll(".gallery img");
    // Sélectionne la div de la popup
    const popup = document.querySelector(".popup");
    // Sélectionne la div de la galerie dans la popup
    const popupGallery = popup.querySelector(".gallery-popup");
    // Vide la galerie popup pour éviter les duplications
    popupGallery.innerHTML = '';
    
    // Copie chaque image de la galerie à la popup
    galleryImages.forEach(img => {
      const imgCopy = img.cloneNode(true); // Clone l'élément img
      const newDiv = document.createElement("div")
    const crossDelete = document.querySelector(".i-cross")


      popupGallery.appendChild(newDiv); // Ajoute l'image clonée à la galerie popup
      newDiv.appendChild(imgCopy); // Ajoute l'image clonée à la galerie popup
      newDiv.appendChild(crossDelete); // Ajoute l'image clonée à la galerie popup
    });
    
    // Affiche la popup
    popup.classList.remove("hidden");
  }