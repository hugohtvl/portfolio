import skills from "../assets/skills.png";
import proExp from "../assets/pro-experience.png";
import education from "../assets/education.png";

const AboutCards = ({ handleClickPopup }) => {
  return (
    <>
      <section id="aboutSectionCards">
        <button className="aboutCards" onClick={handleClickPopup}>
          <div className="aboutTitleImg">
            <h2>Expériences professionnelles</h2>
            <img src={proExp} alt="Image d'un dessin de CV" id="aboutPicture" />
          </div>
        </button>
        <button className="aboutCards">
          <div className="aboutTitleImg">
            <h2>Formations</h2>
            <img
              src={education}
              alt="Image d'un dessin d'ordinateur"
              id="aboutPicture"
            />
          </div>
        </button>
        <button className="aboutCards">
          <div className="aboutTitleImg">
            <h2>Compétences</h2>
            <img
              src={skills}
              alt="Image d'un dessin de cerveau"
              id="aboutPicture"
            />
          </div>
        </button>
      </section>
    </>
  );
};

export default AboutCards;
