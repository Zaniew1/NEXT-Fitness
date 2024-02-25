"use client"
import { motion } from 'framer-motion';
import classes from '../../styles/_contact.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
export const ContactSocials: React.FC = (): JSX.Element =>{
    
    return (
        <motion.div initial={{y: 250, x:100, opacity: 0}} whileInView={{y:0,x:0, opacity: 1}} className={classes.contact__socials} >
            <div className={classes.contact__socials__wrapper}>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+48726045084"  className={classes.contact__socials__wrapper__link}>+48 726 045 084</a>
            </div>
            <div className={classes.contact__socials__wrapper}>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:schmidt.klaudia1210@gmail.com" className={classes.contact__socials__wrapper__link}>schmidt.klaudia1210@gmail.com</a>
            </div>
            <div className={classes.contact__socials__wrapper}>
                <FontAwesomeIcon icon={faSquareFacebook} />
                <a href="https://www.facebook.com/trenerkakatowice" className={classes.contact__socials__wrapper__link} >Klaudia Schmidt - Trener personalny</a>
            </div>
            <div className={classes.contact__socials__wrapper}>
                <FontAwesomeIcon icon={faInstagram} />
                <a href="https://www.instagram.com/klaudia.sch/" className={classes.contact__socials__wrapper__link}>klaudia.sch</a>
            </div>
        </motion.div>
    )
}