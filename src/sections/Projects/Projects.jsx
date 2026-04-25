import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import restaurant from '../../assets/delice.png';
import freeFire from '../../assets/free-fire.png';

function Projects() {
  const projects = [
    {
      src: viberr,
      linkGithub: "https://github.com/Ade-mir/company-landing-page-2",
      link: "https://viberr.netlify.app/",
      h4: "Viberr",
      p: "Music Streaming App Music Streaming App Music Streaming App"
    },
    {
      src: freshBurger,
      linkGithub: "https://github.com/Ade-mir/company-landing-page-2",
      link: "https://freshburger.netlify.app/",
      h4: "Fresh Burger",
      p: "Hamburger Restaurant"
    },
    {
      src: freeFire,
      linkGithub: "https://github.com/lovasoa-dev-web/Free-fire",
      link: "https://free-fire-website.netlify.app/",
      h4: "Free Fire",
      p: "Free Fire Game Website"
    },
    {
      src: restaurant,
      // linkGithub: "https://github.com/lovasoa-dev-web/Free-fire",
      link: "https://restaurantmodel.sc3xksm4783.universe.wf/#home",
      h4: "Restaurant",
      p: "Restaurant Website"
    }
  ];

  return (
    <section id="projects" className={styles.portfolio}>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles['portfolio-container']}>
        {projects.map((project, index) => (
          <div key={index} className={styles['portfolio-box']}>
            <img src={project.src} alt={project.h4} />
            <div className={styles['portfolio-layer']}>
              <h4>{project.h4}</h4>
              <p>{project.p}</p>
              <div className={styles['portfolio-links']}>
                {project.linkGithub && (
                  <a href={project.linkGithub} target="_blank" rel="noopener noreferrer">
                    <i className='bx bxl-github' ></i>
                    <span className={styles.tooltip}>Code Source</span>
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <i className='bx bx-link-external' ></i>
                    <span className={styles.tooltip}>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
