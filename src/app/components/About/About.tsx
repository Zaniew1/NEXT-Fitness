"use client"
import { motion } from 'framer-motion';
import classes from '../../styles/_about.module.sass';
import { CustomImage } from '../UI/Image/CustomImage';
import { CustomHeader } from '../UI/Texts/CustomHeader';

import { CustomParagraph } from '../UI/Texts/CustomParagraph';
export const About:React.FC =():JSX.Element => {
    return(
        <section className={classes.about}>
          <CustomHeader text={"O mnie"}/>
          
              <motion.div viewport={{ once: true }} initial={{opacity: 0, y: 300 }} whileInView={{ opacity:100,  y: 0}}  className={classes.about__image}>
                    <CustomImage src={'/klaudia.jpg'} alt={'Obraz przedstawiający Klaudię Schmidt'} priority={false} quality={90}/>
              </motion.div>
              <motion.div viewport={{ once: true }} transition={{delay:0.6}}  initial={{opacity: 0, y:200}} whileInView={{ opacity:100, y:0}} className={classes.about__text}>
                <h3 className={classes.about__text__header}>Cześć! Jestem Klaudia</h3>
                <CustomParagraph customClass={classes.about__text__paragraph} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, maxime neque.isi aliquid, labore ratione, temporibus nam consequuntur repellendus repellat voluptas obcaecati illo iste at! o maxime asperiores reiciendis obcaecati, ab esse unde tempora et sint mollitia voluptate rem modi aperiam labore eius accusamus dolore at voluptatum cumque reprehenderit debitis qui ut fuga architecto? Quam."}/>
              </motion.div>
        </section>
    )
}