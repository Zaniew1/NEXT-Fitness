"use client"
import { motion } from 'framer-motion';
import classes from '../../styles/_contact.module.sass'
export const ContactText: React.FC = (): JSX.Element =>{
    
    return (
        <div className={classes.contact__text } >
            <motion.p viewport={{ once: true }} initial={{x: -200, opacity: 0}} whileInView={{x:0, opacity: 1}} className={classes.contact__text__paragraph }>W celu skontaktowania się ze mną podaję numer telefonu i adres e-mail.</motion.p>
            <motion.p viewport={{ once: true }} initial={{x: 200, opacity: 0}} whileInView={{x:0, opacity: 1}} className={classes.contact__text__paragraph }>W przypadku nie odbierania telefonu proszę o ponowny kontakt. Podczas treningów nie zawsze trener personalny ma możliwość prowadzenia rozmowy telefonicznej.</motion.p>
            <motion.p viewport={{ once: true }} initial={{x: -200, opacity: 0}} whileInView={{x:0, opacity: 1}} className={classes.contact__text__paragraph }>Na wiadomości mailowe / FB / Instagram / smsy odpowiadam na bieżąco.</motion.p>
            <motion.p viewport={{ once: true }} initial={{x: 200, opacity: 0}} whileInView={{x:0, opacity: 1}} className={classes.contact__text__paragraph }>Treningi personalne prowadzę 6 dni w tygodniu w godzinach 6-21.</motion.p>
            <motion.p viewport={{ once: true }} initial={{x: -200, opacity: 0}} whileInView={{x:0, opacity: 1}} className={classes.contact__text__paragraph }>Serdecznie zapraszam do współpracy. </motion.p>
        </div>
    )
}