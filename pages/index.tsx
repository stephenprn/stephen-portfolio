import classes from './index.module.scss';
import BasePage from '../components/BasePage';
import Link from 'next/link';
import { Icon } from '@/components/Icon';

const Home: React.FC = () => {
    return <BasePage>
        <div className={classes['presentation-container']}>
        <p className={classes['presentation-paragraph']}>
            Je suis développeur web <b>full stack</b> depuis 6 ans maintenant. Je suis spécialisé sur les technologies <b>React / React native / Angular</b> pour le front et <b>Python / Node</b> pour le back.
        </p>
        <p className={classes['presentation-paragraph']}>
            Je peux intervenir sur différents type de projets, plus ou moins complexes car j&apos;ai eu l&apos;occasion de travailler sur des projets très variés dans des start-up de différentes tailles. J&APOS;ai également développé des applications mobiles en tant que projets personnels disponibles <Link className={classes["presentation-link"]} href="/projects">ici <Icon name="arrowTopRight" height="0.8rem" width="0.8rem" /></Link>.
        </p>
        <p className={classes['presentation-paragraph']}>
            Le dernier projet sur lequel j&apos;ai travaillé est la plateforme <b>Hoppio</b> où j&apos;ai pris en charge toute la partie technique (développement frontend, backend, infrastructure,...) disponible <a className={classes["presentation-link"]} href='https://hoppio.fr/' target='_blank' rel="noopener noreferrer">ici <Icon name="arrowTopRight" height="0.8rem" width="0.8rem" /></a>.
        </p>
        <p className={classes['presentation-paragraph']}>
            J&APOS;accorde une grande importance à faire du <b>clean code</b> qui permet une bonne maintenabilité et surtout une expérience qui soit la meilleure possible pour l&apos;utilisateur final.
        </p>
        </div>
    </BasePage>;
}

export default Home;