/*async function buildCategoryButtons() {
const categories = await getCategories();
// ici ajouter code pour fabriquer les boutons
}*/

/* recuperation des Categorie */ 

const filtres = document.querySelector(".filtres");

fetch('http://localhost:5678/api/categories')
  .then(response => response.json())
  .then(html => { console.log(html); 
    for (const category of html) {
      const btnFiltres = document.createElement("button");
      btnFiltres.innerText = category.name;
      filtres.appendChild(btnFiltres);
    }
  });


// {accept: "application/json", 'Content-Type': "application/json" } 


/*const res = await fetch*/

/* 
-H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  */