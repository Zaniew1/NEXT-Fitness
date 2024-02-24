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
            <h4 className={classes.about__text__header}>Cześć! Jestem Klaudia</h4>
            <p className={classes.about__text__paragraph}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, maxime neque.isi aliquid,
              labore ratione, temporibus nam consequuntur repellendus repellat voluptas obcaecati illo iste at! o maxime asperiores reiciendis obcaecati, 
              ut fuga architecto? Quam.
            </p>
            <p className={classes.about__text__paragraph}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, maxime neque.isi aliquid,
              labore ratione, temporibus nam consequuntur repellendus repellat voluptas obcaecati illo iste at! o maxime asperiores reiciendis obcaecati, 
              ut fuga architecto? Quam.
            </p>
          </motion.div>

        </section>  
    )
}