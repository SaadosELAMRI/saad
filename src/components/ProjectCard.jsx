import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Project.module.css';

const ProjectCard = ({data}) => {
    return (
        <div className={styles.project}>
            <Link href={data.link} className={styles.link}>GO TO WEBSITE!</Link>
            <Image src={data.image} className={styles.projectImage} />
            <p className={styles.info}>{data.info}</p>
            <Link href={data.link} className={styles.link}>GO TO WEBSITE!</Link>
        </div>
    );
}

export default ProjectCard;
