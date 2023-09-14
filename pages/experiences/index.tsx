import { useState } from "react";
import BasePage from "../../components/BasePage";
import classes from "./index.module.scss";
import Experience, { IExperience } from "./experience";

const EXPERIENCES: IExperience[] = [
  {
    title: "Hoppio",
    link: "https://hoppio.fr",
    role: "Co-fondateur",
    location: "Paris, France",
    summary: [
      "Creation d'une plateforme qui permet de trouver des destinations en fonction des envies de l'utilisateur (par exemple le thème : vélo, montagne, culture, plage,...) accessibles en train.",
      "Je prends en charge toute la partie technique du projet : développement backend, frontend, infrastructure,...",
    ],
    skills: [
      "React.js",
      "Typescript",
      "SASS",
      "Python 3",
      "flask",
      "SQLAlchemy",
      "Redis",
      "PostgreSQL",
      "OVH",
      "Docker",
    ],
    dates: {
      start: new Date("2023-04-01"),
    },
  },
  {
    title: "uptime.ac",
    link: "https://www.linkedin.com/company/uptime.ac/about/",
    role: "Développeur fullstack senior",
    location: "Paris, France",
    summary: [
      "Développement d'applications de maintenance d'ascenseurs en temps réel en tant que développeur fullstack senior.",
    ],
    skills: [
      "React.js",
      "React Native",
      "redux",
      "Apollo",
      "Plotly",
      "Python 3",
      "flask",
      "SQLAlchemy",
      "Celery",
      "PostgreSQL",
      "Redis",
      "Gitlab CI",
      "Terraform",
      "AWS",
      "Heroku",
      "GraphQL",
      "Docker",
    ],
    dates: {
      start: new Date("2020-09-01"),
      end: new Date("2023-01-01"),
    },
  },
  {
    title: "nr2",
    link: "https://www.nr2.io/",
    role: "Responsable du développement logiciel",
    location: "Londres, Royaume-Uni",
    summary: [
      "Développement d'un moteur de recherche de l'innovation from scratch.",
      "Prise en charge de toute la partie technique : développement backend, frontend, infrastructure,...",
    ],
    skills: [
      "Angular",
      "Angular Material",
      "d3.js",
      "Leaflet",
      "Python 3",
      "flask",
      "pymongo",
      "Pandas",
      "Stripe",
      "MongoDB",
      "Microsoft Azure",
    ],
    dates: {
      start: new Date("2019-01-01"),
      end: new Date("2020-09-01"),
    },
  },
  {
    title: "Nooline",
    role: "Développeur fullstack",
    location: "Cergy, France",
    summary: ["Développement d'applications web pour divers clients publics et privés."],
    skills: ["AngularJS", "Angular", "Ionic", "fuse", "Chart.js", "Leaflet", "Java", "J2EE", "Hibernate", "Spring"],
    dates: {
      start: new Date("2017-10-01"),
      end: new Date("2018-10-01"),
    },
  },
  {
    title: "Continental",
    link: "https://continental-tires.com/",
    role: "Ingénieur robotique/vision",
    location: "Toulouse, France",
    summary: [
      "Développement et installation sur une ligne de production d'un système de dévracage robotisé basé sur une caméra COGNEX et un bras robotisé UR10.",
    ],
    skills: ["UR", "COGNEX"],
    dates: {
      start: new Date("2017-01-01"),
      end: new Date("2017-07-01"),
    },
  },
  {
    title: "BASSETTI",
    link: "https://www.bassetti-group.com/",
    role: "Developpeur WEB/mobile",
    location: "Grenoble, France",
    summary: ["Mise en place de l'environnement de développement mobile dans l'entreprise : Ionic & AngularJS."],
    skills: ["AngularJS", "Ionic"],
    dates: {
      start: new Date("2016-07-01"),
      end: new Date("2017-01-01"),
    },
  },
];

const Experiences: React.FC = () => {
  const [indexHighlighted, setIndexHighlighted] = useState<number | null>(null);

  return (
    <BasePage>
      <div className="cards-list">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className={classes["experience-container"]}
            onMouseEnter={() => {
              setIndexHighlighted(index);
            }}
            onMouseLeave={() => {
              setIndexHighlighted(null);
            }}
          >
            {" "}
            <Experience
              {...experience}
              last={index === EXPERIENCES.length - 1}
              highlighted={index === indexHighlighted}
              faded={indexHighlighted !== null && index !== indexHighlighted}
            />
          </div>
        ))}
      </div>
    </BasePage>
  );
};

export default Experiences;
