import Header from "../components/header";
import styles from "./service.module.css";
import Button from "../estilos/BtnModal";
import Footer from "../components/footer";

function Service() {
  const services = [
    {
      icon: "bi-code-slash",
      title: "Desenvolvimento Web",
      description: "Soluções modernas e responsivas para sua presença online com as melhores tecnologias do mercado.",
      features: ["React/Next.js", "Design Responsivo", "SEO Otimizado", "Performance"],
      gradient: "var(--background)",
      modal: "#modalServiceWeb"
    },
    {
      icon: "bi-phone",
      title: "Aplicações Mobile",
      description: "Apps nativos e híbridos para iOS e Android com experiência de usuário excepcional.",
      features: ["iOS & Android", "UI/UX Design", "Integração API", "Manutenção"],
      gradient: "var(--background)",
      modal: "#modalServiceMobile"
    },
  ];

  return (
    <div className={styles.servicePage}> 
      <Header />
      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className={styles.sectionTitle}>
                Nossos <span className={styles.titleHighlight}>Serviços</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Combinamos tecnologia de ponta com metodologias ágeis para entregar 
                soluções escaláveis e de alto desempenho.
              </p>
            </div>
          </div>
          
          <div className="row g-4 justify-content-center">
            {services.map((service, index) => (
              <div key={index} className="col-lg-5 col-md-6">
                <div className={`card ${styles.serviceCard} h-100`}>
                  <div 
                    className={styles.cardHeader}
                    style={{ background: service.gradient }}
                  >
                    <div className={styles.iconContainer}>
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <h5 className={`card-title fw-bold ${styles.cardTitle}`}>
                      {service.title}
                    </h5>
                    <p className={`card-text ${styles.cardDescription}`}>
                      {service.description}
                    </p>
                    
                    <div className={styles.featuresSection}>
                      <h6 className={styles.featuresTitle}>Principais Benefícios:</h6>
                      <div className={styles.featuresList}>
                        {service.features.map((feature, idx) => (
                          <div key={idx} className={styles.featureItem}>
                            <i className="bi bi-check-circle-fill text-success"></i>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.cardFooter}>
                      {/* Botão com modal específico para cada serviço */}
                      <Button 
                        value="Solicitar Serviço" 
                        modal={service.modal} 
                        icon="bi-arrow-right" 
                        className={styles.register} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className={styles.processSection}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className={styles.sectionTitle}>Nosso Processo</h2>
              <p className={styles.sectionSubtitle}>
                Metodologia comprovada para garantir excelência em cada projeto
              </p>
            </div>
          </div>
          <div className="row g-4">
            {[
              { icon: "bi-search", title: "Análise", desc: "Compreensão detalhada das necessidades" },
              { icon: "bi-pencil", title: "Planejamento", desc: "Estratégia e escopo definidos" },
              { icon: "bi-code", title: "Desenvolvimento", desc: "Implementação com qualidade" },
              { icon: "bi-check-circle", title: "Entrega", desc: "Deploy e suporte contínuo" }
            ].map((step, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className={styles.processStep}>
                  <div className={styles.stepNumber}>0{index + 1}</div>
                  <div className={styles.stepIcon}>
                    <i className={`bi ${step.icon}`}></i>
                  </div>
                  <h6 className={styles.stepTitle}>{step.title}</h6>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default Service;