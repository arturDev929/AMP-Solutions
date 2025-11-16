import { useState} from 'react';
import BtnModal from '../estilos/BtnModal';
import Modal from '../estilos/Modal';
import styles from './header.module.css';

function Header() {
  const [activeLink, setActiveLink] = useState('inicio');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <>
      {/* Navbar Principal (agora abaixo do conteúdo) */}
      <nav className={`navbar navbar-expand-lg navbar-light border-bottom shadow-sm py-2 ${styles.navbar}`}>
        <div className={styles.techGrid}></div>
        
        <div className="container">
          {/* Logo AMP */}
          <a className="navbar-brand d-flex align-items-center" href="/" onClick={() => handleLinkClick('inicio')}>
            <div className={`d-flex align-items-center justify-content-center me-2 ${styles.logo}`}>
              AMP
            </div>
            <span className={`fw-bold fs-4 ${styles.text}`}>Solutions</span>
          </a>

          {/* Menu Desktop (oculto no mobile) */}
          <div className={`collapse navbar-collapse ${styles.navbarNav}`} id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-2">
                <a className={`nav-link fw-semibold ${styles.nav_link}`} href="/" onClick={() => handleLinkClick('inicio')}>Início</a>
              </li>
              <li className="nav-item mx-2">
                <a className={`nav-link fw-semibold ${styles.nav_link}`} href="service" onClick={() => handleLinkClick('servicos')}>Serviços</a>
              </li>
              <li className="nav-item mx-2">
                <a className={`nav-link fw-semibold ${styles.nav_link}`} href="projects" onClick={() => handleLinkClick('projetos')}>Projetos</a>
              </li>
              <li className="nav-item mx-2">
                <a className={`nav-link fw-semibold ${styles.nav_link}`} href="about" onClick={() => handleLinkClick('sobre')}>Sobre</a>
              </li>
              <li className="nav-item mx-2">
                <a className={`nav-link fw-semibold ${styles.nav_link}`} href="#contact" onClick={() => handleLinkClick('contato')}>Contato</a>
              </li>
            </ul>

            {/* Botões de Ação Desktop */}
            <div className="d-flex align-items-center">
              <BtnModal />
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar Inferior Mobile (aparece automaticamente) */}
      <nav className={styles.mobileBottomNav}>
        <ul className={styles.mobileNavItems}>
          <li className={styles.mobileNavItem}>
            <a 
              className={`${styles.mobileNavLink} ${activeLink === 'inicio' ? styles.active : ''}`}
              href="/" 
              onClick={() => handleLinkClick('inicio')}
            >
              <div className={`${styles.mobileNavIcon} ${styles.iconHome}`}></div>
              <span className={styles.mobileNavLabel}>Início</span>
            </a>
          </li>
          <li className={styles.mobileNavItem}>
            <a 
              className={`${styles.mobileNavLink} ${activeLink === 'servicos' ? styles.active : ''}`}
              href="service" 
              onClick={() => handleLinkClick('servicos')}
            >
              <div className={`${styles.mobileNavIcon} ${styles.iconServices}`}></div>
              <span className={styles.mobileNavLabel}>Serviços</span>
            </a>
          </li>
          <li className={styles.mobileNavItem}>
            <a 
              className={`${styles.mobileNavLink} ${activeLink === 'projetos' ? styles.active : ''}`}
              href="projects" 
              onClick={() => handleLinkClick('projetos')}
            >
              <div className={`${styles.mobileNavIcon} ${styles.iconProjects}`}></div>
              <span className={styles.mobileNavLabel}>Projetos</span>
            </a>
          </li>
          <li className={styles.mobileNavItem}>
            <a 
              className={`${styles.mobileNavLink} ${activeLink === 'sobre' ? styles.active : ''}`}
              href="about" 
              onClick={() => handleLinkClick('sobre')}
            >
              <div className={`${styles.mobileNavIcon} ${styles.iconAbout}`}></div>
              <span className={styles.mobileNavLabel}>Sobre</span>
            </a>
          </li>
          <li className={styles.mobileNavItem}>
            <a 
              className={`${styles.mobileNavLink} ${activeLink === 'contato' ? styles.active : ''}`}
              href="#contact" 
              onClick={() => handleLinkClick('contato')}
            >
              <div className={`${styles.mobileNavIcon} ${styles.iconContact}`}></div>
              <span className={styles.mobileNavLabel}>Contato</span>
            </a>
          </li>
        </ul>
      </nav>

      <Modal />
    </>
  );
}

export default Header;