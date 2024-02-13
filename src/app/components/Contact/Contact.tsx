"use client"
import { motion } from 'framer-motion';
import classes from '../../styles/_contact.module.sass'
import { ContactText } from './ContactText';
import { ContactSocials } from './ContactSocials';
import { ContactMap } from './ContactMap';
import { ContactForm } from './ContactForm';
// import { CustomImage } from '../UI/Image/CustomImage';
export const Contact: React.FC = (): JSX.Element =>{
    
    return (
        <div className={classes.contact__section}>
            <div className={classes.contact}>
            <motion.h3 viewport={{ once: true }} initial={{y: -100, opacity: 0}} whileInView={{y:0, opacity: 1}}  className={classes.contact__header}>Kontakt</motion.h3>
            <ContactText/>
            <ContactSocials/>
            <ContactForm/>
            <ContactMap/>
        </div>
        </div>
    )
}