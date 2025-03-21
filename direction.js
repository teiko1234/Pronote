// Fonction pour créer un compte professeur
function createTeacherAccount() {
    var username = document.getElementById("newTeacherUsername").value;
    var password = document.getElementById("newTeacherPassword").value;

    if (username && password) {
        users[username] = { password: password, role: "professeur" };
        alert("Compte professeur créé !");
    } else {
        alert("Veuillez remplir tous les champs !");
    }
}

// Fonction pour créer un emploi du temps
function createTimetable() {
    var timetable = document.getElementById("newTimetable").value;
    if (timetable) {
        alert("Emploi du temps créé !");
    } else {
        alert("Veuillez entrer l'emploi du temps !");
    }
}
