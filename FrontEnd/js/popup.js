const btnPop = document.querySelector(".btn-pop");
const crossPop = document.querySelector(".cross-btn");
const crossPop2 = document.querySelector(".cross-btn2");
const popup = document.querySelector(".popup");
const popup2 = document.querySelector(".popup2");



btnPop.addEventListener("click", function () {
  popup.style.display = "flex";
  openPopup();
});

crossPop.addEventListener("click", function () {
  popup.style.display = "none";
  window.reload
});

crossPop2.addEventListener("click", function () {
  popup2.style.display = "none";
  form.reset();
  document.querySelector("#image-preview img").remove();
  checkFields();
});

window.onclick = function(event) {
  if (event.target == popup2) {
      popup2.style.display = "none";
  }
  else if (event.target == popup) {
    popup.style.display = "none";
}
}

function openPopup() {
  const galleryImages = document.querySelectorAll(".gallery img");
  const popupContent = document.querySelector(".popup");
  const popupGallery = popupContent.querySelector(".gallery-popup");
  popupGallery.innerHTML = '';


  galleryImages.forEach(img => {
    const imgCopy = img.cloneNode(true);
    const newDiv = document.createElement("div");
    const crossDelete = document.createElement("i");

    crossDelete.classList = "trash-btn-img fa-solid fa-trash-can";
    crossDelete.dataset.id = img.dataset.id;

    crossDelete.addEventListener("click", deleteImg);

    newDiv.appendChild(imgCopy);
    newDiv.appendChild(crossDelete);
    popupGallery.appendChild(newDiv);
  });

  popupContent.classList.remove("hidden");
}

async function deleteImg(e) {
  try {
    const token = sessionStorage.getItem('token');
    const imageId = e.target.dataset.id;
    const result = await deleteImgFunction(token, imageId)
      .then(() => {
        e.target.parentNode.remove();
        galleryContainer.innerHTML = "";
        displayWorks();
      })
  } catch (error) {
    console.error('Une erreur est survenue lors de la suppression de l\'image :', error);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('fileInput').addEventListener('change', previewImage);


  function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function () {
      var imgElement = document.createElement('img');
      imgElement.src = reader.result;
      var imagePreview = document.getElementById('image-preview');
      if (imagePreview) {
        imagePreview.innerHTML = '';
        imagePreview.appendChild(imgElement);
      }
    }
    reader.readAsDataURL(event.target.files[0]);
  }
});


const form = document.querySelector(".form-post");
const urlImg = document.querySelector("#fileInput");
const titleImg = document.querySelector("#title-text");
const categorieImg = document.querySelector("#categorie-option");
const submitBtn = document.querySelector(".btn-submit");

function checkFields() {
  if (urlImg.value !== "" && titleImg.value !== "" && categorieImg.value !== "" ) {
    submitBtn.removeAttribute("id", "btn-no-validate"); // Supprime l'ID btn-no-validate
    submitBtn.removeAttribute("disabled"); // Active le bouton
  } else {
    submitBtn.id = "btn-no-validate";
    submitBtn.disabled = true;
  }
}

// Écouteurs d'événements pour les champs du formulaire
urlImg.addEventListener("input", checkFields);
titleImg.addEventListener("input", checkFields);
categorieImg.addEventListener("change", checkFields);

// Vérifie initialement lors du chargement de la page
checkFields();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
    const formData = new FormData(form);

    for (item of formData) {
      console.log(item[0], item[1]);
    };
    addImgFunction(formData);
})
// formData.append('image', urlImg.files[0]);
//   formData.append('title', titleImg);
//   formData.append('category', categorieImg);


document.getElementById("btn-add-img").addEventListener("click", function (event) {
  event.preventDefault();
  popup.style.display = "none";
  popup2.style.display = "flex";
});

document.querySelector(".arrow-prev").addEventListener("click", function () {
  popup2.style.display = "none";
  popup.style.display = "flex";
  form.reset();
  document.querySelector("#image-preview img").remove();
  checkFields();
});