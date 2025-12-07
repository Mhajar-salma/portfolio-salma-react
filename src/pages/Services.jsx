import { Helmet } from "react-helmet-async";

function Services() {
  return (
    <main>
      <Helmet>
        <title>Services - Salma M&apos;hajar</title>
        <meta
          name="description"
          content="Découvrez les services proposés par Salma M'hajar, développeuse web."
        />
      </Helmet>

      <section className="services-section bg-white">
        <div className="container">
          <h1 className="text-center mb-4">MON OFFRE DE SERVICES</h1>
          <p className="text-center mb-5">
            Voici les prestations sur lesquelles je peux intervenir.
          </p>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="service-box p-4 text-center shadow-sm">
                <i className="fa-solid fa-palette service-icon mb-3" style={{ fontSize: 40 }} />
                <h3 className="h5 mb-3">UX DESIGN</h3>
                <p>
                  L’UX Design consiste à créer une expérience de navigation fluide, intuitive et agréable pour
                  l&apos;utilisateur.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-box p-4 text-center shadow-sm">
                <i className="fa-solid fa-code service-icon mb-3" style={{ fontSize: 40 }} />
                <h3 className="h5 mb-3">DÉVELOPPEMENT WEB</h3>
                <p>
                  Création de sites modernes et responsives avec HTML, CSS, JavaScript et React.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-box p-4 text-center shadow-sm">
                <i className="fa-solid fa-magnifying-glass service-icon mb-3" style={{ fontSize: 40 }} />
                <h3 className="h5 mb-3">RÉFÉRENCEMENT SEO</h3>
                <p>
                  Optimisation pour améliorer la visibilité et la position du site dans les moteurs de recherche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
