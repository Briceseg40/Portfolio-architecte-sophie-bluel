document.addEventListener("DOMContentLoaded", function() {
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
                window.location.href = '../index.html';
            } else {
            const errorMessageElement = document.getElementsByClassName("error-message")[0];
            errorMessageElement.classList.remove("error-message");
            errorMessageElement.classList.add("display-message");
                    }
    });
});
