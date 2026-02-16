import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/components/_navbar.scss"

export function NavBar() {
  const [showLogo, setShowLogo] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setShowLogo(window.scrollY > 100);

    if (location.pathname !== "/") {
      setShowLogo(true);
    } else {
      setShowLogo(window.scrollY > 100);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      {showLogo && <div className="navbar__logo">Pakhi Sinha</div>}
      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/sidequests">Sidequests</Link></li>
      </ul>
    </nav>
  );
}