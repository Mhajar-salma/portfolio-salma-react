import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark" aria-label="Navigation principale">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            SALMA M&apos;HAJAR
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Basculer la navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink end to="/" className="nav-link">
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/realisations" className="nav-link">
                  Réalisations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Me contacter
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/mentions-legales" className="nav-link">
                  Mentions légales
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
