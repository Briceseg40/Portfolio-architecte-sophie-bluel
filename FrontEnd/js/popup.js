const btnPop = document.querySelector(".btn-pop");
const crossPop = document.querySelector(".cross-btn");
const popup = document.querySelector(".popup");



btnPop.addEventListener("click", function() {
  popup.style.display = "flex";
openPopup();
});





function openPopup() {
  crossPop.addEventListener("click", function() {
    popup.style.display = "none"; // Modifiez l'opacité pour cacher la popup
    console.log("fermeture");
  });
  // Sélectionne toutes les images dans la galerie
  const galleryImages = document.querySelectorAll(".gallery img");
  // Sélectionne la div de la popup
  const popup = document.querySelector(".popup");
  // Sélectionne la div de la galerie dans la popup
  const popupGallery = popup.querySelector(".gallery-popup");
  // Vide la galerie popup pour éviter les duplications
  popupGallery.innerHTML = '';
  
  // Créer une fonction pour gérer la fermeture de la popup
 
  
  // Créer une croix pour la fermeture de la popup
  const crossDelete = document.createElement("button");
  crossDelete.classList.add("cross-btn-img");
  crossDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  
  // Ajouter une croix pour la fermeture de la popup
  const closeButton = document.createElement("div");
  closeButton.appendChild(crossDelete);
  popup.appendChild(closeButton);
  
  // Copier chaque image de la galerie à la popup
  galleryImages.forEach(img => {
      const imgCopy = img.cloneNode(true); // Clone l'élément img
      const newDiv = document.createElement("div");
      
      // Créer une croix pour chaque image
      const imageCross = crossDelete.cloneNode(true);
      
      newDiv.appendChild(imgCopy); // Ajoute l'image clonée à la galerie popup
      newDiv.appendChild(imageCross); // Ajoute la croix à côté de l'image
      popupGallery.appendChild(newDiv); // Ajoute le div contenant l'image et la croix à la galerie popup
  });
  
  // Affiche la popup
  popup.classList.remove("hidden");
}
