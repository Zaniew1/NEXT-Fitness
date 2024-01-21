"use client"
import { Logo } from "../Logo/Logo"
import styles from "../../styles/_headerMobile.module.sass"
import { NavMobile } from "../Nav/NavMobile"
import { Burger } from "../Nav/Burger"
import { useState } from "react"
export const HeaderMobile = ():JSX.Element => {
    const [dropNav, setDropNav] = useState<boolean>(false)
    const clickDropHandler = () => {setDropNav(!dropNav)}
    return (
        <header className={styles.header__mobile}>
            <div className={styles.header__mobile__logo}>
                <Logo customStyles={{transform:"scale(0.7)", margin:"0"}}/>
            </div>
            <Burger dropFunc={clickDropHandler} drop={dropNav}/>
            <NavMobile drop={dropNav}/>
        </header>
    )
} 