import { CARD_CONTAINER_CLASSNAME, TABLET_BREAKPOINT } from "@/constants";
import classes from "./index.module.scss";
import { useEffect } from "react";

interface CardsContainerProps {
  setIndexHighlighted: (index: number | null) => void;
  children: React.ReactNode;
}

const CardsContainer: React.FC<CardsContainerProps> = ({ setIndexHighlighted, children }) => {
  useEffect(() => {
    if (window.screen.width > TABLET_BREAKPOINT) {
      return;
    }
    const cardsContainer = document.getElementsByClassName(CARD_CONTAINER_CLASSNAME);
    let highlightedTimeout: number | null = null;

    const handleScroll = () => {
      if (highlightedTimeout) {
        return;
      }

      highlightedTimeout = window.setTimeout(() => {
        for (const cardContainer of Array.from(cardsContainer).reverse()) {
          if (!(cardContainer instanceof HTMLElement)) {
            return;
          }

          const distanceFromTop = document.body.scrollTop + cardContainer.getBoundingClientRect().top;
          const indexExperience = parseInt(cardContainer.dataset.index || "0", 10);

          if (indexExperience === 0 && distanceFromTop > 0 && distanceFromTop > window.screen.height / 4) {
            setIndexHighlighted(null);
            break;
          }

          if (indexExperience === 0 && distanceFromTop > 0 && distanceFromTop < window.screen.height / 4) {
            setIndexHighlighted(0);
            break;
          }

          if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 100) {
            setIndexHighlighted(cardsContainer.length - 1);
            break;
          }

          if (distanceFromTop < 0) {
            setIndexHighlighted(indexExperience === cardsContainer.length - 1 ? null : indexExperience + 1);
            break;
          }
        }

        highlightedTimeout = null;
      }, 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIndexHighlighted]);

  return <div className={`${classes["cards-container"]}`}>{children}</div>;
};

export default CardsContainer;
