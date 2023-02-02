
import Link from 'next/link';
import styles from '../../styles/Project.module.css';

const Gestion = ({data}) => {
    return (
        <div className={styles.project}>
            <Link href={""} className={styles.link}>GO TO WEBSITE!</Link>
            <p className={styles.info}>{""}</p>
            <Link href={""} className={styles.link}>GO TO WEBSITE!</Link>
        </div>
    );
}

export default Gestion;
