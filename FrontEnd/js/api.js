
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

async function deleteImgFunction(token, imageId) {
  try {
    const response = await fetch(`http://localhost:5678/api/works/${imageId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    console.log(response);
    // console.log(`voici le token : ${token}`);
    if (!response.ok) {
      throw new Error(`La suppression de l'image avec l'ID ${imageId} a échoué.`);
    }
  } catch (error) {
    console.error(error);
    throw error; // Propager l'erreur pour qu'elle soit gérée dans la fonction appelante
  }
}

async function addImgFunction(formData) {
  const token = sessionStorage.getItem('token');
 
  try {

    const fetchAwait = await fetch("http://localhost:5678/api/works", {
      method: "POST",
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
     });
  
     if (!fetchAwait.ok) {
      return null;
    } else {
      const responseData = await fetchAwait.json();
      console.log(responseData);  
    }
  } catch (error) {
    // Gérer l'erreur ici si nécessaire, mais ne pas modifier l'interface utilisateur depuis cette fonction
    throw error; // Propager l'erreur pour qu'elle soit gérée dans la fonction appelante
  }
  // displayWorks();

}