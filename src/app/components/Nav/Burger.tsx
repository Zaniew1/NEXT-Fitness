import styles from "../../styles/_burger.module.sass"
export const Burger:React.FC<{dropFunc:()=>void, drop:boolean}> = (props):JSX.Element => {

    return (
            <div onClick={props.dropFunc} className={`${styles.burger} ${props.drop ? styles.burger__active:""}`}>
                <span className={styles.burger__item}></span>
            </div>
    )
}