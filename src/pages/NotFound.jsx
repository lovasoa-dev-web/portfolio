// chemin du fichier : src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="about">
      <h2>Page introuvable (404)</h2>
      <p>Désolé, cette page n’existe pas.</p>
      <Link to="/" className="btn-primary">Retour à l’accueil</Link>
    </section>
  );
}