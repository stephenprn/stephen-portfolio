import classes from "./index.module.scss";
import { Link } from "@/components/Link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const NAVIGATION_ITEMS = [
  { title: "À PROPOS", pathname: "/" },
  { title: "EXPÉRIENCES", pathname: "/experiences" },
  { title: "PROJETS", pathname: "/projects" },
] as const;

const NavigationBar: React.FC = () => {
  const currentPathname = usePathname();

  return (
    <nav className={`${classes["navigation-bar"]} left-part`}>
      <ul className={classes["navigation-bar-inner"]}>
        {NAVIGATION_ITEMS.map(({ title, pathname }) => (
          <li
            key={pathname}
            className={clsx(classes["navigation-item"], {
              [classes["active"]]: currentPathname === pathname,
            })}
          >
            <Link href={pathname} showArrow={false} className={classes["navigation-link"]}>
              <span className={classes["navigation-item-separator"]} />
              <span className={classes["navigation-link-title"]}>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
