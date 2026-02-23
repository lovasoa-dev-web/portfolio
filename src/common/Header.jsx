import React, { useState } from 'react';
import styles from './Header.module.css';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import { useTheme } from './ThemeContext';
import logoLight from '../assets/logo-noir.png';
import logoDark from '../assets/logo-blanc.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;

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
      <a href="#" className={styles.logo} onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
        <img src={theme === 'light' ? logoLight : logoDark} alt="Logo" className={styles.logoImg} />
      </a>

      <nav className={`${styles.navbar} ${menuOpen ? styles.active : ''}`}>
        <a href="#hero" className={styles.active} onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Accueil</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>À propos</a>
        <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Compétences</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Portfolio</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        <img
          className={styles.colorModeNav}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </nav>

      <img
        className={styles.colorMode}
        src={themeIcon}
        alt="Color mode icon"
        onClick={toggleTheme}
      />

      <i className={`bx bx-menu ${styles.menuIcon}`} onClick={toggleMenu}></i>
    </header>
  );
}

export default Header;