import { Helmet } from "react-helmet-async";

function MentionsLegales() {
  return (
    <main>
      <Helmet>
        <title>Mentions légales - Salma M&apos;hajar</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="bg-white py-5">
        <div className="container">
          <h1 className="text-center mb-4">Mentions légales</h1>

          <div className="accordion" id="mentionsAccordion">
            {/* ÉDITEUR DU SITE */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  L&apos;éditeur du site
                </button>
              </h2>

              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#mentionsAccordion"
              >
                <div className="accordion-body">
                  <p>
                    <strong>Nom :</strong> Salma M&apos;hajar
                  </p>
                  <p>
                    <strong>Adresse :</strong> 40 Rue Laure Diebold, 69009 Lyon
                  </p>
                  <p>
                    <strong>Email :</strong> contact@salma-dev.com
                  </p>
                  <p>
                    <strong>Téléphone :</strong> 06 20 30 40 50
                  </p>
                </div>
              </div>
            </div>

            {/* HÉBERGEUR */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  L&apos;hébergeur du site
                </button>
              </h2>

              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#mentionsAccordion"
              >
                <div className="accordion-body">
                  <p>
                    <strong>Nom :</strong> Github
                  </p>
                  <p>
                    <strong>Site web :</strong>{" "}
                    <a href="https://mhajar-salma.github.io/portfolio-salma-mhajar/" target="_blank" rel="noreferrer">
                      https://mhajar-salma.github.io/portfolio-salma-mhajar/
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* CRÉDITS */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  Crédits
                </button>
              </h2>

              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#mentionsAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Les images utilisées sur ce site proviennent de la banque d’images
                    libre de droits{" "}
                    <a href="https://pixabay.com/" target="_blank" rel="noreferrer">
                      Pixabay
                    </a>
                    .
                  </p>
                  <p>Développement &amp; design : Salma M&apos;hajar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MentionsLegales;
