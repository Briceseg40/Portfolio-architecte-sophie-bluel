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
    
    setTimeout(displayPopup, 0); // Appel de displayPopup après un court délai

    function displayPopup() {
        const imgPopup = imgGallery.cloneNode(true);
        const figurePopup = document.createElement("figure");
        figurePopup.appendChild(imgPopup);
        document.querySelector('.gallery-popup').appendChild(figurePopup);
    }
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