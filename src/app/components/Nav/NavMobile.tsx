import styles from "../../styles/_navMobile.module.sass"
import { Socials } from "../Socials/Socials"
export const NavMobile:React.FC<{drop:boolean}> = (props):JSX.Element => {
    return (
        <nav className={`${styles.mobile} ${props.drop ? styles.mobile__active : ""}`}>
            <ul className={styles.mobile__list}>
                <li className={styles.mobile__item}>Strona Główna</li>
                <li className={styles.mobile__item}>O mnie</li>
                <li className={styles.mobile__item}>Kontakt</li>
                <li className={styles.mobile__item}>Pakiety</li>
            </ul>
            <div className={styles.mobile__socials}>
                <Socials customStyle={{color:"#000", transform:"scale(1.3)"}}/>
            </div>
        </nav>
    )
}