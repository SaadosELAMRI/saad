import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Card.module.css';


const PortfolioCard = ({item}) => {
    const router = useRouter();
    const handleClick = (e, id) => {
        e.preventDefault()
        router.push(`/project/${encodeURIComponent(item.id)}`)
    }
    return (
        <div className={styles.card} onClick={(e) => handleClick(e, item.id)}>
           <Image src={item.image} className={styles.image} />
           <div>
            <span className={styles.projectTitle}>{item.name}</span>
            <p>{item.info}</p>
           </div>
        </div>
    );
}

export default PortfolioCard;
