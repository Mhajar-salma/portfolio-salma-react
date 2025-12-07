Portfolio – Salma M’hajar (React.js)
Ce projet est un portfolio développé avec React.js, basé sur une maquette fournie dans le cadre du devoir « Optimisez votre CV en ligne avec React.js » du CEF.
Il présente mon CV, mes services, mes réalisations, mon blog et un formulaire de contact.
Une application React séparée permet également d’afficher les informations de mon profil GitHub via l’API officielle.
🔧 Technologies utilisées
React.js (Vite)
React Router
Bootstrap 5
Font Awesome 6
Helmet / Helmet-Async (SEO)
Fetch API (appel API GitHub)
CSS personnalisé
🎨 Charte graphique
Police : Nunito Sans
Couleurs principales :
Fond : #EEE
Texte : #444
Titres : #1e1e1e
Couleur principale : #0d6efd
Icônes : Font Awesome
Design responsive via Bootstrap
📂 Structure du projet
src/
  assets/
    css/styles.css
    img/
      hero.jpg
      contact-bg.jpg
      photo-salma.jpg
      blog/
      projets/
  components/
    Header.jsx
    Footer.jsx
    BackToTop.jsx
    GithubProfile.jsx
  pages/
    Home.jsx
    Services.jsx
    Realisations.jsx
    Blog.jsx
    Contact.jsx
    MentionsLegales.jsx
  App.jsx
  main.jsx
🚀 Installation et lancement
1️⃣ Prérequis
Node.js ≥ 16
npm ou yarn
2️⃣ Installation du projet
git clone https://github.com/TON-REPO/portfolio-salma-react.git
cd portfolio-salma-react
npm install
3️⃣ Lancement en mode développement
npm run dev
4️⃣ Build pour mise en production
npm run build
Le dossier dist/ sera généré.
🌍 Hébergement
Le site peut être hébergé sur :
Netlify
Vercel
GitHub Pages
CodeSandbox (autorisé par l’énoncé)
📡 Application GitHub API
Le composant GithubProfile.jsx utilise :
https://api.github.com/users/mhajar-salma
Il affiche :
Avatar
Nom
Nom d’utilisateur
Bio
Repos publics
Followers
Lien vers le profil GitHub
🔒 Mentions légales
La page “Mentions légales” inclut :
Éditeur
Hébergeur
Crédits (Pixabay)
Meta :
<meta name="robots" content="noindex, nofollow">
