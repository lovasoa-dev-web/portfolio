// chemin du fichier : src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <h1>Salut, moi c’est William 👋</h1>
      <p>
        Développeur Web débutant motivé — j’apprends React et je construis
        mon portfolio pas à pas.
      </p>
      <div>
        <Link to="/projects" className="btn-primary">Voir mes projets</Link>
      </div>
    </section>
  );
}