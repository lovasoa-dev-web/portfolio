// chemin du fichier : src/components/Header.jsx
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Navigation principale">
        <div className="brand">Portfolio William</div>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              À propos
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
              Projets
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}