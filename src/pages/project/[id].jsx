import Head from "next/head";
import { useRouter } from "next/router";
import ProjectCard from "../../components/ProjectCard";
import { data } from '../../constants/data';

const Id = () => {
    const router = useRouter();
    const { id } = router.query
    return (
        <div>
             <Head>
                <title>Saad | {data[id].name}</title>
                <meta name="description" content="Saad El Amri CV!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProjectCard data={data[id]} />
        </div>
    );
}

export default Id;
