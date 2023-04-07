import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Project.module.css';
import gestion1 from '../../../public/Meetease.png';
import gestion2 from '../../../public/meetease1.png';
import gestion3 from '../../../public/meetease2.png';
import gestion4 from '../../../public/meetease3.png';
import gestion5 from '../../../public/meetease4.png';
import Head from 'next/head';


//le component du projet gestionEtudiant
const Gestion = ({data}) => {
    return<>
    
    
        <div className={styles.project}>

            <Head>
                <title>Projet : Gestion des etudiants</title>

                <meta name="description" content="Projet Gestion des etudiants" />


         <meta property ="og:title" content="Portfolio | Projet Gestion des etudiants"  />
         <meta property ="og:description" content="Projet Gestion des etudiants"  />
         <meta property ="og:image" content="http://localhost:3000/meetease5.png"  />
            </Head>

            <Link href={""} className={styles.link}>GO TO WEBSITE!</Link>
            <Image src={gestion1} className={styles.projectImage} alt = "My application"/>
            <Image src={gestion2} className={styles.projectImage} alt = "My application"/>
            <Image src={gestion3} className={styles.projectImage} alt = "My application"/>
            <Image src={gestion4} className={styles.projectImage}alt = "My application" />
            <Image src={gestion5} className={styles.projectImage} alt = "My application"/>

            <p className={styles.info}>{"gestion des etudiants en C#"}</p>
            <Link href={""} className={styles.link}>GO TO WEBSITE!</Link>
        </div>
    </>;
}

export default Gestion;
