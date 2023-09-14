import clsx from "clsx";
import classes from "./index.module.scss";

export interface CardProps {
  link?: string;
  highlighted: boolean;
  faded: boolean;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ link, highlighted, faded, children }) => {
  return (
    <div
      className={clsx(`${classes.card} card`, {
        [classes.clickable]: !!link,
        [classes.highlighted]: highlighted,
        [classes.faded]: faded,
      })}
      onClick={(event) => {
        if (!link) {
          return;
        }

        window.open(link, "_blank", "noopener noreferrer");
        event.stopPropagation();
      }}
    >
      {children}
    </div>
  );
};

export default Card;
