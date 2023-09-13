import classes from './index.module.scss';
import Link from 'next/link'
import clsx from 'clsx';
import { usePathname } from 'next/navigation'


const NAVIGATION_ITEMS = [
    { title: 'Accueil', pathname: '/' },
    { title: 'Expériences', pathname: '/experiences' },
    { title: 'Projets', pathname: '/projects' },
] as const;

const NavigationBar: React.FC = () => {
    const currentPathname = usePathname()

    return <nav className={classes['navigation-bar']}>
        <ul>
            {
                NAVIGATION_ITEMS.map(({ title, pathname }) => (
                    <li key={pathname} className={clsx(classes['navigation-item'], {
                        [classes['active']]: currentPathname === pathname
                    })}>
                        <span className={classes['navigation-item-separator']} />
                        <Link className={classes["navigation-link"]} href={pathname}>{title}</Link>
                    </li>
                ))
            }
        </ul>
    </nav>
}

export default NavigationBar;