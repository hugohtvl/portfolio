import skills from "../assets/skills.png";
import proExp from "../assets/pro-experience.png";
import education from "../assets/education.png";

const AboutCards = ({
  handleClickProExp,
  handleClickEducation,
  handleClickSkills,
}) => {
  return (
    <>
      <section id="aboutSectionCards">
        <button className="aboutCards" onClick={handleClickProExp}>
          <div className="aboutTitleImg">
            <h2>Expériences professionnelles</h2>
            <img src={proExp} alt="Image d'un dessin de CV" id="aboutPicture" />
          </div>
        </button>
        <button className="aboutCards" onClick={handleClickEducation}>
          <div className="aboutTitleImg">
            <h2>Formations</h2>
            <img
              src={education}
              alt="Image d'un dessin d'ordinateur"
              id="aboutPicture"
            />
          </div>
        </button>
        <button className="aboutCards" onClick={handleClickSkills}>
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
