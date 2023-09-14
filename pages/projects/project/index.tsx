import { Icon, IconName } from "@/components/Icon";
import classes from "./index.module.scss";
import Card, { CardProps } from "@/components/Card";
import Image, { StaticImageData } from "next/image";

const PROJECT_TYPES_MAP: {
  [key: string]: {
    icon: IconName;
    label: string;
  };
} = {
  android: {
    icon: "android",
    label: "Application Android",
  },
};

export interface IProject {
  title: string;
  description: string[];
  image: StaticImageData;
  link?: string;
  type?: "android";
}

interface ProjectProps extends IProject, CardProps {}

const Project: React.FC<ProjectProps> = ({ title, description, link, image, highlighted, faded, type }) => {
  return (
    <Card highlighted={highlighted} faded={faded} link={link}>
      <div className={classes["project-inner"]}>
        <Image src={image} alt={`${title} image`} height={100} />
        <div className={classes["project-content"]}>
          <h3>
            {link ? (
              <a className="link" href={link} target="_blank" rel="noopener noreferrer">
                {title} <Icon className="link-icon" name="arrowTopRight" height="1.2rem" width="1.2rem" />
              </a>
            ) : (
              <>{title}</>
            )}
          </h3>
          {type ? (
            <p className={classes["project-type"]}>
              <Icon
                className={classes["project-type-icon"]}
                name={PROJECT_TYPES_MAP[type].icon}
                height="0.8rem"
                width="0.8rem"
              />
              {PROJECT_TYPES_MAP[type].label}
            </p>
          ) : null}
          <div className={classes["project-description-container"]}>
            {(description || []).map((paragraph, index) => (
              <p className={classes["project-description-paragraph"]} key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Project;
