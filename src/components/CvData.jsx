import styles from '../styles/CvData.module.css';
const CvData = () => {
    return (
        <div className={styles.grid}>
            <div className={styles.job}>Etudiant</div>
            <div className={styles.duration}>Janvier 2022 - 2023</div>
            <div className={styles.jobText}>Jeune étudiant marocain, titulaire d'un diplôme d'études secondaires en science mathématique,, j'étudie actuellement au Collège  à Ottawa, section programmation informatique, je cherche un emploi à temps partiel pour acquérir l'expérience canadienne, m'intégrer et gagner un peu d'argent . Je suis par nature sociable, j'aime le mouvement et le travail.</div>
            <div className={styles.job}>Sales associate </div>
            <div className={styles.duration}>Sept 2022 - Dec 2022</div>
            <div className={styles.jobText}>
                <ul className={styles.list}>
                    <li>
                        Accueil des clients.
                    </li>
                    <li>
                        Diriger et aider les clients vers les marchandises.
                    </li>
                    <li>
                        Maintenir un bon aspect du sol.
                    </li>
                </ul>
            </div>
            
        </div>
    );
}

export default CvData;
