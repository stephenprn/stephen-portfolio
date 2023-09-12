import classes from './index.module.scss';
import Image from 'next/image'
import stephenImage from '../../assets/stephen.jpg'

const Header: React.FC = () => {
    return <header className={classes.header}>
        <div className={classes["header-left"]}>
            <Image
                className={classes["stephen-image"]}
                src={stephenImage}
                objectFit='contain'
                alt="Photo de Stephen Perrin"
                height={200}
                width={200}
            />
        </div>
        <div className={classes["header-right"]}>
            <div className={classes["header-right-top"]}>
                <h1 className={classes.title}>Stephen Perrin</h1>
                <h2 className={classes["sub-title"]}>Développeur fullstack</h2>
            </div>
            <div className={classes["header-right-bottom"]}>
                <p className={classes.summary}>J'interviens sur vos projets de développement frontend, backend ou les deux.</p>
            </div>
        </div>
    </header>;
}

export default Header;