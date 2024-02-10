import { CustomImage } from "../../UI/Image/CustomImage"
import classes from '../../../styles/_singleTrainings.module.sass'
import { CustomHeader } from "../../UI/Texts/CustomHeader"
import { CustomParagraph } from "../../UI/Texts/CustomParagraph"
import { CustomButton } from "../../UI/Buttons/CustomButton"
export const SingleTraining:React.FC<{img:string, alt:string, header: string, paragraph:string, path:string}> = (props):JSX.Element => {
    return(
        <div className={classes.single__training}>
                <div className={classes.single__training__img}>
                    <CustomImage src={props.img} alt={props.alt} sizes={''} priority={false} quality={50} />
                </div>
                <div className={classes.single__training__text}>
                    <h3 className={classes.single__training__text__header} >{props.header}</h3>
                    <p className={classes.single__training__text__paragraph}>{props.paragraph}</p>
                </div>
        </div>
    )
}