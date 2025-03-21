// Liste des utilisateurs (ici un exemple simple, à stocker dans une base de données en réalité)
const users = {
    "eleve1": { password: "elevepass", role: "eleve" },
    "prof1": { password: "profpass", role: "professeur" },
    "vieScolaire": { password: "viescolpass", role: "vie_scolaire" },
    "direction": { password: "directionpass", role: "direction" }
};

function connect() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var role = document.getElementById("role").value;

    // Vérification des identifiants
    if (users[username] && users[username].password === password && users[username].role === role) {
        // Enregistrer la session dans le localStorage si l'utilisateur veut rester connecté
        if (document.getElementById("rememberMe").checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("role", role);
        }

        // Rediriger l'utilisateur vers la page du tableau de bord
        window.location.href = "tableau_de_bord.html";
    } else {
        document.getElementById("restrictedMessage").style.display = "block";
    }
}
