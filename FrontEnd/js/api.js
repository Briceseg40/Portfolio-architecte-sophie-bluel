async function getWorks() {
  const res = await fetch('http://localhost:5678/api/works');
  const works = await res.json();
  return works;
}


async function getCategories() {
  const response = await fetch('http://localhost:5678/api/categories');
  const categories = await response.json();
  return categories;

}

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
    throw error; 
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
    if (!response.ok) {
      throw new Error(`La suppression de l'image avec l'ID ${imageId} a échoué.`);
    }
  } catch (error) {
    console.error(error);
    throw error; 
  }
}

async function addImgFunction(formData) {
  const token = sessionStorage.getItem('token');

    const fetchAwait = await fetch("http://localhost:5678/api/works", {
      method: "POST",
      body: formData,
      headers: {
        'Authorization': `Bearer ${token}`
      }
     });
     if (!fetchAwait.ok) {
      return "error";
    } else {
      const responseData = await fetchAwait.json();
      console.log(responseData);
    }
}