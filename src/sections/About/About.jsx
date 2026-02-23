import styles from './AboutStyles.module.css';
import aboutImg from '../../assets/william.png';
import { useTheme } from '../../common/ThemeContext';

function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className={styles.container}>
      <div className={styles.aboutImg}>
        <img src={aboutImg} alt="Photo de William" />
      </div>
      <div className={styles.aboutContent}>
        <h1 className={styles.heading}>à propos</h1>
        <h2>Frontend Developer!</h2>
        <p>
          Je suis Lovasoa William RANDRIANANTENAINA, développeur web passionné spécialisé en React et JavaScript.
          J{"'"}aime créer des expériences utilisateur modernes et intuitives. Avec une solide base en HTML, CSS et JavaScript,
          je développe des applications web réactives et performantes.
        </p>
        <a href="#contact" className={styles.btn}>En savoir plus</a>
      </div>
    </section>
  );
}

export default About;