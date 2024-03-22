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

async function login(formData) {
  try {
    const response = await fetch('http://localhost:5678/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      return null;
    } else {
      const responseData = await response.json();
      const token = responseData.token;
      return token;
    }
  } catch (error) {
    // Gérer l'erreur ici si nécessaire, mais ne pas modifier l'interface utilisateur depuis cette fonction
    throw error; // Propager l'erreur pour qu'elle soit gérée dans la fonction appelante
  }
}