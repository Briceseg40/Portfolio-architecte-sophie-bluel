/*async function buildCategoryButtons() {
const categories = await getCategories();
// ici ajouter code pour fabriquer les boutons
}*/

/* recuperation des Categorie */ 

async function getWorks() {
  const res = await fetch('http://localhost:5678/api/works');
  const works = await res.json();
  console.log(works)
  return works;
  }
  /* 
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  */
 
 async function getCategories() {
     const response = await fetch('http://localhost:5678/api/categories');
     const categories = await response.json();
     console.log(categories); 
     return categories;
   
}
// fetch(url, {methode: "POST", body: ...})
 // {accept: "application/json", 'Content-Type': "application/json" } 
//  body: JSON.stringify({username: "", password:""})
// method: "MACHIN", body: JSON.stringify(), headers: {...}
