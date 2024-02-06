"use client"
import styles from "../../styles/_headerDesktop.module.sass"
import { Logo } from "../Logo/Logo";
import { NavDesktop } from "../Nav/NavDekstop";
import { CustomButton } from "../UI/Buttons/CustomButton";
import {useScrollChecker} from "../../customHooks/scrollChecker";
export const HeaderDesktop:React.FC<{color:"white" | "black"}> = ():JSX.Element => {
    const pageY = useScrollChecker();
    return (
        <header className={`${styles.header__desktop} ${pageY > 0 ? styles.header__desktop__scrolled : ""}`}>
            <div className={styles.header__desktop__nav}>
                <div className={styles.header__desktop__nav__logo}>
                    <Logo customStyles={{width:"auto", transform:"scale(0.7)", margin:"0", color: `${pageY > 0 ? "#000": "#fff"}`}}/>
                </div>
                <NavDesktop scrolled={pageY > 0 ? true : false}/>
            </div>
            <CustomButton path={'/contact'} text={"Napisz do mnie!"} color={pageY > 0 ? "black" : 'white'} icon={"mes"}/>
        </header>
    )
} 