import Header from '../components/header';
import styles from './home.module.css';
import styles2 from '../components/header.module.css';
import { useState, useEffect } from 'react';

function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calcular a direção do olhar do robô baseado na posição do cursor
  const calculateEyeDirection = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const deltaX = cursorPosition.x - centerX;
    const deltaY = cursorPosition.y - centerY;
    
    // Limitar o movimento dos olhos para não sair muito da área do robô
    const maxMovement = 8;
    const eyeX = (deltaX / centerX) * maxMovement;
    const eyeY = (deltaY / centerY) * maxMovement;
    
    return { x: eyeX, y: eyeY };
  };

  const eyeMovement = calculateEyeDirection();

  return (
    <div className="bg-light" style={{ overflow: 'hidden', height: '100vh' }}>
      <Header />
      <section className={`h-100 d-flex align-items-center justify-content-center position-relative ${styles.heroSection}`}>
        
        {/* Robô Central com Olhos que Seguem o Cursor */}
        <div className={styles.robotContainer}>
          {/* Cabeça do Robô */}
          <div className={styles.robotHead}>
            {/* Olhos */}
            <div className={styles.eyesContainer}>
              <div 
                className={styles.eye}
                style={{
                  transform: `translate(${eyeMovement.x}px, ${eyeMovement.y}px)`
                }}
              >
                <div className={styles.pupil}></div>
              </div>
              <div 
                className={styles.eye}
                style={{
                  transform: `translate(${eyeMovement.x}px, ${eyeMovement.y}px)`
                }}
              >
                <div className={styles.pupil}></div>
              </div>
            </div>
            
            {/* Boca/Boca do Robô */}
            <div className={styles.mouth}></div>
            
            {/* Antenas */}
            <div className={styles.antennaLeft}></div>
            <div className={styles.antennaRight}></div>
          </div>
          
          {/* Corpo do Robô */}
          <div className={styles.robotBody}>
            <div className={styles.chestPanel}>
              <div className={styles.panelLight}></div>
              <div className={styles.panelLight}></div>
              <div className={styles.panelLight}></div>
            </div>
          </div>
        </div>

        {/* Efeitos de fundo tecnológico */}
        <div className={styles.techParticles}></div>
        <div className={styles.circuitGrid}></div>
        <div className={styles.quantumParticles}></div>
        <div className={styles.glowEffect}></div>
        
        <div className="container">
          <div className="row justify-content-center">
            <div className={`col-lg-8 col-md-10 text-center ${styles.heroContent}`}>
              <h1 className={`display-3 fw-bold mb-4 ${styles.heroTitle}`}>
                Bem-vindo à AMP Solutions
              </h1>
              <p className={`fs-4 mb-4 ${styles.heroSubtitle}`}>
                Conectando mundos através da inovação tecnológica
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <a href='service' className={`btn ${styles.btn}`} style={{ position: 'relative', zIndex: 30 }}>
                  Solicitar Serviços
                </a>
                <a href='projects' className={`btn ${styles2.login}`} style={{ position: 'relative', zIndex: 30 }}>
                  Ver Projetos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;