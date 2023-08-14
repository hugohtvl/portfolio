import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import mySelf from "../assets/me.png";
import Skills from "../assets/skills.png";
import proExp from "../assets/pro-experience.png";
import education from "../assets/education.png";

const About = () => {
  return (
    <>
      <div id="homeGlobal">
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
        <section id="aboutSectionCards">
          <div className="aboutCards">
            <div className="aboutTitleImg">
              <h2>Expériences professionnelles</h2>
              <img
                src={proExp}
                alt="Photo de Hugo Hattenville"
                id="aboutPicture"
              />
            </div>
          </div>
          <div className="aboutCards">
            <div className="aboutTitleImg">
              <h2>Formations</h2>
              <img
                src={education}
                alt="Photo de Hugo Hattenville"
                id="aboutPicture"
              />
            </div>
          </div>
          <div className="aboutCards">
            <div className="aboutTitleImg">
              <h2>Compétences</h2>
              <img
                src={Skills}
                alt="Photo de Hugo Hattenville"
                id="aboutPicture"
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default About;
