/*async function buildCategoryButtons() {
const categories = await getCategories();
// ici ajouter code pour fabriquer les boutons
}*/

/* recuperation des Categorie */ 
const filtres = document.querySelector(".filtres");
const galleryContainer = document.querySelector(".gallery");

filtreData();
galleryData();


async function filtreData() {
  try {
    const response = await fetch('http://localhost:5678/api/categories');
    const html = await response.json();
    console.log(html); 
    for (const category of html) {
      const btnFiltres = document.createElement("button");
      btnFiltres.innerText = category.name;
      filtres.appendChild(btnFiltres);
    }
  } catch (error) {
    console.error('Une erreur s\'est produite :', error);
  }
}
// {accept: "application/json", 'Content-Type': "application/json" } 

async function galleryData() {
 
    const res = await fetch('http://localhost:5678/api/works');
    const data = await res.json();
    for (const item of data) {
      const figureGallery = document.createElement("figure");
      const imgGallery = document.createElement("img");
      const figcapGallery = document.createElement("figcaption");
      imgGallery.src = item.imageUrl;
      figcapGallery.innerText = item.title;
      galleryContainer.appendChild(figureGallery);
      figureGallery.appendChild(imgGallery);
      figureGallery.appendChild(figcapGallery);
    }
}

/* 
-H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  */