import Head from 'next/head';
import styles from '../styles/Propos.module.css';

const Propos = () => {
    return (
        <div className={styles.propos}>
            <Head>
                <title>À propos de Saad El Amri</title>
                <meta name="description" content="Saad El Amri Official Site!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <span className={styles.title}>À propos de Saad El Amri</span>
            <p className={styles.text}>
                Depuis le début de ma carrière, je me suis concentré à canaliser mon talent et ma créativité vers des résultats significatifs et puissants. Je suis fier du travail que je fais, ainsi que des relations solides que j'ai établies avec mes clients et mes collègues. Je crois fermement qu'il faut travailler dur, travailler ensemble et s'amuser en cours de route. Si vous souhaitez en savoir plus sur moi ou mon travail, contactez-moi simplement.
            </p>
        </div>
    );
}

export default Propos;
