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
          Depuis <b>{DEV_START_YEARS_AGO} ans</b>, je travaille sur des projets back-end et front-end en tant que{" "}
          <b>software engineer</b>.
        </p>
        <p>
          Je peux intervenir sur des projets de différentes typologies, tailles et durées. J&apos;ai eu l&apos;occasion
          de travailler pour des start-ups en France ainsi que pour des clients à l&apos;international.
        </p>
        <p>
          En parallèle de mon activité professionnelle, j&apos;ai consacré du temps pour développer et lancer deux
          applications mobiles <Link href="/projects">disponibles ici</Link>.
        </p>
        <p>
          En 2023, j&apos;ai décidé de me lancer dans l&apos;<b>entrepreunariat</b>. Avec mon associée, nous avons lancé
          le plateforme{" "}
          <Link href="https://hoppio.fr/" target="_blank" rel="noopener noreferrer">
            Hoppio
          </Link>
          . Sur ce projet, je prends en charge le développement front-end, back-end et la gestion de
          l&apos;infrastructure.
        </p>
        <p>
          En janvier 2024, je suis devenu freelance en rejoignant la startup d&apos;état{" "}
          <Link href="https://beta.gouv.fr/startups/aigle.html" target="_blank" rel="noopener noreferrer">
            Aigle
          </Link>{" "}
          qui développe un outil d&apos;aide à la détection des constructions illégales{" "}
          <b>pour préserver les espaces agricoles, naturels et forestiers.</b>
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
