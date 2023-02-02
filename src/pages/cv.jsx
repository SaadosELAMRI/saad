import Image from 'next/image';
import styles from '../styles/Cv.module.css';
import saad from "../../public/saad.png"
import CvData from '../components/CvData';
import Head from 'next/head';

const Cv = () => {
    return (
        <div className={styles.cv}>
            <Head>
                <title>Saad El Amri Cv</title>
                <meta name="description" content="Saad El Amri CV!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Image src={saad} alt="Saad El Amri Image" className={styles.avatar} />
            <span className={styles.monCV}>Mon CV</span>
            <span className={styles.secondaryText}>Expérience professionnelle</span>
            <CvData />
        </div>
    );
}

export default Cv;
