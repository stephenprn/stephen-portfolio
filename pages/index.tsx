import BasePage from "@/components/BasePage";
import { Link } from "@/components/Link";
import { differenceInYears } from "date-fns";

const DEV_START_DATE = new Date(2016, 7, 1);
const DEV_START_YEARS_AGO = differenceInYears(new Date(), DEV_START_DATE);

const Home: React.FC = () => {
  return (
    <BasePage>
      <div className="paragraphs-group">
        <p>
          <b>Développeur lead/senior full-stack</b> avec {DEV_START_YEARS_AGO} années d&apos;expérience couvrant le{" "}
          <b>développement</b> (Python, React, TypeScript), le <b>DevOps/déploiement</b> (Docker, infrastructure) et{" "}
          l&apos;<b>analyse de données</b>. J&apos;accompagne start-ups et entreprises dans la conception de solutions
          complètes, de la donnée à la production.
        </p>
        <p>
          Je peux intervenir sur des projets de différentes typologies, tailles et durées. J&apos;ai eu l&apos;occasion
          de travailler pour des start-ups en France ainsi que pour des clients à l&apos;international.
        </p>
        <p>
          En parallèle de mon activité professionnelle, j&apos;ai consacré du temps pour développer et lancer des
          applications mobiles <Link href="/projects">disponibles ici</Link>.
        </p>
        <p>
          En 2023, j&apos;ai décidé de me lancer dans l&apos;<b>entrepreneuriat</b>. Avec mon associée, nous avons lancé
          la plateforme{" "}
          <Link href="https://www.linkedin.com/company/hoppio-fr/" target="_blank" rel="noopener noreferrer">
            Hoppio
          </Link>
          . Sur ce projet, je prends en charge le développement front-end, back-end et la gestion de
          l&apos;infrastructure.
        </p>
        <p>
          Depuis janvier 2024, je développe l&apos;intégralité de l&apos;application de la startup d&apos;État{" "}
          <Link href="https://aigle.beta.gouv.fr/#/accueil" target="_blank" rel="noopener noreferrer">
            Aigle
          </Link>{" "}
          : architecture front-end, back-end, infrastructure et pipelines de données, entièrement conçue from scratch.
          Ce projet <Link href="https://github.com/MTES-MCT?q=aigle">open-source</Link> aide à la détection des
          constructions illégales pour préserver les espaces naturels.
        </p>
        <p>
          Mon approche privilégie le <b>clean code</b>, l&apos;architecture scalable et l&apos;expérience utilisateur,
          pour des solutions robustes et maintenables.
        </p>
      </div>
    </BasePage>
  );
};

export default Home;
