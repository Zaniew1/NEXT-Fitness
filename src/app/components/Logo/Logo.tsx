import styles from '../../styles/_logo.module.sass'
export const Logo:React.FC<{customStyles?:{}}> = (props):JSX.Element => {
    return (
        <div className={styles.logo} style={props.customStyles}>
             <p className={styles.logo__name}>Klaudia Schmidt</p> 
             <p className={styles.logo__trainer}>Trener Personalny</p> 
        </div>
    )
}