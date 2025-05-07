const nom = document.getElementById("nom");
const preName = document.getElementById("prenoms");
const mail = document.getElementById("email");
const pass = document.getElementById("pass");
const btnPass = document.getElementById("btnPass");
const passConfirm = document.getElementById("passConfirm")
const btnConfirm = document.getElementById("btn-confirm")
const dateNaiss = document.getElementById("date");

const homme = document.getElementById("homme");
const femme = document.getElementById("femme");

const remember = document.getElementById("remember");

const btnSubmit = document.getElementById("btnSubmit");
const btnReset = document.getElementById("btnReset");

const dataUser = document.getElementById("donne");

const dataSave = document.getElementById("data-save");

// function addDataUser (item) {

//     const personal = document.createElement("p");
//     // dataUser.appendChild(personal).innerText = `✔  ➖  ${item} \n \n`;
//     dataSave.style.display = "block"
// }

   

passConfirm.addEventListener("input", () => {
   const val = passConfirm.value;
   const noConform = document.getElementById("noConform")
   if(val.length > 0) {
    noConform.classList.remove('hidden')
    if(passConfirm.value !== pass.value) {
        noConform.classList.remove('hidden')
        noConform.classList.add("noConform")
        noConform.innerHTML = `<i class="fas fa-exclamation-triangle"></i> les mots de passe ne sont pas identiques`
        btnSubmit.disabled = true; // Désactive le bouton s'inscrire
      }else {
        noConform.classList.add('hidden')
        btnSubmit.disabled = false; // active le bouton s'inscrire
      }
    } else {
        noConform.classList.add('hidden')
    }
  })






function connexion() {

    const username = nom.value.trim();
  const email = mail.value.trim();
  const dateUser = dateNaiss.value.trim();
  const password = pass.value.trim();

    const user = {
    username: username,
    email: email,
    password: password,
    dateUser: dateUser
  };

// Enregistrer les informations dans le localStorage
localStorage.setItem('user', JSON.stringify(user)); // Sauvegarde l'objet utilisateur sous forme de chaîne JSON
  

    //       const save = Object.values(user).map(item => { 
    //         addDataUser(item),
    //         console.log("-" + item) 
    // })



}


function remplirChamp() {
    
    const pass = document.getElementById("pass");

    const passConfirm = document.getElementById("passConfirm")

    const username = nom.value.trim();
    const email = mail.value.trim();
    const dateUser = dateNaiss.value;
    const password = pass.value;
    // const passwordConfirm = passConfirm.value;

    document.getElementById("formContent").addEventListener("submit", (e) => {
        e.preventDefault();
        const errorDiv = document.getElementById("error");
         let errors = []

          // Vérification du nom
  if (!/^[a-zA-Z\s]+$/.test(username)) {
    errors.push("Le nom ne doit contenir que des lettres.");
  }

  // Vérification de l'email
  if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
    errors.push("Veuillez entrer une adresse Gmail valide.");
  }

  // Vérification du mot de passe
  if (password.length < 8) {
    errors.push("Le mot de passe doit contenir au moins 8 caractères.");
  }

  // Vérification de l’âge (13 ans minimum)
  const birthDate = new Date(dateUser);
  const age = new Date().getFullYear() - birthDate.getFullYear();
  if (isNaN(birthDate.getTime()) || age < 13) {
    errors.push("Vous devez avoir au moins 13 ans.");
  }

//   // Vérification du genre
//   if (!gender) {
//     errors.push("Veuillez sélectionner un genre.");
//   }

  // Affichage des erreurs ou validation
  if (errors.length > 0) {
    errorDiv.innerHTML = errors.join("<br>");
  } else {
    errorDiv.innerHTML = "";
    connexion();
     window.location.href = '../pages/login.html'
    // Envoyer les données au backend ici
  }

    })

//     if((username === "") && (email) && (password) && (dateUser)) {
        
//         document.getElementById("warningNom").style.display = "flex";
//         document.getElementById("warningForm").style.display = "none";
        

//     } else if ((email === "") && (username) && (password) && (dateUser)) {
 
//          document.getElementById("warningEmail").style.display = "flex";
//          document.getElementById("warningForm").style.display = "none";
         

//     } else if((dateUser === "") && (email) && (password) && (username)) {

//          document.getElementById("warningDate").style.display = "flex";
//          document.getElementById("warningForm").style.display = "none";
    

//     } else if((password === "") && (email) && (username) && (dateUser)) {

//          document.getElementById("warningPassword").style.display = "flex";
//          document.getElementById("warningForm").style.display = "none";
        
//     }
    
//     else if((username === "") && (email === "") && (password === "") && (dateUser === "")) {
//         document.getElementById("warningForm").style.display = "flex";
        

//     } else {
//         connexion();
//          // Rediriger vers la page de connexion après l'inscription réussie
//   window.location.href = '../pages/login.html'; // Redirection vers la page de connexion
//     }
}



function formReset() {

    const username = nom.value;
    const email = mail.value;
    const dateUser = dateNaiss.value;
    const password = pass.value;
    
    username === "";
    email === "";
    password === "";
    dateUser === "";
    homme === "";
    femme === "";
    remember === "";
    dataSave.style.display = "none"
    
     document.getElementById("warningForm").style.display = "none";
      document.getElementById("warningNom").style.display = "none";
       document.getElementById("warningEmail").style.display = "none";
         document.getElementById("warningPassword").style.display = "none";
          document.getElementById("warningDate").style.display = "none";
}


    const eyeIconSlash = document.getElementById("eye-icon-slash")
    eyeIconSlash.addEventListener("click", () => {

        if(pass.type === "password") {
            pass.type = "text";
           eyeIconSlash.style.display = "none";
           eyeIcon.style.display = "block"; 
        } 
    })
    
        const eyeIcon = document.getElementById("eye-icon");
        eyeIcon.addEventListener("click", () => {
            if(pass.type === "text") {
                pass.type = "password";
               eyeIconSlash.style.display = "block";
               eyeIcon.style.display = "none";
            }
        })


    const eyeIconSlashConfirm = document.getElementById("eye-icon-slash-confirm")
    eyeIconSlashConfirm.addEventListener("click", () => {

        if(passConfirm.type === "password") {
            passConfirm.type = "text";
           eyeIconSlashConfirm.style.display = "none";
           eyeIconConfirm.style.display = "block";
        }
    })

    const eyeIconConfirm = document.getElementById("eye-icon-confirm");
    eyeIconConfirm.addEventListener("click", () => {

        if(passConfirm.type === "text") {
            passConfirm.type = "password";
           eyeIconSlashConfirm.style.display = "block";
           eyeIconConfirm.style.display = "none";
        }
    })


btnSubmit.addEventListener("click", function() {
    
    btnSubmit.disabled = true; // Désactive le bouton pour éviter le double-clic

    let isValid = remplirChamp(); // Appelle la fonction et récupère si tout est valide

    if (isValid) {
        window.location.href = '../pages/login.html'; // Redirection seulement si OK
    } else {
        btnSubmit.disabled = false; // Réactive le bouton si erreur
    }
    
  });
  

// btnReset.addEventListener("click", () => {
//     formReset();
//     btnSubmit.disabled = false;
// });

 