import Form from '@/components/Form';
import Head from 'next/head';

export default function forms() {
  return <>

  <div>
    <Head>
        <title>Portfolio | Formulaire</title>
        <meta name="description" content="Formulaire pour (me) contacter Saad EL-amri" />
        <meta property ="og:title" content="Portfolio | Formulaire"  />
        <meta property ="og:description" content="Contacter Saad EL-amri en utilisant en donnant votre Nom, Prenom, Email et ecrivant un Message pour lui!"  />
        <meta property ="og:image" content="http://localhost:3000/logo.png"  />
    </Head>
    <section>
        <Form/>
    </section>

  </div></>
}
