import styles from "../../styles/_navMobile.module.sass"
import Link from "next/link"
import { Socials } from "../Socials/Socials"
import { CustomButton } from "../UI/Buttons/CustomButton"
export const NavMobile:React.FC<{drop:boolean}> = (props):JSX.Element => {
    
    return (
        <nav className={`${styles.mobile} ${props.drop ? styles.mobile__active : ""}`}>
            <ul className={styles.mobile__list}>
                <Link href={'/'} className={styles.mobile__list__item}>Strona Główna</Link>
                <div className={styles.mobile__list__item__services}> Usługi:
                    <Link href={'/personal'} className={styles.mobile__list__item__services__item}> - Trening Personalny</Link>
                    <Link href={'/diet'} className={styles.mobile__list__item__services__item}> - Opieka Dietetyczna</Link>
                </div>
                <Link href={'#pricing'} scroll={true} className={styles.mobile__list__item}>Pakiety</Link>
                <Link href={'#opinions'} scroll={true} className={styles.mobile__list__item}>Opinie</Link>
                <Link href={'/contact'} className={styles.mobile__list__item}>Kontakt</Link>
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