import styles from '../../styles/_footer.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faHouse, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Header } from '../Header/Header'
import { Socials } from '../Socials/Socials'
export const Footer = ():JSX.Element => {
    return (
        <footer className={styles.footer}>
            <Header/>
            <Socials/>
            <div className={styles.footer__wrapper}>
                <h3 className={styles.footer__contact}>Kontakt</h3>
                <div className={styles.footer__info}><FontAwesomeIcon className={styles.footer__icons} icon={faPhone} />+48 501 909 984</div>
                <div className={styles.footer__info}><FontAwesomeIcon className={styles.footer__icons} icon={faEnvelope} /> klaudiaSchmidt@gmail.com</div>
                <div className={styles.footer__info}><FontAwesomeIcon className={styles.footer__icons} icon={faHouse} />ALTUS Uniwersytecka 13 Katowice</div>
            </div>
            <a className={styles.footer__terms}>Regulamin strony</a>
            <div className={styles.footer__copy}>Klaudia Schmidt &copy; Wszystkie prawa zastrzeżone</div>
        </footer>
    )
} 