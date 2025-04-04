-------------COMMENT INSTALLER LE FRAMEWORK TAILWINDCSS AVEC UTILISATION DE POST CSS---------------

🚀 Étapes pour démarrer un projet Tailwind CSS
✅ 1. Crée un dossier de projet
Exemple :

----terminal ou bash-----

mkdir mon-projet-tailwind
cd mon-projet-tailwind


✅ 2. Initialise un projet Node (npm)
terminal ou bash

npm init -y
Cela va créer un fichier package.json.

✅ 3. Installe Tailwind CSS, PostCSS, et Autoprefixer
terminal ou bash

npm install -D tailwindcss postcss 


✅ 4. Génére les fichiers de configuration
terminal ou bash

npx tailwindcss init -p
👉 Cela crée deux fichiers :

tailwind.config.js

postcss.config.js


✅ 5. Structure ton projet
Crée ces fichiers/dossiers :

css

mon-projet-tailwind/
├── index.html
├── src/
│   └── input.css
├── dist/
│   └── output.css (sera généré automatiquement)



✅ 6. Configure tailwind.config.js
Assure-toi que le fichier contient ceci :

js

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}
Tu peux aussi ajouter "./src/*.js" si tu utilises du JavaScript avec des classes Tailwind.
tu peux aussi ajouter "./**/*.{html,js,jsx,ts;tsx}", pour tous tes fichies html, js, jsx, ts si tu les utilises avec tailwind.


✅ 7. Crée ton fichier CSS d’entrée : src/input.css
css

@tailwind base;
@tailwind components;
@tailwind utilities;



✅ 8. Génère le CSS avec Tailwind
Dans le terminal, lance :

terminal ou bash

npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
-i → fichier d’entrée

-o → fichier de sortie

--watch → met à jour automatiquement à chaque sauvegarde



✅ 9. Relie ton CSS à ton index.html
html

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Mon Projet Tailwind</title>
  <link href="./dist/output.css" rel="stylesheet">
</head>
<body class="bg-gray-100 p-4">
  <h1 class="text-3xl font-bold text-blue-600">Hello Tailwind !</h1>
</body>
</html>



✅ 10. Ouvre le fichier index.html dans ton navigateur
Tu devrais voir un fond gris clair et un titre bleu !



🔁 Astuce bonus : pour ne pas retaper la commande npx tailwindcss...
Tu peux ajouter ce script dans ton package.json :

json

"scripts": {
  "dev": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch"
}
Et ensuite tu lances juste :

terminal ou bash

npm run dev



--------------------------Mon projet de reseau socail------------------------------

en cours de travail pour plus de détail bientôt................