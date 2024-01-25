import { CustomImage } from "../UI/Image/CustomImage"
import classes from '../../styles/_singleTrainings.module.sass'
export const SingleTraining:React.FC<{img:string, alt:string, header: string, paragraph:string, path:string}> = (props):JSX.Element => {
    return(
        <div className={classes.single__training}>
                {/* <CustomImage src={props.img} alt={props.alt} sizes={''} priority={false} quality={50} /> */}
                <h3 className={classes.single__training__header} >{props.header}</h3>
                <p className={classes.single__training__paragraph} >{props.paragraph}</p>
                <button className={classes.single__training__button} >Szczegóły</button>
        </div>
    )
}