import { Helmet } from "react-helmet-async";
import photoSalma from "../assets/img/photo-salma.jpg";
import GithubProfile from "../components/GithubProfile.jsx"; // si tu ajoutes le composant React API GitHub

function Home() {
  return (
    <main>
      <Helmet>
        <title>Salma M&apos;hajar - Développeuse web</title>
        <meta
          name="description"
          content="Portfolio et CV en ligne de Salma M'hajar, développeuse web."
        />
      </Helmet>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1 className="display-4 mb-3">
            Bonjour, je suis <strong>Salma M&apos;hajar</strong>
          </h1>
          <h2 className="h4 mb-4">
            Développeuse web front-end / full stack
          </h2>
          <a href="#a-propos" className="btn btn-primary btn-lg">
            En savoir plus
          </a>
        </div>
      </section>
      
      {/* A PROPOS */}
      <section id="a-propos" className="bg-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Texte */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="mb-3">À propos</h2>
              <p>
                Passionnée par le développement web et les nouvelles technologies,
                je termine actuellement ma formation de développeuse web au CEF.
                J&apos;aime créer des interfaces modernes, accessibles et responsives.
              </p>
              <p>
                Basée à Lyon, je suis à la recherche d&apos;une alternance dans une
                agence digitale ou une entreprise innovante pour mettre en pratique
                mes compétences en <strong>intégration front-end</strong> et{" "}
                <strong>développement JavaScript / React</strong>.
              </p>
              <p>
                J&apos;accorde une attention particulière à la{" "}
                <strong>qualité du code</strong>, à l&apos;
                <strong>expérience utilisateur</strong> et au respect des bonnes
                pratiques du web.
              </p>
              <p>
                J&apos;ai également développé une petite application en{" "}
                <strong>React.js</strong> qui consomme l’API GitHub pour afficher mon
                profil et mes statistiques en temps réel. Vous pouvez la consulter
                ici&nbsp;:
                <a
                  href="https://codesandbox.io/p/sandbox/w5q23h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-1"
                >
                  Voir l&apos;application React Profil GitHub
                </a>
                .
              </p>
            </div>

            {/* Photo + compétences */}
            <div className="col-lg-6">
              <div className="mb-4 text-center">
                <img
                  src={photoSalma}
                  alt="Photo de Salma M'hajar"
                  className="img-fluid rounded"
                />
              </div>

              <h3 className="h5 mb-3">Mes compétences</h3>

              <p className="mb-1">HTML5 90%</p>
              <div className="progress mb-3">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>

              <p className="mb-1">CSS3 / SCSS 85%</p>
              <div className="progress mb-3">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "85%" }}
                ></div>
              </div>

              <p className="mb-1">JavaScript 75%</p>
              <div className="progress mb-3">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                ></div>
              </div>

              <p className="mb-1">React 70%</p>
              <div className="progress mb-3">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "70%" }}
                ></div>
              </div>

              <p className="mb-1">Bootstrap 80%</p>
              <div className="progress mb-3">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Section Application React GitHub (optionnelle) */}
      
      <section className="bg-white">
        <div className="container">
          <h2 className="text-center mb-4">Application React – Profil GitHub</h2>
          <GithubProfile />
        </div>
      </section>
      
    </main>
  );
}

export default Home;
