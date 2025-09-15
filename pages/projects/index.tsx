import classes from "./index.module.scss";
import { useState } from "react";
import BasePage from "@/components/BasePage";
import toBeClothesImage from "@/assets/projects/tobeclothes.webp";
import optimumImage from "@/assets/projects/optimum.png";
import dicoQuizImage from "@/assets/projects/dicoquiz.png";
import objectifsImage from "@/assets/projects/mes_objectifs.png";
import hoppioImage from "@/assets/projects/hoppio.png";
import CardsContainer from "@/components/CardsContainer";
import { Link } from "@/components/Link";
import Project, { IProject } from "@/components/Project";
import { CARD_CONTAINER_CLASSNAME } from "@/constants";

const PROJECTS: IProject[] = [
  {
    title: "To Be Clothes",
    link: "https://apps.apple.com/fr/app/to-be-clothes/id6740776697",
    description: [
      "Plateforme conviviale pour organiser des vide-dressings entre mamans dans votre quartier.",
      "To Be Clothes transforme la vente de vêtements de seconde main en moments de partage authentiques et responsables.",
    ],
    type: "ios",
    image: toBeClothesImage,
  },
  {
    title: "Hoppio",
    description: [
      "Plateforme inspirationnelle pour trouver des destinations accessibles en train partout en France.",
      "Hoppio vous propose des itinéraires en fonction de vos envies (vélo, montagne, culture, plage,...).",
    ],
    link: "https://www.linkedin.com/company/hoppio-fr/",
    type: "web",
    image: hoppioImage,
  },
  {
    title: "DicoQuiz",
    description: [
      "Application mobile pour apprendre une nouvelle langue.",
      "Création de dictionnaires personnalisés et test de connaissances avec des quizzes",
    ],
    link: "https://play.google.com/store/apps/details?id=com.stephenprn.dicoquiz",
    type: "android",
    image: dicoQuizImage,
  },
  {
    title: "Optimum",
    description: [
      "Application mobile permettant de monitorer vos habitudes au quotidien de manière personnalisée.",
      "Création de nouvelles routines saines afin de réduire vos mauvaises habitudes.",
    ],
    link: "https://play.google.com/store/apps/details?id=com.stephenprn.habits&hl=fr",
    type: "android",
    image: optimumImage,
  },
  {
    title: "Mes objectifs",
    description: ['Application mobile style "to-do list" pour le suivi de vos objectifs au quotidien.'],
    link: "https://play.google.com/store/apps/details?id=com.stephenprn.objectifs&hl=fr",
    type: "android",
    image: objectifsImage,
  },
];

const Projects: React.FC = () => {
  const [indexHighlighted, setIndexHighlighted] = useState<number | null>(null);

  return (
    <BasePage>
      <div>
        <CardsContainer setIndexHighlighted={setIndexHighlighted}>
          {PROJECTS.map((project, index) => (
            <div
              className={CARD_CONTAINER_CLASSNAME}
              data-index={index}
              onMouseEnter={() => setIndexHighlighted(index)}
              onMouseLeave={() => setIndexHighlighted(null)}
              key={index}
            >
              <Project
                highlighted={index === indexHighlighted}
                faded={indexHighlighted !== null && index !== indexHighlighted}
                {...project}
              />
            </div>
          ))}
        </CardsContainer>

        <div className={`${classes["projects-paragraphs-group"]} paragraphs-group`}>
          <p>
            Le code source de certains de mes projets est disponible sur mon{" "}
            <Link href="https://github.com/stephenprn" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </p>
        </div>
      </div>
    </BasePage>
  );
};

export default Projects;
