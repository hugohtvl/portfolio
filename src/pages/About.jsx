import { useContext } from "react";
import Context from "../components/Context";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import mySelf from "../assets/me.png";
import AboutCards from "../components/AboutCards";
import Carrousel from "../components/Carrousel";

const About = () => {
  const { popup, setPopup } = useContext(Context);
  const handleClickPopup = () => {
    setPopup(!popup);
  };
  return (
    <>
      <div id="aboutGlobal">
        <NavBar />
        <section id="aboutPresentation">
          <img src={mySelf} alt="Photo de Hugo Hattenville" id="aboutPicture" />
          <div id="aboutText">
            <p>
              Après 10 années passées dans le commerce, j&apos;ai décidé de
              changer de voie et de me reconvertir, ayant eu l&apos;occasion de
              travailler dans le numérique et étant passionné depuis toujours
              par la technologie et le développement web. <br />
              J&apos;ai un profil plutôt front-end suite aux différents projets
              que j&apos;ai pu mener en React.Js mais je me spécialise également
              en back-end notamment via JavaScript, Python, Java et PHP.
            </p>
          </div>
        </section>
        {!popup ? (
          <AboutCards handleClickPopup={handleClickPopup} />
        ) : (
          <Carrousel handleClickPopup={handleClickPopup} />
        )}
        <Footer />
      </div>
    </>
  );
};

export default About;
