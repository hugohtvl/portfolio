import crossButton from "../assets/cross-button.png";
import nbBackground1 from "../assets/number-background-1.png";
import nbBackground2 from "../assets/number-background-2.png";
import nbBackground3 from "../assets/number-background-3.png";
import nbBackground4 from "../assets/number-background-4.png";

const SkillsCards = ({ handleClickSkills }) => {
  return (
    <main id="skillsCardslGlobal">
      <div id="skillsCards">
        <div id="titleCross">
          <h1>Compétences</h1>
          <button id="carrouselCross" onClick={handleClickSkills}>
            <img src={crossButton} />
          </button>
        </div>
        <section id="skillsList">
          <div className="skillsCards">
            <div id="textSkillsCard">
              <h2>Langages et framework</h2>
              <br />
              <p>React.Js, Node.js, JavaScript, HTML5, CSS3</p>
            </div>
          </div>
          <div className="skillsCards">
            <div id="textSkillsCard">
              <h2>Logiciels et outils</h2>
              <br />
              <p>Visual Studio Code, Git, GitHub, Figma</p>
            </div>
          </div>
          <div className="skillsCards">
            <div id="textSkillsCard">
              <h2>Qualités personnelles</h2>
              <br />
              <p>Agile, Curieux, Impliqué, Rigoureux</p>
            </div>
          </div>
          <div className="skillsCards">
            <div id="textSkillsCard">
              <h2>Langues</h2>
              <br />
              <p>Anglais : lu, parlé et écrit</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SkillsCards;
