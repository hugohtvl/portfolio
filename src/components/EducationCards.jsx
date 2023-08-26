import { Link } from "react-router-dom";

import crossButton from "../assets/cross-button.png";
import nbBackground1 from "../assets/number-background-1.png";
import nbBackground2 from "../assets/number-background-2.png";
import nbBackground3 from "../assets/number-background-3.png";
import nbBackground4 from "../assets/number-background-4.png";

const EducationCards = ({ handleClickEducation }) => {
  return (
    <main id="educationCardslGlobal">
      <div id="educationCards">
        <div id="titleCross">
          <h1>Formations</h1>
          <button id="carrouselCross" onClick={handleClickEducation}>
            <img src={crossButton} />
          </button>
        </div>
        <section id="educationList">
          <div className="educationCardGroup">
            <div className="educationCardsTogether">
              <img
                src={nbBackground1}
                className="numberEducationCard"
                alt="Image d'une pastille avec le chiffre 2"
              />
              <div id="textEducationCard">
                <h2>Développeur web & web mobile - option JavaScript</h2>
                <p>
                  Wild Code School, <i>Tours, France</i> - 05/2023 à 10/2023
                </p>
                <br />
                <p>
                  Apprentissage intensif de langages front-end et back-end dont
                  notamment React.Js, Node.js, JavaScript, mySQL, HTML & CSS.
                  J'ai eu l'occasion de travailler sur un certain nombre de{" "}
                  <Link to="/projects">projets</Link> et je me forme à côté sur
                  PHP et Python.
                </p>
              </div>
            </div>
            <div className="educationCardsTogether">
              <img
                src={nbBackground2}
                className="numberEducationCard"
                alt="Image d'une pastille avec le chiffre 2"
              />
              <div id="textEducationCard">
                <h2>
                  Mastère - Expert en stratégie digitale - option Big Data
                </h2>
                <p>
                  Digital Campus, <i>Bordeaux, France</i> - 09/2015 à 09/2017
                </p>
                <br />
                <p>
                  Ce Mastère m'a permis d'acquérir de nombreuses compétences
                  dans le numérique, du marketing jusqu'au développement web en
                  passant par la data !
                </p>
              </div>
            </div>
          </div>
          <div className="educationCardGroup">
            <div className="educationCardsTogether">
              <img
                src={nbBackground3}
                className="numberEducationCard"
                alt="Image d'une pastille avec le chiffre 3"
              />
              <div id="textEducationCard">
                <h2>Licence - E-commerce et marketing numérique</h2>
                <p>
                  IUT de Belfort-Montbéliard, <i>Belfort, France</i> - 09/2014 –
                  06/2015
                </p>
                <br />
                <p>
                  C'est au cours de cette Licence que j'ai pu lier mon goût pour
                  le commerce et celui pour le numérique. C'est d'ailleurs là
                  que j'ai découvert les bases de données relationnelles !
                </p>
              </div>
            </div>
            <div className="educationCardsTogether">
              <img
                src={nbBackground4}
                className="numberEducationCard"
                alt="Image d'une pastille avec le chiffre 3"
              />
              <div id="textEducationCard">
                <h2>DUT - Techniques de commercialisation</h2>
                <p>
                  IUT de Tours, <i>Tours, France</i> - 09/2011 – 08/2013
                </p>
                <br />
                <p>
                  C'est ce DUT qui m'a permis d'approfondir mes compétences
                  commerciales, mais surtout sociales qui me sont aujourd'hui
                  fortement utiles !
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default EducationCards;
