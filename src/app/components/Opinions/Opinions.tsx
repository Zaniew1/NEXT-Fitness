'use client'
import classes from "../../styles/_opinions.module.sass";
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OpinionSlider } from "./OpinionSlider";
export const Opinions:React.FC = () :JSX.Element => {

    return (
        <section id="opinions" className={classes.opinions}>
            <motion.div viewport={{ once: true }} initial={{y:200, opacity: 0}} whileInView={{y:0, opacity: 1}}  className={classes.opinions__slider}>
                <div className={classes.opinions__slider__info}>
                    <h3 className={classes.opinions__slider__info__header}>Opinie</h3>
                </div>
                <div className={classes.opinions__slider__overlapper}>
                    <OpinionSlider/>
                </div>
            </motion.div>
        </section>
    );
}
