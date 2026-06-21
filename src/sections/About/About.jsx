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
        <h2>Développeur Web Full Stack Junior</h2>
        <p>
          je développe des applications web réactives et performantes.Développeur web motivé et passionné par les nouvelles technologies, je conçois des solutions web performantes, intuitives et adaptées aux besoins des utilisateurs. À travers la réalisation de projets concrets en PHP, JavaScript, React, Laravel, et WordPress, je continue à renforcer mes compétences techniques, à relever de nouveaux défis et à approfondir mes connaissances afin de créer des applications modernes, fiables et offrant une excellente expérience utilisateur.

        </p>
        <Button href="#contact">En savoir plus</Button>
      </div>
    </section>
  );
}

export default About;