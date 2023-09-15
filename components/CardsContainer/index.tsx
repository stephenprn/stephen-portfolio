import { CARD_CONTAINER_CLASSNAME, TABLET_BREAKPOINT } from "@/constants";
import { useState, useEffect } from "react";
import classes from "./index.module.scss";

interface CardsContainerProps {
  setIndexHighlighted: (index: number | null) => void;
  children: React.ReactNode;
}

const CardsContainer: React.FC<CardsContainerProps> = ({ setIndexHighlighted, children }) => {
  useEffect(() => {
    if (window.screen.width > TABLET_BREAKPOINT) {
      return;
    }

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

        if (distanceFromTop < 0) {
          setIndexHighlighted(indexExperience === experiencesContainer.length ? null : indexExperience + 1);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIndexHighlighted]);

  return <div className={`${classes["card-container"]}`}>{children}</div>;
};

export default CardsContainer;
