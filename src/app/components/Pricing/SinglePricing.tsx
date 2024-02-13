"use client"
import Link from 'next/link'
import classes from '../../styles/_singlePricing.module.sass'
import {motion} from 'framer-motion'
import { CustomButton } from '../UI/Buttons/CustomButton'
export const SinglePricing:React.FC<{header:string, subHeader:string, price:number, paragraph: string[]}> = (props):JSX.Element => {
    return (
        <motion.div  initial={{y: 250}} whileInView={{ y:0}} viewport={{ once: true }} className={classes.single__pricing}>
            <div className={classes.single__pricing__wrapper}>
                <h3 className={classes.single__pricing__wrapper__header}>{props.header}</h3>
                <p className={classes.single__pricing__wrapper__subheader}>{props.subHeader}</p>
                <p className={classes.single__pricing__wrapper__price}>{props.price + " zł"}</p>
                <ul className={classes.single__pricing__wrapper__list}>
                    {props.paragraph.map(el => {
                        return <li className={classes.single__pricing__wrapper__list__item} key={el+Math.random()}>{el}</li>
                    })}
                </ul>
            </div>
            <div className={classes.single__pricing__button}>
                <CustomButton path={'/contact'} text={"Wybieram"} color={'black'} />
            </div>
        </motion.div>
    )
}