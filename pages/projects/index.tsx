import classes from "./index.module.scss";
import { useState } from "react";
import BasePage from "../../components/BasePage";
import Project, { IProject } from "./project";
import optimumImage from "@/assets/projects/optimum.png";
import objectifsImage from "@/assets/projects/mes_objectifs.png";
import hoppioImage from "@/assets/projects/hoppio.png";
import { Icon } from "@/components/Icon";

const PROJECTS: IProject[] = [
  {
    title: "Hoppio",
    description: [
      "Plateforme permettant de trouver des destinations en fonction des envies de l'utilisateur (par exemple le thème : vélo, montagne, culture, plage,…) accessibles en train.",
    ],
    link: "https://hoppio.fr/",
    type: "web",
    image: hoppioImage,
  },
  {
    title: "Optimum",
    description: ["Application permettant de suivre ses habitudes et créer des routines au quotidien."],
    link: "https://play.google.com/store/apps/details?id=com.stephenprn.habits&hl=fr",
    type: "android",
    image: optimumImage,
  },
  {
    title: "Mes objectifs",
    description: ["Application permettant de se fixer des objectifs au quotidien."],
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
        <div className={`${classes["projects-list"]} cards-list`}>
          {PROJECTS.map((project, index) => (
            <div
              className="project-container"
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
        </div>

        <div className={`${classes["projects-paragraphs-group"]} paragraphs-group`}>
          <p>
            Le code source de certains de mes projets est disponible sur mon{" "}
            <a className="link" href="https://github.com/stephenprn" target="_blank" rel="noopener noreferrer">
              GitHub <Icon className="link-icon" name="arrowTopRight" height="0.8rem" width="0.8rem" />
            </a>
          </p>
        </div>
      </div>
    </BasePage>
  );
};

export default Projects;
