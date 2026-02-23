import React, { useState } from 'react';
import styles from './Header.module.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Fermer le menu mobile après clic
  };

  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
        Portfolio
      </a>

      <i className={`bx bx-menu ${styles.menuIcon}`} id="menu-icon" onClick={toggleMenu}></i>

      <nav className={`${styles.navbar} ${menuOpen ? styles.active : ''}`}>
        <a href="#hero" className={styles.active} onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Accueil</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>A propos</a>
        <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Compétences</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Portfolio</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;