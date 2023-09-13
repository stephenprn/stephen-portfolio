import { Icon } from '@/components/Icon';
import classes from './index.module.scss';
import clsx from 'clsx';
import { format } from 'date-fns';
import Card, { CardProps } from '@/components/Card';

interface ExperienceDates {
    start: Date;
    end?: Date;
}

export interface IExperience {
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
    title,
    link,
    role,
    location,
    summary,
    skills,
    dates,
    last,
    highlighted,
    faded
}) => {
    return <div className={clsx(classes.experience, {
        [classes.last]: last
    })}> <Card highlighted={highlighted} faded={faded} link={link}>
        <h3 className={classes.title}>
            {link ? <a className="title-link" href={link} target='_blank' rel="noopener noreferrer">{title}</a> : <>{title}</>}
        </h3>
        <p className={classes.role}>{role}</p>
        <div className={classes['location-dates-container']}>
            <p className={classes["location-date"]}>
                <Icon name="location" className={classes["icon"]} height="1rem" width="1rem" /> {location}
            </p>

            {dates ? <p className={classes["location-date"]}>
                <Icon name="calendar" className={classes["icon"]} height="1rem" width="1rem" /> {
                    format(dates.start, 'MMM yyyy')
                } — {
                    dates.end ? format(dates.end, 'MMM yyyy') : 'auj.'
                }
            </p>: null}
        </div>
        <div className={classes["summary-container"]}>
            {(summary || []).map((paragraph, index) => (
                <p key={index} className={classes["summary-paragraph"]}>{paragraph}</p>
            ))}
        </div>
        <ul className={classes.skills}>
            {(skills || []).map((skill, index) => (
                <li key={index} className={classes.skill}>
                    <div className={classes["skill-inner"]}>{skill}</div>
                </li>
            ))}
        </ul>
    </Card></div>;
}

export default Experience;