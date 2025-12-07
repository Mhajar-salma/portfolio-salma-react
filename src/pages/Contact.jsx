import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <main>
      <Helmet>
        <title>Contact - Salma M&apos;hajar</title>
        <meta name="description" content="Contactez Salma M'hajar, développeuse web." />
      </Helmet>

      <section className="contact-section">
        <div className="overlay-blue"></div>

        <div className="container position-relative">
          <h1 className="text-center text-white mb-4">ME CONTACTER</h1>

          <div className="row g-5">
            {/* FORMULAIRE */}
            <div className="col-lg-6">
              <div className="bg-white p-4 rounded shadow">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nom *</label>
                    <input type="text" className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email *</label>
                    <input type="email" className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Téléphone *</label>
                    <input type="tel" className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Sujet *</label>
                    <input type="text" className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message *</label>
                    <textarea className="form-control" rows={5} required></textarea>
                  </div>

                  <button className="btn btn-primary w-100">Envoyer</button>
                </form>
              </div>
            </div>

            {/* COORDONNÉES + MAP */}
            <div className="col-lg-6 text-white">
              <h3>Mes coordonnées</h3>
              <p className="mb-1">
                <i className="fa-solid fa-location-dot me-2"></i>40 Rue Laure Diebold, 69009 Lyon
              </p>
              <p className="mb-1">
                <i className="fa-solid fa-phone me-2"></i>06 20 30 40 50
              </p>
              <p className="mb-4">
                <i className="fa-solid fa-envelope me-2"></i>contact@salma-dev.com
              </p>

              <div className="ratio ratio-16x9 shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.673381615614!2d4.8004974!3d45.7812749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb062dba9f2f%3A0x749082c59bfb0c36!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1708627090000!5m2!1sfr!2sfr"
                  width="600"
                  height="450"
                  loading="lazy"
                  allowFullScreen
                  title="Google Map Lyon"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
