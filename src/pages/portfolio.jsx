import Head from 'next/head';
import styles from '../styles/Portfolio.module.css';
import PortfolioCard from '../components/PortfolioCard';
import { data } from "../constants/data";


const Portfolio = () => {
    return (
        <div className={styles.portfolio}>
            <Head>
                <title>Saad El Amri | Portfolio</title>
                <meta name="description" content="Saad El Amri CV!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {
                data.map((val, idx, arr) => (<PortfolioCard key={idx} item={val} />))
            }
        </div>
    );
}

export default Portfolio;
