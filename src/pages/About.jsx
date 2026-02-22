// chemin du fichier : src/pages/About.jsx
export default function About() {
  return (
    <section className="about">
      <h2>À propos de moi</h2>
      <img src="/src/assets/william.png" alt="Photo de William" width="160" style={{ borderRadius: '12px' }} />
      <p>
        Je m’appelle William. Passionné par le Web (JS/React), je construis ce
        portfolio pour montrer mes progrès et mes projets.
      </p>

      <h3>Compétences</h3>
      <ul className="stack-sm">
        <li>HTML / CSS</li>
        <li>JavaScript (en progression)</li>
        <li>React (débutant)</li>
        <li>Git & GitHub</li>
      </ul>
    </section>
  );
}