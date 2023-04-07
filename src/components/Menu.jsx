import styles from '../styles/Menu.module.css';
import Link  from 'next/link';
export default function Menu() {
    return (<nav className={styles.menu}>
        <ul className={styles.list}>
            <Link style={{textDecoration:"none"}} href="/" ><li className={styles.listItem} >Acceuil</li></Link>
            <Link style={{textDecoration:"none"}} href="propos" ><li className={styles.listItem} >A propos</li></Link>
            <Link style={{textDecoration:"none"}} href="cv" ><li className={styles.listItem} >CV</li></Link>
            <Link style={{textDecoration:"none"}} href="portfolio" ><li className={styles.listItem} >Portfolio</li></Link>
            <Link style={{textDecoration:"none"}} href="forms" ><li className={styles.listItem} >Formulaire</li></Link>
        </ul>
    </nav>)
}
