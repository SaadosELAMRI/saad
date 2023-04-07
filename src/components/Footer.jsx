import { useState } from "react"
import styles from "../styles/Footer.module.css"

export default function Footer() {
    //utilise le hook usestate pour changer la visibilte du email
    const [showEmail, setShowEmail] = useState(false);
    const year = new Date().getFullYear()
    return <footer className={styles.footer}>
        <div className={styles.container}>
            <span className={styles.name}>Saad El-Amri</span>
            {
                showEmail ?     <span className={styles.email}>saadoselamri@gmail.com</span> : <button className={styles.contactBtn} onClick={() => setShowEmail(true)}>Contact Email</button>
            }
        
            <span className={styles.copyright}>©&nbsp;{year} by Saad El-amri. </span>
        </div>
    </footer>
}