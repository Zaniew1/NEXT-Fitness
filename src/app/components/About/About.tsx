"use client"
import { motion } from 'framer-motion';
import classes from '../../styles/_about.module.sass';
import { CustomImage } from '../UI/Image/CustomImage';
export const About:React.FC =():JSX.Element => {
    return(
        <section className={classes.about}>

          <motion.div viewport={{ once: true }} initial={{opacity: 0, y: 300 }} whileInView={{ opacity:100,  y: 0}}  className={classes.about__image}>
                <CustomImage src={'/klaudia.jpg'} alt={'Obraz przedstawiający Klaudię Schmidt'} priority={false} quality={90}/>
          </motion.div>
          <motion.div viewport={{ once: true }} transition={{delay:0.2}}  initial={{opacity: 0, y:200}} whileInView={{ opacity:100, y:0}} className={classes.about__text}>
            <h3 className={classes.about__text__section}>O mnie</h3>          
            <h4 className={classes.about__text__header}>Cześć, nazywam się Klaudia Schmidt</h4>
            <p className={classes.about__text__paragraph}>Jako doświadczona trenerka personalna oraz była zawodniczka sportów sylwetkowych od wielu lat motywuje i pomagam podopiecznym w osiąganiu ich celów zdrowotnych i sylwetkowych. Posiadam wiedzę z zakresu treningu siłowego, funkcjonalnego, medycznego oraz treningu kobiet w ciąży i po ciąży. 

            </p>
            <p className={classes.about__text__paragraph}>W swojej pracy wykorzystuje szereg wyspecjalizowanych metod treningowych, które w połączeniu z odpowiednim żywieniem i współpraca, mają przynieść założone efekty. 
            </p>
          </motion.div>

        </section>  
    )
}