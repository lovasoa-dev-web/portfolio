import styles from './AboutStyles.module.css';
import aboutImg from '../../assets/will.png';
import Button from '../../common/Button.jsx';

function About() {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.aboutImg} data-aos="fade-up" data-aos-duration="800" >
        <img src={aboutImg} alt="Photo de William" />
      </div>
      <div className={styles.aboutContent} data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        <h1>à propos</h1>
        <h2>Frontend Developer!</h2>
        <p>
          Je suis Lovasoa William RANDRIANANTENAINA, développeur web passionné spécialisé en React et JavaScript.
          J{"'"}aime créer des expériences utilisateur modernes et intuitives. Avec une solide base en HTML, CSS et JavaScript,
          je développe des applications web réactives et performantes.
        </p>
        <Button href="#contact">En savoir plus</Button>
      </div>
    </section>
  );
}

export default About;