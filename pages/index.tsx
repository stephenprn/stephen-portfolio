import classes from "./index.module.scss";
import BasePage from "../components/BasePage";
import Link from "next/link";
import { Icon } from "@/components/Icon";

const Home: React.FC = () => {
  return (
    <BasePage>
      <div className="paragraphs-group">
        <p>
          Depuis 6 ans, je travaille sur des projets back-end et front-end en tant que <b>software engineer</b>.
        </p>
        <p>
          Je peux intervenir sur des projets de différents typologies, tailles et durées. J&apos;ai eu l&apos;occasion
          de travailler pour des start-ups en France ainsi que pour des clients à l&apos;international.
        </p>
        <p>
          En parallèle de mon activité professionnelle, j&apos;ai consacré du temps pour développer et lancer deux
          applications mobiles{" "}
          <Link className="link" href="/projects">
            disponibles ici <Icon className="link-icon" name="arrowTopRight" height="0.8rem" width="0.8rem" />
          </Link>
          .
        </p>
        <p>
          En 2023, j&apos;ai décidé de me lancer dans l&apos;<b>entrepreunariat</b>. Avec mon associée, nous avons lancé
          le plateforme{" "}
          <a className="link" href="https://hoppio.fr/" target="_blank" rel="noopener noreferrer">
            Hoppio <Icon className="link-icon" name="arrowTopRight" height="0.8rem" width="0.8rem" />
          </a>
          . Sur ce projet, je prends en charge le développement front-end, back-end et la gestion de
          l&apos;infrastructure.
        </p>
        <p>
          J&apos;accorde une grande importance au <b>clean code</b> qui permet une bonne maintenabilité et surtout une
          expérience optimale pour l&apos;utilisateur final.
        </p>
      </div>
    </BasePage>
  );
};

export default Home;
