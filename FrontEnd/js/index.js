const filtres = document.querySelector(".filtres");
const galleryContainer = document.querySelector(".gallery");

displayWorks();
displayCategories();

async function displayWorks() {
    const works = await getWorks();
    for (const work of works) {
        displayWork(work);
    }
}

function displayWork(work) {
    const figureGallery = document.createElement("figure");
    const imgGallery = document.createElement("img");
    const figcapGallery = document.createElement("figcaption");
    imgGallery.src = work.imageUrl;
    figcapGallery.innerText = work.title;
    const filtresGallery = work.category.name;
    figcapGallery.classList.add("card-image");
    galleryContainer.appendChild(figureGallery);
    figureGallery.appendChild(imgGallery);
    figureGallery.appendChild(figcapGallery);
}


async function displayCategories() {
    const btnAll = document.createElement("button");
    btnAll.innerText = "Tous";
    btnAll.classList.add("btn-filtre");
    btnAll.addEventListener("click", filterCategory);
    filtres.appendChild(btnAll);

    const categories = await getCategories();
    for (const category of categories) {
        const btnFiltre = document.createElement("button");
        btnFiltre.classList.add("btn-filtre");
        btnFiltre.innerText = category.name;
        btnFiltre.dataset.categoryId = category.id;
        btnFiltre.addEventListener("click", filterCategory);
        filtres.appendChild(btnFiltre);
    }
}

async function filterCategory(e) {
    galleryContainer.innerHTML = "";
    const btnFiltre = e.target;
    const works = await getWorks();
    for (const work of works) {
        if (work.category.id == e.target.dataset.categoryId || e.target.dataset.categoryId == undefined) {
            displayWork(work);
        }
    }
    const filtresBtns = document.querySelectorAll(".btn-filtre"); // Sélectionner tous les boutons de filtre
    filtresBtns.forEach(btnFiltre => {
        btnFiltre.style.backgroundColor = "white";
        btnFiltre.style.color = "#1D6154";
    });
    btnFiltre.style.backgroundColor = "#1D6154";
    btnFiltre.style.color = "white";
}


// Récupérer le token de connexion depuis localStorage
const token = localStorage.getItem('token');

// Vérifier si un token est présent
if (token) {
    // Si un token est présent, masquer les éléments avec la classe "content-non-connect" et afficher les éléments avec la classe "content-connect"
    var nonConnectElements = document.getElementsByClassName("content-non-connect");
    for (var i = 0; i < nonConnectElements.length; i++) {
        nonConnectElements[i].style.display = "none";
    }

    var connectElements = document.getElementsByClassName("content-connect");
    for (var j = 0; j < connectElements.length; j++) {
        connectElements[j].style.display = "block";
    }
} else {
    // Si aucun token n'est présent, masquer les éléments avec la classe "content-connect" et afficher les éléments avec la classe "content-non-connect"
    var connectElements = document.getElementsByClassName("content-connect");
    for (var k = 0; k < connectElements.length; k++) {
        connectElements[k].style.display = "none";
    }

    var nonConnectElements = document.getElementsByClassName("content-non-connect");
    for (var l = 0; l < nonConnectElements.length; l++) {
        nonConnectElements[l].style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Gestionnaire d'événements pour le lien de déconnexion
    document.getElementById("logout").addEventListener("click", function(event) {
        // Empêcher le comportement par défaut du lien (empêcher la navigation)
        event.preventDefault();

        // Supprimer le token de connexion du localStorage
        localStorage.removeItem('token');

        // Actualiser la page pour afficher à nouveau les éléments avec la classe "content-non-connect"
        window.location.reload();
    });
});
