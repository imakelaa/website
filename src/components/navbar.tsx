import "../styles/components/_navbar.scss"

export function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Pakhi Sinha</div>
      <ul className="navbar__links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Resume</a></li>
        <li><a href="#contact">Sidequests</a></li>
      </ul>
    </nav>
  );
}