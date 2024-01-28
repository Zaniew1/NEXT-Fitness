import styles from '../../styles/_logo.module.sass'
import Link from 'next/link'
export const Logo:React.FC<{customStyles?:{}}> = (props):JSX.Element => {
    return (
        <Link href={'/'} className={styles.logo} style={props.customStyles}>
             <p className={styles.logo__name}>Klaudia Schmidt</p> 
             <p className={styles.logo__trainer}>Trener Personalny</p> 
        </Link>
    )
}