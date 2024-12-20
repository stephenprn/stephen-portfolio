import classes from "./index.module.scss";
import Image from "next/image";
import stephenImage from "assets/stephen.png";
import { Icon, IconName } from "@/components/Icon";
import { Link } from "@/components/Link";

const SOCIAL_ITEMS: { name: IconName; link: string }[] = [
  {
    name: "malt",
    link: "https://www.malt.fr/profile/stephenperrin",
  },
  {
    name: "github",
    link: "https://github.com/stephenprn",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/stephen-perrin/",
  },
  {
    name: "CV",
    link: "/CV-stephen_perrin.pdf",
  },
  {
    name: "mail",
    link: "mailto:stephen.perrin.freelance@gmail.com",
  },
];

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={`${classes["header-left"]} left-part`}>
        <Image className={classes["stephen-image"]} src={stephenImage} priority={true} alt="Stephen Perrin" fill />
      </div>
      <div className={classes["header-right"]}>
        <div className={classes["header-right-top"]}>
          <h1 className={classes.title}>Stephen Perrin</h1>
          <h2 className={classes["sub-title"]}>Développeur full-stack freelance</h2>
          <ul className={classes["social-links"]}>
            {SOCIAL_ITEMS.map(({ name, link }) => (
              <li className={classes["social-item"]} key={name}>
                <Link
                  className={classes["social-link"]}
                  href={link}
                  showArrow={false}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                >
                  <Icon className={classes["social-link-icon"]} name={name} color="#ffffff" height={32} width={32} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes["header-right-bottom"]}>
          <p className={classes.summary}>
            Spécialisé sur les technologies <b>React / React native / Angular</b> en front-end et <b>Python / Node</b>{" "}
            en back-end.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
