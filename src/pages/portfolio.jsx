import Head from 'next/head';
import styles from '../styles/Portfolio.module.css';
import PortfolioCard from '../components/PortfolioCard';
import { data } from "../constants/data";


const Portfolio = (props) => {
    return <>
        <div className={styles.portfolio}>
            <Head>
            <title>Portfolio | Projet</title>
        <meta name="description" content="Page projet" />


        <meta property ="og:title" content="Portfolio | Projet"  />
        <meta property ="og:description" content="Presentation de quelques projet realisés par Saad El-amri"  />
        <meta property ="og:image" content="http://localhost:3000/Meetease.png"  />
            </Head>
            {
                data.map((val, idx, arr) => (<PortfolioCard setPage={props.setPage} key={idx} item={val} />))
            }
        </div>
    </>;
}

export default Portfolio;
