import { CustomImage } from "../UI/Image/CustomImage";
import classes from '../../styles/_singlePicture.module.sass'
export const SinglePicture:React.FC<{img:string, stage:string}> = (props):JSX.Element => {
    return (
        <>
            <p className={classes.text}>{props.stage}</p>
            <div className={classes.image}>
                <CustomImage src={props.img ?? ''} alt={'Zdjęcie przemiany podopiecznej Klaudii'} priority={false} quality={60}/>
            </div>
        </>
    );
}