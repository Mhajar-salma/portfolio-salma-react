Portfolio – Salma M’hajar (React.js)
Ce projet est un portfolio développé avec React.js, réalisé dans le cadre du devoir
« Optimisez votre CV en ligne avec React.js » du CEF.
Il présente :
Mon CV
Mes services
Mes réalisations
Mon blog
Un formulaire de contact
Une application React intégrée affichant mon profil GitHub via l’API officielle
Le site respecte la charte graphique imposée, est responsive, optimisé pour le SEO, et hébergé en ligne.
🔧 Technologies utilisées
React.js (avec Vite)
React Router
Bootstrap 5
Font Awesome 6
React Helmet / Helmet-Async (SEO)
Fetch API (appel de l’API GitHub)
CSS personnalisé
🎨 Charte graphique
Police : Nunito Sans
Couleurs principales :
Fond : #EEE
Texte : #444
Titres : #1e1e1e
Couleur principale : #0d6efd
Icônes : Font Awesome
Design : Responsive (mobile, tablette, desktop) via Bootstrap
📂 Structure du projet
src/
  assets/
    css/
      styles.css
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
🚀 Installation et lancement du projet
1️⃣ Prérequis
Node.js ≥ 16
npm ou yarn
2️⃣ Installation du projet
git clone https://github.com/mhajar-salma/portfolio-salma-react.git
cd portfolio-salma-react
npm install
3️⃣ Lancement en mode développement
npm run dev
4️⃣ Build pour la mise en production
npm run build
Le dossier dist/ est alors généré.
🌍 Hébergement
Le projet est compatible avec :
✅ GitHub Pages (choisi pour ce projet)
Netlify
Vercel
CodeSandbox (autorisé par l’énoncé)
📡 Application GitHub API
Le composant GithubProfile.jsx utilise l’API officielle GitHub :
https://api.github.com/users/mhajar-salma
Il affiche dynamiquement :
✅ Avatar
✅ Nom
✅ Nom d’utilisateur
✅ Bio
✅ Nombre de dépôts publics
✅ Nombre de followers
✅ Lien vers le profil GitHub
🔒 Mentions légales
La page Mentions légales contient :
✅ Éditeur du site
✅ Hébergeur
✅ Crédits images (Pixabay)
✅ Protection SEO avec la balise :
<meta name="robots" content="noindex, nofollow">
✅ Conformité avec les attentes du devoir
✅ Header et footer présents sur toutes les pages
✅ Respect de la charte graphique
✅ 3 réalisations minimum
✅ 6 articles de blog
✅ Formulaire de contact + Google Maps
✅ Application React GitHub API
✅ SEO avec React Helmet
✅ Site hébergé
✅ Code structuré en composants
✅ README complet
🌍 Version en ligne
👉 https://mhajar-salma.github.io/portfolio-salma-react/
