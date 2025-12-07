import { Helmet } from "react-helmet-async";
import article1 from "../assets/img/blog/article1.jpg";
import article2 from "../assets/img/blog/article2.jpg";
import article3 from "../assets/img/blog/article3.jpg";
import article4 from "../assets/img/blog/article4.jpg";
import article5 from "../assets/img/blog/article5.jpg";
import article6 from "../assets/img/blog/article6.jpg";

function Blog() {
  return (
    <main>
      <Helmet>
        <title>Blog - Salma M&apos;hajar</title>
        <meta
          name="description"
          content="Découvrez les articles de blog de Salma M'hajar sur le développement web."
        />
      </Helmet>

      <section className="blog-section bg-white">
        <div className="container">
          <h1 className="text-center mb-3">BLOG</h1>
          <p className="text-center mb-5">
            Retrouvez ici quelques articles sur le développement web.
          </p>

          <div className="row g-4">
            {/* ARTICLE 1 */}
            <div className="col-md-4" id="article1">
              <div className="card blog-card h-100 shadow-sm">
                <img src={article1} className="card-img-top" alt="Article : coder son site en HTML et CSS" />
                <div className="card-body">
                  <h2 className="h5">Coder son site en HTML/CSS</h2>
                  <p>
                    Introduction aux bases du développement web : structure, mise en page et bonnes pratiques.
                  </p>
                  <button className="btn btn-primary btn-sm">Lire la suite</button>
                </div>
                <div className="card-footer text-muted small">Publié le 22 août 2022</div>
              </div>
            </div>

            {/* ARTICLE 2 */}
            <div className="col-md-4" id="article2">
              <div className="card blog-card h-100 shadow-sm">
                <img src={article2} className="card-img-top" alt="Article : vendre ses produits sur internet" />
                <div className="card-body">
                  <h2 className="h5">Vendre ses produits sur le web</h2>
                  <p>
                    Les étapes essentielles pour mettre en place un système de vente efficace sur internet.
                  </p>
                  <button className="btn btn-primary btn-sm">Lire la suite</button>
                </div>
                <div className="card-footer text-muted small">Publié le 20 août 2022</div>
              </div>
            </div>

            {/* ARTICLE 3 */}
            <div className="col-md-4" id="article3">
              <div className="card blog-card h-100 shadow-sm">
                <img src={article3} className="card-img-top" alt="SEO Google" />
                <div className="card-body">
                  <h2 className="h5">Se positionner sur Google</h2>
                  <p>Découvrez les bonnes pratiques pour améliorer le référencement naturel de votre site.</p>
                  <button className="btn btn-primary btn-sm">Lire la suite</button>
                </div>
                <div className="card-footer text-muted small">Publié le 1 août 2022</div>
              </div>
            </div>

            {/* ARTICLE 4 */}
            <div className="col-md-4">
              <div className="card blog-card h-100 shadow-sm">
                <img src={article4} className="card-img-top" alt="Coder un site responsive avec Bootstrap" />
                <div className="card-body">
                  <h2 className="h5">Coder en responsive design</h2>
                  <p>
                    Comment adapter un site à tous les écrans grâce à Bootstrap et CSS moderne.
                  </p>
                  <button className="btn btn-primary btn-sm">Lire la suite</button>
                </div>
                <div className="card-footer text-muted small">Publié le 31 juillet 2022</div>
              </div>
            </div>

            {/* ARTICLE 5 */}
            <div className="col-md-4">
              <div className="card blog-card h-100 shadow-sm">
                <img src={article5} className="card-img-top" alt="Techniques essentielles de référencement SEO" />
                <div className="card-body">
                  <h2 className="h5">Techniques de référencement</h2>
                  <p>
                    Analyse des méthodes essentielles pour optimiser votre présence en ligne.
                  </p>
                  <button className="btn btn-primary btn-sm">Lire la suite</button>
                </div>
                <div className="card-footer text-muted small">Publié le 30 juillet 2022</div>
              </div>
            </div>

            {/* ARTICLE 6 */}
            <div className="col-md-4">
              <div className="card blog-card h-100 shadow-sm">
                <img src={article6} className="card-img-top" alt="Apprendre à coder rapidement et efficacement" />
                <div className="card-body">
                  <h2 className="h5">Apprendre à coder</h2>
                  <p>
                    Les ressources incontournables pour progresser dans le développement web.
                  </p>
                  <button className="btn btn-primary btn-sm">Lire la suite</button>
                </div>
                <div className="card-footer text-muted small">Publié le 12 juillet 2022</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
