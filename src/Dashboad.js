const usernameId1 = document.getElementById("username1");
//const usernameId2 = document.getElementById("username2")

const logoutBtn = document.getElementById("logOut");

const idUser = document.getElementById("idUser");
// Vérifier si l'utilisateur est authentifié (en regardant si un utilisateur existe dans le localStorage)

const storeUser = JSON.parse(localStorage.getItem("user"));

if(storeUser) {

    // Afficher les informations de l'utilisateur sur le tableau de bord
    usernameId1.innerHTML = storeUser.username;
  //  usernameId2 = storeUser.username;
    const identifiant = storeUser.username;
    identifiant.innerHTML = `@${idUser}`;
}else {
    // Si l'utilisateur n'est pas trouvé, rediriger vers la page de connexion
    window.location.href = "../pages/login.html";
}

// Gestion la déconnexion
logoutBtn.addEventListener("click", () => {

    // Supprimer les informations de l'utilisateur du localStorage
    localStorage.removeItem(storeUser);

    // Rediriger vers la page de connexion
    window.location.href = "../pages/login.html";
})
