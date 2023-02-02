import styles from '../styles/Menu.module.css';
export default function Menu(props) {
    return (<nav className={styles.menu}>
        <ul className={styles.list}>
            <li className={styles.listItem} onClick={() => props.setPage("acceuil")}>Accueil</li>
            <li className={styles.listItem} onClick={() => props.setPage("propos")}>À Propos</li>
            <li className={styles.listItem} onClick={() => props.setPage("cv")}>CV</li>
            <li className={styles.listItem} onClick={() => props.setPage("portfolio")}>Portfolio</li>
        </ul>
    </nav>)
}