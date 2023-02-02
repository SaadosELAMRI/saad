import Footer from "./Footer";
import Header from "./Header";
import styles from '../styles/Layout.module.css';

export default function Layout(props) {
    return <div className={styles.layout}>
        <Header setPage={props.setPage} />

        {props.children}

        <Footer />
    </div>
}