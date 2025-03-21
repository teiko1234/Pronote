// Charger les informations de l'utilisateur depuis localStorage
document.getElementById("usernameDisplay").innerText = localStorage.getItem("username");
document.getElementById("roleDisplay").innerText = localStorage.getItem("role");

function logout() {
    // Effacer les données de connexion et rediriger vers la page de connexion
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    window.location.href = "index.html";  // Rediriger vers la page de connexion
}
