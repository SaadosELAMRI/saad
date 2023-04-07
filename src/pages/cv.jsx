import Image from 'next/image';
import styles from '../styles/Cv.module.css';
import saad from "../../public/saad.png"
import CvData from '../components/CvData';
import Head from 'next/head';

const Cv = () => {
    return (
        <div className={styles.cv}>
            <Head>
            <title>Portfolio | CV</title>
        <meta name="description" content="CV de Saad El Amri" />


        <meta property ="og:title" content="Portfolio | CV"  />
        <meta property ="og:description" content="L'expérience professionnelle et la formation de Saad El-amri"  />
        <meta property ="og:image" content="http://localhost:3000/saad.png"  />
            </Head>
            <Image src={saad} alt="Saad El Amri Image" className={styles.avatar} />
            <span className={styles.monCV}>Mon CV</span>
            <span className={styles.secondaryText}>Expérience professionnelle</span>
            <CvData />
        </div>
    );
}

export default Cv;
