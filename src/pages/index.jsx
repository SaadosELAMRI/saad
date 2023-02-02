import Accueil from '@/components/Accueil';
import Head from 'next/head';
import Cv from './cv';
import Portfolio from './portfolio';
import Propos from './propos';

export default function Home(props) {
  const page = props.page;
  return (
  <div>
    <Head>
        <title>Saad El Amri</title>
        <meta name="description" content="Saad El Amri Official Site!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    { page == "acceuil" ? <Accueil /> : page == "cv" ? <Cv /> : page == "portfolio" ? <Portfolio /> : page == "propos" ? <Propos /> : false }
  </div>)
}
