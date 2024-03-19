document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

    // Récupérer les valeurs des champs email et mot de passe
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Créer un objet avec les données du formulaire
    const formData = {
        email: email,
        password: password
    };
    const maybetoken = await login(formData);

    if (maybetoken) {
         localStorage.setItem('token', maybetoken);
        window.location.href = '../html/home_connected.html';
    }
    else {
        alert("ogo")
        document.getElementById("error-block").classList.add = "error-block"; 
    }
});

// document.getElementById("logout").addEventListener("click", function() {
//     localStorage.removeItem('token');
//     window.location.href = '../html/index.html';
// });

