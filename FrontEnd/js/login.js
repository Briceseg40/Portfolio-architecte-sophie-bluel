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

    try {
        // Envoyer les données à l'API
        const response = await fetch('http://localhost:5678/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la connexion');
            document.getElementById("error-message").style.display = "block";
        }
        const responseData = await response.json();
        const token = responseData.token;
        // Stocker le token dans le stockage local
        localStorage.setItem('token', token);

        // Rediriger l'utilisateur vers une autre page si nécessaire
        window.location.href = '../html/home_connected.html';

        // Faire quelque chose avec la réponse de l'API si nécessaire
        console.log(responseData);
    } catch (error) {
        console.error('Erreur:', error);
    }
return token;

});

document.getElementById("logout").addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.removeItem('token');
    window.location.href = '../index.html';

});

