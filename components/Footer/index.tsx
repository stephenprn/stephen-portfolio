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
            ici <Icon className="link-icon" name="arrowTopRight" height="0.8rem" width="0.8rem" />
          </a>
        </p>

        <p className={classes["scroll-top-paragraph"]}>
          <Link
            className={`${classes["scroll-top-link"]} link`}
            href={pathname}
            onClick={() => window.scrollTo({ top: 0 })}
          >
            <Icon className={classes["scroll-top-link-icon"]} name="chevronTop" height="2rem" width="2rem" />
            Retour en haut
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
