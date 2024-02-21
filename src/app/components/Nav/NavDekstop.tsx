import styles from "../../styles/_navDesktop.module.sass"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
export const NavDesktop:React.FC<{scrolled:boolean}> = (props):JSX.Element => {
    return (
        <nav className={`${styles.desktop} ${ props.scrolled ? styles.desktop__scrolled: ""}`}>
             <ul className={styles.desktop__list}>
                <Link href={'/'} className={styles.desktop__list__item}>Strona Główna</Link>
                <div className={styles.desktop__list__item__services}><FontAwesomeIcon className={styles.desktop__list__item__services__icon} icon={faCaretDown} /> Usługi
                    <div className={styles.desktop__list__item__services__wrapper}>
                        <Link href={'/personal'} className={styles.desktop__list__item__services__wrapper__item}> - Trening Personalny</Link>
                        <Link href={'/plan'} className={styles.desktop__list__item__services__wrapper__item}> - Plan Treningowy</Link>
                        <Link href={'/diet'} className={styles.desktop__list__item__services__wrapper__item}> - Opieka Dietetyczna</Link>
                    </div>
                </div>
                <Link href={'/#pricing'} scroll={true} className={styles.desktop__list__item}>Pakiety</Link>
                <Link href={'/#opinions'} scroll={true} className={styles.desktop__list__item}>Opinie</Link>
                <Link href={'/contact'} className={styles.desktop__list__item}>Kontakt</Link>
            </ul>
        </nav>
    )
}