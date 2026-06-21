import { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import Button from '../../common/Button.jsx';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import restaurant from '../../assets/delice.png';
import freeFire from '../../assets/free-fire.png';
import gallery1 from '../../assets/ajoutReservation.png';
import gallery2 from '../../assets/recette.png';
import gallery3 from '../../assets/apropos.png';
import gallery4 from '../../assets/contact.png';
import gallery5 from '../../assets/galerie.png';
import gallery6 from '../../assets/portfolio6.jpg';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      src: restaurant,
      // linkGithub: '',
      link: 'https://restaurantmodel.sc3xksm4783.universe.wf/#home',
      h4: 'Restaurant',
      p: 'Projet de gestion de restaurant développé avec WordPress',
      description: "Projet de gestion de restaurant développé avec WordPress dans le cadre d'un projet académique. Cette plateforme permet aux visiteurs de découvrir le restaurant, consulter les menus, effectuer des réservations et accéder aux différentes informations de l'établissement à travers une interface moderne et responsive. Du côté administration, un espace dédié permet au restaurateur de gérer efficacement le contenu du site, les menus, les informations du restaurant ainsi que les différentes fonctionnalités nécessaires au bon fonctionnement de la plateforme.",
      technologie: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'Themify Ultra'],
      remarque: "Ce projet est actuellement hébergé dans un environnement de démonstration et n'est pas encore indexé par les moteurs de recherche.Selon le navigateur utilisé, un avertissement de sécurité peut apparaître lors de la première visite en raison du configuration temporaire du domaine de démonstration. Si un avertissement s'affiche, vous pouvez sélectionner « Avancé puis Continuer vers le site » afin d'accéder à la démonstration.",
      gallerie: [gallery1, gallery2, gallery5],
      linkMember: 'https://restaurantmodel.sc3xksm4783.universe.wf/login',
    },
    {
      id: 2,
      src: viberr,
      linkGithub: 'https://github.com/Ade-mir/company-landing-page-2',
      link: 'https://viberr.netlify.app/',
      h4: 'Viberr',
      p: 'Music Streaming App',
      description: 'Application de musique avec interface immersive, lecture de playlists, sections artistes et albums. Le design met l’accent sur l’expérience utilisateur mobile-first et l’ergonomie.',
      technologie: ['React', 'CSS', 'JavaScript', 'API'],
      gallerie: [gallery3, gallery4],
    },
    {
      id: 3,
      src: freshBurger,
      linkGithub: 'https://github.com/Ade-mir/company-landing-page-2',
      link: 'https://freshburger.netlify.app/',
      h4: 'Fresh Burger',
      p: 'Hamburger Restaurant',
      description: 'Landing page pour un restaurant de burgers avec animations d’interaction, menu responsive, et sections témoignages. Le projet est optimisé pour la conversion et la présentation produit.',
      technologie: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      gallerie: [gallery2, gallery5],
    },
    {
      id: 4,
      src: freeFire,
      linkGithub: 'https://github.com/lovasoa-dev-web/Free-fire',
      link: 'https://free-fire-website.netlify.app/',
      h4: 'Free Fire',
      p: 'Free Fire Game Website',
      description: 'Site produit autour du jeu Free Fire avec sections médias, fonctionnalités du jeu et visuels immersifs. Le focus est sur la présentation visuelle et l’expérience utilisateur moderne.',
      technologie: ['HTML', 'CSS', 'JavaScript', 'Animations'],
      gallerie: [gallery4, gallery1],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
  };

  const closeModal = () => setSelectedProject(null);

  const handleModalAreaClick = (e) => {
    // Prevent the overlay from also receiving the click
    if (e && e.stopPropagation) e.stopPropagation();
    // If the click happened on an interactive element (marked with .no-close), ignore it
    if (e.target.closest && e.target.closest('.no-close')) return;
    closeModal();
  };

  const images = selectedProject ? [selectedProject.src, ...(selectedProject.gallerie || [])] : [];

  const prevSlide = () => {
    if (!images.length) return;
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (!images.length) return;
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className={styles.portfolio}>
      <h1 className={styles.heading} data-aos="fade-up" data-aos-duration="800">
        Projects
      </h1>
      <div className={styles['portfolio-container']}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={styles['portfolio-box']}
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay={index * 100}
          >
            <img src={project.src} alt={project.h4} />
            <div className={styles['portfolio-layer']}>
              <h4>{project.h4}</h4>
              <p>{project.p}</p>
              <div className={styles['tech-list']}>
                {project.technologie?.map((tech, techIndex) => (
                  <span key={techIndex} className={styles['tech-pill']}>
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                type="button"
                onClick={() => openModal(project)}
                className={styles['detail-button']}
              >
                Voir détails
              </Button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className={styles['modal-overlay']} onClick={closeModal}>
          <div className={styles['modal-content']} onClick={handleModalAreaClick}>
            <header className={styles['modal-header']}>
              <div>
                <h2>{selectedProject.h4}</h2>
                {/* <p>{selectedProject.p}</p> */}
              </div>
              <button
                type="button"
                className={`${styles['modal-close']} no-close`}
                onClick={closeModal}
                aria-label="Fermer"
              >
                <i className="bx bx-x"></i>
              </button>
            </header>

            <div className={styles['modal-body']}>
              <div className={styles['modal-gallery']}>
                <div className={`${styles['modal-image-wrapper']} no-close`}>
                  <img
                    src={images[currentSlide]}
                    alt={`${selectedProject.h4} - slide ${currentSlide + 1}`}
                  />
                  <button
                    type="button"
                    className={`${styles['carousel-control']} ${styles.prev} no-close`}
                    onClick={prevSlide}
                  >
                    <i className="bx bx-chevrons-left" />
                  </button>
                  <button
                    type="button"
                    className={`${styles['carousel-control']} ${styles.next} no-close`}
                    onClick={nextSlide}
                  >
                    <i className="bx bx-chevrons-right" />
                  </button>
                </div>

                <div className={styles['gallery-thumbs']}>
                  {images.map((image, thumbIndex) => (
                    <button
                      key={thumbIndex}
                      type="button"
                      className={`${styles['thumb-item']} ${
                        thumbIndex === currentSlide ? styles.active : ''
                      } no-close`}
                      onClick={() => setCurrentSlide(thumbIndex)}
                    >
                      <img src={image} alt={`Miniature ${thumbIndex + 1}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles['modal-details']}>
                <div className={styles['modal-description']}>
                  <h3>Description</h3>
                  <p>{selectedProject.description}</p>
                </div>

                <div className={styles['modal-technologies']}>
                  <h3>Technologies</h3>
                  <div className={styles['tech-list']}>
                    {selectedProject.technologie?.map((tech, techIndex) => (
                      <span key={techIndex} className={styles['tech-pill']}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles['modal-remarque']}>
                  {selectedProject.remarque && (
                    <p><span>⚠️ remarque : </span>{selectedProject.remarque}</p>)}
                </div>

                {selectedProject.linkMember && (
                  <div className={styles['modal-info-block']}>
                    <h3>Accès démonstration restaurateur</h3>
                    <p>Utilisez ces identifiants pour vous connecter au compte restaurateur de la démo :</p>
                    <ul>
                      <li><strong>Utilisateur :</strong> restaurateur</li>
                      <li><strong>Mot de passe :</strong> restaurateur</li>
                    </ul>
                    <p>
                      Consultez la page de connexion via le bouton ci-dessous, puis connectez-vous avec ces informations.
                    </p>
                  </div>
                )}

                <div className={styles['modal-links']}>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles['modal-link']} no-close`}
                      title={selectedProject.remarque && (
                        'Cliquez sur ce lien pour accéder au compte démo. Si un avertissement de sécurité apparaît, sélectionnez « Avancé puis Continuer vers le site » pour accéder au compte de démonstration.'
                      )}
                    >
                      Voir la démo
                    </a>
                  )}
                  {selectedProject.linkMember && (
                    <a
                      href={selectedProject.linkMember}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles['modal-link']} no-close`}
                      title={selectedProject.remarque && (
                        'Cliquez sur ce lien pour accéder au compte démo. Si un avertissement de sécurité apparaît, sélectionnez « Avancé puis Continuer vers le site » pour accéder au compte de démonstration.'
                      )}
                    >
                      Compte Démo
                    </a>
                  )}
                  {selectedProject.linkGithub && (
                    <a
                      href={selectedProject.linkGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles['modal-link']} no-close`}
                    >
                      Code source GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
