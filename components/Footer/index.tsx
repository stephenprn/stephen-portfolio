import Link from "next/link";
import { Icon } from "../Icon";
import classes from "./index.module.scss";
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const pathname = usePathname();

  return (
    <footer className={classes.footer}>
      <div className={`${classes["footer-paragraphs-group"]} paragraphs-group`}>
        <p>
          Ce portfolio a été réalisé en{" "}
          <a className="link" href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            React <Icon className="link-icon" name="arrowTopRight" height="0.8rem" width="0.8rem" />
          </a>{" "}
          et{" "}
          <a className="link" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            Next.js <Icon className="link-icon" name="arrowTopRight" height="0.8rem" width="0.8rem" />
          </a>{" "}
          et herbergé chez{" "}
          <a className="link" href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
            Vercel <Icon className="link-icon" name="arrowTopRight" height="0.8rem" width="0.8rem" />
          </a>
        </p>

        <p>
          Vous pouvez retrouver le code source{" "}
          <a
            className="link"
            href="https://github.com/stephenprn/stephen-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            sur GitHub <Icon className="link-icon" name="arrowTopRight" height="0.8rem" width="0.8rem" />
          </a>
        </p>

        <button className={classes["scroll-top-button"]} onClick={() => window.scrollTo({ top: 0 })}>
          <div className={classes["scroll-top-button-inner"]}>
            <Icon className={classes["scroll-top-button-icon"]} name="chevronTop" height="2rem" width="2rem" />
            Retour en haut
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
