import classes from '../../styles/_contact.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
export const ContactSocials: React.FC = (): JSX.Element =>{
    
    return (
        <div className={classes.contact__socials} >
            <div className={classes.contact__socials__wrapper}>
                <FontAwesomeIcon icon={faPhone} />
                <a href=""  className={classes.contact__socials__wrapper__link}>+48 123 123 123</a>
            </div>
            <div className={classes.contact__socials__wrapper}>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="" className={classes.contact__socials__wrapper__link}>Gmail@www.pl</a>
            </div>
            <div className={classes.contact__socials__wrapper}>
                <FontAwesomeIcon icon={faSquareFacebook} />
                <a href="" className={classes.contact__socials__wrapper__link} >facebook</a>
            </div>
            <div className={classes.contact__socials__wrapper}>
                <FontAwesomeIcon icon={faInstagram} />
                <a href="" className={classes.contact__socials__wrapper__link}>+48 123 123 123</a>
            </div>
        </div>
    )
}