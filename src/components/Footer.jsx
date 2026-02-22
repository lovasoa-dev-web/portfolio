// chemin du fichier : src/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>© {year} William — Tous droits réservés.</p>
    </footer>
  );
}