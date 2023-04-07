import Footer from "./Footer";
import Header from "./Header";
import styles from '../styles/Layout.module.css';


// le component wrapper (parent)

// passe le  hook set page qui controlle la page presente
//
//    render the sub component 

export default function Layout({children}) {
    return <div className={styles.layout}>
        <Header />
        {children}
        <Footer />
    </div>
}