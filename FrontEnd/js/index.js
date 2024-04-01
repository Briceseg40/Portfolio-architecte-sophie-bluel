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
    imgGallery.dataset.id = work.id;
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
    const filtresBtns = document.querySelectorAll(".btn-filtre"); 
    filtresBtns.forEach(btnFiltre => {
        btnFiltre.style.backgroundColor = "white";
        btnFiltre.style.color = "#1D6154";
    });
    btnFiltre.style.backgroundColor = "#1D6154";
    btnFiltre.style.color = "white";
}


// Récupérer le token de connexion depuis sessionStorage
const token = sessionStorage.getItem('token');

if (token) {
    var connectElements = document.querySelector("body");
    connectElements.classList.add("content-connect");  
    connectElements.classList.remove("content-non-connect");
} 
else {
    var connectElements = document.querySelector("body");
    connectElements.classList.remove("content-connect");
    connectElements.classList.add("content-non-connect");  
}

document.addEventListener("DOMContentLoaded", function() {  
    document.getElementById("logout").addEventListener("click", function(event) {        
        event.preventDefault();
        sessionStorage.removeItem('token');
        window.location.reload();
    });
});
