import styles from '../../styles/_footer.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faHouse, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Logo } from '../Logo/Logo'
import Link from 'next/link'
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
                        <Link href={'/'} className={styles.footer__nav__list__item}>Strona Główna</Link>
                        <Link href={'#personal'} className={styles.footer__nav__list__item}>Trening Personalny</Link>
                        <Link href={'#diet'} className={styles.footer__nav__list__item}>Dieta</Link>
                        <Link href={'#about'} className={styles.footer__nav__list__item}>O mnie</Link>
                        <Link href={'#pricing'} className={styles.footer__nav__list__item}>Pakiety</Link>
                        <Link href={'/#opinions'} className={styles.footer__nav__list__item}>Opinie</Link>
                        <Link href={'/contact'} className={styles.footer__nav__list__item}>Kontakt</Link>
                    </ul>
                </div>
            </div>

            <div className={styles.footer__term}></div>
            <a className={styles.footer__term__link}>Regulamin strony</a>
            <div className={styles.footer__term__copy}>Klaudia Schmidt &copy; Wszystkie prawa zastrzeżone</div>
        </footer>
    )
} 