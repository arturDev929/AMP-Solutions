import Footer from "../components/footer";
import Header from "../components/header";
import imagem1 from "../img/imagem1.png";
import styles from "./about.module.css";
import style from "./service.module.css";

function Sobre() {
  return (
    <div>
      <Header />
      
      <div className={`container mt-5 ${styles.container}`}>
        {/* Cabeçalho */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className={style.sectionTitle}>
              Sobre <span className={style.titleHighlight}>Mim</span>
            </h2>
            <p className="lead">Conheça um pouco da minha trajetória e experiência</p>
          </div>
        </div>

        <div className="row">
          {/* Foto e Informações Pessoais */}
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <img 
                src={imagem1}
                alt="Artur" 
                className="img-fluid rounded-circle shadow mb-3"
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
              <h3 className={styles.title}>Artur Macumba Paulo</h3>
              <p className={`${styles.subtitle}`}>Desenvolvedor Full Stack</p>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className={`card-body ${styles.cardContainer}`}>
                <h4 className={`card-title mb-4 ${styles.title}`}>Minha Jornada</h4>
                
                <p className={`"card-text" ${styles.conteudo}`}>
                  Sou um Desenvolvedor Full-Stack apaixonado por tecnologia, com experiência na criação de aplicações web dinâmicas e responsivas. 
                  Tenho grande interesse em resolver problemas complexos e estou em constante aprendizado para aprimorar minhas habilidades.
                </p>

                <p className={`"card-text" ${styles.conteudo}`}>
                  Minha trajetória começou há alguns anos, e desde então venho 
                  me especializando em desenvolvimento web e mobile, sempre 
                  aprendendo novas tecnologias e metodologias.
                </p>

                <h5 className={`mt-4 ${styles.title}`}>Habilidades Técnicas</h5>
                <div className="row mt-3">
                  {/* Front-end */}
                  <div className="col-md-6">
                    <h6 className={`mb-3 ${styles.title}`}>Front-end</h6>
                    <ul className="list-unstyled">
                      <li>✅ JavaScript</li>
                      <li>✅ React.js</li>
                      <li>✅ HTML5 & CSS3</li>
                      <li>✅ Bootstrap</li>
                      <li>✅ Handlebars</li>
                    </ul>
                  </div>
                  
                  {/* Back-end */}
                  <div className="col-md-6">
                    <h6 className={`mb-3 ${styles.title}`}>Back-end</h6>
                    <ul className="list-unstyled">
                      <li>✅ Node.js</li>
                      <li>✅ PHP</li>
                      <li>✅ MySQL</li>
                      <li>✅ Git & GitHub</li>
                      {/* <li>✅ APIs REST</li> */}
                      {/* <li>✅ C</li> */}
                    </ul>
                  </div>
                </div>

                <h5 className={`mt-4 ${styles.title}`}>Experiência</h5>
                <div className="mt-3">
                  <div className="mb-3">
                    <h6 className="mb-1">Desenvolvedor Full Stack</h6>
                    <p className="text-muted mb-1">Empresa EPIA DIGITAL • 2024 - Presente</p>
                    <small>Desenvolvimento de aplicações web e mobile</small>
                  </div>
                  {/* <div className="mb-3">
                    <h6 className="mb-1">Desenvolvedor Front-end</h6>
                    <p className="text-muted mb-1">Empresa ABC • 2020 - 2022</p>
                    <small>Criação de interfaces responsivas e modernas</small>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contato */}
        {/* <div className="row mt-5">
          <div className="col-12">
            <div className="card bg-light">
              <div className="card-body text-center">
                <h5 className="card-title text-primary">Vamos conversar?</h5>
                <p className="card-text">
                  Estou sempre aberto a novas oportunidades e projetos interessantes.
                </p>
                <div className="mt-3">
                  <a href="mailto:arturpaulo929@email.com" className="btn btn-primary me-2">
                    📧 Enviar Email
                  </a>
                  <a href="https://linkedin.com/in/artur" className="btn btn-outline-primary me-2">
                    💼 LinkedIn
                  </a>
                  <a href="https://github.com/arturDev929" className="btn btn-outline-dark">
                    ⚡ GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  );
}

export default Sobre;