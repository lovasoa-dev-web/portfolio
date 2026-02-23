import React, { useState, useEffect } from 'react';
import styles from './BackToTop.module.css';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Afficher le bouton quand l'utilisateur scroll
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroller vers le haut smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className={styles.backToTop} onClick={scrollToTop}>
          <i className='bx bx-up-arrow-alt'></i>
        </button>
      )}
    </>
  );
}

export default BackToTop;