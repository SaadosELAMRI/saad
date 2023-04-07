import Accueil from '@/components/Accueil';
import Head from 'next/head';

export default function Home(props) {
  return <>

  <div>
    <Head>
        <title>Portfolio | Accueil</title>
        <meta name="description" content="Page d'accueil du portfolio de Saad EL-amri" />


        <meta property ="og:title" content="Portfolio | Accueil"  />
        <meta property ="og:description" content="Page d'accueil où vous pouvez trouver toutes renseignement à propos de Saad EL-amri "  />
        <meta property ="og:image" content="http://localhost:3000/logo.png"  />
    </Head>
    <Accueil /> 
  </div></>
}
