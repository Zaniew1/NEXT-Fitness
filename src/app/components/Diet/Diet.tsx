"use client"
import { motion } from 'framer-motion';
import classes from '.././../styles/_diet.module.sass'
import { CustomImage } from '../UI/Image/CustomImage';
export const Diet = ():JSX.Element => {
    return (
        <div className={classes.diet} >
            
            <motion.div viewport={{ once: true }} initial={{y: -100, opacity: 0}} whileInView={{y:0, opacity: 1}} className={classes.diet__intro}>
                <div className={classes.diet__intro__text}>

                    <h3 className={classes.diet__intro__text__header}>Opieka Dietetyczna</h3>
                    <p className={classes.diet__intro__text__paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, libero eius vel quasi, cum quisquam modi sapiente consectetur repellendus perferendis pariatur similique possimus, eligendi totam ipsum eaque voluptatibus sunt deleniti.
                        Iure atque, similique sint aperiam error reiciendis necessitatibus delectus a nemo vero ipsam non harum ut alias, illo beatae, asperiores eveniet voluptates corporis ratione porro fugit voluptatibus cupiditate dolores! Saepe.</p>
                </div>
                <div className={classes.diet__intro__img}>
                    <CustomImage src={'/diet.jpg'} alt={''} quality={50} priority={false}/>
                </div>
            </motion.div>
            <motion.div viewport={{ once: true }} initial={{y: -100, opacity: 0}} whileInView={{y:0, opacity: 1}} className={classes.diet__info}>
                <h3 className={classes.diet__info__header}>Co Trzeba wiedzieć ?</h3>
                <ul className={classes.diet__info__list}>
                    <li className={classes.diet__info__list__item}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum qui nulla ullam ratione. Similique laborum inventore magni provident ullam, corrupti ab sint eveniet suscipit quibusdam quaerat non labore minus beatae!</li>
                    <li className={classes.diet__info__list__item}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque reiciendis consequuntur ad dolore! Id necessitatibus itaque nulla quos. Nemo esse nesciunt aut, dignissimos deleniti quibusdam error quisquam laborum tenetur.</li>
                    <li className={classes.diet__info__list__item}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque reiciendis consequuntur ad dolore! Id necessitatibus itaque nulla quos. Nemo esse nesciunt aut, dignissimos deleniti quibusdam error quisquam laborum tenetur.</li>
                    <li className={classes.diet__info__list__item}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque reiciendis consequuntur ad dolore! Id necessitatibus itaque nulla quos. Nemo esse nesciunt aut, dignissimos deleniti quibusdam error quisquam laborum tenetur.</li>
                    <li className={classes.diet__info__list__item}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque reiciendis consequuntur ad dolore! Id necessitatibus itaque nulla quos. Nemo esse nesciunt aut, dignissimos deleniti quibusdam error quisquam laborum tenetur.</li>
                    <li className={classes.diet__info__list__item}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque reiciendis consequuntur ad dolore! Id necessitatibus itaque nulla quos. Nemo esse nesciunt aut, dignissimos deleniti quibusdam error quisquam laborum tenetur.</li>
                </ul>
                <h3 className={classes.diet__info__header}>Dodatkowo otrzymasz ode mnie:</h3>
                <ul className={classes.diet__info__list}>
                    <li className={classes.diet__info__list__item}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet similique temporibus rerum provident at, quos quis corporis aspernatur libero consequuntur facere molestias unde excepturi sunt laudantium aliquam, quas ex ipsam.</li>
                    <li className={classes.diet__info__list__item}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet similique temporibus rerum provident at, quos quis corporis aspernatur libero consequuntur facere molestias unde except</li>
                    <li className={classes.diet__info__list__item}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet similique temporibus rerum provident at, quos quis corporis aspernatur libero consequuntur facere molestias unde except</li>
                </ul>
            </motion.div>
        </div>
    );
}