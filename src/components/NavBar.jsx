import { Link } from "react-router-dom";
import projectBlack from "../assets/project-black.svg";
import projectBlue from "../assets/project-blue.svg";
import homeBlack from "../assets/home-black.svg";
import homeBlue from "../assets/home-blue.svg";
import contactBlack from "../assets/contact-black.svg";
import contactBlue from "../assets/contact-blue.svg";
import aboutBlack from "../assets/about-black.svg";
import aboutBlue from "../assets/about-blue.svg";

const NavBar = () => {
  return (
    <div className="NavBarGlobal">
      <div className="NavBarHugo">
        <Link to="/">
          <p>Hugo Hattenville</p>
        </Link>
      </div>
      <ul className="NavBarButtons">
        <Link to="/">
          <img
            src={location.pathname === "/" ? homeBlue : homeBlack}
            className="navbarIcon"
          />
          <li>Accueil</li>
        </Link>
        <Link to="/">
          <img
            src={location.pathname === "/about" ? aboutBlue : aboutBlack}
            className="navbarIcon"
          />
          <li>À propos</li>
        </Link>
        <Link to="/">
          <img
            src={location.pathname === "/projects" ? projectBlue : projectBlack}
            className="navbarIcon"
          />
          <li>Projets</li>
        </Link>
        <Link to="/">
          <img
            src={location.pathname === "/contact" ? contactBlue : contactBlack}
            className="navbarIcon"
          />
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
