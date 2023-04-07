import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Project.module.css';
import meetease1 from "../../../public/met1.png";
import meetease2 from "../../../public/met2.png";
import meetease3 from "../../../public/met3.png";
import Head from 'next/head';

////le component du projet gestionEtudiant

const Meetease = ({data}) => {
    return <>
   
        <div className={styles.project}>
            <Head>
                <title> Projet : Meetease</title>
                <meta name="description" content="Projet Meetease" />


             <meta property ="og:title" content="Meetease"  />
             <meta property ="og:description" content="Projet Meetease"  />
             <meta property ="og:image" content="http://localhost:3000/meetease2.png"  />


            </Head>





            <Link href={"https://saadoselamri.wixsite.com/singlespot"} className={styles.link}>GO TO WEBSITE!</Link>
            <Image src={meetease1} className={styles.projectImage} alt = "My application" />
            <Image src={meetease2} className={styles.projectImage} alt = "My application" />
            <Image src={meetease3} className={styles.projectImage}alt = "My application"  />
            <p className={styles.info}>{ "SingleSpot est un site de rencontres qui met en relation des personnes à la recherche de partenaires amoureux. Les utilisateurs peuvent créer un profil, télécharger des photos et rechercher des correspondances potentielles en fonction de leurs préférences. Le site Web peut également offrir des fonctionnalités telles que la messagerie, le chat instantané et les appels vidéo pour faciliter la communication entre les utilisateurs. Il vise à rendre le processus de recherche d'un partenaire plus pratique et efficace."}</p>
            <Link href={"https://saadoselamri.wixsite.com/singlespot"} className={styles.link}>GO TO WEBSITE!</Link>
        </div>
    </>;
}

export default Meetease;
