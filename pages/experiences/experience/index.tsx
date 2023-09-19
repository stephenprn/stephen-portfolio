import { Icon, IconName } from "@/components/Icon";
import classes from "./index.module.scss";
import clsx from "clsx";
import { format } from "date-fns";
import Card, { CardProps } from "@/components/Card";

interface ExperienceDates {
  start: Date;
  end?: Date;
}

export interface IExperience {
  icon?: IconName;
  title: string;
  link?: string;
  role: string;
  location: string;
  summary: string[];
  skills: string[];
  dates: ExperienceDates;
}

interface ExperienceProps extends IExperience, CardProps {
  last: boolean;
}

const Experience: React.FC<ExperienceProps> = ({
  icon,
  title,
  link,
  role,
  location,
  summary,
  skills,
  dates,
  last,
  highlighted,
  faded,
}) => {
  return (
    <div
      className={clsx(classes.experience, {
        [classes.last]: last,
        [classes.highlighted]: highlighted,
        [classes.faded]: faded,
        [classes["has-icon"]]: !!icon,
      })}
    >
      <Card highlighted={highlighted} faded={faded} link={link}>
        {icon ? (
          <Icon name={icon} className={clsx(classes["experience-icon"])} height={24} width={24} color="#ffffff" />
        ) : null}
        <h3 className={classes.title}>
          {link ? (
            <a
              className={clsx("link", {
                active: highlighted,
              })}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title} <Icon className="link-icon" name="arrowTopRight" height="1.2rem" width="1.2rem" />
            </a>
          ) : (
            <>{title}</>
          )}
        </h3>
        <p className={classes.role}>{role}</p>
        <div className={classes["location-dates-container"]}>
          <p className={classes["location-date"]}>
            <Icon name="location" className={classes["icon"]} height="1rem" width="1rem" /> {location}
          </p>

          {dates ? (
            <p className={classes["location-date"]}>
              <Icon name="calendar" className={classes["icon"]} height="1rem" width="1rem" />{" "}
              {format(dates.start, "MMM yyyy")} — {dates.end ? format(dates.end, "MMM yyyy") : "auj."}
            </p>
          ) : null}
        </div>
        <div className={classes["summary-container"]}>
          {(summary || []).map((paragraph, index) => (
            <p key={index} className={classes["summary-paragraph"]}>
              {paragraph}
            </p>
          ))}
        </div>
        <ul className={classes.skills}>
          {(skills || []).map((skill, index) => (
            <li key={index} className={classes.skill}>
              <div className={classes["skill-inner"]}>{skill}</div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Experience;
