import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Card.module.css';


const PortfolioCard = (props) => {
    const router = useRouter()
    // controlle le changement de page
    const handleClick = (e, id) => {
        e.preventDefault();
        id == 0 ? router.push("project/Gestion") : router.push("project/Meetease");
    }
    return (
        <div className={styles.card} onClick={(e) => handleClick(e, props.item.id)}>
           <Image src={props.item.image} className={styles.image} alt = "My application"/>
           <div>
            <span className={styles.projectTitle}>{props.item.name}</span>
            <p>{props.item.info}</p>
           </div>
        </div>
    );
}

export default PortfolioCard;