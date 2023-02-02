import Image from 'next/image';
import styles from '../styles/Card.module.css';


const PortfolioCard = (props) => {
    const handleClick = (e, id) => {
        e.preventDefault();
        id == 0 ? props.setPage("gestion") : props.setPage("meetease");
    }
    return (
        <div className={styles.card} onClick={(e) => handleClick(e, props.item.id)}>
           <Image src={props.item.image} className={styles.image} />
           <div>
            <span className={styles.projectTitle}>{props.item.name}</span>
            <p>{props.item.info}</p>
           </div>
        </div>
    );
}

export default PortfolioCard;
