import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer mt-5">
      <div className="container">
        <div className="row">
          {/* Colonne 1 : infos perso */}
          <div className="col-md-3 mb-4">
            <h5>Salma M&apos;hajar</h5>
            <p className="mb-1">40 Rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            <p className="mb-3">Téléphone : 06 20 30 40 50</p>
            <div className="d-flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a
                href="https://x.com/home"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <i className="fab fa-x-twitter fa-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 : liens utiles */}
          <div className="col-md-3 mb-4">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <a href="/#a-propos">À propos</a>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Me contacter</Link>
              </li>
              <li>
                <Link to="/mentions-legales">Mentions légales</Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : dernières réalisations */}
          <div className="col-md-3 mb-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/realisations#projet1">Fresh food</Link>
              </li>
              <li>
                <Link to="/realisations#projet2">Restaurant Akira</Link>
              </li>
              <li>
                <Link to="/realisations#projet3">Espace bien-être</Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : derniers articles */}
          <div className="col-md-3 mb-4">
            <h5>Mes derniers articles</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/blog#article1">Coder son site en HTML/CSS</Link>
              </li>
              <li>
                <Link to="/blog#article2">Vendre ses produits sur le web</Link>
              </li>
              <li>
                <Link to="/blog#article3">Se positionner sur Google</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">© Designed by Salma M&apos;hajar</div>
      </div>
    </footer>
  );
}

export default Footer;
