import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import styles from '../../styles/_socials.module.sass'
export const Socials = ():JSX.Element =>{

    return (
        <ul className={styles.socials}>
            <li className={styles.socials__icons}> <FontAwesomeIcon icon={faSquareFacebook} /></li>
            <li className={styles.socials__icons}> <FontAwesomeIcon icon={faInstagram} /></li>
        </ul>
    )
}