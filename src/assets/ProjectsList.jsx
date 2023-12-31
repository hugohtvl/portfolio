import oSookLogo from "../assets/o-sook-logo.png";
import dreamITLogo from "../assets/dream-it-logo.png";
import starLoveLogo from "../assets/star-love-logo.png";
import deadPouleLogo from "../assets/deadpoule-logo.png";

const ProjectsList = [
  {
    id: 1,
    logo: oSookLogo,
    title: "O'Sook",
    description:
      "Création d'une application web, pensée mobile first, de type annonces entre particulier au temps de l’Égypte Antique, avec des objets en vente datant de cette période. L'ensemble des photos a été généré sur Midjourney. L'application a été développée en 24h avec React.Js (via l'environnement ViteJS), JavaScript ainsi que Sass pour la partie front-end, le back-end quant à lui a été réalisé avec Express.js et Node.js pour la conception d'une API Rest maison.",
    skills:
      "React.js · Express.js · Node.js · JavaScript · Sass · Git · GitHub",
  },
  {
    id: 2,
    logo: dreamITLogo,
    title: "DreamIT",
    description:
      "Création d'une application web e-commerce imaginaire où le but est de pouvoir acheter des rêves pré-fabriqués, ou bien de concevoir son propre rêve à la carte, à consommer sous forme de gélule. L'ensemble des images a été généré sur DALL-E. L'application a été développée avec React.Js (via l'environnement ViteJS), JavaScript ainsi que Sass pour la partie front-end, le back-end quant à lui a été réalisé avec Express.js et Node.js pour la conception d'une API Rest maison.",
    skills:
      "React.js · Express.js · Node.js · JavaScript · Sass · Git · GitHub",
  },
  {
    id: 3,
    logo: starLoveLogo,
    title: "StarLove",
    description:
      "Création d'un site internet sous forme d'application sur l'univers de Star Wars. L'idée est de proposer une application de rencontre avec les personnages de l'univers Star Wars, via un système de filtres permettant de sélectionner les critères de notre choix. L'application a été réalisée en 24h avec React.Js, JavaScript et CSS3 et interagit avec un fetch d'API Rest.",
    skills: "React.js · JavaScript · Git · GitHub · API REST · CSS",
  },
  {
    id: 4,
    logo: deadPouleLogo,
    title: "DeadPoule",
    description:
      "Création d'un site internet sur l'univers de Deadpool, avec un clin d’œil pour le formateur fan de poulet ! Le site a été réalisé sous forme de quizz dont les questions sont basées sur l'univers Marvel. Le but étant de mettre l'internaute dans la peau de Deadpool et l'aider à intégrer le Multiverse. Le site a été réalisé avec JavaScript, HTML5 et CSS3.",
    skills:
      "JavaScript · HTML5 · CSS · Git · GitHub · Microsoft Visual Studio Code",
  },
];

export default ProjectsList;
