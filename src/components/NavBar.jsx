import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import projectBlack from "../assets/project-black.svg";
import projectBlue from "../assets/project-blue.svg";
import homeBlack from "../assets/home-black.svg";
import homeBlue from "../assets/home-blue.svg";
import contactBlack from "../assets/contact-black.svg";
import contactBlue from "../assets/contact-blue.svg";
import aboutBlack from "../assets/about-black.svg";
import aboutBlue from "../assets/about-blue.svg";

const NavBar = () => {
  const location = useLocation();
  const [showLinks, setShowLinks] = useState(false);
  const [activePage, setActivePage] = useState(location.pathname);

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = () => {
    setShowLinks(false); // Ferme le menu lorsque l'utilisateur clique sur un lien
  };

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className={`NavBarGlobal ${showLinks ? "navShow" : "navHide"}`}>
      <div className="NavBarHugo">
        <Link to="/">
          <p>Hugo Hattenville</p>
        </Link>
      </div>
      <ul className="NavBarButtons">
        <Link to="/" className="NavBarLink" onClick={handleLinkClick}>
          <li
            style={{
              color: activePage === "/" ? "#62A1CC" : "",
            }}
            className="NavBarItem slideInDown-1"
          >
            <img
              src={activePage === "/" ? homeBlue : homeBlack}
              className="navbarIcon"
              alt="Icône de la page accueil"
            />
            Accueil
          </li>
        </Link>
        <Link to="/about" className="NavBarLink" onClick={handleLinkClick}>
          <li
            style={{
              color: activePage === "/about" ? "#62A1CC" : "",
            }}
            className="NavBarItem slideInDown-2"
          >
            <img
              src={activePage === "/about" ? aboutBlue : aboutBlack}
              className="navbarIcon"
              alt="Icône de la page à propos"
            />
            À propos
          </li>
        </Link>
        <Link to="/projects" className="NavBarLink" onClick={handleLinkClick}>
          <li
            style={{
              color: activePage === "/projects" ? "#62A1CC" : "",
            }}
            className="NavBarItem slideInDown-3"
          >
            <img
              src={activePage === "/projects" ? projectBlue : projectBlack}
              className="navbarIcon"
              alt="Icône de la page projets"
            />
            Projets
          </li>
        </Link>
        <Link to="/contact" className="NavBarLink" onClick={handleLinkClick}>
          <li
            style={{
              color: activePage === "/contact" ? "#62A1CC" : "",
            }}
            className="NavBarItem slideInDown-4"
          >
            <img
              src={activePage === "/contact" ? contactBlue : contactBlack}
              className="navbarIcon"
              alt="Icône de la page contact"
            />
            Contact
          </li>
        </Link>
      </ul>
      <button className="NavBarBurger" onClick={handleShowLinks}>
        <span className="burgerBars"></span>
      </button>
    </nav>
  );
};

export default NavBar;
