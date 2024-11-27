import { useState } from "react";
import classes from "./index.module.scss";
import CardsContainer from "@/components/CardsContainer";
import Experience, { IExperience } from "@/components/Experience";
import BasePage from "@/components/BasePage";
import { CARD_CONTAINER_CLASSNAME } from "@/constants";
import NextLink from "next/link";
import { Icon } from "@/components/Icon";

const ARROW_ICON_SIZE = "1.2rem";

const EXPERIENCES: IExperience[] = [
  {
    title: "Aigle",
    link: "https://beta.gouv.fr/startups/aigle.html",
    role: "Responsable développement web et infrastructure",
    location: "Paris, France",
    summary: [
      "Développement et gestion de l'infrastructure de la plateforme Aigle, actuellement en phase de refonte.",
      "La plateforme Aigle est un outil qui a pour but de faciliter la détection des constructions ou installations illégales pour préserver les espaces agricoles, naturels et forestiers.",
    ],
    skills: ["React.js", "Typescript", "SASS", "Python 3", "Django", "PostgreSQL", "Postgis", "Scalingo", "Docker"],
    dates: {
      start: new Date("2024-01-15"),
    },
  },
  {
    title: "Hoppio",
    link: "https://hoppio.fr",
    role: "Co-fondateur",
    location: "Paris, France",
    summary: [
      "Création d'une plateforme from scratch qui permet d'inspirer et de trouver des destinations accessibles en train partout en France.",
      "Hoppio propose des itinéraires en fonction des envies de l'utilisateur (vélo, montagne, culture, plage,...).",
      "Prise en charge de toute la partie technique du projet : développement back-end, front-end et mise en place de l'infrastructure.",
    ],
    skills: ["React.js", "Typescript", "SASS", "Python 3", "Django", "Redis", "PostgreSQL", "OVH", "Docker"],
    dates: {
      start: new Date("2023-04-01"),
      end: new Date("2023-12-31"),
    },
  },
  {
    title: "uptime.ac",
    link: "https://www.linkedin.com/company/uptime.ac/about/",
    role: "Développeur full-stack senior",
    location: "Paris, France",
    summary: [
      "Développement des applications front-end et back-end pour la maintenance d'ascenseurs.",
      "Travail sur l'infrastructure technique, traitement et analyse des données IoT.",
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
      "Développement d'un moteur de recherche from scratch à destination des investisseurs permettant de trouver des start-ups prometteuses.",
      "Prise en charge de toute la partie technique : développement back-end, front-end et gestion de l'infrastructure.",
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
    role: "Développeur full-stack",
    location: "Cergy, France",
    summary: ["Développement d'applications web/mobile pour des clients du secteur publique et privé."],
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
      "Développement d'un système de dévracage robotisé basé sur une caméra COGNEX et un bras robotisé UR10.",
      "Installation du système sur une ligne de production Continental.",
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
    summary: ["Mise en place de l'environnement de développement mobile dans l'entreprise."],
    skills: ["AngularJS", "Ionic"],
    dates: {
      start: new Date("2016-07-01"),
      end: new Date("2017-01-01"),
    },
  },
];

const EDUCATIONS: IExperience[] = [
  {
    icon: "student",
    title: "ICAM",
    role: "Diplôme d'ingénieur",
    location: "Toulouse, France",
    summary: ["Spécialisation M2M (machine to machine) objets connectés"],
    skills: [],
    dates: {
      start: new Date("2012-09-01"),
      end: new Date("2017-09-01"),
    },
  },
];

const Experiences: React.FC = () => {
  const [indexHighlighted, setIndexHighlighted] = useState<number | null>(null);

  return (
    <BasePage>
      <div className={classes.experiences}>
        <CardsContainer setIndexHighlighted={setIndexHighlighted}>
          {EXPERIENCES.map((experience, index) => (
            <div
              key={index}
              className={CARD_CONTAINER_CLASSNAME}
              data-index={index}
              onMouseEnter={() => {
                setIndexHighlighted(index);
              }}
              onMouseLeave={() => {
                setIndexHighlighted(null);
              }}
            >
              <Experience
                {...experience}
                last={index === EXPERIENCES.length - 1}
                highlighted={index === indexHighlighted}
                faded={indexHighlighted !== null && index !== indexHighlighted}
              />
            </div>
          ))}
        </CardsContainer>
      </div>

      <div className={classes["view-resume-link-container"]}>
        <NextLink className={classes["view-resume-link"]} href="/CV-stephen_perrin.pdf">
          Voir le CV complet
          <Icon
            className={classes["view-resume-link-arrow"]}
            name="arrowTopRight"
            height={ARROW_ICON_SIZE}
            width={ARROW_ICON_SIZE}
          />
        </NextLink>
      </div>

      <div className={classes.education}>
        <CardsContainer setIndexHighlighted={setIndexHighlighted}>
          {EDUCATIONS.map((experience, index) => (
            <div
              key={index}
              className={CARD_CONTAINER_CLASSNAME}
              data-index={EXPERIENCES.length + index}
              onMouseEnter={() => {
                setIndexHighlighted(EXPERIENCES.length + index);
              }}
              onMouseLeave={() => {
                setIndexHighlighted(null);
              }}
            >
              <Experience
                {...experience}
                last={true}
                highlighted={EXPERIENCES.length + index === indexHighlighted}
                faded={indexHighlighted !== null && EXPERIENCES.length + index !== indexHighlighted}
              />
            </div>
          ))}
        </CardsContainer>
      </div>
    </BasePage>
  );
};

export default Experiences;
