"use client"
import { motion } from 'framer-motion';
import classes from '.././../styles/_plan.module.sass'
import { CustomImage } from '../UI/Image/CustomImage';
export const Plan = ():JSX.Element => {
    return (
        <div className={classes.plan} >
            <motion.div viewport={{ once: true }} initial={{y: -100, opacity: 0}} whileInView={{y:0, opacity: 1}} className={classes.plan__intro}>
                <div className={classes.plan__intro__text}>

                    <h3 className={classes.plan__intro__text__header}>Plan Treningowy</h3>
                    <p className={classes.plan__intro__text__paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, libero eius vel quasi, cum quisquam modi sapiente consectetur repellendus perferendis pariatur similique possimus, eligendi totam ipsum eaque voluptatibus sunt deleniti.
                        Iure atque, similique sint aperiam error reiciendis necessitatibus delectus a nemo vero ipsam non harum ut alias, illo beatae, asperiores eveniet voluptates corporis ratione porro fugit voluptatibus cupiditate dolores! Saepe.</p>
                </div>
                <div className={classes.plan__intro__img}>
                    <CustomImage src={'/plan.jpg'} alt={''} quality={50} priority={false}/>
                </div>
            </motion.div>
            <motion.div viewport={{ once: true }} initial={{y: -100, opacity: 0}} whileInView={{y:0, opacity: 1}} className={classes.plan__info}>
                <h3 className={classes.plan__info__header}>Co Trzeba wiedzieć ?</h3>
                <ul className={classes.plan__info__list}>
                    <li className={classes.plan__info__list__item}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum qui nulla ullam ratione. Similique laborum inventore magni provident ullam, corrupti ab sint eveniet suscipit quibusdam quaerat non labore minus beatae!</li>
                    <li className={classes.plan__info__list__item}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque reiciendis consequuntur ad dolore! Id necessitatibus itaque nulla quos. Nemo esse nesciunt aut, dignissimos deleniti quibusdam error quisquam laborum tenetur.</li>
                    <li className={classes.plan__info__list__item}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque reiciendis consequuntur ad dolore! Id necessitatibus itaque nulla quos. Nemo esse nesciunt aut, dignissimos deleniti quibusdam error quisquam laborum tenetur.</li>
                    <li className={classes.plan__info__list__item}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque reiciendis consequuntur ad dolore! Id necessitatibus itaque nulla quos. Nemo esse nesciunt aut, dignissimos deleniti quibusdam error quisquam laborum tenetur.</li>
                    <li className={classes.plan__info__list__item}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque reiciendis consequuntur ad dolore! Id necessitatibus itaque nulla quos. Nemo esse nesciunt aut, dignissimos deleniti quibusdam error quisquam laborum tenetur.</li>
                    <li className={classes.plan__info__list__item}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque reiciendis consequuntur ad dolore! Id necessitatibus itaque nulla quos. Nemo esse nesciunt aut, dignissimos deleniti quibusdam error quisquam laborum tenetur.</li>
                </ul>
                <h3 className={classes.plan__info__header}>Dodatkowo otrzymasz ode mnie:</h3>
                <ul className={classes.plan__info__list}>
                    <li className={classes.plan__info__list__item}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet similique temporibus rerum provident at, quos quis corporis aspernatur libero consequuntur facere molestias unde excepturi sunt laudantium aliquam, quas ex ipsam.</li>
                    <li className={classes.plan__info__list__item}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet similique temporibus rerum provident at, quos quis corporis aspernatur libero consequuntur facere molestias unde except</li>
                    <li className={classes.plan__info__list__item}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet similique temporibus rerum provident at, quos quis corporis aspernatur libero consequuntur facere molestias unde except</li>
                </ul>
            </motion.div>
        </div>
    );
}