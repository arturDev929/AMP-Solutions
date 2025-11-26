import Header from "../components/header";
import home from "../img/home.png";
import service from "../img/service.png";
import arturimagem from "../img/arturimagem.png";
import styles from "../pages/projects.module.css";
import style from "../pages/service.module.css";
import Footer from "../components/footer";

function Projects() {
  return (
    <div>
      <Header />
      
      <div className={`container mt-5 ${styles.container}`}>
        {/* Cabeçalho */}
        <div className="row mb-4">
          <div className="col-12 text-center mb-5">
            <h2 className={style.sectionTitle}>
              Nossos <span className={style.titleHighlight}>Projetos</span>
            </h2>
            <p className={style.sectionSubtitle}>
              Confira alguns os nossos projectos desenvolvidos, demonstrando nossa
              expertise em diversas áreas e tecnologias.
            </p>
          </div>
        </div>

        {/* Grid de Projetos */}
        <div className="row">
          {/* Projeto 1 */}
          <div className={`col-md-6 col-lg-4 mb-4`}>
            <div className={`card h-100 shadow-sm ${styles.card}`}>
              <img 
                src={home} 
                className="card-img-top" 
                alt="Projeto 1"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className={`card-title ${styles.text}`}>Nome do Projeto 1</h5>
                <p className="card-text flex-grow-1">Descrição breve do projeto e suas funcionalidades principais.</p>
                <div className="mb-2">
                  <small className="text-muted">
                    <strong>Publicado em:</strong> 15/01/2024
                  </small>
                </div>
                <a href="projects" className={`btn btn-primary btn-sm w-100 ${style.register}`}>Ver Projeto</a>
              </div>
            </div>
          </div>

          {/* Projeto 2 */}
          <div className={`col-md-6 col-lg-4 mb-4`}>
            <div className={`card h-100 shadow-sm ${styles.card}`}>
              <img 
                src={service} 
                className="card-img-top" 
                alt="Projeto 1"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className={`card-title ${styles.text}`}>Nome do Projeto 2</h5>
                <p className="card-text flex-grow-1">Descrição breve do projeto e suas funcionalidades principais.</p>
                <div className="mb-2">
                  <small className="text-muted">
                    <strong>Publicado em:</strong> 15/01/2024
                  </small>
                </div>
                <a href="projects" className={`btn btn-primary btn-sm w-100 ${style.register}`}>Ver Projeto</a>
              </div>
            </div>
          </div>

          {/* Projeto 3 */}
          <div className={`col-md-6 col-lg-4 mb-4`}>
            <div className={`card h-100 shadow-sm ${styles.card}`}>
              <img 
                src={arturimagem} 
                className="card-img-top" 
                alt="Projeto 1"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className={`card-title ${styles.text}`}>Nome do Projeto 3</h5>
                <p className="card-text flex-grow-1">Descrição breve do projeto e suas funcionalidades principais.</p>
                <div className="mb-2">
                  <small className="text-muted">
                    <strong>Publicado em:</strong> 15/01/2024
                  </small>
                </div>
                <a href="projects" className={`btn btn-primary btn-sm w-100 ${style.register}`}>Ver Projeto</a>
              </div>
            </div>
          </div>

          {/* Projeto 4 */}
          <div className={`col-md-6 col-lg-4 mb-4`}>
            <div className={`card h-100 shadow-sm ${styles.card}`}>
              <img 
                src={service} 
                className="card-img-top" 
                alt="Projeto 1"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className={`card-title ${styles.text}`}>Nome do Projeto 4</h5>
                <p className="card-text flex-grow-1">Descrição breve do projeto e suas funcionalidades principais.</p>
                <div className="mb-2">
                  <small className="text-muted">
                    <strong>Publicado em:</strong> 15/01/2024
                  </small>
                </div>
                <a href="projects" className={`btn btn-primary btn-sm w-100 ${style.register}`}>Ver Projeto</a>
              </div>
            </div>
          </div>

          {/* Projeto 5 */}
          <div className={`col-md-6 col-lg-4 mb-4`}>
            <div className={`card h-100 shadow-sm ${styles.card}`}>
              <img 
                src={arturimagem} 
                className="card-img-top" 
                alt="Projeto 1"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className={`card-title ${styles.text}`}>Nome do Projeto 5</h5>
                <p className="card-text flex-grow-1">Descrição breve do projeto e suas funcionalidades principais.</p>
                <div className="mb-2">
                  <small className="text-muted">
                    <strong>Publicado em:</strong> 15/01/2024
                  </small>
                </div>
                <a href="projects" className={`btn btn-primary btn-sm w-100 ${style.register}`}>Ver Projeto</a>
              </div>
            </div>
          </div>

          {/* Projeto 6 */}
          <div className={`col-md-6 col-lg-4 mb-4`}>
            <div className={`card h-100 shadow-sm ${styles.card}`}>
              <img 
                src={home} 
                className="card-img-top" 
                alt="Projeto 1"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className={`card-title ${styles.text}`}>Nome do Projeto 6</h5>
                <p className="card-text flex-grow-1">Descrição breve do projeto e suas funcionalidades principais.</p>
                <div className="mb-2">
                  <small className="text-muted">
                    <strong>Publicado em:</strong> 15/01/2024
                  </small>
                </div>
                <a href="projects" className={`btn btn-primary btn-sm w-100 ${style.register}`}>Ver Projeto</a>
              </div>
            </div>
          </div>

          {/* Projeto 7 */}
          <div className={`col-md-6 col-lg-4 mb-4`}>
            <div className={`card h-100 shadow-sm ${styles.card}`}>
              <img 
                src={service} 
                className="card-img-top" 
                alt="Projeto 1"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className={`card-title ${styles.text}`}>Nome do Projeto 7</h5>
                <p className="card-text flex-grow-1">Descrição breve do projeto e suas funcionalidades principais.</p>
                <div className="mb-2">
                  <small className="text-muted">
                    <strong>Publicado em:</strong> 15/01/2024
                  </small>
                </div>
                <a href="projects" className={`btn btn-primary btn-sm w-100 ${style.register}`}>Ver Projeto</a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Projects;