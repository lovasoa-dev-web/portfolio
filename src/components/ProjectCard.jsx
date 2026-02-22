// chemin du fichier : src/components/ProjectCard.jsx
export default function ProjectCard({ title, description, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Voir le projet →
        </a>
      )}
    </div>
  );
}