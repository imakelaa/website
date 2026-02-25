import { useLocation, Link } from "react-router-dom";
import "../styles/components/_navbar.scss"

export function NavBar() {
  const location = useLocation();
  const isSidequests = location.pathname === "/sidequests";

  return (
    <nav className={`navbar ${isSidequests ? "navbar--sidequests" : "navbar--default"}`}>
      <div className="navbar__logo">Pakhi Sinha</div>
      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/sidequests">Sidequests</Link></li>
      </ul>
    </nav>
  );
}