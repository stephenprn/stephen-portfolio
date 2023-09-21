import { Icon } from "../Icon";
import { Link } from "@/components/Link";
import classes from "./index.module.scss";
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const pathname = usePathname();

  return (
    <footer className={classes.footer}>
      <div className={`${classes["footer-paragraphs-group"]} paragraphs-group`}>
        <p>
          Ce portfolio a été réalisé en{" "}
          <Link className="link" title={"React"} href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            React
          </Link>{" "}
          et{" "}
          <Link className="link" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            Next.js
          </Link>{" "}
          et hébergé chez{" "}
          <Link className="link" href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
            Vercel
          </Link>
        </p>

        <p>
          Vous pouvez retrouver le code source{" "}
          <Link
            className="link"
            href="https://github.com/stephenprn/stephen-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            sur GitHub
          </Link>
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
