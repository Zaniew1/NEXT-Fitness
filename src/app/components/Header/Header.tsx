import styles from '../../styles/_header.module.sass'
export const Header:React.FC<{customStyles?:{}}> = (props):JSX.Element => {
    return (
        <header className={styles.header} style={props.customStyles}>
             <p className={styles.header__name}>Klaudia Schmidt</p> 
             <p className={styles.header__trainer}>Trener Personalny</p> 
        </header>
    )
}