import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={`mt-5 ${styles.footer}`}>
      <div className={styles.footerContent}>
        
        {/* Informações da empresa */}
        <div className={styles.brandSection}>
          <h3 className={styles.brandName}>Meu Site</h3>
          <p className={styles.brandDescription}>
            Criando soluções digitais inovadoras para o seu negócio.
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <svg className={styles.icon} viewBox="0 0 24 24">
                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <a href="mailto:arturmakumbapaulo@gmail.com">arturmakumbapaulo@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Links rápidos */}
        <div className={styles.linksSection}>
          <h4 className={styles.sectionTitle}>Links Rápidos</h4>
          <nav className={styles.footerNav}>
            <a href="/">
              {/* <svg className={styles.navIcon} viewBox="0 0 24 24">
                <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/>
              </svg> */}
              Home
            </a>
            <a href="/service">
              {/* <svg className={styles.navIcon} viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg> */}
              Serviços
            </a>
            <a href="/projects">
              {/* <svg className={styles.navIcon} viewBox="0 0 24 24">
                <path fill="currentColor" d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"/>
              </svg> */}
              Projetos
            </a>
            <a href="/about">
              {/* <svg className={styles.navIcon} viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg> */}
              Sobre
            </a>
          </nav>
        </div>

        {/* Redes sociais */}
        <div className={styles.socialSection}>
          <h4 className={styles.sectionTitle}>Conecte-se</h4>
          <div className={styles.socialLinks}>
            <a 
              href="https://github.com/arturDev929" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg className={styles.socialIcon} viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
              GitHub
            </a>
            <a 
              href="https://wa.me/244929277043" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg className={styles.socialIcon} viewBox="0 0 24 24">
                <path fill="currentColor" d="M16.75 13.96c.25.13.41.2.46.3c.06.11.04.61-.21 1.18c-.2.56-1.24 1.1-1.7 1.12c-.46.02-.47.36-2.96-.73c-2.49-1.09-3.99-3.75-4.11-3.92c-.12-.17-.96-1.38-.92-2.61c.05-1.22.69-1.8.95-2.04c.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41l-.39.42c-.12.12-.26.25-.12.5c.12.26.62 1.09 1.32 1.78c.91.88 1.71 1.17 1.95 1.3c.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>&copy; 2025 AMP Solutions. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;