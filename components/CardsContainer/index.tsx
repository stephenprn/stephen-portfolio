import { CARD_CONTAINER_CLASSNAME, TABLET_BREAKPOINT } from "@/constants";
import classes from "./index.module.scss";
import { useScrollListener } from "@/utils";

interface CardsContainerProps {
  setIndexHighlighted: (index: number | null) => void;
  children: React.ReactNode;
}

const CardsContainer: React.FC<CardsContainerProps> = ({ setIndexHighlighted, children }) => {
  const handleScroll = () => {
    const experiencesContainer = document.getElementsByClassName(CARD_CONTAINER_CLASSNAME);

    for (const experienceContainer of Array.from(experiencesContainer).reverse()) {
      if (!(experienceContainer instanceof HTMLElement)) {
        return;
      }

      const distanceFromTop = document.body.scrollTop + experienceContainer.getBoundingClientRect().top;
      const indexExperience = parseInt(experienceContainer.dataset.index || "0", 10);

      if (indexExperience === 0 && distanceFromTop > 0 && distanceFromTop > window.screen.height / 4) {
        setIndexHighlighted(null);
        break;
      }

      if (indexExperience === 0 && distanceFromTop > 0 && distanceFromTop < window.screen.height / 4) {
        setIndexHighlighted(0);
        break;
      }

      if (distanceFromTop < 16) {
        setIndexHighlighted(indexExperience === experiencesContainer.length ? null : indexExperience + 1);
        break;
      }
    }
  };

  let elementToListen: Window | null = null;

  if (typeof window !== "undefined" && window.screen.width <= TABLET_BREAKPOINT) {
    elementToListen = window;
  }

  useScrollListener(elementToListen, handleScroll);

  return <div className={`${classes["cards-container"]}`}>{children}</div>;
};

export default CardsContainer;
