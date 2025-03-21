// Fonction pour créer un compte élève
function createStudentAccount() {
    var username = document.getElementById("newStudentUsername").value;
    var password = document.getElementById("newStudentPassword").value;

    if (username && password) {
        users[username] = { password: password, role: "eleve" };
        alert("Compte élève créé !");
    } else {
        alert("Veuillez remplir tous les champs !");
    }
}
