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
});

crossPop2.addEventListener("click", function () {
  popup2.style.display = "none";
});


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


const form = document.querySelector(".description-img form");
  const urlImg = document.querySelector("#fileInput");
  const titleImg = document.querySelector("#title-text").value;
  const categorieImg = document.querySelector("#categorie-option").value;

form.addEventListener("submit",async (e)=> {
  e.preventDefault();
  const token = sessionStorage.getItem('token');
  const formData = new FormData()
  formData.append('image', urlImg.files[0]);
    formData.append('title', titleImg);
    formData.append('category', categorieImg);
  await addImgFunction(token, formData); 
})

document.getElementById("btn-add-img").addEventListener("click", function (event) {
  event.preventDefault();
  popup.style.display = "none";
  popup2.style.display = "flex";
});

document.querySelector(".arrow-prev").addEventListener("click", function () {
  popup2.style.display = "none";
  popup.style.display = "flex";
});