import Link from 'next/link'
import classes from '../../styles/_singlePricing.module.sass'
import { CustomButton } from '../UI/Buttons/CustomButton'
export const SinglePricing:React.FC<{header:string, subHeader:string, price:number, paragraph: string[]}> = (props):JSX.Element => {
    return (
        <div className={classes.single__pricing}>
            <h3 className={classes.single__pricing__header}>{props.header}</h3>
            <p className={classes.single__pricing__subheader}>{props.subHeader}</p>
            <p className={classes.single__pricing__price}>{props.price + " zł"}</p>
            <ul className={classes.single__pricing__list}>
                {props.paragraph.map(el => {
                    return <li className={classes.single__pricing__list__item} key={el+Math.random()}>{el}</li>
                })}
            </ul>
            <div className={classes.single__pricing__button}>
                <CustomButton path={'/contact'} text={"Wybieram"} color={'black'} />
            </div>
        </div>
    )
}