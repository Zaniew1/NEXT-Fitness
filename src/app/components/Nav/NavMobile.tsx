import styles from "../../styles/_navMobile.module.sass"
import { Socials } from "../Socials/Socials"
import { CustomButton } from "../UI/Buttons/CustomButton"
export const NavMobile:React.FC<{drop:boolean}> = (props):JSX.Element => {
    return (
        <nav className={`${styles.mobile} ${props.drop ? styles.mobile__active : ""}`}>
            <ul className={styles.mobile__list}>
                <li className={styles.mobile__list__item}>Strona Główna</li>
                <li className={styles.mobile__list__item}>O mnie</li>
                <li className={styles.mobile__list__item}>Pakiety</li>
                <li className={styles.mobile__list__item}>Opinie</li>
                <li className={styles.mobile__list__item}>Kontakt</li>
            </ul>
            <div className={styles.mobile__tel}>
                <CustomButton text={"Zadzwoń do mnie!"} path={"tel:+48503954333"} color={"black"} icon={"tel"}/>
            </div>
            <div className={styles.mobile__socials}>
                <Socials customStyle={{color:"#000", transform:"scale(1.8)"}}/>
            </div>
        </nav>
    )
}