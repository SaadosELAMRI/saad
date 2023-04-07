import Head from 'next/head';
import styles from '../styles/Propos.module.css';

const Propos = () => {
    return (
        <div className={styles.propos}>
            <Head>
            <title>Portfolio | À propos</title>
        <meta name="description" content="Un resume de moi" />

        <meta property ="og:title" content="Portfolio | A propos"  />
        <meta property ="og:description" content="Les informations clés sur l'expérience professionnelle, les compétences et la formation de Saad EL-amri"  />
        <meta property ="og:image" content="http://localhost:3000/logo.png"  />
            </Head>
            <span className={styles.title}>À propos de moi</span>
            <p className={styles.text}>
                Depuis le début de ma carrière, je me suis concentré à canaliser mon talent et ma créativité vers des résultats significatifs et puissants. Je suis fier du travail que je fais, ainsi que des relations solides que j&apos;ai établies avec mes clients et mes collègues. Je crois fermement qu&apos;il faut travailler dur, travailler ensemble et s&apos;amuser en cours de route. Si vous souhaitez en savoir plus sur moi ou mon travail, contactez-moi simplement.
            </p>
        </div>
    );
}

export default Propos;
