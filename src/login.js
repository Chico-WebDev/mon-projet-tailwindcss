
const btnSubmit = document.getElementById("btnSubmit");
// const btnReset = document.getElementById("btnReset");

const check = document.getElementById("check");

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();//Empêche le rechargment de la page
    login();
})

// btnReset.addEventListener("click", (e) => {
//     e.preventDefault();

//     const userId = document.getElementById("userNameMail").value.trim();
//     const password = document.getElementById("password").value.trim();

//     userId.innerHtml = "";
//     password.innerHtml = "";

// })



function isEmail(input) {
    
    const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    return emailRegEx.test(input);
}

function isValidId (input) {
    
    const storeUser = JSON.parse(localStorage.getItem("user"));

    if(isEmail(input)) {
        if(input === storeUser.email) {
            console.log("email valide");
        } else {
            console.log("email non valide");
        }
    } else {
        if(input === storeUser.username) {
            console.log("user validé");
        } else {
            console.log("user non validé");
        }
    }
}



function login () { 

    const userId = document.getElementById("userNameMail").value.trim();
    const password = document.getElementById("password").value.trim();
    const valideId = isValidId(userId);

//     if(userId === "" || password === "") {
//         check.textContent = "Veuillez remplir tout les champs ci-dessus!"
//      return;
// }

 // Vérifier si l'utilisateur existe dans le localStorage
const storeUser = JSON.parse(localStorage.getItem("user"));


if(storeUser) {
     // Comparer les informations de connexion avec celles enregistrées
    if((userId === storeUser.username || userId === storeUser.email) && (password === storeUser.password)) {
             // Rediriger vers la page de connexion après l'inscription réussie
          window.location.href = '../index.html'; // Redirection vers la page de connexion
          return;
          }       else {
                     check.innerHTML = `<div><i class="fas fa-exclamation-triangle"></i> Nom utilisateur ou mot de passe incorrecte</div>`;
                     check.classList.remove("hidden")
                 }

}

}

function showHidePass() {
    const showPassword = document.getElementById("password");
      const eyeIconSlash = document.getElementById("eye-icon-slash")
    const eyeIcon = document.getElementById("eye-icon");

    if(showPassword.type === "password") {
        showPassword.type = "text";
        eyeIconSlash.style.display = "none";
        eyeIcon.style.display = "block";
    } else {
        showPassword.type = "password";
        eyeIcon.style.display = "none";
        eyeIconSlash.style.display = "block";
    }
}

const btnPass = document.getElementById("btnPass");

btnPass.addEventListener("click", showHidePass)

