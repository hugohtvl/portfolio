import crossButton from "../assets/cross-button.png";
import nbBackground1 from "../assets/number-background-1.png";
import nbBackground2 from "../assets/number-background-2.png";
import nbBackground3 from "../assets/number-background-3.png";
import nbBackground4 from "../assets/number-background-4.png";
import nbBackground5 from "../assets/number-background-5.png";
import nbBackground6 from "../assets/number-background-6.png";
import nbBackground7 from "../assets/number-background-7.png";

const ExperiencesCards = ({ handleClickProExp }) => {
  return (
    <main id="experienceCardslGlobal">
      <div id="experienceCards">
        <div id="titleCross">
          <h1>Expériences professionnelles</h1>
          <button id="carrouselCross" onClick={handleClickProExp}>
            <img src={crossButton} />
          </button>
        </div>
        <section id="experienceList">
          <div id="experienceCardAlone">
            <img
              src={nbBackground1}
              className="numberExperienceCard"
              alt="Image d'une pastille avec le chiffre 1"
            />
            <div id="textExperienceCard">
              <h2>Développeur web</h2>
              <p>
                Indépendant - 05/2023 à aujourd'hui - <i>Tours, France</i>
              </p>
              <br />
              <ul>
                <li>
                  Création d'une application web mobile first à l'aide de{" "}
                  <b>Vite.js</b>, <b>Node.js</b>, <b>Sass</b> couplé à une{" "}
                  <b>API REST</b> conçue à l'aide de <b>Express.js</b> lors d'un
                  hackaton de 24h - 07/2023
                </li>
                <br />
                <li>
                  Création d'une application web e-commerce à l'aide de{" "}
                  <b>Vite.js</b>, <b>Node.js</b>, <b>Sass</b> couplé à une{" "}
                  <b>API REST</b> conçue à l'aide de <b>Express.js</b> - 06/2023
                  - 07/2023
                </li>
                <br />
                <li>
                  Création d'un site internet sous forme d'application à l'aide
                  de <b>React.Js</b> sur le thème de Star Wars in Love lors d'un
                  hackaton de 24h - 06/2023
                </li>
                <br />
                <li>
                  Création d'un site internet sur l'univers de Deadpool, à
                  l'aide de <b>JavaScript</b>, <b>HTML5</b> & <b>CSS3</b> -
                  05/2023
                </li>
              </ul>
            </div>
          </div>
          <div className="experienceCardGroup">
            <div className="experienceCardsTogether">
              <img
                src={nbBackground2}
                className="numberExperienceCard"
                alt="Image d'une pastille avec le chiffre 2"
              />
              <container id="textExperienceCard">
                <h2>Mentor accompagnateur</h2>
                <p>
                  OpenClassrooms - 01/2021 à 10/2023 - <i>Tours, France</i>
                </p>
                <br />
                <p>
                  Accompagnement d'étudiants chaque semaine dans la validation
                  de leurs projets et le passage de leurs diplômes.
                </p>
              </container>
            </div>
            <div className="experienceCardsTogether">
              <img
                src={nbBackground3}
                className="numberExperienceCard"
                alt="Image d'une pastille avec le chiffre 3"
              />
              <container id="textExperienceCard">
                <h2>Commercial & conseiller de proximité</h2>
                <p>
                  Konverseo - 08/2022 à 03/2023 - <i>Tours, France</i>
                </p>
                <br />
                <p>
                  Konverseo commercialise des sites internet clés en main à
                  destination des TPE & PME, je formais également les chefs
                  d'entreprise à l'usage de leurs back-office.
                </p>
              </container>
            </div>
            <div className="experienceCardsTogether">
              <img
                src={nbBackground4}
                className="numberExperienceCard"
                alt="Image d'une pastille avec le chiffre 4"
              />
              <container id="textExperienceCard">
                <h2>Responsable commercial</h2>
                <p>
                  Sortvoices - 09/2017 à 12/2021 - <i>Bordeaux, France</i>
                </p>
                <br />
                <p>
                  Sortvoices était un SaaS d'analyse du langage textuel, à
                  destination des e-commerçants pour leurs avis clients ou de
                  toute entreprise ayant des verbatims pour lesquelles extraire
                  des tendances.
                </p>
              </container>
            </div>
          </div>
          <div className="experienceCardGroup">
            <div className="experienceCardsTogether">
              <img
                src={nbBackground5}
                className="numberExperienceCard"
                alt="Image d'une pastille avec le chiffre 5"
              />
              <container id="textExperienceCard">
                <h2>Responsable e-commerce</h2>
                <p>
                  Couleur Vélo - 09/2015 à 08/2017 - <i>Bordeaux, France</i>
                </p>
                <br />
                <p>
                  Développement de la notoriété et du référencement via SEO,
                  AdWords, Facebook Ads, mailing.
                </p>
              </container>
            </div>
            <div className="experienceCardsTogether">
              <img
                src={nbBackground6}
                className="numberExperienceCard"
                alt="Image d'une pastille avec le chiffre 6"
              />
              <container id="textExperienceCard">
                <h2>Assistant marketing et communication</h2>
                <p>
                  Itinéraire B - 02/2015 à 05/2015 - <i>Tours, France</i>
                </p>
                <br />
                <p>
                  Rédaction de cahiers des charges fonctionnels, réalisation de
                  maquettes de sites via Balsamiq Mockups.
                </p>
              </container>
            </div>
            <div className="experienceCardsTogether">
              <img
                src={nbBackground7}
                className="numberExperienceCard"
                alt="Image d'une pastille avec le chiffre 7"
              />
              <container id="textExperienceCard">
                <h2>Chargé de clientèle</h2>
                <p>
                  Orange France - 07/2011 à 09/2013 - <i>Tours, France</i>
                </p>
                <br />
                <p>Développement et fidélisation du portefeuilles clients.</p>
              </container>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ExperiencesCards;
