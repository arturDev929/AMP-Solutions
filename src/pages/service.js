import Header from "../components/header";

function Service() {
  return (
    <div>
        <Header />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-5 fw-bold text-dark mb-4">
                Nossos Serviços
              </h1>
              <p className="fs-5 text-muted">
                Descubra nossas soluções inovadoras e projetos tecnológicos
              </p>
            </div>
          </div>
          
          {/* Cards de serviços */}
          <div className="row mt-5">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-code-slash text-primary" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h5 className="card-title fw-bold">Desenvolvimento Web</h5>
                  <p className="card-text text-muted">Soluções modernas e responsivas para sua presença online.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-phone text-primary" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h5 className="card-title fw-bold">Aplicações Mobile</h5>
                  <p className="card-text text-muted">Apps nativos e híbridos para iOS e Android.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-graph-up text-primary" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h5 className="card-title fw-bold">Consultoria Tech</h5>
                  <p className="card-text text-muted">Orientação especializada para sua transformação digital.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
