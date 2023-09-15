import { useEffect, useRef } from "react";
import classes from "./index.module.scss";
import BasePageHeader from "../Header";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
import { TABLET_BREAKPOINT } from "@/constants";

interface BasePageProps {
  children: React.ReactNode;
}

const BasePage: React.FC<BasePageProps> = ({ children }) => {
  const maskRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.screen.width <= TABLET_BREAKPOINT) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (!maskRef?.current) {
        return;
      }

      // Calculate mouse position in percentages.
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;

      // Update the custom property values on the body.
      maskRef.current.style.setProperty("--mouse-x", x + "%");
      maskRef.current.style.setProperty("--mouse-y", y + "%");
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className={classes["base-page-container"]}>
      <div className={classes["spotlight-mask"]} ref={maskRef}></div>
      <div className={classes["base-page"]}>
        <BasePageHeader />
        <main className={classes["base-page-main"]}>
          <div className={classes["base-page-navigation-bar-container"]}>
            <NavigationBar />
          </div>

          <div className={classes["base-page-content"]}>
            {children}
            <div className={classes["base-page-content-footer-container"]}>
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BasePage;
