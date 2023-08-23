import { Link } from "react-router-dom";
import { useState } from "react";
import projectBlack from "../assets/project-black.svg";
import projectBlue from "../assets/project-blue.svg";
import homeBlack from "../assets/home-black.svg";
import homeBlue from "../assets/home-blue.svg";
import contactBlack from "../assets/contact-black.svg";
import contactBlue from "../assets/contact-blue.svg";
import aboutBlack from "../assets/about-black.svg";
import aboutBlue from "../assets/about-blue.svg";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleLinkClick = () => {
    setShowLinks(false); // Ferme le menu lorsque l'utilisateur clique sur un lien
  };

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    // <div className="NavBarGlobal">
    //   <div className="NavBarHugo">
    //     <Link to="/">
    //       <p>Hugo Hattenville</p>
    //     </Link>
    //   </div>
    //   <ul className="NavBarButtons">
    //     <Link to="/">
    //       <img
    //         src={location.pathname === "/" ? homeBlue : homeBlack}
    //         className="navbarIcon"
    //       />
    //       <li
    //         style={{
    //           color: location.pathname === "/" ? "#62A1CC" : "",
    //         }}
    //       >
    //         Accueil
    //       </li>
    //     </Link>
    //     <Link to="/about">
    // <img
    //   src={location.pathname === "/about" ? aboutBlue : aboutBlack}
    //   className="navbarIcon"
    // />
    //       <li
    //         style={{
    //           color: location.pathname === "/about" ? "#62A1CC" : "",
    //         }}
    //       >
    //         À propos
    //       </li>
    //     </Link>
    //     <Link to="/projects">
    // <img
    //   src={location.pathname === "/projects" ? projectBlue : projectBlack}
    //   className="navbarIcon"
    // />
    //       <li
    //         style={{
    //           color: location.pathname === "/projects" ? "#62A1CC" : "",
    //         }}show-nav
    //       >
    //         Projets
    //       </li>
    //     </Link>
    //     <Link to="/contact">
    // <img
    //   src={location.pathname === "/contact" ? contactBlue : contactBlack}
    //   className="navbarIcon"
    // />
    //       <li
    //         style={{
    //           color: location.pathname === "/contact" ? "#62A1CC" : "",
    //         }}
    //       >
    //         Contact
    //       </li>
    //     </Link>
    //   </ul>
    // </div>
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
              color: location.pathname === "/" ? "#62A1CC" : "",
            }}
            className="NavBarItem slideInDown-1"
          >
            <img
              src={location.pathname === "/" ? homeBlue : homeBlack}
              className="navbarIcon"
            />
            Accueil
          </li>
        </Link>
        <Link to="/about" className="NavBarLink" onClick={handleLinkClick}>
          <li
            style={{
              color: location.pathname === "/about" ? "#62A1CC" : "",
            }}
            className="NavBarItem slideInDown-2"
          >
            <img
              src={location.pathname === "/about" ? aboutBlue : aboutBlack}
              className="navbarIcon"
            />
            À propos
          </li>
        </Link>
        <Link to="/projects" className="NavBarLink" onClick={handleLinkClick}>
          <li
            style={{
              color: location.pathname === "/projects" ? "#62A1CC" : "",
            }}
            className="NavBarItem slideInDown-3"
          >
            <img
              src={
                location.pathname === "/projects" ? projectBlue : projectBlack
              }
              className="navbarIcon"
            />
            Projets
          </li>
        </Link>
        <Link to="/contact" className="NavBarLink" onClick={handleLinkClick}>
          <li
            style={{
              color: location.pathname === "/contact" ? "#62A1CC" : "",
            }}
            className="NavBarItem slideInDown-4"
          >
            <img
              src={
                location.pathname === "/contact" ? contactBlue : contactBlack
              }
              className="navbarIcon"
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
