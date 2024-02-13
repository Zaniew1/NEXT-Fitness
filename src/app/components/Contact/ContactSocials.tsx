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
        </motion.div>
    )
}