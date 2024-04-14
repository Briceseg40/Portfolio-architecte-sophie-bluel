const btnPop = document.querySelector(".btn-pop");
const crossPop = document.querySelector(".cross-btn");
const crossPop2 = document.querySelector(".cross-btn2");
const popup = document.querySelector(".popup");
const popup2 = document.querySelector(".popup2");
const form = document.querySelector(".form-post");
const fileInput = document.querySelector("#fileInput");
const titleInput = document.querySelector("#title-text");
const categorieInput = document.querySelector("#categorie-option");
const submitBtn = document.querySelector(".btn-submit");




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

window.onclick = function (event) {
  if (event.target == popup2) {
    popup2.style.display = "none";
    document.querySelector("#image-preview img").remove();

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
        while (imagePreview.firstChild) {
            imagePreview.removeChild(imagePreview.firstChild);
        }
        imagePreview.appendChild(imgElement);
    }
    reader.readAsDataURL(event.target.files[0]);
}});




function checkFields() {
  if (fileInput.value !== "" && titleInput.value !== "" && categorieInput.value !== "") {
    submitBtn.removeAttribute("id", "btn-no-validate");
    submitBtn.removeAttribute("disabled");
    document.querySelector("#form-empty").classList.add("hidden");
    document.querySelector("#form-empty").classList.remove("apparent");


  } else {
    submitBtn.id = "btn-no-validate";
    submitBtn.disabled = true;
    document.querySelector("#form-empty").classList.add("apparent");
    document.querySelector("#form-empty").classList.remove("hidden");

  }
}
fileInput.addEventListener("input", checkFields);
titleInput.addEventListener("input", checkFields);
categorieInput.addEventListener("change", checkFields);

checkFields();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData();

  formData.append('image', fileInput.files[0]);
  formData.append('title', titleInput.value);
  formData.append('category', categorieInput.value);
  const result = await addImgFunction(formData);

  if (result == "error"){
    console.log(error);
    // document.querySelector("#erreur-submit").innerHTML = "<p id='erreur-submit'>Erreur dans l'ajout d'image,<br> Veuillez verifier les informations</p>"
  } else {
    document.querySelector("#erreur-submit").innerHTML = "";
  popup2.style.display = "none";
  form.reset();
  document.querySelector("#image-preview img").remove();

  removeWorks();
  displayWorks();
  }
})

document.getElementById("btn-add-img").addEventListener("click", function (event) {
  event.preventDefault();
  popup.style.display = "none";
  popup2.style.display = "flex";
checkFields();

});

document.querySelector(".arrow-prev").addEventListener("click", function () {
  popup2.style.display = "none";
  popup.style.display = "flex";
  form.reset();
  document.querySelector("#image-preview img").remove();
  checkFields();
});