import { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import Button from '../../common/Button.jsx';
import restaurant from '../../assets/delice.png';
import gallery1 from '../../assets/ajoutReservation.png';
import gallery2 from '../../assets/recette.png';
import gallery5 from '../../assets/galerie.png';
import portfolioWebSite from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';
import freeFire from '../../assets/free-fire.png';
import f1 from '../../assets/f1.png';
import f2 from '../../assets/f2.png';
import f3 from '../../assets/f3.png';
import gamerNet from '../../assets/g.png';

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
      src: gamerNet,
      // linkGithub: 'https://github.com/Ade-mir/company-landing-page-2',
      // link: 'https://viberr.netlify.app/',
      h4: 'GameNet',
      p: 'Réseau social pour joueurs (Projet en cours)',
      description: "GameNet est un réseau social dédié aux joueurs permettant de partager des publications, gérer des amis, échanger des messages privés, rejoindre des clans et interagir avec la communauté. Ce projet est développé en PHP natif et MySQL dans le cadre de mon projet de fin d'études.",
      technologie: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript']
      // gallerie: [],
    },
    {
      id: 3,
      src: portfolioWebSite,
      linkGithub: 'https://github.com/lovasoa-dev-web/portfolio',
      link: 'https://lovasoa-william-portfolio.netlify.app/',
      h4: 'Portfolio Professionnel',
      p: 'Portfolio moderne interactif développé avec React et Vite',
      description: "Ce portfolio professionnel a été conçu pour présenter mon parcours, mes compétences techniques et les différents projets que j'ai réalisés dans le domaine du développement web.Développé avec React et Vite, il propose une interface moderne, responsive et optimisée pour offrir une expérience utilisateur fluide sur ordinateur, tablette et mobile.Le projet met en avant plusieurs fonctionnalités telles que la navigation fluide entre les sections, les animations interactives, la présentation détaillée des projets, le téléchargement du CV ainsi qu'un formulaire de contact permettant de faciliter les échanges professionnels.À travers ce projet, j'ai renforcé mes compétences en développement frontend, en conception d'interfaces utilisateur et en organisation d'une application React moderne.",
      technologie: ['React', 'JavaScript','html','css','git', 'CSS', 'aos'],
      gallerie: [p2, p3, p4],
    },
    {
      id: 4,
      src: freeFire,
      linkGithub: 'https://github.com/lovasoa-dev-web/Free-fire',
      link: 'https://free-fire-website.netlify.app/',
      h4: 'Free Fire',
      p: 'Free Fire Game Website',
      description: 'Site produit autour du jeu Free Fire avec sections médias, fonctionnalités du jeu et visuels immersifs. Le focus est sur la présentation visuelle et l’expérience utilisateur moderne.',
      technologie: ['HTML', 'CSS', 'JavaScript'],
      gallerie: [f1, f2, f3],
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
                    <p><span>⚠️ Important : </span>{selectedProject.remarque}</p>)}
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
