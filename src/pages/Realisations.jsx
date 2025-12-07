import { Helmet } from "react-helmet-async";
import freshFood from "../assets/img/projets/fresh-food.jpg";
import restaurantAkira from "../assets/img/projets/restaurant-akira.jpg";
import espaceBienEtre from "../assets/img/projets/espace-bien-etre.jpg";

function Realisations() {
  return (
    <main>
      <Helmet>
        <title>Réalisations - Salma M&apos;hajar</title>
        <meta
          name="description"
          content="Découvrez le portfolio de Salma M'hajar, développeuse web."
        />
      </Helmet>

      <section className="bg-white portfolio-section">
        <div className="container">
          <h1 className="text-center mb-3">PORTFOLIO</h1>
          <p className="text-center mb-5">
            Voici quelques-unes de mes réalisations.
          </p>

          <div className="row g-4">
            {/* PROJET 1 */}
            <div className="col-md-4" id="projet1">
              <div className="card portfolio-card h-100 shadow-sm">
                <img src={freshFood} className="card-img-top" alt="Site Fresh Food" />
                <div className="card-body text-center">
                  <h2 className="card-title h5 mb-2">Fresh food</h2>
                  <p className="card-text">
                    Réalisation d’un site avec commande en ligne pour un service de repas healthy.
                  </p>
                  <button className="btn btn-outline-primary">Voir</button>
                </div>
                <div className="card-footer text-center small text-muted">
                  Site réalisé avec PHP et MySQL
                </div>
              </div>
            </div>

            {/* PROJET 2 */}
            <div className="col-md-4" id="projet2">
              <div className="card portfolio-card h-100 shadow-sm">
                <img src={restaurantAkira} className="card-img-top" alt="Restaurant Akira" />
                <div className="card-body text-center">
                  <h2 className="card-title h5 mb-2">Restaurant Akira</h2>
                  <p className="card-text">
                    Création d’un site vitrine pour un restaurant japonais moderne.
                  </p>
                  <button className="btn btn-outline-primary">Voir</button>
                </div>
                <div className="card-footer text-center small text-muted">
                  Site réalisé avec WordPress
                </div>
              </div>
            </div>

            {/* PROJET 3 */}
            <div className="col-md-4" id="projet3">
              <div className="card portfolio-card h-100 shadow-sm">
                <img src={espaceBienEtre} className="card-img-top" alt="Espace Bien-être" />
                <div className="card-body text-center">
                  <h2 className="card-title h5 mb-2">Espace bien-être</h2>
                  <p className="card-text">
                    Site vitrine pour un praticien de bien-être : prise de rendez-vous et présentation des soins.
                  </p>
                  <button className="btn btn-outline-primary">Voir</button>
                </div>
                <div className="card-footer text-center small text-muted">
                  Site réalisé en HTML/CSS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Realisations;
