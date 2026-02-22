// chemin du fichier : src/pages/Contact.jsx
export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>Envie de discuter d’un projet ou d’une opportunité ?</p>

      <ul className="contact-list">
        <li>
          Email : <a href="mailto:randrianantenainawilliam44@gmail.com">randrianantenainawilliam44@gmail.com</a>
        </li>
        <li>
          GitHub :{" "}
          <a href="https://github.com/lovasoa-dev-web" target="_blank" rel="noopener noreferrer">
            github.com/lovasoa-dev-web
          </a>
        </li>
        <li>
          LinkedIn :{" "}
          <a href="https://www.linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/tonprofil
          </a>
        </li>
      </ul>
    </section>
  );
}