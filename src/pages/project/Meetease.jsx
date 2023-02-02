import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Project.module.css';
import meetease1 from "../../../public/meetease1.png";
import meetease2 from "../../../public/meetease2.png";
import meetease3 from "../../../public/meetease3.png";
import meetease4 from "../../../public/meetease4.png";
import meetease5 from "../../../public/meetease5.png";
const Meetease = ({data}) => {
    return (
        <div className={styles.project}>
            <Link href={"https://saadoselamri.wixsite.com/singlespot"} className={styles.link}>GO TO WEBSITE!</Link>
            <Image src={meetease1} className={styles.projectImage} />
            <Image src={meetease2} className={styles.projectImage} />
            <Image src={meetease3} className={styles.projectImage} />
            <Image src={meetease4} className={styles.projectImage} />
            <Image src={meetease5} className={styles.projectImage} />
            <p className={styles.info}>{ "SingleSpot est un site de rencontres qui met en relation des personnes à la recherche de partenaires amoureux. Les utilisateurs peuvent créer un profil, télécharger des photos et rechercher des correspondances potentielles en fonction de leurs préférences. Le site Web peut également offrir des fonctionnalités telles que la messagerie, le chat instantané et les appels vidéo pour faciliter la communication entre les utilisateurs. Il vise à rendre le processus de recherche d'un partenaire plus pratique et efficace."}</p>
            <Link href={"https://saadoselamri.wixsite.com/singlespot"} className={styles.link}>GO TO WEBSITE!</Link>
        </div>
    );
}

export default Meetease;
