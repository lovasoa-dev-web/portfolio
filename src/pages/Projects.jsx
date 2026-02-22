// chemin du fichier : src/pages/Projects.jsx
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  const projects = [
    { title: "Mon premier site HTML", description: "Un site statique en HTML/CSS.", link: "#" },
    { title: "Application Todo", description: "Gestion de tâches en JavaScript.", link: "#" },
    { title: "Portfolio React", description: "Le site que vous regardez.", link: "#" },
    { title: "Calculatrice JS", description: "Exercice DOM et events.", link: "#" },
    { title: "Free fire", description: "Site vitrine gaming inspiré de Free Fire, conçu pour mettre en valeur l’univers du jeu : personnages, armes, modes de jeu et événements. Développé en HTML, CSS et JavaScript avec un design moderne et responsive.", link: "https://github.com/lovasoa-dev-web/Free-fire" },
  ];

  return (
    <section>
      <h2>Mes projets</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}