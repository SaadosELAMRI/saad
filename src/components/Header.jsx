import Image from "next/image";
import Menu from "./Menu";

import logo from "../../public/logo.png"
import styles from "../styles/Header.module.css"

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.container}>
            <Image src={logo} alt="Logo" className={styles.logo} />
            <h1 className={styles.titre}>Saad El Amri</h1>
            <Menu  />
        </div>
    </header>
}