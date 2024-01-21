import styles from "../../styles/_navDesktop.module.sass"
export const NavDesktop:React.FC<{scrolled:boolean}> = (props):JSX.Element => {
    return (
        <nav className={`${styles.desktop} ${ props.scrolled ? styles.desktop__scrolled: ""}`}>
             <ul className={styles.desktop__list}>
                <li className={styles.desktop__list__item}>Strona Główna</li>
                <li className={styles.desktop__list__item}>O mnie</li>
                <li className={styles.desktop__list__item}>Pakiety</li>
                <li className={styles.desktop__list__item}>Opinie</li>
                <li className={styles.desktop__list__item}>Kontakt</li>
            </ul>
        </nav>
    )
}