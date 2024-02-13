"use client"
import classes from '../../styles/_gallery.module.sass';
import { motion } from 'framer-motion';
import { GallerySlider } from './GallerySlider';
export const Gallery = ():JSX.Element => {
    return(
        <section className={classes.gallery}>
            <div className={classes.gallery__slider}>
                <motion.div viewport={{ once: true }} initial={{x:200, y:200, opacity: 0}} whileInView={{x:0,y:0, opacity: 1}} className={classes.gallery__slider__overlapper}>
                    <GallerySlider/>
                </motion.div>
            </div>

        </section>
    );
}