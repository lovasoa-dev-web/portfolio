import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';

function Projects() {
  const projects = [
    {
      src: viberr,
      link: "https://github.com/Ade-mir/company-landing-page-2",
      h4: "Viberr",
      p: "Music Streaming App"
    },
    {
      src: freshBurger,
      link: "https://github.com/Ade-mir/company-landing-page-2",
      h4: "Fresh Burger",
      p: "Hamburger Restaurant"
    },
    {
      src: hipsster,
      link: "https://github.com/Ade-mir/company-landing-page-2",
      h4: "Hipsster",
      p: "Glasses Shop"
    },
    {
      src: fitLift,
      link: "https://github.com/Ade-mir/company-landing-page-2",
      h4: "FitLift",
      p: "Fitness App"
    }
  ];

  return (
    <section id="projects" className={styles.portfolio}>
      <h1 className={styles.heading}>Project</h1>
      <div className={styles['portfolio-container']}>
        {projects.map((project, index) => (
          <div key={index} className={styles['portfolio-box']}>
            <img src={project.src} alt={project.h4} />
            <div className={styles['portfolio-layer']}>
              <h4>{project.h4}</h4>
              <p>{project.p}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <i class='bx bx-link-external' ></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
