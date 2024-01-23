import styles from '../../styles/_footer.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faHouse, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Logo } from '../Logo/Logo'
import { Socials } from '../Socials/Socials'
export const Footer = ():JSX.Element => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__wrapper}>

                <div className={styles.footer__logo}>
                    <Logo/>
                    <Socials/>
                </div>
                <div className={styles.footer__contact}>
                    <h3 className={styles.footer__contact__header}>Kontakt</h3>
                    <div className={styles.footer__contact__info}><FontAwesomeIcon className={styles.footer__contact__info__icons} icon={faPhone} />+48 501 909 984</div>
                    <div className={styles.footer__contact__info}><FontAwesomeIcon className={styles.footer__contact__info__icons} icon={faEnvelope} /> klaudiaSchmidt@gmail.com</div>
                    <div className={styles.footer__contact__info}><FontAwesomeIcon className={styles.footer__contact__info__icons} icon={faHouse} />ALTUS Uniwersytecka 13 Katowice</div>
                </div>
                <div className={styles.footer__nav}>
                    <ul className={styles.footer__nav__list}>
                        <li className={styles.footer__nav__list__item}>Strona Główna</li>
                        <li className={styles.footer__nav__list__item}>O mnie</li>
                        <li className={styles.footer__nav__list__item}>Pakiety</li>
                        <li className={styles.footer__nav__list__item}>Opinie</li>
                        <li className={styles.footer__nav__list__item}>Kontakt</li>
                    </ul>
                </div>
            </div>

            <div className={styles.footer__term}></div>
            <a className={styles.footer__term__link}>Regulamin strony</a>
            <div className={styles.footer__term__copy}>Klaudia Schmidt &copy; Wszystkie prawa zastrzeżone</div>
        </footer>
    )
} 