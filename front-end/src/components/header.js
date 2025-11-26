import { useState, useEffect } from 'react';
import Button from '../estilos/BtnModal';
import Modal from '../estilos/Modal';
import styles from './header.module.css';
import favicon from "../img/favicon.png";

function Header() {
  const [activeLink, setActiveLink] = useState('inicio');

  // Sincroniza o link ativo com a URL atual
  useEffect(() => {
    const currentPath = window.location.pathname;
    
    if (currentPath === '/') setActiveLink('inicio');
    else if (currentPath === '/service' || currentPath.includes('service')) setActiveLink('servicos');
    else if (currentPath === '/projects' || currentPath.includes('projects')) setActiveLink('projetos');
    else if (currentPath === '/about' || currentPath.includes('about')) setActiveLink('sobre');
  }, []);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <>
      {/* Navbar Principal */}
      <nav className={`navbar navbar-expand-lg navbar-light border-bottom shadow-sm py-2 ${styles.navbar}`}>
        <div className={styles.techGrid}></div>
        
        <div className="container">
          {/* Logo AMP */}
          <a className="navbar-brand d-flex align-items-center" href="/" onClick={() => handleLinkClick('inicio')}>
            <img src={favicon} className={styles.logo} alt="AMP Solutions Logo" />
            <span className={`fw-bold fs-4 ${styles.text}`}>Solutions</span>
          </a>

          {/* Botão Entrar Mobile (só aparece no mobile) */}
          <div className={`d-lg-none ${styles.mobileLogin}`}>
            <Button value="Entrar" modal="#ModalLogin" className={styles.login} />
          </div>

          {/* Menu Desktop */}
          <div className={`collapse navbar-collapse ${styles.navbarNav}`} id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-2">
                <a className={`nav-link fw-semibold ${styles.nav_link} ${activeLink === 'inicio' ? styles.active : ''}`} href="/" onClick={() => handleLinkClick('inicio')}>Início</a>
              </li>
              <li className="nav-item mx-2">
                <a className={`nav-link fw-semibold ${styles.nav_link} ${activeLink === 'servicos' ? styles.active : ''}`} href="service" onClick={() => handleLinkClick('servicos')}>Serviços</a>
              </li>
              <li className="nav-item mx-2">
                <a className={`nav-link fw-semibold ${styles.nav_link} ${activeLink === 'projetos' ? styles.active : ''}`} href="projects" onClick={() => handleLinkClick('projetos')}>Projetos</a>
              </li>
              <li className="nav-item mx-2">
                <a className={`nav-link fw-semibold ${styles.nav_link} ${activeLink === 'sobre' ? styles.active : ''}`} href="about" onClick={() => handleLinkClick('sobre')}>Sobre</a>
              </li>
              <li className="nav-item mx-2">
                <a className={`nav-link fw-semibold ${styles.nav_link} ${activeLink === 'admHome' ? styles.active : ''}`} href="admHome" onClick={() => handleLinkClick('admHome')}>Admin</a>
              </li>
            </ul>

            {/* Botões de Ação Desktop */}
            <div className="d-none d-lg-flex align-items-center">
              <Button value="Entrar" modal="#ModalLogin" className={styles.login} />
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar Inferior Mobile */}
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
              className={`${styles.mobileNavLink} ${activeLink === 'admHome' ? styles.active : ''}`}
              href="admHome" 
              onClick={() => handleLinkClick('admHome')}
            >
              <div className={`${styles.mobileNavIcon} ${styles.iconAbout}`}></div>
              <span className={styles.mobileNavLabel}>ADM</span>
            </a>
          </li>
        </ul>
      </nav>
      <Modal />
    </>
  );
}

export default Header;