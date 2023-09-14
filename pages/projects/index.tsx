import classes from "./index.module.scss";
import { useState } from "react";
import BasePage from "../../components/BasePage";
import Project, { IProject } from "./project";
import optimumImage from "@/assets/projects/optimum.png";
import objectifsImage from "@/assets/projects/mes_objectifs.png";

const PROJECTS: IProject[] = [
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
      <div className="cards-list">
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
    </BasePage>
  );
};

export default Projects;
